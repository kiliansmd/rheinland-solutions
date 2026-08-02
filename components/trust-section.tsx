"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Shield, Users, Star, CheckCircle2, Zap, Heart, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

const logos = [
  { name: "Weber Industrie GmbH" },
  { name: "Hoffmann & Partner" },
  { name: "Braun Logistik AG" },
  { name: "Schneider Consulting" },
  { name: "Meyer Technologies" },
  { name: "Fischer Group" },
  { name: "Wagner Solutions" },
  { name: "Becker Digital" },
]

const awards = [
  { icon: Award, label: "Zertifizierte Berater", value: "100%", subtext: "qualifiziert", color: "text-gold" },
  { icon: Shield, label: "Datenschutz", value: "100%", subtext: "DSGVO-konform", color: "text-success" },
  { icon: Star, label: "Kundenbewertung", value: "4.9/5", subtext: "auf Google", color: "text-gold" },
  { icon: Users, label: "Erfolgreiche Projekte", value: "100+", subtext: "zufriedene Kunden", color: "text-primary" },
]

const guarantees = [
  { icon: CheckCircle2, text: "Individuelle Lösungen" },
  { icon: Zap, text: "Schnelle Umsetzung" },
  { icon: Shield, text: "Vertraulichkeit" },
  { icon: Heart, text: "Persönliche Betreuung" },
]

export function TrustSection() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section className="py-16 lg:py-20 bg-background relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Awards Grid */}
        <div
          className={cn(
            "grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-5 lg:p-6 border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 bg-muted")}>
                <award.icon className={cn("w-6 h-6", award.color)} />
              </div>
              <div className="font-display text-2xl lg:text-3xl font-bold text-secondary">{award.value}</div>
              <div className="text-sm font-medium text-secondary mt-1">{award.label}</div>
              <div className="text-xs text-muted-foreground">{award.subtext}</div>
            </div>
          ))}
        </div>

        {/* Guarantees Row */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-3 lg:gap-6 mb-12 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-success/5 border border-success/20 rounded-full px-4 py-2"
            >
              <guarantee.icon className="w-4 h-4 text-success" />
              <span className="text-sm font-medium text-secondary">{guarantee.text}</span>
            </div>
          ))}
        </div>

        {/* Client Logos Marquee */}
        <div
          className={cn(
            "transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <p className="text-center text-sm text-muted-foreground mb-6">
            Vertrauen von über <strong className="text-secondary">100 Unternehmen</strong> deutschlandweit
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex gap-8 animate-marquee">
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex items-center gap-2 bg-muted/50 rounded-xl px-4 py-3 shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
