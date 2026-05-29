/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";

// Build Vitest's config on top of Astro's Vite config so tests can import
// `.astro` components (rendered via the Container API) and `src/data`
// modules with the same resolution the site build uses.
export default getViteConfig({
  test: {
    include: ["src/**/*.test.ts"],
  },
});
