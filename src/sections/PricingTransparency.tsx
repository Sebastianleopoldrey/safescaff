import { Link } from 'react-router-dom'
import { ArrowRight, Ruler, Layers, CalendarRange, Truck } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { TextReveal } from '@/components/TextReveal'

const FACTORS = [
  {
    icon: Ruler,
    label: 'Storlek & höjd',
    body: 'Antal kvadratmeter, fasadhöjd och våningar. Större projekt får lägre pris per m².',
  },
  {
    icon: Layers,
    label: 'System',
    body: 'Speedyscaff aluminium är billigare än Layher Allround modul. Vi väljer efter ditt jobb, inte efter vårt lager.',
  },
  {
    icon: CalendarRange,
    label: 'Hyrestid',
    body: 'Längre hyresperioder ger lägre veckopris. Två veckor kostar inte dubbelt så mycket som en.',
  },
  {
    icon: Truck,
    label: 'Plats & åtkomst',
    body: 'Centrala Göteborg med trottoartillstånd kostar mer än en villa i Lindome. Vi sköter ansökningar.',
  },
]

const COMMITMENTS = [
  'Fast pris i offerten — inga "tillkommer-poster" i efterhand',
  'Platsbesök och offert är alltid kostnadsfria',
  'Vi förklarar vad varje rad i kalkylen betyder',
  'Konkurrenskraftiga priser jämfört med andra STIB-företag i Göteborg',
]

export function PricingTransparency() {
  return (
    <section className="bg-brand-offwhite py-24 md:py-32">
      <div className="container-edge">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="label-mono text-brand-green">Vad kostar det?</span>
            </Reveal>
            <TextReveal
              text="Du betalar för det du behöver. Inget mer."
              as="h2"
              className="heading-section mt-6 text-brand-black"
            />
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-md text-[17px] leading-relaxed text-brand-graphite">
                Vi publicerar inga listpriser eftersom varje projekt är unikt. Men vi
                hymlar inte heller — efter ett platsbesök får du en fast offert. Det här
                påverkar priset:
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <Link
                to="/kontakt"
                className="group mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-brand-black hover:text-brand-green"
              >
                Få kostnadsfri offert
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div>
            <ul className="grid gap-px border border-brand-gray-light bg-brand-gray-light sm:grid-cols-2">
              {FACTORS.map((f, i) => (
                <li key={f.label} className="bg-brand-white">
                  <Reveal delay={i * 0.06} y={20}>
                    <div className="flex h-full flex-col p-7 md:p-8">
                      <f.icon size={26} className="text-brand-green" strokeWidth={1.6} />
                      <h3 className="mt-6 font-display text-[20px] font-semibold tracking-tight text-brand-black">
                        {f.label}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-brand-graphite">{f.body}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal delay={0.3}>
              <div className="mt-8 border border-brand-black bg-brand-black p-8 text-brand-offwhite md:p-10">
                <span className="label-mono text-brand-green-light">Vårt löfte</span>
                <ul className="mt-5 space-y-3">
                  {COMMITMENTS.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-[15px] text-white/90">
                      <span className="mt-2 inline-block h-1 w-1 rounded-full bg-brand-green-light" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
