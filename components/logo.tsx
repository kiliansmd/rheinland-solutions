"use client"

import { cn } from "@/lib/utils"

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

  const logoSrc = "/images/logo-dark.png"

  return (
    <div className={cn("relative", className)}>
      <img
        src={logoSrc}
        alt="Rheinland Solutions"
        width={sizes[size].width}
        height={sizes[size].height}
        className={cn("object-contain", variant === "light" && "brightness-0 invert")}
        decoding="async"
      />
    </div>
  )
}
