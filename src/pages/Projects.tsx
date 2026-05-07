import { motion, useScroll, useTransform } from 'framer-motion'
import { TextReveal } from '@/components/TextReveal'
import { Reveal } from '@/components/Reveal'
import { ImageReveal } from '@/components/ImageReveal'
import { CaseStudy, type CaseStudyData } from '@/components/CaseStudy'
import { ContactCTA } from '@/sections/ContactCTA'
import { featureFlags } from '@/config/featureFlags'

const OSTRA_SJUKHUSET: CaseStudyData = {
  number: '01 · Featured',
  title: 'Östra Sjukhuset.',
  subtitle:
    'Storskaligt Keder XL-väderskydd över ett aktivt sjukhus. Två stormar. Noll avbrott i sjukvården. Klart i tid.',
  location: 'Göteborg',
  year: '2024',
  heroImage: '/images/ostra-sjukhuset.jpg',
  facts: [
    { label: 'Yta', value: '~3 200 m²' },
    { label: 'Tidplan', value: '14 veckor' },
    { label: 'System', value: 'Keder XL' },
    { label: 'Stormar', value: '2 st' },
  ],
  challenge:
    'Fasadrenovering på ett aktivt sjukhus där akutmottagning, ambulansintag och patienttransporter rullar dygnet runt. Arbetet skulle utföras under hösten och vintern, vilket gjorde regn, vind och temperatur till lika stora hot mot tidplanen som själva entreprenaden. Konsekvensen av en kollapsad ställning är inte bara försenad bygglov — det är inställd vård.',
  solution:
    'Vi valde Keder XL — Layhers förstärkta väderskyddssystem med kederprofiler och förankringspunkter dimensionerade för upp till 25 m/s vindlast. Hela ställningen reses i etapper, koordinerade vecka för vecka med sjukhusets driftavdelning så att ambulansvägar, helikopterplatta och brandkåren aldrig blockerades. Varje etapp dokumenterades med hållfasthetsberäkning, lastfall och fotodokumentation före överlämning. Två gånger om dagen — kontroll på ankarpunkter och kederinfästningar.',
  result:
    'Ställningen stod kvar genom två kraftiga stormar utan en enda incident. Inga inställda operationer. Inga försenade arbetsdagar för entreprenören som arbetade under skyddet. Sjukhusets driftchef bad oss komma tillbaka — och rekommenderade oss vidare till två systerprojekt inom Västra Götalandsregionen. Det säger något om vad seriös ställningsbyggnation faktiskt levererar.',
  quote: {
    text: 'Storleken på den här ställningen är inte det imponerande. Det imponerande är att den klarade två stormar utan att vi behövde åka ut och korrigera något. Det är vad åtta års disciplin gör.',
    attribution: 'Patrik Spahiu, VD SafeScaff',
  },
  gallery: [
    { src: '/images/ostra-sjukhuset.jpg', alt: 'Drönarbild av väderskyddet på Östra Sjukhuset' },
    { src: '/images/IMG_1483-scaled.jpg', alt: 'Detalj på Keder XL-väderskydd' },
    { src: '/images/DJI_0404.jpg', alt: 'Översikt över ställningskonstruktionen' },
  ],
}

interface ProjectPlaceholder {
  number: string
  title: string
  scope: string
  body: string
  image: string
  status: 'live' | 'soon'
}

const PLACEHOLDERS: ProjectPlaceholder[] = [
  {
    number: '02',
    title: 'BRF-fasad i Majorna',
    scope: 'Fasadrenovering · 1 800 m² · 8 veckor',
    body: 'Modulställning runt en fyra-vånings BRF i centrala Göteborg, med skyddsnät och tunnelbygge för boendepassage. Boende kunde gå in och ut hela byggtiden — utan att fasadarbetet stannade en enda dag.',
    image: '/images/byggstallning-safescaff-2100x800.jpg',
    status: featureFlags.showProjectCases ? 'live' : 'soon',
  },
  {
    number: '03',
    title: 'Industribyggnad i Sävenäs',
    scope: 'Fasad + tak · 2 400 m² · Modul allround',
    body: 'Storskaligt montage på industribyggnad där produktionen aldrig kunde stoppas. Vi byggde i etapper, nattetid där det krävdes, och höll all logistik utanför produktionsflödet.',
    image: '/images/IMG_1116-scaled.jpg',
    status: featureFlags.showProjectCases ? 'live' : 'soon',
  },
  {
    number: '04',
    title: 'Villarenovering i Kungsbacka',
    scope: 'Fasad + tak · Speedyscaff · 3 veckor',
    body: 'Aluminiumställning på en villatomt med begränsad åtkomst. Snabb resning, noll skador på trädgården, demontering på en dag när målaren var klar.',
    image: '/images/IMG_1457.jpg',
    status: featureFlags.showProjectCases ? 'live' : 'soon',
  },
]

export function Projects() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 140])

  return (
    <>
      <section className="relative h-[78svh] min-h-[520px] overflow-hidden bg-brand-black text-brand-white">
        <motion.div className="absolute inset-0" style={{ y }}>
          <img
            src="/images/byggstallning-safescaff-2100x800.jpg"
            alt=""
            className="h-[120%] w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/85" />
        </motion.div>
        <div className="container-edge relative z-10 flex h-full flex-col justify-end pb-24">
          <Reveal>
            <span className="label-mono mb-6 text-brand-green-light">Projekt</span>
          </Reveal>
          <TextReveal text="Det vi byggt." as="h1" className="heading-hero text-brand-white" />
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-xl text-[18px] text-white/80">
              Sjukhusprojekt, BRF-fasader, villor i Kungsbacka, industribyggnader i Sävenäs. Storskaliga väderskydd
              och snabba aluminium-rensningar. Det enda som binder ihop dem är att de står rätt — och att de
              levererades i tid.
            </p>
          </Reveal>
        </div>
      </section>

      <CaseStudy data={OSTRA_SJUKHUSET} />

      <section className="bg-brand-offwhite py-24 md:py-32">
        <div className="container-edge">
          <div className="mb-16 max-w-2xl">
            <Reveal>
              <span className="label-mono text-brand-green">Övriga projekt</span>
            </Reveal>
            <TextReveal
              text="Tre till — bilder publiceras snart."
              as="h2"
              className="heading-section mt-6 text-brand-black"
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-[17px] text-brand-graphite">
                Vi väntar in fotograf och godkännanden från beställarna. Här är scope och resultat —
                bildgalleriet kommer.
              </p>
            </Reveal>
          </div>

          <div className="space-y-24 md:space-y-32">
            {PLACEHOLDERS.map((p, i) => (
              <article key={p.number} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <ImageReveal
                  src={p.image}
                  alt={p.title}
                  className={i % 2 === 0 ? 'aspect-[4/5] lg:order-1' : 'aspect-[4/5] lg:order-2'}
                />
                <div className={i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                  <Reveal>
                    <div className="flex items-baseline gap-6">
                      <span className="label-mono text-brand-gray">{p.number}</span>
                      <span className="label-mono text-brand-gray">{p.scope}</span>
                    </div>
                  </Reveal>
                  <TextReveal text={p.title} as="h3" className="heading-section mt-6 text-brand-black" />
                  <Reveal delay={0.2} y={30}>
                    <p className="mt-8 max-w-md text-[17px] leading-relaxed text-brand-graphite">{p.body}</p>
                  </Reveal>
                  {p.status === 'soon' && (
                    <Reveal delay={0.3}>
                      <span className="label-mono mt-6 inline-block bg-brand-black px-3 py-1 text-brand-white">
                        Bilder kommer
                      </span>
                    </Reveal>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
