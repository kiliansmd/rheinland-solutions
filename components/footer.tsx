import { Mail, MapPin } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <>
      <div className="footer-logo-bar" aria-label="Rheinland Solutions">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Logo variant="dark" size="md" />
        </div>
      </div>

      <footer id="kontakt" className="bg-secondary text-secondary-foreground relative overflow-hidden">
        {/* Main Footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14 relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Company Info */}
            <div>
              <p className="text-secondary-foreground/70 mb-5 leading-relaxed text-sm">
                Ihr Partner für Digitalisierung, Prozess-Beratung und Schulungen – individuell und persönlich.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.15em] text-secondary-foreground/50 mb-5">Schnellzugriff</h3>
              <ul className="space-y-2.5">
                {[
                  { href: "#leistungen", label: "Leistungen" },
                  { href: "#ablauf", label: "Ablauf" },
                  { href: "#kontakt", label: "Kontakt" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm animated-underline inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/impressum"
                    className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm animated-underline inline-block"
                  >
                    Impressum
                  </a>
                </li>
                <li>
                  <a
                    href="/datenschutz"
                    className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm animated-underline inline-block"
                  >
                    Datenschutz
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.15em] text-secondary-foreground/50 mb-5">Kontakt</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  <a
                    href="mailto:info@rheinland-solutions.de"
                    className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm"
                  >
                    info@rheinland-solutions.de
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  <span className="text-secondary-foreground/70 text-sm">
                    Spitzwegstraße 23A, 42719 Solingen, Deutschland
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-secondary-foreground/40">
              <p>© 2026 Rheinland Solutions · Inhaber: Kevin Müller</p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="/impressum" className="hover:text-secondary-foreground/70 transition-colors">
                  Impressum
                </a>
                <a href="/datenschutz" className="hover:text-secondary-foreground/70 transition-colors">
                  Datenschutz
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
