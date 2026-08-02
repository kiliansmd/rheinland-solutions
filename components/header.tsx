"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight, Mail, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#kontakt", label: "Kontakt" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          "site-header fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-t-[6px] border-t-[#efff00]",
          isScrolled ? "glass-dark py-3" : "bg-transparent py-4",
        )}
        role="banner"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 sm:h-12">
            <a href="#" className="flex items-center" aria-label="Rheinland Solutions - Zur Startseite">
              <Logo variant="default" size="sm" />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10" role="navigation" aria-label="Hauptnavigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "text-[13px] tracking-wide transition-all duration-300 relative group",
                    isScrolled
                      ? "text-secondary-foreground/50 hover:text-secondary-foreground"
                      : "text-white/50 hover:text-white",
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full",
                    isScrolled ? "bg-secondary-foreground/30" : "bg-white/30"
                  )} />
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                asChild
                className="bg-gold hover:bg-gold/90 text-secondary font-medium px-5 h-9 text-xs uppercase tracking-[0.15em] transition-opacity"
              >
                <a href="#demo" onClick={(e) => handleNavClick(e, "#demo")} className="flex items-center gap-2">
                  Kontakt
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="mailto:info@rheinland-solutions.de"
                className={cn(
                  "p-2 rounded-full transition-all duration-300",
                  isScrolled ? "text-secondary-foreground bg-white/10" : "text-white bg-white/10",
                )}
                aria-label="E-Mail schreiben"
              >
                <Mail className="w-5 h-5" />
              </a>

              {/* Mobile Menu Button */}
              <button
                className={cn(
                  "p-2 rounded-full transition-all duration-300",
                  isScrolled ? "text-secondary-foreground hover:bg-white/10" : "text-white hover:bg-white/10",
                )}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <div className="relative w-5 h-5">
                  <Menu
                    className={cn(
                      "absolute inset-0 w-5 h-5 transition-all duration-300",
                      isMobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0",
                    )}
                  />
                  <X
                    className={cn(
                      "absolute inset-0 w-5 h-5 transition-all duration-300",
                      isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90",
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        </div>
      )}

      <div
        id="mobile-menu"
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-secondary shadow-2xl lg:hidden transition-transform duration-300 ease-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <Logo variant="light" size="sm" />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-full text-secondary-foreground hover:bg-white/10 transition-colors"
            aria-label="Menü schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Content */}
        <nav
          className="flex flex-col h-[calc(100%-80px)] overflow-y-auto"
          role="navigation"
          aria-label="Mobile Navigation"
        >
          <div className="flex-1 p-4 space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "text-secondary-foreground/80 hover:text-gold py-3 px-4 rounded-xl transition-all duration-300 hover:bg-white/5 text-base font-medium flex items-center justify-between group",
                  "transform transition-all duration-300",
                  isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4",
                )}
                style={{ transitionDelay: isMobileMenuOpen ? `${index * 50 + 100}ms` : "0ms" }}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                {link.label}
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>

          {/* Menu Footer CTA */}
          <div
            className={cn(
              "p-4 border-t border-white/10 space-y-3 transition-all duration-300",
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
            style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <Button
              asChild
              className="w-full bg-gold hover:bg-gold/90 text-secondary font-semibold h-12 text-base shadow-lg shadow-gold/25"
            >
              <a href="#demo" onClick={(e) => handleNavClick(e, "#demo")} tabIndex={isMobileMenuOpen ? 0 : -1}>
                Erstgespräch vereinbaren
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <a
              href="mailto:info@rheinland-solutions.de"
              className="flex items-center justify-center gap-2 text-secondary-foreground/60 py-2 text-sm hover:text-secondary-foreground transition-colors"
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              <Mail className="w-4 h-4" />
              info@rheinland-solutions.de
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
