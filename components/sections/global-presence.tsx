"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Globe, Building2, Users, TrendingUp } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

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
      id: "lima",
      city: "Lima",
      country: "Perú",
      region: "Sudamérica",
      coordinates: { x: 25, y: 75 },
      employees: 45,
      established: "2020",
      description: "Nuestra oficina principal en Sudamérica, centro de operaciones para la región andina."
    },
    {
      id: "tolima",
      city: "Tolima",
      country: "Colombia",
      region: "Sudamérica",
      coordinates: { x: 22, y: 65 },
      employees: 32,
      established: "2021",
      description: "Hub de innovación tecnológica y desarrollo de productos blockchain."
    },
    {
      id: "cuenca",
      city: "Cuenca",
      country: "Ecuador",
      region: "Sudamérica",
      coordinates: { x: 20, y: 70 },
      employees: 28,
      established: "2021",
      description: "Centro de operaciones para mercados emergentes y tokenización."
    },
    {
      id: "san-salvador",
      city: "San Salvador",
      country: "El Salvador",
      region: "Centroamérica",
      coordinates: { x: 15, y: 55 },
      employees: 25,
      established: "2022",
      description: "Oficina estratégica para el mercado centroamericano y adopción blockchain."
    },
    {
      id: "buenos-aires",
      city: "Buenos Aires",
      country: "Argentina",
      region: "Sudamérica",
      coordinates: { x: 30, y: 85 },
      employees: 38,
      established: "2019",
      description: "Centro financiero y de compliance para operaciones en el Cono Sur."
    },
    {
      id: "central-america",
      city: "Ciudad de Guatemala",
      country: "Guatemala",
      region: "Centroamérica",
      coordinates: { x: 12, y: 52 },
      employees: 22,
      established: "2023",
      description: "Expansión regional para fortalecer presencia en Centroamérica."
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
    { icon: <Building2 size={24} />, value: "6+", label: "Oficinas Globales" },
    { icon: <Users size={24} />, value: "190+", label: "Profesionales" },
    { icon: <Globe size={24} />, value: "15+", label: "Países Atendidos" },
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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <strong className="text-primary">AlTOKEN.IO</strong> es la plataforma pionera completamente digital para la emisión de valores, 
            que empodera a los emisores para asegurar financiamiento mientras proporciona a los inversores 
            acceso rápido y transparente a inversiones alternativas.
          </p>
        </div>

        {/* Stats Row */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 ${isVisible ? "fade-in-up" : "opacity-0 translate-y-8"}`}>
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
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Side - Location List */}
          <div className={`space-y-4 ${isVisible ? "slide-in-left" : "opacity-0 -translate-x-8"}`}>
            <h3 className="text-2xl font-bold text-foreground mb-6">Nuestras Oficinas</h3>
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                className={`group cursor-pointer p-4 rounded-xl border transition-all duration-300 ${
                  activeLocation === location.id || animationStep === index
                    ? "border-primary/50 bg-primary/5 shadow-lg"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-md"
                }`}
                onClick={() => setActiveLocation(activeLocation === location.id ? null : location.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                    activeLocation === location.id || animationStep === index
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
            <div className="relative bg-gradient-to-br from-card via-card to-muted/20 border border-border rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                Conectando el Mundo a través de la Tokenización
              </h3>
              
              {/* SVG World Map */}
              <div className="relative w-full h-[400px] bg-gradient-to-b from-primary/5 to-primary/10 rounded-xl overflow-hidden">
                <svg
                  viewBox="0 0 100 60"
                  className="w-full h-full"
                  style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }}
                >
                  {/* Simplified World Map Paths */}
                  <defs>
                    <pattern id="dots" patternUnits="userSpaceOnUse" width="2" height="2">
                      <circle cx="1" cy="1" r="0.3" fill="currentColor" className="text-primary/20" />
                    </pattern>
                  </defs>
                  
                  {/* Continents - Simplified shapes */}
                  <motion.path
                    d="M10 20 L35 15 L40 25 L35 35 L25 40 L15 35 L10 25 Z"
                    fill="url(#dots)"
                    className="text-muted-foreground/30"
                    initial={{ pathLength: 0 }}
                    animate={isVisible ? { pathLength: 1 } : {}}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  
                  {/* South America */}
                  <motion.path
                    d="M20 50 L30 45 L35 55 L32 70 L25 75 L18 70 L15 60 Z"
                    fill="url(#dots)"
                    className="text-muted-foreground/30"
                    initial={{ pathLength: 0 }}
                    animate={isVisible ? { pathLength: 1 } : {}}
                    transition={{ duration: 2, delay: 0.7 }}
                  />
                  
                  {/* Office Location Markers */}
                  {locations.map((location, index) => (
                    <g key={location.id}>
                      {/* Connection Lines */}
                      <motion.line
                        x1="50"
                        y1="30"
                        x2={location.coordinates.x}
                        y2={location.coordinates.y}
                        stroke="currentColor"
                        strokeWidth="0.3"
                        className="text-primary/40"
                        initial={{ pathLength: 0 }}
                        animate={isVisible ? { pathLength: 1 } : {}}
                        transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                      />
                      
                      {/* Pulsing Circles */}
                      <motion.circle
                        cx={location.coordinates.x}
                        cy={location.coordinates.y}
                        r="2"
                        fill="currentColor"
                        className="text-primary"
                        initial={{ scale: 0 }}
                        animate={isVisible ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                      />
                      
                      {/* Animated Pulse Effect */}
                      <motion.circle
                        cx={location.coordinates.x}
                        cy={location.coordinates.y}
                        r="3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-primary/60"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={
                          isVisible && (animationStep === index || activeLocation === location.id)
                            ? {
                                scale: [1, 2, 1],
                                opacity: [0.8, 0, 0.8]
                              }
                            : { scale: 0, opacity: 0 }
                        }
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 1.5 + index * 0.2
                        }}
                      />
                      
                      {/* Location Labels */}
                      <motion.text
                        x={location.coordinates.x}
                        y={location.coordinates.y - 3}
                        textAnchor="middle"
                        fontSize="2"
                        fill="currentColor"
                        className="text-foreground font-medium"
                        initial={{ opacity: 0 }}
                        animate={
                          isVisible && (animationStep === index || activeLocation === location.id)
                            ? { opacity: 1 }
                            : { opacity: 0 }
                        }
                        transition={{ duration: 0.3 }}
                      >
                        {location.city}
                      </motion.text>
                    </g>
                  ))}
                  
                  {/* Central Hub */}
                  <motion.circle
                    cx="50"
                    cy="30"
                    r="3"
                    fill="currentColor"
                    className="text-accent"
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                  <motion.text
                    x="50"
                    y="26"
                    textAnchor="middle"
                    fontSize="2.5"
                    fill="currentColor"
                    className="text-accent font-bold"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    ALTOKEN.IO
                  </motion.text>
                </svg>
                
                {/* Floating Info Card */}
                <AnimatePresence>
                  {activeLocation && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 20 }}
                      className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm border border-primary/30 rounded-lg p-4 shadow-lg"
                    >
                      {(() => {
                        const location = locations.find(l => l.id === activeLocation)
                        return location ? (
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">
                              {location.city}, {location.country}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {location.description}
                            </p>
                          </div>
                        ) : null
                      })()}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
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
        </motion.div>
      </div>
    </section>
  )
}