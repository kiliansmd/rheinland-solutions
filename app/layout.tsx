import type React from "react"
import type { Metadata, Viewport } from "next"
import { PreventOverscroll } from "@/components/prevent-overscroll"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

export const metadata: Metadata = {
  title: "Digitalisierung, Prozess-Beratung & Schulungen | Rheinland Solutions",
  description:
    "Rheinland Solutions berät Unternehmen bei Digitalisierung, Prozessoptimierung und praxisnahen Schulungen – individuell, persönlich und verbindlich.",
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
    ],
  },
  openGraph: {
    title: "Digitalisierung, Prozess-Beratung & Schulungen | Rheinland Solutions",
    description: "Beratung für Digitalisierung, Prozessoptimierung und praxisnahe Schulungen aus Solingen.",
    type: "website",
    locale: "de_DE",
    siteName: "Rheinland Solutions",
  },
  alternates: {
    canonical: "https://rheinland-solutions.de",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#efff00",
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
              "url": "https://rheinland-solutions.de",
              "logo": "https://rheinland-solutions.de/images/logo-dark.png",
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
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary/20 selection:text-foreground">
        <PreventOverscroll />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
