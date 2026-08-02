"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { Phone, X, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ChatWidget() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [phone, setPhone] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleClose = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setIsDismissed(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return

      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      setIsVisible(scrollPercent >= 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  useEffect(() => {
    if (!isVisible || isDismissed || isSubmitted) return

    const timer = setTimeout(() => {
      setIsDismissed(true)
    }, 20000)

    return () => clearTimeout(timer)
  }, [isVisible, isDismissed, isSubmitted])

  useEffect(() => {
    if (!isSubmitted) return

    const timer = setTimeout(() => {
      setIsDismissed(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [isSubmitted])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone.trim() || phone.length < 6) return

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1000)
  }

  if (isDismissed && !isSubmitted) return null

  if (isSubmitted && !isDismissed) {
    return (
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 bg-emerald-500 text-white py-3 px-4 transition-all duration-500",
          "animate-in slide-in-from-bottom fade-in",
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <span className="font-medium text-sm">Wir rufen Sie in ca. 15 Minuten zurück.</span>
          <button
            type="button"
            onClick={handleClose}
            className="ml-2 hover:bg-white/20 p-1 rounded-full transition-colors"
            aria-label="Schließen"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    )
  }

  if (isDismissed) return null

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 transition-all duration-500",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none",
      )}
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
            {/* Left side - Message */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-gray-900 font-medium text-xs sm:text-sm">Kostenlose Beratung?</p>
                <p className="text-gray-500 text-[10px] sm:text-xs hidden sm:block">Rückruf in 15 Min.</p>
              </div>
            </div>

            {/* Form - Full width on mobile */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 flex-1">
              <div className="relative flex-1">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ihre Telefonnummer"
                  className="w-full h-9 sm:h-10 pl-9 pr-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading || phone.length < 6}
                size="sm"
                className="h-9 sm:h-10 px-3 sm:px-5 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg flex items-center gap-1.5 sm:gap-2 transition-all disabled:opacity-50 shrink-0"
              >
                {isLoading ? (
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span className="hidden sm:inline">Anrufen</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>

              {/* Close button - Always visible */}
              <button
                type="button"
                onClick={handleClose}
                className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors shrink-0"
                aria-label="Schließen"
              >
                <X className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
