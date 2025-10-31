"use client"

import { useState, useEffect, useRef } from "react"

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export default function HorusEyeAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [particleCount] = useState(150)
  const [particleSpeed] = useState(1)
  const [particleSize] = useState(2)
  const [isAnimating] = useState(true)
  const animationRef = useRef<number | null>(null)

  // Initialiser les particules
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const newParticles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * particleSpeed * 2,
        vy: (Math.random() - 0.5) * particleSpeed * 2,
        size: Math.random() * particleSize + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
      })
    }
    setParticles(newParticles)
  }, [particleCount, particleSpeed, particleSize])

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const animate = () => {
      // Fond noir
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Mettre à jour et dessiner les particules
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newX = particle.x + particle.vx * particleSpeed
          let newY = particle.y + particle.vy * particleSpeed

          // Rebondir sur les bords
          if (newX < 0 || newX > canvas.width) {
            particle.vx *= -1
            newX = Math.max(0, Math.min(canvas.width, newX))
          }
          if (newY < 0 || newY > canvas.height) {
            particle.vy *= -1
            newY = Math.max(0, Math.min(canvas.height, newY))
          }

          return {
            ...particle,
            x: newX,
            y: newY,
          }
        }),
      )

      // Dessiner les particules
      particles.forEach((particle) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      if (isAnimating) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    if (isAnimating) {
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [particles, particleSpeed, isAnimating])

  return (
    <div className="w-full h-full">
      <canvas ref={canvasRef} width={1920} height={1080} className="w-full h-full bg-black" />
    </div>
  )
}
