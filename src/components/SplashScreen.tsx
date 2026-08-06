import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface SplashScreenProps {
  /** Called once the splash has fully exited. */
  onFinish: () => void
  /** How long the splash stays visible after the logo is ready (ms). */
  durationMs?: number
}

/**
 * Full-screen brand intro with soft logo reveal, then fade-out.
 * Inputs: onFinish callback + optional duration. Output: overlay until complete.
 */
export function SplashScreen({ onFinish, durationMs = 2600 }: SplashScreenProps) {
  const [visible, setVisible] = useState(true)
  const [logoReady, setLogoReady] = useState(false)

  // Preload logo so the mark appears crisp on first paint.
  useEffect(() => {
    const img = new Image()
    img.src = '/images/logo-mark.png'
    if (img.complete) {
      setLogoReady(true)
      return
    }
    img.onload = () => setLogoReady(true)
    img.onerror = () => setLogoReady(true)
  }, [])

  useEffect(() => {
    if (!logoReady) return

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const exitTimer = window.setTimeout(() => setVisible(false), durationMs)

    return () => {
      document.body.style.overflow = prevOverflow
      window.clearTimeout(exitTimer)
    }
  }, [durationMs, logoReady])

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-yc-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          role="status"
          aria-live="polite"
          aria-label="Yard Components loading"
        >
          <div className="relative flex flex-col items-center px-6">
            <motion.img
              src="/images/logo-mark.png"
              alt="Yard Components"
              initial={{ opacity: 0, scale: 0.9, y: 14 }}
              animate={
                logoReady
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { opacity: 0, scale: 0.9, y: 14 }
              }
              transition={{ duration: 0.95, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="h-40 w-auto object-contain sm:h-48 md:h-56"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={logoReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 font-body text-[11px] font-medium uppercase tracking-[0.35em] text-yc-muted"
            >
              Built to perform
            </motion.p>

            <div className="mt-10 h-px w-32 overflow-hidden bg-yc-border">
              <motion.div
                className="h-full origin-left bg-yc-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: logoReady ? 1 : 0 }}
                transition={{
                  duration: Math.max(durationMs / 1000 - 0.5, 1.2),
                  delay: 0.3,
                  ease: 'linear',
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
