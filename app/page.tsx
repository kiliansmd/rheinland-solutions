import { Header } from "@/components/header"
import { HeroSection, MobileHeroForm } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { TrustSection } from "@/components/trust-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
        <Header />
    <main id="main" className="min-h-screen min-h-dvh">
        <HeroSection />
      <MobileHeroForm />
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <FaqSection />
    </main>
      <Footer />
    </>
  )
}
