"use client"

import { Linkedin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface TeamMember {
  name: string
  role: string
  image: string
  linkedin: string
}

export default function SociosPage() {
  const { ref, isVisible } = useScrollAnimation()

  const teamMembers: TeamMember[] = [
    {
      name: "Carlos Rodríguez",
      role: "Chief Technology Officer",
      image: "https://i.pravatar.cc/400?img=12",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Ana Martínez",
      role: "Chief Operating Officer",
      image: "https://i.pravatar.cc/400?img=5",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Miguel Sánchez",
      role: "Co-Founder, Executive Chairman",
      image: "https://i.pravatar.cc/400?img=13",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Laura Chen",
      role: "Co-Founder, Advisor, Board Member",
      image: "https://i.pravatar.cc/400?img=9",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Roberto Díaz",
      role: "Chief Financial Officer",
      image: "https://i.pravatar.cc/400?img=14",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Sofia Morales",
      role: "Head of Blockchain Development",
      image: "https://i.pravatar.cc/400?img=10",
      linkedin: "https://linkedin.com",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Conoce a Nuestro Equipo
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Un equipo de expertos apasionados por democratizar el acceso a inversiones inmobiliarias a través de la
              tecnología blockchain
            </p>
          </div>

          {/* Team Grid */}
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group ${isVisible ? "fade-in-up" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="bg-card border border-border rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">{member.role}</p>

                    {/* LinkedIn Link */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      <Linkedin size={20} />
                      <span>LinkedIn</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">¿Listo para comenzar tu inversión?</h2>
            <p className="text-lg mb-8 opacity-90">
              Únete a miles de inversores que confían en Altoken para tokenizar sus inversiones inmobiliarias
            </p>
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Comenzar Ahora
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
