import Link from "next/link"
import { Mail, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-lg">Altoken</span>
            </div>
            <p className="text-sm opacity-80">Democratizando el acceso a inversiones inmobiliarias tokenizadas.</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Producto</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/marketplace" className="hover:opacity-100 transition-opacity">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/como-funciona" className="hover:opacity-100 transition-opacity">
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link href="/ecosistema" className="hover:opacity-100 transition-opacity">
                  Ecosistema
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/socios" className="hover:opacity-100 transition-opacity">
                  Socios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:opacity-100 transition-opacity">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@altoken.io" className="hover:opacity-80 transition-opacity" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>&copy; {currentYear} Altoken. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <Link href="/privacidad" className="hover:opacity-100 transition-opacity">
                Privacidad
              </Link>
              <Link href="/terminos" className="hover:opacity-100 transition-opacity">
                Términos
              </Link>
              <Link href="/cookies" className="hover:opacity-100 transition-opacity">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
