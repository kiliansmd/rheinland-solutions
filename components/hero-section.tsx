"use client"

import { ArrowRight } from "lucide-react"
import { InteractiveLeadForm } from "./interactive-lead-form"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="demo" className="relative min-h-screen flex items-center">
      {/* Background Video (Desktop) / Image (Mobile) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Video Background - Desktop only */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover hidden lg:block"
          style={{ minWidth: '100%', minHeight: '100%' }}
        >
          <source src="/videos/cologne.mp4" type="video/mp4" />
        </video>
        {/* Image Fallback - Mobile and video fallback */}
        <img
          src="/images/hero-cityscape.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay - slightly more transparent to show video */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/50 to-secondary/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-12 sm:pt-32 sm:pb-16 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start lg:items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 text-white">
            {/* Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-xs uppercase tracking-[0.2em] text-white/60 font-medium">
                Beratung & Digitalisierung
              </span>
            </div>

            <h1 className="font-display text-[2rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-normal leading-[1.05] tracking-[-0.02em]">
              Digitalisierung{" "}
              <span className="text-gold italic">mit Strategie.</span>
            </h1>

            <p className="mt-8 sm:mt-10 text-[15px] sm:text-base md:text-lg text-white/60 leading-relaxed max-w-lg">
              Wir begleiten Sie bei der digitalen Transformation: Prozess-Beratung, Digitalisierung und Schulungen – individuell auf Ihr Unternehmen zugeschnitten.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:mt-14">
              <Button
                asChild
                className="bg-gold hover:bg-gold/90 text-secondary font-medium h-12 px-7 text-[11px] uppercase tracking-[0.2em]"
              >
                <a href="#kontakt" className="flex items-center gap-3">
                  Projekt anfragen
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/20 text-white/80 hover:text-white hover:bg-white/5 hover:border-white/30 bg-transparent h-12 px-7 text-[11px] uppercase tracking-[0.2em]"
              >
                <a href="#leistungen" className="flex items-center gap-3">
                  Unsere Leistungen
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Interactive Form */}
          <div className="lg:col-span-5 w-full">
            <InteractiveLeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
