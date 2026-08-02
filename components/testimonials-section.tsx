"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote, Star, TrendingUp, ArrowLeftRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "Die Prozessanalyse hat uns die Augen geöffnet. Wir haben Ineffizienzen entdeckt, die uns jahrelang Zeit und Geld gekostet haben. Die Umsetzung war pragmatisch und effektiv.",
    author: "Dr. Martin Weber",
    role: "Geschäftsführer",
    company: "Weber Industrie GmbH",
    result: "30% Effizienzsteigerung",
    resultDetail: "Innerhalb von 6 Monaten",
    industry: "Industrie",
    industryColor: "bg-care-blue",
    beforeAfter: {
      before: "Manuelle Prozesse, hoher Zeitaufwand",
      after: "Digitalisierte Workflows, automatisierte Abläufe",
    },
  },
  {
    quote:
      "Die Schulungen waren praxisnah und auf unsere Bedürfnisse zugeschnitten. Unsere Mitarbeiter sind jetzt fit für die digitale Zukunft.",
    author: "Sandra Hoffmann",
    role: "Personalleitung",
    company: "Hoffmann & Partner",
    result: "100% Mitarbeiterzufriedenheit",
    resultDetail: "Nach Schulungsprogramm",
    industry: "Beratung",
    industryColor: "bg-craft-petrol",
    beforeAfter: {
      before: "Digitale Kompetenzlücken im Team",
      after: "Selbstbewusster Umgang mit neuen Tools",
    },
  },
  {
    quote:
      "Von der Strategie bis zur Umsetzung – alles aus einer Hand. Die Digitalisierung unserer Kernprozesse hat unsere Wettbewerbsfähigkeit deutlich gestärkt.",
    author: "Michael Braun",
    role: "COO",
    company: "Braun Logistik AG",
    result: "Digitale Transformation",
    resultDetail: "Erfolgreich umgesetzt",
    industry: "Logistik",
    industryColor: "bg-gastro-orange",
    beforeAfter: {
      before: "Fragmentierte Systemlandschaft",
      after: "Integrierte digitale Plattform",
    },
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showBeforeAfter, setShowBeforeAfter] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const navigate = useCallback(
    (direction: "next" | "prev") => {
      if (isAnimating) return
      setIsAnimating(true)
      setShowBeforeAfter(false)

      if (direction === "next") {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      } else {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      }

      setTimeout(() => setIsAnimating(false), 500)
    },
    [isAnimating],
  )

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => navigate("next"), 10000)
    return () => clearInterval(timer)
  }, [navigate])

  const current = testimonials[currentIndex]

  return (
    <section id="referenzen" className="py-24 lg:py-32 bg-muted relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-care-blue/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-10 lg:mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Referenzen
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-secondary">
            Was unsere Kunden sagen
          </h2>
          <p className="text-muted-foreground mt-5 text-base sm:text-lg max-w-xl mx-auto">
            Erfahren Sie, wie Unternehmen wie Ihres messbare Ergebnisse erzielen.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-border/50 ring-1 ring-black/5">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10" aria-hidden="true" />

            <div
              className={cn(
                "relative z-10 transition-all duration-500",
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0",
              )}
            >
              {/* Stars with rating */}
              <div className="flex items-center gap-2 mb-5" role="img" aria-label="5 von 5 Sternen">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gastro-orange text-gastro-orange" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-secondary">5.0</span>
              </div>

              {/* Quote */}
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-secondary font-medium leading-relaxed mb-6">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="flex flex-wrap gap-2 mb-6">
                <div className="inline-flex items-center gap-2 bg-success/10 text-success font-bold px-4 py-2 rounded-full text-sm border border-success/20">
                  <TrendingUp className="w-4 h-4" />
                  {current.result}
                </div>
                <div className="inline-flex items-center gap-2 bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm">
                  {current.resultDetail}
                </div>
                <button
                  onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                  className={cn(
                    "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                    showBeforeAfter ? "bg-primary text-white" : "bg-primary/10 text-primary hover:bg-primary/20",
                  )}
                >
                  <ArrowLeftRight className="w-4 h-4" />
                  Vorher/Nachher
                </button>
              </div>

              {showBeforeAfter && (
                <div className="mb-6 grid sm:grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4">
                    <div className="text-xs font-bold text-destructive uppercase tracking-wider mb-2">Vorher</div>
                    <p className="text-sm text-card-foreground">{current.beforeAfter.before}</p>
                  </div>
                  <div className="bg-success/5 border border-success/20 rounded-xl p-4">
                    <div className="text-xs font-bold text-success uppercase tracking-wider mb-2">Nachher</div>
                    <p className="text-sm text-card-foreground">{current.beforeAfter.after}</p>
                  </div>
                </div>
              )}

              {/* Author */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-muted overflow-hidden ring-4 ring-background shadow-lg shrink-0">
                  <img
                    src={`/professional-team.png?key=wy1li&height=56&width=56&query=professional ${current.author} portrait`}
                    alt={`Portrait von ${current.author}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-display font-bold text-secondary text-lg">{current.author}</div>
                  <div className="text-muted-foreground text-sm">
                    {current.role}, {current.company}
                  </div>
                </div>
                <span
                  className={cn(
                    "inline-block px-3 py-1.5 rounded-full text-xs font-semibold text-white self-start sm:self-center",
                    current.industryColor,
                  )}
                >
                  {current.industry}
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
              <div className="flex gap-2" role="tablist" aria-label="Testimonial Navigation">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    role="tab"
                    aria-selected={index === currentIndex}
                    aria-label={`Testimonial ${index + 1} von ${testimonials.length}`}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true)
                        setShowBeforeAfter(false)
                        setCurrentIndex(index)
                        setTimeout(() => setIsAnimating(false), 500)
                      }
                    }}
                    className={cn(
                      "h-2.5 rounded-full transition-all duration-300",
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 w-2.5 hover:bg-muted-foreground/50",
                    )}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigate("prev")}
                  aria-label="Vorheriges Testimonial"
                  className="w-10 h-10 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigate("next")}
                  aria-label="Nächstes Testimonial"
                  className="w-10 h-10 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-10 grid grid-cols-3 gap-4 text-center">
          {[
            { value: "98%", label: "Weiterempfehlungsrate" },
            { value: "4.9/5", label: "Kundenbewertung" },
            { value: "100+", label: "Erfolgreiche Projekte" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-5 border border-border/50 shadow-sm hover:shadow-md transition-shadow card-hover"
            >
              <div className="text-2xl sm:text-3xl font-display font-bold text-secondary">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            Werden Sie Teil unserer <strong className="text-secondary">Erfolgsgemeinschaft</strong> – über 100
            Unternehmen profitieren bereits von unserer Expertise.
          </p>
        </div>
      </div>
    </section>
  )
}
