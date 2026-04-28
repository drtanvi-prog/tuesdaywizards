import { motion, useInView, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Button from '../ui/Button'
import mwm  from '../../assets/badges/MWM.svg'
import mcrm from '../../assets/badges/CRM.svg'
import mdev from '../../assets/badges/DEV.svg'
import msvc from '../../assets/badges/SVC.svg'

function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    const ctrl = animate(0, to, { duration: 2, ease: 'easeOut', onUpdate: v => setVal(Math.round(v)) })
    return () => ctrl.stop()
  }, [inView, to])
  return <span ref={ref}>{val}{suffix}</span>
}

const FEATURES = [
  {
    num: '01',
    title: 'monday.com\nSetup & Automation',
    desc: 'Proven Expertise in monday.com Setup and Automation',
  },
  {
    num: '02',
    title: 'Zapier &\nMake.com',
    desc: 'Mastery of monday.com Integrations with Zapier and Make.com',
  },
  {
    num: '03',
    title: 'Custom\nAutomation',
    desc: 'Customized Automation Solutions to Fit Your Workflow',
  },
  {
    num: '04',
    title: 'Trusted\nPartner',
    desc: 'Trusted Partner with High Adoption and Satisfaction Rates',
  },
]

const STATS = [
  { to: 50,   suffix: '+', label: 'Projects Delivered'  },
  { to: 1000, suffix: '+', label: 'Hours Billed'        },
  { to: 100,  suffix: '%', label: 'Client Satisfaction' },
]

const PRODUCTS = [
  { src: mwm,  label: 'Work Management' },
  { src: mcrm, label: 'CRM'             },
  { src: mdev, label: 'Dev'             },
  { src: msvc, label: 'Service'         },
]

// Border classes per item index across breakpoints:
// mobile (1-col): border-b on 0,1,2 — none on 3
// sm (2-col):     border-r on left col (0,2), border-b on first row (0,1)
// lg (4-col):     border-r on 0,1,2 — no border-b on any
const CELL_BORDERS = [
  'border-b sm:border-r lg:border-b-0',
  'border-b lg:border-r lg:border-b-0',
  'border-b sm:border-r sm:border-b-0 lg:border-r',
  '',
]

function UpworkButton() {
  return (
    <a
      href="https://www.upwork.com/agencies/tuesdaywizard/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto h-12 px-6 rounded-lg text-[14px] font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
      style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)' }}
    >
      Find us on Upwork
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-md shrink-0" style={{ background: '#111' }}>
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.9531 12.0977C13.2891 12.0977 12.6641 11.8164 12.1016 11.3594L12.2383 10.7109L12.2422 10.6875C12.3672 10 12.7539 8.84375 13.9531 8.84375C14.8516 8.84375 15.582 9.57422 15.582 10.4727C15.582 11.3711 14.8516 12.0977 13.9531 12.0977ZM13.9531 7.19531C12.4219 7.19531 11.2383 8.1875 10.7539 9.82422C10.0195 8.71875 9.46094 7.39453 9.13672 6.27734H7.48828V10.5625C7.48828 11.4102 6.80078 12.0977 5.95312 12.0977C5.10547 12.0977 4.41797 11.4102 4.41797 10.5625V6.27344H2.77344V10.5586C2.77344 12.3125 4.19922 13.7539 5.95312 13.7539C7.70703 13.7539 9.13281 12.3125 9.13281 10.5586V9.83984C9.45312 10.5078 9.84375 11.1836 10.3203 11.7773L9.3125 16.5195H10.9961L11.7266 13.082C12.3672 13.4922 13.1016 13.75 13.9453 13.75C15.75 13.75 17.2188 12.2734 17.2188 10.4648C17.2227 8.66406 15.7578 7.19531 13.9531 7.19531Z" fill="white"/>
        </svg>
      </span>
    </a>
  )
}

export default function WhyChooseSection() {
  const [activeBadge, setActiveBadge] = useState(null)
  const badgesRef = useRef(null)

  useEffect(() => {
    const handleOutside = (e) => {
      if (badgesRef.current && !badgesRef.current.contains(e.target)) {
        setActiveBadge(null)
      }
    }
    document.addEventListener('click', handleOutside)
    return () => document.removeEventListener('click', handleOutside)
  }, [])

  const featureRef = useRef(null)
  const featureInView = useInView(featureRef, { once: true, margin: '-60px' })
  const bottomRef = useRef(null)
  const bottomInView = useInView(bottomRef, { once: true, margin: '-40px' })

  return (
    <section
      className="font-sans overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f0c1e 0%, #131130 40%, #0e1628 100%)' }}
    >

      {/* ── Top: Split header ── */}
      <div className="max-w-330 mx-auto px-6 xl:px-12 pt-16 sm:pt-20 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16">

          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-purple-400 mb-4 sm:mb-5">
              Our Partnership &amp; Why Choose Us
            </p>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              The monday.com partner{' '}
              <span style={{
                background: 'linear-gradient(125deg, #a78bfa 0%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                built for results.
              </span>
            </h2>

            {/* Product badges below heading */}
            <div ref={badgesRef} className="flex flex-wrap items-center gap-2">
              {PRODUCTS.map(p => {
                const isActive = activeBadge === p.label
                return (
                  <div
                    key={p.label}
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveBadge(prev => prev === p.label ? null : p.label)
                    }}
                    className={`px-2.5 py-1.5 rounded-lg transition-all duration-300 cursor-pointer hover:opacity-100 hover:grayscale-0 ${
                      isActive ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale'
                    }`}
                    style={{ background: 'rgba(255,255,255,0.92)' }}
                  >
                    <img src={p.src} alt={p.label} className="h-4 sm:h-5 w-auto object-contain" draggable={false} />
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.p
            className="text-[14px] sm:text-[15px] leading-[1.85] max-w-md lg:max-w-xs pb-1"
            style={{ color: 'rgba(255,255,255,0.45)' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            We specialize in building smart, scalable systems using monday.com and
            powerful integrations that simplify how teams work. From workflow automation
            to custom API connections, we help businesses streamline operations and
            gain full visibility into their processes.
          </motion.p>

        </div>
      </div>

      {/* ── Feature Columns (Why Choose Us) ── */}
      <div
        ref={featureRef}
        className="border-y"
        style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      >
        <div className="max-w-330 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.num}
                className={`group relative flex flex-col gap-4 sm:gap-5 px-6 sm:px-7 lg:px-8 py-8 sm:py-10 cursor-default ${CELL_BORDERS[i]}`}
                style={{ borderColor: 'rgba(255,255,255,0.07)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={featureInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              >
                {/* Hover top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-px transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: 'linear-gradient(90deg, transparent, #7c3aed, transparent)' }}
                />

                {/* Small index label */}
                <span
                  className="text-[11px] font-bold tabular-nums tracking-[0.15em]"
                  style={{ color: 'rgba(167,139,250,0.35)' }}
                >
                  {f.num}
                </span>

                {/* Large ghost number */}
                <div
                  className="text-[56px] sm:text-[64px] lg:text-[72px] font-black leading-none tracking-tighter select-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.25) 0%, rgba(167,139,250,0.1) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {f.num}
                </div>

                {/* Title */}
                <h3 className="text-[16px] sm:text-[17px] font-bold text-white leading-snug whitespace-pre-line">
                  {f.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[13px] sm:text-[13.5px] leading-[1.75]"
                  style={{ color: 'rgba(255,255,255,0.42)' }}
                >
                  {f.desc}
                </p>

                {/* Hover bottom accent */}
                <div
                  className="absolute bottom-0 left-6 sm:left-8 right-6 sm:right-8 h-px transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left"
                  style={{ background: 'rgba(124,58,237,0.6)' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom: Stats + CTAs ── */}
      <div ref={bottomRef} className="max-w-330 mx-auto px-6 xl:px-12 py-12 sm:py-14 lg:py-18">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

          {/* Stats */}
          <div className="grid grid-cols-3 sm:flex sm:items-center gap-6 sm:gap-12 lg:gap-16">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={bottomInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <p className="text-[30px] sm:text-[38px] lg:text-[44px] font-black text-white leading-none tracking-tight">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="text-[10px] sm:text-[11px] font-medium mt-1.5 sm:mt-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTAs + logos */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={bottomInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <Button
                as="a"
                href="https://calendly.com/tuesdaywizard/30minutestrategy"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full sm:w-auto justify-center"
              >
                Book Free Consult
              </Button>
              <UpworkButton />
            </div>

          </motion.div>

        </div>
      </div>

    </section>
  )
}
