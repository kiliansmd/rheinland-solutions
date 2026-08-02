"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  ArrowRight,
  CheckCircle2,
  Heart,
  Clock,
  Shield,
} from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
  }

  return (
    <footer id="kontakt" className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* CTA Section with Video Background */}
      <div className="border-b border-white/5 relative">
        {/* Video Background - Desktop only */}
        <div className="absolute inset-0 z-0 overflow-hidden hidden lg:block">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          >
            <source src="/videos/rhein.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32 relative z-10">
          <div className="max-w-lg mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-gold/50" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-secondary-foreground/40">Kontakt</span>
              <div className="w-16 h-px bg-gold/50" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 tracking-[-0.02em]">
              Starten Sie Ihr Projekt
            </h2>
            <p className="text-secondary-foreground/40 text-[15px] mb-12 max-w-sm mx-auto leading-relaxed">
              Persönlich, kompetent und verbindlich.
            </p>
            <Button
              asChild
              className="bg-gold hover:bg-gold/90 text-secondary font-medium h-12 px-8 text-[11px] uppercase tracking-[0.2em] transition-all duration-300"
            >
              <a href="#demo" className="flex items-center gap-3">
                Kontakt aufnehmen
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Logo variant="default" size="md" />
            </div>
            <p className="text-secondary-foreground/70 mb-5 leading-relaxed text-sm">
              Ihr Partner für Digitalisierung, Prozess-Beratung und Schulungen – individuell und persönlich.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="text-secondary-foreground/50 hover:text-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-secondary-foreground/50 mb-5">Schnellzugriff</h3>
            <ul className="space-y-2.5">
              {[
                { href: "#leistungen", label: "Leistungen" },
                { href: "#ablauf", label: "Ablauf" },
                { href: "#referenzen", label: "Referenzen" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm animated-underline inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/impressum"
                  className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm animated-underline inline-block"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="/datenschutz"
                  className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm animated-underline inline-block"
                >
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-secondary-foreground/50 mb-5">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a
                  href="mailto:info@rheinland-solutions.de"
                  className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm"
                >
                  info@rheinland-solutions.de
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-secondary-foreground/70 text-sm">
                  Musterstraße 123, 12345 Musterstadt
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-secondary-foreground/50 mb-5">Newsletter</h3>
            <p className="text-secondary-foreground/70 mb-4 text-sm">
              Insights zu Digitalisierung und Prozessoptimierung.
            </p>
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Ihre E-Mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-11"
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-11">
                  Anmelden
                </Button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-primary font-medium bg-primary/10 rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5" />
                Erfolgreich angemeldet!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-secondary-foreground/40">
            <p>
              © 2026 RheinlandSolutions
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/impressum" className="hover:text-secondary-foreground/70 transition-colors">
                Impressum
              </a>
              <a href="/datenschutz" className="hover:text-secondary-foreground/70 transition-colors">
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
