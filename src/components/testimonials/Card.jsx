import Stars from './Stars'
import AvatarImg from './AvatarImg'

export default function Card({ t }) {
  return (
    <div
      className="w-75 shrink-0 mx-3 rounded-md flex flex-col relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #1c1838 0%, #141228 55%, #111825 100%)',
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.45)',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.6), 0 0 32px ${t.color}22`
        e.currentTarget.style.borderColor = `${t.color}55`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.45)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
      }}
    >
      {/* Colored top accent strip */}
      <div
        className="h-0.75 w-full shrink-0"
        style={{ background: `linear-gradient(90deg, ${t.color}, ${t.color}55, transparent)` }}
      />

      {/* Subtle top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 75% 38% at 50% 0%, ${t.color}14 0%, transparent 65%)` }}
      />

      <div className="relative flex flex-col gap-4 p-5">

        {/* Stars + rating pill */}
        <div className="flex items-center justify-between">
          <Stars />
          <span
            className="text-[10px] font-bold px-2.5 py-0.5 rounded-full"
            style={{
              background: `${t.color}15`,
              color: t.color,
              border: `1px solid ${t.color}35`,
            }}
          >
            5.0 ★
          </span>
        </div>

        {/* Quote */}
        <p
          className="text-[13px] leading-[1.85] line-clamp-4"
          style={{ color: 'rgba(255,255,255,0.68)' }}
        >
          {t.quote}
        </p>

        {/* Divider */}
        <div
          className="h-px w-full"
          style={{ background: 'rgba(255,255,255,0.07)' }}
        />

        {/* Person row */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div
            className="shrink-0 rounded-full p-0.5"
            style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}30)` }}
          >
            <div className="rounded-full overflow-hidden" style={{ background: '#141228' }}>
              <AvatarImg name={t.name} color={t.color} src={t.avatar} size={42} />
            </div>
          </div>

          {/* Name / role / company */}
          <div className="min-w-0 flex-1">
            <p className="text-[13.5px] font-bold text-white leading-tight truncate">{t.name}</p>
            <p className="text-[11px] font-semibold truncate mt-0.5" style={{ color: t.color }}>{t.role}</p>
            <p className="text-[10.5px] truncate mt-0.5" style={{ color: 'rgba(255,255,255,0.28)' }}>{t.company}</p>
          </div>

          {/* Verified icon */}
          <div
            className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
            style={{ background: `${t.color}15`, border: `1px solid ${t.color}38` }}
          >
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
              <path d="M13.5 4L6.5 11.5L3 8" stroke={t.color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  )
}
