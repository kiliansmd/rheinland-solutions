"use client"

import { useEffect } from "react"

export function usePreventOverscroll() {
  useEffect(() => {
    // Prevent overscroll on touch devices (iOS Safari)
    let startY = 0

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].pageY
    }

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].pageY
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = window.innerHeight

      // At top of page, scrolling up
      if (scrollTop <= 0 && currentY > startY) {
        e.preventDefault()
      }

      // At bottom of page, scrolling down
      if (scrollTop + clientHeight >= scrollHeight && currentY < startY) {
        e.preventDefault()
      }
    }

    // Prevent wheel events from propagating to parent window (iframe)
    const handleWheel = (e: WheelEvent) => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = window.innerHeight

      // At top, scrolling up
      if (scrollTop <= 0 && e.deltaY < 0) {
        e.preventDefault()
      }

      // At bottom, scrolling down
      if (scrollTop + clientHeight >= scrollHeight - 1 && e.deltaY > 0) {
        e.preventDefault()
      }
    }

    // Prevent scroll event propagation to parent
    const handleScroll = () => {
      if (window.parent !== window) {
        try {
          window.parent.document.documentElement.style.overflow = "hidden"
        } catch {
          // Cross-origin iframe, cannot access parent
        }
      }
    }

    document.addEventListener("touchstart", handleTouchStart, { passive: true })
    document.addEventListener("touchmove", handleTouchMove, { passive: false })
    document.addEventListener("wheel", handleWheel, { passive: false })
    handleScroll()

    return () => {
      document.removeEventListener("touchstart", handleTouchStart)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("wheel", handleWheel)
    }
  }, [])
}
