import { Shield, CheckCircle2, Zap, Heart } from "lucide-react"

const guarantees = [
  { icon: CheckCircle2, text: "Individuelle Lösungen" },
  { icon: Zap, text: "Schnelle Umsetzung" },
  { icon: Shield, text: "Vertraulichkeit" },
  { icon: Heart, text: "Persönliche Betreuung" },
]

export function TrustSection() {
  return (
    <section aria-label="Unser Service" className="trust-editorial relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Guarantees Row */}
        <div
          className="trust-editorial__guarantees flex flex-wrap gap-3"
        >
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-success/5 border border-success/20 px-4 py-2"
            >
              <guarantee.icon className="w-4 h-4 text-success" />
              <span className="text-sm font-medium text-secondary">{guarantee.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
