import { ServiceHero } from '@/sections/ServiceHero'
import { ServiceIntro } from '@/sections/ServiceIntro'
import { ServiceIncluded } from '@/sections/ServiceIncluded'
import { ServiceProcess, type Step } from '@/sections/ServiceProcess'
import { ServiceGallery } from '@/sections/ServiceGallery'
import { ServiceCrossSell } from '@/sections/ServiceCrossSell'
import { WhoFor } from '@/components/WhoFor'
import { FAQ } from '@/components/FAQ'
import { ContactCTA } from '@/sections/ContactCTA'

const SEGMENTS = [
  {
    label: 'Byggherrar',
    body: 'Projektskyltning på arbetsplats — bygglovsskylt, kontaktinfo, sponsorer. ID06-kompatibelt.',
  },
  {
    label: 'Eventbolag',
    body: 'Tillfällig skyltning runt arenor, festivaler, marknader. Snabb resning, säker förankring.',
  },
  {
    label: 'Butiker',
    body: 'Trottoar­synlighet och kampanjskyltar i centrala lägen. Vi sköter polistillstånd där det behövs.',
  },
  {
    label: 'Företag i lokal',
    body: 'Långtidsskyltning utanför fasad eller vid infart. Stadig konstruktion som tål väder och slitage.',
  },
]

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Brief',
    body: 'Vad ska synas, var, hur länge — och vilken effekt vill du nå? Vi pratar igenom plats, format och tidplan.',
  },
  {
    number: '02',
    title: 'Design',
    body: 'Vi tar fram skyltgrafik som faktiskt fungerar i sin miljö. Färg, kontrast, läs­avstånd — allt vägs in.',
  },
  {
    number: '03',
    title: 'Tillstånd',
    body: 'Behövs polistillstånd eller markupplåtelse? Vi sköter ansökan så att skylten står lagligt från dag ett.',
  },
  {
    number: '04',
    title: 'Montering',
    body: 'Skyltställ på plats där dina kunder rör sig, inte där det är enklast. Förankrat, säkrat och dokumenterat.',
  },
]

const INCLUDED = [
  'Skyltställ i alla storlekar — hyr eller köp',
  'Vi tar fram reklammaterialet (tryck, banner, skiva)',
  'Polistillstånd och markupplåtelse vid behov',
  'Snabb leverans och uppmontering',
  'Kvalitetsmärkta ramar som tål Göteborgsväder',
  'Underhåll och bytesservice för långtidshyra',
  'En kontakt, en faktura',
  'Demontering och bortforsling',
]

const GALLERY = [
  { src: '/images/IMG_6971-800x800.jpeg', alt: 'Skyltställ med reklam' },
  { src: '/images/safescaff_i51.jpg', alt: 'Byggarbetsplats med skylt' },
]

const FAQ_ITEMS = [
  {
    q: 'Behöver jag tillstånd för att sätta upp skyltställ på trottoar?',
    a: 'Ja, om skylten står på allmän mark krävs polistillstånd och markupplåtelse från kommunen. Vi sköter ansökan om du vill — det ingår normalt i offerten.',
  },
  {
    q: 'Hur snabbt kan ni leverera ett skyltställ?',
    a: 'Standard­ramar levereras inom 2–5 arbetsdagar. Specialformat och stora konstruktioner tar 1–2 veckor inklusive grafik. Akuta jobb i Göteborg löser vi samma vecka.',
  },
  {
    q: 'Klarar skylten storm och regn?',
    a: 'Våra ramar är dimensionerade för svenskt klimat med ankarpunkter eller motvikter beroende på underlag. Trycket monteras på UV-stabil duk eller alupanel som inte bleknar eller deformeras.',
  },
  {
    q: 'Kan ni hjälpa till med själva grafiken?',
    a: 'Ja. Vi har designers som kan ta fram skyltgrafik från grunden eller anpassa befintligt material. Vi vet vad som funkar visuellt på 30 meters avstånd kontra på 3.',
  },
  {
    q: 'Hyra eller köpa skyltställ — vad lönar sig?',
    a: 'Tumregel: under 6 månaders behov — hyr. Över 12 månader — köp. För kampanj­skyltning är hyra nästan alltid bästa valet eftersom du slipper lagring och underhåll.',
  },
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
        body="Skyltställ i alla storlekar och former — hyr eller köp. Vi tar även fram reklamen, sköter polistillstånd där det krävs, och monterar där dina kunder faktiskt rör sig. Ett samtal, en leverantör, en faktura. Och eftersom vi monterar tusentals löpmeter ställning varje år vet vi exakt var en skylt syns — och var den bara hänger."
      />
      <WhoFor
        items={SEGMENTS}
        eyebrow="Vi syns för"
        heading="Vem syns med oss?"
      />
      <ServiceIncluded
        intro="Allt du behöver för att gå från idé till synlig skylt — från en enda leverantör."
        items={INCLUDED}
      />
      <ServiceProcess steps={STEPS} />
      <ServiceGallery images={GALLERY} />
      <FAQ items={FAQ_ITEMS} />
      <ServiceCrossSell excludeSlug="skyltstall" />
      <ContactCTA />
    </>
  )
}
