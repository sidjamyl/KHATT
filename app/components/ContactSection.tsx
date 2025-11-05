"use client"

export default function ContactSection() {
  return (
    <footer id="contact" className="opacity-90 bg-black text-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-8">
          
          {/* Email */}
          <div className="space-y-2">
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-light">Email</p>
            <a
              href="mailto:khattprod.business@gmail.com"
              className="text-sm sm:text-base text-white/90 hover:text-[#F06A2A] transition-colors duration-300 block font-light"
            >
              khattprod.business@gmail.com
            </a>
          </div>

          {/* WhatsApp */}
          <div className="space-y-2">
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-light">WhatsApp</p>
            <a
              href="https://wa.me/213795594890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-white/90 hover:text-[#F06A2A] transition-colors duration-300 block font-light"
            >
              +213 795 59 48 90
            </a>
          </div>

          {/* Instagram */}
          <div className="space-y-2">
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-light">Instagram</p>
            <a
              href="https://instagram.com/khatt.prod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-white/90 hover:text-[#F06A2A] transition-colors duration-300 block font-light"
            >
              @khatt.prod
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-white/30 text-xs tracking-widest font-light">
              © 2024 KHATT
            </p>
            <p className="text-white/30 text-xs tracking-widest font-light italic">
              Every line tells a story.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
