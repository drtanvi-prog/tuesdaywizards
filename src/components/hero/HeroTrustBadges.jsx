import TrustpilotWidget from '../common/TrustpilotWidget'
import mondaycomLogo from '../../assets/mondaycom.png'

export default function HeroTrustBadges() {
  return (
    <div className="flex flex-wrap items-center gap-5 pt-2">
      <div className="shrink-0">
        <TrustpilotWidget />
      </div>
      <div style={{ width: 1, height: 44, background: '#cbd5e1', flexShrink: 0 }} />
      <img
        src={mondaycomLogo}
        alt="monday.com Certified Partner"
        className="h-14 w-auto object-contain shrink-0"
      />
    </div>
  )
}
