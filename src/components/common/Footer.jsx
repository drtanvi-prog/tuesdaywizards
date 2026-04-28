
import logo from '../../assets/logo-without-bg.png'
import Button from '../ui/Button'
import { Mail, Calendar } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Portfolio', href: '#portfolio' },
]

const SERVICES = [
  'Workspace Setup',
  'Workflow Automation',
  'Third-Party Integrations',
  'CRM Solutions',
  'Training & Onboarding',
]

const UpworkIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 shrink-0">
    <path d="M13.9531 12.0977C13.2891 12.0977 12.6641 11.8164 12.1016 11.3594L12.2383 10.7109L12.2422 10.6875C12.3672 10 12.7539 8.84375 13.9531 8.84375C14.8516 8.84375 15.582 9.57422 15.582 10.4727C15.582 11.3711 14.8516 12.0977 13.9531 12.0977ZM13.9531 7.19531C12.4219 7.19531 11.2383 8.1875 10.7539 9.82422C10.0195 8.71875 9.46094 7.39453 9.13672 6.27734H7.48828V10.5625C7.48828 11.4102 6.80078 12.0977 5.95312 12.0977C5.10547 12.0977 4.41797 11.4102 4.41797 10.5625V6.27344H2.77344V10.5586C2.77344 12.3125 4.19922 13.7539 5.95312 13.7539C7.70703 13.7539 9.13281 12.3125 9.13281 10.5586V9.83984C9.45312 10.5078 9.84375 11.1836 10.3203 11.7773L9.3125 16.5195H10.9961L11.7266 13.082C12.3672 13.4922 13.1016 13.75 13.9453 13.75C15.75 13.75 17.2188 12.2734 17.2188 10.4648C17.2227 8.66406 15.7578 7.19531 13.9531 7.19531Z" />
  </svg>
)

function FooterLink({ href, children, external }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex items-center gap-2 text-[13px] transition-colors duration-150 whitespace-nowrap"
      style={{ color: 'rgba(255,255,255,0.46)' }}
      onMouseEnter={e => e.currentTarget.style.color = '#c084fc'}
      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.46)'}
    >
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="font-sans relative overflow-hidden"
      style={{ background: 'linear-gradient(155deg, #0d0b1e 0%, #111028 45%, #0c1220 100%)' }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: '700px',
          height: '300px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(122,63,153,0.18) 0%, transparent 70%)',
          filter: 'blur(24px)',
        }}
      />

      {/* ── CTA Band ── */}
      <div
        className="relative border-b"
        style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      >
        <div className="max-w-330 mx-auto px-6 xl:px-12 py-10 lg:py-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          {/* Left: text */}
          <div className="max-w-xl">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-purple-400 mb-2">
              Get Started Today
            </p>
            <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-extrabold text-white tracking-tight leading-tight mb-3">
              Unleash Your{' '}
              <span style={{
                background: 'linear-gradient(125deg, #a78bfa 0%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Business Potential
              </span>
            </h2>
            <p className="text-[13px] leading-[1.75] mb-2" style={{ color: 'rgba(255,255,255,0.48)' }}>
              Discover how to streamline your workflows, eliminate repetitive tasks,
              and take full control of your business operations using monday.com.
            </p>
            <p className="text-[12.5px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.34)' }}>
              Whether you're just starting out or ready to supercharge your monday.com setup,{' '}
              <span className="font-semibold" style={{ color: 'rgba(255,255,255,0.55)' }}>Tuesday Wizard</span>{' '}
              is your ultimate partner. From project management to CRM and beyond, Tuesday Wizard makes
              complexity simple, automation effortless, and growth inevitable.
              Ready to unlock the full power of monday.com?
            </p>
          </div>

          {/* Right: buttons + email */}
          <div className="flex flex-col gap-4 shrink-0">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                as="a"
                href="https://calendly.com/tuesdaywizard/30minutestrategy"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="text-[13.5px] px-6 justify-center text-center sm:text-left"
              >
                <span className="block text-center sm:text-left">Claim Your Free Consultation</span>
              </Button>
              <Button
                as="a"
                href="https://monday.com/?utm_campaign=partnerstack&utm_medium=diddly2965&utm_source=partner&pscd=try.monday.com&ps_partner_key=ZGlkZGx5Mjk2NQ&ps_xid=5Bm7mq2GklTTcI&gsxid=5Bm7mq2GklTTcI&gspk=ZGlkZGx5Mjk2NQ"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="text-[13.5px] px-6 justify-center text-center sm:text-left"
              >
                <span className="block text-center sm:text-left">Sign Up For a Free Trial</span>
              </Button>
            </div>
            <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.28)' }}>
              Send us an email:{' '}
              <a
                href="mailto:drtanvi@tuesdaywizards.com"
                className="transition-colors duration-150"
                style={{ color: 'rgba(192,132,252,0.7)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#c084fc'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(192,132,252,0.7)'}
              >
                drtanvi@tuesdaywizards.com
              </a>
            </p>
          </div>

        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="relative max-w-330 mx-auto px-6 xl:px-12 py-10 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">

          {/* Col 1 — Brand */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start">
            <img src={logo} alt="Tuesday Wizard" className="h-13 w-auto object-contain mb-3 mx-auto lg:mx-0" />
            <p className="text-[12.5px] leading-[1.75] text-center lg:text-left" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Your trusted monday.com Certified Partner — automating workflows and helping teams work smarter.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(255,255,255,0.26)' }}>
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map(l => (
                <li key={l.label}><FooterLink href={l.href}>{l.label}</FooterLink></li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(255,255,255,0.26)' }}>
              Services
            </p>
            <ul className="flex flex-col gap-3">
              {SERVICES.map(s => (
                <li key={s}><FooterLink href="#services">{s}</FooterLink></li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="col-span-2 lg:col-span-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(255,255,255,0.26)' }}>
              Contact
            </p>
            <ul className="flex flex-col gap-3.5">
              <li>
                <FooterLink href="mailto:drtanvi@tuesdaywizards.com">
                  <Mail size={16} className="shrink-0" /> drtanvi@tuesdaywizards.com
                </FooterLink>
              </li>
              <li>
                <FooterLink href="https://calendly.com/tuesdaywizard/30minutestrategy" external>
                  <Calendar size={16} className="shrink-0" /> Book a Strategy Call
                </FooterLink>
              </li>
              <li>
                <FooterLink href="https://www.upwork.com/agencies/tuesdaywizard/" external>
                  <UpworkIcon /> Find us on Upwork
                </FooterLink>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-330 mx-auto px-6 xl:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11.5px]" style={{ color: 'rgba(255,255,255,0.22)' }}>
            <span>© {new Date().getFullYear()} Tuesday Wizard · All rights reserved.</span>
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: 'Privacy Policy', href: 'https://www.mondaywizard.com/privacy-policy', external: true },
              { label: 'Terms of Service', href: '#', external: false },
            ].map(t => (
              <a
                key={t.label}
                href={t.href}
                {...(t.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-[11.5px] transition-colors duration-150"
                style={{ color: 'rgba(255,255,255,0.22)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#c084fc'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.22)'}
              >
                {t.label}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
