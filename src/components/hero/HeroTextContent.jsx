import Button from '../ui/Button'
import HeroTrustBadges from './HeroTrustBadges'

export default function HeroTextContent({ onWatchPromo }) {
  return (
    <div className="flex flex-col gap-6" style={{ animation: 'fade-up .65s ease both' }}>

      <div className="flex flex-col gap-0.5">
        <h1 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[46px] xl:text-[54px] font-extrabold text-gray-900 tracking-tight leading-[1.1]">
          Affordable
        </h1>
        <h1
          className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[46px] xl:text-[54px] font-extrabold tracking-tight leading-[1.1]"
          style={{
            background:           'linear-gradient(125deg, #7e22ce 0%, #9A59B5 50%, #a855f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor:  'transparent',
            backgroundClip:       'text',
          }}
        >
          Monday.com CRM
        </h1>
        <h1 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[46px] xl:text-[54px] font-extrabold text-gray-900 tracking-tight leading-[1.1]">
          &amp; Work Management
        </h1>
        <p className="mt-3 text-[14px] sm:text-[15px] md:text-[17px] font-semibold text-purple-600">
          Automation &amp; integrations from $25/hour
        </p>
      </div>

      <p className="text-[13px] sm:text-[14px] md:text-[15px] text-gray-500 leading-relaxed max-w-125">
        Stop overpaying agencies for CRM builds, automation setups, or Monday.com workflows.
        At Tuesday Wizard, we offer{' '}
        <strong className="text-gray-700 font-semibold">expert system design starting at just $25/hour</strong>
        {' '}so startups and small businesses can scale without financial stress.
      </p>

      <div className="flex flex-wrap gap-2">
        {['Custom CRM Setups', 'Automated Workflows', 'Smart Integrations'].map(f => (
          <span
            key={f}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-purple-100 text-purple-700 text-[13px] font-medium shadow-sm"
          >
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
        <button
          onClick={onWatchPromo}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300/80 bg-white/60 backdrop-blur-sm text-gray-600 hover:text-purple-700 hover:border-purple-300 font-semibold h-12 px-6 text-[15px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300 group"
        >
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors duration-200 shrink-0">
            <svg className="w-3 h-3 translate-x-px text-purple-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          Watch Promo
        </button>
      </div>

      <HeroTrustBadges />
    </div>
  )
}
