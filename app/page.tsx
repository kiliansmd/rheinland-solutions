import { Header } from "@/components/header"
import { HeroSection, MobileHeroForm } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { TrustSection } from "@/components/trust-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { SecureDataTeaser } from "@/components/secure-data-teaser"

export default function Home() {
  return (
    <main className="min-h-screen min-h-dvh">
      <div className="hero-screenshot">
        <Header />
        <HeroSection />
      </div>
      <MobileHeroForm />
      <TrustSection />
      <ServicesSection />
      <SecureDataTeaser />
      <ProcessSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
