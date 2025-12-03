import { Footer } from '@/components/sections/footer'
import { MainSection } from '@/components/sections/main'
import { MentorsSection } from '@/components/sections/mentors'
import ReactLenis from 'lenis/react'

export default function Home() {
  return (
    <>
      <ReactLenis root />
      <main>
        <MainSection />
        <MentorsSection />
      </main>
      <Footer />
    </>
  )
}
