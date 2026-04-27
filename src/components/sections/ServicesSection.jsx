import { useState } from 'react'
import { SERVICES } from '../../data/servicesData'
import ServiceTabList from '../services/ServiceTabList'
import ServiceContentPanel from '../services/ServiceContentPanel'
import zapierLogo  from '../../assets/logos/zapier.png'
import slackLogo   from '../../assets/logos/slack.png'
import hubspotLogo from '../../assets/logos/hubspot.webp'
import n8nLogo     from '../../assets/logos/n8n.png'

export default function ServicesSection() {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(true)

  const switchTab = (idx) => {
    if (idx === active) return
    setVisible(false)
    setTimeout(() => { setActive(idx); setVisible(true) }, 180)
  }

  return (
    <section
      id="services"
      className="relative overflow-hidden font-sans"
      style={{ background: 'linear-gradient(135deg, #0f0c1e 0%, #131130 40%, #0e1628 100%)' }}
    >
      <div className="relative max-w-330 mx-auto px-5 sm:px-6 xl:px-12 py-16 lg:py-24">

        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-purple-400 mb-3">Our Services</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-extrabold text-white tracking-tight leading-tight max-w-2xl">
              We offer a range of services to help you{' '}
              <span style={{
                background: 'linear-gradient(125deg, #a78bfa 0%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>maximize</span>
              {' '}monday.com's potential
            </h2>

            {/* Logo strip */}
            <div className="flex items-center gap-2 shrink-0">
              {[zapierLogo, n8nLogo, slackLogo, hubspotLogo].map((src, i) => {
                const isSlack = src === slackLogo
                return (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <img src={src} alt="" className={`${isSlack ? 'w-7 h-7' : 'w-5 h-5'} object-contain`} />
                  </div>
                )
              })}
              <span className="text-[12px] text-white/40 ml-1">+more</span>
            </div>
          </div>
        </div>

        {/* Tab layout */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start">
          <ServiceTabList services={SERVICES} active={active} onSwitch={switchTab} />
          <ServiceContentPanel svc={SERVICES[active]} visible={visible} />
        </div>

      </div>
    </section>
  )
}
