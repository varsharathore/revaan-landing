import { AnnouncementBar } from '@/components/AnnouncementBar'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { BenefitsStrip } from '@/components/BenefitsStrip'
import { FeaturedDrops } from '@/components/FeaturedDrops'
import { ShopTheLook } from '@/components/ShopTheLook'
import { CampaignBanner } from '@/components/CampaignBanner'
import { Reviews } from '@/components/Reviews'
import { QualityStrip } from '@/components/QualityStrip'
import { FounderNote } from '@/components/FounderNote'
import { ReelsStrip } from '@/components/ReelsStrip'
import { CommunityLookbook } from '@/components/CommunityLookbook'
import { CollabCallout } from '@/components/CollabCallout'
import { ShopFooter } from '@/components/ShopFooter'

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        {/* 1. Hook — brand statement */}
        <Hero />
        {/* 2. Trust signals */}
        <BenefitsStrip />
        {/* 3. Browse the drop */}
        <FeaturedDrops />
        {/* 4. Drop anchor campaign */}
        <CampaignBanner />
        {/* 5. See it worn — shoppable lookbook */}
        <ShopTheLook />
        {/* 6. Trust — not fast fashion */}
        <QualityStrip />
        {/* 7. Story — why this brand exists */}
        <FounderNote />
        {/* 8. Social proof */}
        <Reviews />
        {/* 9. Motion content — Revaan in motion */}
        <ReelsStrip />
        {/* 10. UGC — worn by the unapologetic */}
        <CommunityLookbook />
        {/* 11. Coming soon capsule */}
        <CollabCallout />
      </main>
      {/* 12. Newsletter + Footer */}
      <ShopFooter />
    </>
  )
}
