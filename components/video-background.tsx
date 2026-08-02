"use client"

import { cn } from "@/lib/utils"

interface VideoBackgroundProps {
  src: string
  className?: string
  overlayClassName?: string
}

export function VideoBackground({ src, className, overlayClassName }: VideoBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 z-0 overflow-hidden", className)}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className={cn("absolute inset-0", overlayClassName)} />
    </div>
  )
}
