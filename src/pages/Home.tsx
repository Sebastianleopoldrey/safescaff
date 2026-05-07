import { HeroHome } from '@/sections/HeroHome'
import { TrustBand } from '@/sections/TrustBand'
import { WhatWeDo } from '@/sections/WhatWeDo'
import { ImageGridHome } from '@/sections/ImageGridHome'
import { WhenYouNeedUs } from '@/sections/WhenYouNeedUs'
import { IntroBlock } from '@/sections/IntroBlock'
import { HowItWorks } from '@/sections/HowItWorks'
import { ProjectCarousel } from '@/sections/ProjectCarousel'
import { PricingTransparency } from '@/sections/PricingTransparency'
import { Testimonials } from '@/sections/Testimonials'
import { FAQ } from '@/components/FAQ'
import { ContactCTA } from '@/sections/ContactCTA'
import { featureFlags } from '@/config/featureFlags'

const HOME_FAQ = [
  {
    q: 'Hur snabbt kan ni komma igång?',
    a: 'Platsbesök inom 24 timmar i Göteborgsregionen. Offert inom 1–3 arbetsdagar efter besöket. Själva monteringen schemaläggs i samråd — för en typisk villa kan vi ofta vara på plats inom 1–2 veckor.',
  },
  {
    q: 'Vad kostar det att hyra ställning?',
    a: 'Det beror på storlek, höjd, system och hyrestid. En enklare villaställning landar normalt på 8 000–25 000 kr, en BRF-fasad mellan 60 000 och 250 000 kr. Vi ger en fast offert efter platsbesök — inga dolda kostnader, inga "tillkommer"-poster.',
  },
  {
    q: 'Måste jag söka tillstånd?',
    a: 'På egen tomt: nej. På allmän mark, trottoar eller väg: ja, då krävs polistillstånd och en TA-plan (trafikanordningsplan). Vi sköter ansökningarna åt dig — det ingår normalt i offerten.',
  },
  {
    q: 'Hur länge får ställningen stå?',
    a: 'Så länge ditt projekt kräver. Vi har ställningar som stått i en vecka och ställningar som stått i två år. Längre hyrestider ger lägre veckopris. Säkerhetsbesiktningen upprepas efter behov.',
  },
  {
    q: 'Vad händer om vädret är dåligt under projektet?',
    a: 'Ställningen är dimensionerad för svenskt klimat. Skulle något ändå behöva justeras kommer vi ut. Behöver du jobba helt vädersäkert väljer du Keder XL-väderskydd över ställningen — då är vädret inte längre projektets problem.',
  },
  {
    q: 'Är ni försäkrade?',
    a: 'Ja. Som STIB-medlem har vi obligatorisk ansvarsförsäkring för både egen verksamhet och tredjeparts­skada. Vi har aldrig haft en allvarlig olycka på en SafeScaff-ställning sedan starten 2017.',
  },
  {
    q: 'Vad händer om något skadas under hyresperioden?',
    a: 'Skadade sektioner byts utan extra kostnad om felet inte beror på åverkan från entreprenör eller vandalisering. Service och justeringar ingår — det är skillnaden mellan att hyra av oss och att hyra från en bilfirma.',
  },
  {
    q: 'Anlitar ni privatpersoner?',
    a: 'Absolut. Villor, radhus, sommarstugor — vi gör små projekt lika seriöst som stora. Speedyscaff aluminium passar utmärkt för ensamhus och kortare hyresperioder.',
  },
]

export function Home() {
  return (
    <>
      <HeroHome />
      <TrustBand />
      <WhatWeDo />
      <ImageGridHome />
      <WhenYouNeedUs />
      <IntroBlock />
      <HowItWorks />
      <ProjectCarousel />
      <PricingTransparency />
      {featureFlags.showTestimonials && <Testimonials />}
      <FAQ
        items={HOME_FAQ}
        eyebrow="Vanliga frågor"
        heading="Det du undrar — innan du frågar."
      />
      <ContactCTA />
    </>
  )
}
