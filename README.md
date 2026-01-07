# Page Web avec Animation JavaScript

Une page web simple avec des animations JavaScript interactives.

## Fonctionnalités

- Animations interactives au clic
- Effets de particules
- Design moderne et responsive
- Animations CSS fluides

## Déploiement sur RunTipi

Ce projet est configuré pour être déployé automatiquement sur RunTipi via GitHub Actions.

### Configuration requise

1. **Secrets GitHub** : Ajoutez les secrets suivants dans les paramètres de votre dépôt GitHub :
   - `RUNTIPI_API_KEY` : Votre clé API RunTipi
   - `RUNTIPI_PROJECT_ID` : L'ID de votre projet RunTipi

2. **Workflow** : Le workflow se déclenche automatiquement lors d'un push sur la branche `main` ou `master`.

### Déploiement manuel

Vous pouvez également déclencher le déploiement manuellement via l'onglet "Actions" de GitHub.

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

