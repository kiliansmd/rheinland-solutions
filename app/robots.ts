import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://rheinland-solutions.de/sitemap.xml",
    host: "https://rheinland-solutions.de",
  }
}
