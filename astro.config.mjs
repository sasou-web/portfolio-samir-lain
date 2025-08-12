import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// Détection automatique du chemin de base pour GitHub Pages
const repoName = 'portfolio-samir-lain';
const isProd = process.env.GITHUB_ACTIONS === 'true';

const BASE = isProd ? `/${repoName}/` : '/';
const SITE = isProd
  ? `https://moghrabi.fr/${repoName}/`
  : 'http://localhost:4321';

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [tailwind({ applyBaseStyles: false }), mdx()],
  output: 'static'
});
