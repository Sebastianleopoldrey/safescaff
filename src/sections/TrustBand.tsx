import { Reveal } from '@/components/Reveal'

const STATS = [
  { value: '8 år', label: 'På marknaden' },
  { value: '20 000 m²', label: 'Material i lager' },
  { value: 'STIB', label: 'Branschmedlem' },
  { value: 'Layher', label: 'Systemleverantör' },
  { value: '24h', label: 'Svar på offert' },
]

export function TrustBand() {
  return (
    <section
      aria-label="Trovärdighet och certifieringar"
      className="border-b border-brand-gray-light bg-brand-offwhite"
    >
      <div className="container-edge py-6 md:py-8">
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
          <Reveal>
            <div className="flex items-center gap-4">
              <img
                src="/images/STIB_logo_medl_stallningsforetagen.png"
                alt="Medlem i STIB"
                className="h-12 w-auto md:h-14"
                loading="eager"
              />
              <div className="hidden flex-col leading-tight sm:flex">
                <span className="font-display text-[15px] font-semibold text-brand-black">
                  Medlem i STIB
                </span>
                <span className="text-[12px] text-brand-graphite">Branschens kvalitetsstämpel</span>
              </div>
            </div>
          </Reveal>

          <ul className="flex flex-wrap items-baseline gap-x-8 gap-y-3 md:gap-x-12">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.05 + i * 0.04}>
                <li className="flex flex-col leading-tight">
                  <span className="font-display text-[20px] font-semibold tracking-tight text-brand-black md:text-[22px]">
                    {s.value}
                  </span>
                  <span className="label-mono text-[11px] text-brand-graphite">{s.label}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
