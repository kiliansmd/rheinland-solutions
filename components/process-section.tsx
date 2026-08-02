"use client"

import { useEffect, useRef, useState } from "react"
import { MessageSquare, Palette, Rocket, CheckCircle2, Clock, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Analyse & Gespräch",
    description: "Wir lernen Ihr Unternehmen kennen, analysieren Ihre Prozesse und identifizieren Potenziale.",
    duration: "Woche 1",
    highlights: ["Kostenloses Erstgespräch", "Ist-Analyse", "Bedarfsermittlung"],
    color: "from-care-blue to-care-blue/70",
  },
  {
    number: "02",
    icon: Palette,
    title: "Konzept & Planung",
    description: "Gemeinsam entwickeln wir eine maßgeschneiderte Strategie für Ihre digitale Transformation.",
    duration: "Woche 2-3",
    highlights: ["Strategieentwicklung", "Roadmap-Erstellung", "Ressourcenplanung"],
    color: "from-primary to-primary/70",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Umsetzung & Begleitung",
    description: "Wir setzen die geplanten Maßnahmen um und begleiten Sie bei der Implementierung.",
    duration: "Individuell",
    highlights: ["Hands-on Umsetzung", "Schulung & Training", "Langfristige Begleitung"],
    color: "from-success to-success/70",
  },
]

export function ProcessSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-step"))
            setVisibleSteps((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    const stepElements = sectionRef.current?.querySelectorAll("[data-step]")
    stepElements?.forEach((step) => observer.observe(step))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="ablauf" className="py-24 lg:py-32 bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Subtle Video Background - Desktop only */}
      <div className="absolute inset-0 z-0 overflow-hidden hidden lg:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.03]"
        >
          <source src="/videos/skyline.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold origin-right transition-transform duration-700" 
              style={{ transform: visibleSteps.length > 0 ? "scaleX(1)" : "scaleX(0)" }} />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Unser Prozess
            </span>
            <div className="w-12 h-px bg-gold origin-left transition-transform duration-700" 
              style={{ transform: visibleSteps.length > 0 ? "scaleX(1)" : "scaleX(0)" }} />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground">
            So arbeiten wir
          </h2>
          <p className="text-muted-foreground mt-5 text-base sm:text-lg max-w-xl mx-auto">
            Ein strukturierter Ansatz für nachhaltige Ergebnisse.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-[90px] left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-px bg-border" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                data-step={index}
                className={cn(
                  "relative transition-all duration-700",
                  visibleSteps.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className={cn(
                  "relative bg-card border border-border overflow-hidden h-full flex flex-col transition-all duration-300",
                  hoveredStep === index && "border-primary/30 shadow-lg shadow-primary/5"
                )}>
                  {/* Header */}
                  <div className="p-6 border-b border-border">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Schritt {step.number}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {step.duration}
                      </span>
                    </div>

                    {/* Icon */}
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-lg text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{step.description}</p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {step.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <div className="w-1 h-10 bg-gradient-to-b from-border to-primary/30 rounded-full relative">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-lg" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-12 px-8 text-[11px] uppercase tracking-[0.2em]">
            <a href="#demo" className="flex items-center gap-3">
              Kostenloses Erstgespräch
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
