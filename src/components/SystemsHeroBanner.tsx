import { useEffect, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroImage {
  src: string;
  alt: string;
}

interface SystemsHeroBannerProps {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description?: string;
  images: HeroImage[];
  intervalMs?: number;
  /**
   * Bottom row content: search bar + filter buttons. Rendered on top of the carousel.
   */
  children?: ReactNode;
}

export default function SystemsHeroBanner({
  eyebrow,
  titleLine1,
  titleLine2,
  description,
  images,
  intervalMs = 5000,
  children,
}: SystemsHeroBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <section className="relative w-full overflow-hidden rounded-[2rem] md:rounded-[2.5rem] mb-16 shadow-2xl border border-outline/10">
      {/* Carousel */}
      <div className="relative h-[520px] md:h-[600px]">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentSlide}
            src={images[currentSlide].src}
            alt={images[currentSlide].alt}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Dark gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14 flex flex-col justify-between">
          {/* Top: title block */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-label text-primary uppercase tracking-[0.3em] text-xs mb-4 block">
                {eyebrow}
              </span>
              <h1 className="font-headline text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-none uppercase drop-shadow-lg">
                {titleLine1} <br />
                <span className="text-white/70">{titleLine2}</span>
              </h1>
            </div>
            {description && (
              <div className="hidden md:block pb-2 max-w-xs">
                <p className="font-body text-white/80 text-sm leading-relaxed border-l border-white/30 pl-6">
                  {description}
                </p>
              </div>
            )}
          </div>

          {/* Bottom: search + filters slot */}
          {children && <div className="mt-auto pt-8">{children}</div>}
        </div>

        {/* Slide indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-6 z-20 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentSlide(i)}
                aria-label={`Ir a slide ${i + 1}`}
                className={`h-1 rounded-full transition-all ${
                  i === currentSlide ? 'w-8 bg-primary' : 'w-4 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
