"use client"

import { useEffect, useRef, useState } from "react"
import {
  Star,
  MapPin,
  Phone,
  Globe,
  Clock,
  MessageSquare,
  Camera,
  TrendingUp,
  Eye,
  Users,
  Search,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function GoogleBusinessSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"overview" | "photos" | "reviews">("overview")
  const [animatedViews, setAnimatedViews] = useState(0)
  const [animatedCalls, setAnimatedCalls] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          const viewsTarget = 2847
          const callsTarget = 156
          const duration = 2000
          const steps = 60
          const viewsIncrement = viewsTarget / steps
          const callsIncrement = callsTarget / steps
          let currentStep = 0

          const interval = setInterval(() => {
            currentStep++
            setAnimatedViews(Math.min(Math.round(viewsIncrement * currentStep), viewsTarget))
            setAnimatedCalls(Math.min(Math.round(callsIncrement * currentStep), callsTarget))
            if (currentStep >= steps) clearInterval(interval)
          }, duration / steps)
        }
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const benefits = [
    { icon: Eye, title: "3x Sichtbarkeit", desc: "In lokalen Suchen" },
    { icon: Phone, title: "+85% Anrufe", desc: "Direkt über Google" },
    { icon: Users, title: "Mehr Kunden", desc: "Durch Maps-Präsenz" },
    { icon: Star, title: "Bewertungen", desc: "Aktives Management" },
  ]

  const includedFeatures = [
    "Vollständige Profil-Optimierung",
    "Professionelle Fotos & Logo",
    "Keyword-optimierte Beschreibung",
    "Öffnungszeiten & Services",
    "Bewertungs-Management Setup",
    "Monatliche Performance-Reports",
  ]

  return (
    <section
      ref={sectionRef}
      id="google-business"
      className="py-16 sm:py-24 lg:py-32 bg-muted relative overflow-hidden"
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-10 sm:mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Google Business
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-normal text-secondary mb-4 sm:mb-6 text-balance">
            Werden Sie die <span className="text-primary italic">Nr. 1</span> in Ihrer Region
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Ein optimiertes Google Business Profil ist Ihr digitales Schaufenster.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Google Business Mockup */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12",
            )}
          >
            <div className="relative">
              {/* Google Search Bar */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                {/* Browser Chrome */}
                <div className="bg-gray-100 px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-200 flex items-center gap-2 sm:gap-3">
                  <div className="flex gap-1 sm:gap-1.5">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex items-center gap-2 bg-white rounded-full px-3 py-1 sm:py-1.5 border">
                    <Search className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                    <span className="text-[10px] sm:text-sm text-gray-600 truncate">pflegedienst in meiner nähe</span>
                  </div>
                </div>

                {/* Google Business Card */}
                <div className="p-4 sm:p-6">
                  {/* Business Header */}
                  <div className="flex gap-3 sm:gap-4 mb-4">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-lg sm:text-2xl font-bold shadow-lg shrink-0">
                      PS
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-xl font-bold text-gray-900 truncate">
                        Pflegedienst Sonnenschein
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700 ml-1">4.9</span>
                        <span className="text-xs sm:text-sm text-gray-500 hidden sm:inline">(127)</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1 truncate">Ambulanter Pflegedienst · Berlin</p>
                    </div>
                  </div>

                  {/* Tabs - Smaller on mobile */}
                  <div className="flex gap-1 mb-4 border-b overflow-x-auto">
                    {(["overview", "photos", "reviews"] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                          "px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap",
                          activeTab === tab
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-600 hover:text-gray-900",
                        )}
                      >
                        {tab === "overview" ? "Übersicht" : tab === "photos" ? "Fotos" : "Bewertungen"}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  {activeTab === "overview" && (
                    <div className="space-y-2.5 sm:space-y-3 animate-fade-in-up">
                      <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" />
                        <span className="text-gray-700 truncate">Musterstraße 123, 10115 Berlin</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" />
                        <span className="text-gray-700">030 123 456 789</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                        <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" />
                        <span className="text-blue-600 truncate">www.pflegedienst-sonnenschein.de</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 shrink-0" />
                        <span className="text-green-600 font-medium">Jetzt geöffnet</span>
                        <span className="text-gray-500 hidden sm:inline">· 24/7</span>
                      </div>

                      {/* Quick Actions - Stack on mobile */}
                      <div className="flex flex-col sm:flex-row gap-2 mt-4 pt-4 border-t">
                        <button className="flex-1 flex items-center justify-center gap-2 py-2 sm:py-2.5 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors">
                          <Phone className="w-4 h-4" />
                          Anrufen
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 py-2 sm:py-2.5 bg-white border border-gray-300 text-gray-700 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-50 transition-colors">
                          <Globe className="w-4 h-4" />
                          Website
                        </button>
                      </div>
                    </div>
                  )}

                  {activeTab === "photos" && (
                    <div className="grid grid-cols-3 gap-2 animate-fade-in-up">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                        >
                          <Camera className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400" />
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "reviews" && (
                    <div className="space-y-3 sm:space-y-4 animate-fade-in-up">
                      {[
                        {
                          name: "Maria K.",
                          rating: 5,
                          text: "Sehr zufrieden! Freundlich und kompetent.",
                          time: "vor 2 Wochen",
                        },
                        {
                          name: "Thomas B.",
                          rating: 5,
                          text: "Endlich ein Pflegedienst auf den man sich verlassen kann.",
                          time: "vor 1 Monat",
                        },
                      ].map((review, i) => (
                        <div key={i} className="pb-3 border-b last:border-0">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs sm:text-sm font-medium">
                              {review.name[0]}
                            </div>
                            <span className="font-medium text-gray-900 text-xs sm:text-sm">{review.name}</span>
                            <div className="flex ml-auto">
                              {[...Array(review.rating)].map((_, j) => (
                                <Star key={j} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 ml-8 sm:ml-10">{review.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Floating Stats Cards - Hidden on mobile */}
              <div className="absolute -right-2 sm:-right-4 top-4 sm:top-8 bg-card border border-border p-3 sm:p-4 hidden sm:block">
                <div className="flex items-center gap-2 sm:gap-3">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <div>
                    <p className="text-lg sm:text-xl font-display text-foreground">{animatedViews.toLocaleString()}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Aufrufe / Monat</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-2 sm:-left-4 bottom-16 sm:bottom-24 bg-card border border-border p-3 sm:p-4 hidden sm:block">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <div>
                    <p className="text-lg sm:text-xl font-display text-foreground">{animatedCalls}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Anrufe / Monat</p>
                  </div>
                </div>
              </div>

              {/* Notification - Smaller on mobile */}
              <div className="absolute right-2 sm:right-8 bottom-4 sm:bottom-8 bg-primary text-primary-foreground p-2 sm:p-3">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-[10px] sm:text-sm font-medium">Neue Anfrage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={cn(
              "transition-all duration-700 delay-400",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12",
            )}
          >
            {/* Benefits Grid - 2x2 on mobile */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="bg-card p-3 sm:p-4 border border-border"
                >
                  <benefit.icon className="w-5 h-5 text-primary mb-2 sm:mb-3" />
                  <h4 className="font-medium text-secondary text-xs sm:text-sm mb-0.5 sm:mb-1">{benefit.title}</h4>
                  <p className="text-[10px] sm:text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              ))}
            </div>

            {/* Included Features */}
            <div className="bg-card p-4 sm:p-6 mb-6 sm:mb-8 border border-border">
              <h4 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">Im Paket enthalten</h4>
              <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                {includedFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span className="text-xs sm:text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-11 px-6 text-xs uppercase tracking-[0.15em]"
              >
                <a href="#demo" className="flex items-center gap-3">
                  Profil optimieren lassen
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </Button>
              <span className="text-xs text-muted-foreground self-center">
                Keine zusätzlichen Kosten
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
