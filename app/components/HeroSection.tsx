"use client"

export default function HeroSection() {
  return (
    <section id="story" className="relative min-h-screen flex items-center py-20 px-4 bg-foreground text-background overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <h2 className="font-heading text-5xl md:text-8xl font-bold mb-8 items-end "> KHATT | <span className="text-[#F06A2A]">خـــط</span></h2>

            <p className="text-lg leading-relaxed mb-6 opacity-90">
              Every idea begins with a sketch. A scribble. A script. A line
              <br />
              Rooted in North Africa +213
              <br />
              Led by vision, we bring thought to existence.
            </p>
        

           </div> 
        </div>
      </div>

      {/* Film Perforations Animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-black  ">
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

        @keyframes scroll-text {
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

        .animate-scroll-text {
          animation: scroll-text 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
