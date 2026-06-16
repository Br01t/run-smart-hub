#!/usr/bin/env node
/**
 * Static prerender: renders each URL from public/sitemap.xml via the SSR
 * bundle and writes a full HTML file under dist/<route>/index.html.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = join(ROOT, "dist");
const SSR_ENTRY = join(ROOT, "dist-ssr", "entry-prerender.js");
const TEMPLATE_PATH = join(DIST, "index.html");
const SITEMAP_PATH = join(ROOT, "public", "sitemap.xml");
const BASE_URL = "https://www.runners-hub.org";

function extractRoutes() {
  const xml = readFileSync(SITEMAP_PATH, "utf8");
  const routes = new Set();
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) {
    let url = m[1].trim();
    if (url.startsWith(BASE_URL)) url = url.slice(BASE_URL.length);
    if (!url.startsWith("/")) url = "/" + url;
    routes.add(url || "/");
  }
  return Array.from(routes);
}

function injectIntoTemplate(template, { appHtml, headTags }) {
  let html = template;
  if (headTags) {
    html = html.replace("</head>", `    ${headTags}\n  </head>`);
  }
  html = html.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    `<div id="root">${appHtml}</div>`,
  );
  return html;
}

function outputPathFor(route) {
  if (route === "/" || route === "") return join(DIST, "index.html");
  const clean = route.replace(/^\/+|\/+$/g, "");
  return join(DIST, clean, "index.html");
}

async function main() {
  if (!existsSync(SSR_ENTRY)) {
    console.error(`Missing SSR bundle at ${SSR_ENTRY}`);
    process.exit(1);
  }
  if (!existsSync(TEMPLATE_PATH)) {
    console.error(`Missing client template at ${TEMPLATE_PATH}`);
    process.exit(1);
  }

  const template = readFileSync(TEMPLATE_PATH, "utf8");
  const { render } = await import(pathToFileURL(SSR_ENTRY).href);
  const routes = extractRoutes();

  console.log(`Prerendering ${routes.length} routes…`);

  let ok = 0;
  let fail = 0;
  for (const route of routes) {
    try {
      const result = await render(route);
      const html = injectIntoTemplate(template, result);
      const out = outputPathFor(route);
      mkdirSync(dirname(out), { recursive: true });
      writeFileSync(out, html, "utf8");
      ok++;
    } catch (err) {
      fail++;
      console.error(`  ✗ ${route}: ${err?.message || err}`);
    }
  }

  console.log(`Prerender complete: ${ok} ok, ${fail} failed.`);
  if (fail > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
