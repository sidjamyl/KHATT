"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function CardSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    business: "",
    service: ""
  })

  const [showCard, setShowCard] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowCard(true)
    // Handle form submission logic here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="card" className={`min-h-screen py-32 px-8 bg-white transition-colors duration-700 ${
      isScrolled ? 'text-white' : 'text-black'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            Draw your line
          </h2>
          <p className={`text-xl transition-colors duration-700 ${
            isScrolled ? 'text-white/70' : 'text-black/70'
          }`}>
            Get your free business card and join the vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Card Preview */}
          <div className="relative">
            <div className={`transition-all duration-700 ${showCard ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
              <div className="aspect-[1.6/1] bg-black relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div>
                    <Image
                      src="/formal_orange_white.png"
                      alt="KHATT"
                      width={120}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-white">
                    <p className="text-2xl font-bold mb-2">{formData.name || "Your Name"}</p>
                    <p className="text-sm opacity-70 mb-1">{formData.business || "Business"}</p>
                    <p className="text-sm opacity-70 mb-4">{formData.service || "Service"}</p>
                    <div className="text-xs space-y-1 opacity-60">
                      <p>{formData.phone || "+213 XXX XX XX XX"}</p>
                      <p>{formData.email || "email@example.com"}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 opacity-10">
                    <Image
                      src="/literal.png"
                      alt="Pattern"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-6 py-4 border-2 outline-none transition-all duration-700 bg-transparent ${
                    isScrolled 
                      ? 'border-white/20 focus:border-[#F06A2A] text-white placeholder-white/50' 
                      : 'border-black/20 focus:border-[#F06A2A] text-black placeholder-black/50'
                  }`}
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-6 py-4 border-2 outline-none transition-all duration-700 bg-transparent ${
                    isScrolled 
                      ? 'border-white/20 focus:border-[#F06A2A] text-white placeholder-white/50' 
                      : 'border-black/20 focus:border-[#F06A2A] text-black placeholder-black/50'
                  }`}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 border-2 outline-none transition-all duration-700 bg-transparent ${
                    isScrolled 
                      ? 'border-white/20 focus:border-[#F06A2A] text-white placeholder-white/50' 
                      : 'border-black/20 focus:border-[#F06A2A] text-black placeholder-black/50'
                  }`}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-6 py-4 border-2 outline-none transition-all duration-700 bg-transparent ${
                    isScrolled 
                      ? 'border-white/20 focus:border-[#F06A2A] text-white placeholder-white/50' 
                      : 'border-black/20 focus:border-[#F06A2A] text-black placeholder-black/50'
                  }`}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="business"
                  placeholder="Business"
                  value={formData.business}
                  onChange={handleChange}
                  required
                  className={`w-full px-6 py-4 border-2 outline-none transition-all duration-700 bg-transparent ${
                    isScrolled 
                      ? 'border-white/20 focus:border-[#F06A2A] text-white placeholder-white/50' 
                      : 'border-black/20 focus:border-[#F06A2A] text-black placeholder-black/50'
                  }`}
                />
              </div>
              <div>
                <textarea
                  name="service"
                  placeholder="Service"
                  value={formData.service}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full px-6 py-4 border-2 outline-none transition-all duration-700 bg-transparent resize-none ${
                    isScrolled 
                      ? 'border-white/20 focus:border-[#F06A2A] text-white placeholder-white/50' 
                      : 'border-black/20 focus:border-[#F06A2A] text-black placeholder-black/50'
                  }`}
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-5 bg-[#F06A2A] text-white hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-widest font-bold"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
