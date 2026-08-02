"use client"

import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "default" | "light" | "dark"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Logo({ variant = "default", size = "md", className }: LogoProps) {
  return (
    <div className={cn("rs-logo", `rs-logo--${size}`, variant === "light" && "rs-logo--dark", className)} aria-label="Rheinland Solutions">
      <span className="rs-logo__mark" aria-hidden="true"><i /><i /></span>
      <span className="rs-logo__name"><strong>RHEINLAND</strong><small>SOLUTIONS</small></span>
    </div>
  )
}
