"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface InteractiveParticlesProps {
  children: React.ReactNode
  particleCount?: number
  attractionRadius?: number
  repulsionRadius?: number
}

export default function InteractiveParticles({
  children,
  particleCount = 20,
  attractionRadius = 100,
  repulsionRadius = 50,
}: InteractiveParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create particle elements
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = `absolute w-2 h-2 bg-primary/30 rounded-full pointer-events-none animate-particle-float`
      particle.style.left = Math.random() * 100 + "%"
      particle.style.top = Math.random() * 100 + "%"
      particle.style.animationDelay = Math.random() * 8 + "s"
      particle.style.animationDuration = Math.random() * 4 + 4 + "s"

      container.appendChild(particle)
      particlesRef.current.push(particle)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      particlesRef.current.forEach((particle) => {
        const particleRect = particle.getBoundingClientRect()
        const particleX = particleRect.left - rect.left + particleRect.width / 2
        const particleY = particleRect.top - rect.top + particleRect.height / 2

        const dx = mouseX - particleX
        const dy = mouseY - particleY
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < attractionRadius) {
          const force = (attractionRadius - distance) / attractionRadius
          const moveX = dx * force * 0.1
          const moveY = dy * force * 0.1

          if (distance < repulsionRadius) {
            // Repulsion effect
            particle.style.transform = `translate(${-moveX * 2}px, ${-moveY * 2}px) scale(1.2)`
          } else {
            // Attraction effect
            particle.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`
          }
        } else {
          particle.style.transform = "translate(0, 0) scale(1)"
        }
      })
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", () => {
      particlesRef.current.forEach((particle) => {
        particle.style.transform = "translate(0, 0) scale(1)"
      })
    })

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      particlesRef.current.forEach((particle) => {
        container.removeChild(particle)
      })
      particlesRef.current = []
    }
  }, [particleCount, attractionRadius, repulsionRadius])

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {children}
    </div>
  )
}
