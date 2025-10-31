"use client"

import Image from "next/image"
import Link from "next/link"

export default function VisionSection() {
  return (
    <section id="vision" className="min-h-screen py-32 px-8 bg-black relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <h2 className="text-7xl md:text-8xl font-bold mb-12 text-white">
          Don't advertise,<br />
          <span className="text-[#F06A2A]">cinematize</span>
        </h2>

        <p className="text-xl md:text-2xl mb-12 text-white/80 leading-relaxed max-w-3xl mx-auto">
          From short promotional content to films, we create frames that move, feel and live.
        </p>

        <p className="text-lg mb-12 text-white/70">
          Join the vision — get your (free) card and draw your own line.
        </p>

        <Link
          href="#card"
          className="inline-block px-12 py-5 bg-[#F06A2A] text-white hover:bg-white hover:text-[#F06A2A] transition-all duration-300 text-sm tracking-widest font-bold"
        >
          GET YOUR CARD
        </Link>

        {/* Decorative image */}
        <div className="mt-20 relative h-96">
          <Image
            src="/Asset 31.png"
            alt="Vision"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}
