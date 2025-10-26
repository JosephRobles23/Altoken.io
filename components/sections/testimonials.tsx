"use client"

import { Star, Quote } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { InfiniteCarousel } from "@/components/ui/carousel/infinite-carousel"

interface Testimonial {
    name: string
    role: string
    avatar: string
    rating: number
    text: string
}

export function TestimonialsSection() {
    const { ref, isVisible } = useScrollAnimation()

    const testimonials: Testimonial[] = [
        {
            name: "María González",
            role: "Inversora Independiente",
            avatar: "https://i.pravatar.cc/150?img=1",
            rating: 5,
            text: "Invertir en propiedades tokenizadas con Altoken me permitió diversificar mi portafolio con solo $2,000. En 6 meses ya he visto retornos del 8% y la plataforma es increíblemente transparente.",
        },
        {
            name: "Carlos Mendoza",
            role: "Desarrollador de Software",
            avatar: "https://i.pravatar.cc/150?img=12",
            rating: 5,
            text: "Como profesional tech, aprecio la tecnología blockchain detrás de Altoken. La tokenización hace que invertir en bienes raíces sea tan fácil como comprar acciones. Excelente experiencia.",
        },
        {
            name: "Ana Martínez",
            role: "Emprendedora",
            avatar: "https://i.pravatar.cc/150?img=5",
            rating: 4,
            text: "Encontrar propiedades de alta calidad con Altoken fue muy sencillo. El equipo me ayudó a entender cada detalle del proceso de tokenización y ahora tengo ingresos pasivos mensuales.",
        },
    ]

    const stats = [
        { value: "98%", label: "Precisión de Coincidencia" },
        { value: "10k+", label: "Inversores Satisfechos" },
        { value: "$2B+", label: "Propiedades Tokenizadas" },
    ]

    return (
        <section ref={ref} className="section-padding bg-gradient-to-b from-background to-muted/30">
            <div className="section-container">
                {/* Header */}
                <div
                    className={`text-center mb-16 ${isVisible ? "fade-in-up" : "opacity-0 translate-y-8"}`}
                    style={{ transitionDelay: "0ms" }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Historias de Éxito de Inversores
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Escucha a las personas que encontraron sus oportunidades perfectas de inversión con nuestra plataforma de
                        tokenización
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className="mb-16">
                    <InfiniteCarousel speed={70} itemWidth={380}>
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[380px] bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                            >
                                {/* Quote Icon */}
                                <div className="mb-4">
                                    <Quote className="text-primary/30" size={32} />
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className={i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground/30"}
                                        />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                                {/* Author */}
                                <div className="flex items-center gap-3 pt-4 border-t border-border">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </InfiniteCarousel>
                </div>

                {/* CTA Section */}
                <div
                    className={`bg-gradient-to-r from-card via-card/95 to-card border border-primary/30 rounded-2xl p-8 md:p-12 ${isVisible ? "fade-in-up" : "opacity-0 translate-y-8"
                        }`}
                    style={{ transitionDelay: "400ms" }}
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        {/* Left Content */}
                        <div className="flex-1">
                            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                                Únete a miles de inversores satisfechos
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                Nuestra plataforma ha ayudado a más de 10,000 personas a encontrar sus propiedades ideales para
                                invertir, con un índice de satisfacción del 98%
                            </p>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-8">
                                {stats.map((stat, index) => (
                                    <div key={index}>
                                        <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right CTA Button */}
                        <div className="flex-shrink-0">
                            <button className="btn-primary px-8 py-4 text-lg whitespace-nowrap">Comienza Hoy</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
