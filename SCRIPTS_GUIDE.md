# 📚 Guide d'Utilisation des Scripts d'Enrichissement

Ce document explique comment utiliser les scripts pour enrichir la base de données d'événements historiques avec des données de haute qualité.

## 🎯 Philosophie : QUALITÉ > QUANTITÉ

Les scripts ont été conçus avec une philosophie claire : **privilégier la qualité des événements plutôt que leur quantité**. Chaque événement ajouté doit respecter des critères stricts :

✅ **Critères de Qualité Obligatoires :**
- Titre clair et précis (minimum 5 caractères)
- Description détaillée (minimum 50 caractères)
- Coordonnées géographiques exactes
- Date historique vérifiable
- Localisation précise
- Catégorie appropriée
- Sources vérifiables (Wikipedia, Wikidata)

## 📋 Scripts Disponibles

### 1. `enrich-data.js` - Script d'Enrichissement Curé (RECOMMANDÉ)

**Description :** Ce script utilise une base de données curée manuellement de 29 événements historiques français de haute qualité.

**Avantages :**
- ✅ 100% de taux de réussite
- ✅ Données vérifiées manuellement
- ✅ Aucune dépendance réseau
- ✅ Exécution instantanée
- ✅ Qualité garantie

**Utilisation :**

```bash
# Ajouter 10 nouveaux événements (par défaut)
node enrich-data.js

# Ajouter un nombre spécifique d'événements
node enrich-data.js 20

# Via npm
npm run enrich          # 10 événements
npm run enrich-more     # 20 événements
npm run enrich-all      # Tous les événements disponibles (29)
```

**Événements Disponibles :**

Le script contient 29 événements historiques majeurs couvrant toute l'histoire de France :

- **Antiquité** : Fondation de Massalia, Bataille de Gergovie, Fondation de Lutèce
- **Moyen Âge** : Traité de Verdun, Bataille de Bouvines, Construction de Notre-Dame, Bataille d'Azincourt
- **Renaissance** : Château de Chambord, Massacre de la Saint-Barthélemy
- **Ancien Régime** : Révocation de l'Édit de Nantes
- **Révolution** : Bataille de Valmy, Exécution de Louis XVI
- **Empire** : Bataille de Waterloo
- **19ème siècle** : Révolution de 1848, Commune de Paris, Loi de laïcité
- **20ème siècle** : Bataille de la Marne, Armistice 1918, Front populaire, Libération de Paris, Traité de Rome, Accords d'Évian, TGV, Abolition peine de mort, Pyramide du Louvre, Coupe du Monde 1998
- **Contemporain** : Passage à l'Euro, Attentats 2015, Incendie Notre-Dame

### 2. `fetch-events.js` - Script d'Interrogation d'APIs Externes

**Description :** Ce script interroge les APIs Wikidata et Wikipedia pour récupérer automatiquement des événements historiques.

**Avantages :**
- 🌐 Accès à des milliers d'événements
- 🔄 Données toujours à jour
- 🤖 Automatisation complète

**Limitations :**
- ⚠️ Nécessite une connexion internet
- ⚠️ Dépend de la disponibilité des APIs
- ⚠️ Taux de réussite variable selon la qualité des données Wikidata
- ⏱️ Plus lent (respecte les limites des APIs)

**Utilisation :**

```bash
# Récupérer 30 nouveaux événements (par défaut)
node fetch-events.js

# Récupérer un nombre spécifique d'événements
node fetch-events.js 50

# Forcer l'ajout même en cas de doublons
node fetch-events.js 30 --force

# Via npm
npm run fetch-events        # 30 événements
npm run fetch-events-many   # 50 événements
npm run fetch-events-force  # 30 avec force
```

**Fonctionnement :**

1. Requête SPARQL vers Wikidata pour trouver des événements historiques français
2. Filtrage automatique :
   - Événements liés à la France (P17: Q142)
   - Avec coordonnées géographiques (P625)
   - Avec date (P585)
   - Avec description en français
3. Enrichissement avec Wikipedia :
   - Récupération de descriptions détaillées
   - Extraction d'images (si disponibles)
4. Validation stricte de la qualité
5. Détection et évitement des doublons
6. Sauvegarde dans data.js

## 🚀 Guide de Démarrage Rapide

### Première utilisation (Recommandé)

```bash
# 1. Vérifier que tout fonctionne
npm run validate

# 2. Ajouter 10 événements de qualité
npm run enrich

# 3. Ouvrir index.html dans votre navigateur
# Les nouveaux événements apparaissent sur la carte !
```

### Enrichissement progressif

```bash
# Ajouter 10 événements à la fois
npm run enrich

# Attendre et vérifier dans le navigateur
# Si satisfait, continuer :
npm run enrich

# Pour un enrichissement plus important :
npm run enrich-more
```

## 📊 Comparaison des Scripts

| Critère | enrich-data.js | fetch-events.js |
|---------|----------------|-----------------|
| Qualité des données | ⭐⭐⭐⭐⭐ Excellente | ⭐⭐⭐⭐ Bonne |
| Vitesse | ⚡ Instantané | 🐢 Lent (1-2 min) |
| Connexion internet | ❌ Non requise | ✅ Requise |
| Taux de réussite | 100% | ~70% |
| Événements disponibles | 29 curés | Milliers potentiels |
| Recommandé pour | Démarrage, qualité garantie | Enrichissement massif |

## 🔍 Validation et Contrôle Qualité

### Vérification après enrichissement

```bash
# Compter les événements
node -e "const {historicalEvents} = require('./data.js'); console.log('Total:', historicalEvents.length);"

# Lister tous les titres
node -e "const {historicalEvents} = require('./data.js'); historicalEvents.forEach(e => console.log('-', e.title));"

# Vérifier la syntaxe
npm run validate
```

### Fichier de sauvegarde

Chaque script crée automatiquement une sauvegarde `data.js.backup` avant toute modification. En cas de problème :

```bash
# Restaurer la sauvegarde
cp data.js.backup data.js
```

## 📝 Structure d'un Événement

Chaque événement dans la base de données suit cette structure :

```javascript
{
    id: 19,                                    // ID unique
    title: "Titre de l'événement",            // Titre clair
    description: "Description détaillée...",   // Minimum 50 caractères
    coordinates: [latitude, longitude],        // [48.8566, 2.3522]
    period: "code-periode",                    // "moyen-age", "revolution", etc.
    date: "Date affichée",                     // "14 juillet 1789"
    year: année_numérique,                     // 1789
    location: "Lieu, Région",                  // "Paris, Île-de-France"
    category: "Catégorie",                     // "Bataille", "Politique", etc.
    sources: [                                 // Toujours au moins une source
        {
            name: "Nom de la source",
            url: "https://..."
        }
    ]
}
```

## 🎨 Catégories Disponibles

- `Bataille` ⚔️ - Conflits militaires
- `Politique` 🏛️ - Événements politiques, traités, lois
- `Religieux` ⛪ - Événements religieux
- `Architecture` 🏰 - Constructions importantes
- `Révolution` 🔥 - Mouvements révolutionnaires
- `Sociale` 👥 - Mouvements sociaux
- `Infrastructure` 🌉 - Ponts, tunnels, transports

## 📅 Périodes Historiques

- `antiquite` : Antiquité (-600 à 476)
- `moyen-age` : Moyen Âge (476 à 1492)
- `renaissance` : Renaissance (1492 à 1610)
- `ancien-regime` : Ancien Régime (1610 à 1789)
- `revolution` : Révolution (1789 à 1799)
- `empire` : Empire (1799 à 1815)
- `19e-siecle` : 19ème siècle (1815 à 1914)
- `20e-siecle` : 20ème siècle (1914 à 2000)
- `contemporain` : Contemporain (2000 à aujourd'hui)

## 🛠️ Dépannage

### Le script ne fonctionne pas

```bash
# Vérifier la version de Node.js (minimum 14.0.0)
node --version

# Vérifier la syntaxe
npm run validate
```

### Doublons détectés

C'est normal ! Les scripts évitent automatiquement les doublons en comparant :
- Les titres (insensible à la casse)
- Les années et coordonnées géographiques

### Événements de mauvaise qualité

Si un événement ne répond pas aux critères de qualité, il est automatiquement rejeté. Vous verrez ce message :
```
❌ Événement rejeté (qualité insuffisante)
```

### Restaurer la base d'origine

```bash
# Si vous avez fait des erreurs
cp data.js.backup data.js

# Ou récupérer depuis git
git checkout data.js
```

## 💡 Conseils d'Utilisation

1. **Commencez petit** : Utilisez `enrich-data.js` avec 10 événements
2. **Vérifiez visuellement** : Ouvrez index.html après chaque ajout
3. **Enrichissement progressif** : Ajoutez par lots de 10-20 événements
4. **Conservez les sauvegardes** : Les fichiers .backup sont précieux
5. **Privilégiez la qualité** : Mieux vaut 50 événements excellents que 200 médiocres

## 🎓 Pour Aller Plus Loin

### Ajouter vos propres événements

Vous pouvez éditer `enrich-data.js` et ajouter vos propres événements dans le tableau `curatedEvents`. Suivez simplement la structure existante.

### Modifier les critères de qualité

Dans `fetch-events.js` ou `enrich-data.js`, modifiez la méthode `validateEvent()` pour ajuster les critères.

### Créer de nouvelles catégories

1. Ajoutez la catégorie dans les événements
2. Mettez à jour `getIconForCategory()` dans `app.js`
3. Ajoutez l'emoji correspondant

## 📞 Support

En cas de problème :
1. Vérifiez ce guide
2. Consultez les fichiers de log
3. Restaurez depuis la sauvegarde
4. Ouvrez une issue sur GitHub

## ✅ Checklist Qualité

Avant de publier vos enrichissements :

- [ ] Tous les événements ont des descriptions > 50 caractères
- [ ] Toutes les coordonnées sont valides
- [ ] Toutes les dates sont cohérentes
- [ ] Toutes les sources sont accessibles
- [ ] Aucun doublon n'est présent
- [ ] La syntaxe JavaScript est valide (`npm run validate`)
- [ ] Les événements s'affichent correctement sur la carte
- [ ] La période historique est correcte

---

**Bonne Curated Historical Data Building! 🗺️📚**
