import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Impressum | Rheinland Solutions",
  description: "Impressum und rechtliche Angaben von Rheinland Solutions gemäß § 5 DDG.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {/* Back Link */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>

          <h1 className="font-display text-4xl sm:text-5xl font-normal text-foreground mb-12">
            Impressum
          </h1>

          <div className="prose prose-neutral max-w-none space-y-8">
            {/* Angaben gemäß § 5 TMG */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <address className="not-italic text-muted-foreground leading-relaxed">
                Rheinland Solutions<br />
                Spitzwegstraße 23A<br />
                42719 Solingen<br />
                Deutschland
              </address>
            </section>

            {/* Vertreten durch */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Vertreten durch
              </h2>
              <p className="text-muted-foreground">
                Inhaber: Kevin Müller
              </p>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Kontakt
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                E-Mail: info@rheinland-solutions.de
              </p>
            </section>

            {/* Verantwortlich für den Inhalt */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Kevin Müller<br />
                Spitzwegstraße 23A<br />
                42719 Solingen
              </p>
            </section>

            {/* Streitschlichtung */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Streitschlichtung
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 ml-1"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-muted-foreground mt-3">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            {/* Haftung für Inhalte */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Haftung für Inhalte
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen.
              </p>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte 
                umgehend entfernen.
              </p>
            </section>

            {/* Haftung für Links */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Haftung für Links
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich.
              </p>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße 
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine 
                permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von 
                Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </section>

            {/* Urheberrecht */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Urheberrecht
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die 
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche 
                gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen 
                werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
