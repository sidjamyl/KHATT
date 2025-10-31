import KhattNavbar from "./components/KhattNavbar"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import VisionSection from "./components/VisionSection"
import CardSection from "./components/CardSection"
import ContactSection from "./components/ContactSection"
import Navbar from "./components/Navbar"
export default function Home() {
  return (
    <main className="min-h-screen">
      <KhattNavbar />
      <HeroSection />
      <AboutSection />
      
    </main>
  )
}

