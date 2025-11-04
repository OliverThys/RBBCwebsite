# Guide d'Installation - RBBC Website React

## Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

## Installation

1. Naviguez dans le dossier du projet React :
```bash
cd rbbc-react
```

2. Installez les dépendances :
```bash
npm install
```

## Développement

Pour lancer le serveur de développement :
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## Build pour Production

Pour créer un build de production :
```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/`

## Déploiement

Le site est configuré pour être déployé automatiquement sur GitHub Pages via GitHub Actions lorsque vous poussez sur la branche `refonte-complete`.

### Déploiement manuel

1. Build le projet :
```bash
npm run build
```

2. Le dossier `dist/` contient les fichiers statiques à déployer.

## Structure du Projet

```
rbbc-react/
├── public/          # Fichiers statiques (images, etc.)
├── src/
│   ├── components/  # Composants React
│   ├── data/        # Données (équipes, sponsors, etc.)
│   └── App.tsx      # Composant principal
├── package.json
└── vite.config.ts   # Configuration Vite
```

## Notes

- Les images doivent être placées dans `public/`
- Les sponsors sont dans `public/Sponsors/`
- Les chemins des images commencent par `/` (ex: `/rbbc_icon.jpg`)

