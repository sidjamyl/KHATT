"use client"

import { useState, useEffect } from "react"
import Viewportfolio from "./Viewportfolio"
import { motion } from "framer-motion"

export default function AboutSection() {
  
  return (
    <section id="about" className={`h-screen flex items-center py-4 sm:py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-4 text-white`}> 
      <div className="w-full lg:mx-8 max-w-7xl lg:max-w-none mx-auto h-full flex items-center">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-24 items-center justify-between w-full">
          {/* Text Content */}
          <div className="flex-1 w-full lg:max-w-2xl order-2 lg:order-1">
            <motion.h2 
              className="font-heading opacity-90 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              FROM LINE TO LIFE
            </motion.h2>
            <br className="hidden lg:block"></br>
            <motion.p 
              className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg leading-relaxed mb-3 sm:mb-4 md:mb-5 lg:mb-6 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              Founded on September 18th. Khatt is a collective of creative minds and marketing skills. We've directed
              and produced many projects and ideas to digital and physical success.
            </motion.p>

            <motion.p 
              className="text-base sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl opacity-90 font-light mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-accent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2, delay: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              More than a production house but a digital tool for businesses and directors, where cinema meets strategy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.6, delay: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <Viewportfolio />
            </motion.div>
          </div>

          {/* Image */}
          <motion.div 
            className="relative w-full h-40 sm:h-48 md:h-56 lg:h-[60vh] xl:h-[65vh] 2xl:h-[70vh] flex-1 lg:max-w-5xl order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg_image.png-j0OjKsVm23Awf7e8B9HQHGotbphPxk.jpeg"
              alt="Production work"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
