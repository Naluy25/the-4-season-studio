/**
 * SPA bootstrap entry for static hosts (e.g. Netlify).
 *
 * This file is the entry referenced by the project-root `index.html`.
 * It mounts the same TanStack Router used in SSR mode, but in pure
 * client-side mode — no server, no hydration. The Lovable preview
 * still uses TanStack Start (SSR); this file is only consumed by the
 * Vite client build that produces dist/client/index.html.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

import "./styles.css";
import { getRouter } from "./router";

const router = getRouter();

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error('Root element "#root" not found in index.html');
}

createRoot(rootEl).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
