import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
// Sitemap is hand-maintained at public/sitemap.xml (only 6 static routes;
// @astrojs/sitemap 2.x and 3.x both have compatibility issues with Astro 3.x).
export default defineConfig({
  site: 'https://ilyalebe.dev',
  integrations: [mdx(), tailwind()]
});
