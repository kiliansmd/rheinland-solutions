import Link from "next/link"
import { articles, getArticle } from "@/lib/journal"

export function JournalTeaser() {
  const featured = ["smart-home-was-ist-sinnvoll", "weg-zur-eigenen-website", "wlan-langsam-einfach-pruefen"].map(getArticle).filter(item => item !== undefined)
  return <section className="journal-teaser" aria-labelledby="journal-teaser-title"><div className="journal-shell"><p className="journal-eyebrow">Self Solutions</p><h2 id="journal-teaser-title">Zum Nachlesen</h2><p>Smart Home, eigene Websites und die kleinen Fragen im digitalen Alltag. Erklärungen und Anleitungen für den Einstieg.</p><div className="journal-grid">{featured.map(article => <article className="journal-card" key={article.slug}><p className="journal-card-meta">{article.category}</p><h3><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3><p>{article.description}</p></article>)}</div><Link href="/blog" className="journal-text-link">Alle {articles.length} Beiträge</Link></div></section>
}
