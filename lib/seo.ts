import type { Metadata } from "next"

export const siteOrigin = "https://www.rheinland-solutions.de"

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${siteOrigin}${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title, description, url, type: "website", locale: "de_DE",
      siteName: "Rheinland Solutions",
      images: [{ url: `${siteOrigin}/opengraph-image`, width: 1200, height: 630, alt: "Rheinland Solutions – Digitalisierung, die wirkt." }],
    },
    twitter: {
      card: "summary_large_image", title, description,
      images: [`${siteOrigin}/opengraph-image`],
    },
  }
}
