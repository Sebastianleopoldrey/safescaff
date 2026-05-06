import { Link } from 'react-router-dom'
import { site, services } from '@/config/site'

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}
function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-brand-black text-brand-offwhite">
      <div className="container-edge py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="label-mono mb-4 text-brand-gray">Tjänster</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="text-[15px] hover:text-brand-green-light">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label-mono mb-4 text-brand-gray">Företag</h3>
            <ul className="space-y-2.5 text-[15px]">
              <li><Link to="/om-safescaff" className="hover:text-brand-green-light">Om oss</Link></li>
              <li><Link to="/projekt" className="hover:text-brand-green-light">Projekt</Link></li>
              <li><Link to="/kontakt" className="hover:text-brand-green-light">Kontakt</Link></li>
              <li><Link to="/integritetspolicy" className="hover:text-brand-green-light">Integritetspolicy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="label-mono mb-4 text-brand-gray">Kontakt</h3>
            <ul className="space-y-2.5 text-[15px]">
              <li><a href={`tel:${site.phoneTel}`} className="hover:text-brand-green-light">{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="hover:text-brand-green-light">{site.email}</a></li>
              <li className="pt-2 text-brand-gray">{site.address.visiting}</li>
              <li className="text-brand-gray">{site.address.invoice}</li>
              <li className="pt-2 text-brand-gray">{site.hours}</li>
            </ul>
          </div>

          <div>
            <h3 className="label-mono mb-4 text-brand-gray">Följ oss</h3>
            <div className="flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-white/20 transition hover:border-brand-green-light hover:text-brand-green-light"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-white/20 transition hover:border-brand-green-light hover:text-brand-green-light"
              >
                <FacebookIcon size={16} />
              </a>
            </div>
            <div className="mt-8">
              <img
                src="/images/STIB_logo_medl_stallningsforetagen.png"
                alt="STIB-medlem"
                className="h-16 w-auto opacity-90"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-white/15 pt-8 text-[13px] text-brand-gray">
          <p>© 2026 {site.name} · Org.nr {site.orgNumber}</p>
          <p>
            Hemsidan av{' '}
            <a href="https://introwise.se" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green-light">
              Introwise
            </a>
          </p>
        </div>
      </div>

      <div aria-hidden className="container-edge -mb-2 select-none overflow-hidden pb-0">
        <span
          className="block text-center font-display font-bold leading-[0.78] tracking-[-0.06em]"
          style={{ fontSize: 'clamp(120px, 25vw, 320px)' }}
        >
          SafeScaff.
        </span>
      </div>
    </footer>
  )
}
