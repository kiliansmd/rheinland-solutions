export type ArticleSection = {
  id: string
  title: string
  paragraphs?: string[]
  steps?: string[]
  code?: string
  source?: { title: string; url: string }
}
export type Article = {
  number: number
  slug: string
  category: "Zuhause" | "Daten & Überblick" | "Im Betrieb"
  title: string
  description: string
  lead: string
  result: string
  level: string
  prerequisites: string[]
  sections: ArticleSection[]
  checklist: string[]
  limits: string
  service: string
  related: string[]
}
