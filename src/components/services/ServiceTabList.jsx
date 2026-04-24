export default function ServiceTabList({ services, active, onSwitch }) {
  return (
    <div className="w-full lg:w-72 xl:w-80 shrink-0">

      {/* Mobile: horizontal scroll */}
      <div className="flex lg:hidden gap-2 overflow-x-auto pb-2 styled-scrollbar">
        {services.map((s, i) => (
          <button
            key={s.id}
            onClick={() => onSwitch(i)}
            className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200 border"
            style={{
              background: active === i ? '#7c3aed' : 'rgba(255,255,255,0.06)',
              color:      active === i ? 'white' : 'rgba(255,255,255,0.5)',
              border:     `1px solid ${active === i ? '#7c3aed' : 'rgba(255,255,255,0.08)'}`,
            }}
          >
            <s.Icon />
            {s.label}
          </button>
        ))}
      </div>

      {/* Desktop: vertical list */}
      <div
        className="hidden lg:flex flex-col divide-y"
        style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, overflow: 'hidden' }}
      >
        {services.map((s, i) => (
          <button
            key={s.id}
            onClick={() => onSwitch(i)}
            className="group w-full flex items-center gap-4 px-5 py-4 text-left transition-all duration-200 relative overflow-hidden"
            style={{
              background:  active === i ? 'rgba(124,58,237,0.22)' : 'rgba(255,255,255,0.03)',
              borderColor: 'rgba(255,255,255,0.06)',
            }}
          >
            {/* Active left bar */}
            {active === i && (
              <span
                className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full"
                style={{ background: '#7c3aed' }}
              />
            )}

            {/* Icon */}
            <span
              className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 transition-all duration-200"
              style={{
                background: active === i ? '#7c3aed' : 'rgba(255,255,255,0.07)',
                color:      active === i ? 'white' : 'rgba(255,255,255,0.4)',
                boxShadow:  active === i ? '0 4px 12px rgba(124,58,237,0.4)' : 'none',
              }}
            >
              <s.Icon />
            </span>

            <div className="flex-1 min-w-0">
              <p
                className="text-[14px] font-bold leading-tight"
                style={{ color: active === i ? 'white' : 'rgba(255,255,255,0.6)' }}
              >
                {s.label}
              </p>
              <p
                className="text-[12px] mt-0.5 truncate"
                style={{ color: active === i ? 'rgba(167,139,250,0.8)' : 'rgba(255,255,255,0.3)' }}
              >
                {s.tagline}
              </p>
            </div>

            <svg
              className="w-4 h-4 shrink-0 transition-all duration-200"
              style={{ color: active === i ? '#a78bfa' : 'rgba(255,255,255,0.15)', opacity: active === i ? 1 : 0 }}
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        ))}
      </div>
    </div>
  )
}
