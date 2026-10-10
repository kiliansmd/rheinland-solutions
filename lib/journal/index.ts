import { homeArticles } from "./home"
import { dataArticles } from "./data"
import { businessArticles } from "./business"
import { websiteArticles } from "./websites"
import { basicArticles } from "./basics"
export type { Article } from "./types"

export const articles = [...homeArticles, ...dataArticles, ...businessArticles, ...websiteArticles, ...basicArticles]
export const journalDate = "2026-10-10"
export const journalCategories = ["Einfach digital", "Zuhause", "Websites & Schnittstellen", "Daten & Überblick", "Im Betrieb"] as const
export const getArticle = (slug: string) => articles.find(article => article.slug === slug)
export function readingMinutes(article: (typeof articles)[number]) {
  const text = [article.lead, article.result, ...article.prerequisites, ...article.sections.flatMap(s => [s.title, ...(s.paragraphs ?? []), ...(s.steps ?? [])]), ...article.checklist, article.limits, article.service].join(" ")
  return Math.max(3, Math.ceil(text.split(/\s+/).length / 180))
}
export const articleSummaries = articles.map(article => ({ number: article.number, slug: article.slug, category: article.category, title: article.title, description: article.description, minutes: readingMinutes(article) }))
