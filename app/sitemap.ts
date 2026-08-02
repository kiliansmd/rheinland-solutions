import type { MetadataRoute } from "next"

const pages = ["", "/impressum", "/datenschutz"]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `https://rheinland-solutions.de${path}`,
    changeFrequency: path ? "yearly" : "monthly",
    priority: path ? 0.3 : 1,
  }))
}
