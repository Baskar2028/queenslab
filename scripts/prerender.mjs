import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const outputDir = path.join(root, "dist");
const clientAssetsDir = path.join(outputDir, "assets");
const serverEntry = path.join(root, ".prerender", "entry-server.js");
const { pageMetadata, publicPages, renderPage } = await import(
  pathToFileURL(serverEntry).href
);
const template = await readFile(path.join(outputDir, "index.html"), "utf8");
const assetNames = await readdir(clientAssetsDir);

const escapeAttribute = (value) =>
  value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");

const upsertMeta = (html, attribute, key, content) => {
  const keyPattern = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`<meta\\s+[^>]*${attribute}="${keyPattern}"[^>]*>`, "i");
  const tag = `<meta ${attribute}="${key}" content="${escapeAttribute(content)}" />`;
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `  ${tag}\n  </head>`);
};

const renderRoute = async (metadata) => {
  let html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${renderPage(metadata.path || "/missing")}</div>`,
  );

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${metadata.title}</title>`);
  html = upsertMeta(html, "name", "description", metadata.description);
  html = upsertMeta(html, "name", "robots", metadata.robots ?? "index, follow");

  if (metadata.path) {
    const canonical = metadata.path === "/" ? "https://atexra.vercel.app/" : `https://atexra.vercel.app${metadata.path}`;
    html = html.replace(
      /<link\s+rel="canonical"[^>]*>/i,
      `<link rel="canonical" href="${canonical}" />`,
    );
    html = upsertMeta(html, "property", "og:url", canonical);
  } else {
    html = html.replace(/<link\s+rel="canonical"[^>]*>/i, "");
  }

  html = upsertMeta(html, "property", "og:title", metadata.title);
  html = upsertMeta(html, "property", "og:description", metadata.description);
  html = upsertMeta(html, "property", "og:type", "website");
  html = upsertMeta(html, "property", "og:image", "https://atexra.vercel.app/atexra.svg");
  html = upsertMeta(html, "name", "twitter:title", metadata.title);
  html = upsertMeta(html, "name", "twitter:description", metadata.description);
  html = upsertMeta(html, "name", "twitter:image", "https://atexra.vercel.app/atexra.svg");

  for (const assetName of assetNames) {
    const baseName = assetName.replace(/-[\w-]{6,}(?=\.)/, "");
    if (baseName !== assetName) {
      html = html.replaceAll(`/src/assets/${baseName}`, `/assets/${assetName}`);
    }
  }

  const relativePath = metadata.path === ""
    ? "404.html"
    : metadata.path === "/"
      ? "index.html"
      : path.join(metadata.path.slice(1), "index.html");
  const destination = path.join(outputDir, relativePath);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, html);
};

for (const metadata of publicPages) {
  await renderRoute(metadata);
}
await renderRoute(pageMetadata.notFound);
await rm(path.join(root, ".prerender"), { recursive: true, force: true });
