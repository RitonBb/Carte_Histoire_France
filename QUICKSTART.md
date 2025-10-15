# Guide de Démarrage Rapide

## 🚀 Lancement de l'Application

### Méthode 1 : Ouverture Directe (Recommandé)
1. Téléchargez ou clonez le dépôt
2. Double-cliquez sur `index.html` 
3. L'application s'ouvre dans votre navigateur par défaut

**Note** : Une connexion internet est requise pour charger la bibliothèque Leaflet.js depuis le CDN.

### Méthode 2 : Serveur Local
Si vous préférez utiliser un serveur local :

#### Avec Python 3 :
```bash
python3 -m http.server 8000
```
Puis ouvrez : http://localhost:8000

#### Avec Node.js :
```bash
npx http-server -p 8000
```
Puis ouvrez : http://localhost:8000

#### Avec PHP :
```bash
php -S localhost:8000
```
Puis ouvrez : http://localhost:8000

## ✅ Prérequis

- Navigateur moderne (Chrome, Firefox, Safari, Edge)
- Connexion internet (pour Leaflet.js et OpenStreetMap)
- JavaScript activé

## 🧪 Test de l'Application

### Test des Fonctionnalités

1. **Carte Interactive** :
   - Vérifiez que la carte de France s'affiche
   - Testez le zoom avec la molette
   - Testez le déplacement en glissant

2. **Filtrage par Période** :
   - Sélectionnez différentes périodes dans le menu déroulant
   - Vérifiez que les marqueurs changent selon la période

3. **Marqueurs d'Événements** :
   - Cliquez sur un marqueur
   - Vérifiez l'affichage du popup avec informations de base
   - Cliquez sur "En savoir plus"

4. **Panneau de Détails** :
   - Vérifiez l'affichage des informations complètes
   - Testez les liens vers Wikipedia/Wikidata
   - Fermez le panneau avec le bouton X

5. **Modal À Propos** :
   - Cliquez sur le bouton "ℹ️ À propos"
   - Vérifiez l'affichage de l'information
   - Fermez en cliquant à l'extérieur ou sur X

6. **Bouton Actualiser** :
   - Testez le rechargement des événements
   - Vérifiez la notification

## 🔍 Validation JavaScript

Pour vérifier la syntaxe JavaScript :

```bash
node -c app.js
node -c data.js
node -c api.js
```

Tous doivent retourner sans erreur.

## 📊 Vérification des Données

Pour lister tous les événements :

```bash
node -e "const {historicalEvents} = require('./data.js'); historicalEvents.forEach(e => console.log(e.title));"
```

## 🐛 Dépannage

### La carte ne s'affiche pas
- Vérifiez votre connexion internet
- Consultez la console du navigateur (F12)
- Vérifiez que Leaflet.js se charge correctement

### Les marqueurs ne s'affichent pas
- Vérifiez que les coordonnées sont valides dans data.js
- Ouvrez la console pour voir les erreurs JavaScript

### Le style est cassé
- Vérifiez que styles.css est bien chargé
- Effacez le cache du navigateur (Ctrl+Shift+R)

## 📱 Test sur Mobile

1. Lancez un serveur local
2. Trouvez votre IP locale :
   - Linux/Mac : `ifconfig | grep inet`
   - Windows : `ipconfig`
3. Ouvrez depuis votre mobile : http://[VOTRE_IP]:8000

## 🎯 Checklist de Test

- [ ] Page se charge sans erreur
- [ ] Carte de France visible
- [ ] 18 marqueurs visibles sur "Toutes les périodes"
- [ ] Filtrage par période fonctionne
- [ ] Popups s'ouvrent au clic sur marqueur
- [ ] Panneau de détails affiche les informations complètes
- [ ] Liens vers Wikipedia/Wikidata fonctionnent
- [ ] Modal "À propos" s'ouvre et se ferme
- [ ] Bouton "Actualiser" fonctionne
- [ ] Design responsive sur mobile
- [ ] Aucune erreur dans la console

## 📈 Enrichissement des Données (Optionnel)

Pour tester l'enrichissement automatique via les APIs :

1. Ouvrez la console du navigateur (F12)
2. Tapez :
   ```javascript
   carteApp.enrichEventsData();
   ```
3. Attendez que le processus se termine
4. Vérifiez les données enrichies

**Attention** : Cette fonctionnalité peut prendre du temps et respecte les limites des APIs.

## 📞 Support

En cas de problème :
1. Vérifiez les prérequis
2. Consultez la console du navigateur pour les erreurs
3. Lisez le README.md pour plus de détails
4. Ouvrez une issue sur GitHub

## 🎓 Pour les Développeurs

### Structure du Code
- `index.html` : Structure HTML et imports
- `styles.css` : Tous les styles et animations
- `app.js` : Logique principale et interactions
- `data.js` : Base de données des événements
- `api.js` : Intégration Wikipedia/Wikidata

### Ajout d'Événements
Voir la section "Ajouter de nouveaux événements" dans README.md

### Personnalisation
Tous les paramètres sont modifiables :
- Couleurs dans styles.css
- Position initiale dans app.js
- Périodes dans data.js
