"use client"

import { useState, useEffect } from "react"
import HoverButton from "./HoverButton"
import Image from "next/image"
import { motion } from "framer-motion"

export default function VisionSection() {
  
  return (
    <section id="vision" className={`h-screen flex items-center py-4 sm:py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-4 text-white`}> 
      <div className="max-w-7xl mx-auto w-full h-full flex items-center">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-16 xl:gap-32 items-center justify-center w-full">
          {/* Image */}
          <motion.div 
            className="relative w-full h-32 sm:h-12 md:h-12 lg:h-[60vh] xl:h-[65vh] 2xl:h-[70vh] flex-1 lg:max-w-xl order-2 lg:order-1 hidden lg:block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <Image
              src="/3.1.png"
              alt="Cinematize"
              width={600}
              height={600}
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 w-full lg:max-w-5xl order-1 lg:order-2">
            <motion.h2 
              className="font-heading opacity-90 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              Don't&nbsp;advertise,<br />
              <span className="text-[#F06A2A]">cinematize</span>
            </motion.h2>
            <br className="hidden lg:block"></br>
            <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-0"></div>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-lg 2xl:text-lg leading-relaxed mb-3 sm:mb-4 md:mb-5 lg:mb-6 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              From short promotional content to films, we create frames that move, feel and live.
            </motion.p>

            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-xl 2xl:text-xl opacity-90 font-light mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-accent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              Join the vision — get your (free) card and draw your own line.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <HoverButton />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
