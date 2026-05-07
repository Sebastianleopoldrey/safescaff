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
    label: 'Byggentreprenörer',
    body: 'Komplett perimeter med transportgrindar, ID06-passage och belysning. Levererat innan första betongbilen rullar in.',
  },
  {
    label: 'Industri & lager',
    body: 'Tillfällig avstängning vid om- och tillbyggnad. Stabilt även när det är trafik runt om.',
  },
  {
    label: 'Event & kultur',
    body: 'Avgränsning runt scen, festival eller marknad. Snabb resning, säker förankring, lika snabb demontering.',
  },
  {
    label: 'Småhusprojekt',
    body: 'Mindre staketslingor runt nybyggnationer eller tillbyggnader. Säkrar både fordonstrafik och nyfikna grannar.',
  },
]

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Platsbesök',
    body: 'Vi mäter sträckning, identifierar passager för fordon och människor, och kontrollerar underlag — asfalt, grus, gjuten platta.',
  },
  {
    number: '02',
    title: 'Specifikation',
    body: 'ID06-passage, transportgrindar, höjder, eventuell duk eller insynsskydd. Exakt det du behöver, inget extra på fakturan.',
  },
  {
    number: '03',
    title: 'Montering',
    body: 'På plats inom utlovad tid. Stadigt monterat med fundament, motvikter eller markförankring beroende på underlag.',
  },
  {
    number: '04',
    title: 'Service',
    body: 'Vi justerar och underhåller under hela hyresperioden. En sektion blåser ner — vi är där och fixar.',
  },
]

const INCLUDED = [
  'Kvalitetsmärkta byggstaket, 2,0 m höjd',
  'ID06-passage med åtkomstkontroll',
  'Transportgrindar för in- och utfart',
  'Större grindar för lastbilar och kranar',
  'Stabil förankring på asfalt, gjutet och grus',
  'Insynsskydd eller skyddsduk vid behov',
  'Snabb uppmontering — normalt på en dag',
  'Service och justering under hyresperioden',
]

const GALLERY = [
  { src: '/images/safescaff_i51.jpg', alt: 'Byggstaket runt arbetsplats' },
  { src: '/images/safescaff_i1-72-of-75-693x300.jpg', alt: 'Säkrad arbetsplats' },
]

const FAQ_ITEMS = [
  {
    q: 'Hur snabbt kan ni resa byggstaket?',
    a: 'En typisk perimeter på 100–200 löpmeter monteras på en arbetsdag. Större projekt över 500 m löper på 2–3 dagar inklusive grindar och ID06-passage.',
  },
  {
    q: 'Vad är ID06 och behöver jag det?',
    a: 'ID06 är branschstandarden för åtkomstkontroll på byggarbetsplatser. Krävs på de flesta större entreprenader och hos seriösa beställare. Vi installerar och kopplar ID06-passage som en del av montaget.',
  },
  {
    q: 'Kan ni montera staket på asfalt utan att skada underlaget?',
    a: 'Ja. Vi använder motvikter eller justerbara fötter som inte kräver borrning. För längre hyresperioder eller hög vindlast kan vi gjuta tillfälliga fundament som plockas bort utan synliga spår.',
  },
  {
    q: 'Vad kostar det att hyra byggstaket?',
    a: 'Cirkapris i Göteborg: 25–45 kr per löpmeter och vecka beroende på sektionstyp och hyrestid. Längre hyresperioder ger lägre veckopriser. Grindar, ID06 och insynsskydd specificeras separat.',
  },
  {
    q: 'Ingår underhåll om något händer under hyresperioden?',
    a: 'Ja. Skadade sektioner byts utan extra kostnad om felet inte beror på vandalisering eller åverkan från entreprenör. Service ingår — det är skillnaden mellan att hyra av oss och att hyra av en bilfirma.',
  },
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
        body="Säkra, kvalitetsmärkta byggstaket — kompletterbara med ID06-passage och transportgrindar. Vi vet att en obehörig som tar sig in kan stoppa hela projektets schema. Därför bygger vi inte bara staket, vi bygger en perimeter som faktiskt fungerar — från första fundamentet till sista demonterad sektion. Det är en del av att leverera ett projekt utan obehagliga överraskningar."
      />
      <WhoFor
        items={SEGMENTS}
        eyebrow="Vi säkrar"
        heading="Vem litar på vår perimeter?"
      />
      <ServiceIncluded
        intro="Komplett perimetersäkring för byggarbetsplatser av alla storlekar."
        items={INCLUDED}
      />
      <ServiceProcess steps={STEPS} />
      <ServiceGallery images={GALLERY} />
      <FAQ items={FAQ_ITEMS} />
      <ServiceCrossSell excludeSlug="byggstaket" />
      <ContactCTA />
    </>
  )
}
