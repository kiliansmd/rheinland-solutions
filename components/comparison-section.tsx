"use client"

import { useEffect, useRef, useState } from "react"
import { Check, X, ArrowRight, Zap, Clock, Users, TrendingDown, TrendingUp, AlertTriangle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const comparisonData = {
  without: {
    title: "Ohne professionelle Website",
    subtitle: "Ihr Unternehmen bleibt unsichtbar",
    icon: TrendingDown,
    items: [
      { text: "Unsichtbar auf Google – Kunden finden Sie nicht", severity: "high" },
      { text: "Veraltetes Image schreckt Kunden ab", severity: "high" },
      { text: "Keine Online-Bewerbungen", severity: "high" },
      { text: "Konkurrenz zieht Ihre Kunden ab", severity: "medium" },
      { text: "Manuelle Terminabsprache kostet Zeit", severity: "medium" },
      { text: "Rechtliche Risiken ohne DSGVO", severity: "high" },
    ],
  },
  with: {
    title: "Mit RheinlandSolutions",
    subtitle: "Ihr Geschäft wächst automatisch",
    icon: TrendingUp,
    items: [
      { text: "Top-Platzierungen auf Google", highlight: true },
      { text: "Professioneller Auftritt stärkt Ihr Image", highlight: false },
      { text: "Karriereportal bringt Bewerbungen", highlight: true },
      { text: "Sie werden zur ersten Wahl", highlight: false },
      { text: "Online-Buchung spart 5+ Stunden/Woche", highlight: true },
      { text: "100% DSGVO-konform", highlight: false },
    ],
  },
}

const statistics = [
  { value: "73%", label: "Bewerber springen ab", detail: "bei veralteten Websites" },
  { value: "87%", label: "Kunden suchen online", detail: "nach Dienstleistern" },
  { value: "€3.200", label: "Entgangener Umsatz", detail: "pro Monat ohne Website" },
]

export function ComparisonSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSide, setHoveredSide] = useState<"without" | "with" | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden gradient-mesh" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider bg-primary/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
            <Zap className="w-4 h-4" />
            Der Unterschied
          </span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 sm:mt-6 text-balance">
            Was Sie <span className="text-destructive">verlieren</span> vs. was Sie{" "}
            <span className="text-success">gewinnen</span>
          </h2>
          <p className="text-muted-foreground mt-3 sm:mt-5 text-base sm:text-xl leading-relaxed">
            Die Entscheidung liegt bei Ihnen.
          </p>
        </div>

        {/* Statistics Banner - Improved mobile layout */}
        <div
          className={cn(
            "max-w-4xl mx-auto mb-8 sm:mb-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {statistics.map((stat, i) => (
            <div
              key={i}
              className="bg-destructive/5 border border-destructive/20 rounded-xl p-3 sm:p-4 text-center hover:bg-destructive/10 transition-all"
            >
              <div className="text-xl sm:text-3xl font-display font-bold text-destructive mb-0.5 sm:mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-foreground">{stat.label}</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">{stat.detail}</div>
            </div>
          ))}
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Without Website */}
          <div
            className={cn(
              "relative transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12",
            )}
            onMouseEnter={() => setHoveredSide("without")}
            onMouseLeave={() => setHoveredSide(null)}
          >
            <div
              className={cn(
                "relative bg-card rounded-xl sm:rounded-2xl border-2 overflow-hidden transition-all duration-500 h-full",
                hoveredSide === "without" ? "border-destructive/50 shadow-2xl shadow-destructive/10" : "border-border",
              )}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-destructive/10 to-destructive/5 px-4 sm:px-6 py-4 sm:py-5 border-b border-destructive/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-destructive/15 rounded-xl flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm sm:text-lg text-foreground">
                      {comparisonData.without.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{comparisonData.without.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="p-4 sm:p-6">
                <ul className="space-y-2.5 sm:space-y-3">
                  {comparisonData.without.items.map((item, i) => (
                    <li
                      key={i}
                      className={cn(
                        "flex items-start gap-2.5 sm:gap-3 transition-all duration-300",
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
                      )}
                      style={{ transitionDelay: `${300 + i * 60}ms` }}
                    >
                      <div
                        className={cn(
                          "w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                          item.severity === "high" ? "bg-destructive/15" : "bg-muted",
                        )}
                      >
                        <X
                          className={cn(
                            "w-3 h-3 sm:w-3.5 sm:h-3.5",
                            item.severity === "high" ? "text-destructive" : "text-muted-foreground",
                          )}
                        />
                      </div>
                      <span
                        className={cn(
                          "text-xs sm:text-sm leading-relaxed",
                          item.severity === "high" ? "text-foreground font-medium" : "text-muted-foreground",
                        )}
                      >
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Warning Box */}
                <div className="mt-4 sm:mt-6 bg-destructive/5 border border-destructive/20 rounded-xl p-3 sm:p-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-destructive shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-destructive font-medium">
                      Jeden Tag ohne Website verlieren Sie Kunden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* With Website */}
          <div
            className={cn(
              "relative transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12",
            )}
            onMouseEnter={() => setHoveredSide("with")}
            onMouseLeave={() => setHoveredSide(null)}
          >
            <div
              className={cn(
                "relative bg-card rounded-xl sm:rounded-2xl border-2 overflow-visible transition-all duration-500 h-full pt-4",
                hoveredSide === "with" ? "border-success/50 shadow-2xl shadow-success/10" : "border-success/30",
              )}
            >
              {/* Recommended Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-success text-white text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg shadow-success/30 flex items-center gap-1.5 whitespace-nowrap">
                  <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white" />
                  Empfohlen
                </span>
              </div>

              {/* Header */}
              <div className="bg-gradient-to-r from-success/10 to-success/5 px-4 sm:px-6 py-4 sm:py-5 border-b border-success/20 mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-success/15 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm sm:text-lg text-foreground">
                      {comparisonData.with.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{comparisonData.with.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="p-4 sm:p-6">
                <ul className="space-y-2.5 sm:space-y-3">
                  {comparisonData.with.items.map((item, i) => (
                    <li
                      key={i}
                      className={cn(
                        "flex items-start gap-2.5 sm:gap-3 transition-all duration-300",
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4",
                      )}
                      style={{ transitionDelay: `${400 + i * 60}ms` }}
                    >
                      <div
                        className={cn(
                          "w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                          item.highlight ? "bg-success" : "bg-success/15",
                        )}
                      >
                        <Check
                          className={cn("w-3 h-3 sm:w-3.5 sm:h-3.5", item.highlight ? "text-white" : "text-success")}
                        />
                      </div>
                      <span
                        className={cn(
                          "text-xs sm:text-sm leading-relaxed",
                          item.highlight ? "text-foreground font-medium" : "text-muted-foreground",
                        )}
                      >
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Box */}
                <div className="mt-4 sm:mt-6 bg-gradient-to-r from-success/10 to-primary/10 border border-success/20 rounded-xl p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-foreground font-medium mb-3">
                    Starten Sie jetzt und sichern Sie sich Ihren Vorteil!
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="bg-success hover:bg-success/90 text-white shadow-lg group w-full sm:w-auto"
                  >
                    <a href="#demo">
                      Kostenlos beraten lassen
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats - Improved mobile layout */}
        <div
          className={cn(
            "mt-8 sm:mt-12 max-w-3xl mx-auto bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border shadow-lg transition-all duration-700 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <div className="font-display font-bold text-foreground text-sm sm:text-base">Fertig in 2-4 Wochen</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Schnelle Umsetzung</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <div className="font-display font-bold text-foreground text-sm sm:text-base">50+ zufriedene Kunden</div>
                <div className="text-xs sm:text-sm text-muted-foreground">98% Weiterempfehlung</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
