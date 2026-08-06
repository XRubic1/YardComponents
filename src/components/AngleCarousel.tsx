import { useCallback, useRef, useState, type TouchEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface AngleCarouselProps {
  /** One image per angle — each already cropped to a single PC. */
  slides: string[]
  alt: string
}

/**
 * Catalog angle slider: one PC visible per slide, 1 → 2 → 3 → 2 → 1.
 */
export function AngleCarousel({ slides, alt }: AngleCarouselProps) {
  const frames = slides.length
  const [index, setIndex] = useState(0)
  const direction = useRef(1)
  const touchStartX = useRef<number | null>(null)

  const step = useCallback(
    (delta: number) => {
      setIndex((current) => {
        let next = current + delta
        let dir = direction.current

        if (next >= frames) {
          dir = -1
          next = frames - 2
        } else if (next < 0) {
          dir = 1
          next = 1
        }

        direction.current = dir
        return Math.max(0, Math.min(frames - 1, next))
      })
    },
    [frames],
  )

  const goForward = () => {
    direction.current = 1
    step(1)
  }

  const goBack = () => {
    direction.current = -1
    step(-1)
  }

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null
  }

  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current == null) return
    const dx = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current
    touchStartX.current = null
    if (Math.abs(dx) < 40) return
    if (dx < 0) goForward()
    else goBack()
  }

  if (frames === 0) return null

  return (
    <div
      className="relative select-none"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative h-64 overflow-hidden bg-yc-black md:h-72">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={slides[index]}
            src={slides[index]}
            alt={`${alt} — angle ${index + 1} of ${frames}`}
            draggable={false}
            initial={{ opacity: 0, x: direction.current * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction.current * -40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) goForward()
              else if (info.offset.x > 50) goBack()
            }}
            className="absolute inset-0 h-full w-full cursor-grab object-cover object-center active:cursor-grabbing"
          />
        </AnimatePresence>

        <button
          type="button"
          aria-label="Previous angle"
          onClick={goBack}
          className="absolute left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-yc-border bg-yc-black/70 text-yc-silver transition-colors hover:border-yc-muted hover:text-yc-white"
        >
          <ChevronLeft size={16} strokeWidth={1.5} />
        </button>
        <button
          type="button"
          aria-label="Next angle"
          onClick={goForward}
          className="absolute right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-yc-border bg-yc-black/70 text-yc-silver transition-colors hover:border-yc-muted hover:text-yc-white"
        >
          <ChevronRight size={16} strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 border-t border-yc-border/60 bg-yc-black/30 py-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`View angle ${i + 1}`}
            aria-current={i === index}
            onClick={() => {
              direction.current = i >= index ? 1 : -1
              setIndex(i)
            }}
            className={`h-1.5 transition-all duration-300 ${
              i === index ? 'w-5 bg-yc-white' : 'w-1.5 bg-yc-border hover:bg-yc-muted'
            }`}
          />
        ))}
        <span className="ml-2 font-body text-[10px] uppercase tracking-[0.18em] text-yc-muted">
          {index + 1} / {frames}
        </span>
      </div>
    </div>
  )
}
