"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"

const links = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/business-solutions", label: "Business Solutions" },
  { href: "https://essentials.rheinland-solutions.de/", label: "Essentials" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/#kontakt", label: "Kontakt" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  return <>
    <a href="#main" className="brand-skip">Zum Inhalt</a>
    <header className="brand-header">
      <div className="brand-header-inner">
        <a href="/" aria-label="Rheinland Solutions – Startseite"><Logo size="lg" /></a>
        <button className="brand-menu-toggle" aria-expanded={open} aria-controls="brand-navigation" aria-label={open ? "Menü schließen" : "Menü öffnen"} onClick={() => setOpen(!open)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav id="brand-navigation" aria-label="Hauptnavigation" className={open ? "brand-navigation is-open" : "brand-navigation"}>
          {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={link.href === "/business-solutions" && ["/business-solutions", "/secure-data-collection"].includes(pathname) ? "page" : undefined}>{link.label}</a>)}
        </nav>
      </div>
    </header>
  </>
}
