"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, Download, ArrowRight, CheckCircle2, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

const resources = [
  {
    title: "10 Fehler bei Pflege-Websites",
    description: "Die häufigsten Fehler und wie Sie sie vermeiden",
    icon: "🏥",
    color: "bg-care-blue/10 text-care-blue",
  },
  {
    title: "SEO-Checkliste für Handwerker",
    description: "So werden Sie auf Google gefunden",
    icon: "🔧",
    color: "bg-craft-petrol/10 text-craft-petrol",
  },
  {
    title: "5 Tipps für mehr Reservierungen",
    description: "Strategien für Gastronomen",
    icon: "🍽️",
    color: "bg-gastro-orange/10 text-gastro-orange",
  },
]

export function ResourcesSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    null
  )
}
