"use client"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function KhattNavbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement
      const scrollThreshold = window.innerHeight * 0.5
      setIsScrolled(target.scrollTop > scrollThreshold)
    }

    const mainElement = document.querySelector('main')
    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll)
      return () => mainElement.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    setIsMobileMenuOpen(false)
    
    // Chercher d'abord dans le main element
    const mainElement = document.querySelector('main')
    const element = document.getElementById(id)
    
    if (element) {
      if (mainElement) {
        // Si on a un main avec scroll, on calcule la position
        const elementTop = element.offsetTop
        mainElement.scrollTo({
          top: elementTop,
          behavior: "smooth"
        })
      } else {
        // Sinon on utilise scrollIntoView
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <>
      {/* Expanding background */}
      <div 
        className={`fixed top-0 left-0 right-0 bg-[#141516] transition-all duration-700 ease-in-out pointer-events-none ${
          isScrolled ? 'h-screen z-0 ' : 'h-0 z-0'
        }`}
      />

      {/* Navbar */}
      <nav className={`fixed top-0 w-full text-white transition-all duration-500 ${
        isScrolled ? 'z-50' : 'z-50 bg-[#141516] backdrop-blur-sm'
      }`}>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex 2xl:h-24 xl:h-16 max-w-7xl items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center gap-12 xl:gap-24">
            {/* Left Links */}
            <div className="flex items-center gap-12 xl:gap-24 text-base xl:text-xl font-medium">
              <button
                onClick={() => scrollToSection("sketch")}
                className="hover:text-[#F06A2A] transition-colors duration-300 whitespace-nowrap"
              >
                A Sketch
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-[#F06A2A] transition-colors duration-300 whitespace-nowrap"
              >
                From line to life
              </button>
            </div>

            {/* Logo Center */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection("story")}>
              <Image 
                src="/formal_orange_white.png"
                alt="Khatt Logo"
                width={50}
                height={50}
                className="hover:opacity-80 transition-opacity xl:w-[50px] xl:h-[50px] 2xl:w-[60px] 2xl:h-[60px]"
              />
            </div>

            {/* Right Links */}
            <div className="flex items-center gap-12 xl:gap-24 text-base xl:text-xl font-medium">
              <button
                onClick={() => scrollToSection("vision")}
                className="hover:text-[#F06A2A] transition-colors duration-300"
              >
                Cinematize
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

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between px-4 sm:px-6 py-4">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => scrollToSection("story")}>
            <Image 
              src="/formal_orange_white.png"
              alt="Khatt Logo"
              width={50}
              height={50}
              className="hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-[#141516] transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 border-t border-white/10' : 'max-h-0'
        }`}>
          <div className="flex flex-col items-center py-6 space-y-4">
            <button
              onClick={() => scrollToSection("sketch")}
              className="text-white hover:text-[#F06A2A] transition-colors duration-300 text-lg font-medium py-2"
            >
              A Sketch
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-[#F06A2A] transition-colors duration-300 text-lg font-medium py-2"
            >
              From line to life
            </button>
            <button
              onClick={() => scrollToSection("vision")}
              className="text-white hover:text-[#F06A2A] transition-colors duration-300 text-lg font-medium py-2"
            >
              Cinematize
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-[#F06A2A] transition-colors duration-300 text-lg font-medium py-2"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
