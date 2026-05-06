import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { Preloader } from './Preloader'
import { CustomCursor } from './CustomCursor'
import { CookieBanner } from './CookieBanner'
import { useLenis } from '@/hooks/useLenis'

export function Layout() {
  useLenis()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <Preloader />
      <CustomCursor />
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
