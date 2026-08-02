"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const COOKIE_CONSENT_KEY = "rs-cookie-consent"

type ConsentType = "all" | "essential" | null

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleConsent = (type: ConsentType) => {
    if (type) {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
        type,
        timestamp: new Date().toISOString(),
        version: "1.0"
      }))
      
      // If analytics consent given, trigger analytics
      if (type === "all") {
        // Analytics already loaded via Vercel Analytics
      }
    }
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
    >
      <div className="max-w-2xl mx-auto bg-card border border-border shadow-2xl rounded-lg overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h2 
                id="cookie-banner-title" 
                className="text-base font-semibold text-foreground"
              >
                Datenschutzeinstellungen
              </h2>
              <p 
                id="cookie-banner-description" 
                className="mt-2 text-sm text-muted-foreground leading-relaxed"
              >
                Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                Einige sind technisch notwendig, andere helfen uns, die Website zu verbessern.
              </p>
            </div>
            <button
              onClick={() => handleConsent("essential")}
              className="text-muted-foreground hover:text-foreground transition-colors p-1 -mr-1 -mt-1"
              aria-label="Nur essenzielle Cookies akzeptieren und schließen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Details Toggle */}
          {showDetails && (
            <div className="mt-4 pt-4 border-t border-border space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-success mt-1.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Essenzielle Cookies</p>
                  <p className="text-xs text-muted-foreground">
                    Notwendig für die Grundfunktionen der Website. Können nicht deaktiviert werden.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-1.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Analyse-Cookies</p>
                  <p className="text-xs text-muted-foreground">
                    Helfen uns zu verstehen, wie Besucher mit der Website interagieren (Vercel Analytics).
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => handleConsent("all")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-10 px-6 text-sm flex-1 sm:flex-none"
            >
              Alle akzeptieren
            </Button>
            <Button
              onClick={() => handleConsent("essential")}
              variant="outline"
              className="h-10 px-6 text-sm flex-1 sm:flex-none"
            >
              Nur essenzielle
            </Button>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
            >
              {showDetails ? "Weniger anzeigen" : "Details anzeigen"}
            </button>
          </div>

          {/* Legal Links */}
          <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-4 text-xs text-muted-foreground">
            <Link href="/datenschutz" className="hover:text-foreground transition-colors">
              Datenschutzerklärung
            </Link>
            <Link href="/impressum" className="hover:text-foreground transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
