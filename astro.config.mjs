import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

const BASE = process.env.BASE_PATH ?? '/';
const SITE = process.env.SITE ?? 'https://example.com';

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [tailwind({ applyBaseStyles: false }), mdx()],
  output: 'static'
});