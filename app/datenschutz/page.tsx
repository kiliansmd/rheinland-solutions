import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Rheinland Solutions",
  description: "Datenschutzerklärung von Rheinland Solutions gemäß DSGVO.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {/* Back Link */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>

          <h1 className="font-display text-4xl sm:text-5xl font-normal text-foreground mb-12">
            Datenschutzerklärung
          </h1>

          <div className="prose prose-neutral max-w-none space-y-8">
            {/* Einleitung */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            {/* Verantwortlicher */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                2. Verantwortlicher
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
              </p>
              <address className="not-italic text-muted-foreground leading-relaxed mt-3">
                Rheinland Solutions<br />
                Inhaber: Kevin Müller<br />
                Spitzwegstraße 23A<br />
                42719 Solingen<br />
                Deutschland<br /><br />
                E-Mail: info@rheinland-solutions.de
              </address>
            </section>

            {/* Datenerfassung */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                3. Datenerfassung auf dieser Website
              </h2>
              
              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem 
                Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver 
                und sicherer zu machen.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Einige Cookies sind "Session-Cookies." Solche Cookies werden nach Ende Ihrer Browser-Sitzung 
                von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie 
                diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website 
                wiederzuerkennen.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden 
                und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder 
                generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers 
                aktivieren.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Kontaktformular</h3>
              <p className="text-muted-foreground leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern 
                Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung 
                auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten 
                Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </section>

            {/* Analyse-Tools */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                4. Analyse-Tools
              </h2>
              
              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Vercel Analytics</h3>
              <p className="text-muted-foreground leading-relaxed">
                Diese Website nutzt Vercel Analytics, einen Webanalysedienst. Vercel Analytics verwendet 
                keine Cookies und erfasst keine personenbezogenen Daten. Es werden lediglich anonymisierte 
                Nutzungsdaten erhoben, um die Performance und Nutzung der Website zu analysieren.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Die Nutzung erfolgt auf Grundlage unseres berechtigten Interesses an einer statistischen 
                Analyse des Nutzerverhaltens zu Optimierungszwecken gemäß Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>

            {/* Ihre Rechte */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                5. Ihre Rechte
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck 
                Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, 
                die Berichtigung oder Löschung dieser Daten zu verlangen.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der 
                im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein 
                Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
              
              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Recht auf Datenübertragbarkeit</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung 
                eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, 
                maschinenlesbaren Format aushändigen zu lassen.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Widerruf Ihrer Einwilligung</h3>
              <p className="text-muted-foreground leading-relaxed">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. 
                Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit 
                der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Widerspruchsrecht</h3>
              <p className="text-muted-foreground leading-relaxed">
                Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, 
                haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, 
                gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen.
              </p>
            </section>

            {/* SSL/TLS */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                6. SSL- bzw. TLS-Verschlüsselung
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher 
                Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine 
                SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass 
                die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol 
                in Ihrer Browserzeile.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns 
                übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </section>

            {/* Aktualität */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                7. Aktualität und Änderung dieser Datenschutzerklärung
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. 
                behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. 
                Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser Website von Ihnen 
                abgerufen werden.
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
