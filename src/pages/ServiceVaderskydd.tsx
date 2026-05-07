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
    label: 'Sjukhus & vård',
    body: 'Aktiva verksamheter där driften aldrig får stoppas. Östra Sjukhuset 2024 är vår referens.',
  },
  {
    label: 'Fasadrenovering',
    body: 'BRF- och fastighetsprojekt under hösten och vintern. Vi håller arbetet igång när andra packar ihop.',
  },
  {
    label: 'Takrenovering',
    body: 'Fullt täckt tak under entreprenaden. Inget regn på underlaget, inga vattenskador på det som ska stå färdigt.',
  },
  {
    label: 'Industri',
    body: 'Produktion som inte kan stå still. Väderskydd som täcker, men som inte stör logistik eller materialflöden.',
  },
]

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Behovsanalys',
    body: 'Vi kartlägger spännvidd, lastfall och vindlast för platsen. Riskbedömning enligt AFS 2014:26 om väderskydd ingår.',
  },
  {
    number: '02',
    title: 'Dimensionering',
    body: 'Keder XL anpassas efter spännvidder upp till 30 meter. Hållfasthetsberäkning, snölast, och dränering ritas in från start.',
  },
  {
    number: '03',
    title: 'Montering',
    body: 'Tätt monterad kederduk, kontrollerad kederinfästning, säkrade ankarpunkter. Inkluderar belysning och nödvändig ventilation.',
  },
  {
    number: '04',
    title: 'Avveckling',
    body: 'När entreprenaden är klar tar vi ner systemet etappvis. Materialet återvänder till lagret. Du betalar bara för hyrestiden.',
  },
]

const INCLUDED = [
  'Layher Keder XL för spännvidder upp till 30 m',
  'Kederduk dimensionerad för Göteborgsklimatet',
  'Stormsäker dimensionering enligt EN 12810/12811',
  'Belysning och ventilation där det krävs',
  'Snölast­beräkning och dränerings­lösningar',
  'Snabb etappvis upp- och nedmontering',
  'Hållfasthetsberäkning och dokumentation',
  'Service under hela hyresperioden',
]

const GALLERY = [
  { src: '/images/IMG_1483-scaled.jpg', alt: 'Stort väderskydd över byggprojekt' },
  { src: '/images/ostra-sjukhuset.jpg', alt: 'Keder XL-väderskyddet på Östra Sjukhuset' },
  { src: '/images/DJI_0404.jpg', alt: 'Drönarbild över väderskyddat tak' },
]

const FAQ_ITEMS = [
  {
    q: 'Vad är skillnaden mellan presenning och Keder XL-väderskydd?',
    a: 'En presenning skyddar mot regn — i bästa fall. Keder XL är ett komplett system med kederprofiler, beräknade ankarpunkter och förstärkt duk som klarar 25 m/s vindlast. Det är skillnaden mellan att hoppas på vädret och att jobba i det.',
  },
  {
    q: 'Hur stora spännvidder kan ni klara av?',
    a: 'Keder XL klarar fritt spann upp till 30 meter utan mellanstöd. För större projekt kombinerar vi flera takfält. Vi har levererat hela tak på 3 000+ m² på sjukhus och industribyggnader.',
  },
  {
    q: 'Klarar väderskyddet en storm?',
    a: 'Ja. Vårt Keder XL-system stod kvar på Östra Sjukhuset genom två kraftiga stormar 2024 utan en enda incident. Vi dimensionerar varje konstruktion individuellt efter platsens vindlast — det är inte en standardlösning som rullas ut blint.',
  },
  {
    q: 'Kan ni montera väderskydd på vintern?',
    a: 'Det är ofta då vi monterar — för att möjliggöra att hantverkarna ska kunna arbeta vinter­månaderna. Vi har monterat skydd i januari på minus 8 grader. Materialet och våra montörer klarar förhållandena.',
  },
  {
    q: 'Vad kostar ett väderskydd?',
    a: 'Beror på spännvidd, yta, hyrestid och konstruktionens komplexitet. För ett genomsnittligt fasadprojekt ligger det mellan 40 000 och 200 000 kr. Vi tar fram en fast offert efter platsbesök.',
  },
  {
    q: 'Hur länge tar det att resa ett storskaligt väderskydd?',
    a: '500 m² monteras normalt på 4–6 arbetsdagar. För större projekt över 2 000 m² räknar vi 3–6 veckor inklusive ställningsbas. Tidplanen ingår alltid i offerten.',
  },
]

export function ServiceVaderskydd() {
  return (
    <>
      <ServiceHero
        number="02"
        title="Väderskydd"
        tagline="Arbeta året runt."
        image="/images/IMG_1483-scaled.jpg"
        imageAlt="Storskaligt Keder XL-väderskydd"
      />
      <ServiceIntro
        lead="När väderskyddet sitter på plats slutar vädret vara ditt problem."
        body="Vårt Keder XL-system höll genom två kraftiga stormar på Östra Sjukhuset. Det säger något om kvaliteten. Med rätt väderskydd håller projektet tidsplanen även när Göteborgsregnet vägrar sluta — och dina hantverkare slipper börja om från noll varje måndag. Det är så vi sänker total entreprenadkostnad utan att kompromissa på säkerheten. Det är också så vi vunnit förtroende från Västra Götalandsregionen, ett par av Göteborgs största fastighetsägare och flera lokala BRF:er sedan starten."
      />
      <WhoFor
        items={SEGMENTS}
        eyebrow="Vi täcker"
        heading="Vem behöver väderskydd från oss?"
      />
      <ServiceIncluded
        intro="Ett tätt, beprövat system som garanterar arbetstid året runt — oavsett vad himlen hittar på."
        items={INCLUDED}
      />
      <ServiceProcess steps={STEPS} />
      <ServiceGallery images={GALLERY} />
      <FAQ items={FAQ_ITEMS} />
      <ServiceCrossSell excludeSlug="vaderskydd" />
      <ContactCTA />
    </>
  )
}
