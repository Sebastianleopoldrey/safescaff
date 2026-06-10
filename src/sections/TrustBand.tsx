import { Reveal } from '@/components/Reveal'

const STATS = [
  { value: '8 år', label: 'På marknaden' },
  { value: '20 000 m²', label: 'Material i lager' },
  { value: 'STIB', label: 'Medlem sedan 2024' },
  { value: 'Layher', label: 'Systemleverantör' },
  { value: '0 kr', label: 'Offert & platsbesök' },
]

export function TrustBand() {
  return (
    <section
      aria-label="Trovärdighet och certifieringar"
      className="border-b border-brand-gray-light bg-brand-offwhite"
    >
      <div className="container-edge py-8 md:py-10">
        <Reveal>
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <img
              src="/images/STIB_logo_medl_stallningsforetagen.png"
              alt="Medlem i STIB"
              className="h-12 w-auto md:h-14"
              loading="eager"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-[15px] font-semibold text-brand-black">
                Medlem i STIB
              </span>
              <span className="text-[12px] text-brand-graphite">Branschens kvalitetsstämpel</span>
            </div>
          </div>
        </Reveal>

        <ul className="mt-8 grid grid-cols-1 gap-px border border-brand-gray-light bg-brand-gray-light sm:grid-cols-5">
          {STATS.map((s, i) => (
            <li key={s.label} className="bg-brand-white">
              <Reveal delay={0.05 + i * 0.04}>
                <div className="flex h-full flex-col items-center justify-center gap-1 px-4 py-6 text-center">
                  <span className="font-display text-[22px] font-semibold tracking-tight text-brand-black md:text-[24px]">
                    {s.value}
                  </span>
                  <span className="label-mono text-[11px] text-brand-graphite">{s.label}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
