"use client"

import type React from "react"
import { Shield, Zap, TrendingUp, Users } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface Benefit {
  icon: React.ReactNode
  title: string
  description: string
}

export function WhyInvestSection() {
  const { ref, isVisible } = useScrollAnimation()

  const benefits: Benefit[] = [
    {
      icon: <Shield size={32} />,
      title: "Seguridad Verificada",
      description: "Todas las propiedades son auditadas por expertos independientes con garantías legales.",
    },
    {
      icon: <Zap size={32} />,
      title: "Acceso Inmediato",
      description: "Invierte desde $1,000 en oportunidades que normalmente requieren millones.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Retornos Reales",
      description: "Gana a través de ingresos por alquiler y apreciación de propiedades.",
    },
    {
      icon: <Users size={32} />,
      title: "Comunidad Global",
      description: "Únete a miles de inversores que ya están diversificando su portafolio.",
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-primary/5">
      <div className="section-container">
        {/* Header */}
        <div className={`text-center mb-16 space-y-4 ${isVisible ? "fade-in-up" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">¿Por Qué Invertir en Altoken?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Democratizamos el acceso a inversiones inmobiliarias con tecnología blockchain.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 ${
                isVisible ? "fade-in-up" : "opacity-0 translate-y-8"
              }`}
              style={{
                animationDelay: isVisible ? `${index * 0.1}s` : "0s",
              }}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`mt-16 p-8 bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/30 rounded-xl ${
            isVisible ? "fade-in" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-primary mb-2">0%</p>
              <p className="text-muted-foreground">Comisiones Ocultas</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">24/7</p>
              <p className="text-muted-foreground">Soporte Disponible</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">100%</p>
              <p className="text-muted-foreground">Transparencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
