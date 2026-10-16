import { amazonProductUrl, getArticleProducts } from "@/lib/journal/products"

export function JournalProducts({ slug }: { slug: string }) {
  const selection = getArticleProducts(slug)
  if (!selection) return null

  return (
    <section id="produktbeispiele" className="journal-products" aria-labelledby="product-heading">
      <p className="journal-product-label">Werbung · Amazon-Partnerlinks</p>
      <h2 id="product-heading">Passende Hardware zum Nachbauen</h2>
      <p>{selection.intro}</p>
      <p className="journal-product-disclosure">
        Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Wenn du über einen
        dieser Links kaufst, kann Rheinland Solutions eine Provision erhalten.
        Dein Kaufpreis erhöht sich dadurch nicht.
      </p>
      <ul className="journal-product-list">
        {selection.items.map(product => (
          <li key={product.asin}>
            <h3>{product.name}</h3>
            <p>{product.purpose}</p>
            <p className="journal-product-note">{product.note}</p>
            <a className="journal-product-link" href={amazonProductUrl(product.asin)} rel="sponsored nofollow">
              {product.name} bei Amazon ansehen <span>(Werbelink)</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="journal-product-note">Produktzuordnung geprüft am 17. Oktober 2026.
        Maßgeblich sind die aktuelle Variante, der Preis und die Verfügbarkeit bei Amazon.
        Die Beispiele sind keine Voraussetzung für die Anleitung.</p>
    </section>
  )
}
