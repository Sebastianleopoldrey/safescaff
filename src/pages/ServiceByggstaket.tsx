import { ServiceHero } from '@/sections/ServiceHero'
import { ServiceIntro } from '@/sections/ServiceIntro'
import { ServiceIncluded } from '@/sections/ServiceIncluded'
import { ServiceProcess, type Step } from '@/sections/ServiceProcess'
import { ServiceGallery } from '@/sections/ServiceGallery'
import { ServiceCrossSell } from '@/sections/ServiceCrossSell'
import { ContactCTA } from '@/sections/ContactCTA'

const STEPS: Step[] = [
  { number: '01', title: 'Platsbesök', body: 'Vi mäter och planerar staketsträckning, grindar och passager.' },
  { number: '02', title: 'Specifikation', body: 'ID06-passage, transportgrindar, höjder — exakt det du behöver.' },
  { number: '03', title: 'Montering', body: 'På plats inom utlovad tid. Stadigt monterat, säkert förankrat.' },
  { number: '04', title: 'Service', body: 'Vi underhåller och justerar under hela hyresperioden.' },
]

const INCLUDED = [
  'Kvalitetsmärkta byggstaket',
  'ID06-passage på begäran',
  'Transportgrindar för in- och utfart',
  'Större grindar för fordonstrafik',
  'Stabil förankring även på asfalt',
  'Snabb uppmontering och justering',
]

const GALLERY = [
  { src: '/images/safescaff_i51.jpg', alt: 'Byggstaket runt arbetsplats' },
  { src: '/images/safescaff_i1-72-of-75-693x300.jpg', alt: 'Säkrad arbetsplats' },
]

export function ServiceByggstaket() {
  return (
    <>
      <ServiceHero
        number="04"
        title="Byggstaket"
        tagline="Trygg arbetsplats från dag ett."
        image="/images/safescaff_i51.jpg"
        imageAlt="Byggstaket på arbetsplats"
      />
      <ServiceIntro
        lead="När arbetsplatsen är säkrad kan teamet fokusera på det de är där för att göra."
        body="Säkra, kvalitetsmärkta byggstaket — kompletterbara med ID06-passage och transportgrindar. Vi vet att en obehindrad obehörig kan kosta hela projektets schema. Därför bygger vi inte bara staket, vi bygger en perimeter som faktiskt fungerar — från första gjutfundamentet till sista demonterad sektion."
      />
      <ServiceIncluded
        intro="Komplett perimetersäkring för byggarbetsplatser av alla storlekar."
        items={INCLUDED}
      />
      <ServiceProcess steps={STEPS} />
      <ServiceGallery images={GALLERY} />
      <ServiceCrossSell excludeSlug="byggstaket" />
      <ContactCTA />
    </>
  )
}
