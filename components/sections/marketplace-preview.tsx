"use client"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { PropertyCard } from "@/components/ui/Card/property-card"
import { propertiesData } from "@/lib/properties-data"

export function MarketplacePreviewSection() {

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
      setScrollPosition(scrollLeft)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [])

  useEffect(() => {
    if (isHovering || !scrollContainerRef.current) return

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
        const scrollAmount = 400

        if (scrollLeft < scrollWidth - clientWidth - 10) {
          scrollContainerRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          })
        } else {
          scrollContainerRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          })
        }
        setTimeout(checkScroll, 300)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isHovering])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance text-foreground">
            Oportunidades en el Marketplace
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora una selección curada de propiedades inmobiliarias con potencial de retorno verificado.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {propertiesData.map((property, index) => (
              <div
                key={property.id}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 snap-start"
              >
                <PropertyCard property={property} index={index} />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {canScrollLeft && (
            <motion.button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-30 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Scroll left"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
          )}
          {canScrollRight && (
            <motion.button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-30 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Scroll right"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          )}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <Link href="/marketplace">
            <button className="btn-primary">Ver Todas las Oportunidades</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
