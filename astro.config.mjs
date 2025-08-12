import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

const repoName = 'portfolio-samir-lain';
const isProd = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isProd
    ? `https://moghrabi.fr/${repoName}/`
    : 'http://localhost:4321',
  base: isProd ? `/${repoName}/` : '/',
  integrations: [tailwind({ applyBaseStyles: false }), mdx()],
  output: 'static',
});
