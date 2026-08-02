"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

interface LogoProps {
  variant?: "default" | "light" | "dark"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Logo({ variant = "default", size = "md", className }: LogoProps) {
  const sizes = {
    sm: { width: 140, height: 32 },
    md: { width: 180, height: 40 },
    lg: { width: 220, height: 50 },
  }

  // Use white logo on dark backgrounds, dark logo on light backgrounds
  const logoSrc = variant === "light" ? "/images/logo-dark.png" : "/images/logo-white.png"

  return (
    <div className={cn("relative", className)}>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rlogo_white-7QE8tR3FuM8nbrmoFruRCQDF3jz1Ud.png"
        alt="Rheinland Solutions"
        width={sizes[size].width}
        height={sizes[size].height}
        className="object-contain"
        priority
      />
    </div>
  )
}
