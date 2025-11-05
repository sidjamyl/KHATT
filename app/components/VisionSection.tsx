"use client"

import { useState, useEffect } from "react"
import HoverButton from "./HoverButton"
import Image from "next/image"
import { motion } from "framer-motion"

export default function VisionSection() {
  
  return (
    <section id="vision" className={`h-screen flex items-center py-4 sm:py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-4 text-white`}> 
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
        <div className="flex flex-col items-center w-full space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
          
          {/* Title Section - Positioned High */}
          <div className="w-full text-center -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-16 xl:-mt-20">
            <motion.h2 
              className="font-heading opacity-90 text-5xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              Don't&nbsp;advertise,<br />
              <span className="text-[#F06A2A]">cinematize</span>
            </motion.h2>
          </div>

          {/* Text Content Section - Well Separated */}
          <div className="w-full lg:max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
            <motion.p 
              className="text-lg sm:text-lg md:text-xl lg:text-lg xl:text-lg 2xl:text-lg leading-relaxed opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              From short promotional content to films, we create frames that move, feel and live.
            </motion.p>

            <motion.p 
              className="text-xl sm:text-xl md:text-2xl lg:text-xl xl:text-xl 2xl:text-xl opacity-90 font-light text-accent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2, delay: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              Join the vision — get your (free) card and draw your own line.
            </motion.p>

            <motion.div
              className="flex justify-center pt-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.6, delay: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <HoverButton />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
