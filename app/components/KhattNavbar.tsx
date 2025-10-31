"use client"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function KhattNavbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Expanding background */}
      <div 
        className={`fixed top-0 left-0 right-0 bg-[#141516] transition-all duration-700 ease-in-out ${
          isScrolled ? 'h-screen z-0' : 'h-0 z-0'
        }`}
      />

      {/* Navbar */}
      <nav className={`fixed top-0 w-full text-white transition-all duration-500 ${
        isScrolled ? 'z-50' : 'z-50 bg-[#141516] backdrop-blur-sm'
      }`}>
        <div className="min-h-24 max-w-7xl flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center gap-24">
            {/* Left Links */}
            <div className="flex items-center gap-24 text-xl font-medium">
              <button
                onClick={() => scrollToSection("story")}
                className="hover:text-[#F06A2A] transition-colors duration-300"
              >
                From line to life
              </button>
              <button
                onClick={() => scrollToSection("cinematize")}
                className="hover:text-[#F06A2A] transition-colors duration-300"
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
               className="hover:opacity-80 transition-opacity"
             />
            </div>

            {/* Right Links */}
            <div className="flex items-center gap-24 text-xl font-medium">
              <button
                onClick={() => scrollToSection("card")}
                className="hover:text-[#F06A2A] transition-colors duration-300"
              >
                Business Card
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-[#F06A2A] transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
