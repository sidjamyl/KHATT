"use client"
import Learnmore from './Learnmore'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section id="story" className="relative min-h-screen flex items-center  justify-center py-20 px-4  text-white overflow-hidden">
      

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col text-black items-center text-center space-y-6 sm:space-y-8 md:space-y-12">
          {/* Main Headline - Huge and Bold */}
          <motion.div 
            className="space-y-2 sm:space-y-3 md:space-y-4 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <div className="flex flex-row">
            <h1 className="font-anton xl:text-[60px] 2xl:text-[100px] lg:text-[60px] md:text-[60px] sm:text-[60px] text-3xl leading-relaxed sm:leading-[0.85] tracking-tight">
              EVERY IDEA BEGINS WITH 
            </h1>
            
            </div>
            <h1 className="font-anton xl:text-[60px] 2xl:text-[100px] lg:text-[60px] md:text-[60px] sm:text-[60px] text-3xl leading-relaxed sm:leading-[0.85] tracking-tight text-[#F06A2A]">
              A SKETCH
            </h1>
          </motion.div>
      
          {/* Subtitle - Smaller, elegant */}
          <motion.div 
            className="space-y-2 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-8xl px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.4, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <p className="leading-relaxed">A scribble. A script. A line. Rooted in North Africa +213 Led by vision, we bring thought to existence.</p>
           
          </motion.div>
         
          {/* Brand Name with Arabic */}
        
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 3.6, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <Learnmore/>
          </motion.div>


          {/* Location & Mission - Small and refined */}
          
        </div>
      </div>

      {/* Film Perforations Animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-black">
        <div className="relative h-6 sm:h-8 md:h-12 flex items-center justify-center">
          {/* Top perforations */}
          <div className="w-full flex animate-scroll-film">
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4">
              {[...Array(200)].map((_, i) => (
                <div key={`top-1-${i}`} className="w-3 h-2 sm:w-4 sm:h-3 md:w-8 md:h-5 bg-[#333333] border border-[#555555] flex-shrink-0" />
              ))}
            </div>
          </div>
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