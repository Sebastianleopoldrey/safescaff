import { PhoneCall, MapPin, FileText, HardHat, Construction, Truck } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { TextReveal } from '@/components/TextReveal'

interface Step {
  icon: typeof PhoneCall
  number: string
  title: string
  body: string
  duration: string
}

const STEPS: Step[] = [
  {
    icon: PhoneCall,
    number: '01',
    title: 'Du hör av dig',
    body: 'Ring Patrik direkt eller fyll i kontaktformuläret. Berätta vad du ska göra — fasad, tak, fönster — så hör vi om det är något för oss.',
    duration: '5 min',
  },
  {
    icon: MapPin,
    number: '02',
    title: 'Vi kommer ut och kollar',
    body: 'Inom 24 timmar är någon av oss på plats och mäter. Tomt, mark, åtkomst, hängande kablar. Allt antecknas. Det kostar inget.',
    duration: 'Inom 24h',
  },
  {
    icon: FileText,
    number: '03',
    title: 'Du får en fast offert',
    body: 'Tydlig kalkyl med material, transport, montagetid och demontering. Inga dolda poster. Vad det står ska gälla — det är hela poängen.',
    duration: '1–3 dagar',
  },
  {
    icon: HardHat,
    number: '04',
    title: 'Vi monterar',
    body: 'STIB-utbildade montörer på plats. Du behöver inte vara hemma. Skyddsräcken, sparkbräda, ankarpunkter — allt enligt AFS 2013:4.',
    duration: 'Per offert',
  },
  {
    icon: Construction,
    number: '05',
    title: 'Du jobbar tryggt',
    body: 'Ställningen står stadigt under hela hyresperioden. Behöver något justeras kommer vi tillbaka. Service ingår — det är inte en extra-faktura.',
    duration: 'Hyresperiod',
  },
  {
    icon: Truck,
    number: '06',
    title: 'Vi monterar ner och städar',
    body: 'När entreprenaden är klar hämtar vi allt och städar tomten. Du ser inte att vi varit där — bortsett från det färdiga arbetet bakom oss.',
    duration: '1–3 dagar',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-brand-white py-24 md:py-32">
      <div className="container-edge">
        <div className="max-w-3xl">
          <Reveal>
            <span className="label-mono text-brand-green">Så här går det till</span>
          </Reveal>
          <TextReveal
            text="Sex steg från första samtal till nedmontering."
            as="h2"
            className="heading-section mt-6 text-brand-black"
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-brand-graphite">
              Att anlita ett ställningsföretag ska kännas enkelt — inte bli ett projekt
              i sig. Så här ser vägen från ditt samtal till färdigt jobb ut.
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-px border border-brand-gray-light bg-brand-gray-light md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.number} className="bg-brand-white">
              <Reveal delay={i * 0.06} y={30}>
                <article className="flex h-full flex-col p-8 md:p-10">
                  <div className="flex items-center justify-between">
                    <span className="label-mono text-brand-graphite">{s.number}</span>
                    <span className="label-mono rounded-full bg-brand-offwhite px-3 py-1 text-brand-green">
                      {s.duration}
                    </span>
                  </div>
                  <s.icon size={36} className="mt-10 text-brand-green" strokeWidth={1.5} />
                  <h3 className="mt-6 font-display text-[22px] font-semibold leading-tight tracking-tight text-brand-black">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-brand-graphite">{s.body}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
