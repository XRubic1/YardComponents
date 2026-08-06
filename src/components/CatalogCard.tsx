import { motion } from 'framer-motion'
import type { PcBuild } from '../types/build'
import { AngleCarousel } from './AngleCarousel'

interface CatalogCardProps {
  build: PcBuild
  index: number
  tierLabel: string
}

/**
 * Interactive catalog item with single-PC angle slider + specs.
 */
export function CatalogCard({ build, index, tierLabel }: CatalogCardProps) {
  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(build.price)

  const slides = build.slides?.length ? build.slides : [build.image]

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col border border-yc-border bg-yc-charcoal/60 transition-colors duration-300 hover:border-yc-muted/70"
    >
      {build.featured && (
        <span className="absolute left-0 top-0 z-20 bg-yc-white px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-yc-black">
          Featured
        </span>
      )}

      <AngleCarousel slides={slides} alt={`${build.name} custom PC`} />

      <div className="flex flex-1 flex-col border-t border-yc-border px-5 py-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-yc-muted">
              {tierLabel}
            </p>
            <h3 className="mt-1 font-display text-xl font-bold uppercase tracking-tight text-yc-white">
              {build.name}
            </h3>
          </div>
          <p className="shrink-0 font-display text-lg font-bold text-yc-white">{price}</p>
        </div>

        <p className="mt-2 font-body text-sm text-yc-muted">{build.tagline}</p>

        <ul className="mt-5 space-y-1.5 border-t border-yc-border/80 pt-4 font-body text-xs text-yc-silver">
          <li className="flex justify-between gap-2">
            <span className="text-yc-muted">CPU</span>
            <span className="text-right">{build.specs.cpu}</span>
          </li>
          <li className="flex justify-between gap-2">
            <span className="text-yc-muted">GPU</span>
            <span className="text-right">{build.specs.gpu}</span>
          </li>
          <li className="flex justify-between gap-2">
            <span className="text-yc-muted">RAM</span>
            <span className="text-right">{build.specs.ram}</span>
          </li>
          <li className="flex justify-between gap-2">
            <span className="text-yc-muted">Storage</span>
            <span className="text-right">{build.specs.storage}</span>
          </li>
        </ul>

        <a
          href="#contact"
          className="mt-6 inline-flex w-full items-center justify-center border border-yc-white/30 py-3 font-body text-[11px] font-bold uppercase tracking-[0.2em] text-yc-white transition-colors duration-200 hover:bg-yc-white hover:text-yc-black"
        >
          Request Build
        </a>
      </div>
    </motion.article>
  )
}
