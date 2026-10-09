import assert from "node:assert/strict"

// Run against a local production build or the public deployment. Read-only:
// does not submit enquiries, create accounts, or touch customer information.
const base = process.argv[2] || "http://127.0.0.1:5194"
const paths = ["/", "/secure-data-collection", "/impressum", "/datenschutz"]
const pages = await Promise.all(paths.map(async path => {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(20000) })
  assert.equal(response.status, 200, `${path} must respond successfully`)
  return response.text()
}))
const [home, product] = pages
assert.match(home, /href="\/secure-data-collection"/, "Homepage must link to service")
assert.match(home, /Service entdecken/, "Homepage must show service teaser")
assert.match(product, /<h1[^>]*>Secure Data/, "Product heading must be present")
assert.match(product, /Business Service/, "Business Service positioning must be present")
assert.match(product, /Ab 250 €/, "Starting price must be present")
assert.match(product, /zuzüglich Umsatzsteuer/, "VAT qualification must be present")
assert.match(product, /Bis zu 5 frei gestaltbare Formulare/, "Form allowance must be present")
assert.match(product, /href="https:\/\/rheinland-essentials\.alpher5\.chatgpt\.site\/datenerfassung\/login"/, "Admin must use the existing authenticated service")
assert.match(product, /href="https:\/\/rheinland-essentials\.alpher5\.chatgpt\.site\/datenerfassung#bestellen"/, "Enquiry must use the existing service")
assert.match(product, /fiktive Testdaten/, "Pilot limitation must remain visible")
assert.match(product, /rel="canonical" href="https:\/\/www\.rheinland-solutions\.de\/secure-data-collection"/, "Canonical must identify the product URL")
assert.doesNotMatch(product, /Besucheranmeldung/, "Product must not be limited to visitor registration")
console.log(`PASS: 4 routes and 12 Secure Data checks against ${base}`)
