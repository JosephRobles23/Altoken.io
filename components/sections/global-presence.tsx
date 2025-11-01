"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Globe, Building2, Users, TrendingUp } from "lucide-react"
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
    <section ref={ref} className="section-padding bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="section-container">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? "fade-in-up" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Presencia Global
          </h2>
          <p className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            <strong className="text-primary">AlTOKEN.IO</strong> cuenta con presencia en gran parte de Latinoamérica, con oficinas estratégicamente ubicadas en la región.
            Esta expansión nos permite tener una visión cercana del mercado local y fortalecer nuestro compromiso con la innovación en la tokenización de activos, mientras seguimos creciendo hacia nuevos territorios.
          </p>
        </div>

        {/* Stats Row */}
        {/*  <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 ${isVisible ? "fade-in-up" : "opacity-0 translate-y-8"}`}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-3">
                {stat.icon}
              </div>
              <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div> */}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Side - Location List */}
          <div className={`space-y-4 ${isVisible ? "slide-in-left" : "opacity-0 -translate-x-8"}`}>
            <h3 className="text-2xl font-bold text-foreground mb-6">Nuestras Oficinas</h3>
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                className={`group cursor-pointer p-4 rounded-xl border transition-all duration-300 ${activeLocation === location.id || animationStep === index
                  ? "border-primary/50 bg-primary/5 shadow-lg"
                  : "border-border bg-card hover:border-primary/30 hover:shadow-md"
                  }`}
                onClick={() => setActiveLocation(activeLocation === location.id ? null : location.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${activeLocation === location.id || animationStep === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary"
                    }`}>
                    <MapPin size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{location.city}</h4>
                    <p className="text-sm text-muted-foreground">{location.country}</p>
                  </div>
                  {location.employees && (
                    <div className="text-right">
                      <p className="text-sm font-medium text-primary">{location.employees}</p>
                      <p className="text-xs text-muted-foreground">empleados</p>
                    </div>
                  )}
                </div>

                <AnimatePresence>
                  {(activeLocation === location.id || animationStep === index) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 pt-3 border-t border-border/50"
                    >
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {location.description}
                      </p>
                      {location.established && (
                        <p className="text-xs text-primary mt-2">
                          Establecida en {location.established}
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Interactive World Map */}
          <div className={`lg:col-span-2 ${isVisible ? "slide-in-right" : "opacity-0 translate-x-8"}`}>
            <div className="relative w-full min-h-[400px] lg:min-h-[500px] mt-20">
              {/* Interactive Global Map */}
              <div className="relative w-full h-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative w-full h-full"
                >
                  <BoxMap />
                </motion.div>

                {/* Floating Info Card */}
                {/* <AnimatePresence>
                  {activeLocation && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 20 }}
                      className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm border border-primary/30 rounded-lg p-4 shadow-lg z-10"
                    >
                      {(() => {
                        const location = locations.find(l => l.id === activeLocation)
                        return location ? (
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">
                              {location.city}, {location.country}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {location.description}
                            </p>
                            <div className="flex justify-between items-center text-xs">
                              {location.employees && (
                                <span className="text-primary font-medium">
                                  {location.employees} empleados
                                </span>
                              )}
                              {location.established && (
                                <span className="text-muted-foreground">
                                  Est. {location.established}
                                </span>
                              )}
                            </div>
                          </div>
                        ) : null
                      })()}
                    </motion.div>
                  )}
                </AnimatePresence> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          className={`mt-16 text-center ${isVisible ? "fade-in-up" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Únete a Nuestra Red Global
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Forma parte de la revolución de la tokenización inmobiliaria.
              Nuestro equipo global está listo para apoyarte en tu journey de inversión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-3">
                Contactar Oficina Local
              </button>
              <button className="btn-secondary px-8 py-3">
                Ver Todas las Ubicaciones
              </button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}