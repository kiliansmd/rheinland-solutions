"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { HelpCircle, ArrowRight, MessageCircle, Phone, Shield, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Wie läuft die Zusammenarbeit ab?",
    answer:
      "Nach einem kostenlosen Erstgespräch analysieren wir Ihre Ausgangssituation und entwickeln gemeinsam eine maßgeschneiderte Strategie. Der Umfang und die Dauer richten sich nach Ihren individuellen Anforderungen und Zielen.",
  },
  {
    question: "Was kostet ein Projekt?",
    answer:
      "Jedes Projekt ist individuell, daher erstellen wir Ihnen nach dem Erstgespräch ein transparentes Angebot. Die Kosten richten sich nach Umfang, Komplexität und Ihren spezifischen Anforderungen.",
  },
  {
    question: "Für welche Unternehmen sind Ihre Leistungen geeignet?",
    answer:
      "Wir arbeiten mit Unternehmen jeder Größe – vom Mittelstand bis zum Konzern. Besonders profitieren Unternehmen, die ihre Prozesse optimieren, digitalisieren oder ihre Mitarbeiter schulen möchten.",
  },
  {
    question: "Wie lange dauert ein typisches Projekt?",
    answer:
      "Die Projektdauer variiert je nach Umfang. Kleinere Beratungsprojekte können wenige Wochen dauern, umfassende Digitalisierungsprojekte mehrere Monate. Im Erstgespräch geben wir Ihnen eine realistische Einschätzung.",
  },
  {
    question: "Bieten Sie auch laufende Betreuung an?",
    answer:
      "Ja, auf Wunsch begleiten wir Sie auch nach Projektabschluss. Ob regelmäßige Schulungen, kontinuierliche Prozessoptimierung oder Support bei der Implementierung – wir sind langfristig für Sie da.",
  },
  {
    question: "Können Sie auch vor Ort arbeiten?",
    answer:
      "Selbstverständlich. Je nach Projektanforderung arbeiten wir remote, vor Ort bei Ihnen oder in einer Kombination aus beidem. Workshops und Schulungen führen wir gerne persönlich durch.",
  },
]

export function FaqSection() {
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
    <section className="py-24 lg:py-32 bg-background relative" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-12 lg:mb-14 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
              FAQ
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-secondary">
            Häufig gestellte Fragen
          </h2>
          <p className="text-muted-foreground mt-5 text-base sm:text-lg max-w-xl mx-auto">
            Die wichtigsten Fragen auf einen Blick.
          </p>
        </div>

        <div
          className={cn(
            "max-w-3xl mx-auto transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl shadow-md border border-border/50 px-5 overflow-hidden data-[state=open]:shadow-lg data-[state=open]:border-primary/30 data-[state=open]:ring-1 data-[state=open]:ring-primary/10 transition-all"
              >
                <AccordionTrigger className="text-left text-secondary font-display font-semibold text-base hover:no-underline py-5 [&[data-state=open]>svg]:text-primary [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div
            className={cn(
              "mt-12 bg-gradient-to-br from-muted via-muted to-muted/80 rounded-2xl p-6 sm:p-8 border border-border/50 shadow-lg transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div className="flex flex-wrap items-center justify-center gap-4 mb-5">
              <div className="flex items-center gap-2 text-success">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-semibold">100% Zufriedenheitsgarantie</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-border" />
              <div className="flex items-center gap-2 text-primary">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm font-semibold">Kostenlose Erstberatung</span>
              </div>
            </div>
            <p className="text-center text-muted-foreground mb-6">
              Ihre Frage ist nicht dabei? Wir beraten Sie gerne persönlich und unverbindlich.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 group h-12 px-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                <a href="#demo">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Kostenlos beraten lassen
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 px-6 bg-transparent hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all"
              >
                <a href="mailto:info@rheinland-solutions.de">
                  <Phone className="w-4 h-4 mr-2" />
                  E-Mail schreiben
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
