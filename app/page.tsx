import { Header } from "@/components/header"
import { HeroSection, MobileHeroForm } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { TrustSection } from "@/components/trust-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata(
  "Digitalisierung & Prozessberatung in Solingen | Rheinland Solutions",
  "Digitale Lösungen für deinen Alltag und Betrieb: persönliche Beratung, Prozessoptimierung, Unternehmenssoftware und Schulungen aus Solingen.",
  "/",
)

export default function Home() {
  return (
    <main id="main" className="rs-home min-h-screen min-h-dvh">
      <div className="hero-screenshot">
        <Header />
        <HeroSection />
      </div>
      <MobileHeroForm />
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <FaqSection />
      <Footer />
    </main>
  )
}

