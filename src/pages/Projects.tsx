import { motion, useScroll, useTransform } from 'framer-motion'
import { TextReveal } from '@/components/TextReveal'
import { Reveal } from '@/components/Reveal'
import { ImageReveal } from '@/components/ImageReveal'
import { ContactCTA } from '@/sections/ContactCTA'
import { featureFlags } from '@/config/featureFlags'

interface ProjectCase {
  number: string
  title: string
  location: string
  year: string
  body: string
  image: string
  status: 'live' | 'soon'
}

const CASES: ProjectCase[] = [
  {
    number: '01',
    title: 'Östra Sjukhuset',
    location: 'Göteborg',
    year: '2024',
    body: 'Storskaligt väderskydd i Keder XL som höll genom två kraftiga stormar. Inga avbrott. Inga försenade arbetsdagar. Bara ett färdigt jobb.',
    image: '/images/ostra-sjukhuset.jpg',
    status: featureFlags.ostraSjukhusetCase ? 'live' : 'soon',
  },
]

const PLACEHOLDERS: ProjectCase[] = [
  { number: '02', title: 'Kommer snart', location: 'Göteborg', year: '—', body: 'Nästa case publiceras inom kort.', image: '/images/byggstallning-safescaff-2100x800.jpg', status: 'soon' },
  { number: '03', title: 'Kommer snart', location: 'Göteborg', year: '—', body: 'Nästa case publiceras inom kort.', image: '/images/IMG_1116-scaled.jpg', status: 'soon' },
  { number: '04', title: 'Kommer snart', location: 'Göteborg', year: '—', body: 'Nästa case publiceras inom kort.', image: '/images/IMG_1457.jpg', status: 'soon' },
]

const ALL = featureFlags.showProjectCases ? [...CASES, ...PLACEHOLDERS] : CASES

export function Projects() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 140])

  return (
    <>
      <section className="relative h-[88svh] min-h-[560px] overflow-hidden bg-brand-black text-brand-white">
        <motion.div className="absolute inset-0" style={{ y }}>
          <img src="/images/byggstallning-safescaff-2100x800.jpg" alt="" className="h-[120%] w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </motion.div>
        <div className="container-edge relative z-10 flex h-full flex-col justify-end pb-24">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="label-mono mb-6 text-brand-green-light"
          >
            Projekt
          </motion.span>
          <TextReveal text="Det vi byggt." as="h1" className="heading-hero text-brand-white" />
        </div>
      </section>

      <section className="bg-brand-offwhite py-24 md:py-32">
        <div className="container-edge space-y-32">
          {ALL.map((c, i) => (
            <article key={c.number} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <ImageReveal src={c.image} alt={c.title} className={i % 2 === 0 ? 'aspect-[4/5] lg:order-1' : 'aspect-[4/5] lg:order-2'} />
              <div className={i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                <Reveal>
                  <div className="flex items-baseline gap-6">
                    <span className="label-mono text-brand-gray">{c.number}</span>
                    <span className="label-mono text-brand-gray">{c.location} · {c.year}</span>
                  </div>
                </Reveal>
                <TextReveal text={c.title} as="h2" className="heading-section mt-6 text-brand-black" />
                <Reveal delay={0.2} y={30}>
                  <p className="mt-8 max-w-md text-[17px] text-brand-graphite">{c.body}</p>
                </Reveal>
                {c.status === 'soon' && (
                  <Reveal delay={0.3}>
                    <span className="label-mono mt-6 inline-block bg-brand-black px-3 py-1 text-brand-white">Kommer snart</span>
                  </Reveal>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
