"use client"
import { useState } from "react"
import { PropertyCard } from "@/components/ui/Card/property-card"
import { propertiesData } from "@/lib/properties-data"
import { motion } from "framer-motion"

export default function MarketplacePage() {
  const [filter, setFilter] = useState<"all" | "Financiado" | "En Financiamiento" | "Disponible">("all")

  const filteredProperties = filter === "all" 
    ? propertiesData 
    : propertiesData.filter(property => property.status === filter)

  const statusCounts = {
    all: propertiesData.length,
    Financiado: propertiesData.filter(p => p.status === "Financiado").length,
    "En Financiamiento": propertiesData.filter(p => p.status === "En Financiamiento").length,
    Disponible: propertiesData.filter(p => p.status === "Disponible").length,
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="section-container section-padding">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Marketplace de Propiedades
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre oportunidades de inversión inmobiliaria verificadas con potencial de retorno atractivo.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {(["all", "Financiado", "En Financiamiento", "Disponible"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === status
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card border border-border text-foreground hover:border-primary/50 hover:bg-card/80"
              }`}
            >
              {status === "all" ? "Todas" : status} ({statusCounts[status]})
            </button>
          ))}
        </motion.div>

        {/* Properties Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filteredProperties.map((property, index) => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              index={index}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground text-lg">
              No se encontraron propiedades con el filtro seleccionado.
            </p>
          </motion.div>
        )}
      </main>
    </div>
  )
}
