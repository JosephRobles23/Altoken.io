import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function SociosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="section-container section-padding">
        <h1 className="text-4xl font-bold mb-4">Socios</h1>
        <p className="text-muted-foreground">Página de socios - Contenido próximamente</p>
      </main>
      <Footer />
    </div>
  )
}
