"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function FinalCTASection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="section-container">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl ${
            isVisible ? "fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left Column - Orange CTA */}
          <div className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Comienza a Encontrar tu Propiedad Perfecta Hoy
            </h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Únete a miles de inversores satisfechos que han encontrado sus propiedades soñadas con nuestra
              plataforma de tokenización impulsada por blockchain
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/marketplace"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-background text-primary rounded-full font-semibold hover:bg-background/90 transition-all"
              >
                Comenzar
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/como-funciona"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-foreground text-primary-foreground rounded-full font-semibold hover:bg-primary-foreground/10 transition-all"
              >
                Programar Demo
              </Link>
            </div>
          </div>

          {/* Right Column - Image with Overlay Card */}
          <div className="relative min-h-[400px] lg:min-h-[500px]">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
              alt="Propiedades"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70"></div>

            {/* Floating Card */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="bg-card/95 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 max-w-md shadow-xl">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  ¿Listo para encontrar la inversión de tus sueños?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Nuestra IA puede conectarte con propiedades tokenizadas que se ajusten perfectamente a tu estilo de
                  inversión y presupuesto.
                </p>
                <Link
                  href="/marketplace"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Conoce más
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
