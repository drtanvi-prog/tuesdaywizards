import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import img1 from '../../assets/portfollio/carousel1.jpeg'
import img2 from '../../assets/portfollio/carousel2.jpeg'
import img3 from '../../assets/portfollio/carousel3.jpeg'
import img4 from '../../assets/portfollio/carousel4.jpeg'
import img5 from '../../assets/portfollio/carousel5.jpeg'
import img6 from '../../assets/portfollio/carousel6.jpeg'
import img7 from '../../assets/portfollio/carousel7.jpeg'
import img8 from '../../assets/portfollio/carousel8.jpeg'
import img9 from '../../assets/portfollio/carousel9.jpeg'

const IMAGES = [
  { id: 1, src: img1, alt: 'Customer Success Planning' },
  { id: 2, src: img2, alt: 'Resource Capacity Planning' },
  { id: 3, src: img3, alt: 'Company KPIs Dashboard' },
  { id: 4, src: img4, alt: 'Deals Pipeline Overview' },
  { id: 5, src: img5, alt: 'Q2 Overview Dashboard' },
  { id: 6, src: img6, alt: 'Social Media Campaign Dashboard' },
  { id: 7, src: img7, alt: 'Marketing Overview Timeline' },
  { id: 8, src: img8, alt: 'Construction Project Dashboard' },
  { id: 9, src: img9, alt: 'Make Automation Scenario' },
]

const fadeVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
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
              background: 'linear-gradient(125deg, #a78bfa 0%, #c084fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              in action.
            </span>
          </h2>
        </div>

        {/* ── Image slider ── */}
        <div className="relative rounded-2xl overflow-hidden aspect-video shadow-[0_24px_64px_rgba(0,0,0,0.14),0_4px_16px_rgba(0,0,0,0.08)] border border-gray-100/80">

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
                alt={IMAGES[cur].alt}
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
                  width: i === cur ? 22 : 8,
                  height: 8,
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
