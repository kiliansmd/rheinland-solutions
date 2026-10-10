import assert from "node:assert/strict"

// Run against a local production build or the public deployment. Read-only:
// does not submit enquiries, create accounts, or touch customer information.
const base = process.argv[2] || "http://127.0.0.1:5194"
const paths = ["/", "/secure-data-collection", "/impressum", "/datenschutz", "/business-solutions"]
const pages = await Promise.all(paths.map(async path => {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(20000) })
  assert.equal(response.status, 200, `${path} must respond successfully`)
  return response.text()
}))
const [home, product, , , business] = pages
assert.ok(!/Zertifizierte Berater|100% (?:DSGVO-konform|rechtssicher)|trust-editorial__stats/.test(home), "Homepage must not claim certification or absolute legal compliance")
for (const html of pages) {
  const nav = html.match(/<nav[^>]*aria-label="Hauptnavigation"[^>]*>([\s\S]*?)<\/nav>/)?.[1]
  assert.ok(nav, "Shared main navigation must exist")
  assert.equal((nav.match(/<a\s/g) || []).length, 4, "Three divisions plus Self Solutions")
  for (const label of ["Beratung &amp; Projekte", "Unternehmenssoftware", "Essentials", "Kostenlose Services", "Self Solutions", "Wissen &amp; Anleitungen"]) {
    assert.ok(nav.includes(label), `Navigation missing ${label}`)
  }
  assert.ok(!nav.includes("Ablauf") && !nav.includes("Kontakt"), "No process/contact navigation items")
}
assert.match(home, /href="\/business-solutions"/, "Homepage must link to Business Solutions")
assert.doesNotMatch(home, /Secure Data Collection/, "Homepage must not promote an individual business service")
assert.match(home, /href="https:\/\/essentials\.rheinland-solutions\.de\/"/, "Main must link to Essentials")
assert.match(business, /href="\/secure-data-collection"/, "Business Solutions must list Secure Data")
assert.match(product, /href="\/business-solutions"/, "Product must link back to its category")
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
console.log(`PASS: 5 routes, shared navigation with three divisions and Self Solutions, and 15 service/link checks against ${base}`)
