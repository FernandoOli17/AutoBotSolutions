import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ProcessSection } from "@/components/process-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { TechBadge } from "@/components/tech-badge"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <TechnologiesSection />
      <ContactSection />
      <Footer />
      <TechBadge />
    </main>
  )
}
