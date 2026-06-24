import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

/* ── Scaled WizClone icon wrapper ── */
const WizCloneIcon = ({ size = 64 }) => (
  <div style={{ width: size, height: size, flexShrink: 0 }}>
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="7" fill="#6C47FF" />
      <path d="M7 9L11 19L14 13L17 19L21 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
)

/* ── Scaled MondayIcon wrapper ── */
const MondayLogo = ({ width = 54 }) => (
  <div style={{ width, flexShrink: 0 }}>
    <svg viewBox="0 0 135 89" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <path d="M16.2298 79.5828C13.3565 79.552 10.5429 78.7584 8.07701 77.2831C5.61112 75.8078 3.58148 73.7038 2.19583 71.1865C0.829424 68.6795 0.165343 65.85 0.273752 62.9969C0.38216 60.1438 1.25909 57.3729 2.81179 54.9768L32.4008 9.28653C33.9064 6.83703 36.0362 4.83183 38.5719 3.4764C41.1076 2.12097 43.958 1.46401 46.8311 1.57287C49.7043 1.68174 52.4969 2.5525 54.9228 4.09593C57.3486 5.63936 59.3205 7.79997 60.6364 10.3564C61.9411 12.8997 62.5333 15.7486 62.3501 18.6012C62.1669 21.4537 61.2151 24.2035 59.5958 26.559L30.0382 72.2189C28.5447 74.5115 26.4953 76.389 24.081 77.6766C21.6667 78.9641 18.9658 79.6199 16.2298 79.5828Z" fill="#FB275D"/>
      <path d="M65.8814 79.1081C63.0066 79.0485 60.1997 78.2231 57.7503 76.717C55.3009 75.2109 53.2975 73.0787 51.9469 70.5403C50.61 68.0174 49.9791 65.1804 50.1209 62.3288C50.2627 59.4771 51.1721 56.7167 52.7527 54.339L82.8588 9.02108C84.3736 6.54769 86.5239 4.52581 89.0858 3.16608C91.6477 1.80634 94.5275 1.15852 97.4249 1.29015C100.322 1.42178 103.131 2.32802 105.559 3.91445C107.987 5.50088 109.946 7.70943 111.23 10.31C112.499 12.8995 113.039 15.7857 112.792 18.6588C112.544 21.5319 111.519 24.2835 109.826 26.618L79.7204 71.9282C78.2067 74.1953 76.1441 76.0425 73.7244 77.2979C71.3046 78.5533 68.6066 79.176 65.8814 79.1081Z" fill="#FFCC00"/>
      <path d="M118.08 79.2614C127.011 79.21 134.21 72.1703 134.161 63.5379C134.111 54.9054 126.83 47.9492 117.899 48.0006C108.968 48.0521 101.769 55.0917 101.819 63.7242C101.868 72.3566 109.149 79.3129 118.08 79.2614Z" fill="#00CC6F"/>
    </svg>
  </div>
)

export default function WizCloneSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const navigate = useNavigate()

  return (
    <section
      id="our-apps"
      className="relative font-sans py-20 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(120deg, #f8f7fc 0%, #ede9fe 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, #c4b5fd 0%, transparent 70%)' }} />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)' }} />

      <div ref={ref} className="relative max-w-330 mx-auto px-6 xl:px-12">

        {/* ── Section header ── */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-purple-600 mb-4">Our Apps</p>
          <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-5">
            Built for monday.com,{' '}
            <span style={{
              background: 'linear-gradient(125deg, #7c3aed 0%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Designed for You
            </span>
          </h2>
          <p className="text-[15px] leading-[1.8] max-w-xl mx-auto text-gray-500">
            We don't just consult on monday.com - we build apps for it. Crafted from
            real workflow problems, natively integrated, and live on the marketplace.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* ── Featured WizClone card ── */}
          <motion.div
            className="lg:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer"
            style={{
              background: '#fff',
              border: '1px solid rgba(124,58,237,0.12)',
              boxShadow: '0 4px 24px rgba(124,58,237,0.07), 0 1px 4px rgba(0,0,0,0.04)',
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            onClick={() => navigate('/wizclone')}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(108,71,255,0.35)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(108,71,255,0.14), 0 2px 8px rgba(0,0,0,0.06)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(124,58,237,0.12)'
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(124,58,237,0.07), 0 1px 4px rgba(0,0,0,0.04)'
            }}
          >
            {/* Purple gradient top strip */}
            <div className="h-1.5 w-full"
              style={{ background: 'linear-gradient(90deg, #6C47FF 0%, #a78bfa 50%, #c084fc 100%)' }} />

            <div className="p-7 sm:p-9 flex flex-col justify-between min-h-[300px]">
              <div>
                {/* Icon row + Featured badge */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-105"
                  >
                    <WizCloneIcon size={72} />
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.14em]"
                    style={{
                      background: 'linear-gradient(135deg, rgba(108,71,255,0.1) 0%, rgba(167,139,250,0.08) 100%)',
                      border: '1px solid rgba(108,71,255,0.18)',
                      color: '#6C47FF',
                    }}
                  >
                    Featured
                  </span>
                </div>

                {/* Name + tags */}
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <h3 className="text-[28px] sm:text-[32px] font-black text-gray-900 tracking-tight">WizClone</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    {['AI', 'Automation', 'Templates'].map(tag => (
                      <span key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold"
                        style={{ background: 'rgba(108,71,255,0.08)', color: '#6C47FF', border: '1px solid rgba(108,71,255,0.14)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-[14px] sm:text-[15px] leading-[1.8] text-gray-500 max-w-lg">
                  When a new item is created anywhere in your workspace, WizClone automatically
                  finds the matching template and copies all subitems under it. The AI layer
                  makes matching smart - even when names aren't typed exactly the same.
                </p>
              </div>

              {/* Buttons row */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 mt-7">
                <button
                  onClick={e => { e.stopPropagation(); navigate('/wizclone') }}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border font-semibold h-12 px-6 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300 btn-animated text-white bg-linear-to-r from-purple-600 to-purple-400 border-transparent w-full sm:w-auto"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4 shrink-0" strokeWidth={2.5} />
                </button>

                <a
                  href="https://monday.com/marketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border font-semibold h-12 px-6 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300 text-purple-700 border-purple-200 hover:border-purple-500 hover:bg-purple-50 bg-white w-full sm:w-auto"
                  style={{ background: '#fff', border: '1.5px solid rgba(0,0,0,0.12)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,61,87,0.35)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)' }}
                >
                  <MondayLogo width={32} />
                  Try it free
                </a>

                {/* monday.com wordmark - desktop */}
                <div className="hidden sm:flex items-center gap-2 ml-auto">
                  <span className="text-[11px] text-gray-400 font-medium">Available on</span>
                  <MondayLogo width={44} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right column ── */}
          <div className="flex flex-col gap-5">

            {/* Stats card */}
            <motion.div
              className="rounded-2xl p-6 flex flex-col gap-5 flex-1"
              style={{ background: '#fff', border: '1px solid rgba(124,58,237,0.1)', boxShadow: '0 4px 24px rgba(124,58,237,0.06)' }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-500">Why WizClone</p>
              <div className="flex flex-col gap-5">
                {[
                  { value: '< 5s', label: 'Subitems copied after item creation' },
                  { value: '100%', label: 'monday.com native - no third-party AI' },
                  { value: '3×',   label: 'Sensitivity levels for AI matching' },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span
                      className="text-[22px] font-black leading-none shrink-0 w-14 tabular-nums"
                      style={{
                        background: 'linear-gradient(125deg, #7c3aed, #a78bfa)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                      }}
                    >{s.value}</span>
                    <p className="text-[12.5px] leading-[1.65] text-gray-500 pt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
              {/* monday.com dot logo footer */}
              <div className="flex items-center gap-2 pt-4 mt-auto" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <MondayLogo width={36} />
                <span className="text-[11px] text-gray-400 font-medium">Powered by monday.com AI Blocks</span>
              </div>
            </motion.div>

            {/* Coming soon card */}
            <motion.div
              className="rounded-2xl p-6"
              style={{ background: 'rgba(108,71,255,0.04)', border: '1.5px dashed rgba(108,71,255,0.2)' }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-2 mb-3">
                {[0, 1, 2].map(i => (
                  <div key={i} className="w-9 h-9 rounded-xl"
                    style={{ background: i === 0 ? 'rgba(108,71,255,0.1)' : 'rgba(0,0,0,0.04)', border: '1.5px dashed rgba(108,71,255,0.15)' }} />
                ))}
              </div>
              <p className="text-[14px] font-bold text-gray-900 mb-1">More apps coming</p>
              <p className="text-[12.5px] leading-[1.65] text-gray-400">
                We're building more tools for monday.com teams. Stay tuned.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
