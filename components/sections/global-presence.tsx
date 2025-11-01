"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Globe, Building2, Users, TrendingUp } from "lucide-react"
import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { BoxMap } from "@/components/ui/global-maps/global-maps"

interface OfficeLocation {
  id: string
  city: string
  country: string
  region: string
  coordinates: { x: number; y: number }
  employees?: number
  established?: string
  description: string
}

export function GlobalPresenceSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [activeLocation, setActiveLocation] = useState<string | null>(null)
  const [animationStep, setAnimationStep] = useState(0)
  const { t } = useTranslation('common')

  const locations: OfficeLocation[] = [
    {
      id: "peru",
      city: "Lima",
      country: "Perú",
      region: "Sudamérica",
      coordinates: { x: 25, y: 75 },
      employees: 45,
      established: "2020",
      description: "Nuestra oficina principal en Sudamérica, centro de operaciones para la región andina."
    },
    {
      id: "colombia",
      city: "Bogotá",
      country: "Colombia",
      region: "Sudamérica",
      coordinates: { x: 22, y: 65 },
      employees: 32,
      established: "2021",
      description: "Hub de innovación tecnológica y desarrollo de productos blockchain."
    },
    {
      id: "ecuador",
      city: "Quito",
      country: "Ecuador",
      region: "Sudamérica",
      coordinates: { x: 20, y: 70 },
      employees: 28,
      established: "2021",
      description: "Centro de operaciones para mercados emergentes y tokenización."
    },
    {
      id: "mexico",
      city: "Ciudad de México",
      country: "México",
      region: "Norteamérica",
      coordinates: { x: 15, y: 55 },
      employees: 35,
      established: "2022",
      description: "Oficina estratégica para el mercado norteamericano y adopción blockchain."
    },
    {
      id: "argentina",
      city: "Buenos Aires",
      country: "Argentina",
      region: "Sudamérica",
      coordinates: { x: 30, y: 85 },
      employees: 38,
      established: "2019",
      description: "Centro financiero y de compliance para operaciones en el Cono Sur."
    }
  ]

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % locations.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isVisible, locations.length])

  const stats = [
    { icon: <Building2 size={24} />, value: "5", label: "Oficinas Globales" },
    { icon: <Users size={24} />, value: "178", label: "Profesionales" },
    { icon: <Globe size={24} />, value: "12+", label: "Países Atendidos" },
    { icon: <TrendingUp size={24} />, value: "$50M+", label: "Tokenizado" }
  ]

  return (
    <section ref={ref} className="relative py-20 lg:py-20 overflow-hidden">
      {/* Oblique Dark Background */}
      <div 
        className="absolute inset-0 transform origin-top-left scale-110" 
        style={{ 
          backgroundColor: '#28292a',
          transform: 'skewY(-3deg) scale(1.1)'
        }}
      ></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 section-container">
        {/* Main Content Grid - Title Left, Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
          {/* Left Side - Header */}
          <div className={`${isVisible ? "fade-in-up" : "opacity-0 translate-y-8"} mb-12`}>
            <div className="mb-4">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                {t('globalPresence.title')}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t('globalPresence.subtitle')}{" "}
              <span className="text-primary">{t('globalPresence.tokenization')}</span>.
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('globalPresence.description')}
            </p>
          </div>

          {/* Right Side - Interactive World Map */}
          <div className={`${isVisible ? "slide-in-right" : "opacity-0 translate-x-8"}`}>
            <div className="relative w-full min-h-[400px] lg:min-h-[500px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative w-full h-full"
              >
                <BoxMap />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}