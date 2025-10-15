# 🚀 Guide de Démarrage - Scripts d'Enrichissement

## Pour l'Utilisateur qui Souhaite Enrichir la Base de Données

Ce guide est pour vous si vous voulez ajouter plus d'événements historiques à la carte.

### ✅ Méthode Recommandée : Script d'Enrichissement Curé

La méthode la plus simple et la plus fiable :

```bash
# 1. Ouvrir un terminal dans le dossier du projet
cd /chemin/vers/Carte_Histoire_France

# 2. Lancer le script d'enrichissement
node enrich-data.js 10

# C'est tout ! Les nouveaux événements sont ajoutés automatiquement
```

**Ce que fait le script :**
- ✅ Ajoute 10 nouveaux événements historiques de qualité
- ✅ Vérifie automatiquement qu'il n'y a pas de doublons
- ✅ Crée une sauvegarde automatique (data.js.backup)
- ✅ Valide la qualité de chaque événement
- ✅ Sauvegarde dans data.js

### 📊 Résultat Attendu

Après avoir lancé le script, vous verrez :

```
🗺️  === ENRICHISSEMENT DE LA BASE DE DONNÉES ===

📖 Base de données curée d'événements historiques français

Priorité: QUALITÉ > QUANTITÉ

════════════════════════════════════════════════════

💾 Sauvegarde créée: ./data.js.backup

📚 18 événements existants chargés

📊 RÉSUMÉ:

   • Événements dans la base curée: 29
   • Événements existants: 18
   • Nouveaux événements à ajouter: 10
   • Doublons évités: 0
   • Total après ajout: 28

   ✅ [19] Fondation de Massalia (Marseille) (-600)
   ✅ [20] Bataille de Gergovie (-52)
   ...

💾 Sauvegarde des événements...

✅ 28 événements sauvegardés dans ./data.js

✅ Opération terminée avec succès!

💡 TIP: Ouvrez index.html pour visualiser les nouveaux événements
```

### 🎯 Différentes Options

```bash
# Ajouter 10 événements (par défaut)
node enrich-data.js

# Ajouter 20 événements
node enrich-data.js 20

# Ajouter tous les événements disponibles (29 maximum)
node enrich-data.js 50

# Avec npm (si disponible)
npm run enrich          # 10 événements
npm run enrich-more     # 20 événements
npm run enrich-all      # Tous les événements
```

### 📱 Voir le Résultat

1. Ouvrez `index.html` dans votre navigateur
2. Les nouveaux événements apparaissent automatiquement sur la carte
3. Vous pouvez les filtrer par période historique

### 🔄 Si Vous Faites une Erreur

Ne vous inquiétez pas ! Le script crée une sauvegarde automatique :

```bash
# Restaurer l'ancienne version
cp data.js.backup data.js
```

### 🌐 Script avec API en Ligne (Avancé)

Si vous avez accès à internet et voulez interroger Wikidata :

```bash
# Récupérer des événements depuis Wikidata
node fetch-events.js 30
```

**Note :** Ce script nécessite une connexion internet et peut être plus lent.

### ❓ FAQ

**Q : Combien d'événements puis-je ajouter ?**
R : Jusqu'à 29 nouveaux événements de haute qualité sont disponibles dans le script.

**Q : Les événements seront-ils de bonne qualité ?**
R : Oui ! Chaque événement est vérifié manuellement et inclut :
- Titre clair
- Description détaillée (minimum 50 caractères)
- Coordonnées GPS précises
- Date vérifiable
- Sources (Wikipedia, Wikidata)

**Q : Que faire si j'obtiens des doublons ?**
R : Le script détecte automatiquement les doublons et les ignore.

**Q : Puis-je annuler l'enrichissement ?**
R : Oui, utilisez la sauvegarde : `cp data.js.backup data.js`

**Q : Le script modifie-t-il autre chose que data.js ?**
R : Non, seul le fichier data.js est modifié.

### 💡 Conseils

1. **Commencez petit** : Essayez avec 10 événements d'abord
2. **Vérifiez dans le navigateur** : Ouvrez index.html après chaque ajout
3. **Enrichissement progressif** : Ajoutez par lots de 10-20 événements
4. **Gardez les sauvegardes** : Conservez les fichiers .backup

### 🆘 En Cas de Problème

```bash
# Vérifier que Node.js est installé
node --version
# Devrait afficher : v14.0.0 ou supérieur

# Vérifier la syntaxe du script
node -c enrich-data.js
# Devrait ne rien afficher (pas d'erreur)

# Compter les événements actuels
node -e "const {historicalEvents} = require('./data.js'); console.log('Événements:', historicalEvents.length);"
```

### 📞 Besoin d'Aide ?

Consultez :
1. **SCRIPTS_GUIDE.md** - Guide complet détaillé
2. **ENRICHMENT_SUMMARY.md** - Résumé de ce qui a été fait
3. **README.md** - Documentation générale du projet

---

**C'est aussi simple que ça ! Bon enrichissement ! 🗺️✨**
