import TrustpilotWidget from '../common/TrustpilotWidget'
import mondaycomLogo from '../../assets/mondaycom.png'

export default function HeroTrustBadges() {
  return (
    <div className="flex flex-row items-center gap-3 sm:gap-5 pt-2">

      {/* Mobile: smaller Trustpilot */}
      <div className="sm:hidden shrink-0">
        <TrustpilotWidget width="118px" height="80px" />
      </div>
      {/* Desktop: full Trustpilot */}
      <div className="hidden sm:block shrink-0">
        <TrustpilotWidget width="160px" height="110px" />
      </div>

      <div className="shrink-0" style={{ width: 1, height: 32, background: '#cbd5e1' }} />

      <img
        src={mondaycomLogo}
        alt="monday.com Certified Partner"
        className="h-7 sm:h-12 w-auto object-contain shrink-0"
      />
    </div>
  )
}
