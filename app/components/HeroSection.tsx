"use client"
import Learnmore from './Learnmore'
export default function HeroSection() {
  return (
    <section id="story" className="relative min-h-screen flex items-center  justify-center py-20 px-4  text-white overflow-hidden">
      

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col text-black items-center text-center space-y-12">
          {/* Main Headline - Huge and Bold */}
          <div className="space-y-4 flex flex-col">
            <div className="flex flex-row">
            <h1 className="font-anton text-[180px] md:text-[100px] leading-[0.85] tracking-tight">
              EVERY IDEA BEGINS WITH 
            </h1>
            
            </div>
            <h1 className="font-anton text-[180px] md:text-[100px] leading-[0.85] tracking-tight text-[#F06A2A]">
              A SKETCH
            </h1>
          </div>
      
          {/* Subtitle - Smaller, elegant */}
          <div className="space-y-2 text-lg  max-w-8xl">
            <p className="leading-relaxed">A scribble. A script. A line. Rooted in North Africa +213 Led by vision, we bring thought to existence.</p>
           
          </div>
         
          {/* Brand Name with Arabic */}
        
          <Learnmore/>


          {/* Location & Mission - Small and refined */}
          
        </div>
      </div>

      {/* Film Perforations Animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-black">
        <div className="relative h-12 flex items-center justify-center">
          {/* Top perforations */}
          <div className="w-full flex animate-scroll-film">
            <div className="flex items-center gap-4">
              {[...Array(200)].map((_, i) => (
                <div key={`top-1-${i}`} className="w-8 h-5 bg-[#333333] border border-[#555555] flex-shrink-0" />
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
