import { FeaturesSection } from '@/components/sections/features'
import { Footer } from '@/components/sections/footer'
import { LMSSection } from '@/components/sections/lms'
import { MainSection } from '@/components/sections/main'
import { MentorsSection } from '@/components/sections/mentors'
import { PlansSection } from '@/components/sections/plans'

export default function Home() {
  return (
    <>
      <main>
        <MainSection />
        <LMSSection />
        <PlansSection />
        <FeaturesSection />
        <MentorsSection />
      </main>
      <Footer />
    </>
  )
}
