"use client"

import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale"
  delay?: number
  threshold?: number
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold })

  const animations = {
    "fade-up": {
      initial: "opacity-0 translate-y-8",
      animate: "opacity-100 translate-y-0",
    },
    "fade-in": {
      initial: "opacity-0",
      animate: "opacity-100",
    },
    "fade-left": {
      initial: "opacity-0 translate-x-8",
      animate: "opacity-100 translate-x-0",
    },
    "fade-right": {
      initial: "opacity-0 -translate-x-8",
      animate: "opacity-100 translate-x-0",
    },
    scale: {
      initial: "opacity-0 scale-95",
      animate: "opacity-100 scale-100",
    },
  }

  const { initial, animate } = animations[animation]

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? animate : initial,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// Staggered children animation
interface StaggeredContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggeredContainer({
  children,
  className,
  staggerDelay = 100,
}: StaggeredContainerProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-500 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${index * staggerDelay}ms` }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}

// Text reveal animation
interface TextRevealProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
}

export function TextReveal({ text, className, as: Tag = "span" }: TextRevealProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <Tag ref={ref} className={cn("overflow-hidden inline-block", className)}>
      <span
        className={cn(
          "inline-block transition-transform duration-700 ease-out",
          isVisible ? "translate-y-0" : "translate-y-full"
        )}
      >
        {text}
      </span>
    </Tag>
  )
}

// Line reveal for decorative elements
export function LineReveal({ className }: { className?: string }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={cn(
        "h-px bg-primary transition-all duration-700 ease-out origin-left",
        isVisible ? "scale-x-100" : "scale-x-0",
        className
      )}
    />
  )
}
