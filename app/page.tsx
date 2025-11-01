import { StatsSection } from "@/components/sections/stats"
import { HeroSection } from "@/components/sections/hero"
import { MarketplacePreviewSection } from "@/components/sections/marketplace-preview"
import { WhyInvestSection } from "@/components/sections/why-invest"
import { ObjectivesSection } from "@/components/sections/objectives"
import { GlobalPresenceSection } from "@/components/sections/global-presence"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { FeaturesSection } from "@/components/sections/features"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { PartnersSection } from "@/components/sections/partners"
import { FinalCTASection } from "@/components/sections/final-cta"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <MarketplacePreviewSection />
      <WhyInvestSection />
      <ObjectivesSection />
      <GlobalPresenceSection />
      <HowItWorksSection />
      {/* <FeaturesSection /> */}
      <TestimonialsSection />
      <PartnersSection />
      <FinalCTASection />
    </main>
  )
}
