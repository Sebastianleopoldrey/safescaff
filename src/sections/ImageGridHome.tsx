import { ImageReveal } from '@/components/ImageReveal'

const IMAGES = [
  { src: '/images/byggstallning-safescaff-2100x800.jpg', alt: 'Byggnadsställning monterad på flerbostadshus i Göteborg' },
  { src: '/images/ostra-sjukhuset.jpg', alt: 'Väderskydd över Östra Sjukhuset' },
  { src: '/images/byggstallning-ss-2100x800.jpg', alt: 'Närbild på Layher modulställning' },
  { src: '/images/IMG_6516.jpg', alt: 'Pågående montering på arbetsplats i Göteborg' },
  { src: '/images/IMG_1483-scaled.jpg', alt: 'Storskaligt väderskydd över byggprojekt' },
  { src: '/images/20F302A50333497A4FCB8ACE21551B56-scaled-2100x800.jpg', alt: 'Färdig fasadställning' },
]

export function ImageGridHome() {
  return (
    <section className="bg-brand-offwhite">
      <div className="grid grid-cols-2 gap-px bg-brand-gray-light md:grid-cols-3 lg:grid-cols-6">
        {IMAGES.map((img, i) => (
          <ImageReveal
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="aspect-[4/5] bg-brand-offwhite"
            imgClassName="transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.05]"
            delay={i * 0.08}
          />
        ))}
      </div>
    </section>
  )
}
