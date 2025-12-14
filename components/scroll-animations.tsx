"use client"

import type React from "react"

import { useEffect, useRef } from "react"

export function useScrollAnimation() {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const scrollElements = document.querySelectorAll(
      ".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale",
    )
    scrollElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return elementRef
}

export function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll(".parallax-slow, .parallax-medium, .parallax-fast")

      parallaxElements.forEach((element) => {
        const speed = element.classList.contains("parallax-slow")
          ? 0.2
          : element.classList.contains("parallax-medium")
            ? 0.5
            : 0.8
        const yPos = -(scrolled * speed)

        if (element.classList.contains("parallax-slow")) {
          ;(element as HTMLElement).style.setProperty("--parallax-offset-slow", `${yPos}px`)
        } else if (element.classList.contains("parallax-medium")) {
          ;(element as HTMLElement).style.setProperty("--parallax-offset-medium", `${yPos}px`)
        } else {
          ;(element as HTMLElement).style.setProperty("--parallax-offset-fast", `${yPos}px`)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
}

export default function ScrollAnimations({ children }: { children: React.ReactNode }) {
  useScrollAnimation()
  useParallax()

  return <>{children}</>
}
