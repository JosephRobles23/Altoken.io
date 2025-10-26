import type React from "react"
import { Lock, BarChart3, Smartphone, Globe } from "lucide-react"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: <Lock size={32} />,
      title: "Blockchain Seguro",
      description: "Tecnología blockchain garantiza la seguridad y transparencia de cada transacción.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Analytics Avanzado",
      description: "Dashboard completo con análisis en tiempo real de tu portafolio.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "App Móvil",
      description: "Gestiona tus inversiones desde cualquier lugar con nuestra app.",
    },
    {
      icon: <Globe size={32} />,
      title: "Alcance Global",
      description: "Acceso a propiedades en múltiples países y mercados.",
    },
  ]

  return (
    <section className="section-padding bg-primary/5">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">Características Principales</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Herramientas modernas para inversores inteligentes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-6 p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
