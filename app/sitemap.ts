import type { MetadataRoute } from "next"
import { articles, journalDate } from "@/lib/journal"

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://www.rheinland-solutions.de"
  return [
    ...["", "/business-solutions", "/secure-data-collection", "/blog", "/impressum", "/datenschutz"].map(route => ({ url: `${origin}${route}` })),
    ...articles.map(article => ({ url: `${origin}/blog/${article.slug}`, lastModified: journalDate })),
  ]
}
