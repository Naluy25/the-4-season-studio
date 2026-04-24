# 🚀 Deploy to Netlify

This project is wired up to deploy to **Netlify** straight from GitHub with full
SSR (server-side rendering) running on Netlify Functions.

## One-time setup

1. Push this repo to GitHub.
2. Go to <https://app.netlify.com/start> and click **Import from Git**.
3. Choose your GitHub repo.
4. Netlify will auto-detect the settings from `netlify.toml`. They should look
   like this — leave them as-is:
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist/client`
   - **Functions directory:** `.netlify/v1/functions` (auto-detected)
5. Click **Deploy site**.

That's it — every push to your default branch will trigger a new deploy.

## What's already configured

| File | Purpose |
| --- | --- |
| `netlify.toml` | Build command, publish dir, caching & security headers |
| `vite.config.ts` | Registers `@netlify/vite-plugin-tanstack-start` so the SSR handler is bundled into a Netlify Function |

## How it works

- The TanStack Start app is built to `dist/client` (static assets) plus a
  serverless function at `.netlify/v1/functions/server.mjs`.
- Netlify routes every request through that function, which renders the
  matched route on the server. Direct visits, refreshes, and per-route
  meta tags (Open Graph, Twitter cards) all work without extra config.
- Hashed assets in `/assets/*` are served with a 1-year `immutable`
  cache for fast repeat visits.

## Environment variables

If/when the project starts using server secrets (Stripe, AI providers, DB),
add them in **Netlify → Site settings → Environment variables**. Anything
prefixed with `VITE_` is also exposed to the client bundle at build time.

## Local production preview

```bash
npm run build
npx netlify dev
```

This emulates the Netlify edge + functions locally on <http://localhost:8888>.
