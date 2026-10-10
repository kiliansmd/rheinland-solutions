import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { articles, getArticle, journalDate, readingMinutes } from "@/lib/journal"

type Props = { params: Promise<{ slug: string }> }
export const dynamicParams = false
export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })) }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle((await params).slug)
  if (!article) return { title: "Beitrag nicht gefunden" }
  const url = `https://www.rheinland-solutions.de/blog/${article.slug}`
  return {
    title: `${article.title} | Rheinland Solutions`, description: article.description,
    alternates: { canonical: url },
    openGraph: { title: article.title, description: article.description, url, type: "article", publishedTime: journalDate, authors: ["Rheinland Solutions"] },
    twitter: { card: "summary", title: article.title, description: article.description },
  }
}

export default async function ArticlePage({ params }: Props) {
  const article = getArticle((await params).slug)
  if (!article) notFound()
  const related = article.related.map(getArticle).filter(item => item !== undefined)
  const jsonLd = {
    "@context": "https://schema.org", "@type": "BlogPosting", headline: article.title,
    description: article.description, datePublished: journalDate, dateModified: journalDate,
    author: { "@type": "Organization", name: "Rheinland Solutions", url: "https://www.rheinland-solutions.de/" },
    mainEntityOfPage: `https://www.rheinland-solutions.de/blog/${article.slug}`, inLanguage: "de-DE",
  }
  return <><Header /><main id="main" className="journal-page journal-article-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <div className="journal-shell">
      <nav className="journal-breadcrumb" aria-label="Brotkrumennavigation"><Link href="/">Startseite</Link><span aria-hidden="true">/</span><Link href="/blog">Praxis & Anleitungen</Link><span aria-hidden="true">/</span><span>{article.category}</span></nav>
      <header className="journal-article-header"><p className="journal-eyebrow">{article.category} · Anleitung {String(article.number).padStart(2, "0")}</p><h1>{article.title}</h1><p className="journal-lead">{article.lead}</p><p className="journal-byline">Rheinland Solutions <span>·</span> <time dateTime={journalDate}>10. Oktober 2026</time> <span>·</span> {readingMinutes(article)} Min. Lesezeit</p></header>
      <div className="journal-article-layout">
        <aside className="journal-toc"><nav aria-label="In diesem Beitrag"><p>In diesem Beitrag</p><a href="#ergebnis">Das Ergebnis</a>{article.sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}<a href="#pruefliste">Deine Prüfliste</a><a href="#unterstuetzung">Unterstützung</a></nav></aside>
        <article className="journal-prose" aria-label={article.title}>
          <section id="ergebnis" className="journal-result"><p className="journal-eyebrow">Das baust du auf</p><h2>Dein Ergebnis</h2><p>{article.result}</p><span className="journal-level">{article.level}</span></section>
          <section className="journal-prerequisites"><h2>Was du mitbringen solltest</h2><ul>{article.prerequisites.map(item => <li key={item}>{item}</li>)}</ul></section>
          {article.sections.map((section, index) => <section key={section.id} id={section.id} className="journal-section"><p className="journal-section-number">Schritt {String(index + 1).padStart(2, "0")}</p><h2>{section.title}</h2>{section.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.steps && <ol>{section.steps.map(step => <li key={step}>{step}</li>)}</ol>}{section.code && <pre tabIndex={0} aria-label={`Codebeispiel: ${section.title}`}><code>{section.code}</code></pre>}{section.source && <p className="journal-source">Zum Nachlesen: <a href={section.source.url}>{section.source.title} ↗</a></p>}</section>)}
          <section id="pruefliste" className="journal-checklist"><h2>Woran du erkennst, dass es funktioniert</h2><ul>{article.checklist.map(item => <li key={item}>{item}</li>)}</ul></section>
          <section className="journal-limits"><h2>Was diese Anleitung nicht verspricht</h2><p>{article.limits}</p></section>
          <section id="unterstuetzung" className="journal-cta"><p className="journal-eyebrow">Passend für deinen Alltag</p><h2>Du möchtest das auch?</h2><p>{article.service}</p><a className="journal-button" href={`mailto:info@rheinland-solutions.de?subject=${encodeURIComponent(`Anfrage zum Beitrag: ${article.title}`)}`}>Meine Umsetzung besprechen ↗</a><Link className="journal-text-link" href="/#leistungen">Beratung & Projekte kennenlernen</Link></section>
        </article>
      </div>
      <section className="journal-related"><p className="journal-eyebrow">Der nächste sinnvolle Schritt</p><h2>Hier geht es weiter.</h2><div className="journal-grid">{related.map(item => <article key={item.slug} className="journal-card"><div className="journal-card-meta"><span>{item.category}</span><span>{readingMinutes(item)} Min.</span></div><h3><Link href={`/blog/${item.slug}`}>{item.title}</Link></h3><p>{item.description}</p><span className="journal-card-bottom" aria-hidden="true">Weiterlesen ↗</span></article>)}</div><Link className="journal-text-link" href="/blog">← Alle zwölf Anleitungen</Link></section>
    </div>
  </main><Footer /></>
}
