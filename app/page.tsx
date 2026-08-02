import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"

export default function Home() {
  return (
    <main className="min-h-screen min-h-dvh">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <FaqSection />
      <Footer />
      <ChatWidget />
    </main>
  )
}
