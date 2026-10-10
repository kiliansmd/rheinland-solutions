import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import os from "node:os"
import vm from "node:vm"
import { spawnSync } from "node:child_process"
import ts from "typescript"

const cache = new Map()
function load(file) {
  const filename = path.resolve(file.endsWith(".ts") ? file : `${file}.ts`)
  if (cache.has(filename)) return cache.get(filename)
  const module = { exports: {} }
  cache.set(filename, module.exports)
  const code = ts.transpileModule(fs.readFileSync(filename, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText
  vm.runInThisContext(`(function(require,module,exports){${code}\n})`, { filename })(specifier => load(path.join(path.dirname(filename), specifier)), module, module.exports)
  return module.exports
}
const { articles, articleSummaries, readingMinutes } = load("lib/journal/index.ts")
assert.equal(articles.length, 12)
assert.equal(new Set(articles.map(a => a.slug)).size, 12)
assert.equal(articleSummaries.length, 12)
for (const article of articles) {
  assert.ok(article.sections.length >= 4, article.slug)
  assert.ok(article.checklist.length >= 4, article.slug)
  assert.ok(readingMinutes(article) >= 3)
  assert.ok(!("sections" in articleSummaries.find(a => a.slug === article.slug)), "No full articles in client filter payload")
  const ids = ["ergebnis", "pruefliste", "unterstuetzung", ...article.sections.map(s => s.id)]
  assert.equal(new Set(ids).size, ids.length, `Unique section IDs: ${article.slug}`)
  for (const related of article.related) assert.ok(articles.some(a => a.slug === related), related)
  for (const section of article.sections) if (section.source) assert.equal(new URL(section.source.url).protocol, "https:")
}

// Execute the exact published example with artificial files only.
const example = articles.find(a => a.slug === "bueroaufgaben-automatisieren").sections.find(s => s.code?.includes("import csv")).code
const temp = fs.mkdtempSync(path.join(os.tmpdir(), "rs-journal-example-"))
const source = path.join(temp, "Eingang")
fs.mkdirSync(source)
fs.writeFileSync(path.join(source, "Beispiel.pdf"), "Synthetic test file, not a real invoice")
fs.writeFileSync(path.join(source, "=TEST.pdf"), "Synthetic formula-name test")
fs.writeFileSync(path.join(source, "Notiz.txt"), "Synthetic note")
fs.mkdirSync(path.join(source, "Unterordner"))
fs.symlinkSync(path.join(source, "Notiz.txt"), path.join(source, "Link.txt"))
const output = path.join(temp, "bericht.csv")
const run = target => spawnSync("python3", ["-", source, target], { input: example, encoding: "utf8" })
const first = run(output)
assert.equal(first.status, 0, first.stderr)
const csv = fs.readFileSync(output, "utf8")
assert.equal(csv.trim().split(/\r?\n/).length, 4, "Three files plus CSV header")
assert.ok(csv.includes("'=TEST.pdf"), "Spreadsheet formula safety")
assert.ok(!csv.includes("Link.txt") && !csv.includes("Unterordner"))
assert.notEqual(run(output).status, 0, "Must not overwrite existing report")
assert.equal(fs.readFileSync(output, "utf8"), csv)
assert.notEqual(run(path.join(source, "bericht.csv")).status, 0, "Output must stay outside source directory")
assert.equal(fs.readFileSync(path.join(source, "Notiz.txt"), "utf8"), "Synthetic note")
console.log("PASS: 12 article structures, related links, source URLs and runnable Python example (including safety cases)")

const base = process.argv[2]
if (base) {
  const index = await fetch(new URL("/blog", base))
  assert.equal(index.status, 200)
  const indexHtml = await index.text()
  for (const article of articles) assert.ok(indexHtml.includes(`href="/blog/${article.slug}"`), `Index link: ${article.slug}`)
  for (const article of articles) {
    const response = await fetch(new URL(`/blog/${article.slug}`, base))
    assert.equal(response.status, 200, article.slug)
    const html = await response.text()
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, "Exactly one main heading")
    assert.ok(html.includes(`rel="canonical" href="https://www.rheinland-solutions.de/blog/${article.slug}"`))
    assert.ok(html.includes('aria-label="In diesem Beitrag"'))
    for (const section of article.sections) assert.ok(html.includes(`id="${section.id}"`), section.id)
    assert.ok(html.includes('id="pruefliste"'))
    assert.ok(html.includes('id="unterstuetzung"'))
    assert.ok(html.includes("mailto:info@rheinland-solutions.de?subject="))
    for (const related of article.related) assert.ok(html.includes(`href="/blog/${related}"`))
  }
  const missing = await fetch(new URL("/blog/diesen-beitrag-gibt-es-nicht", base))
  assert.equal(missing.status, 404)
  console.log(`PASS: index, 12 article routes, metadata, table of contents, CTAs, related links and unknown-slug 404 against ${base}`)
}
