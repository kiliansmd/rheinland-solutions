"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, CheckCircle2, Zap, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const guarantees = [
  { icon: CheckCircle2, text: "Individuelle Lösungen" },
  { icon: Zap, text: "Schnelle Umsetzung" },
  { icon: Shield, text: "Vertraulichkeit" },
  { icon: Heart, text: "Persönliche Betreuung" },
]

export function TrustSection() {
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
    <section className="trust-editorial py-16 lg:py-20 bg-[#fcfdf7] relative overflow-hidden border-y border-[#10123f]/15" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Guarantees Row */}
        <div
          className={cn(
            "trust-editorial__guarantees flex flex-wrap justify-center gap-3 lg:gap-6 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-success/5 border border-success/20 px-4 py-2"
            >
              <guarantee.icon className="w-4 h-4 text-success" />
              <span className="text-sm font-medium text-secondary">{guarantee.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
