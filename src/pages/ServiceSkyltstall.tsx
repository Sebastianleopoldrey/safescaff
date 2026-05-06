import { ServiceHero } from '@/sections/ServiceHero'
import { ServiceIntro } from '@/sections/ServiceIntro'
import { ServiceIncluded } from '@/sections/ServiceIncluded'
import { ServiceProcess, type Step } from '@/sections/ServiceProcess'
import { ServiceGallery } from '@/sections/ServiceGallery'
import { ServiceCrossSell } from '@/sections/ServiceCrossSell'
import { ContactCTA } from '@/sections/ContactCTA'

const STEPS: Step[] = [
  { number: '01', title: 'Brief', body: 'Vad ska synas, var, hur länge — och vilken effekt vill du nå?' },
  { number: '02', title: 'Design', body: 'Vi tar fram skyltgrafik som faktiskt syns — inte bara hänger där.' },
  { number: '03', title: 'Montering', body: 'Skyltställ på plats där dina kunder rör sig, inte där det är enklast.' },
]

const INCLUDED = [
  'Skyltställ i alla storlekar — hyr eller köp',
  'Vi tar fram reklam­materialet',
  'Snabb leverans och uppmontering',
  'Kvalitetsmärkta material som tål väder',
  'En kontakt, en faktura',
  'Demontering och bortforsling',
]

const GALLERY = [
  { src: '/images/IMG_6971-800x800.jpeg', alt: 'Skyltställ med reklam' },
  { src: '/images/safescaff_i51.jpg', alt: 'Byggarbetsplats med skylt' },
]

export function ServiceSkyltstall() {
  return (
    <>
      <ServiceHero
        number="03"
        title="Skyltställ"
        tagline="Synlighet som inte missas."
        image="/images/IMG_6971-800x800.jpeg"
        imageAlt="Skyltställ med reklamskylt"
      />
      <ServiceIntro
        lead="Syns du inte så finns du inte."
        body="Skyltställ i alla storlekar och former — hyr eller köp. Vi tar även fram reklamen. Ett samtal, en leverantör, en faktura. Så enkelt ska det vara när ditt budskap ska upp. Och eftersom vi monterar tusentals löpmeter ställning varje år vet vi exakt var skylten faktiskt syns — och var den bara hänger."
      />
      <ServiceIncluded
        intro="Allt du behöver för att gå från idé till synlig skylt — från en enda leverantör."
        items={INCLUDED}
      />
      <ServiceProcess steps={STEPS} />
      <ServiceGallery images={GALLERY} />
      <ServiceCrossSell excludeSlug="skyltstall" />
      <ContactCTA />
    </>
  )
}
