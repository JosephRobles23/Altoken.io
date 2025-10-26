"use client"

import { Counter } from "@/components/ui/counter"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function StatsSection() {
    const { ref, isVisible } = useScrollAnimation()

    const stats = [
        {
            value: 32200,
            prefix: "+",
            label: "Residentes",
        },
        {
            value: 100,
            prefix: "+",
            label: "Países",
        },
        {
            value: 100,
            prefix: "+",
            label: "Proyectos tokenizados",
        },
        {
            value: 80,
            prefix: "+",
            suffix: "M",
            label: "Tokenizados",
        },
        {
            value: 13,
            suffix: "%",
            label: "Rentabilidad media anual de proyectos cerrados",
        },
    ]

    return (
        <section ref={ref} className="section-padding bg-background">
            <div className="section-container">
                {/* Header */}
                <div
                    className={`text-center mb-12 ${isVisible ? "fade-in-up" : "opacity-0 translate-y-8"}`}
                    style={{ transitionDelay: "0ms" }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Altoken en Números</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Una comunidad global de inversores que confía en nuestra plataforma para democratizar el acceso a inversiones inmobiliarias
                    </p>
                </div>

                {/* Single Card with All Stats */}
                <div
                    className={`bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg ${isVisible ? "fade-in-up" : "opacity-0 translate-y-8"
                        }`}
                    style={{ transitionDelay: "100ms" }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`text-center ${index < stats.length - 1 ? "lg:border-r border-border/50" : ""
                                    }`}
                            >
                                {/* Value */}
                                <div className="mb-2">
                                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
                                        {stat.prefix && stat.prefix}
                                        <Counter end={stat.value} duration={2500} />
                                        {stat.suffix && stat.suffix}
                                    </p>
                                </div>

                                {/* Label */}
                                <p className="text-sm text-muted-foreground leading-tight">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
