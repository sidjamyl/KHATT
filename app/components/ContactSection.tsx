"use client"

import Image from "next/image"

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4 text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/FullCover_Teaser.png"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-row gap-24 items-center justify-between flex-wrap md:flex-nowrap">
          {/* Text Content with Card */}
          <div className="flex-1 max-w-2xl bg-black/40 backdrop-blur-sm border border-white/10 p-12 rounded-lg">
            <h2 className="font-heading text-5xl md:text-8xl font-bold text-white mb-12">
              Let's connect
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-white/40 text-xs tracking-[0.3em] mb-2 uppercase">Email</p>
                <a
                  href="mailto:khattprod.business@gmail.com"
                  className="text-xl md:text-2xl text-white/90 hover:text-[#F06A2A] transition-colors duration-300 block"
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
                  className="text-xl md:text-2xl text-white/90 hover:text-[#F06A2A] transition-colors duration-300 block"
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
                  className="text-xl md:text-2xl text-white/90 hover:text-[#F06A2A] transition-colors duration-300 block"
                >
                  @khatt.prod
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-white/30 text-sm tracking-widest">
                © 2024 KHATT. Every line tells a story.
              </p>
            </div>
          </div>

          {/* Empty space for balance */}
          <div className="flex-1 max-w-xl hidden md:block" />
        </div>
      </div>
    </section>
  )
}
