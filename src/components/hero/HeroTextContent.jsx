import Button from '../ui/Button'
import HeroTrustBadges from './HeroTrustBadges'

const FEATURES = ['Custom CRM Setups', 'Automated Workflows', 'Smart Integrations']

const CSS = `
  @keyframes text-fade-up {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .htc-root  { animation: text-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both; }
  .htc-badge { animation: text-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
  .htc-h1    { animation: text-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s both; }
  .htc-sub   { animation: text-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.22s both; }
  .htc-body  { animation: text-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.28s both; }
  .htc-chips { animation: text-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.34s both; }
  .htc-btns  { animation: text-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.40s both; }
  .htc-trust { animation: text-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.48s both; }
`

export default function HeroTextContent({ onWatchPromo }) {
  return (
    <>
      <style>{CSS}</style>
      <div className="htc-root flex flex-col gap-7">

        {/* Eyebrow pill */}
        <div className="htc-badge">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-semibold tracking-wide border"
            style={{
              background: 'linear-gradient(135deg, rgba(168,85,247,0.08), rgba(99,102,241,0.06))',
              borderColor: 'rgba(168,85,247,0.2)',
              color: '#7c3aed',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            monday.com Certified Partner
          </span>
        </div>

        {/* Heading */}
        <div className="htc-h1 flex flex-col gap-1">
          <h1 className="text-[32px] sm:text-[38px] lg:text-[44px] xl:text-[52px] font-extrabold text-gray-900 tracking-tight leading-[1.08]">
            Affordable
          </h1>
          <h1
            className="text-[32px] sm:text-[38px] lg:text-[44px] xl:text-[52px] font-extrabold tracking-tight leading-[1.08]"
            style={{
              background: 'linear-gradient(125deg,#6d28d9 0%,#9333ea 50%,#a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Monday.com CRM
          </h1>
          <h1 className="text-[32px] sm:text-[38px] lg:text-[44px] xl:text-[52px] font-extrabold text-gray-900 tracking-tight leading-[1.08]">
            &amp; Work Management
          </h1>
        </div>

        {/* Subline */}
        <p className="htc-sub text-[14px] sm:text-[15px] font-semibold tracking-wide"
          style={{ color: '#7c3aed' }}
        >
          Automation &amp; integrations from $25/hour
        </p>

        {/* Body */}
        <p className="htc-body text-[13.5px] sm:text-[14.5px] text-gray-500 leading-relaxed max-w-xl">
          Stop overpaying agencies for CRM builds, automation setups, or Monday.com workflows.
          At Tuesday Wizard, we offer{' '}
          <strong className="text-gray-700 font-semibold">expert system design starting at just $25/hour</strong>
          {' '}so startups and small businesses can scale without financial stress.
        </p>

        {/* Feature chips */}
        <div className="htc-chips flex flex-wrap gap-2">
          {FEATURES.map(f => (
            <span
              key={f}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium border"
              style={{
                background: 'rgba(255,255,255,0.7)',
                borderColor: 'rgba(168,85,247,0.18)',
                color: '#6d28d9',
                backdropFilter: 'blur(8px)',
              }}
            >
              <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4L19 7"/>
              </svg>
              {f}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="htc-btns flex flex-wrap items-center gap-4">
          <Button
            as="a"
            href="https://calendly.com/tuesdaywizard/30minutestrategy"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="text-[15px]"
          >
            Schedule a Free Discovery Call
          </Button>

          <Button
            onClick={onWatchPromo}
            variant="secondary"
            className="group text-[15px]"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors duration-200 shrink-0">
              <svg className="w-3 h-3 translate-x-px text-purple-700" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </span>
            Watch Promo
          </Button>
        </div>

        {/* Trust badges */}
        <div className="htc-trust">
          <HeroTrustBadges />
        </div>

      </div>
    </>
  )
}
