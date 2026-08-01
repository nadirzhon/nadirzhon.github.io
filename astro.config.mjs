// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * Адрес сайта задаётся окружением, поэтому одна и та же сборка годится
 * и для GitHub Pages, и для своего домена.
 *   свой домен:    npm run build
 *   GitHub Pages:  задаются SITE_URL и BASE_PATH (см. .github/workflows/deploy.yml)
 */
const site = process.env.SITE_URL ?? 'https://autonoma.uk';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'auto' },
});
