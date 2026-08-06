import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { asset } from '../lib/asset'

/** Hero: brand-led full-bleed composition with soft entrance motion. */
export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 40])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.03])

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-yc-black md:justify-center"
    >
      {/* Full-bleed studio photo — drop original into public/images/bg-pc.jpg */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0"
      >
        <motion.img
          src={asset('/images/bg-pc.jpg')}
          alt=""
          aria-hidden
          fetchPriority="high"
          decoding="async"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover object-[75%_center] md:object-[70%_center]"
        />
      </motion.div>

      {/* Soft grid over the photo */}
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-25" aria-hidden />

      {/* Left + bottom fades keep copy readable */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-yc-black from-0% via-yc-black/65 via-32% to-transparent to-65%"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-yc-black to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-yc-black/40 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-20">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 font-display text-sm font-bold uppercase tracking-[0.35em] text-yc-white md:text-base"
          >
            Yard Components
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-yc-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Built to
            <br />
            Perform.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-md font-body text-sm font-medium uppercase tracking-[0.18em] text-yc-muted md:text-base"
          >
            High performance. Zero compromises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#catalog"
              className="inline-flex items-center bg-yc-white px-7 py-3.5 font-body text-xs font-bold uppercase tracking-[0.2em] text-yc-black transition-opacity duration-200 hover:opacity-90"
            >
              Browse Catalog
            </a>
            <a
              href="#builds"
              className="inline-flex items-center border border-yc-white/40 px-7 py-3.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-yc-white transition-colors duration-200 hover:border-yc-white"
            >
              Featured Build
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
