"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Target, Users, Lightbulb, Network, BookOpen } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface Objective {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  image: string
  color: string
}

export function ObjectivesSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [activeObjective, setActiveObjective] = useState(0)

  const objectives: Objective[] = [
    {
      id: 1,
      icon: <Target size={32} />,
      title: "Tecnología Blockchain Accesible",
      description: "Hacer accesible la tecnología blockchain para todos.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
      color: "from-primary/20 to-primary/5"
    },
    {
      id: 2,
      icon: <Users size={32} />,
      title: "Colaboración Público-Privada",
      description: "Reforzar la colaboración público-privada en el ecosistema blockchain.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      color: "from-accent/20 to-accent/5"
    },
    {
      id: 3,
      icon: <Lightbulb size={32} />,
      title: "Modelos de Negocio Innovadores",
      description: "Impulsar innovadores modelos de negocio en la economía digital.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      color: "from-primary/15 to-primary/3"
    },
    {
      id: 4,
      icon: <Network size={32} />,
      title: "Desarrollo de Redes Blockchain",
      description: "Apoyar el desarrollo de redes blockchain impulsadas por nuestros aliados.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      color: "from-accent/15 to-accent/3"
    },
    {
      id: 5,
      icon: <BookOpen size={32} />,
      title: "Conocimiento Práctico",
      description: "Promover el conocimiento de blockchain mediante casos de uso prácticos y reales.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      color: "from-primary/10 to-primary/2"
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="section-container">
        {/* Header */}
        <div
          className={`text-center mb-16 ${isVisible ? "fade-in-up" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Nuestros Objetivos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Construimos el futuro de las inversiones inmobiliarias a través de la tecnología blockchain, 
            democratizando el acceso y creando oportunidades para todos.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Interactive Objectives List */}
          <div
            className={`space-y-4 ${isVisible ? "slide-in-left" : "opacity-0 -translate-x-8"}`}
          >
            {objectives.map((objective, index) => (
              <motion.div
                key={objective.id}
                className={`group cursor-pointer rounded-2xl border transition-all duration-300 ${
                  activeObjective === index
                    ? "border-primary/50 bg-gradient-to-r " + objective.color + " shadow-lg"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-md"
                }`}
                onClick={() => setActiveObjective(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        activeObjective === index
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary group-hover:bg-primary/20"
                      }`}
                    >
                      {objective.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-lg font-semibold mb-2 transition-colors ${
                          activeObjective === index ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {objective.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {objective.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ChevronRight
                      size={20}
                      className={`flex-shrink-0 transition-all duration-300 ${
                        activeObjective === index
                          ? "text-primary rotate-90"
                          : "text-muted-foreground group-hover:text-primary group-hover:translate-x-1"
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Dynamic Image Display */}
          <div
            className={`relative ${isVisible ? "slide-in-right" : "opacity-0 translate-x-8"}`}
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeObjective}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={objectives[activeObjective].image}
                    alt={objectives[activeObjective].title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-white"
                    >
                      <h4 className="text-2xl font-bold mb-3">
                        {objectives[activeObjective].title}
                      </h4>
                      <p className="text-white/90 leading-relaxed">
                        {objectives[activeObjective].description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-primary/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                <span className="text-primary font-bold text-lg">
                  {activeObjective + 1}
                </span>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {objectives.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveObjective(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeObjective === index
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className={`mt-16 text-center ${isVisible ? "fade-in-up" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Únete a Nuestra Misión
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Sé parte del cambio hacia un futuro financiero más inclusivo y transparente a través de la tecnología blockchain.
            </p>
            <button className="btn-primary px-8 py-3">
              Conoce Más Sobre Nosotros
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}