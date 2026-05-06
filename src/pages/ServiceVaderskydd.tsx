import { ServiceHero } from '@/sections/ServiceHero'
import { ServiceIntro } from '@/sections/ServiceIntro'
import { ServiceIncluded } from '@/sections/ServiceIncluded'
import { ServiceProcess, type Step } from '@/sections/ServiceProcess'
import { ServiceGallery } from '@/sections/ServiceGallery'
import { ServiceCrossSell } from '@/sections/ServiceCrossSell'
import { ContactCTA } from '@/sections/ContactCTA'

const STEPS: Step[] = [
  { number: '01', title: 'Behovsanalys', body: 'Vi kartlägger projekt, väderkrav och tidplan tillsammans.' },
  { number: '02', title: 'Dimensionering', body: 'Keder XL anpassas efter spännvidder och vindlast.' },
  { number: '03', title: 'Montering', body: 'Tätt och beprövat — på plats inom utlovad tid.' },
  { number: '04', title: 'Avveckling', body: 'Rivning när projektet är klart, utan att stjäla av din tid.' },
]

const INCLUDED = [
  'Keder XL-system för stora spännvidder',
  'Tak- och fasadtäckning anpassat efter projekt',
  'Stormsäker dimensionering',
  'Belysning och ventilationsalternativ',
  'Snabb upp- och nedmontering',
  'Service under hela hyresperioden',
]

const GALLERY = [
  { src: '/images/IMG_1483-scaled.jpg', alt: 'Stort väderskydd över byggprojekt' },
  { src: '/images/IMG_1457.jpg', alt: 'Detalj på Keder XL-system' },
  { src: '/images/DJI_0404.jpg', alt: 'Drönarbild över väderskyddat tak' },
]

export function ServiceVaderskydd() {
  return (
    <>
      <ServiceHero
        number="02"
        title="Väderskydd"
        tagline="Arbeta året runt."
        image="/images/IMG_1483-scaled.jpg"
        imageAlt="Väderskydd över byggprojekt"
      />
      <ServiceIntro
        lead="När väderskyddet sitter på plats slutar vädret vara ditt problem."
        body="Vårt Keder XL-system höll genom två kraftiga stormar på Östra Sjukhuset. Det säger något om kvaliteten. Med rätt väderskydd håller projektet tidsplanen även när Göteborgsregnet vägrar sluta — och dina hantverkare slipper börja om från noll varje måndag. Det är så vi sänker total kostnad utan att kompromissa på säkerheten."
      />
      <ServiceIncluded
        intro="Ett tätt, beprövat system som garanterar arbetstid året runt — oavsett vad himlen hittar på."
        items={INCLUDED}
      />
      <ServiceProcess steps={STEPS} />
      <ServiceGallery images={GALLERY} />
      <ServiceCrossSell excludeSlug="vaderskydd" />
      <ContactCTA />
    </>
  )
}
