import type { MetadataRoute } from "next"
import { articles, journalDate } from "@/lib/journal"
import { siteOrigin } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteOrigin
  return [
    ...["", "/business-solutions", "/secure-data-collection", "/blog", "/impressum", "/datenschutz"].map(route => ({ url: `${origin}${route}` })),
    ...articles.map(article => ({ url: `${origin}/blog/${article.slug}`, lastModified: journalDate })),
  ]
}
