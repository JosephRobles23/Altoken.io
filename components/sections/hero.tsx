"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, TrendingUp, ChevronDown } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SignInDialog } from "@/components/auth/sign-in-dialog"
import { SignUpDialog } from "@/components/auth/sign-up-dialog"

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [showSignIn, setShowSignIn] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  return (
    <section ref={ref} className="relative overflow-hidden h-screen flex items-center justify-center">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://redswan.io/wp-content/uploads/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="section-container relative z-10 flex flex-col items-center justify-center h-full mb-40">
        <div className={`text-center space-y-8 max-w-3xl ${isVisible ? "fade-in-up" : "opacity-0 translate-y-8"}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/50 rounded-full">
            <TrendingUp size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Inversión Inmobiliaria Tokenizada</span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance text-white">
              Invierte en <span className="gradient-text">Bienes Raíces</span> de Forma Inteligente
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Acceso democrático a oportunidades de inversión inmobiliaria. Tokenización, transparencia y retornos
              reales.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => setShowSignIn(true)}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Comenzar Ahora
              <ArrowRight size={18} />
            </button>
            {/* <Link href="/como-funciona" className="btn-secondary inline-flex items-center justify-center gap-2">
              Ver Cómo Funciona
            </Link> */}
          </div>
        </div>
      </div>

      <div className="absolute bottom-18 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 text-sm">
        <span>SCROLL PARA EXPLORAR MÁS</span>
        <ChevronDown size={20} className="animate-bounce" />
      </div>

      {/* Auth Dialogs */}
      <SignInDialog
        isOpen={showSignIn}
        onClose={() => setShowSignIn(false)}
        onSwitchToSignUp={() => {
          setShowSignIn(false)
          setShowSignUp(true)
        }}
      />
      <SignUpDialog
        isOpen={showSignUp}
        onClose={() => setShowSignUp(false)}
        onSwitchToSignIn={() => {
          setShowSignUp(false)
          setShowSignIn(true)
        }}
      />
    </section>
  )
}
