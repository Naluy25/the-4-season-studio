#!/usr/bin/env node
/**
 * Post-build script: generates a static SPA `index.html` inside `dist/client/`
 * so the app can be deployed to static hosts like Netlify.
 *
 * The TanStack Start build produces `dist/client/assets/*` but no `index.html`
 * (because it targets a Worker SSR runtime). This script picks the entry
 * `index-*.js` + `styles-*.css` from the assets folder and wires them into
 * a minimal HTML shell that hydrates the client router on first paint.
 */
import { readdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const clientDir = join(process.cwd(), "dist", "client");
const assetsDir = join(clientDir, "assets");

if (!existsSync(assetsDir)) {
  console.error("[post-build] dist/client/assets not found. Did the build run?");
  process.exit(1);
}

const files = readdirSync(assetsDir);

// Pick the main entry chunk and the styles bundle by filename pattern.
const entryJs = files.find((f) => /^index-[^.]+\.js$/.test(f));
const stylesCss = files.find((f) => /^styles-[^.]+\.css$/.test(f));

if (!entryJs) {
  console.error("[post-build] Could not find an index-*.js entry in dist/client/assets");
  process.exit(1);
}
if (!stylesCss) {
  console.error("[post-build] Could not find a styles-*.css bundle in dist/client/assets");
  process.exit(1);
}

const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>THE 4 SEASON STUDIO — وكالة التسويق الرقمي المتكاملة</title>
    <meta
      name="description"
      content="كل ما تحتاجه في منصة إلكترونية واحدة. أكثر من 5000 عميل يثقون بـ THE 4 SEASON STUDIO لخدمات التسويق الرقمي وتصميم المواقع وإدارة السوشيال ميديا."
    />
    <meta name="author" content="THE 4 SEASON STUDIO" />
    <meta property="og:title" content="THE 4 SEASON STUDIO — وكالة التسويق الرقمي المتكاملة" />
    <meta property="og:description" content="The 4 Season Studio is a professional digital marketing agency website offering comprehensive online services." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="stylesheet" href="/assets/${stylesCss}" />
    <link rel="icon" href="/assets/${(files.find((f) => /^logo-[^.]+\.png$/.test(f)) ?? "")}" />
    <script type="module" crossorigin src="/assets/${entryJs}"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

writeFileSync(join(clientDir, "index.html"), html, "utf-8");
console.log(`[post-build] Generated dist/client/index.html (entry=${entryJs}, css=${stylesCss})`);
