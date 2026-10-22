import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://ilyalebe.dev',
  // ponytail: cv_lead is a targeted CV shared by link only, keep it out of the sitemap
  integrations: [sitemap({ filter: (page) => !page.includes('/cv_lead') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
