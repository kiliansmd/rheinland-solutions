import assert from "node:assert/strict"
import fs from "node:fs"
import { products, articleProducts, amazonProductUrl, getArticleProducts } from "../lib/journal/products.ts"

const knownSlugs = [...fs.readdirSync("lib/journal").filter(f => f.endsWith(".ts") && f !== "products.ts")
  .flatMap(f => [...fs.readFileSync(`lib/journal/${f}`, "utf8").matchAll(/slug: "([^"]+)"/g)].map(m => m[1]))]
assert.equal(Object.keys(products).length, 4)
for (const product of Object.values(products)) {
  const url = new URL(amazonProductUrl(product.asin))
  assert.equal(url.origin, "https://www.amazon.de")
  assert.equal(url.searchParams.get("tag"), "rs-website-21")
  assert.equal(url.pathname, `/dp/${product.asin}/ref=nosim`)
  assert.ok(product.note.length > 40)
}
assert.throws(() => amazonProductUrl("not-a-product"))
assert.equal(getArticleProducts("weg-zur-eigenen-website"), null)
assert.equal(getArticleProducts("__proto__"), null)
let placements = 0
for (const [slug, selection] of Object.entries(articleProducts)) {
  assert.ok(knownSlugs.includes(slug), slug)
  assert.equal(new Set(selection.items).size, selection.items.length)
  const html = fs.readFileSync(`.next/server/app/blog/${slug}.html`, "utf8")
  const prose = html.match(/<article class="journal-prose"[\s\S]*?<\/article>/)?.[0]
  assert.ok(prose, slug)
  assert.ok(prose.includes("Als Amazon-Partner verdiene ich an qualifizierten Verkäufen."))
  assert.ok(prose.indexOf("journal-affiliate-notice") < prose.indexOf('href="https://www.amazon.de'))
  assert.ok(prose.includes('id="produktbeispiele"'))
  const links = [...prose.matchAll(/<a[^>]*href="(https:\/\/www.amazon.de[^\"]+)"[^>]*>/g)]
  assert.equal(links.length, selection.items.length, slug)
  for (const link of links) assert.match(link[0], /rel="sponsored nofollow"/)
  for (const key of selection.items) assert.ok(prose.includes(amazonProductUrl(products[key].asin)), key)
  assert.doesNotMatch(html, /<script[^>]+src="https:\/\/[^\"]*amazon|<iframe[^>]+amazon|<img[^>]+amazon/i)
  placements += links.length
}
for (const slug of knownSlugs.filter(slug => !Object.hasOwn(articleProducts, slug))) {
  const html = fs.readFileSync(`.next/server/app/blog/${slug}.html`, "utf8")
  assert.ok(!html.includes('id="produktbeispiele"'), slug)
  assert.ok(!html.includes("rs-website-21"), slug)
}
assert.ok(fs.readFileSync(".next/server/app/datenschutz.html", "utf8").includes('id="amazon-partnerlinks"'))
console.log(`PASS: ${placements} labelled affiliate links, ${Object.keys(articleProducts).length} relevant articles, ${knownSlugs.length} articles checked, correct tracking ID, no Amazon embeds, privacy note.`)
