"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Hammer, UtensilsCrossed, AlertTriangle, ArrowRight, TrendingDown, X } from "lucide-react"
import { cn } from "@/lib/utils"

const industries = [
  {
    icon: Heart,
    title: "Pflegedienste",
    headline: "Fachkräftemangel durch veraltete Website?",
    problems: [
      { text: "73% der Bewerber springen bei unprofessionellen Websites ab", severity: "high" },
      { text: "Angehörige finden nicht die Informationen, die sie brauchen", severity: "medium" },
      { text: "Konkurrenz mit moderner Website zieht Ihre Bewerber ab", severity: "high" },
    ],
    consequence: "Jede Woche ohne moderne Website = verlorene Bewerber",
    color: "bg-care-blue",
    lightColor: "bg-care-blue/10",
    textColor: "text-care-blue",
    borderColor: "border-care-blue/30",
  },
  {
    icon: Hammer,
    title: "Handwerksbetriebe",
    headline: "Unsichtbar auf Google = keine Aufträge",
    problems: [
      { text: "87% aller Kunden suchen zuerst online nach Handwerkern", severity: "high" },
      { text: "Ohne SEO gehen lukrative Aufträge an die Konkurrenz", severity: "high" },
      { text: "Veraltete Kontaktdaten führen zu verlorenen Anfragen", severity: "medium" },
    ],
    consequence: "Jeden Monat entgehen Ihnen durchschnittlich 15 Anfragen",
    color: "bg-craft-petrol",
    lightColor: "bg-craft-petrol/10",
    textColor: "text-craft-petrol",
    borderColor: "border-craft-petrol/30",
  },
  {
    icon: UtensilsCrossed,
    title: "Gastronomie",
    headline: "Leere Tische durch fehlende Online-Präsenz",
    problems: [
      { text: "68% der Gäste entscheiden sich online für ein Restaurant", severity: "high" },
      { text: "Keine Online-Reservierung = Gäste gehen zur Konkurrenz", severity: "high" },
      { text: "Veraltete Speisekarte schreckt potenzielle Gäste ab", severity: "medium" },
    ],
    consequence: "Eine schlechte Website kostet Sie 20-30 Reservierungen/Monat",
    color: "bg-gastro-orange",
    lightColor: "bg-gastro-orange/10",
    textColor: "text-gastro-orange",
    borderColor: "border-gastro-orange/30",
  },
]

export function ProblemsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="vorteile" className="py-24 lg:py-32 bg-muted relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <span className="inline-flex items-center gap-2 text-destructive font-semibold text-sm uppercase tracking-wider bg-destructive/10 px-4 py-2 rounded-full">
            <AlertTriangle className="w-4 h-4" />
            Warnung: Jeden Tag verlieren Sie Geld
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mt-6">
            Während Sie lesen, buchen Kunden bei <span className="text-destructive">Ihrer Konkurrenz</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-lg sm:text-xl leading-relaxed">
            87% der Kunden entscheiden online, bevor sie anrufen.{" "}
            <strong className="text-secondary">Was finden sie bei Ihnen?</strong>
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-10 bg-destructive/5 border border-destructive/20 rounded-2xl p-5 text-center">
          <p className="text-destructive font-semibold text-lg mb-1">Wussten Sie schon?</p>
          <p className="text-muted-foreground text-sm">
            Unternehmen ohne professionelle Website verlieren im Schnitt{" "}
            <strong className="text-secondary">€3.200 pro Monat</strong> an potenziellem Umsatz – das sind{" "}
            <strong className="text-secondary">€38.400 pro Jahr</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              data-index={index}
              className={cn(
                "group relative bg-card rounded-2xl p-6 lg:p-8 shadow-lg border flex flex-col transition-all duration-700",
                "hover:shadow-2xl hover:-translate-y-1",
                industry.borderColor,
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div
                className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shrink-0",
                  industry.lightColor,
                )}
              >
                <industry.icon className={cn("w-7 h-7", industry.textColor)} />
              </div>

              <span className={cn("text-sm font-bold uppercase tracking-wider", industry.textColor)}>
                {industry.title}
              </span>
              <h3 className="text-xl font-display font-bold text-secondary mt-2 mb-5">{industry.headline}</h3>

              <ul className="space-y-3 flex-1">
                {industry.problems.map((problem, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                        problem.severity === "high" ? "bg-destructive/15" : "bg-muted",
                      )}
                    >
                      <X
                        className={cn(
                          "w-3.5 h-3.5",
                          problem.severity === "high" ? "text-destructive" : "text-muted-foreground",
                        )}
                      />
                    </div>
                    <span className="text-sm leading-relaxed text-muted-foreground">{problem.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-border">
                <div className="flex items-start gap-3 bg-destructive/5 rounded-xl p-4">
                  <TrendingDown className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-destructive">{industry.consequence}</p>
                </div>
              </div>

              <a
                href="#demo"
                className={cn(
                  "mt-5 flex items-center gap-2 font-semibold text-sm transition-all cursor-pointer group/link",
                  industry.textColor,
                )}
              >
                Jetzt Problem lösen
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
