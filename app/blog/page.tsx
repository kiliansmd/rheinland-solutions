import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JournalIndex } from "@/components/journal-index"
import { articleSummaries, journalCategories } from "@/lib/journal"

export const metadata: Metadata = {
  title: "Self Solutions – Digitales verstehen und selber machen | Rheinland Solutions",
  description: "Verständliche Anleitungen für den digitalen Alltag: Smart Home, WLAN, sichere Konten, eigene Websites und praktische Automatisierung. Self Solutions by Rheinland Solutions.",
  alternates: { canonical: "https://www.rheinland-solutions.de/blog" },
  openGraph: { title: "Self Solutions · by Rheinland Solutions", description: "Digitales verstehen, im Alltag nutzen und selbst umsetzen. Von den Grundlagen bis zur eigenen Lösung.", url: "https://www.rheinland-solutions.de/blog", type: "website" },
  twitter: { card: "summary", title: "Self Solutions | Rheinland Solutions", description: "Smart Home, Websites und digitaler Alltag einfach erklärt." },
}

export default function BlogPage() {
  return <><Header /><main id="main" className="journal-page">
    <div className="journal-shell">
      <header className="journal-intro">
        <p className="journal-eyebrow">by Rheinland Solutions</p>
        <h1>Self <em>Solutions.</em></h1>
        <p className="journal-tagline">Verstehen. Selber machen. Weiterkommen.</p>
        <p className="journal-lead">Was hilft dir im digitalen Alltag wirklich? Hier findest du verständliche Antworten und Anleitungen – vom langsamen WLAN bis zur eigenen Website. Ohne Vorwissen anfangen oder gezielt tiefer einsteigen.</p>
        <div className="journal-promise"><span>{articleSummaries.length} praktische Beiträge</span><span>Grundlagen & konkrete Anleitungen</span><span>Mit Tests & ehrlichen Grenzen</span></div>
      </header>
      <nav className="journal-start" aria-label="Einfach anfangen"><p>Noch kein Vorwissen? Hier kannst du starten.</p><div><a href="/blog/smart-home-was-ist-sinnvoll">Was bringt mir Smart Home? ↗</a><a href="/blog/wlan-langsam-einfach-pruefen">Warum ist mein WLAN langsam? ↗</a><a href="/blog/weg-zur-eigenen-website">Wie komme ich zur eigenen Website? ↗</a></div></nav>
      <JournalIndex articles={articleSummaries} categories={journalCategories} />
      <aside className="journal-cta"><p className="journal-eyebrow">Deine Idee. Dein Weg.</p><h2>Selbst machen – oder gemeinsam weiterkommen.</h2><p>Du möchtest das Ergebnis, aber nicht jeden Einrichtungsschritt selbst übernehmen? Wir unterstützen bei der Planung, bei einzelnen Bausteinen oder bei der Umsetzung deiner individuellen Lösung.</p><a className="journal-button" href="mailto:info@rheinland-solutions.de?subject=Meine%20Idee%20aus%20Self%20Solutions">Über meine Idee sprechen ↗</a></aside>
    </div>
  </main><Footer /></>
}
