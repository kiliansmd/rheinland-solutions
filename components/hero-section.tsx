"use client"

import { ArrowRight } from "lucide-react"
import { InteractiveLeadForm } from "./interactive-lead-form"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="demo" className="hero-modern relative flex items-center bg-[#efff00] text-[#10123f]">
      <div className="hero-side-label" aria-hidden="true">RHEINLAND · SOLINGEN · DIGITAL</div>
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
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/75 to-secondary/25" />
        <div className="absolute inset-0 hero-grid" />
      </div>

      <div className="hero-container container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="hero-layout grid lg:grid-cols-12 gap-10 lg:gap-16 items-start lg:items-center">
          {/* Left Content */}
          <div className="hero-copy lg:col-span-7 lg:pr-10">
            {/* Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-[#10123f]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#10123f]/70 font-bold">
                Beratung & Digitalisierung
              </span>
            </div>

            <h1 className="font-display text-[2rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-normal leading-[1.05] tracking-[-0.02em]">
              Digitalisierung, die{" "}
              <span className="text-gold italic">wirkt.</span>
            </h1>

            <p className="mt-8 sm:mt-10 text-[15px] sm:text-base md:text-lg text-[#10123f]/75 leading-relaxed max-w-lg">
              Von der klaren Strategie bis zur wirksamen Umsetzung: Wir vereinfachen Prozesse, schaffen digitale Lösungen und befähigen Ihr Team.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:mt-14">
              <Button
                asChild
                className="bg-[#10123f] hover:bg-[#20245d] text-white font-bold h-13 px-8 text-[11px] uppercase tracking-[0.2em] rounded-none"
              >
                <a href="#kontakt" className="flex items-center gap-3">
                  Projekt anfragen
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#10123f]/40 text-[#10123f] hover:text-white hover:bg-[#10123f] bg-transparent h-13 px-8 text-[11px] uppercase tracking-[0.2em] rounded-none"
              >
                <a href="#leistungen" className="flex items-center gap-3">
                  Unsere Leistungen
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Interactive Form */}
          <div className="hero-form hidden lg:block lg:col-span-5 w-full lg:translate-y-12">
            <InteractiveLeadForm />
          </div>
        </div>
      </div>
      <div className="hero-coordinate" aria-hidden="true"><span>51.170° N</span><span>07.084° E</span></div>
    </section>
  )
}
