import type { Metadata } from "next"
import { ArrowRight, Check, Database, FileInput, LockKeyhole, Users } from "lucide-react"
import { Logo } from "@/components/logo"
import { Footer } from "@/components/footer"
import { secureDataLinks } from "@/lib/secure-data"

export const metadata: Metadata = {
  title: "Secure Data Collection | Rheinland Solutions",
  description: "Informationen sicher erfassen und gezielt weitergeben. Individuelle Formulare, geschützte Zugänge und persönliche Begleitung. Business Service ab 250 € netto im Monat.",
  alternates: { canonical: "https://www.rheinland-solutions.de/secure-data-collection" },
  openGraph: {
    title: "Secure Data Collection – ein Business Service von Rheinland Solutions",
    description: "Deine Formulare. Deine Abläufe. Informationen sicher erfassen und dort nutzen, wo du sie brauchst. Ab 250 € netto im Monat.",
    url: "https://www.rheinland-solutions.de/secure-data-collection",
    locale: "de_DE",
    type: "website",
  },
}

const benefits = [
  { icon: FileInput, title: "Deine Fragen. Dein Formular.", text: "Du legst selbst fest, welche Informationen du brauchst. Ohne starre Vorlage und ohne dich auf einen bestimmten Anwendungsfall festzulegen." },
  { icon: Users, title: "Zugang für die richtigen Menschen.", text: "Jedes Formular erhält einen eigenen Link. Du lädst Nutzer gezielt ein; sie melden sich an und erfassen ihre Angaben im zugewiesenen Formular." },
  { icon: Database, title: "Daten dort, wo sie weiterhelfen.", text: "Behalte vorhandene Angaben zentral im Blick. Ob Speicherung bei uns oder sicherer Transfer in deine Datenbank: Wir stimmen die Lösung auf deinen Ablauf ab." },
]

export default function SecureDataCollectionPage() {
  return (
    <>
      <a href="#inhalt" className="sr-only focus:not-sr-only focus:block focus:p-4">Zum Inhalt springen</a>
      <header className="border-t-[6px] border-gold bg-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-5">
          <a href="/" aria-label="Rheinland Solutions – Startseite"><Logo variant="light" size="md" /></a>
          <nav aria-label="Service-Navigation" className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#angebot" className="hover:text-gold">Angebot</a>
            <a href="#ablauf" className="hover:text-gold">So funktioniert’s</a>
            <a href={secureDataLinks.login} className="border border-white/40 px-4 py-2 hover:border-gold hover:text-gold">Admin-Login</a>
          </nav>
        </div>
      </header>
      <main id="inhalt">
        <section className="bg-secondary text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.3fr_1fr] items-center gap-14 lg:gap-20">
            <div>
              <p className="text-gold uppercase tracking-[0.18em] text-xs mb-6">Rheinland Solutions · Business Service</p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">Secure Data<br />Collection<span className="text-gold">.</span></h1>
              <p className="text-2xl mt-8 leading-snug">Informationen erfassen.<br />Sicher weiterkommen.</p>
              <p className="mt-5 text-white/80 text-lg leading-relaxed max-w-xl">Schluss mit verstreuten Angaben in E-Mails und Tabellen. Sammle die Informationen, die dein Unternehmen braucht – mit eigenen Formularen, geschützten Zugängen und einem klaren Weg zur weiteren Nutzung.</p>
              <a href="#angebot" className="inline-flex items-center gap-3 mt-8 bg-gold text-secondary px-6 py-4 font-medium hover:opacity-90">Angebot ansehen <ArrowRight aria-hidden="true" className="size-4" /></a>
              <p className="text-sm text-white/70 mt-4">Ab 250 € netto pro Monat · zuzüglich Umsatzsteuer</p>
            </div>
            <div className="border border-white/20 bg-white/5 p-7 sm:p-10">
              <div className="flex items-center gap-3 text-gold mb-8"><LockKeyhole aria-hidden="true" className="size-5" /><p className="text-sm">Deine Informationen. Dein Ablauf.</p></div>
              {[
                ["01", "Individuell erfassen", "Du bestimmst die Fragen und Felder."],
                ["02", "Zentral überblicken", "Dein Admin sieht alle noch vorhandenen Angaben."],
                ["03", "Passend weiterverwenden", "Bei uns speichern oder in dein System übertragen."],
              ].map(([number, title, text]) => (
                <div key={number} className="py-6 border-t border-white/15 flex gap-5">
                  <span className="text-gold text-sm pt-1">{number}</span>
                  <div><h2 className="text-lg font-medium">{title}</h2><p className="text-white/75 text-sm mt-2 leading-relaxed">{text}</p></div>
                </div>
              ))}
              <p className="text-white/60 text-xs pt-5 border-t border-white/15">Ein Service mit persönlicher Begleitung – kein weiteres Tool, mit dem du allein bleibst.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="vorteile" className="py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Nicht von der Stange</p>
            <h2 id="vorteile" className="font-display text-4xl sm:text-5xl max-w-2xl">Passt zu deinem Betrieb.<br />Nicht umgekehrt.</h2>
            <div className="grid md:grid-cols-3 gap-10 mt-14">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="border-t border-secondary/20 pt-8"><Icon aria-hidden="true" className="size-7 mb-6" /><h3 className="text-xl font-medium mb-4">{title}</h3><p className="text-muted-foreground leading-relaxed">{text}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="angebot" aria-labelledby="angebot-title" className="bg-muted/60 py-20 scroll-mt-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Ein klarer Einstieg</p>
              <h2 id="angebot-title" className="font-display text-4xl sm:text-5xl">Dein Business Service.</h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">Wir besprechen, was du erfassen möchtest, wer Zugriff braucht und was anschließend mit den Daten passieren soll. Daraus entsteht dein passendes Angebot.</p>
              <p className="mt-6 leading-relaxed">Speicherdauer, Löschung, Betreuung und Anbindungen vereinbaren wir passend zu deinem Auftrag. Individuelle Einrichtung und besondere Anforderungen werden im Angebot gesondert ausgewiesen.</p>
              <p className="mt-6 text-sm text-muted-foreground">Für Unternehmen. Vertragslaufzeit und Leistungsumfang werden vor der Beauftragung vereinbart.</p>
            </div>
            <div className="bg-secondary text-white border-t-4 border-gold p-8 sm:p-10">
              <p className="text-gold text-sm mb-3">Secure Data Collection</p>
              <p className="font-display text-5xl">Ab 250 €</p>
              <p className="text-white/75 mt-3">netto / Monat, zuzüglich Umsatzsteuer</p>
              <ul className="space-y-4 my-8">
                {["Bis zu 5 frei gestaltbare Formulare", "Admin-Bereich für Formulare und vorhandene Daten", "Nutzer gezielt zu einzelnen Formularen einladen", "Eigener Formularlink mit geschütztem Login", "Persönliche Abstimmung deines Ablaufs"].map(item => (
                  <li key={item} className="flex gap-3"><Check aria-hidden="true" className="size-5 text-gold shrink-0 mt-0.5" /><span>{item}</span></li>
                ))}
              </ul>
              <a href={secureDataLinks.request} className="flex justify-center items-center gap-3 bg-gold text-secondary px-5 py-4 font-medium hover:opacity-90">Service anfragen <ArrowRight aria-hidden="true" className="size-4" /></a>
              <p className="text-xs text-white/70 leading-relaxed mt-4">Die Anfrage öffnet unseren bestehenden Servicebereich. Du schließt damit noch kein kostenpflichtiges Abo ab.</p>
            </div>
          </div>
        </section>

        <section id="ablauf" aria-labelledby="ablauf-title" className="py-20 lg:py-24 scroll-mt-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="ablauf-title" className="font-display text-4xl sm:text-5xl">Von der Idee in deinen Alltag.</h2>
            <ol className="grid md:grid-cols-3 gap-10 mt-12">
              {[
                ["Gemeinsam festlegen", "Wir klären Informationen, Zugriffsrechte und die gewünschte Weiterverarbeitung. Du erhältst ein konkretes Angebot."],
                ["Formulare vorbereiten", "Du gestaltest deine Formulare im Admin-Bereich und lädst die passenden Nutzer ein. Wir begleiten die Einrichtung im vereinbarten Umfang."],
                ["Geordnet starten", "Nach Abstimmung und Freigabe können eingeladene Nutzer Angaben erfassen. Du behältst die vorhandenen Daten im Blick."],
              ].map(([title, text], index) => <li key={title}><span className="inline-flex bg-gold text-secondary size-9 items-center justify-center mb-5">{index + 1}</span><h3 className="text-xl font-medium mb-3">{title}</h3><p className="text-muted-foreground leading-relaxed">{text}</p></li>)}
            </ol>
            <aside className="mt-14 border border-secondary/20 p-6 sm:p-8 max-w-4xl" aria-label="Hinweis zum betreuten Start">
              <h3 className="font-medium text-lg">Wir starten gemeinsam – und kontrolliert.</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">Der Service befindet sich aktuell im betreuten Pilotbetrieb. Bitte verwende bis zur ausdrücklichen Freigabe nur fiktive Testdaten. Vor dem Einsatz mit echten personenbezogenen Daten klären wir die vertraglichen Datenschutzregelungen, Zugriffe, Speicherfristen und gegebenenfalls die Übertragung in dein System.</p>
              <a href={secureDataLinks.privacy} className="inline-block mt-4 underline underline-offset-4">Datenschutzinformationen zum Service</a>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
