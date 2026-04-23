import { CheckIcon, ArrowRight } from './ServiceIcons'

export default function ServiceContentPanel({ svc, visible }) {
  return (
    <div
      className="flex-1 w-full min-w-0"
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.25s ease, transform 0.25s ease',
      }}
    >
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background:     'rgba(255,255,255,0.05)',
          border:         '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(20px)',
          boxShadow:      '0 16px 48px rgba(0,0,0,0.35)',
        }}
      >
        {/* Top accent bar — solid */}
        <div className="h-0.75 w-full" style={{ background: '#7c3aed' }} />

        <div className="p-7 sm:p-10">

          {/* Stat badge */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex items-center gap-2.5 px-4 py-2 rounded-lg"
              style={{ background: 'rgba(124,58,237,0.18)', border: '1px solid rgba(124,58,237,0.3)' }}
            >
              <span className="text-[22px] font-black text-white">{svc.stat.value}</span>
              <span className="text-[12px] text-purple-300 font-medium">{svc.stat.label}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-extrabold text-white leading-snug tracking-tight mb-3">
            {svc.title}
          </h3>

          {/* Description */}
          <p
            className="text-[14px] sm:text-[15px] leading-relaxed mb-8 max-w-2xl"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            {svc.desc}
          </p>

          {/* Feature list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {svc.features.map(f => (
              <div
                key={f}
                className="flex items-start gap-3 px-4 py-3 rounded-lg"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <CheckIcon />
                <span
                  className="text-[13px] sm:text-[14px] font-medium leading-snug"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                >
                  {f}
                </span>
              </div>
            ))}
          </div>

          {/* Integration logos */}
          {svc.logos && (
            <div className="mb-8">
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-3"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                Platforms we connect
              </p>
              <div className="flex flex-wrap gap-2">
                {svc.logos.map(logo => (
                  <div
                    key={logo.alt}
                    className="flex items-center justify-center w-10 h-10 rounded-lg hover:scale-110 transition-transform duration-200"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
                    title={logo.alt}
                  >
                    <img src={logo.src} alt={logo.alt} className={`${logo.large ? 'w-8 h-8' : 'w-6 h-6'} object-contain`} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div
            className="flex flex-wrap items-center gap-4 pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            <a
              href="https://calendly.com/tuesdaywizard/30minutestrategy?month=2026-04"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-lg font-semibold text-[14px] text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: '#7c3aed',
                boxShadow:  '0 4px 16px rgba(124,58,237,0.35)',
              }}
            >
              Book Free Consultant
              <ArrowRight />
            </a>
            <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Free 30-min · No commitment
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}
