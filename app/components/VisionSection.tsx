"use client"

import { useState, useEffect } from "react"
import HoverButton from "./HoverButton"
import Image from "next/image"

export default function VisionSection() {
  
  return (
    <section id="vision" className={`min-h-screen flex items-center py-20 px-4 text-white`}> 
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-row gap-32 items-center justify-center flex-wrap md:flex-nowrap">
          {/* Image */}
          <div className="relative h-96 md:h-full flex-1 max-w-xl">
            <Image
              src="/3.1.png"
              alt="Cinematize"
              width={600}
              height={600}
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 max-w-5xl">
            <h2 className="font-heading opacity-90 text-5xl md:text-8xl font-bold text-white whitespace-nowrap">
              Don't&nbsp;advertise,<br />
              <span className="text-[#F06A2A]">cinematize</span>
            </h2>
            <br></br>
            <p className="text-lg leading-relaxed mb-6 opacity-90">
              From short promotional content to films, we create frames that move, feel and live.
            </p>

            <p className="text-xl opacity-90 font-light mb-8 text-accent">
              Join the vision — get your (free) card and draw your own line.
            </p>

            <HoverButton />
          </div>
        </div>
      </div>
    </section>
  )
}
