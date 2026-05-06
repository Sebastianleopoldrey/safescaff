import { ServiceHero } from '@/sections/ServiceHero'
import { ServiceIntro } from '@/sections/ServiceIntro'
import { ServiceIncluded } from '@/sections/ServiceIncluded'
import { ServiceProcess, type Step } from '@/sections/ServiceProcess'
import { ServiceGallery } from '@/sections/ServiceGallery'
import { ServiceCrossSell } from '@/sections/ServiceCrossSell'
import { ContactCTA } from '@/sections/ContactCTA'

const STEPS: Step[] = [
  { number: '01', title: 'Platsbesök', body: 'Vi kommer ut, mäter och förstår förutsättningarna. Inga gissningar.' },
  { number: '02', title: 'Offert', body: 'Tydlig kalkyl med material, transport och tidplan — utan dolda poster.' },
  { number: '03', title: 'Montering', body: 'STIB-utbildade montörer på plats. Kontroll innan överlämning.' },
  { number: '04', title: 'Demontering', body: 'När jobbet är klart hämtar vi allt och städar efter oss.' },
]

const INCLUDED = [
  'Layher allround modul för komplexa fasader',
  'Speedyscaff aluminium för enklare arbeten',
  'Transport till och från arbetsplats',
  'STIB-utbildade montörer',
  'Skyddsräcken och spark­brädor enligt AFS',
  'Kontroll och dokumentation före överlämning',
  'Konsultation under projektets gång',
  'Demontering och bortforsling',
]

const GALLERY = [
  { src: '/images/IMG_6516.jpg', alt: 'Layher modul under montering' },
  { src: '/images/IMG_1116-scaled.jpg', alt: 'Storskalig fasadställning' },
  { src: '/images/byggstallning-ss-2100x800.jpg', alt: 'Närbild på koppling' },
]

export function ServiceByggnadsstallningar() {
  return (
    <>
      <ServiceHero
        number="01"
        title="Byggnadsställningar"
        tagline="Layher i alla dess former."
        image="/images/IMG_6978.jpeg"
        imageAlt="Byggnadsställning under montering"
      />
      <ServiceIntro
        lead="Från villarenovering till flervåningsfasad — vi har ställningen som passar."
        body="Modul allround för komplexa projekt, Speedyscaff aluminium för enklare jobb. Allt monteras enligt STIB:s strängaste säkerhetskrav, av montörer som lever och andas yrkesstolthet. När vi lämnar arbetsplatsen står det en ställning där som klarar både årets stormar och en oannonserad inspektion. Det är vad vi menar när vi säger safety first."
      />
      <ServiceIncluded
        intro="En byggnadsställning från SafeScaff är aldrig bara material och rör. Det är ett komplett åtagande från första platsbesök till sista demonterad clamp."
        items={INCLUDED}
      />
      <ServiceProcess steps={STEPS} />
      <ServiceGallery images={GALLERY} />
      <ServiceCrossSell excludeSlug="byggnadsstallningar" />
      <ContactCTA />
    </>
  )
}
