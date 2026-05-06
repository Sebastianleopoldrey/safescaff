import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export function NotFound() {
  return (
    <section className="container-edge flex min-h-[80svh] flex-col justify-center pt-32">
      <span className="label-mono text-brand-green">404</span>
      <h1 className="heading-hero mt-6 text-brand-black">Sidan finns inte.</h1>
      <p className="mt-6 max-w-md text-[17px] text-brand-graphite">
        Sidan du letade efter har antingen flyttats eller aldrig funnits.
      </p>
      <div className="mt-10">
        <Link to="/" className="btn-ghost text-brand-black">
          <ArrowLeft size={14} />
          Tillbaka till startsidan
        </Link>
      </div>
    </section>
  )
}
