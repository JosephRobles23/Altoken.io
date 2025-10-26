import type React from "react"
import { Wallet, Code, Users, Zap } from "lucide-react"

interface EcosystemComponent {
  icon: React.ReactNode
  title: string
  description: string
}

export function EcosystemSection() {
  const components: EcosystemComponent[] = [
    {
      icon: <Wallet size={32} />,
      title: "Billetera Digital",
      description: "Gestiona tus tokens y fondos de forma segura en nuestra billetera integrada.",
    },
    {
      icon: <Code size={32} />,
      title: "API Abierta",
      description: "Integra Altoken en tus aplicaciones con nuestra API robusta y documentada.",
    },
    {
      icon: <Users size={32} />,
      title: "Comunidad",
      description: "Conecta con otros inversores, comparte insights y crece juntos.",
    },
    {
      icon: <Zap size={32} />,
      title: "Smart Contracts",
      description: "Contratos inteligentes verificados garantizan transparencia total.",
    },
  ]

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">Nuestro Ecosistema</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una plataforma completa construida con tecnología blockchain de última generación.
          </p>
        </div>

        {/* Ecosystem Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {components.map((component, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                {component.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{component.title}</h3>
              <p className="text-muted-foreground">{component.description}</p>
            </div>
          ))}
        </div>

        {/* Ecosystem Diagram */}
        <div className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-semibold mb-2">Propiedades</h4>
              <p className="text-sm text-muted-foreground">Selección curada de activos inmobiliarios</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h4 className="font-semibold mb-2">Tokenización</h4>
              <p className="text-sm text-muted-foreground">Conversión a tokens blockchain</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="font-semibold mb-2">Inversión</h4>
              <p className="text-sm text-muted-foreground">Acceso democrático a inversores</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
