"use client"

import { useEffect, useState, useRef } from "react"

export default function CursorAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const b1Ref = useRef<HTMLDivElement>(null)
  const b2Ref = useRef<HTMLDivElement>(null)
  const b3Ref = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const positions = useRef([
    { x: 0, y: 0 }, // b1
    { x: 0, y: 0 }, // b2
    { x: 0, y: 0 }, // b3
  ])

  useEffect(() => {
    let animationId: number

    const updateMousePosition = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const animate = () => {
      const targetX = mousePos.current.x
      const targetY = mousePos.current.y

      positions.current[0].x += (targetX - positions.current[0].x) * 0.25
      positions.current[0].y += (targetY - positions.current[0].y) * 0.25

      positions.current[1].x += (targetX - positions.current[1].x) * 0.12
      positions.current[1].y += (targetY - positions.current[1].y) * 0.12

      positions.current[2].x += (targetX - positions.current[2].x) * 0.06
      positions.current[2].y += (targetY - positions.current[2].y) * 0.06

      // Update DOM elements
      if (b1Ref.current) {
        b1Ref.current.style.transform = `translate3d(${positions.current[0].x}px, ${positions.current[0].y}px, 0px) translate3d(-50%, -50%, 0px)`
      }
      if (b2Ref.current) {
        b2Ref.current.style.transform = `translate3d(${positions.current[1].x}px, ${positions.current[1].y}px, 0px) translate3d(-50%, -50%, 0px)`
      }
      if (b3Ref.current) {
        b3Ref.current.style.transform = `translate3d(${positions.current[2].x}px, ${positions.current[2].y}px, 0px) translate3d(-50%, -50%, 0px)`
      }

      animationId = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseleave", handleMouseLeave)
    animate()

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-50 w-full h-full transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <svg className="absolute top-0 left-0 w-full h-full">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="25" />
            <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 25 -10" />
          </filter>
        </defs>
      </svg>

      <div className="hooks-main">
        <div className="hooks-filter" style={{ filter: "url(#goo)" }}>
          <div
            ref={b1Ref}
            className="b1 absolute rounded-full"
            style={{
              width: "35px",
              height: "35px",
              backgroundColor: "#f97316",
              transform: "translate3d(0px, 0px, 0px) translate3d(-50%, -50%, 0px)",
            }}
          />
          <div
            ref={b2Ref}
            className="b2 absolute rounded-full"
            style={{
              width: "25px",
              height: "25px",
              backgroundColor: "#fb923c",
              transform: "translate3d(0px, 0px, 0px) translate3d(-50%, -50%, 0px)",
            }}
          />
          <div
            ref={b3Ref}
            className="b3 absolute rounded-full"
            style={{
              width: "15px",
              height: "15px",
              backgroundColor: "#fdba74",
              transform: "translate3d(0px, 0px, 0px) translate3d(-50%, -50%, 0px)",
            }}
          />
        </div>
      </div>
    </div>
  )
}
