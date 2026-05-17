import { Nav } from '@/components/Nav'
import { ScrollSequence } from '@/components/ScrollSequence'
import { LetterformsSection } from '@/components/LetterformsSection'
import { AboutSection } from '@/components/AboutSection'
import { StatementSection } from '@/components/StatementSection'
import { ProductShowcase } from '@/components/ProductShowcase'
import { MaterialsAccordion } from '@/components/MaterialsAccordion'
import { Drop01Section } from '@/components/Drop01Section'
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
      <Drop01Section />
      <Reviews />
      <DropSignup />
      <Footer />
    </main>
  )
}
