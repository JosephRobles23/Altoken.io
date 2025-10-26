"use client"

import { InfiniteCarousel } from "@/components/ui/carousel/infinite-carousel"

interface Partner {
  name: string
  category: string
  description: string
  logo?: string
}

export function PartnersSection() {
  const partners: Partner[] = [
    {
      name: "BlockChain Ventures",
      category: "Tecnología",
      description: "Infraestructura blockchain de clase mundial",
    },
    {
      name: "Global Real Estate",
      category: "Inmobiliario",
      description: "Selección y gestión de propiedades",
    },
    {
      name: "Hedera Hashgraph",
      category: "Blockchain",
      description: "Red blockchain de alto rendimiento y sostenible",
      logo: "partners/Hedera-Logo.jpg",
    },
    {
      name: "Legal Partners",
      category: "Legal",
      description: "Asesoría legal y cumplimiento normativo",
    },
    {
      name: "Financial Trust",
      category: "Finanzas",
      description: "Auditoría y gestión de fondos",
    },
    {
      name: "Tech Innovators",
      category: "Desarrollo",
      description: "Desarrollo de plataforma y APIs",
    },
    {
      name: "Market Leaders",
      category: "Consultoría",
      description: "Análisis de mercado y estrategia",
    },
  ]

  // Duplicar los partners para crear el efecto de loop infinito
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="section-padding bg-primary/5 overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">Nuestros Socios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Colaboramos con líderes de la industria para garantizar excelencia.
          </p>
        </div>

        {/* Infinite Carousel */}
        <div className="mb-16">
          <InfiniteCarousel speed={70} itemWidth={320}>
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 w-[320px] h-[280px] border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all overflow-hidden"
              >
                {/* Background Image */}
                {partner.logo ? (
                  <>
                    <div className="absolute inset-0">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 pb-2"
                      />
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/70 to-background/85"></div>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-card"></div>
                )}

                {/* Content */}
                <div className="relative p-6 h-full flex flex-col">
                  {/* Logo Icon (small version at top) */}
                  {/* {partner.logo ? (
                    <div className="h-10 mb-4 flex items-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-full w-auto object-contain opacity-80"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <div className="w-8 h-8 bg-primary/20 rounded"></div>
                    </div>
                  )} */}

                  {/* Text Content */}
                  <div className="mt-auto">
                    <h3 className="font-semibold text-lg mb-1 text-foreground">{partner.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{partner.category}</p>
                    {/* <p className="text-sm text-muted-foreground leading-relaxed">{partner.description}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </InfiniteCarousel>
        </div>

        {/* Partnership CTA */}
        <div className="p-8 bg-gradient-to-r from-primary to-accent/50 text-primary-foreground rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">¿Interesado en Asociarse?</h3>
          <p className="mb-6 max-w-2xl mx-auto">Buscamos partners estratégicos para expandir nuestro ecosistema.</p>
          <button className="px-8 py-3 bg-primary-foreground text-primary rounded-full font-semibold hover:opacity-90 transition-opacity">
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  )
}
