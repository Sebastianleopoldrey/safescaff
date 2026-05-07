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
    label: 'Fastighetsägare',
    body: 'Fasadrenovering, fönsterbyte, takarbete på flerbostadshus. Vi planerar runt boendet — inte tvärtom.',
  },
  {
    label: 'BRF:er',
    body: 'Stämmobeslutet är det svåra. Vi kommer ut, mäter, ritar — och levererar en offert ni kan rösta om.',
  },
  {
    label: 'Byggentreprenörer',
    body: 'Underentreprenör som kommer i tid, monterar enligt tidplan och tar ansvar för dokumentationen.',
  },
  {
    label: 'Privatpersoner',
    body: 'Villarenovering med Speedyscaff aluminium. Snabb resning, ren tomt, fast pris från första samtalet.',
  },
]

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Platsbesök',
    body: 'Vi kommer ut, mäter fasaden och förstår förutsättningarna. Tomt, mark­under­lag, åtkomst, hängande kablar — allt antecknas. Inga gissningar.',
  },
  {
    number: '02',
    title: 'Offert',
    body: 'Tydlig kalkyl med material­specifikation, transport, montagetid och demontering. Inga dolda poster, ingen "tillkommer-listan".',
  },
  {
    number: '03',
    title: 'Montering',
    body: 'STIB-utbildade montörer på plats. Ankarpunkter förankras, koppel kontrolleras, och varje våning besiktas innan nästa reses.',
  },
  {
    number: '04',
    title: 'Demontering',
    body: 'När entreprenaden är klar hämtar vi allt, städar tomten och dokumenterar avlämningen. Ni ser inte att vi varit där.',
  },
]

const INCLUDED = [
  'Layher Allround modulställning för komplexa fasader',
  'Speedyscaff aluminium för enklare projekt',
  'Transport till och från arbetsplats',
  'STIB-utbildade montörer på plats',
  'Skyddsräcken, sparkbräda, fotlist enligt AFS 2013:4',
  'Skyddsnät vid arbete över passage eller trottoar',
  'Hållfasthetsberäkning och dokumentation före överlämning',
  'Konsultation under hela projektet',
]

const GALLERY = [
  { src: '/images/IMG_6516.jpg', alt: 'Layher modul under montering' },
  { src: '/images/IMG_1116-scaled.jpg', alt: 'Storskalig fasadställning' },
  { src: '/images/byggstallning-ss-2100x800.jpg', alt: 'Närbild på Layher koppling' },
]

const FAQ_ITEMS = [
  {
    q: 'Hur lång tid tar det att montera en byggnadsställning?',
    a: 'En typisk villaställning på 80–120 m² tar 4–6 timmar. En BRF-fasad på 1 500 m² tar normalt 3–5 dagar. Vi ger en exakt tidsuppskattning i offerten — och håller den.',
  },
  {
    q: 'Vad kostar det att hyra byggställning i Göteborg?',
    a: 'Priset beror på yta, höjd, hyrestid och åtkomst. För villarenovering ligger normalintervallet på 8 000–25 000 kr inklusive montage och demontering. Vi tar fram en fast offert efter platsbesök — utan dolda kostnader.',
  },
  {
    q: 'Vad är skillnaden mellan Layher Allround och Speedyscaff?',
    a: 'Allround är en stålbaserad modulställning för komplexa fasader, höga laster och långa hyrestider. Speedyscaff är aluminium — lättare att resa, snabbare att demontera, perfekt för villor och kortare projekt. Vi väljer system efter ditt jobb, inte efter vårt lager.',
  },
  {
    q: 'Behöver jag bygglov eller tillstånd för en ställning?',
    a: 'För ställning på egen tomt: nej. För ställning som inkräktar på allmän mark, trottoar eller väg krävs polistillstånd och TA-plan (trafikanordningsplan). Vi sköter ansökningarna åt dig om det behövs.',
  },
  {
    q: 'Vad händer om något händer på arbetsplatsen?',
    a: 'Alla våra ställningar är ansvarsförsäkrade. STIB-medlemskapet kräver dokumenterad besiktning, och vi har aldrig haft en allvarlig olycka på en SafeScaff-ställning sedan starten 2017. Det är ingen tur — det är systematik.',
  },
  {
    q: 'Hur snabbt kan ni komma ut på platsbesök?',
    a: 'Inom 24 timmar i Göteborgsregionen. Akuta jobb tar vi samma dag om det finns kapacitet. Ring Patrik direkt på 0705-83 12 26.',
  },
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
        lead="Modul allround eller Speedyscaff aluminium — vi har systemet som passar din fasad."
        body="Vi reser ställningar från 50 till 5 000 kvadratmeter. På villa, BRF, industri, sjukhus. Allt monteras enligt AFS 2013:4 av STIB-utbildade montörer som inte gör avkall på koppel, sparkbräda eller skyddsräcke. När vi lämnar arbetsplatsen står det en ställning där som klarar både årets stormar och en oannonserad inspektion. Det är vad vi menar när vi säger safety first."
      />
      <WhoFor
        items={SEGMENTS}
        eyebrow="Vi bygger för"
        heading="Vem hyr ställning av oss?"
      />
      <ServiceIncluded
        intro="En byggnadsställning från SafeScaff är aldrig bara material och rör. Det är ett komplett åtagande från första platsbesök till sista demonterad clamp."
        items={INCLUDED}
      />
      <ServiceProcess steps={STEPS} />
      <ServiceGallery images={GALLERY} />
      <FAQ items={FAQ_ITEMS} />
      <ServiceCrossSell excludeSlug="byggnadsstallningar" />
      <ContactCTA />
    </>
  )
}
