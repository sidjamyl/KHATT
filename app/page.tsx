import KhattNavbar from "./components/KhattNavbar"
import HeroSection from "./components/HeroSection"
import StorySection from "./components/StorySection"
import AboutSection from "./components/AboutSection"
import VisionSection from "./components/VisionSection"
import ContactSection from "./components/ContactSection"

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
      <KhattNavbar />
      <div className="snap-start">
        <HeroSection />
      </div>
      <div className="snap-start">
        <StorySection />
      </div>
      <div className="snap-start">
        <AboutSection />
      </div>
      <div className="snap-start">
        <VisionSection />
      </div>
      <div className="snap-start">
        <ContactSection />
      </div>
    </main>
  )
}

