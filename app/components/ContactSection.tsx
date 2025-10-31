"use client"

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen py-32 px-8 bg-black flex items-center">
      <div className="max-w-5xl mx-auto w-full text-center">
        <h2 className="text-6xl md:text-7xl font-bold mb-16 text-white">
          Let's connect
        </h2>

        <div className="space-y-8 text-xl md:text-2xl">
          <div>
            <p className="text-white/50 text-sm tracking-widest mb-2">EMAIL</p>
            <a
              href="mailto:khattprod.business@gmail.com"
              className="text-white hover:text-[#F06A2A] transition-colors duration-300 tracking-wide"
            >
              khattprod.business@gmail.com
            </a>
          </div>

          <div>
            <p className="text-white/50 text-sm tracking-widest mb-2">WHATSAPP</p>
            <a
              href="https://wa.me/213795594890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F06A2A] transition-colors duration-300 tracking-wide"
            >
              +213 795 59 48 90
            </a>
          </div>

          <div>
            <p className="text-white/50 text-sm tracking-widest mb-2">INSTAGRAM</p>
            <a
              href="https://instagram.com/khatt.prod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F06A2A] transition-colors duration-300 tracking-wide"
            >
              @khatt.prod
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-white/10">
          <p className="text-white/30 text-sm tracking-widest">
            © 2024 KHATT. Every line tells a story.
          </p>
        </div>
      </div>
    </section>
  )
}
