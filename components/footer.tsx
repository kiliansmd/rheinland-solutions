import { Logo } from "@/components/logo"

export function Footer() {
  return <footer id="kontakt" className="brand-footer">
    <div className="brand-footer-inner">
      <div>
        <a href="/" aria-label="Rheinland Solutions – Startseite"><Logo size="md" /></a>
        <p>Digitalisierung, die zu deinem Unternehmen passt.<br />Persönlich begleitet. Praktisch umgesetzt.</p>
        <a className="brand-link" href="mailto:info@rheinland-solutions.de">info@rheinland-solutions.de</a>
        <p className="brand-address">Spitzwegstraße 23A · 42719 Solingen</p>
      </div>
      <nav aria-label="Angebote">
        <strong>Rheinland Solutions</strong>
        <a href="/#leistungen">Leistungen</a>
        <a href="/business-solutions">Business Solutions</a>
        <a href="https://essentials.rheinland-solutions.de/">Essentials · kostenlose Werkzeuge</a>
        <a href="/#ablauf">So arbeiten wir</a>
      </nav>
    </div>
    <div className="brand-footer-bottom">
      <p>© 2026 Rheinland Solutions · Inhaber: Kevin Müller</p>
      <nav aria-label="Rechtliches"><a href="/impressum">Impressum</a><a href="/datenschutz">Datenschutz</a></nav>
    </div>
  </footer>
}
