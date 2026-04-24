import { motion, useInView, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Button from '../ui/Button'
import mwm from '../../assets/logos/mwm.svg'
import mcrm from '../../assets/logos/mcrm.svg'
import mdev from '../../assets/logos/mdev.svg'

function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    const ctrl = animate(0, to, { duration: 2.2, ease: 'easeOut', onUpdate: v => setVal(Math.round(v)) })
    return () => ctrl.stop()
  }, [inView, to])
  return <span ref={ref}>{val}{suffix}</span>
}

const STATS = [
  { to: 50, suffix: '+', label: 'Projects Delivered' },
  { to: 1000, suffix: '+', label: 'Hours Billed' },
  { to: 100, suffix: '%', label: 'Client Satisfaction' },
]

const WHY_ITEMS = [
  'Proven Expertise in monday.com Setup and Automation',
  'Mastery of monday.com Integrations with Zapier and Make.com',
  'Customized Automation Solutions to Fit Your Workflow',
  'Trusted Partner with High Adoption and Satisfaction Rates',
]

const PRODUCTS = [
  { src: mwm, label: 'Work Management' },
  { src: mcrm, label: 'CRM' },
  { src: mdev, label: 'Dev' },
]

const CARD_STYLE = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
}

export default function WhyChooseSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      className="font-sans py-20 lg:py-28"
      style={{ background: 'linear-gradient(135deg, #0f0c1e 0%, #131130 40%, #0e1628 100%)' }}
    >
      <div className="max-w-330 mx-auto px-6 xl:px-12">

        {/* ── Section label ── */}
        <motion.p
          className="text-[11px] font-bold uppercase tracking-[0.22em] text-purple-400 mb-10 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Our Partnership &amp; Why Choose Us
        </motion.p>

        {/* ── Two cards ── */}
        <div ref={ref} className="grid md:grid-cols-2 gap-5 mb-5">

          {/* Our Partnership */}
          <motion.div
            className="rounded-3xl p-8 sm:p-10 flex flex-col gap-6"
            style={CARD_STYLE}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <div className="h-1 w-10 rounded-full" style={{ background: 'linear-gradient(90deg,#7c3aed,#a855f7)' }} />
            <h3 className="text-[22px] sm:text-[24px] font-extrabold text-white">
              Our Partnership
            </h3>
            <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              We specialize in building smart, scalable systems using monday.com and
              powerful integrations that simplify how teams work. From workflow
              automation to custom API connections, we help businesses streamline
              operations, improve collaboration, and gain full visibility into
              their processes.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
                >
                  <p className="text-[24px] font-extrabold leading-none" style={{
                    background: 'linear-gradient(125deg,#a78bfa,#c084fc)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    <Counter to={s.to} suffix={s.suffix} />
                  </p>
                  <p className="text-[11px] font-medium mt-1.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            className="rounded-3xl p-8 sm:p-10 flex flex-col gap-6"
            style={CARD_STYLE}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="h-1 w-10 rounded-full" style={{ background: 'linear-gradient(90deg,#7c3aed,#a855f7)' }} />
            <h3 className="text-[22px] sm:text-[24px] font-extrabold text-white">
              Why Choose Us
            </h3>

            <div className="flex flex-col gap-4">
              {WHY_ITEMS.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-3.5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                >
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-white mt-0.5"
                    style={{ background: 'linear-gradient(135deg,#7c3aed,#a855f7)' }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-[14px] leading-snug" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── CTAs ── */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            as="a"
            href="https://calendly.com/tuesdaywizard/30minutestrategy?month=2026-04"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="w-full sm:w-auto px-8"
          >
            Book Free Consult
          </Button>

          <a
            href="https://www.upwork.com/agencies/tuesdaywizard/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 h-12 px-8 w-full sm:w-auto rounded-lg text-[14px] font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)' }}
          >
            Find us on Upwork
            <span
              className="inline-flex items-center justify-center w-6 h-6 rounded-md shrink-0"
              style={{ background: '#111' }}
              aria-label="Upwork"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9531 12.0977C13.2891 12.0977 12.6641 11.8164 12.1016 11.3594L12.2383 10.7109L12.2422 10.6875C12.3672 10 12.7539 8.84375 13.9531 8.84375C14.8516 8.84375 15.582 9.57422 15.582 10.4727C15.582 11.3711 14.8516 12.0977 13.9531 12.0977ZM13.9531 7.19531C12.4219 7.19531 11.2383 8.1875 10.7539 9.82422C10.0195 8.71875 9.46094 7.39453 9.13672 6.27734H7.48828V10.5625C7.48828 11.4102 6.80078 12.0977 5.95312 12.0977C5.10547 12.0977 4.41797 11.4102 4.41797 10.5625V6.27344H2.77344V10.5586C2.77344 12.3125 4.19922 13.7539 5.95312 13.7539C7.70703 13.7539 9.13281 12.3125 9.13281 10.5586V9.83984C9.45312 10.5078 9.84375 11.1836 10.3203 11.7773L9.3125 16.5195H10.9961L11.7266 13.082C12.3672 13.4922 13.1016 13.75 13.9453 13.75C15.75 13.75 17.2188 12.2734 17.2188 10.4648C17.2227 8.66406 15.7578 7.19531 13.9531 7.19531Z" fill="white"></path>
              </svg>
            </span>
          </a>
        </motion.div>

        {/* ── monday.com logos ── */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {PRODUCTS.map(p => (
            <div key={p.label} className="flex items-center gap-2 group">
              <img
                src={p.src}
                alt={p.label}
                className="h-6 w-auto object-contain transition-all duration-200 grayscale group-hover:grayscale-0"
              />
              <span
                className="text-[13px] font-semibold transition-all duration-200 grayscale group-hover:grayscale-0 group-hover:text-white"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                {p.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
