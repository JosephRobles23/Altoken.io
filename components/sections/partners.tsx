interface Partner {
  name: string
  category: string
  description: string
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

  return (
    <section className="section-padding bg-primary/5">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">Nuestros Socios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Colaboramos con líderes de la industria para garantizar excelencia.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all"
            >
              {/* Logo Placeholder */}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-primary/20 rounded"></div>
              </div>

              {/* Content */}
              <h3 className="font-semibold text-lg mb-1">{partner.name}</h3>
              <p className="text-sm text-accent font-medium mb-3">{partner.category}</p>
              <p className="text-sm text-muted-foreground">{partner.description}</p>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary to-accent/50 text-primary-foreground rounded-xl text-center">
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
