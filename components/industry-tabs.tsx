"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  Heart,
  Hammer,
  UtensilsCrossed,
  Check,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Calendar,
  ChefHat,
  Wrench,
  Stethoscope,
  Menu,
  Search,
  MessageSquare,
  MousePointer2,
} from "lucide-react"
import { cn } from "@/lib/utils"

const industries = [
  {
    id: "pflege",
    label: "Pflege",
    icon: Heart,
    title: "Websites für Pflegedienste",
    subtitle: "Vertrauen aufbauen, Fachkräfte gewinnen",
    benefits: [
      "Empathische, vertrauensbildende Texte",
      "Barrierefreies Design nach WCAG",
      "Karriereportal mit einfacher Bewerbung",
      "Integration von Bewertungsportalen",
      "Online-Terminbuchung",
    ],
    color: "#247BA0",
    stats: { projects: "18+", satisfaction: "100%", increase: "+156%" },
    ctaText: "Pflege-Demo buchen",
    mockup: {
      name: "Pflegedienst Sonnenschein",
      tagline: "Liebevolle Pflege in vertrauter Umgebung",
      services: ["Ambulante Pflege", "Verhinderungspflege", "Beratung"],
      cta: "Kostenlose Beratung",
      notification: "Neue Bewerbung eingegangen!",
    },
  },
  {
    id: "handwerk",
    label: "Handwerk",
    icon: Hammer,
    title: "Websites für Handwerksbetriebe",
    subtitle: "Aufträge generieren, Expertise zeigen",
    benefits: [
      "Beeindruckende Projektgalerie",
      "Integrierte Kundenbewertungen",
      "Notfall-Kontakt prominent platziert",
      "Lokale SEO für Ihr Einzugsgebiet",
      "Online-Terminbuchung",
    ],
    color: "#2A4D69",
    stats: { projects: "22+", satisfaction: "98%", increase: "+134%" },
    ctaText: "Handwerk-Demo buchen",
    mockup: {
      name: "Elektro Schmidt",
      tagline: "Ihr Meisterbetrieb seit 1985",
      services: ["Elektroinstallation", "Smart Home", "Notdienst 24/7"],
      cta: "Angebot anfordern",
      notification: "Neue Anfrage aus München!",
    },
  },
  {
    id: "gastro",
    label: "Gastronomie",
    icon: UtensilsCrossed,
    title: "Websites für Gastronomen",
    subtitle: "Reservierungen steigern, Gäste begeistern",
    benefits: [
      "Appetitanregende Bildergalerie",
      "Digitale Speisekarte mit Allergenen",
      "Online-Reservierung & Tischbuchung",
      "Event-Kalender und Aktionen",
      "Social Media Integration",
    ],
    color: "#E67E22",
    stats: { projects: "15+", satisfaction: "100%", increase: "+89%" },
    ctaText: "Gastro-Demo buchen",
    mockup: {
      name: "Trattoria Bella Vista",
      tagline: "Authentisch italienisch seit 1992",
      services: ["Mittagstisch", "À la carte", "Events & Catering"],
      cta: "Tisch reservieren",
      notification: "Reservierung für 4 Personen!",
    },
  },
]

function BrowserMockup({
  industry,
  isActive,
}: {
  industry: (typeof industries)[0]
  isActive: boolean
}) {
  const IconComponent = industry.id === "pflege" ? Stethoscope : industry.id === "handwerk" ? Wrench : ChefHat
  const [showNotification, setShowNotification] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 120, y: 80 })
  const [isTyping, setIsTyping] = useState(false)
  const [typedText, setTypedText] = useState("")
  const fullText = "Termin anfragen..."

  useEffect(() => {
    if (!isActive) return

    const notifTimer = setTimeout(() => setShowNotification(true), 1500)

    const cursorInterval = setInterval(() => {
      setCursorPosition({
        x: 80 + Math.sin(Date.now() / 1000) * 40,
        y: 60 + Math.cos(Date.now() / 1200) * 30,
      })
    }, 50)

    const typingTimer = setTimeout(() => {
      setIsTyping(true)
      let i = 0
      const typeInterval = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.slice(0, i + 1))
          i++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => {
            setTypedText("")
            setIsTyping(false)
          }, 2000)
        }
      }, 100)
    }, 3000)

    return () => {
      clearTimeout(notifTimer)
      clearTimeout(typingTimer)
      clearInterval(cursorInterval)
    }
  }, [isActive])

  return (
    <div className="relative group">
      {/* Glow effect - Hidden on small screens */}
      <div
        className={cn(
          "absolute -inset-4 sm:-inset-6 rounded-3xl blur-2xl transition-all duration-700 hidden sm:block",
          isActive ? "opacity-30" : "opacity-0",
        )}
        style={{ backgroundColor: industry.color }}
      />

      {/* Browser frame */}
      <div className="relative bg-secondary rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-white/10">
        {/* Browser toolbar */}
        <div className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-secondary border-b border-white/10">
          <div className="flex gap-1.5" aria-hidden="true">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-2 sm:mx-4">
            <div className="bg-white/10 rounded-lg px-2 py-1 sm:px-3 sm:py-1.5 flex items-center gap-2 max-w-[200px] sm:max-w-xs mx-auto">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400 shrink-0" />
              <span className="text-[9px] sm:text-xs text-white/70 truncate">
                www.{industry.mockup.name.toLowerCase().replace(/\s+/g, "-")}.de
              </span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Search className="w-4 h-4 text-white/40" />
            <Menu className="w-4 h-4 text-white/40" />
          </div>
        </div>

        {/* Website content mockup */}
        <div className="bg-white aspect-[4/3] overflow-hidden relative">
          <div
            className="absolute z-20 pointer-events-none transition-all duration-100 ease-out hidden sm:block"
            style={{ left: cursorPosition.x, top: cursorPosition.y }}
          >
            <MousePointer2 className="w-4 h-4 text-gray-800 drop-shadow-md" fill="white" />
          </div>

          {/* Navigation */}
          <nav className="flex items-center justify-between px-2 sm:px-5 py-2 sm:py-3 bg-white border-b border-gray-100">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: industry.color }}
              >
                <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <span className="font-bold text-gray-900 text-[10px] sm:text-sm truncate max-w-[80px] sm:max-w-none">
                {industry.mockup.name}
              </span>
            </div>
            <div className="hidden lg:flex items-center gap-4 text-xs text-gray-600">
              <span className="hover:text-gray-900 cursor-pointer">Leistungen</span>
              <span className="hover:text-gray-900 cursor-pointer">Über uns</span>
              <span className="hover:text-gray-900 cursor-pointer">Kontakt</span>
            </div>
            <div
              className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-white text-[9px] sm:text-xs font-semibold"
              style={{ backgroundColor: industry.color }}
            >
              {industry.id === "gastro" ? "Reservieren" : "Kontakt"}
            </div>
          </nav>

          {/* Hero section */}
          <div className="relative h-20 sm:h-36 overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${industry.color}ee 0%, ${industry.color}aa 100%)`,
              }}
            />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:20px_20px]" />
            </div>
            <div className="relative h-full flex flex-col justify-center px-3 sm:px-6">
              <h1 className="text-white font-bold text-xs sm:text-xl lg:text-2xl leading-tight max-w-[150px] sm:max-w-xs">
                {industry.mockup.tagline}
              </h1>
              <div className="flex items-center gap-2 mt-1.5 sm:mt-3">
                <button
                  className="px-2 py-1 sm:px-4 sm:py-2 bg-white rounded-lg text-[8px] sm:text-xs font-bold shadow-lg"
                  style={{ color: industry.color }}
                >
                  {industry.mockup.cta}
                </button>
                <div className="flex items-center gap-1 text-white/90">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-2 h-2 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-[8px] sm:text-[10px]">4.9</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service cards */}
          <div className="px-2 sm:px-5 py-2 sm:py-4">
            <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
              {industry.mockup.services.map((service, i) => (
                <div
                  key={service}
                  className={cn(
                    "bg-gray-50 rounded-lg p-1.5 sm:p-3 text-center transition-all",
                    i === 0 && "ring-2 shadow-md scale-105",
                  )}
                  style={i === 0 ? { boxShadow: `0 0 0 2px ${industry.color}40` } : undefined}
                >
                  <div
                    className="w-5 h-5 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-1.5 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${industry.color}15` }}
                  >
                    {i === 0 ? (
                      <Heart className="w-2.5 h-2.5 sm:w-4 sm:h-4" style={{ color: industry.color }} />
                    ) : i === 1 ? (
                      <Calendar className="w-2.5 h-2.5 sm:w-4 sm:h-4" style={{ color: industry.color }} />
                    ) : (
                      <MessageSquare className="w-2.5 h-2.5 sm:w-4 sm:h-4" style={{ color: industry.color }} />
                    )}
                  </div>
                  <span className="text-[7px] sm:text-[10px] font-medium text-gray-700 line-clamp-2">{service}</span>
                </div>
              ))}
            </div>

            {isTyping && (
              <div className="mt-3 bg-gray-100 rounded-lg px-3 py-2 items-center gap-2 hidden sm:flex">
                <Search className="w-3 h-3 text-gray-400" />
                <span className="text-[10px] text-gray-600">{typedText}</span>
                <span className="w-0.5 h-3 bg-gray-400 animate-pulse" />
              </div>
            )}
          </div>

          {/* Contact bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 px-2 sm:px-5 py-1.5 sm:py-2 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4 text-white/80">
              <div className="flex items-center gap-1">
                <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                <span className="text-[8px] sm:text-[10px]">0800 123</span>
              </div>
              <div className="items-center gap-1 hidden sm:flex">
                <Mail className="w-3 h-3" />
                <span className="text-[10px]">info@...</span>
              </div>
              <div className="items-center gap-1 hidden sm:flex">
                <MapPin className="w-3 h-3" />
                <span className="text-[10px]">Berlin</span>
              </div>
            </div>
          </div>

          {showNotification && (
            <div className="absolute right-1 sm:right-3 bottom-10 sm:bottom-12 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg shadow-lg p-1.5 sm:p-2.5 animate-bounce-soft max-w-[140px] sm:max-w-none">
              <div className="flex items-center gap-1 sm:gap-2">
                <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                <span className="text-[8px] sm:text-xs font-medium truncate">{industry.mockup.notification}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute -right-2 sm:-right-4 top-4 sm:top-8 bg-white rounded-xl shadow-lg border p-2 sm:p-3 animate-float hidden md:block">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"
            style={{ backgroundColor: `${industry.color}15` }}
          >
            <Calendar className="w-4 h-4" style={{ color: industry.color }} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">Online-Buchung</p>
            <p className="text-[10px] text-gray-500">Integriert</p>
          </div>
        </div>
      </div>

      <div className="absolute -left-2 sm:-left-4 bottom-16 sm:bottom-24 bg-white rounded-xl shadow-lg border p-2 sm:p-3 animate-float-slow hidden md:block">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${industry.color}15` }}
          >
            <Star className="w-4 h-4" style={{ color: industry.color }} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">{industry.stats.projects}</p>
            <p className="text-[10px] text-gray-500">Projekte</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function IndustryTabs() {
  const [activeTab, setActiveTab] = useState(0)
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
    <section id="branchen" className="py-16 sm:py-24 lg:py-32 bg-muted/30 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-gastro-orange/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-10 sm:mb-14 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider bg-primary/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
            Branchenlösungen
          </span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 sm:mt-6 text-balance">
            Maßgeschneidert für <span className="gradient-text">Ihre Branche</span>
          </h2>
          <p className="text-muted-foreground mt-3 sm:mt-5 text-base sm:text-xl">
            Wir kennen Ihre Branche – und Ihre Kunden.
          </p>
        </div>

        {/* Tab Navigation - Improved mobile tabs */}
        <div
          className={cn(
            "flex justify-center mb-8 sm:mb-12 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="inline-flex bg-card rounded-xl sm:rounded-2xl p-1 sm:p-1.5 shadow-lg border border-border w-full sm:w-auto max-w-md sm:max-w-none">
            {industries.map((industry, index) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm",
                  activeTab === index
                    ? "bg-secondary text-secondary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                )}
                role="tab"
                aria-selected={activeTab === index}
              >
                <industry.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">{industry.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Industry Content */}
        {industries.map((industry, index) => (
          <div
            key={industry.id}
            className={cn(
              "transition-all duration-500",
              activeTab === index ? "opacity-100 visible" : "opacity-0 invisible absolute",
            )}
            role="tabpanel"
            aria-hidden={activeTab !== index}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
              {/* Left - Content */}
              <div
                className={cn(
                  "order-2 lg:order-1 transition-all duration-700 delay-200",
                  isVisible && activeTab === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12",
                )}
              >
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
                  style={{ backgroundColor: `${industry.color}15`, color: industry.color }}
                >
                  <industry.icon className="w-4 h-4" />
                  {industry.label}
                </div>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg mb-6">{industry.subtitle}</p>

                <ul className="space-y-3 mb-8">
                  {industry.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: industry.color }}
                      >
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                      </div>
                      <span className="text-foreground/80 text-sm sm:text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Stats - Improved mobile layout */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 p-3 sm:p-4 bg-muted/50 rounded-xl">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-display font-bold" style={{ color: industry.color }}>
                      {industry.stats.projects}
                    </div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Projekte</div>
                  </div>
                  <div className="text-center border-x border-border">
                    <div className="text-xl sm:text-2xl font-display font-bold" style={{ color: industry.color }}>
                      {industry.stats.satisfaction}
                    </div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Zufrieden</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-display font-bold" style={{ color: industry.color }}>
                      {industry.stats.increase}
                    </div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Anfragen</div>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full sm:w-auto text-white font-semibold h-12 sm:h-13 px-6 sm:px-8 shadow-lg group"
                  style={{ backgroundColor: industry.color }}
                >
                  <a href="#demo">
                    {industry.ctaText}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              {/* Right - Mockup */}
              <div
                className={cn(
                  "order-1 lg:order-2 transition-all duration-700 delay-300",
                  isVisible && activeTab === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12",
                )}
              >
                <BrowserMockup industry={industry} isActive={activeTab === index} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
