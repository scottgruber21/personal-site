// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.scottgruber.net',
  // In Tailwind 4, we use the Vite plugin instead of the integrations array
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx(), sitemap()]
});