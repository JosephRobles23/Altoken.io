import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { I18nProvider } from "@/components/providers/i18n-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Altoken - Inversión Inmobiliaria Tokenizada",
  description:
    "Plataforma de inversión inmobiliaria tokenizada. Acceso democrático a oportunidades de inversión en bienes raíces con retornos reales.",
  keywords: ["inversión inmobiliaria", "tokenización", "blockchain", "bienes raíces", "fintech", "inversión"],
  authors: [{ name: "Altoken" }],
  creator: "Altoken",
  publisher: "Altoken",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://altoken.io",
    siteName: "Altoken",
    title: "Altoken - Inversión Inmobiliaria Tokenizada",
    description:
      "Plataforma de inversión inmobiliaria tokenizada. Acceso democrático a oportunidades de inversión en bienes raíces.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Altoken - Inversión Inmobiliaria Tokenizada",
    description: "Plataforma de inversión inmobiliaria tokenizada",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a5f7a" />
      </head>
      <body className={`font-sans antialiased`}>
        <I18nProvider>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </I18nProvider>
      </body>
    </html>
  )
}
