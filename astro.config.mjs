import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

const isProd = process.env.GITHUB_ACTIONS === 'true';

// Comme tu utilises un domaine custom, pas besoin du /repoName/
const BASE = '/';
const SITE = isProd
  ? 'https://moghrabi.fr/portfolio-samir-lain/'
  : 'http://localhost:4321';

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [tailwind({ applyBaseStyles: false }), mdx()],
  output: 'static'
});
