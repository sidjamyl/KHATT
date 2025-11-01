"use client"

import Image from "next/image"

export default function ContactSection() {
  return (
    <section id="contact" className="h-screen flex items-center py-4 sm:py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-4 text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/FullCover_Teaser.png"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 h-full flex items-center">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-16 xl:gap-24 items-center justify-between w-full">
          {/* Text Content with Card */}
          <div className="flex-1 w-full lg:max-w-2xl bg-black/40 backdrop-blur-sm border border-white/10 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12">
              Let's connect
            </h2>

            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-7 2xl:space-y-8">
              <div>
                <p className="text-white/40 text-xs tracking-[0.3em] mb-2 uppercase">Email</p>
                <a
                  href="mailto:khattprod.business@gmail.com"
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 hover:text-[#F06A2A] transition-colors duration-300 block break-all"
                >
                  khattprod.business@gmail.com
                </a>
              </div>

              <div>
                <p className="text-white/40 text-xs tracking-[0.3em] mb-2 uppercase">WhatsApp</p>
                <a
                  href="https://wa.me/213795594890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 hover:text-[#F06A2A] transition-colors duration-300 block"
                >
                  +213 795 59 48 90
                </a>
              </div>

              <div>
                <p className="text-white/40 text-xs tracking-[0.3em] mb-2 uppercase">Instagram</p>
                <a
                  href="https://instagram.com/khatt.prod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 hover:text-[#F06A2A] transition-colors duration-300 block"
                >
                  @khatt.prod
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 sm:mt-7 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-16 pt-4 sm:pt-5 md:pt-6 lg:pt-7 xl:pt-8 border-t border-white/10">
              <p className="text-white/30 text-xs sm:text-sm tracking-widest">
                © 2024 KHATT. Every line tells a story.
              </p>
            </div>
          </div>

          {/* Empty space for balance - only on desktop */}
          <div className="flex-1 max-w-xl hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
