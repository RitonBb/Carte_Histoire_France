#!/usr/bin/env node

/**
 * Script de récupération d'événements historiques depuis Wikidata et Wikipedia
 * Priorité : QUALITÉ > QUANTITÉ
 * 
 * Ce script interroge les APIs Wikidata et Wikipedia pour récupérer
 * des événements historiques de France avec toutes les informations nécessaires :
 * - Titre
 * - Description détaillée
 * - Coordonnées géographiques précises
 * - Date exacte
 * - Sources vérifiables
 */

const https = require('https');
const fs = require('fs');

class HistoricalEventFetcher {
    constructor() {
        this.wikidataEndpoint = 'https://www.wikidata.org/w/api.php';
        this.wikipediaEndpoint = 'https://fr.wikipedia.org/w/api.php';
        this.sparqlEndpoint = 'https://query.wikidata.org/sparql';
        this.events = [];
        this.dataFilePath = './data.js';
    }

    /**
     * Effectue une requête HTTPS
     */
    async httpRequest(url) {
        return new Promise((resolve, reject) => {
            https.get(url, (res) => {
                let data = '';
                
                res.on('data', (chunk) => {
                    data += chunk;
                });
                
                res.on('end', () => {
                    try {
                        resolve(JSON.parse(data));
                    } catch (error) {
                        reject(error);
                    }
                });
            }).on('error', (error) => {
                reject(error);
            });
        });
    }

    /**
     * Requête SPARQL vers Wikidata pour obtenir des événements historiques français de qualité
     * Filtre appliqué :
     * - Événements en France (P17: Q142)
     * - Avec coordonnées géographiques (P625)
     * - Avec date (P585)
     * - Avec description en français
     */
    async queryWikidataEvents(limit = 50) {
        console.log('🔍 Recherche d\'événements historiques sur Wikidata...\n');

        const sparqlQuery = `
SELECT DISTINCT ?event ?eventLabel ?eventDescription ?coord ?date ?countryLabel ?locationLabel WHERE {
  # Événements historiques
  ?event wdt:P31/wdt:P279* wd:Q1190554 .  # instance de événement historique
  
  # Liés à la France
  {
    ?event wdt:P17 wd:Q142 .  # pays: France
  } UNION {
    ?event wdt:P276 ?location .  # lieu
    ?location wdt:P17 wd:Q142 .  # lieu en France
  }
  
  # Avec coordonnées géographiques
  ?event wdt:P625 ?coord .
  
  # Avec date
  ?event wdt:P585 ?date .
  
  # Avec description en français
  FILTER(EXISTS {
    ?event schema:description ?desc .
    FILTER(LANG(?desc) = "fr")
  })
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "fr,en". }
}
LIMIT ${limit}
        `.trim();

        const url = `${this.sparqlEndpoint}?query=${encodeURIComponent(sparqlQuery)}&format=json`;

        try {
            const data = await this.httpRequest(url);
            console.log(`✅ ${data.results.bindings.length} événements trouvés sur Wikidata\n`);
            return data.results.bindings;
        } catch (error) {
            console.error('❌ Erreur lors de la requête SPARQL:', error.message);
            return [];
        }
    }

    /**
     * Extrait les coordonnées depuis le format Wikidata
     */
    parseCoordinates(coordString) {
        // Format: "Point(longitude latitude)"
        const match = coordString.match(/Point\(([^ ]+) ([^ ]+)\)/);
        if (match) {
            return [parseFloat(match[2]), parseFloat(match[1])]; // [lat, lng]
        }
        return null;
    }

    /**
     * Extrait l'année depuis une date
     */
    extractYear(dateString) {
        const match = dateString.match(/^(-?\d+)/);
        return match ? parseInt(match[1]) : null;
    }

    /**
     * Détermine la période historique basée sur l'année
     */
    determinePeriod(year) {
        if (year < 476) return 'antiquite';
        if (year < 1492) return 'moyen-age';
        if (year < 1610) return 'renaissance';
        if (year < 1789) return 'ancien-regime';
        if (year < 1799) return 'revolution';
        if (year < 1815) return 'empire';
        if (year < 1914) return '19e-siecle';
        if (year < 2000) return '20e-siecle';
        return 'contemporain';
    }

    /**
     * Catégorise l'événement en fonction de son type
     */
    categorizeEvent(description, title) {
        const text = (description + ' ' + title).toLowerCase();
        
        if (text.includes('bataille') || text.includes('guerre') || text.includes('combat')) {
            return 'Bataille';
        }
        if (text.includes('traité') || text.includes('politique') || text.includes('loi')) {
            return 'Politique';
        }
        if (text.includes('église') || text.includes('religion') || text.includes('sacre')) {
            return 'Religieux';
        }
        if (text.includes('construction') || text.includes('château') || text.includes('cathédrale')) {
            return 'Architecture';
        }
        if (text.includes('révolution') || text.includes('révolte')) {
            return 'Révolution';
        }
        if (text.includes('mouvement social') || text.includes('grève')) {
            return 'Sociale';
        }
        if (text.includes('pont') || text.includes('tunnel') || text.includes('infrastructure')) {
            return 'Infrastructure';
        }
        
        return 'Politique'; // Catégorie par défaut
    }

    /**
     * Récupère un résumé détaillé depuis Wikipedia
     */
    async getWikipediaSummary(title) {
        const url = `${this.wikipediaEndpoint}?action=query&prop=extracts&exintro=true&explaintext=true&titles=${encodeURIComponent(title)}&format=json`;
        
        try {
            const data = await this.httpRequest(url);
            const pages = data.query.pages;
            const pageId = Object.keys(pages)[0];
            
            if (pageId !== '-1' && pages[pageId].extract) {
                // Limiter la description à 300 caractères pour la qualité
                let extract = pages[pageId].extract;
                if (extract.length > 300) {
                    extract = extract.substring(0, 297) + '...';
                }
                return extract;
            }
        } catch (error) {
            console.error(`⚠️  Erreur Wikipedia pour "${title}":`, error.message);
        }
        
        return null;
    }

    /**
     * Obtient l'ID Wikidata depuis une URL
     */
    extractWikidataId(url) {
        const match = url.match(/\/entity\/(Q\d+)$/);
        return match ? match[1] : null;
    }

    /**
     * Obtient le titre Wikipedia depuis Wikidata
     */
    async getWikipediaTitle(wikidataId) {
        const url = `${this.wikidataEndpoint}?action=wbgetentities&ids=${wikidataId}&props=sitelinks&format=json`;
        
        try {
            const data = await this.httpRequest(url);
            const entity = data.entities[wikidataId];
            
            if (entity && entity.sitelinks && entity.sitelinks.frwiki) {
                return entity.sitelinks.frwiki.title;
            }
        } catch (error) {
            console.error(`⚠️  Erreur pour obtenir le titre Wikipedia de ${wikidataId}:`, error.message);
        }
        
        return null;
    }

    /**
     * Valide la qualité d'un événement
     */
    validateEvent(event) {
        // Vérifications de qualité strictes
        if (!event.title || event.title.length < 5) {
            return false;
        }
        if (!event.description || event.description.length < 50) {
            return false;
        }
        if (!event.coordinates || event.coordinates.length !== 2) {
            return false;
        }
        if (!event.year || isNaN(event.year)) {
            return false;
        }
        if (!event.location) {
            return false;
        }
        if (!event.sources || event.sources.length === 0) {
            return false;
        }
        
        return true;
    }

    /**
     * Traite un événement Wikidata et l'enrichit
     */
    async processEvent(wikidataEvent, index, total) {
        const wikidataId = this.extractWikidataId(wikidataEvent.event.value);
        const title = wikidataEvent.eventLabel.value;
        
        console.log(`[${index + 1}/${total}] 📋 Traitement: ${title}`);

        // Extraire les données de base
        const coordinates = this.parseCoordinates(wikidataEvent.coord.value);
        const dateStr = wikidataEvent.date.value;
        const year = this.extractYear(dateStr);
        const period = this.determinePeriod(year);
        
        // Obtenir le titre Wikipedia pour récupérer la description
        const wikipediaTitle = await this.getWikipediaTitle(wikidataId);
        
        // Petit délai pour respecter les limites des APIs
        await this.delay(500);
        
        let description = wikidataEvent.eventDescription?.value || '';
        
        // Enrichir avec Wikipedia si possible
        if (wikipediaTitle) {
            const wikiSummary = await this.getWikipediaSummary(wikipediaTitle);
            if (wikiSummary && wikiSummary.length > description.length) {
                description = wikiSummary;
            }
            await this.delay(500);
        }

        const category = this.categorizeEvent(description, title);
        const location = wikidataEvent.locationLabel?.value || 'France';

        const event = {
            title: title,
            description: description,
            coordinates: coordinates,
            period: period,
            date: dateStr.split('T')[0], // Format YYYY-MM-DD
            year: year,
            location: location,
            category: category,
            sources: [
                {
                    name: 'Wikidata',
                    url: wikidataEvent.event.value
                }
            ]
        };

        // Ajouter la source Wikipedia si disponible
        if (wikipediaTitle) {
            event.sources.push({
                name: `Wikipedia - ${wikipediaTitle}`,
                url: `https://fr.wikipedia.org/wiki/${encodeURIComponent(wikipediaTitle.replace(/ /g, '_'))}`
            });
        }

        // Valider la qualité
        if (this.validateEvent(event)) {
            console.log(`   ✅ Événement validé\n`);
            return event;
        } else {
            console.log(`   ❌ Événement rejeté (qualité insuffisante)\n`);
            return null;
        }
    }

    /**
     * Délai pour respecter les limites des APIs
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Charge les événements existants depuis data.js
     */
    loadExistingEvents() {
        try {
            const content = fs.readFileSync(this.dataFilePath, 'utf8');
            const match = content.match(/const historicalEvents = (\[[\s\S]*?\]);/);
            
            if (match) {
                // Utiliser eval avec précaution (seulement pour notre propre fichier)
                const existingEvents = eval(match[1]);
                console.log(`📚 ${existingEvents.length} événements existants chargés\n`);
                return existingEvents;
            }
        } catch (error) {
            console.error('⚠️  Erreur lors du chargement des événements existants:', error.message);
        }
        
        return [];
    }

    /**
     * Vérifie si un événement existe déjà (évite les doublons)
     */
    isDuplicate(event, existingEvents) {
        return existingEvents.some(existing => 
            existing.title.toLowerCase() === event.title.toLowerCase() ||
            (existing.year === event.year && 
             Math.abs(existing.coordinates[0] - event.coordinates[0]) < 0.1 &&
             Math.abs(existing.coordinates[1] - event.coordinates[1]) < 0.1)
        );
    }

    /**
     * Sauvegarde les événements dans data.js
     */
    saveEvents(events) {
        console.log('\n💾 Sauvegarde des événements...\n');

        // Lire le contenu actuel
        let content = fs.readFileSync(this.dataFilePath, 'utf8');
        
        // Générer le code JavaScript pour les événements
        const eventsCode = JSON.stringify(events, null, 4)
            .replace(/"([^"]+)":/g, '$1:'); // Enlever les guillemets des clés
        
        // Remplacer le tableau d'événements
        content = content.replace(
            /const historicalEvents = \[[\s\S]*?\];/,
            `const historicalEvents = ${eventsCode};`
        );
        
        // Sauvegarder
        fs.writeFileSync(this.dataFilePath, content, 'utf8');
        
        console.log(`✅ ${events.length} événements sauvegardés dans ${this.dataFilePath}\n`);
    }

    /**
     * Crée un fichier de sauvegarde
     */
    createBackup() {
        const backupPath = `${this.dataFilePath}.backup`;
        fs.copyFileSync(this.dataFilePath, backupPath);
        console.log(`💾 Sauvegarde créée: ${backupPath}\n`);
    }

    /**
     * Point d'entrée principal
     */
    async run(limit = 30, skipExisting = true) {
        console.log('🗺️  === FETCH HISTORICAL EVENTS FOR FRANCE ===\n');
        console.log('Priorité: QUALITÉ > QUANTITÉ\n');
        console.log('════════════════════════════════════════════\n');

        // Créer une sauvegarde
        this.createBackup();

        // Charger les événements existants
        const existingEvents = this.loadExistingEvents();
        
        // Récupérer les événements depuis Wikidata
        const wikidataResults = await this.queryWikidataEvents(limit);
        
        if (wikidataResults.length === 0) {
            console.log('❌ Aucun événement trouvé\n');
            return;
        }

        // Traiter chaque événement
        const newEvents = [];
        let processed = 0;
        let duplicates = 0;
        let rejected = 0;

        for (let i = 0; i < wikidataResults.length; i++) {
            const processedEvent = await this.processEvent(wikidataResults[i], i, wikidataResults.length);
            
            if (processedEvent) {
                // Vérifier les doublons si demandé
                if (skipExisting && this.isDuplicate(processedEvent, existingEvents)) {
                    console.log(`   ⚠️  Doublon détecté, ignoré\n`);
                    duplicates++;
                } else {
                    newEvents.push(processedEvent);
                }
                processed++;
            } else {
                rejected++;
            }

            // Délai entre les événements
            await this.delay(1000);
        }

        console.log('════════════════════════════════════════════\n');
        console.log('📊 RÉSUMÉ:\n');
        console.log(`   • Événements traités: ${processed}`);
        console.log(`   • Nouveaux événements valides: ${newEvents.length}`);
        console.log(`   • Doublons évités: ${duplicates}`);
        console.log(`   • Rejetés (qualité insuffisante): ${rejected}`);
        console.log(`   • Total dans la base: ${existingEvents.length + newEvents.length}\n`);

        if (newEvents.length > 0) {
            // Ajouter les nouveaux événements avec de nouveaux IDs
            const maxId = Math.max(...existingEvents.map(e => e.id || 0));
            newEvents.forEach((event, index) => {
                event.id = maxId + index + 1;
            });

            // Combiner avec les événements existants
            const allEvents = [...existingEvents, ...newEvents];
            
            // Trier par année
            allEvents.sort((a, b) => a.year - b.year);

            // Sauvegarder
            this.saveEvents(allEvents);

            console.log('✅ Opération terminée avec succès!\n');
            console.log('💡 TIP: Ouvrez index.html pour visualiser les nouveaux événements\n');
        } else {
            console.log('ℹ️  Aucun nouvel événement à ajouter\n');
        }
    }
}

// Exécution du script
if (require.main === module) {
    const args = process.argv.slice(2);
    const limit = args[0] ? parseInt(args[0]) : 30;
    const skipExisting = args[1] !== '--force';

    const fetcher = new HistoricalEventFetcher();
    fetcher.run(limit, skipExisting).catch(error => {
        console.error('\n❌ ERREUR CRITIQUE:', error);
        process.exit(1);
    });
}

module.exports = HistoricalEventFetcher;
