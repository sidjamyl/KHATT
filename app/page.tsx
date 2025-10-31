import KhattNavbar from "./components/KhattNavbar"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import VisionSection from "./components/VisionSection"
import CardSection from "./components/CardSection"
import ContactSection from "./components/ContactSection"

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <KhattNavbar />
      <div className="snap-start">
        <HeroSection />
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

