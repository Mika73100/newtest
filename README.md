# Page Web avec Animation JavaScript

Une page web simple avec des animations JavaScript interactives.

## Fonctionnalités

- Animations interactives au clic
- Effets de particules
- Design moderne et responsive
- Animations CSS fluides

## Déploiement sur RunTipi

Ce projet est configuré pour être déployé automatiquement sur RunTipi via GitHub Actions en utilisant SSH/rsync.

### Configuration requise

1. **Accès SSH à votre serveur RunTipi** : Assurez-vous d'avoir un accès SSH configuré sur votre instance RunTipi.

2. **Secrets GitHub** : Ajoutez les secrets suivants dans les paramètres de votre dépôt GitHub :
   - `RUNTIPI_SSH_PRIVATE_KEY` : Votre clé privée SSH (sans mot de passe recommandé)
   - `RUNTIPI_SSH_USER` : Le nom d'utilisateur SSH (ex: `root`, `runtipi`, etc.)
   - `RUNTIPI_SSH_HOST` : L'adresse IP ou le domaine de votre serveur RunTipi
   - `RUNTIPI_DEPLOY_PATH` : Le chemin de déploiement sur le serveur (ex: `/app/www` ou `/var/www/html`)

3. **Génération de la clé SSH** (si vous n'en avez pas) :
   ```bash
   ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/runtipi_deploy
   ```
   - Ajoutez la clé publique (`runtipi_deploy.pub`) au serveur RunTipi :
     ```bash
     ssh-copy-id -i ~/.ssh/runtipi_deploy.pub user@your-runtipi-server
     ```
   - Ajoutez la clé privée (`runtipi_deploy`) comme secret GitHub `RUNTIPI_SSH_PRIVATE_KEY`

4. **Workflow** : Le workflow se déclenche automatiquement lors d'un push sur la branche `main` ou `master`.

### Déploiement manuel

Vous pouvez également déclencher le déploiement manuellement via l'onglet "Actions" de GitHub.

### Méthode alternative (API)

Si RunTipi fournit une API de déploiement, vous pouvez utiliser le fichier `deploy-http.yml.example` comme base.

## Structure du projet

```
newtest/
├── index.html      # Page principale
├── style.css       # Styles et animations CSS
├── script.js       # Animations JavaScript
└── .github/
    └── workflows/
        └── deploy.yml  # Workflow de déploiement
```

## Utilisation locale

Ouvrez simplement `index.html` dans votre navigateur pour voir les animations.

