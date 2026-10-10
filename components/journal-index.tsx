"use client"

import { useState } from "react"
import Link from "next/link"

type Summary = { number: number; slug: string; category: string; title: string; description: string; minutes: number }

export function JournalIndex({ articles, categories }: { articles: Summary[]; categories: readonly string[] }) {
  const [category, setCategory] = useState("Alle Themen")
  const [query, setQuery] = useState("")
  const search = query.trim().toLocaleLowerCase("de")
  const visible = articles.filter(article => (category === "Alle Themen" || article.category === category)
    && `${article.title} ${article.description} ${article.category}`.toLocaleLowerCase("de").includes(search))

  return <section aria-label="Beiträge entdecken">
    <div className="journal-tools">
      <div className="journal-filters" role="group" aria-label="Nach Thema filtern">
        {["Alle Themen", ...categories].map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
      </div>
      <label className="journal-search">Beitrag suchen<input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Zum Beispiel: Homeserver" /></label>
    </div>
    <p className="journal-count" role="status" aria-live="polite">{visible.length === articles.length ? `${articles.length} Beiträge` : `${visible.length} von ${articles.length} Beiträgen`}</p>
    <div className="journal-index-list">
      {visible.map(article => <article key={article.slug} className="journal-card">
        <div className="journal-card-meta"><span>{article.category}</span><span>{article.minutes} Min.</span></div>
        <h2><Link href={`/blog/${article.slug}`}>{article.title}</Link></h2>
        <p>{article.description}</p>
      </article>)}
    </div>
    {visible.length === 0 && <div className="journal-empty"><h2>Zu dieser Suche gibt es noch keinen Beitrag.</h2><p>Versuche einen anderen Begriff oder zeige wieder alle Themen an.</p><button type="button" className="journal-button" onClick={() => { setCategory("Alle Themen"); setQuery("") }}>Filter zurücksetzen</button></div>}
  </section>
}
