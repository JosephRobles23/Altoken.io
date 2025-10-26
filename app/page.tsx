import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { MarketplacePreviewSection } from "@/components/sections/marketplace-preview"
import { WhyInvestSection } from "@/components/sections/why-invest"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { FeaturesSection } from "@/components/sections/features"
import { EcosystemSection } from "@/components/sections/ecosystem"
import { PartnersSection } from "@/components/sections/partners"
import { FinalCTASection } from "@/components/sections/final-cta"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <MarketplacePreviewSection />
        <WhyInvestSection />
        <HowItWorksSection />
        <FeaturesSection />
        <EcosystemSection />
        <PartnersSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
