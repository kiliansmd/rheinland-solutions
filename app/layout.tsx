import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { PreventOverscroll } from "@/components/prevent-overscroll"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

export const metadata: Metadata = {
  title: "Digitalisierung, Prozess-Beratung & Schulungen | Rheinland Solutions",
  description:
    "Ihr Partner für digitale Transformation: Individuelle Beratung, Prozessoptimierung und praxisnahe Schulungen. Über 100 erfolgreiche Projekte. Jetzt unverbindlich anfragen!",
  keywords:
    "Digitalisierung, Prozessberatung, Schulungen, digitale Transformation, Unternehmensberatung, Change Management, Prozessoptimierung, Rheinland Solutions, Deutschland",
  authors: [{ name: "Rheinland Solutions" }],
  creator: "Rheinland Solutions",
  publisher: "Rheinland Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Digitalisierung, Prozess-Beratung & Schulungen | Rheinland Solutions",
    description: "Ihr Partner für digitale Transformation und Prozessoptimierung. Über 100 erfolgreiche Projekte deutschlandweit.",
    type: "website",
    locale: "de_DE",
    siteName: "Rheinland Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitalisierung, Prozess-Beratung & Schulungen | Rheinland Solutions",
    description: "Ihr Partner für digitale Transformation und Prozessoptimierung.",
  },
  alternates: {
    canonical: "https://rheinlandsolutions.de",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#e4b817",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Rheinland Solutions",
              "description": "Ihr Partner für Digitalisierung, Prozess-Beratung und Schulungen",
              "url": "https://rheinlandsolutions.de",
              "logo": "https://rheinlandsolutions.de/images/logo-dark.png",
              "founder": "Kevin Müller",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Spitzwegstraße 23A",
                "postalCode": "42719",
                "addressLocality": "Solingen",
                "addressCountry": "DE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@rheinland-solutions.de",
                "contactType": "customer service",
                "areaServed": "DE",
                "availableLanguage": "German"
              },
              "sameAs": [
                "https://www.linkedin.com/company/rheinlandsolutions"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary/20 selection:text-foreground">
        <PreventOverscroll />
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
