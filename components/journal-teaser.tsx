import Link from "next/link"
import { getArticle } from "@/lib/journal"

export function JournalTeaser() {
  const featured = ["homeserver-mehrwert", "dokumente-wiederfinden", "energiekosten-verstehen"].map(getArticle).filter(item => item !== undefined)
  return <section className="journal-teaser" aria-labelledby="journal-teaser-title"><div className="journal-shell"><p className="journal-eyebrow">Praxis & Anleitungen</p><h2 id="journal-teaser-title">Was wäre, wenn dir Technik<br />wirklich Arbeit abnimmt?</h2><p>Entdecke konkrete Ideen für dein Zuhause und deinen Betrieb. Zum Verstehen, Nachbauen oder gemeinsam Umsetzen.</p><div className="journal-grid">{featured.map(article => <article className="journal-card" key={article.slug}><p className="journal-card-meta">{article.category}</p><h3><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3><p>{article.description}</p><span className="journal-card-bottom" aria-hidden="true">Anleitung lesen ↗</span></article>)}</div><Link href="/blog" className="journal-text-link">Alle zwölf Beiträge entdecken →</Link></div></section>
}
