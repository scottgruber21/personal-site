// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // In Tailwind 4, we use the Vite plugin instead of the integrations array
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx(), sitemap()]
});