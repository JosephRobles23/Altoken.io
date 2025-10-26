interface Step {
  number: number
  title: string
  description: string
}

export function HowItWorksSection() {
  const steps: Step[] = [
    {
      number: 1,
      title: "Crea tu Cuenta",
      description: "Regístrate en minutos con verificación de identidad segura.",
    },
    {
      number: 2,
      title: "Explora Propiedades",
      description: "Navega por oportunidades verificadas con análisis detallado.",
    },
    {
      number: 3,
      title: "Invierte",
      description: "Compra tokens de propiedades con tu método de pago preferido.",
    },
    {
      number: 4,
      title: "Recibe Retornos",
      description: "Gana ingresos pasivos automáticamente cada mes.",
    },
  ]

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">Cómo Funciona</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuatro pasos simples para comenzar tu viaje de inversión inmobiliaria.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[calc(100%-60px)] h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              )}

              {/* Card */}
              <div className="relative z-10 p-6 bg-card border border-border rounded-xl">
                {/* Step Number */}
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">¿Listo para comenzar?</p>
          <button className="btn-primary">Abrir Cuenta Gratis</button>
        </div>
      </div>
    </section>
  )
}
