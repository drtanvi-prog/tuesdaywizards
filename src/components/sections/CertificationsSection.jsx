import { CERTIFICATES } from '../../data/certificationsData'
import CertificationCard from '../certifications/CertificationCard'

export default function CertificationsSection() {
  const doubled = [...CERTIFICATES, ...CERTIFICATES]

  return (
    <section className="bg-white font-sans overflow-hidden pt-14 pb-12">

      {/* ── Header ── */}
      <div className="text-center mb-10 px-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-purple-600 mb-3">
          Certifications &amp; Partnerships
        </p>
        <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-extrabold text-gray-900 tracking-tight">
          Trusted, certified &amp; partner-verified
        </h2>
      </div>

      {/* ── Marquee ── */}
      <div className="relative">
        {/* Left fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10"
          style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }}
        />
        {/* Right fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10"
          style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }}
        />

        <div className="flex marquee-track" style={{ width: 'max-content' }}>
          {doubled.map((cert, i) => (
            <CertificationCard key={`${cert.id}-${i}`} src={cert.src} alt={cert.alt} />
          ))}
        </div>
      </div>

    </section>
  )
}
