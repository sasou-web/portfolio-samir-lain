import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// Nom du repo GitHub (important pour GitHub Pages en mode sous-dossier)
const repoName = 'portfolio-samir-lain';

// On détecte si on est en build sur GitHub Actions
const isProd = process.env.GITHUB_ACTIONS === 'true';

// BASE = chemin de base pour GitHub Pages
const BASE = isProd ? `/${repoName}/` : '/';

// SITE = URL complète du site
// ⚠️ Utilise l'URL GitHub Pages officielle en prod, pas ton domaine custom
const SITE = isProd
  ? `https://sasou-web.github.io/${repoName}/`
  : 'http://localhost:4321';

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [tailwind({ applyBaseStyles: false }), mdx()],
  output: 'static'
});
