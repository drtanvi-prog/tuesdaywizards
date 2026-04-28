import Button from '../ui/Button'

import outlook from '../../assets/logos/outlook.png'
import teams from '../../assets/logos/teams.png'
import dropbox from '../../assets/logos/dropbox.png'
import slack from '../../assets/logos/slack.png'
import zoom from '../../assets/logos/zoom.png'
import gcal from '../../assets/logos/gcal.png'
import gdrive from '../../assets/logos/gdrive.png'
import gmail from '../../assets/logos/gmail.png'
import linkedin from '../../assets/logos/linkedin.png'
import make from '../../assets/logos/make.webp'
import zapier from '../../assets/logos/zapier.png'
import n8n from '../../assets/logos/n8n.png'
import zendesk from '../../assets/logos/zendesk.png'
import shopify from '../../assets/logos/shopify.svg'
import mailchimp from '../../assets/logos/mailchimp.png'
import hubspot from '../../assets/logos/hubspot.webp'

const LOGOS = [
  { src: outlook, alt: 'Outlook' },
  { src: teams, alt: 'Microsoft Teams' },
  { src: dropbox, alt: 'Dropbox' },
  { src: slack, alt: 'Slack', cls: 'max-h-18 max-w-32' },
  { src: zoom, alt: 'Zoom' },
  { src: gcal, alt: 'Google Calendar' },
  { src: gdrive, alt: 'Google Drive' },
  { src: gmail, alt: 'Gmail' },
  { src: linkedin, alt: 'LinkedIn' },
  { src: make, alt: 'Make' },
  { src: zapier, alt: 'Zapier' },
  { src: n8n, alt: 'n8n' },
  { src: zendesk, alt: 'Zendesk' },
  { src: shopify, alt: 'Shopify' },
  { src: mailchimp, alt: 'Mailchimp' },
  { src: hubspot, alt: 'HubSpot' },
]

export default function IntegrationsSection() {
  const doubled = [...LOGOS, ...LOGOS]

  return (
    <section
      className="relative py-20 lg:py-28 font-sans overflow-hidden"
      style={{ background: 'linear-gradient(120deg,#f8f7fc 0%,#ede9fe 100%)' }}
    >
      <div className="max-w-330 mx-auto px-6 xl:px-12">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-purple-600 mb-4">
            Integrations &amp; Platforms
          </p>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-5">
            Some platforms{' '}
            <span style={{
              background: 'linear-gradient(125deg, #a78bfa 0%, #c084fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              we work with.
            </span>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.85] max-w-2xl mx-auto">
            For more advanced automation scenarios at Tuesday Wizard, we empower your business by
            integrating and automating workflows across the leading platforms you rely on every day.
            Our expertise spans monday.com, Zapier, Make, Google Sheets, Slack, and more — helping
            you streamline processes, reduce manual tasks, and boost productivity.
          </p>
        </div>

        {/* ── Logos ── */}
        <div className="mb-12">

          {/* Mobile only: marquee */}
          <div className="block sm:hidden relative">
            <div className="flex marquee-track" style={{ width: 'max-content' }}>
              {doubled.map((logo, i) => (
                <div
                  key={logo.alt + i}
                  className="flex items-center justify-center h-14 w-24 shrink-0 px-2"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`${logo.cls ?? 'max-h-9 max-w-20'} object-contain opacity-75`}
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: static grid */}
          <div className="hidden sm:flex flex-wrap justify-center gap-x-10 gap-y-8">
            {LOGOS.map(logo => (
              <div
                key={logo.alt}
                className="flex items-center justify-center h-16 w-28 transition-all duration-200 hover:scale-110 hover:opacity-100 opacity-75"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.cls ?? 'max-h-10 max-w-22'} object-contain`}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="flex justify-center">
          <Button
            as="a"
            href="https://calendly.com/tuesdaywizard/30minutestrategy"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            Schedule a Free Discovery Call
          </Button>
        </div>

      </div>
    </section>
  )
}
