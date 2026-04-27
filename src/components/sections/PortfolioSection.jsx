import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import carousel1  from '../../assets/portfollio/carousel1.avif'
import carousel2  from '../../assets/portfollio/carousel2.avif'
import carousel3  from '../../assets/portfollio/carousel3.avif'
import carousel4  from '../../assets/portfollio/carousel4.avif'
import carousel5  from '../../assets/portfollio/carousel5.avif'
import carousel6  from '../../assets/portfollio/carousel6.avif'
import carousel7  from '../../assets/portfollio/carousel7.avif'
import carousel8  from '../../assets/portfollio/carousel8.avif'
import carousel9  from '../../assets/portfollio/carousel9.avif'
import carousel10 from '../../assets/portfollio/carousel10.avif'
import carousel11 from '../../assets/portfollio/carousel11.avif'

const IMAGES = [
  { id: 1,  src: carousel1  },
  { id: 2,  src: carousel2  },
  { id: 3,  src: carousel3  },
  { id: 4,  src: carousel4  },
  { id: 5,  src: carousel5  },
  { id: 6,  src: carousel6  },
  { id: 7,  src: carousel7  },
  { id: 8,  src: carousel8  },
  { id: 9,  src: carousel9  },
  { id: 10, src: carousel10 },
  { id: 11, src: carousel11 },
]

const fadeVariants = {
  enter:  { opacity: 0 },
  center: { opacity: 1 },
  exit:   { opacity: 0 },
}

export default function PortfolioSection() {
  const [cur, setCur] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCur(c => (c + 1) % IMAGES.length), [])
  const prev = useCallback(() => setCur(c => (c - 1 + IMAGES.length) % IMAGES.length), [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 4000)
    return () => clearInterval(t)
  }, [paused, next])

  return (
    <section
      id="portfolio"
      className="font-sans py-20 lg:py-28 bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-330 mx-auto px-6 xl:px-12">

        {/* ── Header ── */}
        <div className="text-center mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-purple-600 mb-3">
            Our Portfolio
          </p>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold text-gray-900 tracking-tight leading-[1.12]">
            Our work,{' '}
            <span style={{
              background: 'linear-gradient(125deg,#7c3aed 0%,#a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              in action.
            </span>
          </h2>
        </div>

        {/* ── Image slider ── */}
        <div className="relative rounded-2xl overflow-hidden aspect-16/7 shadow-[0_24px_64px_rgba(0,0,0,0.14),0_4px_16px_rgba(0,0,0,0.08)] border border-gray-100/80">

          {/* Slides */}
          <AnimatePresence mode="wait">
            <motion.div
              key={cur}
              variants={fadeVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <img
                src={IMAGES[cur].src}
                alt={`Portfolio ${cur + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>

          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              background: 'rgba(0,0,0,0.45)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff',
            }}
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              background: 'rgba(0,0,0,0.45)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff',
            }}
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
          </button>

          {/* Dots — overlaid bottom center */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-3 py-2 rounded-full"
            style={{
              background: 'rgba(0,0,0,0.40)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            {IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCur(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width:      i === cur ? 22 : 8,
                  height:     8,
                  background: i === cur
                    ? 'rgba(255,255,255,0.95)'
                    : 'rgba(255,255,255,0.45)',
                }}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
