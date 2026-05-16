import { Nav } from '@/components/Nav'
import { ScrollSequence } from '@/components/ScrollSequence'
import { LetterformsSection } from '@/components/LetterformsSection'
import { AboutSection } from '@/components/AboutSection'
import { StatementSection } from '@/components/StatementSection'
import { ProductShowcase } from '@/components/ProductShowcase'
import { MaterialsAccordion } from '@/components/MaterialsAccordion'
import { Reviews } from '@/components/Reviews'
import { DropSignup } from '@/components/DropSignup'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <ScrollSequence />
      <LetterformsSection />
      <AboutSection />
      <StatementSection />
      <ProductShowcase />
      <MaterialsAccordion />
      <Reviews />
      <DropSignup />
      <Footer />
    </main>
  )
}
