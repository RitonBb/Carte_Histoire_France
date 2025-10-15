# 🗺️ Carte Histoire France

Une application interactive affichant une carte moderne de la France où l'on peut explorer les événements historiques selon une période choisie.

## 📖 Description

**Carte Histoire France** est une application web interactive permettant d'explorer les événements historiques majeurs de la France. Les événements sont géolocalisés sur une carte moderne, illustrés par des marqueurs thématiques, et accompagnés de descriptions détaillées avec des sources fiables provenant de Wikipedia et Wikidata.

## ✨ Fonctionnalités

- 🗺️ **Carte interactive** : Navigation fluide sur une carte de France moderne
- 📍 **Événements géolocalisés** : Chaque événement est précisément localisé
- 📅 **Filtrage par période** : Explorez l'histoire par période (Antiquité, Moyen Âge, Renaissance, etc.)
- 🎨 **Marqueurs thématiques** : Icônes distinctives selon le type d'événement (bataille, politique, architecture, etc.)
- 📖 **Descriptions détaillées** : Informations complètes avec date, lieu, catégorie et description
- 🔗 **Sources fiables** : Liens vers Wikipedia et Wikidata pour chaque événement
- 💡 **Interface intuitive** : Design moderne et responsive
- 🌐 **Enrichissement automatique** : API intégrées pour enrichir les données (Wikidata, Wikipedia)

## 🚀 Utilisation

### Accès direct

1. Clonez le dépôt ou téléchargez les fichiers
2. Ouvrez le fichier `index.html` dans votre navigateur web moderne
3. C'est tout ! L'application fonctionne sans serveur web nécessaire

### Structure des fichiers

```
Carte_Histoire_France/
├── index.html          # Page principale de l'application
├── styles.css          # Styles et design de l'interface
├── app.js              # Logique principale de l'application
├── data.js             # Base de données des événements historiques
├── api.js              # Module d'intégration avec Wikipedia/Wikidata
└── README.md           # Documentation
```

## 🎯 Utilisation de l'application

### Navigation sur la carte

- **Zoom** : Utilisez la molette de la souris ou les boutons +/- sur la carte
- **Déplacement** : Cliquez et glissez pour vous déplacer sur la carte
- **Cliquez sur un marqueur** : Affiche un popup avec les informations de base
- **Bouton "En savoir plus"** : Ouvre un panneau détaillé avec toutes les informations

### Filtrage par période

Utilisez le menu déroulant en haut pour filtrer les événements par période historique :

- **Toutes les périodes** : Affiche tous les événements
- **Antiquité** (-600 à 476)
- **Moyen Âge** (476 à 1492)
- **Renaissance** (1492 à 1610)
- **Ancien Régime** (1610 à 1789)
- **Révolution** (1789 à 1799)
- **Empire** (1799 à 1815)
- **19ème siècle** (1815 à 1914)
- **20ème siècle** (1914 à 2000)
- **Contemporain** (2000 à aujourd'hui)

### Boutons de contrôle

- **🔄 Actualiser** : Recharge les événements sur la carte
- **ℹ️ À propos** : Affiche les informations sur l'application

## 🤖 Scripts d'Enrichissement Automatique

L'application inclut des scripts Node.js pour enrichir automatiquement la base de données avec des événements historiques de qualité.

### Script d'enrichissement (Recommandé)

```bash
# Ajouter 10 nouveaux événements de haute qualité
npm run enrich

# Ajouter 20 événements
npm run enrich-more

# Ajouter tous les événements disponibles
npm run enrich-all
```

**Caractéristiques :**
- ✅ Base de données curée de 29 événements historiques français
- ✅ Qualité garantie à 100%
- ✅ Aucune connexion internet requise
- ✅ Exécution instantanée
- ✅ Détection automatique des doublons

Pour plus d'informations, consultez le [Guide des Scripts](SCRIPTS_GUIDE.md).

## 📊 Événements historiques inclus

L'application peut contenir jusqu'à 47 événements historiques majeurs, couvrant plus de 2600 ans d'histoire :

1. **Bataille d'Alésia** (-52) - Victoire romaine sur les Gaulois
2. **Sacre de Clovis** (496) - Conversion des Francs au christianisme
3. **Bataille de Poitiers** (732) - Arrêt de l'expansion musulmane
4. **Sacre de Charlemagne** (800) - Naissance du Saint-Empire
5. **Sacre de Jeanne d'Arc à Reims** (1429) - Guerre de Cent Ans
6. **Édit de Nantes** (1598) - Tolérance religieuse
7. **Construction du Château de Versailles** (1661-1715) - Symbole de l'absolutisme
8. **Prise de la Bastille** (1789) - Début de la Révolution française
9. **Déclaration des Droits de l'Homme** (1789) - Principes fondamentaux
10. **Couronnement de Napoléon** (1804) - Premier Empire
11. **Bataille d'Austerlitz** (1805) - Victoire napoléonienne
12. **Construction de la Tour Eiffel** (1889) - Symbole de Paris
13. **Affaire Dreyfus** (1894-1906) - Division de la société française
14. **Bataille de Verdun** (1916) - Première Guerre mondiale
15. **Appel du 18 juin 1940** - Début de la Résistance
16. **Débarquement en Normandie** (1944) - Libération de la France
17. **Mai 68** (1968) - Mouvement de contestation sociale
18. **Ouverture du Tunnel sous la Manche** (1994) - Coopération européenne

## 🔧 Technologies utilisées

- **HTML5** : Structure de l'application
- **CSS3** : Design et animations
- **JavaScript (ES6+)** : Logique de l'application
- **Leaflet.js** : Bibliothèque de cartographie interactive
- **OpenStreetMap** : Données cartographiques
- **Wikipedia API** : Enrichissement des descriptions
- **Wikidata API** : Enrichissement des données structurées

## 🌐 API et enrichissement des données

L'application intègre des fonctionnalités d'enrichissement automatique via :

### Wikidata API
- Recherche d'entités historiques
- Extraction de coordonnées géographiques
- Récupération de métadonnées structurées

### Wikipedia API
- Résumés d'articles
- Images et illustrations
- Sources et références

### Utilisation de l'enrichissement

Les données peuvent être enrichies automatiquement en appelant la méthode `enrichEventsData()` depuis la console du navigateur :

```javascript
// Ouvrez la console du navigateur (F12) et tapez :
carteApp.enrichEventsData();
```

Cette fonctionnalité permet d'améliorer progressivement la base de données avec des informations provenant directement de Wikipedia et Wikidata.

## 📝 Ajouter de nouveaux événements

Pour ajouter des événements, éditez le fichier `data.js` et ajoutez un nouvel objet dans le tableau `historicalEvents` :

```javascript
{
    id: 19,
    title: "Titre de l'événement",
    description: "Description détaillée...",
    coordinates: [latitude, longitude],
    period: "code-periode",
    date: "Date affichée",
    year: année_numérique,
    location: "Lieu, Région",
    category: "Catégorie",
    sources: [
        {
            name: "Nom de la source",
            url: "https://..."
        }
    ]
}
```

### Catégories disponibles

- `Bataille` ⚔️
- `Politique` 🏛️
- `Religieux` ⛪
- `Architecture` 🏰
- `Révolution` 🔥
- `Sociale` 👥
- `Infrastructure` 🌉

### Codes de période

- `antiquite` : Antiquité (-600 à 476)
- `moyen-age` : Moyen Âge (476 à 1492)
- `renaissance` : Renaissance (1492 à 1610)
- `ancien-regime` : Ancien Régime (1610 à 1789)
- `revolution` : Révolution (1789 à 1799)
- `empire` : Empire (1799 à 1815)
- `19e-siecle` : 19ème siècle (1815 à 1914)
- `20e-siecle` : 20ème siècle (1914 à 2000)
- `contemporain` : Contemporain (2000 à aujourd'hui)

## 🎨 Personnalisation

### Modifier les couleurs

Éditez le fichier `styles.css` pour personnaliser les couleurs :

```css
/* Couleurs principales */
--primary-color: #667eea;
--secondary-color: #764ba2;
```

### Changer la position initiale de la carte

Dans `app.js`, modifiez les coordonnées et le zoom dans la méthode `initMap()` :

```javascript
this.map = L.map('map').setView([latitude, longitude], niveau_zoom);
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📜 Licence

Ce projet est open source et disponible pour usage éducatif et personnel.

## 🙏 Remerciements

- **OpenStreetMap** pour les données cartographiques
- **Leaflet.js** pour la bibliothèque de cartographie
- **Wikipedia** et **Wikidata** pour les données historiques
- Tous les contributeurs qui enrichissent cette base de données

## 📞 Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub.

---

**Note** : Cette application est conçue à des fins éducatives. Les informations historiques proviennent de sources fiables (Wikipedia, Wikidata) mais nous recommandons de toujours vérifier les sources pour un usage académique.
