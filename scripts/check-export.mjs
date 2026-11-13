import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const routes = ["/", "/acerca-de-mi", "/estudios", "/idiomas", "/proyectos", "/experiencias", "/contacto", "/proyectos/lama", "/proyectos/sigcd"];
let links = 0;
for (const route of routes) {
  const file = join("out", route, "index.html");
  const html = readFileSync(file, "utf8");
  if ((html.match(/<h1(?:\s|>)/g) ?? []).length !== 1) throw new Error(`${route}: debe tener un único h1`);
  if (!/<title>[^<]+<\/title>/.test(html)) throw new Error(`${route}: falta el título SEO`);
  for (const match of html.matchAll(/<a\b[^>]*href="([^"]*)"/g)) {
    const href = match[1];
    if (!href) throw new Error(`${route}: enlace vacío`);
    if (!href.startsWith("/")) continue;
    const path = href.split(/[?#]/)[0];
    if (!existsSync(join("out", path, "index.html")) && !existsSync(join("out", path))) {
      throw new Error(`${route}: enlace interno inexistente ${href}`);
    }
    links++;
  }
}
console.log(`${routes.length} rutas verificadas; ${links} enlaces internos válidos; títulos SEO y h1 correctos.`);
