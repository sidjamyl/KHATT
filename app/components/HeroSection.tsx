"use client"
import Learnmore from './Learnmore'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="story" className="relative min-h-screen flex items-center justify-center py-20 px-4 text-white overflow-x-hidden">
      
      {/* Film Roll Animation - Top Background */}
      <div className="absolute top-24 sm:top-28 md:top-32 lg:top-24 left-0 w-full overflow-x-hidden bg-transparent z-0 opacity-90">
        <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-64 flex items-center justify-center py-2 sm:py-3 md:py-4">
          <div className="flex animate-scroll-film items-center">
            {[...Array(30)].map((_, i) => (
              <div key={`film-1-${i}`} className="relative h-44 sm:h-52 md:h-60 lg:h-68 xl:h-60 flex-shrink-0 flex items-center">
                <Image
                  src="/Group 9.svg"
                  alt=""
                  width={200}
                  height={200}
                  className="h-full w-auto object-contain"
                  priority={i < 5}
                  style={{ display: 'block' }}
                />
              </div>
            ))}
            {[...Array(30)].map((_, i) => (
              <div key={`film-2-${i}`} className="relative h-44 sm:h-52 md:h-60 lg:h-68 xl:h-60 flex-shrink-0 flex items-center">
                <Image
                  src="/Group 8.svg"
                  alt=""
                  width={200}
                  height={200}
                  className="h-full w-auto object-contain"
                  priority={i < 5}
                  style={{ display: 'block' }}
                />
              </div>
            ))}
          </div>
          
          {/* Text centered in camera roll */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center z-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 4, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <div className="space-y-1 sm:space-y-2 flex flex-col items-center text-center px-4">
              <h1 className="font-anton text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl 2xl:text-8xl leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Visual Production 
              </h1>
              <h1 className="font-anton text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl 2xl:text-8xl leading-tight tracking-tight text-[#F06A2A] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                House 
              </h1>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 mt-48 sm:mt-56 md:mt-64 lg:mt-72 xl:mt-64 max-h-full">
        <div className="flex flex-col text-white items-center justify-center text-center space-y-8 sm:space-y-10 md:space-y-12">
          
          {/* Large Centered Literal Image */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 3.4, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <Image
              src="/Fichier 32.svg"
              alt=""
              width={150}
              height={150}
              className="mb-12 sm:mt-4 object-contain opacity-90"
            />
          </motion.div>

          {/* Learn More Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 3.6, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <Learnmore/>
          </motion.div>
          
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-film {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-film {
          animation: scroll-film 30s linear infinite;
        }
      `}</style>
    </section>
  )
}