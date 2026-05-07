import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Award, MapPin } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TextReveal } from '@/components/TextReveal'
import { Reveal } from '@/components/Reveal'
import { ImageReveal } from '@/components/ImageReveal'
import { TeamGrid } from '@/components/TeamGrid'
import { ContactCTA } from '@/sections/ContactCTA'
import { site } from '@/config/site'
import { featureFlags } from '@/config/featureFlags'

const VALUES = [
  {
    icon: Shield,
    label: 'Säkerhet före allt',
    body: 'Vi tackar nej till jobb som inte kan göras tryggt. STIB-medlem sedan dag ett. Varje montör har dokumenterad utbildning och varje skarv kontrolleras.',
  },
  {
    icon: Award,
    label: 'Materialet håller',
    body: 'Layher Allround och Speedyscaff. Ingen blandning av begagnat och okänt. När vi reser ställning ska den klara både stormarna och inspektörens checklista.',
  },
  {
    icon: MapPin,
    label: 'Vi är från Göteborg',
    body: 'Lager i Mölndal, montörer som bor i staden. Det betyder kortare ledtider, snabbare svar — och samma personer från första samtal till sista demontering.',
  },
]

export function About() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 160])

  return (
    <>
      <section className="relative h-[88svh] min-h-[560px] overflow-hidden bg-brand-black text-brand-white">
        <motion.div className="absolute inset-0" style={{ y }}>
          <img src="/images/DJI_0404.jpg" alt="" className="h-[120%] w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        </motion.div>
        <div className="container-edge relative z-10 flex h-full flex-col justify-end pb-24">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="label-mono mb-6 text-brand-green-light"
          >
            Om SafeScaff
          </motion.span>
          <TextReveal text="Litet företag. Stora muskler." as="h1" className="heading-hero text-brand-white" />
        </div>
      </section>

      <section className="bg-brand-white py-24 md:py-32">
        <div className="container-edge grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <span className="label-mono text-brand-green">Vår historia</span>
          </Reveal>
          <div>
            <TextReveal
              text="Från enmansföretag till STIB-medlem på åtta år."
              as="h2"
              className="heading-section text-brand-black"
            />
            <Reveal delay={0.2} y={30}>
              <div className="mt-8 space-y-6 text-[17px] leading-relaxed text-brand-graphite">
                <p>
                  Patrik Spahiu startade SafeScaff 2017 med en bil, ett släp och en princip — säkerhet före allt
                  annat. Första jobben var villor i Lerum och Härryda. Inga prestige­projekt. Bara hantverk som
                  hängde ihop.
                </p>
                <p>
                  Åtta år senare förvaltar vi över 20 000 kvadratmeter Layher-material från ett lager i Mölndal.
                  Vi är medlemmar i STIB, vi har levererat allt från BRF-fasader till väderskyddet på Östra
                  Sjukhuset, och vi har fortfarande aldrig haft en allvarlig olycka på en av våra ställningar.
                </p>
                <p className="text-brand-black">
                  Det är ingen tillfällighet. Det är en metod.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <TeamGrid
        members={site.team}
        eyebrow="Vårt team"
        heading="Två som svarar i telefon."
        intro="Hos oss pratar du direkt med den som planerar ditt jobb — och med den som är ute på arbetsplatsen. Inga växlar, inga lead-formulär, inga säljare. Bara två personer som tar ansvar."
      />

      <section className="bg-brand-white py-24 md:py-32">
        <div className="container-edge">
          <div className="mb-16 max-w-2xl">
            <Reveal>
              <span className="label-mono text-brand-green">Värderingar</span>
            </Reveal>
            <TextReveal text="Tre pelare. Inga undantag." as="h2" className="heading-section mt-6 text-brand-black" />
          </div>
          <ul className="grid gap-px border border-brand-gray-light bg-brand-gray-light md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.label} delay={i * 0.1} y={30}>
                <li className="flex h-full flex-col bg-brand-white p-8 md:p-10">
                  <v.icon size={28} className="text-brand-green" />
                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-brand-black">
                    {v.label}
                  </h3>
                  <p className="mt-4 text-[15px] text-brand-graphite">{v.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand-offwhite py-24 md:py-32">
        <div className="container-edge grid items-center gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <ImageReveal
            src="/images/STIB_logo_medl_stallningsforetagen.png"
            alt="STIB-medlem"
            className="aspect-square max-w-[320px] bg-brand-white p-12"
            imgClassName="object-contain"
          />
          <div>
            <Reveal>
              <span className="label-mono text-brand-green">Certifiering</span>
            </Reveal>
            <TextReveal
              text="Medlem i STIB sedan 2017."
              as="h2"
              className="heading-section mt-6 text-brand-black"
            />
            <Reveal delay={0.2} y={30}>
              <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-brand-graphite">
                STIB är branschorganisationen för Sveriges seriösa ställningsentreprenörer. Medlemskapet kräver
                STIB-utbildade montörer, dokumenterad kvalitetskontroll, och att vi följer Arbetsmiljöverkets
                föreskrifter (AFS 2013:4) — och att vi blir granskade när vi inte räknar med det. För dig som
                beställer betyder det en sak: ställningen är byggd rätt, varje gång.
              </p>
            </Reveal>
            <Reveal delay={0.3} y={20}>
              <Link
                to="/kontakt"
                className="group mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-brand-black hover:text-brand-green"
              >
                Begär offert
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {featureFlags.gaisSponsorBadge && (
        <section className="bg-brand-white py-12">
          <div className="container-edge flex flex-wrap items-center justify-center gap-5 text-center">
            <img
              src="/images/gais-safescaff.jpg"
              alt="SafeScaff sponsrar GAIS"
              className="h-14 w-14 rounded-full object-cover"
              loading="lazy"
            />
            <p className="label-mono text-brand-graphite">
              Stolt sponsor av <span className="text-brand-green">GAIS</span>
            </p>
          </div>
        </section>
      )}

      <ContactCTA />
    </>
  )
}
