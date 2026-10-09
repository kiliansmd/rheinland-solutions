import { ArrowRight, FileCheck2 } from "lucide-react"

export function SecureDataTeaser() {
  return (
    <section aria-labelledby="secure-data-title" className="bg-secondary text-secondary-foreground py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1fr_auto] gap-10 items-center">
        <div className="max-w-2xl">
          <p className="text-gold text-xs uppercase tracking-[0.18em] mb-5">Ein eigener Business Service</p>
          <h2 id="secure-data-title" className="font-display text-4xl sm:text-5xl mb-5">Secure Data Collection</h2>
          <p className="text-lg text-white/80 leading-relaxed">Informationen sicher einsammeln. Gemeinsam bearbeiten. Dort nutzen, wo sie gebraucht werden – mit frei gestaltbaren Formularen und persönlicher Begleitung.</p>
          <a href="/secure-data-collection" className="inline-flex items-center gap-3 mt-8 bg-gold text-secondary px-6 py-4 font-medium hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">Service entdecken <ArrowRight aria-hidden="true" className="size-4" /></a>
        </div>
        <div className="border border-white/20 p-8 md:min-w-64">
          <FileCheck2 aria-hidden="true" className="size-8 text-gold mb-8" />
          <p className="text-3xl font-display">Ab 250 € <span className="text-base font-sans">/ Monat</span></p>
          <p className="text-sm text-white/75 mt-2">Netto, zuzüglich Umsatzsteuer</p>
          <p className="text-sm text-white/85 mt-6">Bis zu 5 individuelle Formulare</p>
        </div>
      </div>
    </section>
  )
}
