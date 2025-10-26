import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export function FinalCTASection() {
  const benefits = ["Acceso inmediato", "Sin comisiones ocultas", "Soporte 24/7", "Garantía de seguridad"]

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Comienza tu Viaje de Inversión Hoy
            </h2>
            <p className="text-lg sm:text-xl opacity-90">
              Únete a miles de inversores que ya están construyendo riqueza a través de bienes raíces tokenizados.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 justify-center sm:justify-start">
                <CheckCircle size={20} className="flex-shrink-0" />
                <span className="text-sm sm:text-base">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contacto"
              className="px-8 py-4 bg-primary-foreground text-primary rounded-full font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
            >
              Solicitar Acceso
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/marketplace"
              className="px-8 py-4 border-2 border-primary-foreground text-primary-foreground rounded-full font-semibold hover:bg-primary-foreground/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              Explorar Marketplace
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-sm opacity-80 mb-4">Confiado por inversores en 50+ países</p>
            <div className="flex justify-center gap-4 flex-wrap">
              {["ISO 27001", "SOC 2", "GDPR", "Blockchain Verified"].map((badge, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full text-xs font-medium"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
