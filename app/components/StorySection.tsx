"use client"

import { useState, useEffect } from "react"
import Learnmore from "./Learnmore"
import { motion } from "framer-motion"
import Image from "next/image"

export default function StorySection() {
  
  return (
    <section id="sketch" className={`h-screen flex items-center py-4 sm:py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-4 text-white`}> 
      <div className="w-full lg:mx-8 max-w-7xl lg:max-w-none mx-auto h-full flex items-center">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-24 items-center justify-between w-full">
          
          {/* Image - Order 1 on desktop (left side), Order 1 on mobile (top) */}
          <motion.div 
            className="relative w-full h-48 sm:h-56 md:h-64 lg:h-[60vh] xl:h-[65vh] 2xl:h-[70vh] lg:flex-1 lg:max-w-5xl order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <Image
              src="/FullCover_Teaser.png"
              alt="Every idea begins with a sketch"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>

          {/* Text Content - Order 2 on both mobile and desktop (right side) */}
          <div className="flex-1 w-full lg:max-w-2xl order-2">
            <motion.div 
              className="space-y-2 sm:space-y-3 md:space-y-4 flex flex-col mb-4 sm:mb-5 md:mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <h2 className="font-anton text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl leading-tight sm:leading-tight tracking-tight opacity-90">
                EVERY IDEA BEGINS WITH
              </h2>
              <h2 className="font-anton text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl leading-tight sm:leading-tight tracking-tight text-[#F06A2A]">
                A LINE. 
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6 lg:mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
               Every idea begins with a sketch. A scribble. A script. <span className="underline decoration-[#F06A2A]">A line</span>. Rooted in North Africa +213 Led by vision, we bring thought to existence.
            </motion.p>

            
          </div>

        </div>
      </div>
    </section>
  )
}
