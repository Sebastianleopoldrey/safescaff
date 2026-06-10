import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { TextReveal } from '@/components/TextReveal'
import { Prose } from '@/components/site/prose'
import { featureFlags } from '@/config/featureFlags'

interface Metric {
  label: string
  value: string
}

interface Reference {
  n: string
  title: string
  method: string
  body: string
  metrics: Metric[]
}

const INTRO =
  '**Riktiga projekt** i Göteborgsområdet — sjukhus, fastighet, industri, villa.\n' +
  'Samma sak varje gång: **ställningen står, jobbet rullar, inget stannar**.'

// Flagship — the only built case page today (/projekt).
const OSTRA_BODY =
  'Keder XL-väderskydd över ett **sjukhus i full drift**.\n' +
  'Byggt på 14 veckor, höll genom **två stormar** — **noll avbrott i vården**.'

const OSTRA_METRICS: Metric[] = [
  { label: 'Yta', value: '3 200 m²' },
  { label: 'Tid', value: '14 v' },
  { label: 'Avbrott', value: '0' },
]

// Real projects whose detailed case pages aren't built yet — shown as a calm
// reference ledger (no broken links) until featureFlags.showProjectCases flips.
const REFERENCES: Reference[] = [
  {
    n: '02',
    title: 'BRF-fasad i Majorna',
    method: 'Layher Allround',
    body: 'Boendepassage och **skyddsnät genom hela byggtiden**.\nFasadarbetet **stannade aldrig**.',
    metrics: [
      { label: 'Yta', value: '1 800 m²' },
      { label: 'Tid', value: '8 v' },
    ],
  },
  {
    n: '03',
    title: 'Industri i Sävenäs',
    method: 'Fasad + tak',
    body: '**Produktionen fick aldrig stoppas**.\nByggt i etapper, **nattetid där det krävdes**.',
    metrics: [
      { label: 'Yta', value: '2 400 m²' },
      { label: 'Upplägg', value: 'Etappvis' },
    ],
  },
  {
    n: '04',
    title: 'Villa i Kungsbacka',
    method: 'Speedyscaff aluminium',
    body: 'Trång tomt, **snabb resning, noll skador i trädgården**.\nRiven **på en dag**.',
    metrics: [
      { label: 'Tid', value: '3 v' },
      { label: 'Rivning', value: '1 dag' },
    ],
  },
]

export function CaseReferences() {
  const ostraLive = featureFlags.ostraSjukhusetCase

  const heroInner = (
    <>
      <div className="relative aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[460px]">
        <img
          src="/images/ostra-sjukhuset.jpg"
          alt="Keder XL-väderskydd över Östra Sjukhuset i Göteborg"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <span className="label-mono absolute left-5 top-5 bg-brand-black/70 px-3 py-1.5 text-brand-green-light">
          Flaggskepp
        </span>
      </div>

      <div className="flex flex-col justify-between p-8 md:p-10 lg:col-span-5 lg:p-12">
        <div>
          <div className="flex items-center justify-between">
            <span className="label-mono text-brand-gray">01 / 04</span>
            <span className="label-mono text-brand-gray">Göteborg · 2024</span>
          </div>
          <h3 className="mt-5 font-display text-[28px] font-semibold leading-tight tracking-tight text-brand-black transition-colors group-hover:text-brand-green md:text-[34px]">
            Östra Sjukhuset
          </h3>
          <Prose
            className="mt-4 text-[15px] leading-relaxed text-brand-graphite md:text-[16px]"
            text={OSTRA_BODY}
          />
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-3 gap-px border-y border-brand-gray-light bg-brand-gray-light">
            {OSTRA_METRICS.map((m) => (
              <div key={m.label} className="bg-brand-white px-4 py-5">
                <span className="label-mono text-brand-graphite">{m.label}</span>
                <p className="mt-2 font-display text-[22px] font-semibold leading-none tracking-tight text-brand-black md:text-[26px]">
                  {m.value}
                </p>
              </div>
            ))}
          </div>
          {ostraLive && (
            <div className="mt-6 flex items-center justify-between border-t border-brand-gray-light pt-5">
              <span className="label-mono text-brand-black">Läs hela caset</span>
              <ArrowRight
                size={16}
                className="text-brand-graphite transition-transform group-hover:translate-x-1 group-hover:text-brand-green"
              />
            </div>
          )}
        </div>
      </div>
    </>
  )

  return (
    <section className="bg-brand-offwhite py-24 md:py-32">
      <div className="container-edge">
        {/* Header — same cadence as WhatWeDo */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <span className="label-mono text-brand-green">Referenser</span>
            </Reveal>
            <TextReveal
              text="Det vi byggt."
              as="h2"
              className="heading-section mt-6 text-brand-black"
            />
            <Reveal delay={0.15}>
              <Prose
                className="mt-6 max-w-xl text-[17px] leading-relaxed text-brand-graphite"
                text={INTRO}
              />
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <span className="label-mono text-brand-gray">01 — 04</span>
          </Reveal>
        </div>

        {/* Flagship case — the only large image, the only link, the only green-ruled card */}
        <Reveal delay={0.1} y={30}>
          {ostraLive ? (
            <Link
              to="/projekt"
              className="group mt-16 grid overflow-hidden border border-brand-gray-light border-t-2 border-t-brand-green bg-brand-white transition-colors hover:border-brand-black lg:grid-cols-12"
            >
              {heroInner}
            </Link>
          ) : (
            <div className="group mt-16 grid overflow-hidden border border-brand-gray-light border-t-2 border-t-brand-green bg-brand-white lg:grid-cols-12">
              {heroInner}
            </div>
          )}
        </Reveal>

        {/* Supporting ledger — calm, non-clickable until case pages exist */}
        <Reveal delay={0.1} y={30}>
          <div className="mt-6 divide-y divide-brand-gray-light border border-brand-gray-light bg-brand-white">
            {REFERENCES.map((r) => (
              <div
                key={r.n}
                className="group grid gap-3 px-6 py-7 transition-colors hover:bg-brand-offwhite md:grid-cols-12 md:items-center md:gap-6 md:px-8 md:py-8"
              >
                <span className="label-mono text-brand-graphite md:col-span-1">{r.n}</span>
                <div className="md:col-span-4">
                  <h3 className="font-display text-[19px] font-semibold leading-tight tracking-tight text-brand-black md:text-[21px]">
                    {r.title}
                  </h3>
                  <span className="label-mono mt-1 block text-brand-graphite">{r.method}</span>
                </div>
                <Prose
                  className="text-[14px] leading-relaxed text-brand-graphite md:col-span-4"
                  text={r.body}
                />
                <div className="flex gap-6 md:col-span-2">
                  {r.metrics.map((m) => (
                    <div key={m.label}>
                      <span className="label-mono block text-brand-graphite">{m.label}</span>
                      <span className="font-display text-[18px] font-semibold leading-none tracking-tight text-brand-black">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="label-mono text-brand-gray md:col-span-1 md:justify-self-end">
                  Case kommer
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Tail */}
        <Reveal delay={0.1}>
          <div className="mt-12 border-t border-brand-gray-light pt-8">
            <Link to="/projekt" className="group inline-flex items-center gap-3">
              <span className="label-mono text-brand-black">Se alla projekt</span>
              <ArrowRight
                size={16}
                className="text-brand-graphite transition-transform group-hover:translate-x-1 group-hover:text-brand-green"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
