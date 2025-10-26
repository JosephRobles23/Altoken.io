"use client"
import { useState, use } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Info } from "lucide-react"
import { motion } from "framer-motion"
import { getPropertyById, propertiesData } from "@/lib/properties-data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Use React.use() to unwrap the promise in a client component
  const { id } = use(params)

  const property = getPropertyById(id)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState("description")

  if (!property) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground mb-4">Propiedad no encontrada</h1>
          <Link href="/marketplace">
            <button className="btn-primary">Volver al Marketplace</button>
          </Link>
        </div>
      </div>
    )
  }

  const images = [property.image, property.image, property.image, property.image]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="bg-background border-b border-border">
          <div className="section-container py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/marketplace" className="hover:text-primary transition-colors">
                Marketplace
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">{property.name}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="section-container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Image Gallery */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative rounded-2xl overflow-hidden bg-muted mb-6">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={property.name}
                  className="w-full h-96 object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Image Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm text-white">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-border mb-6">
                <div className="flex gap-8">
                  {["description", "localization", "token-details", "docs"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-4 font-medium transition-colors ${activeTab === tab
                          ? "text-primary border-b-2 border-primary"
                          : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      {tab === "description" && "Description"}
                      {tab === "localization" && "Localization"}
                      {tab === "token-details" && "Token details"}
                      {tab === "docs" && "Docs"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                {activeTab === "description" && (
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {property.description?.split("\n\n").map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    )) || <p>Descripción no disponible.</p>}
                  </div>
                )}
                {activeTab === "localization" && (
                  <div className="space-y-4 text-muted-foreground">
                    <p>Ubicación: {property.location}</p>
                    <p>Información de localización detallada disponible próximamente.</p>
                  </div>
                )}
                {activeTab === "token-details" && (
                  <div className="space-y-4 text-muted-foreground">
                    <p>Detalles de tokens disponibles próximamente.</p>
                  </div>
                )}
                {activeTab === "docs" && (
                  <div className="space-y-4 text-muted-foreground">
                    <p>Documentación disponible próximamente.</p>
                  </div>
                )}
              </motion.div>
            </motion.div>

            {/* Right Column - Property Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Header */}
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-4">{property.name}</h1>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1.5 bg-card border border-border rounded-full text-sm font-medium text-foreground">
                    {property.status}
                  </span>
                  {property.status === "En Financiamiento" && (
                    <span className="px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                      IN REFORM
                    </span>
                  )}
                </div>
              </div>

              {/* Price */}
              <div>
                <p className="text-4xl font-bold text-primary mb-2">{property.price}</p>
              </div>

              {/* Key Metrics */}
              <div className="space-y-4 bg-card border border-border rounded-xl p-6">
                <div className="flex justify-between items-center pb-4 border-b border-border/50">
                  <span className="text-muted-foreground">Token Price</span>
                  <span className="font-bold text-foreground">{property.tokenPrice || "N/A"}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border/50">
                  <span className="text-muted-foreground">Annual rental return</span>
                  <span className="font-bold text-foreground">{property.annualReturn}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border/50">
                  <span className="text-muted-foreground">Capital gain after sale</span>
                  <span className="font-bold text-foreground">{property.capitalGain || "N/A"}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border/50">
                  <span className="text-muted-foreground">Total APY</span>
                  <span className="font-bold text-primary">{property.totalAPY || "N/A"}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border/50">
                  <span className="text-muted-foreground">Home Rent</span>
                  <span className="font-bold text-foreground">{property.rentalStart}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Yields</span>
                    <Info size={16} className="text-muted-foreground" />
                  </div>
                  <span className="font-bold text-foreground">{property.yields || "N/A"}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Invertir Ahora
                </button>
                <button className="w-full px-6 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-card/80 transition-colors">
                  Más Información
                </button>
              </div>

              {/* Back Link */}
              <Link href="/marketplace">
                <button className="w-full px-6 py-2 text-primary hover:text-primary/80 transition-colors font-medium">
                  ← Volver al Marketplace
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
