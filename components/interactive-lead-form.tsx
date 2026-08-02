"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

import {
  CheckCircle2,
  Shield,
  ArrowRight,
  Monitor,
  Settings,
  GraduationCap,
  Lock,
} from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  { id: "digitalisierung", name: "Digitalisierung", description: "Abläufe und Services digitalisieren", icon: Monitor },
  { id: "beratung", name: "Prozess-Beratung", description: "Potenziale erkennen und nutzen", icon: Settings },
  { id: "schulungen", name: "Schulungen", description: "Teams sicher ins Handeln bringen", icon: GraduationCap },
]

type FormData = {
  service: string
  name: string
  email: string
  company: string
  message: string
  consent: boolean
}

export function InteractiveLeadForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    service: "",
    name: "",
    email: "",
    company: "",
    message: "",
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const totalSteps = 2

  const handleSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
    setTimeout(() => setStep(2), 200)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.consent) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  if (isSuccess) {
    return (
      <div className="bg-card rounded-2xl shadow-2xl p-6 text-center border border-border">
        <div className="w-14 h-14 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7 text-success" />
        </div>
        <h3 className="font-display text-xl font-bold text-secondary mb-2">
          Vielen Dank!
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          Wir melden uns innerhalb von 24 Stunden bei Ihnen.
        </p>
        <div className="bg-muted rounded-lg p-4 text-left text-sm space-y-2">
          <p>
            <strong>Interesse:</strong> {services.find((s) => s.id === formData.service)?.name}
          </p>
          <p>
            <strong>Unternehmen:</strong> {formData.company || "Nicht angegeben"}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-border">
      {/* Header */}
      <div className="bg-secondary px-5 py-4 sm:px-6 sm:py-5">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-secondary-foreground/55 font-semibold mb-1">
              Kostenlose Ersteinschätzung
            </span>
            <p className="text-sm font-semibold text-secondary-foreground">
              In zwei Schritten zu Ihrem nächsten Projekt
            </p>
          </div>
          <span className="shrink-0 text-[10px] font-semibold text-secondary bg-gold px-2 py-1" aria-live="polite">
            {step} / {totalSteps}
          </span>
        </div>
        <div className="h-px bg-white/10 overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Form Content */}
      <div className="p-5 sm:p-6">
        {/* Step 1: Service Selection */}
        {step === 1 && (
          <div className="animate-fade-in-up">
            <h3 className="font-display text-xl font-bold text-secondary mb-1">
              Was möchten Sie voranbringen?
            </h3>
            <p className="text-sm text-muted-foreground mb-5">Wählen Sie den passenden Schwerpunkt.</p>
            <div className="space-y-2.5">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleSelect(service.id)}
                  className={cn(
                    "w-full p-3.5 rounded-lg border text-left transition-all duration-200 hover:border-primary hover:bg-primary/5 flex items-center gap-3.5",
                    formData.service === service.id ? "border-primary bg-primary/5" : "border-border",
                  )}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="min-w-0">
                    <span className="block font-semibold text-sm text-secondary">{service.name}</span>
                    <span className="block text-xs text-muted-foreground mt-0.5">{service.description}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Contact Info */}
        {step === 2 && (
          <div className="animate-fade-in-up">
            <h3 className="font-display text-xl font-bold text-secondary mb-1">
              Wie erreichen wir Sie?
            </h3>
            <p className="text-sm text-muted-foreground mb-4">Wir melden uns persönlich innerhalb von 24 Stunden.</p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                placeholder="Name *"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                required
                className="h-11"
              />
              <Input
                type="email"
                placeholder="E-Mail-Adresse *"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                required
                className="h-11"
              />
              <Input
                placeholder="Unternehmen (optional)"
                value={formData.company}
                onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                className="h-11"
              />

              <Textarea
                placeholder="Worum geht es bei Ihrem Projekt? (optional)"
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                rows={3}
                className="resize-none"
              />

              {/* Consent */}
              <div className="flex items-start gap-2 pt-1">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, consent: checked === true }))}
                  className="mt-0.5"
                />
                <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
                  Ich stimme der Verarbeitung meiner Daten zu.{" "}
                  <a href="#" className="text-primary hover:underline">
                    Datenschutz
                  </a>
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !formData.consent || !formData.name || !formData.email}
                className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Wird gesendet...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Anfrage senden
                    <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </Button>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-muted-foreground hover:text-secondary text-xs transition-colors w-full text-center pt-1"
              >
                Zurück zur Auswahl
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Trust Footer */}
      <div className="px-4 sm:px-6 pb-4">
        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground border-t border-border pt-4">
          <div className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-success" />
            <span>SSL-verschlüsselt</span>
          </div>
          <div className="flex items-center gap-1">
            <Lock className="w-3 h-3 text-success" />
            <span>DSGVO-konform</span>
          </div>
        </div>
      </div>
    </div>
  )
}
