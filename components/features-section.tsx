"use client"

import { useEffect, useRef, useState } from "react"
import {
  Target,
  Smartphone,
  Search,
  Users2,
  Headphones,
  Shield,
  Sparkles,
  Check,
  Palette,
  Globe,
  Mail,
  MapPin,
  Calendar,
  ClipboardCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Target,
    title: "Branchen-Expertise",
    description: "Texte, Bilder und Funktionen speziell für Ihre Branche",
    highlighted: true,
  },
  {
    icon: Palette,
    title: "Logo-Design",
    description: "Professionelle Neugestaltung oder Rework Ihres Logos inklusive",
    highlighted: false,
    isNew: true,
  },
  {
    icon: Globe,
    title: "Domain & SSL",
    description: "Domainerwerb, Einrichtung und SSL-Zertifikat – alles inklusive",
    highlighted: false,
    isNew: true,
  },
  {
    icon: Mail,
    title: "Profi-Email",
    description: "Professionelle Email-Adressen mit Ihrer Domain (z.B. info@ihre-firma.de)",
    highlighted: false,
    isNew: true,
  },
  {
    icon: MapPin,
    title: "Google Business",
    description: "Google Business-Profil Optimierung für lokale Sichtbarkeit",
    highlighted: false,
    isNew: true,
  },
  {
    icon: Calendar,
    title: "Online-Buchung",
    description: "Integrierter Buchungskalender für Termine und Reservierungen",
    highlighted: true,
    isNew: true,
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Perfekt auf allen Geräten – über 65% der Nutzer kommen mobil",
    highlighted: false,
  },
  {
    icon: Search,
    title: "SEO & DSGVO",
    description: "Gefunden werden auf Google und 100% rechtssicher bleiben",
    highlighted: false,
  },
  {
    icon: ClipboardCheck,
    title: "3 Revisions-Audits",
    description: "Alle guten Dinge sind drei – 3 vollständige Optimierungs-Audits nach Launch inklusive",
    highlighted: true,
  },
  {
    icon: Users2,
    title: "Recruiting-Lösungen",
    description: "Karriere-Sektion mit Bewerbungsformularen & Social Media",
    highlighted: false,
  },
  {
    icon: Headphones,
    title: "Support & Hosting",
    description: "Technischer Support, Updates und schnelles Hosting inklusive",
    highlighted: false,
  },
  {
    icon: Shield,
    title: "Zufriedenheitsgarantie",
    description: "Kein Risiko – volle Transparenz bei allen Leistungen",
    highlighted: false,
  },
]

export function FeaturesSection() {
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
    <section className="py-24 lg:py-32 bg-secondary relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.015] to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div 
              className={cn(
                "h-px bg-primary origin-right transition-all duration-700",
                isVisible ? "w-12" : "w-0"
              )} 
            />
            <span className="text-xs uppercase tracking-[0.2em] text-secondary-foreground/50 font-medium">
              Leistungen
            </span>
            <div 
              className={cn(
                "h-px bg-primary origin-left transition-all duration-700",
                isVisible ? "w-12" : "w-0"
              )} 
            />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-secondary-foreground">
            Unser Leistungsangebot
          </h2>
          <p className="text-secondary-foreground/60 mt-5 text-base sm:text-lg max-w-xl mx-auto">
            Ein Partner für alles: Design, Technik, Inhalte und laufende Betreuung.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group relative transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <div
                className={cn(
                  "relative h-full p-4 lg:p-5 flex flex-col transition-all duration-300",
                  feature.highlighted
                    ? "bg-primary/10 border-l-2 border-l-primary"
                    : "bg-card text-card-foreground border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5",
                )}
              >
                <div className="flex items-start justify-between mb-3">
                  <feature.icon className={cn("w-5 h-5", feature.highlighted ? "text-primary" : "text-muted-foreground")} />
                  {feature.isNew && (
                    <span className="text-[9px] font-medium text-primary uppercase tracking-wider">
                      Neu
                    </span>
                  )}
                </div>

                <h3 className="font-medium text-sm mb-1.5 text-stone-500">{feature.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 transition-all duration-700 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {[
            "Keine versteckten Kosten",
            "Faire Festpreise",
            "Persönlicher Ansprechpartner",
            "100% transparent",
            "Alles aus einer Hand",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-secondary-foreground/80">
              <Check className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
