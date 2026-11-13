import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import assert from "node:assert/strict";
import ts from "typescript";
import { parse } from "@babel/parser";
import traversePackage from "@babel/traverse";

const traverse = traversePackage.default;
const source = fs.readFileSync("src/data/translations.ts", "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
const exported = {};
vm.runInNewContext(compiled.outputText, { exports: exported, Map });
const { translations, translate } = exported;
const keys = new Set();
for (const row of translations) {
  assert.equal(row.length, 3);
  assert(!keys.has(row[0]), `Duplicate translation: ${row[0]}`);
  keys.add(row[0]);
  assert(row.every(value => typeof value === "string" && value.trim().length > 0));
}
assert.equal(translate("es", "Contacto"), "Contacto");
assert.equal(translate("en", "Contacto"), "Contact");
assert.equal(translate("fr", "Descargar CV"), "Télécharger le CV");
assert.equal(translate("en", " Conocé más sobre mí "), " Get to know me ");
assert.equal(translate("fr", "+54 9 2936 405660"), "+54 9 2936 405660");
assert.equal(translate("fr", "Ana Paz Bauser"), "Ana Paz Bauser");
assert(translate("en", "Ver foto completa: Un día de playa (se abre en otra pestaña)").includes("A day at the beach"));
assert(translate("fr", "Captura del proyecto LAMA").includes("Capture du projet LAMA"));

const unchanged = new Set([
  "Ana Paz", "Ana Paz.", "Ana Paz Bauser", "Bauser", "apb. — Ana Paz Bauser", "ana paz. bauser",
  "Universidad Nacional del Sur", "Escuela de Educación Secundaria N.º 3", "Bahía Blanca", "Espartillar", "JACAI Arcoíris", "CPE Lyon", "ARFITEC",
  "Next.js", "JavaScript", "TypeScript", "SQL", "Java", "Prolog", "Playwright", "Postman", "Newman", "k6", "Supabase", "Prisma", "Git", "Vercel", "Scrum", "Gantt", "Wireframes", "GitHub", "LinkedIn", "APIs REST",
  "LAMA", "SIGCD", "S.", "lama.", "Hola", "Hello", "Bonjour", "Bonjour, Lyon.",
  "Ana Paz Bauser · Aprender, crear, conectar", "%s · Ana Paz Bauser",
]);
const missing = new Set();
function inspect(text) {
  const key = text.trim().replace(/\s+/g, " ");
  if (!/\p{L}/u.test(key) || key.startsWith("/") || key.includes("@") || key.startsWith("http") || unchanged.has(key) || keys.has(key)) return;
  missing.add(key);
}
function walk(folder) {
  for (const entry of fs.readdirSync(folder, { withFileTypes: true })) {
    const file = path.join(folder, entry.name);
    if (entry.isDirectory()) { walk(file); continue; }
    if (!/\.tsx?$/.test(file) || /(?:translations\.ts|language\.tsx|botanical\.tsx)$/.test(file)) continue;
    const isData = file.includes(`${path.sep}data${path.sep}`);
    const ast = parse(fs.readFileSync(file, "utf8"), { sourceType: "module", plugins: ["typescript", "jsx"] });
    traverse(ast, {
      StringLiteral(node) {
        const parent = node.parent;
        if (isData && parent.type !== "ImportDeclaration" && parent.type !== "TSLiteralType" && !(parent.type === "ObjectProperty" && parent.key.name === "slug")) inspect(node.node.value);
        if (parent.type === "JSXAttribute" && ["aria-label", "title", "description", "eyebrow", "alt"].includes(parent.name.name)) inspect(node.node.value);
        if (parent.type === "JSXExpressionContainer" && node.parentPath.parent.openingElement?.name?.name === "T") inspect(node.node.value);
        if (parent.type === "ObjectProperty" && parent.value === node.node && ["label", "title", "description", "text", "name", "sub", "date", "project"].includes(parent.key.name)) inspect(node.node.value);
        if (parent.type === "ArrayExpression" && node.findParent(item => item.type === "JSXExpressionContainer")) inspect(node.node.value);
      },
      JSXText(node) {
        const value = node.node.value.trim();
        if (/\p{L}/u.test(value)) inspect(value);
      },
    });
  }
}
walk("src");
assert.equal(missing.size, 0, `Missing translations:\n${[...missing].sort().join("\n")}`);
console.log(`${translations.length} Spanish/English/French entries verified; source coverage, fallback, spacing and accessible captions checked.`);
