"use client"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export interface PropertyCardData {
  id: string
  name: string
  location: string
  price: string
  currency: string
  image: string
  status: "Financiado" | "En Financiamiento" | "Disponible"
  investmentPeriod: string
  totalReturn: string
  annualReturn: string
  rentalStart: string
  returnType: string
  minInvestment?: string
  tokenPrice?: string
  capitalGain?: string
  totalAPY?: string
  yields?: string
  description?: string
}

interface PropertyCardProps {
  property: PropertyCardData
  index?: number
  className?: string
}

export function PropertyCard({ property, index = 0, className = "" }: PropertyCardProps) {
  return (
    <motion.div
      className={`group/card h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-300 flex flex-col ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <motion.img
          src={property.image || "/placeholder.svg"}
          alt={property.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        {/* Status Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <CheckCircle2 size={16} className="text-primary" />
          <span className="text-sm font-medium text-primary">{property.status}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Title and Price */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground mb-1">{property.name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{property.location}</p>
          <div className="text-2xl font-bold text-primary">{property.price}</div>
        </div>

        {/* Stats Grid */}
        <div className="space-y-3 py-4 border-t border-border/50 flex-1">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Período de inversión</p>
              <p className="font-semibold text-foreground">{property.investmentPeriod}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Rentabilidad total</p>
              <p className="font-semibold text-primary">{property.totalReturn}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Rentabilidad anual</p>
              <p className="font-semibold text-foreground">{property.annualReturn}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Inicio Renta</p>
              <p className="font-semibold text-foreground">{property.rentalStart}</p>
            </div>
          </div>
          <div className="pt-2">
            <p className="text-xs text-muted-foreground mb-1">Tipo de rendimiento</p>
            <p className="text-sm font-medium text-accent">{property.returnType}</p>
          </div>
        </div>

        {/* CTA Button */}
        <Link href={`/marketplace/properties/${property.id}`}>
          <button 
            className="w-full mt-4 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
            onClick={() => console.log("Navigating to:", `/marketplace/properties/${property.id}`, "Property ID:", property.id)}
          >
            Ver más
          </button>
        </Link>
      </div>
    </motion.div>
  )
}