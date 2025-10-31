import KhattNavbar from "./components/KhattNavbar"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import VisionSection from "./components/VisionSection"
import CardSection from "./components/CardSection"
import ContactSection from "./components/ContactSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <KhattNavbar />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        
      </div>
    </main>
  )
}

