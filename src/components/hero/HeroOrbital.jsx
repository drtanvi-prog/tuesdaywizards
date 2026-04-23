import { useState, useEffect, useMemo } from 'react'
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

const ORBITAL_BASE = 560

const RINGS = {
  1: { radius: 120, speed: 22, dir: 1 },
  2: { radius: 200, speed: 36, dir: -1 },
  3: { radius: 270, speed: 54, dir: 1 },
}

const ITEMS = [
  { id: 'mwm',       label: 'monday Work Mgmt',    short: 'mW', color: '#6161FF', ring: 1, angle: 270 },
  { id: 'mcrm',      label: 'monday CRM',           short: 'mC', color: '#00C2A0', ring: 1, angle: 30  },
  { id: 'mdev',      label: 'monday Dev',           short: 'mD', color: '#00854D', ring: 1, angle: 150 },
  { id: 'zapier',    label: 'Zapier',               short: 'Zp', color: '#FF4A00', ring: 2, angle: 0   },
  { id: 'make',      label: 'Make',                 short: 'Mk', color: '#7B4EFB', ring: 2, angle: 72  },
  { id: 'n8n',       label: 'n8n',                  short: 'n8', color: '#D9265C', ring: 2, angle: 144 },
  { id: 'slack',     label: 'Slack',                short: 'Sl', color: '#4A154B', ring: 2, angle: 216 },
  { id: 'zoom',      label: 'Zoom',                 short: 'Zm', color: '#2D8CFF', ring: 2, angle: 288 },
  { id: 'teams',     label: 'MS Teams',             short: 'Te', color: '#6264A7', ring: 3, angle: 0   },
  { id: 'gmail',     label: 'Gmail',                short: 'Gm', color: '#EA4335', ring: 3, angle: 30  },
  { id: 'gdrive',    label: 'Google Drive',         short: 'GD', color: '#0F9D58', ring: 3, angle: 60  },
  { id: 'gcal',      label: 'Google Calendar',      short: 'GC', color: '#4285F4', ring: 3, angle: 90  },
  { id: 'shopify',   label: 'Shopify',              short: 'Sh', color: '#96BF48', ring: 3, angle: 120 },
  { id: 'salesforce',label: 'Salesforce',           short: 'Sf', color: '#00A1E0', ring: 3, angle: 150 },
  { id: 'hubspot',   label: 'HubSpot',              short: 'Hs', color: '#FF7A59', ring: 3, angle: 180 },
  { id: 'mailchimp', label: 'Mailchimp',            short: 'Mc', color: '#F5A623', ring: 3, angle: 210 },
  { id: 'zendesk',   label: 'Zendesk',              short: 'Zd', color: '#03363D', ring: 3, angle: 240 },
  { id: 'outlook',   label: 'Outlook',              short: 'Ol', color: '#0078D4', ring: 3, angle: 270 },
  { id: 'dropbox',   label: 'Dropbox',              short: 'Db', color: '#0061FF', ring: 3, angle: 300 },
  { id: 'linkedin',  label: 'LinkedIn',             short: 'Li', color: '#0077B5', ring: 3, angle: 330 },
]

const DOTS = [
  { id: 'dot1', ring: 1, angle: 60,  color: '#818CF8', size: 8, speed: 7  },
  { id: 'dot2', ring: 2, angle: 215, color: '#6366F1', size: 8, speed: 11 },
  { id: 'dot3', ring: 3, angle: 145, color: '#A5B4FC', size: 8, speed: 17 },
]

const ITEM_SIZE = { 1: 48, 2: 52, 3: 46 }
const STEPS = 36

const STAGGER_MS          = 50
const ORBIT_HOLD          = 4000
const ICONS_CLOSE_DURATION = 1000
const RINGS_FADE_DURATION  = 950
const CENTER_FADE_DURATION = 500
const PAUSE_BEFORE_RESTART = 300

function buildKeyframes(list) {
  return list
    .map(({ id, angle, ring }) => {
      const { radius, dir } = RINGS[ring]
      const stops = Array.from({ length: STEPS + 1 }, (_, i) => {
        const deg = angle + dir * (i / STEPS) * 360
        const rad = (deg * Math.PI) / 180
        const tx  = (radius * Math.cos(rad)).toFixed(2)
        const ty  = (radius * Math.sin(rad)).toFixed(2)
        const pct = ((i / STEPS) * 100).toFixed(1)
        return `${pct}%{transform:translate(calc(-50% + ${tx}px),calc(-50% + ${ty}px))}`
      }).join('')
      return `@keyframes oi-${id}{${stops}}`
    })
    .join('')
}

const getRingCloseDelay = (ring) => {
  if (ring === 3) return '0s'
  if (ring === 2) return '0.28s'
  return '0.56s'
}

function useOrbitalScale() {
  const [scale, setScale] = useState(1)
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if      (w < 480)  setScale(0.46)
      else if (w < 640)  setScale(0.56)
      else if (w < 768)  setScale(0.66)
      else if (w < 1024) setScale(0.78)
      else               setScale(1)
    }
    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])
  return scale
}

export default function HeroOrbital() {
  const css          = useMemo(() => buildKeyframes([...ITEMS, ...DOTS]), [])
  const orbitalScale = useOrbitalScale()
  const orbitalSize  = Math.round(ORBITAL_BASE * orbitalScale)

  const [phase,        setPhase]        = useState('center')
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    let timer

    if (phase === 'center') {
      timer = setTimeout(() => setPhase('entering'), 900)

    } else if (phase === 'entering') {
      if (visibleCount < ITEMS.length) {
        timer = setTimeout(() => setVisibleCount(c => c + 1), STAGGER_MS)
      } else {
        timer = setTimeout(() => setPhase('orbiting'), 300)
      }

    } else if (phase === 'orbiting') {
      timer = setTimeout(() => setPhase('closing-icons'), ORBIT_HOLD)

    } else if (phase === 'closing-icons') {
      timer = setTimeout(() => setPhase('closing-rings'), ICONS_CLOSE_DURATION)

    } else if (phase === 'closing-rings') {
      timer = setTimeout(() => setPhase('closing-center'), RINGS_FADE_DURATION)

    } else if (phase === 'closing-center') {
      timer = setTimeout(() => setPhase('pausing'), CENTER_FADE_DURATION)

    } else if (phase === 'pausing') {
      timer = setTimeout(() => {
        setVisibleCount(0)
        setPhase('center')
      }, PAUSE_BEFORE_RESTART)
    }

    return () => clearTimeout(timer)
  }, [phase, visibleCount])

  const centerOpacity = phase === 'closing-center' || phase === 'pausing' ? 0 : 1

  const getRingStyle = (ringIdx) => {
    const hidden = ['center', 'closing-rings', 'closing-center', 'pausing'].includes(phase)
    const delay  = phase === 'entering'
      ? `${ringIdx * 220}ms`
      : phase === 'closing-rings'
        ? `${(2 - ringIdx) * 220}ms`
        : '0ms'
    return {
      opacity:    hidden ? 0 : 1,
      transition: `opacity 0.45s ease ${delay}`,
    }
  }

  const dotsVisible = phase === 'orbiting'

  const getItemVisible = (idx) => {
    if (phase === 'center' || phase === 'pausing') return false
    if (phase === 'entering') return idx < visibleCount
    if (phase === 'orbiting') return true
    return false
  }

  return (
    <div className="flex items-center justify-center" style={{ animation: 'fade-up .9s ease both' }}>
      <style>{css}</style>
      <div style={{ width: orbitalSize, height: orbitalSize, position: 'relative' }}>
        <div style={{
          position:        'absolute',
          width:           ORBITAL_BASE,
          height:          ORBITAL_BASE,
          top:             '50%',
          left:            '50%',
          transform:       `translate(-50%, -50%) scale(${orbitalScale})`,
          transformOrigin: 'center center',
        }}>

          {/* Ambient glow */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 48% 52%, rgba(199,210,254,0.55) 0%, rgba(221,214,254,0.3) 38%, transparent 68%)',
              opacity:    centerOpacity,
              transition: 'opacity 0.5s ease',
            }}
          />

          {/* Ring circles */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 560 560"
            fill="none"
          >
            <circle
              cx="280" cy="280" r="260"
              stroke="rgba(148,163,184,0.12)" strokeWidth="1"
              style={{ opacity: centerOpacity, transition: `opacity ${CENTER_FADE_DURATION}ms ease` }}
            />
            <circle
              cx="280" cy="280" r="120"
              stroke="rgba(148,163,184,0.38)" strokeWidth="1.5" strokeDasharray="5 4"
              style={getRingStyle(0)}
            />
            <circle
              cx="280" cy="280" r="200"
              stroke="rgba(148,163,184,0.28)" strokeWidth="1.5"
              style={getRingStyle(1)}
            />
            <circle
              cx="280" cy="280" r="270"
              stroke="rgba(148,163,184,0.22)" strokeWidth="1.5"
              style={getRingStyle(2)}
            />
          </svg>

          {/* Pulse rings */}
          {[0, 1].map(i => (
            <div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 120, height: 120,
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                border:    '1.5px solid rgba(99,102,241,0.28)',
                animation: `pulse-ring 3s ease-out ${i * 1.5}s infinite`,
                opacity:   centerOpacity,
                transition: `opacity ${CENTER_FADE_DURATION}ms ease`,
              }}
            />
          ))}

          {/* Center logo */}
          <div
            className="absolute z-20 flex items-center justify-center rounded-[20px] bg-white"
            style={{
              width: 86, height: 86,
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              border:    '1.5px solid rgba(199,210,254,0.7)',
              boxShadow: '0 0 0 10px rgba(199,210,254,0.18), 0 16px 48px rgba(99,102,241,0.18), 0 2px 10px rgba(0,0,0,0.06)',
              animation: 'float-y 4.5s ease-in-out infinite',
              opacity:   centerOpacity,
              transition: `opacity ${CENTER_FADE_DURATION}ms ease`,
            }}
          >
            <img src={logo} alt="Tuesday Wizard" className="w-15.5 h-15.5 object-contain" />
          </div>

          {/* Orbital items */}
          {ITEMS.map((item, idx) => {
            const src       = getLogoSrc(item.id)
            const size      = ITEM_SIZE[item.ring]
            const imgSize   = Math.round(size * 0.66)
            const isVisible = getItemVisible(idx)
            const closeDelay = getRingCloseDelay(item.ring)

            return (
              <div
                key={item.id}
                title={item.label}
                className="absolute z-10 cursor-default select-none"
                style={{
                  width: size, height: size,
                  top: '50%', left: '50%',
                  animation: `oi-${item.id} ${RINGS[item.ring].speed}s linear infinite`,
                }}
              >
                <div
                  className="w-full h-full flex items-center justify-center rounded-full"
                  style={{
                    background: 'white',
                    border:     '1.5px solid rgba(226,232,240,0.85)',
                    boxShadow:  '0 4px 18px rgba(99,102,241,0.09), 0 1px 6px rgba(0,0,0,0.05)',
                    opacity:    isVisible ? 1 : 0,
                    transform:  isVisible ? 'scale(1)' : 'scale(0)',
                    transition: isVisible
                      ? 'opacity 0.45s cubic-bezier(0.34,1.56,0.64,1), transform 0.45s cubic-bezier(0.34,1.56,0.64,1)'
                      : `opacity 0.35s ease-in ${closeDelay}, transform 0.35s ease-in ${closeDelay}`,
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

          {/* Satellite dots */}
          {DOTS.map(dot => (
            <div
              key={dot.id}
              className="absolute z-10 rounded-full pointer-events-none"
              style={{
                width: dot.size, height: dot.size,
                top: '50%', left: '50%',
                background: dot.color,
                boxShadow:  `0 0 12px ${dot.color}BB, 0 0 4px ${dot.color}`,
                animation:  `oi-${dot.id} ${dot.speed}s linear infinite`,
                opacity:    dotsVisible ? 1 : 0,
                transition: 'opacity 0.5s ease',
              }}
            />
          ))}

        </div>
      </div>
    </div>
  )
}
