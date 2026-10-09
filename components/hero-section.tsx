import { InteractiveLeadForm } from "./interactive-lead-form"

export function HeroSection() {
  return <section id="demo" className="brand-hero">
    <div className="brand-hero-copy">
      <p className="brand-eyebrow">Beratung & Digitalisierung</p>
      <h1 className="brand-title">Digitalisierung,<br />die <em>wirkt.</em></h1>
      <p className="brand-intro">Von der klaren Strategie bis zur wirksamen Umsetzung: Wir vereinfachen Prozesse, schaffen digitale Lösungen und befähigen Ihr Team.</p>
      <div className="brand-actions">
        <a href="#mobile-anfrage" className="brand-button lg:hidden">Projekt anfragen</a>
        <a href="#kontakt" className="brand-button hidden lg:inline-flex">Projekt anfragen</a>
        <a href="#leistungen" className="brand-button-outline">Unsere Leistungen</a>
      </div>
      <p className="brand-caption">Aus Solingen. Für Unternehmen, die weiterkommen möchten.</p>
    </div>
    <div className="brand-hero-form hidden lg:block"><InteractiveLeadForm /></div>
  </section>
}

export function MobileHeroForm() {
  return <section id="mobile-anfrage" className="brand-mobile-form lg:hidden" aria-label="Projektanfrage"><InteractiveLeadForm /></section>
}
