import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');
const html = await readFile(path.join(dist, 'index.html'), 'utf8');
const origin = 'https://mohammed-004del.github.io/mohamed-webdev-Portfolio';
const studies = [
  { slug: 'spiky', title: 'Spiky — Case Study | Mohammed Mahmood', description: 'An Arabic-first coaching platform: explore the coach dashboard, connected client experience, and interface decisions behind Spiky.' },
  { slug: 'al-araby-oils', title: 'AL-Araby Oils — Case Study | Mohammed Mahmood', description: 'A closer look at the AL-Araby Oils storefront interface: product discovery, reusable React components, responsive layouts, and cart interactions.' },
];
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
for (const study of studies) {
  const url = `${origin}/work/${study.slug}/`;
  const page = html
    .replace(/<title>.*?<\/title>/s, `<title>${escape(study.title)}</title>`)
    .replace(/(<meta name="description"\s+content=")[^"]*("\s*\/?>)/, `$1${escape(study.description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*("\s*\/?>)/, `$1${escape(study.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*("\s*\/?>)/, `$1${escape(study.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*("\s*\/?>)/, `$1${url}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*("\s*\/?>)/, `$1${url}$2`);
  const destination = path.join(dist, 'work', study.slug);
  await mkdir(destination, { recursive: true });
  await writeFile(path.join(destination, 'index.html'), page);
}
const locations = [`${origin}/`, ...studies.map(study => `${origin}/work/${study.slug}/`)];
await writeFile(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${locations.map(url => `<url><loc>${url}</loc></url>`).join('')}</urlset>`);
await writeFile(path.join(dist, '.nojekyll'), '');
console.log('Generated two direct-entry case study pages and sitemap.');
