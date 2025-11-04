# RBBC Website - Site React Moderne

Site web officiel du Royal Blaregnies Basket Club, refait avec React, TypeScript, Vite et Tailwind CSS.

## 🚀 Technologies

- **React 18** avec TypeScript
- **Vite** pour le build ultra-rapide
- **Tailwind CSS** pour le design responsive
- **Framer Motion** pour les animations

## 📦 Installation

```bash
cd rbbc-react
npm install
```

## 🛠️ Développement

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 📱 Responsive

Le site est entièrement responsive et s'adapte à tous les écrans :
- Mobile (< 640px)
- Tablette (640px - 1024px)
- Desktop (> 1024px)

## 🚀 Déploiement

Le site est déployé automatiquement sur GitHub Pages via GitHub Actions lorsque vous poussez sur la branche `master`.

**Important :** Dans les paramètres GitHub du dépôt, assurez-vous que :
1. GitHub Pages est configuré pour utiliser "GitHub Actions" comme source
2. Le workflow déploie depuis `rbbc-react/dist`

## 📝 Notes

- Les anciens fichiers HTML (`index.html.old`, `RBBC.html.old`) sont conservés mais ne sont plus utilisés
- Le nouveau site React est dans le dossier `rbbc-react/`
