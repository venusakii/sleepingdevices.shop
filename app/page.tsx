import { HeroSection } from '@/components/hero-section'
import { CategoriesSection } from '@/components/categories-section'
import { BenefitsSection } from '@/components/benefits-section'
import { TopDevicesSection } from '@/components/top-devices-section'
import { ReviewsSection } from '@/components/reviews-section'
import { ScienceSection } from '@/components/science-section'
import { ComparisonSection } from '@/components/comparison-section'
import { NewsletterSection } from '@/components/newsletter-section'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <BenefitsSection />
        <TopDevicesSection />
        <ReviewsSection />
        <ScienceSection />
        <ComparisonSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
