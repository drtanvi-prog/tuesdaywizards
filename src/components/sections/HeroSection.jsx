import React, { useState, useEffect, useMemo } from 'react'
import TrustpilotWidget from '../common/TrustpilotWidget';
import Button from '../ui/Button';
import logo from '../../assets/logo.avif'

const logoImgs = import.meta.glob('../../assets/logos/*', { eager: true, import: 'default' })
const getLogoSrc = (id) => {
  const exts = ['png', 'svg', 'webp', 'avif', 'jpg']
  for (const ext of exts) {
    const key = `../../assets/logos/${id}.${ext}`
    if (logoImgs[key]) return logoImgs[key]
  }
  return null
}

const RINGS = {
  1: { radius: 120, speed: 22, dir: 1 },   // matches r=120
  2: { radius: 200, speed: 36, dir: -1 }, // matches r=200
  3: { radius: 270, speed: 54, dir: 1 },  // matches r=270
}

const ITEMS = [
  { id: 'mwm', label: 'monday Work Mgmt', short: 'mW', color: '#6161FF', ring: 1, angle: 270 },
  { id: 'mcrm', label: 'monday CRM', short: 'mC', color: '#00C2A0', ring: 1, angle: 30 },
  { id: 'mdev', label: 'monday Dev', short: 'mD', color: '#00854D', ring: 1, angle: 150 },
  { id: 'zapier', label: 'Zapier', short: 'Zp', color: '#FF4A00', ring: 2, angle: 0 },
  { id: 'make', label: 'Make', short: 'Mk', color: '#7B4EFB', ring: 2, angle: 72 },
  { id: 'n8n', label: 'n8n', short: 'n8', color: '#D9265C', ring: 2, angle: 144 },
  { id: 'slack', label: 'Slack', short: 'Sl', color: '#4A154B', ring: 2, angle: 216 },
  { id: 'zoom', label: 'Zoom', short: 'Zm', color: '#2D8CFF', ring: 2, angle: 288 },
  { id: 'teams', label: 'MS Teams', short: 'Te', color: '#6264A7', ring: 3, angle: 0 },
  { id: 'gmail', label: 'Gmail', short: 'Gm', color: '#EA4335', ring: 3, angle: 30 },
  { id: 'gdrive', label: 'Google Drive', short: 'GD', color: '#0F9D58', ring: 3, angle: 60 },
  { id: 'gcal', label: 'Google Calendar', short: 'GC', color: '#4285F4', ring: 3, angle: 90 },
  { id: 'shopify', label: 'Shopify', short: 'Sh', color: '#96BF48', ring: 3, angle: 120 },
  { id: 'salesforce', label: 'Salesforce', short: 'Sf', color: '#00A1E0', ring: 3, angle: 150 },
  { id: 'hubspot', label: 'HubSpot', short: 'Hs', color: '#FF7A59', ring: 3, angle: 180 },
  { id: 'mailchimp', label: 'Mailchimp', short: 'Mc', color: '#F5A623', ring: 3, angle: 210 },
  { id: 'zendesk', label: 'Zendesk', short: 'Zd', color: '#03363D', ring: 3, angle: 240 },
  { id: 'outlook', label: 'Outlook', short: 'Ol', color: '#0078D4', ring: 3, angle: 270 },
  { id: 'dropbox', label: 'Dropbox', short: 'Db', color: '#0061FF', ring: 3, angle: 300 },
  { id: 'linkedin', label: 'LinkedIn', short: 'Li', color: '#0077B5', ring: 3, angle: 330 },
]

const DOTS = [
  { id: 'dot1', ring: 1, angle: 60, color: '#818CF8', size: 8, speed: 7 },
  { id: 'dot2', ring: 2, angle: 215, color: '#6366F1', size: 8, speed: 11 },
  { id: 'dot3', ring: 3, angle: 145, color: '#A5B4FC', size: 8, speed: 17 },
]

const ITEM_SIZE = { 1: 48, 2: 52, 3: 46 }
const STEPS = 36

/* Timing constants for the reveal/orbit/close cycle */
const STAGGER_MS = 50
const ORBIT_HOLD = 3500
const CLOSE_PAUSE = 1800

function buildKeyframes(list) {
  return list
    .map(({ id, angle, ring }) => {
      const { radius, dir } = RINGS[ring]
      const stops = Array.from({ length: STEPS + 1 }, (_, i) => {
        const deg = angle + dir * (i / STEPS) * 360
        const rad = (deg * Math.PI) / 180
        const tx = (radius * Math.cos(rad)).toFixed(2)
        const ty = (radius * Math.sin(rad)).toFixed(2)
        const pct = ((i / STEPS) * 100).toFixed(1)
        return `${pct}%{transform:translate(calc(-50% + ${tx}px),calc(-50% + ${ty}px))}`
      }).join('')
      return `@keyframes oi-${id}{${stops}}`
    })
    .join('')
}

/* Ring close delay — outer ring closes first (collapse inward) */
const getRingCloseDelay = (ring) => {
  if (ring === 3) return 0
  if (ring === 2) return 0.28
  return 0.56
}

const StarFull = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#00B67A">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)
const StarHalf = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="half">
        <stop offset="50%" stopColor="#00B67A" />
        <stop offset="50%" stopColor="#d1d5db" />
      </linearGradient>
    </defs>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#half)" />
  </svg>
)
const MondayLogo = () => (
  <svg width="22" height="14" viewBox="0 0 120 80" fill="none">
    <circle cx="20" cy="60" r="18" fill="#FF3D00" />
    <circle cx="60" cy="60" r="18" fill="#FFCB00" />
    <circle cx="100" cy="60" r="18" fill="#00CA72" />
    <ellipse cx="20" cy="28" rx="14" ry="26" fill="#FF3D00" transform="rotate(-20 20 28)" />
    <ellipse cx="60" cy="28" rx="14" ry="26" fill="#FFCB00" transform="rotate(-20 60 28)" />
    <ellipse cx="100" cy="28" rx="14" ry="26" fill="#00CA72" transform="rotate(-20 100 28)" />
  </svg>
)

export default function HeroSection() {
  const css = useMemo(() => buildKeyframes([...ITEMS, ...DOTS]), [])

  /* ── Reveal / orbit / close cycle ── */
  const [visibleCount, setVisibleCount] = useState(0)
  const [isClosing, setIsClosing] = useState(false)
  const [showCenter, setShowCenter] = useState(true)

  useEffect(() => {
    let timer1, timer2;
    if (!isClosing) {
      if (visibleCount === 0 && showCenter === false) {
        setShowCenter(true);
        return;
      }
      if (visibleCount === 0 && showCenter === true) {
        timer1 = setTimeout(() => setVisibleCount(1), STAGGER_MS);
        return () => clearTimeout(timer1);
      }
      if (visibleCount > 0 && visibleCount < ITEMS.length + 1) {
        timer1 = setTimeout(() => setVisibleCount(c => c + 1), STAGGER_MS);
        return () => clearTimeout(timer1);
      }
      if (visibleCount === ITEMS.length + 1) {
        timer1 = setTimeout(() => setIsClosing(true), ORBIT_HOLD);
        return () => clearTimeout(timer1);
      }
    } else {
      if (visibleCount > 1) {
        timer1 = setTimeout(() => setVisibleCount(c => c - 1), STAGGER_MS);
        return () => clearTimeout(timer1);
      }
      if (visibleCount === 1) {
        timer1 = setTimeout(() => {
          setShowCenter(false);
        }, STAGGER_MS);
        timer2 = setTimeout(() => {
          setVisibleCount(0);
          setIsClosing(false);
        }, STAGGER_MS + CLOSE_PAUSE);
        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
        };
      }
      if (visibleCount === 0 && showCenter === false) {
        // Restart the loop after everything is hidden
        timer1 = setTimeout(() => {
          setShowCenter(true);
        }, 100);
        return () => clearTimeout(timer1);
      }
    }
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [visibleCount, isClosing, showCenter]);

  const allVisible = visibleCount === ITEMS.length + 1
  const dotsVisible = visibleCount > ITEMS.length && !isClosing

  return (
    <>
      <style>{css}</style>

      <section
        className="relative overflow-hidden font-sans"
        style={{
          background: 'radial-gradient(ellipse at 15% 60%, #dbeafe 0%, #ede9fe 35%, #f5f3ff 60%, #fafbff 85%, #ffffff 100%)',
          minHeight: '95vh', // Fill viewport height
        }}
      >
        {/* Top-right accent */}
        <div
          className="pointer-events-none absolute top-0 right-0 w-[55%] h-full opacity-60"
          style={{ background: 'radial-gradient(ellipse at 85% 25%, rgba(224,231,255,0.7) 0%, transparent 55%)' }}
        />

        <div className="relative max-w-[1320px] mx-auto px-6 xl:px-12 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

            {/* ══════ LEFT — Text ══════ */}
            <div className="flex flex-col gap-6" style={{ animation: 'fade-up .65s ease both' }}>

              <div className="flex flex-col gap-0.5">
                <h1 className="text-[46px] xl:text-[54px] font-extrabold text-gray-900 tracking-tight leading-[1.1]">Affordable</h1>
                <h1
                  className="text-[46px] xl:text-[54px] font-extrabold tracking-tight leading-[1.1]"
                  style={{
                    background: 'linear-gradient(125deg, #7e22ce 0%, #9A59B5 50%, #a855f7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Monday.com CRM
                </h1>
                <h1 className="text-[46px] xl:text-[54px] font-extrabold text-gray-900 tracking-tight leading-[1.1]">& Work Management</h1>
                <p className="mt-3 text-[17px] font-semibold text-purple-600">Automation & integrations from $25/hour</p>
              </div>

              <p className="text-[15px] text-gray-500 leading-relaxed max-w-[500px]">
                Stop overpaying agencies for CRM builds, automation setups, or Monday.com workflows.
                At Tuesday Wizard, we offer{' '}
                <strong className="text-gray-700 font-semibold">expert system design starting at just $25/hour</strong>
                {' '}so startups and small businesses can scale without financial stress.
              </p>

              <div className="flex flex-wrap gap-2">
                {['Custom CRM Setups', 'Automated Workflows', 'Smart Integrations'].map(f => (
                  <span key={f} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-purple-100 text-purple-700 text-[13px] font-medium shadow-sm">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  as="a"
                  href="https://calendly.com/tuesdaywizard/30minutestrategy?month=2026-04"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="text-[15px]"
                >
                  Schedule a Free Discovery Call
                </Button>
                <Button
                  as="a"
                  href="#services"
                  variant="secondary"
                  className="text-[15px]"
                >
                  Explore Services
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-1">
                <div className="scale-90 md:scale-75" style={{ minWidth: 120, maxWidth: 220 }}>
                  <TrustpilotWidget />
                </div>
                <div className="w-px h-10 bg-gray-300/60" />
                <div className="flex flex-col gap-1.5 text-left" style={{ minWidth: 160 }}>
                  <div className="flex items-center gap-2">
                    <span className="scale-110"><MondayLogo /></span>
                    <span className="text-[18px] font-bold text-gray-800 leading-tight">monday.com</span>
                  </div>
                  <span className="text-[15px] text-gray-500 font-semibold">Certified Partner</span>
                </div>
              </div>
            </div>

            {/* ══════ RIGHT — Orbital ══════ */}
            <div className="flex items-center justify-center" style={{ animation: 'fade-up .9s ease both' }}>
              <div className="relative" style={{ width: 560, height: 560 }}>

                {/* Ambient glow */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(ellipse at 48% 52%, rgba(199,210,254,0.55) 0%, rgba(221,214,254,0.3) 38%, transparent 68%)',
                    transition: 'opacity 0.5s ease',
                    opacity: visibleCount > 0 ? 1 : 0.4,
                  }}
                />

                {/* Rings - fade out when both showCenter and visibleCount are 0 */}
                <svg
                  className="absolute inset-0 w-full h-full transition-opacity duration-700"
                  style={{
                    opacity: showCenter === false && visibleCount === 0 ? 0 : 1,
                    pointerEvents: 'none',
                  }}
                  viewBox="0 0 560 560"
                  fill="none"
                >
                  <circle cx="280" cy="280" r="260" stroke="rgba(148,163,184,0.12)" strokeWidth="1" />
                  <circle cx="280" cy="280" r="120" stroke="rgba(148,163,184,0.38)" strokeWidth="1.5" strokeDasharray="5 4" />
                  <circle cx="280" cy="280" r="200" stroke="rgba(148,163,184,0.28)" strokeWidth="1.5" />
                  <circle cx="280" cy="280" r="270" stroke="rgba(148,163,184,0.22)" strokeWidth="1.5" />
                </svg>

                {/* Pulse rings - fade out when both showCenter and visibleCount are 0 */}
                {[0, 1].map(i => (
                  <div
                    key={i}
                    className="absolute rounded-full transition-opacity duration-700"
                    style={{
                      width: 120, height: 120,
                      top: '50%', left: '50%',
                      border: '1.5px solid rgba(99,102,241,0.28)',
                      animation: `pulse-ring 3s ease-out ${i * 1.5}s infinite`,
                      opacity: showCenter === false && visibleCount === 0 ? 0 : 1,
                      pointerEvents: 'none',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                ))}

                {/* Center logo — appears first, closes last */}
                {showCenter && (
                  <div
                    className="absolute z-20 flex items-center justify-center rounded-[20px] bg-white"
                    style={{
                      width: 86, height: 86,
                      top: '50%', left: '50%',
                      transform: 'translate(-50%, -50%)',
                      border: '1.5px solid rgba(199,210,254,0.7)',
                      boxShadow: '0 0 0 10px rgba(199,210,254,0.18), 0 16px 48px rgba(99,102,241,0.18), 0 2px 10px rgba(0,0,0,0.06)',
                      opacity: 1,
                    }}
                  >
                    <img src={logo} alt="Tuesday Wizard" className="w-[62px] h-[62px] object-contain" />
                  </div>
                )}

                {/* ── Orbital items — appear one by one, orbit, then close ── */}
                {ITEMS.map((item, idx) => {
                  const src = getLogoSrc(item.id)
                  const size = ITEM_SIZE[item.ring]
                  const imgSize = Math.round(size * 0.66)
                  // Orbit icons appear after center icon, and close before center icon
                  const isVisible = visibleCount > idx + 0 && visibleCount <= ITEMS.length + 1 && !isClosing
                  const isClosingVisible = isClosing && visibleCount > idx + 1
                  const show = isVisible || isClosingVisible
                  const closeDelay = getRingCloseDelay(item.ring)

                  return (
                    <div
                      key={item.id}
                      title={item.label}
                      className="absolute z-10 cursor-default select-none"
                      style={{
                        width: size,
                        height: size,
                        top: '50%',
                        left: '50%',
                        /* Orbital translate — runs always so items stay on path */
                        animation: `oi-${item.id} ${RINGS[item.ring].speed}s linear infinite`,
                      }}
                    >
                      {/* Inner visual — handles scale/opacity entrance & exit */}
                      <div
                        className="w-full h-full flex items-center justify-center rounded-full"
                        style={{
                          background: 'white',
                          border: '1.5px solid rgba(226,232,240,0.85)',
                          boxShadow: '0 4px 18px rgba(99,102,241,0.09), 0 1px 6px rgba(0,0,0,0.05)',
                          opacity: show ? 1 : 0,
                          transform: show ? 'scale(1)' : 'scale(0)',
                          transition: show
                            ? 'opacity 0.5s cubic-bezier(0.34,1.56,0.64,1), transform 0.5s cubic-bezier(0.34,1.56,0.64,1)'
                            : `opacity 0.35s ease-in ${closeDelay}s, transform 0.35s ease-in ${closeDelay}s`,
                        }}
                      >
                        {src ? (
                          <img
                            src={src}
                            alt={item.label}
                            style={{ width: imgSize, height: imgSize, objectFit: 'contain' }}
                            draggable={false}
                          />
                        ) : (
                          <span style={{ fontSize: 10, fontWeight: 700, color: item.color, letterSpacing: '0.03em' }}>
                            {item.short}
                          </span>
                        )}
                      </div>
                    </div>
                  )
                })}

                {/* Satellite dots — appear after all items, vanish before close */}
                {DOTS.map(dot => (
                  <div
                    key={dot.id}
                    className="absolute z-10 rounded-full"
                    style={{
                      width: dot.size, height: dot.size,
                      top: '50%', left: '50%',
                      background: dot.color,
                      boxShadow: `0 0 12px ${dot.color}BB, 0 0 4px ${dot.color}`,
                      animation: `oi-${dot.id} ${dot.speed}s linear infinite`,
                      opacity: dotsVisible ? 1 : 0,
                      transition: 'opacity 0.5s ease',
                    }}
                  />
                ))}

              </div>
            </div>

          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-full h-16"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.6))' }}
        />
      </section>
    </>
  )
}
