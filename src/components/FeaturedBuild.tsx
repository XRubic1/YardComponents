import { motion } from 'framer-motion'
import { Cpu, HardDrive, MemoryStick, Microchip } from 'lucide-react'
import { featuredSpecs } from '../data/builds'
import { asset } from '../lib/asset'

const icons = {
  cpu: Microchip,
  gpu: Cpu,
  ram: MemoryStick,
  storage: HardDrive,
} as const

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}

/** Featured Apex build showcase with staggered spec list. */
export function FeaturedBuild() {
  return (
    <section id="builds" className="relative overflow-hidden border-t border-yc-border bg-yc-ink/90 backdrop-blur-sm py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.28em] text-yc-muted"
          >
            Flagship Build
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display text-3xl font-bold uppercase tracking-tight text-yc-white md:text-5xl"
          >
            Apex X3D
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-md font-body text-base text-yc-muted"
          >
            Our signature configuration — tuned, stress-tested, and ready to ship.
          </motion.p>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-10 space-y-5"
          >
            {featuredSpecs.map((spec) => {
              const Icon = icons[spec.id]
              return (
                <motion.li
                  key={spec.id}
                  variants={item}
                  className="group flex items-start gap-4"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-yc-border text-yc-silver transition-all duration-300 group-hover:border-yc-muted group-hover:text-yc-white group-hover:shadow-[0_0_18px_rgba(255,255,255,0.08)]">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.24em] text-yc-muted">
                      {spec.title}
                    </p>
                    <p className="mt-1 font-display text-sm font-bold uppercase tracking-wide text-yc-white md:text-base">
                      {spec.detail}
                    </p>
                    <p className="mt-0.5 font-body text-sm text-yc-muted">{spec.sub}</p>
                  </div>
                </motion.li>
              )
            })}
          </motion.ul>

          <motion.a
            href="#catalog"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 inline-flex border border-yc-white/50 px-6 py-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-yc-white transition-colors hover:bg-yc-white hover:text-yc-black"
          >
            View in Catalog — $2,799
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_65%)]"
            aria-hidden
          />
          <img
            src={asset('/images/catalog/slide-01.jpg')}
            alt="Apex X3D gaming PC with glass panel"
            className="relative z-10 mx-auto w-full max-w-lg object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
          />
        </motion.div>
      </div>
    </section>
  )
}
