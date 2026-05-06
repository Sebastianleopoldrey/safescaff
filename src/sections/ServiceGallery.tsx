import { ImageReveal } from '@/components/ImageReveal'

interface ServiceGalleryProps {
  images: { src: string; alt: string }[]
}

export function ServiceGallery({ images }: ServiceGalleryProps) {
  return (
    <section className="bg-brand-offwhite">
      <div className="grid grid-cols-2 gap-px bg-brand-gray-light md:grid-cols-3">
        {images.map((img, i) => (
          <ImageReveal
            key={img.src + i}
            src={img.src}
            alt={img.alt}
            className="aspect-[4/5] bg-brand-offwhite"
            delay={i * 0.05}
          />
        ))}
      </div>
    </section>
  )
}
