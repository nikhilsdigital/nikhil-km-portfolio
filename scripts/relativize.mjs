// Makes the static export portable: it can be served from any sub-path.
// The export is flat (every page is a top-level .html), so rewriting
// root-absolute asset URLs ("/_next/...", "/work/...") to relative ones is
// enough — every document resolves them from the same directory.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const OUT = path.resolve('out');
const ASSET_PREFIXES = ['_next/', 'work/', 'video/'];
const ROOT_FILES = ['about-desk.webp', 'icon.svg', 'sitemap.xml', 'robots.txt'];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

// Quote styles seen in the export: plain HTML/JS quotes, and escaped quotes
// inside the streamed RSC payload (self.__next_f.push(...)).
const OPENERS = ['"', "'", '\\"', '('];

function stripAbsolute(text) {
  let out = text;
  for (const p of ASSET_PREFIXES) {
    for (const q of OPENERS) {
      out = out.split(`${q}/${p}`).join(`${q}${p}`);
    }
  }
  for (const f of ROOT_FILES) {
    for (const q of OPENERS) {
      out = out.split(`${q}/${f}`).join(`${q}${f}`);
    }
  }
  return out;
}

const files = await walk(OUT);
let html = 0;
let js = 0;

for (const file of files) {
  const ext = path.extname(file);
  if (ext === '.html') {
    let text = await readFile(file, 'utf8');
    text = stripAbsolute(text);
    await writeFile(file, text);
    html += 1;
  } else if (ext === '.js') {
    const text = await readFile(file, 'utf8');
    const next = stripAbsolute(text);
    if (next !== text) {
      await writeFile(file, next);
      js += 1;
    }
  }
}

console.log(`relativized ${html} html files, ${js} js files`);
