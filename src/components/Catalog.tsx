import { useMemo, useState, startTransition } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { builds, tierLabels } from '../data/builds'
import type { BuildTier, PcBuild } from '../types/build'
import { CatalogCard } from './CatalogCard'

const filters: Array<{ id: 'all' | BuildTier; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'starter', label: 'Starter' },
  { id: 'performance', label: 'Performance' },
  { id: 'flagship', label: 'Flagship' },
  { id: 'creator', label: 'Creator' },
]

/** Filterable PC catalog grid with soft staggered entrance. */
export function Catalog() {
  const [active, setActive] = useState<'all' | BuildTier>('all')

  const visible = useMemo(() => {
    if (active === 'all') return builds
    return builds.filter((b) => b.tier === active)
  }, [active])

  const onFilter = (id: 'all' | BuildTier) => {
    startTransition(() => setActive(id))
  }

  return (
    <section id="catalog" className="relative border-t border-yc-border bg-yc-black/88 backdrop-blur-sm py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.28em] text-yc-muted"
            >
              Catalog
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-display text-3xl font-bold uppercase tracking-tight text-yc-white md:text-5xl"
            >
              Choose Your Build
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 max-w-lg font-body text-yc-muted"
            >
              Every system is assembled, cable-managed, and fully tested before it leaves the bench.
            </motion.p>
          </div>

          <div
            role="tablist"
            aria-label="Filter builds by tier"
            className="flex flex-wrap gap-2"
          >
            {filters.map((f) => {
              const selected = active === f.id
              return (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => onFilter(f.id)}
                  className={`px-4 py-2 font-body text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
                    selected
                      ? 'bg-yc-white text-yc-black'
                      : 'border border-yc-border text-yc-muted hover:border-yc-muted hover:text-yc-white'
                  }`}
                >
                  {f.label}
                </button>
              )
            })}
          </div>
        </div>

        <motion.div
          layout
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((build, index) => (
              <CatalogCard key={build.id} build={build} index={index} tierLabel={tierLabels[build.tier]} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

/** Re-export type for consumers that need build shape. */
export type { PcBuild }
