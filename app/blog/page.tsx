import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JournalIndex } from "@/components/journal-index"
import { articleSummaries, journalCategories } from "@/lib/journal"

export const metadata: Metadata = {
  title: "Praxis & Anleitungen: Technik, die dir Arbeit abnimmt | Rheinland Solutions",
  description: "Zwölf praktische Anleitungen für Homeserver, Smart Home, Dokumente und digitale Abläufe. Verstehen, selbst umsetzen oder gemeinsam mit Rheinland Solutions starten.",
  alternates: { canonical: "https://www.rheinland-solutions.de/blog" },
  openGraph: { title: "Technik, die dir Arbeit abnimmt.", description: "Praxis & Anleitungen von Rheinland Solutions: zwölf Ideen zum Selbermachen.", url: "https://www.rheinland-solutions.de/blog", type: "website" },
  twitter: { card: "summary", title: "Praxis & Anleitungen | Rheinland Solutions", description: "Homeserver, Daten und digitale Abläufe zum Selbermachen." },
}

export default function BlogPage() {
  return <><Header /><main id="main" className="journal-page">
    <div className="journal-shell">
      <header className="journal-intro">
        <p className="journal-eyebrow">Rheinland Solutions · Praxis & Anleitungen</p>
        <h1>Technik, die dir<br /><em>Arbeit abnimmt.</em></h1>
        <p className="journal-lead">Weniger suchen. Weniger Handarbeit. Mehr Überblick. Hier erfährst du, was mit der passenden Technik möglich ist – und wie du selbst damit anfängst.</p>
        <div className="journal-promise"><span>12 konkrete Einstiege</span><span>Schritt für Schritt erklärt</span><span>Mit Tests & ehrlichen Grenzen</span></div>
      </header>
      <JournalIndex articles={articleSummaries} categories={journalCategories} />
      <aside className="journal-cta"><p className="journal-eyebrow">Deine Idee. Dein Weg.</p><h2>Selbst machen – oder gemeinsam weiterkommen.</h2><p>Du möchtest das Ergebnis, aber nicht jeden Einrichtungsschritt selbst übernehmen? Wir unterstützen bei der Planung, bei einzelnen Bausteinen oder bei der Umsetzung deiner individuellen Lösung.</p><a className="journal-button" href="mailto:info@rheinland-solutions.de?subject=Meine%20Idee%20aus%20dem%20Praxis-Blog">Über meine Idee sprechen ↗</a></aside>
    </div>
  </main><Footer /></>
}
