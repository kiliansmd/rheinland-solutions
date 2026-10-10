import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JournalIndex } from "@/components/journal-index"
import { articleSummaries, journalCategories } from "@/lib/journal"

export const metadata: Metadata = {
  title: "Self Solutions – Digitales verstehen und selber machen | Rheinland Solutions",
  description: "Self Solutions: Anleitungen zu Smart Home, WLAN, Homeservern und eigenen Websites. Mit praktischen Beispielen und verständlichen Erklärungen.",
  alternates: { canonical: "https://www.rheinland-solutions.de/blog" },
  openGraph: { title: "Self Solutions", description: "Anleitungen zu Smart Home, WLAN, Homeservern und eigenen Websites.", url: "https://www.rheinland-solutions.de/blog", type: "website" },
  twitter: { card: "summary", title: "Self Solutions | Rheinland Solutions", description: "Smart Home, Websites und digitaler Alltag einfach erklärt." },
}

export default function BlogPage() {
  return <><Header /><main id="main" className="journal-page">
    <div className="journal-shell">
      <header className="journal-intro">
        <p className="journal-eyebrow">Wissen & Anleitungen</p>
        <h1>Self Solutions</h1>
        <p className="journal-lead">Was brauchst du für eine eigene Website? Woran liegt das langsame WLAN? Und wann lohnt sich ein Homeserver? Hier findest du Erklärungen und Anleitungen, mit denen du diese Fragen selbst angehen kannst.</p>
      </header>
      <nav className="journal-start" aria-label="Einfach anfangen"><p>Für den Einstieg</p><div><a href="/blog/smart-home-was-ist-sinnvoll">Was bringt mir Smart Home?</a><a href="/blog/wlan-langsam-einfach-pruefen">Warum ist mein WLAN langsam?</a><a href="/blog/weg-zur-eigenen-website">Meine erste Website</a></div></nav>
      <JournalIndex articles={articleSummaries} categories={journalCategories} />
      <aside className="journal-cta"><h2>Du kommst an einer Stelle nicht weiter?</h2><p>Schreib uns, was du vorhast und wo es hakt. Wir klären mit dir, ob eine Beratung reicht oder du Unterstützung bei der Einrichtung brauchst.</p><a className="journal-button" href="mailto:info@rheinland-solutions.de?subject=Frage%20zu%20Self%20Solutions">Kontakt aufnehmen</a></aside>
    </div>
  </main><Footer /></>
}
