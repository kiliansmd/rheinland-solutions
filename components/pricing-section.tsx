"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Check,
  Shield,
  Zap,
  Sparkles,
  ArrowRight,
  AlertTriangle,
  Gift,
  Palette,
  Globe,
  Mail,
  MapPin,
  Calendar,
  Award,
  ClipboardCheck,
  BadgeCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  "Individuelles Webdesign nach Maß",
  "Logo-Neugestaltung oder Rework",
  "Domain-Erwerb & Einrichtung",
  "Professionelle Email-Domain",
  "Google Business-Profil Optimierung",
  "Integrierter Buchungskalender",
  "Suchmaschinenoptimierung (SEO)",
  "DSGVO-konforme Umsetzung",
  "Content-Erstellung (Texte & Bilder)",
  "Responsives Mobile-First Design",
  "Kontaktformulare & Lead-Generierung",
  "3 Revisions-Audits nach Fertigstellung",
  "Hosting & Wartung (1 Jahr inklusive)",
]

const highlightedServices = [
  { icon: Palette, text: "Logo-Design", color: "#E94E3C" },
  { icon: Globe, text: "Domain & SSL", color: "#247BA0" },
  { icon: Mail, text: "Profi-Email", color: "#2A4D69" },
  { icon: MapPin, text: "Google Business", color: "#E67E22" },
  { icon: Calendar, text: "Online-Buchung", color: "#22c55e" },
]

export function PricingSection() {
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
    <section id="preise" className="py-24 lg:py-32 bg-secondary relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.02] to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-14 lg:mb-20 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-primary/50" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-secondary-foreground/40 font-medium">
              Preise
            </span>
            <div className="w-16 h-px bg-primary/50" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-secondary-foreground tracking-[-0.02em]">
            Transparente Konditionen
          </h2>
          <p className="text-secondary-foreground/50 mt-6 text-[15px] max-w-md mx-auto leading-relaxed">
            Alle Leistungen in einem Paket – ohne versteckte Kosten.
          </p>
        </div>

        <div
          className={cn(
            "flex flex-wrap justify-center gap-3 mb-8 sm:mb-10 transition-all duration-500 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {highlightedServices.map((service, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded px-3 py-2 bg-white/5 border border-white/10"
            >
              <service.icon className="w-4 h-4 text-white/60" />
              <span className="text-sm text-secondary-foreground/80">{service.text}</span>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "max-w-5xl mx-auto transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95",
          )}
        >
          <div className="relative bg-card overflow-hidden border border-border/50">
            {/* Info banner */}
            <div className="bg-muted/50 text-muted-foreground px-4 sm:px-6 py-4 border-b border-border/50">
              <div className="flex items-center justify-center gap-4 text-[13px]">
                <span>Begrenzte Kapazität diesen Monat</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                {/* Price Info */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-muted-foreground line-through text-lg">€4.999</span>
                    <span className="bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded">
                      -40%
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="font-display text-5xl sm:text-6xl font-bold text-secondary">€2.990</span>
                    <span className="text-muted-foreground">einmalig</span>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="font-medium text-secondary text-sm">Zufriedenheitsgarantie</div>
                        <div className="text-muted-foreground text-xs mt-0.5">
                          Sie zahlen erst, wenn Sie begeistert sind.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ClipboardCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="font-medium text-secondary text-sm">3 Revisions-Audits inklusive</div>
                        <div className="text-muted-foreground text-xs mt-0.5">
                          Optimierungen flexibel nach Launch.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="font-medium text-secondary text-sm">Schnelle Umsetzung</div>
                        <div className="text-muted-foreground text-xs mt-0.5">
                          Ihre Website ist in 2-4 Wochen online.
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full h-12 bg-primary hover:bg-primary/95 text-primary-foreground font-medium text-[11px] uppercase tracking-[0.2em] transition-all duration-300"
                  >
                    <a href="#demo">
                      <span className="flex items-center gap-2">
                        Kostenloses Angebot anfordern
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </a>
                  </Button>
                  <p className="text-center text-xs text-muted-foreground mt-3">
                    Unverbindlich & kostenlos – Antwort innerhalb von 24h garantiert
                  </p>
                </div>

                {/* Features List */}
                <div className="lg:pl-8 lg:border-l border-border">
                  <h3 className="font-display font-bold text-secondary text-base mb-5 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Im Komplettpaket enthalten:
                  </h3>
                  <ul className="grid gap-3">
                    {features.map((feature, index) => (
                      <li
                        key={feature}
                        className={cn(
                          "flex items-center gap-3 transition-all duration-500 group",
                          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
                        )}
                        style={{ transitionDelay: `${300 + index * 40}ms` }}
                      >
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-card-foreground text-sm">{feature}</span>
                        {[
                          "Logo-Neugestaltung",
                          "Domain-Erwerb",
                          "Professionelle Email",
                          "Google Business",
                          "Buchungskalender",
                          "Revisions-Audits",
                        ].some((s) => feature.includes(s)) && (
                          <span className="text-[9px] font-bold text-success bg-success/10 px-1.5 py-0.5 rounded-full uppercase">
                            Inkl.
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
