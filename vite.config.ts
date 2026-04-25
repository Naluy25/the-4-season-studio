// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Pre-render all routes to static HTML so the site can be deployed
    // as a static SPA on Netlify (and any static host).
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
      retryCount: 2,
    },
    pages: [
      { path: "/" },
      { path: "/shop" },
      { path: "/packages" },
      { path: "/portfolio" },
      { path: "/portfolio/social" },
      { path: "/portfolio/design" },
      { path: "/portfolio/web" },
      { path: "/portfolio/management" },
      { path: "/testimonials" },
      { path: "/how-to-buy" },
    ],
  },
});
