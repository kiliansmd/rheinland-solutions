import { FileCheck2 } from "lucide-react"

export function SecureDataTeaser() {
  return <section aria-labelledby="secure-data-title" className="container mx-auto px-5 sm:px-6 lg:px-8">
    <article className="business-card">
      <div>
        <div className="brand-icon"><FileCheck2 aria-hidden="true" size={28} /></div>
        <p className="brand-eyebrow mt-6">Business Service</p>
        <h2 id="secure-data-title" className="text-3xl sm:text-4xl font-semibold mt-3">Secure Data Collection</h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mt-5">Informationen sicher einsammeln. Daten zentral im Blick behalten. Mit frei gestaltbaren Formularen, geschützten Zugängen und einer Weiterverarbeitung, die zu deinem Betrieb passt.</p>
        <a href="/secure-data-collection" className="brand-button mt-7">Service kennenlernen</a>
      </div>
      <div className="business-card-price">
        <p className="text-3xl font-semibold">Ab 250 €</p>
        <p className="text-muted-foreground mt-2">netto / Monat<br />zuzüglich Umsatzsteuer</p>
        <p className="mt-6">Bis zu 5 individuelle Formulare</p>
        <p className="text-sm text-muted-foreground mt-3">Betreuter Einstieg · persönlicher Ansprechpartner</p>
      </div>
    </article>
  </section>
}
