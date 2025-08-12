# Portfolio — Moghrabi Samir (Astro, Lain vibes)

Minimal, statique, multilingue (FR/EN/AR), dark/light, effets CRT/glitch, contenus Markdown/MDX. Carte Leaflet, SEO/OG, déploiement GitHub Pages.

## 🚀 Démarrage
```bash
npm i
npm run dev
```

Ouvre http://localhost:4321

## 🧩 Structure

- Contenu : `content/` (works, games, projects) en MD/MDX.
- Traductions : `i18n/{fr,en,ar}.json` (AR en RTL auto).
- Assets OG : `public/og.svg` (source), `public/og.png` (utilisé par les meta tags).
- CV : `public/CV.pdf` (placeholder, remplace par le tien).

## 🌐 i18n

- FR par défaut via `/` → redirige vers `/fr/`.
- EN : `/en/` — AR (RTL) : `/ar/`.
- Ajoute des clés si besoin dans `i18n/*.json`.

## 🎨 Palette & thèmes

Variables dans `src/styles/globals.css` (`--bg`, `--surface`, `--accent`, etc.). Bouton 🌗 stocke le thème en `localStorage`.

## 🧲 Animations

- **Motion One** via CSS et JS léger (glitch/scanlines, ripple sur boutons, bandeau stack en marquee). Respecte `prefers-reduced-motion`.

## 🗺️ Carte de contact

Leaflet via CDN (pas de tracking). Modifie le marqueur si besoin.

## 🔍 SEO / Open Graph

Balises `<meta>` dans `Base.astro` + `SEO.astro`. Remplace `public/og.png` par une image 1200×630 (utilise `public/og.svg` comme source si tu veux).

## 🧱 Ajout de contenu

### Œuvres
Créer un fichier `.mdx` dans `content/works/` avec :
```md
---
title: "Titre"
type: "Anime | Musique | …"
year: 2000
summary: "1–2 phrases."
image: "/assets/monimage.jpg" # ou data URL
---
Résumé optionnel.
```

### Projets
`.mdx` dans `content/projects/` avec front‑matter : `title`, `pitch`, `role`, `stack`, `result`, `repo`, `demo`.

### Jeux
`.md` dans `content/games/` pour la fiche unique (Cyberpunk 2077 ici).

## 🛫 Déploiement GitHub Pages

1. Crée un dépôt, pousse ce code sur `main`.
2. Active **Pages** (Source: GitHub Actions).
3. Le workflow `deploy.yml` build & déploie automatiquement.
4. Si ton repo est `USER.github.io` → base `/`. Sinon base `/<repo>/`.

## ✅ Accessibilité
- Contraste AA+, focus visible, alt text.
- Animations désactivées si `prefers-reduced-motion`.

## 📎 Liens
- X: https://x.com/samirsyrie
- GitHub: https://github.com/sasou-web
- Steam: https://steamcommunity.com/id/sasou