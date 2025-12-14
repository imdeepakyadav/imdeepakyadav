"use client"

import { useEffect, useRef } from "react"

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationId: number
    let time = 0

    const drawWaves = () => {
      // Clear with dark transparent background for trail effect
      ctx.fillStyle = "rgba(15, 23, 42, 0.03)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw multiple wave layers with varying opacity
      const waveConfigs = [
        { color: "rgba(59, 130, 246, 0.06)", amplitude: 40, frequency: 0.003, yOffset: 0.3 },
        { color: "rgba(6, 182, 212, 0.04)", amplitude: 30, frequency: 0.004, yOffset: 0.5 },
        { color: "rgba(59, 130, 246, 0.03)", amplitude: 50, frequency: 0.002, yOffset: 0.7 },
      ]

      waveConfigs.forEach((config, index) => {
        ctx.strokeStyle = config.color
        ctx.lineWidth = 1.5
        ctx.beginPath()

        for (let x = 0; x < canvas.width; x += 5) {
          const y =
            canvas.height * config.yOffset +
            Math.sin((x + time * (index + 1) * 0.5) * config.frequency) * config.amplitude +
            Math.sin((x + time) * config.frequency * 2) * (config.amplitude * 0.5)

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      })

      // Draw subtle floating particles
      const particleCount = 15
      for (let i = 0; i < particleCount; i++) {
        const x = ((time * 0.2 + i * 150) % (canvas.width + 100)) - 50
        const y = canvas.height * (0.2 + (i % 5) * 0.15) + Math.sin(time * 0.01 + i) * 20
        const size = 2 + Math.sin(time * 0.02 + i) * 1
        const opacity = 0.1 + Math.sin(time * 0.01 + i) * 0.05

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`
        ctx.fill()
      }

      time += 0.8
      animationId = requestAnimationFrame(drawWaves)
    }

    drawWaves()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
      aria-hidden="true"
    />
  )
}
