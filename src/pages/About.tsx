import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Award, MapPin } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TextReveal } from '@/components/TextReveal'
import { Reveal } from '@/components/Reveal'
import { ImageReveal } from '@/components/ImageReveal'
import { ContactCTA } from '@/sections/ContactCTA'
import { site } from '@/config/site'
import { featureFlags } from '@/config/featureFlags'

const VALUES = [
  {
    icon: Shield,
    label: 'Säkerhet',
    body: 'Inget kompromissas på säkerhet. Aldrig. Det är därför vi är STIB-medlem och varför vi tackar nej till jobb som inte kan göras tryggt.',
  },
  {
    icon: Award,
    label: 'Kvalitet',
    body: 'Layher-material, STIB-utbildade montörer och kontroll på varje överlämning. När vi lämnar arbetsplatsen står ställningen rätt.',
  },
  {
    icon: MapPin,
    label: 'Lokalt',
    body: 'Vi är från Göteborg och stannar här. Det betyder kortare ledtider, snabbare svar och ett team som kan staden lika bra som du.',
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
            Om oss
          </motion.span>
          <TextReveal text="Vi är SafeScaff." as="h1" className="heading-hero text-brand-white" />
        </div>
      </section>

      <section className="bg-brand-white py-24 md:py-32">
        <div className="container-edge grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <span className="label-mono text-brand-green">Vår historia</span>
          </Reveal>
          <div>
            <TextReveal
              text="Från enmansföretag till STIB-medlem."
              as="h2"
              className="heading-section text-brand-black"
            />
            <Reveal delay={0.2} y={30}>
              <div className="mt-8 space-y-6 text-[17px] leading-relaxed text-brand-graphite">
                <p>
                  SafeScaff grundades 2017 med en idé som låter självklar men som få ställningsföretag faktiskt
                  lever efter: säkerhet före allt annat. Patrik startade ensam, byggde ställning på ställning och
                  vägrade tumma på de detaljer som kostar i längden — kontroller, koppel, varje skarv.
                </p>
                <p>
                  Idag, åtta år senare, förvaltar vi över 20 000 kvadratmeter material från ett lager i Mölndal.
                  Vi är STIB-medlem och vi har levererat allt från villarenoveringar till Östra Sjukhuset.
                  Men principen står fast: litet företag med stora muskler — och ett orubbligt fokus på safety first.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-brand-offwhite py-24 md:py-32">
        <div className="container-edge">
          <div className="mb-16 max-w-2xl">
            <Reveal>
              <span className="label-mono text-brand-green">Teamet</span>
            </Reveal>
            <TextReveal text="Människor du kan ringa." as="h2" className="heading-section mt-6 text-brand-black" />
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            {site.team.map((m, i) => (
              <Reveal key={m.email} delay={i * 0.1} y={40}>
                <article>
                  <ImageReveal src={m.image} alt={m.name} className="aspect-[4/5] w-full" />
                  <div className="mt-6 flex items-baseline justify-between">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-brand-black">{m.name}</h3>
                    <span className="label-mono text-brand-gray">{m.role}</span>
                  </div>
                  <div className="mt-4 flex flex-col gap-1 text-[15px] text-brand-graphite">
                    <a href={`tel:${m.phoneTel}`} className="hover:text-brand-green">{m.phone}</a>
                    <a href={`mailto:${m.email}`} className="hover:text-brand-green">{m.email}</a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-24 md:py-32">
        <div className="container-edge">
          <div className="mb-16 max-w-2xl">
            <Reveal>
              <span className="label-mono text-brand-green">Värderingar</span>
            </Reveal>
            <TextReveal text="Tre pelare. Inga kompromisser." as="h2" className="heading-section mt-6 text-brand-black" />
          </div>
          <ul className="grid gap-px border border-brand-gray-light bg-brand-gray-light md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.label} delay={i * 0.1} y={30}>
                <li className="flex h-full flex-col bg-brand-white p-8 md:p-10">
                  <v.icon size={28} className="text-brand-green" />
                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-brand-black">{v.label}</h3>
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
              text="Medlem i STIB."
              as="h2"
              className="heading-section mt-6 text-brand-black"
            />
            <Reveal delay={0.2} y={30}>
              <p className="mt-8 max-w-xl text-[17px] text-brand-graphite">
                STIB är branschorganisationen för Sveriges seriösa ställningsföretag. Medlemskapet kräver att vi
                följer Arbetsmiljöverkets föreskrifter, har utbildade montörer och dokumenterad kvalitetskontroll
                — och att vi blir granskade när vi inte räknar med det. För dig som beställare betyder det en sak:
                trygghet att ställningen är byggd rätt.
              </p>
            </Reveal>
            <Reveal delay={0.3} y={20}>
              <Link
                to="/kontakt"
                className="group mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-brand-black hover:text-brand-green"
              >
                Hör av dig till oss
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {featureFlags.gaisSponsorBadge && (
        <section className="bg-brand-white py-20 md:py-28">
          <div className="container-edge flex flex-col items-center gap-8 text-center">
            <ImageReveal
              src="/images/gais-safescaff.jpg"
              alt="SafeScaff sponsrar GAIS"
              className="aspect-[3/4] w-full max-w-xs"
            />
            <Reveal>
              <p className="label-mono text-brand-graphite">
                Stolt sponsor av <span className="text-brand-green">GAIS</span>
              </p>
            </Reveal>
          </div>
        </section>
      )}

      <ContactCTA />
    </>
  )
}
