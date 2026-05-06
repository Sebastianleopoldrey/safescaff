import { HeroHome } from '@/sections/HeroHome'
import { ImageGridHome } from '@/sections/ImageGridHome'
import { IntroBlock } from '@/sections/IntroBlock'
import { ServicesNumbered } from '@/sections/ServicesNumbered'
import { ProjectCarousel } from '@/sections/ProjectCarousel'
import { Testimonials } from '@/sections/Testimonials'
import { ContactCTA } from '@/sections/ContactCTA'
import { featureFlags } from '@/config/featureFlags'

export function Home() {
  return (
    <>
      <HeroHome />
      <ImageGridHome />
      <IntroBlock />
      <ServicesNumbered />
      <ProjectCarousel />
      {featureFlags.showTestimonials && <Testimonials />}
      <ContactCTA />
    </>
  )
}
