// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Поменяйте site на ваш домен перед деплоем — от него строятся sitemap и canonical.
export default defineConfig({
  site: 'https://autonoma.studio',
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'auto' },
});
