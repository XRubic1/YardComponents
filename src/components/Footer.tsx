import { motion } from 'framer-motion'
import { Logo } from './Logo'

/** Contact CTA strip + site footer. */
export function Footer() {
  return (
    <footer id="contact" className="border-t border-yc-border bg-yc-black/92 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-end"
        >
          <div>
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.28em] text-yc-muted">
              Contact
            </p>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-yc-white md:text-5xl">
              Ready to build?
            </h2>
            <p className="mt-4 max-w-md font-body text-yc-muted">
              Tell us your games, resolution, and budget — we&apos;ll configure a system with zero compromises.
            </p>
            <a
              href="mailto:hello@yardcomponents.com"
              className="mt-8 inline-flex bg-yc-white px-7 py-3.5 font-body text-xs font-bold uppercase tracking-[0.2em] text-yc-black transition-opacity hover:opacity-90"
            >
              hello@yardcomponents.com
            </a>
          </div>

          <div className="md:text-right">
            <Logo size="md" className="md:ml-auto" />
            <p className="mt-4 font-body text-xs uppercase tracking-[0.2em] text-yc-muted">
              High performance. Zero compromises.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-yc-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 font-body text-xs text-yc-muted md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Yard Components. All rights reserved.</p>
          <p className="uppercase tracking-[0.18em]">Custom PCs · Built to Perform</p>
        </div>
      </div>
    </footer>
  )
}
