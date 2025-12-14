"use client"

import { useEffect, useRef, useCallback } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  life: number
  maxLife: number
  type: "float" | "drift" | "pulse" | "interactive"
  targetX?: number
  targetY?: number
  originalSize: number
}

interface ParticleSystemProps {
  particleCount?: number
  interactive?: boolean
  intensity?: "low" | "medium" | "high"
  colors?: string[]
}

export default function ParticleSystem({
  particleCount = 50,
  interactive = true,
  intensity = "medium",
  colors = ["#00D9FF", "#FF006E", "#39FF14", "#0080FF"],
}: ParticleSystemProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })
  const isVisibleRef = useRef(true)

  const createParticle = useCallback(
    (type: Particle["type"] = "float"): Particle => {
      const canvas = canvasRef.current
      if (!canvas) return {} as Particle

      const baseSize = intensity === "low" ? 2 : intensity === "medium" ? 3 : 4
      const size = Math.random() * baseSize + 1

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (intensity === "low" ? 0.3 : intensity === "medium" ? 0.5 : 0.8),
        vy: (Math.random() - 0.5) * (intensity === "low" ? 0.3 : intensity === "medium" ? 0.5 : 0.8),
        size,
        originalSize: size,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 400 + 200,
        type,
      }
    },
    [intensity, colors],
  )

  const updateParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    particlesRef.current.forEach((particle, index) => {
      particle.life++

      switch (particle.type) {
        case "float":
          particle.x += particle.vx
          particle.y += particle.vy
          particle.y += Math.sin(particle.life * 0.01) * 0.5
          break

        case "drift":
          particle.x += particle.vx * 0.8
          particle.y += particle.vy * 0.8 + Math.sin(particle.life * 0.02) * 0.3
          break

        case "pulse":
          particle.x += particle.vx * 0.6
          particle.y += particle.vy * 0.6
          particle.size = particle.originalSize + Math.sin(particle.life * 0.05) * 1
          break

        case "interactive":
          if (interactive && particle.targetX !== undefined && particle.targetY !== undefined) {
            const dx = particle.targetX - particle.x
            const dy = particle.targetY - particle.y
            particle.x += dx * 0.02
            particle.y += dy * 0.02
          } else {
            particle.x += particle.vx * 0.4
            particle.y += particle.vy * 0.4
          }
          break
      }

      const ageRatio = particle.life / particle.maxLife
      particle.opacity = Math.max(0, 0.8 - ageRatio * 0.8)

      const buffer = 50
      if (particle.x < -buffer) particle.x = canvas.width + buffer
      if (particle.x > canvas.width + buffer) particle.x = -buffer
      if (particle.y < -buffer) particle.y = canvas.height + buffer
      if (particle.y > canvas.height + buffer) particle.y = -buffer

      if (particle.life >= particle.maxLife || particle.opacity <= 0) {
        const types: Particle["type"][] = ["float", "drift", "pulse"]
        if (interactive) types.push("interactive")
        const randomType = types[Math.floor(Math.random() * types.length)]
        particlesRef.current[index] = createParticle(randomType)
      }
    })
  }, [createParticle, interactive])

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particlesRef.current.forEach((particle) => {
      if (particle.opacity <= 0) return

      ctx.save()
      ctx.globalAlpha = particle.opacity

      const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 2)
      gradient.addColorStop(0, particle.color)
      gradient.addColorStop(1, particle.color + "00")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fill()

      if (particle.type === "interactive") {
        ctx.shadowColor = particle.color
        ctx.shadowBlur = particle.size * 3
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.restore()
    })

    if (intensity === "high") {
      drawConnections(ctx)
    }
  }, [intensity])

  const drawConnections = useCallback((ctx: CanvasRenderingContext2D) => {
    const maxDistance = 100
    const particles = particlesRef.current

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.1
          ctx.save()
          ctx.globalAlpha = opacity
          ctx.strokeStyle = "#00D9FF"
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
          ctx.restore()
        }
      }
    }
  }, [])

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!interactive) return

      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      }

      particlesRef.current.forEach((particle) => {
        if (particle.type === "interactive") {
          const dx = mouseRef.current.x - particle.x
          const dy = mouseRef.current.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            particle.targetX = mouseRef.current.x + (Math.random() - 0.5) * 100
            particle.targetY = mouseRef.current.y + (Math.random() - 0.5) * 100
          }
        }
      })
    },
    [interactive],
  )

  const handleVisibilityChange = useCallback(() => {
    isVisibleRef.current = !document.hidden
  }, [])

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr

    const ctx = canvas.getContext("2d")
    if (ctx) {
      ctx.scale(dpr, dpr)
    }

    canvas.style.width = rect.width + "px"
    canvas.style.height = rect.height + "px"
  }, [])

  const initParticles = useCallback(() => {
    particlesRef.current = []
    const types: Particle["type"][] = ["float", "drift", "pulse"]
    if (interactive) types.push("interactive")

    for (let i = 0; i < particleCount; i++) {
      const randomType = types[Math.floor(Math.random() * types.length)]
      particlesRef.current.push(createParticle(randomType))
    }
  }, [particleCount, createParticle, interactive])

  const animate = useCallback(() => {
    if (!isVisibleRef.current) {
      animationRef.current = requestAnimationFrame(animate)
      return
    }

    updateParticles()
    drawParticles()
    animationRef.current = requestAnimationFrame(animate)
  }, [updateParticles, drawParticles])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    resizeCanvas()
    initParticles()
    animate()

    window.addEventListener("resize", resizeCanvas)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      document.removeEventListener("visibilitychange", handleVisibilityChange)

      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove)
      }

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [resizeCanvas, initParticles, animate, handleVisibilityChange, handleMouseMove, interactive])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: "transparent",
        width: "100vw",
        height: "100vh",
      }}
    />
  )
}
