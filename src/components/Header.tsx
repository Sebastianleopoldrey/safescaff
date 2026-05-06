import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'
import { services } from '@/config/site'

const NAV = [
  { href: '/', label: 'Hem' },
  { href: '/om-safescaff', label: 'Om oss' },
  { href: '/projekt', label: 'Projekt' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,color] duration-500',
          scrolled || !isHome
            ? 'bg-brand-white/95 text-brand-black backdrop-blur-md'
            : 'bg-transparent text-brand-white'
        )}
      >
        <div className="container-edge flex h-20 items-center justify-between md:h-24">
          <Link to="/" className="flex items-center gap-3" aria-label="SafeScaff hem">
            <span className="font-display text-xl font-semibold tracking-tight md:text-2xl">
              SafeScaff
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Huvudmeny">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 text-[15px] font-medium"
                aria-expanded={servicesOpen}
              >
                Tjänster
                <ChevronDown size={14} className={cn('transition-transform', servicesOpen && 'rotate-180')} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-4"
                  >
                    <div className="min-w-[260px] border border-brand-gray-light bg-brand-white py-2 text-brand-black shadow-lg">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/${s.slug}`}
                          className="flex items-baseline gap-3 px-5 py-3 transition hover:bg-brand-offwhite"
                        >
                          <span className="label-mono text-brand-gray">{s.number}</span>
                          <span className="text-[15px] font-medium">{s.title}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {NAV.slice(1).map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn('text-[15px] font-medium transition-opacity', isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/kontakt" className="btn-primary hidden md:inline-flex">
              Begär offert
            </Link>
            <button
              type="button"
              className="-mr-2 flex h-10 w-10 items-center justify-center lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Öppna meny"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-brand-black text-brand-white"
          >
            <div className="container-edge flex h-20 items-center justify-between md:h-24">
              <span className="font-display text-xl font-semibold">SafeScaff</span>
              <button
                type="button"
                className="-mr-2 flex h-10 w-10 items-center justify-center"
                onClick={() => setOpen(false)}
                aria-label="Stäng meny"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="container-edge flex flex-col gap-2 pt-12" aria-label="Mobilmeny">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                >
                  <Link to={item.href} className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 border-t border-white/15 pt-8">
                <span className="label-mono text-brand-gray mb-4 block">Tjänster</span>
                {services.map((s, i) => (
                  <motion.div
                    key={s.slug}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    <Link to={`/${s.slug}`} className="block py-2 text-2xl font-medium md:text-3xl">
                      <span className="label-mono mr-3 text-brand-gray">{s.number}</span>
                      {s.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-12">
                <Link to="/kontakt" className="btn-primary w-full justify-center">
                  Begär offert
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
