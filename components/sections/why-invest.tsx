"use client"

import type React from "react"
import { Shield, Zap, TrendingUp, Users } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface Benefit {
  icon: React.ReactNode
  title: string
  description: string
  image: string
}

export function WhyInvestSection() {
  const { ref, isVisible } = useScrollAnimation()

  const benefits: Benefit[] = [
    {
      icon: <Shield size={32} />,
      title: "Seguridad Verificada",
      description: "Todas las propiedades son auditadas por expertos independientes con garantías legales.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80", // Security/documents
    },
    {
      icon: <Zap size={32} />,
      title: "Acceso Inmediato",
      description: "Invierte desde $1,000 en oportunidades que normalmente requieren millones.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80", // Modern building/access
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Retornos Reales",
      description: "Gana a través de ingresos por alquiler y apreciación de propiedades.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", // Charts/growth
    },
    {
      icon: <Users size={32} />,
      title: "Comunidad Global",
      description: "Únete a miles de inversores que ya están diversificando su portafolio.",
      image: "https://www.finnosummit.com/wp-content/uploads/2024/10/finnovista-fintech-radar-chile.png", // Team/community
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-primary/30 hover:border-primary transition-all duration-300 ${isVisible ? "fade-in-up" : "opacity-0 translate-y-8"
                }`}
              style={{
                animationDelay: isVisible ? `${index * 0.1}s` : "0s",
              }}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover opacity-10 group-hover:opacity-40 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-background/90 to-background/25"></div>
              </div>

              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-3">{benefit.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">{benefit.description}</p>

                {/* Explore Link */}
                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                  <span className="text-sm">Explorar más</span>
                  <div className="w-8 h-0.5 bg-primary"></div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`mt-16 p-8 bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/30 rounded-xl ${isVisible ? "fade-in" : "opacity-0"
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
