"use client"

import { useState, useEffect } from "react"
import Viewportfolio from "./Viewportfolio"

export default function AboutSection() {
  
  return (
    <section id="story" className={`min-h-screen flex items-center py-20 px-4  text-white`}> 
      <div className=" mx-8 w-full">
        <div className="flex flex-row gap-24 items-center justify-between flex-wrap md:flex-nowrap">
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <h2 className="font-heading opacity-90 text-5xl md:text-8xl font-bold  text-white">From line to life</h2>
            <br></br>
            <p className="text-lg leading-relaxed mb-6 opacity-90">
              Founded on September 18th. Khatt is a collective of creative minds and marketing skills. We've directed
              and produced many projects and ideas to digital and physical success.
            </p>

            <p className="text-xl opacity-90 font-light mb-8 text-accent">
              More than a production house but a digital tool for businesses and directors, where cinema meets strategy.
            </p>

            <Viewportfolio />
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-full flex-1 animate-slide-in-right max-w-5xl">
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
