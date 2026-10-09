import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SecureDataTeaser } from "@/components/secure-data-teaser"

export const metadata: Metadata = {
  title: "Unternehmenssoftware | Rheinland Solutions",
  description: "Betreute digitale Lösungen für dein Unternehmen. Entdecke Secure Data Collection und finde den passenden Service für deine Abläufe.",
  alternates: { canonical: "https://www.rheinland-solutions.de/business-solutions" },
}

export default function BusinessSolutionsPage() {
  return <>
    <Header />
    <main id="main" className="business-page">
      <section className="container mx-auto px-5 sm:px-6 lg:px-8 pt-14 pb-10">
        <p className="brand-eyebrow">Lösungen für deinen Betrieb</p>
        <h1 className="brand-title mt-5">Unternehmens<wbr /><em>software.</em></h1>
        <p className="text-lg text-muted-foreground max-w-2xl mt-6">Digitale Services, die zu deinen Abläufen passen. Mit persönlicher Begleitung, klarem Leistungsumfang und einem Ansprechpartner für die Umsetzung.</p>
      </section>
      <SecureDataTeaser />
      <aside className="container mx-auto px-5 sm:px-6 lg:px-8 py-12">
        <div className="brand-note"><h2 className="text-xl font-semibold">Du suchst ein Werkzeug für eine kleine Aufgabe?</h2><p className="text-muted-foreground mt-3 mb-5">Bilder bearbeiten, PDFs zusammenfügen oder gemeinsam Ideen sammeln: Unsere kostenlosen Essentials helfen direkt im Alltag.</p><a className="brand-link" href="https://essentials.rheinland-solutions.de/">Zu den Essentials</a></div>
      </aside>
    </main>
    <Footer />
  </>
}
