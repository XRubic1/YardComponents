import { motion } from 'framer-motion'
import { ClipboardCheck, ShieldCheck, Truck } from 'lucide-react'

const props = [
  {
    id: 'shipping',
    title: 'Fast Shipping',
    copy: 'Built systems leave the bench quickly — tracked and packed for safe arrival.',
    Icon: Truck,
  },
  {
    id: 'warranty',
    title: 'Warranty Included',
    copy: 'Every Yard Components PC ships with coverage on parts and workmanship.',
    Icon: ShieldCheck,
  },
  {
    id: 'tested',
    title: 'Fully Tested',
    copy: 'Stress tests, thermals, and burn-in before your system is cleared to ship.',
    Icon: ClipboardCheck,
  },
]

/** Value propositions bar matching the ad footer. */
export function ValueProps() {
  return (
    <section id="why-us" className="border-t border-yc-border bg-yc-ink/90 backdrop-blur-sm">
      <div className="mx-auto grid max-w-7xl md:grid-cols-3">
        {props.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`group flex flex-col items-center px-8 py-14 text-center md:items-start md:text-left ${
              index < props.length - 1 ? 'border-b border-yc-border md:border-b-0 md:border-r' : ''
            }`}
          >
            <span className="mb-5 flex h-12 w-12 items-center justify-center border border-yc-border text-yc-silver transition-all duration-300 group-hover:scale-105 group-hover:border-yc-muted group-hover:text-yc-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <item.Icon size={22} strokeWidth={1.4} />
            </span>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.22em] text-yc-white">
              {item.title}
            </h3>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-yc-muted">
              {item.copy}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
