"use client"

import { useState, useEffect } from "react"
import HorusEyeAnimation from "./horus-eye-animation"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "h-screen z-0" : "h-20 bg-black z-50"
      }`}
    >
      {isScrolled && (
        <div className="absolute inset-0">
          <HorusEyeAnimation />
        </div>
      )}
    </nav>
  )
}
