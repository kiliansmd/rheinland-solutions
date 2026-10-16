"use client"

import type React from "react"

import { useState, useEffect } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

const navLinks = [
  { href: "/#leistungen", label: "Beratung & Projekte", description: "Persönliche Dienstleistungen" },
  { href: "/business-solutions", label: "Unternehmenssoftware", description: "Betreute Lösungen für deinen Betrieb" },
  { href: "https://essentials.rheinland-solutions.de/", label: "Essentials", description: "Kostenlose Services" },
  { href: "/blog", label: "Self Solutions", description: "Wissen & Anleitungen" },
]

export function Header() {
  const pathname = usePathname()
  const activeHref = pathname === "/" ? "/#leistungen" : pathname === "/blog" || pathname.startsWith("/blog/") ? "/blog" : ["/business-solutions", "/secure-data-collection"].includes(pathname) ? "/business-solutions" : null
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
    const desktop = window.matchMedia("(min-width: 1024px)")
    const closeOnDesktop = () => {
      if (desktop.matches) setIsMobileMenuOpen(false)
    }
    desktop.addEventListener("change", closeOnDesktop)
    return () => desktop.removeEventListener("change", closeOnDesktop)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) {
      setIsMobileMenuOpen(false)
      return
    }
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
    <Dialog.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <header
        className={cn(
          "site-header fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-t-[6px] border-t-[#f1e613]",
          isScrolled ? "glass-dark py-3" : "bg-transparent py-4",
        )}
        role="banner"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 sm:h-12">
            <a href="/" className="flex items-center" aria-label="Rheinland Solutions - Zur Startseite">
              <Logo variant="default" size="sm" />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10" role="navigation" aria-label="Hauptnavigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={activeHref === link.href ? "true" : undefined}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "text-[13px] tracking-wide transition-all duration-300 relative group",
                    isScrolled
                      ? "text-secondary-foreground/50 hover:text-secondary-foreground"
                      : "text-white/50 hover:text-white",
                  )}
                >
                  <span className="division-label">{link.label}</span>
                  <small className="division-description">{link.description}</small>
                </a>
              ))}
            </nav>

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
              <Dialog.Trigger asChild><button
                className={cn(
                  "p-2 rounded-full transition-all duration-300",
                  isScrolled ? "text-secondary-foreground hover:bg-white/10" : "text-white hover:bg-white/10",
                )}
                aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
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
              </button></Dialog.Trigger>
            </div>
          </div>
        </div>
      </header>

      <Dialog.Portal>
      <Dialog.Overlay className="mobile-nav-overlay lg:hidden" />
      <Dialog.Content
        id="mobile-menu"
        className="mobile-nav-panel lg:hidden"
        aria-describedby={undefined}
      >
        <Dialog.Title className="sr-only">Navigation</Dialog.Title>
        {/* Menu Header */}
        <div className="mobile-nav-header">
          <Logo variant="default" size="sm" />
          <Dialog.Close asChild><button
            className="mobile-nav-close"
            aria-label="Menü schließen"
          >
            <X className="w-5 h-5" />
          </button></Dialog.Close>
        </div>

        {/* Menu Content */}
        <nav
          role="navigation"
          aria-label="Mobile Navigation"
        >
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={activeHref === link.href ? "true" : undefined}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <span>{link.label}<small>{link.description}</small></span>
              </a>
            ))}
          </div>

          {/* Menu Footer CTA */}
          <div className="mobile-nav-footer">
            <Button
              asChild
              className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold h-12 text-sm"
            >
              <a href="/#mobile-anfrage" onClick={(e) => handleNavClick(e, "/#mobile-anfrage")}>
                Erstgespräch vereinbaren
              </a>
            </Button>
            <a
              href="mailto:info@rheinland-solutions.de"
            >
              <Mail className="w-4 h-4" />
              info@rheinland-solutions.de
            </a>
          </div>
        </nav>
      </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
