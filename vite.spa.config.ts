/**
 * Standalone Vite config for the static SPA build (Netlify / any static host).
 *
 * The main `vite.config.ts` uses TanStack Start (SSR targeted at Cloudflare
 * Workers) and powers the Lovable preview & Lovable Publish flow. That build
 * does not emit a static `index.html`, which static hosts like Netlify need.
 *
 * This config produces a pure client-side bundle from `src/spa-entry.tsx` and
 * the project-root `index.html`, and writes it to `dist/spa/`. The Netlify
 * build script publishes that folder.
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: path.resolve(__dirname, "src/routes"),
      generatedRouteTree: path.resolve(__dirname, "src/routeTree.gen.ts"),
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist/spa",
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
    },
  },
});
