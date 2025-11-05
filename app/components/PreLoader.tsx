"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function PreLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Animation se termine après 3 secondes
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#141516]"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.2,
          }}
        >
          {/* SVG Wave Animation */}
          <svg
            className="absolute top-0 w-full h-[calc(100%+300px)]"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,0 L1440,0 L1440,900 Q720,600 0,900 Z"
              fill="#141516"
              initial={{ y: -900 }}
              animate={{ y: 900 }}
              transition={{
                duration: 2.5,
                ease: [0.76, 0, 0.24, 1],
              }}
            />
          </svg>

          {/* KHATT Text with Animation */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            {/* Texte KHATT */}
            <motion.h1
              className="text-white font-anton text-[120px] tracking-wider"
              initial={{ letterSpacing: "0.5em", opacity: 0 }}
              animate={{ letterSpacing: "0.1em", opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              KHATT
            </motion.h1>

            {/* Texte Arabe خـــط */}
            <motion.p
              className="text-[#F06A2A] font-anton text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              خـــط
            </motion.p>

            {/* Loading bar */}
            <motion.div
              className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mt-8"
              initial={{ width: 0 }}
              animate={{ width: "16rem" }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="h-full bg-[#F06A2A]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}