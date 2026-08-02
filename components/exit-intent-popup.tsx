"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { X, Gift, Clock, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    },
    [hasShown],
  )

  useEffect(() => {
    const shown = sessionStorage.getItem("exitPopupShown")
    if (shown) {
      setHasShown(true)
      return
    }

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave)
    }, 5000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [handleMouseLeave])

  const handleClose = () => {
    setIsVisible(false)
    sessionStorage.setItem("exitPopupShown", "true")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      sessionStorage.setItem("exitPopupShown", "true")
      setTimeout(() => {
        setIsVisible(false)
      }, 3000)
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-secondary/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleClose}
      />

      <div
        className={cn(
          "relative bg-card rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 fade-in duration-300",
        )}
      >
        <div className="bg-gradient-to-r from-primary to-primary/90 text-white px-6 py-3.5 flex items-center justify-center relative">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-semibold">Exklusives Angebot – nur jetzt!</span>
          </div>
          <button
            onClick={handleClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Schließen"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Gift className="w-8 h-8 text-primary" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-secondary text-center mb-3">
                Moment noch!
              </h3>

              <p className="text-muted-foreground text-center mb-6 text-base">
                Holen Sie sich Ihren <strong className="text-secondary">kostenlosen Website-Check (€300 Wert)</strong> –
                wir zeigen Ihnen, wie viel Umsatz Sie gerade verlieren.
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  "Analyse Ihrer aktuellen Online-Präsenz",
                  "Konkrete Optimierungspotenziale aufgedeckt",
                  "Unverbindlich & 100% kostenlos",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-card-foreground">
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ihre E-Mail-Adresse"
                  required
                  className="w-full h-12 px-4 rounded-xl border border-border bg-muted/50 text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
                <Button
                  type="submit"
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/25 group"
                >
                  Kostenlosen Check anfordern
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">Kein Spam. Ihre Daten sind sicher.</p>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-display text-2xl font-bold text-secondary mb-2">Perfekt!</h3>
              <p className="text-muted-foreground">Ihr Website-Check ist unterwegs. Prüfen Sie Ihr Postfach.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
