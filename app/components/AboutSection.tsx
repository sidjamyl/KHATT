"use client"

import { useState, useEffect } from "react"

export default function AboutSection() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="story" className={`min-h-screen flex items-center py-20 px-4 bg-foreground transition-colors duration-700 ${
      isScrolled ? 'text-white' : 'text-background'
    }`}>
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8">From line to life</h2>

            <p className="text-lg leading-relaxed mb-6 opacity-90">
              Founded on September 18th. Khatt is a collective of creative minds and marketing skills. We've directed
              and produced many projects and ideas to digital and physical success.
            </p>

            <p className="text-xl font-light mb-8 text-accent">
              More than a production house but a digital tool for businesses and directors, where cinema meets strategy.
            </p>

            <a
              href="https://example.com/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-accent text-background font-heading text-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              View Portfolio
            </a>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-full animate-slide-in-right">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg_image.png-j0OjKsVm23Awf7e8B9HQHGotbphPxk.jpeg"
              alt="Production work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
