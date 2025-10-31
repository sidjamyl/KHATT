"use client"
import Image from "next/image"
import { useState } from "react"

export default function KhattNavbar() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-black text-white z-50 border-b border-border">
      <div className="min-h-24 max-w-7xl flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-center gap-24">
          {/* Left Links */}
          <div className="flex items-center gap-24 text-xl font-medium">
            <button
              onClick={() => scrollToSection("story")}
              className=" hover:text-accent transition-colors duration-300"
            >
              From line to life
            </button>
            <button
              onClick={() => scrollToSection("cinematize")}
              className="text-foreground hover:text-accent transition-colors duration-300"
            >
              Cinematize
            </button>
          </div>

          {/* Logo Center */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection("home")}>
           <Image 
             src="/formal_orange_white.png"
             alt="Khatt Logo"
             width={70}
             height={70}
             className="hover:text-accent transition-colors"
           />
          </div>

          {/* Right Links */}
          <div className="flex items-center gap-24 text-xl font-medium">
            <button
              onClick={() => scrollToSection("card")}
              className="text-foreground hover:text-accent transition-colors duration-300"
            >
              Business Card
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-accent transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
