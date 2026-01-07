# Page Web avec Animation JavaScript

Une page web simple avec des animations JavaScript interactives.

## Fonctionnalités

- Animations interactives au clic
- Effets de particules
- Design moderne et responsive
- Animations CSS fluides

## Déploiement sur RunTipi

Ce projet est dockerisé et prêt à être ajouté comme application dans RunTipi.

### Structure Docker

Le projet contient les fichiers suivants pour RunTipi :
- `Dockerfile` : Image Docker basée sur Nginx pour servir le site statique
- `docker-compose.yml` : Configuration Docker Compose pour RunTipi
- `config.json` : Métadonnées de l'application pour RunTipi

### Comment ajouter l'application à RunTipi

1. **Préparer votre dépôt** :
   - Assurez-vous que votre code est sur GitHub/GitLab
   - Vérifiez que tous les fichiers (Dockerfile, docker-compose.yml, config.json) sont présents

2. **Ajouter l'application dans RunTipi** :
   - Connectez-vous à votre interface RunTipi
   - Allez dans la section "Apps" ou "Applications"
   - Cliquez sur "Ajouter une application" ou "Add App"
   - Sélectionnez "From Git Repository" ou "Depuis un dépôt Git"
   - Entrez l'URL de votre dépôt Git (ex: `https://github.com/votre-username/newtest`)
   - RunTipi détectera automatiquement les fichiers `config.json` et `docker-compose.yml`

3. **Configuration** :
   - RunTipi utilisera automatiquement le `Dockerfile` pour construire l'image
   - Le port 80 sera exposé automatiquement
   - Traefik configurera automatiquement le reverse proxy et le SSL

4. **Lancement** :
   - Une fois l'application ajoutée, cliquez sur "Installer" ou "Install"
   - RunTipi construira l'image Docker et démarrera le conteneur
   - Votre site sera accessible via le domaine configuré dans RunTipi

### Personnalisation

Vous pouvez modifier le fichier `config.json` pour :
- Changer le nom de l'application
- Modifier la description
- Ajouter des champs de formulaire si nécessaire
- Configurer des variables d'environnement

### Mise à jour

Pour mettre à jour l'application :
- Poussez vos modifications vers votre dépôt Git
- Dans RunTipi, cliquez sur "Mettre à jour" ou "Update" pour reconstruire l'image

## Structure du projet

```
newtest/
├── index.html          # Page principale
├── style.css           # Styles et animations CSS
├── script.js           # Animations JavaScript
├── Dockerfile          # Configuration Docker
├── docker-compose.yml  # Configuration Docker Compose pour RunTipi
├── config.json         # Métadonnées de l'application RunTipi
└── .github/
    └── workflows/
        └── deploy.yml  # Workflow de déploiement (optionnel)
```

## Utilisation locale

Ouvrez simplement `index.html` dans votre navigateur pour voir les animations.

