// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lsbelini.dev',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },

  env: {
    schema: {
      OBSIDIAN_VAULT_PATH: envField.string({ context: 'server', access: 'secret' }),
    },
  },
});
