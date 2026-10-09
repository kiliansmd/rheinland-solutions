"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Monitor,
  Settings,
  GraduationCap,
  ArrowRight,
  Check,
} from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Monitor,
    title: "Digitalisierung",
    subtitle: "Prozesse modernisieren",
    description: "Wir begleiten Sie bei der digitalen Transformation Ihres Unternehmens. Von der Analyse bestehender Workflows bis zur Implementierung moderner Lösungen.",
    benefits: [
      "Analyse bestehender Prozesse",
      "Entwicklung digitaler Strategien",
      "Implementierung moderner Tools",
      "Langfristige Begleitung",
    ],
  },
  {
    icon: Settings,
    title: "Prozess-Beratung",
    subtitle: "Effizienz steigern",
    description: "Optimieren Sie Ihre Geschäftsprozesse für maximale Effizienz. Wir identifizieren Potenziale und entwickeln maßgeschneiderte Lösungen.",
    benefits: [
      "Prozessanalyse & Mapping",
      "Identifikation von Optimierungspotenzialen",
      "Change Management",
      "Kontinuierliche Verbesserung",
    ],
  },
  {
    icon: GraduationCap,
    title: "Schulungen",
    subtitle: "Wissen vermitteln",
    description: "Praxisnahe Schulungen für Ihr Team. Wir vermitteln das Know-how, das Sie für die erfolgreiche Umsetzung Ihrer Projekte benötigen.",
    benefits: [
      "Individuelle Schulungskonzepte",
      "Praxisorientierte Workshops",
      "On-Site oder Remote",
      "Nachhaltige Wissensvermittlung",
    ],
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)
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
    <section id="leistungen" className="py-24 lg:py-32 bg-secondary relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.015] to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="services-heading text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div 
              className={cn(
                "h-px bg-gold origin-right transition-all duration-700",
                isVisible ? "w-12" : "w-0"
              )} 
            />
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 font-medium">
              Dienstleistungen
            </span>
            <div 
              className={cn(
                "h-px bg-gold origin-left transition-all duration-700",
                isVisible ? "w-12" : "w-0"
              )} 
            />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground">
            Unsere Expertise
          </h2>
          <p className="text-foreground/60 mt-5 text-base sm:text-lg max-w-xl mx-auto">
            Individuelle Beratung und Umsetzung für Ihr Unternehmen.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex justify-center mb-12">
          <div className="service-tabs inline-grid grid-cols-3 bg-muted rounded-lg p-1 border border-border">
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => setActiveService(index)}
                className={cn(
                  "flex items-center justify-center gap-2 px-3 sm:px-6 py-3 rounded-md font-medium transition-all duration-300 text-sm",
                  activeService === index
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/60 hover:text-foreground"
                )}
              >
                <service.icon className="w-4 h-4" />
                <span>{service.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Service Content */}
        <div className="max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "transition-all duration-500",
                activeService === index ? "opacity-100 block" : "opacity-0 hidden"
              )}
            >
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Left - Icon & Visual */}
                <div className="service-visual flex justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-20 h-20 sm:w-28 sm:h-28 text-primary" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-muted border border-border" />
                    <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-primary/20" />
                  </div>
                </div>

                {/* Right - Content */}
                <div>
                  <span className="text-gold text-sm font-medium uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl font-normal text-foreground mt-2 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-base leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <span className="text-foreground/80 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="bg-gold hover:bg-gold/90 text-secondary font-medium h-12 px-7 text-[11px] uppercase tracking-[0.2em]"
                  >
                    <a href="#kontakt" className="flex items-center gap-3">
                      Projekt anfragen
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className={cn(
          "mt-16 text-center transition-all duration-700 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-foreground/50 text-sm">
            Jedes Projekt ist einzigartig. Kontaktieren Sie uns für ein individuelles Angebot.
          </p>
        </div>
      </div>
    </section>
  )
}
