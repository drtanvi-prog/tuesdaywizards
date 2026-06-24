import { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo-without-bg.png'
import Button from '../ui/Button'
import { FaLinkedin, FaSquareUpwork } from 'react-icons/fa6'
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react'

const NAV = [
  { label: 'Services',     href: '#services' },
  { label: 'About Us',     href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  // { label: 'Portfolio',    href: '#portfolio' },
  { label: 'Contact Us',      href: '#contact' },
]

const WizIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <rect width="28" height="28" rx="7" fill="#6C47FF" />
    <path d="M7 9L11 19L14 13L17 19L21 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CSS = `
  @keyframes header-slide-down {
    from { opacity: 0; transform: translateY(-10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .header-anim { animation: header-slide-down 0.5s cubic-bezier(0.22,1,0.36,1) both; }
  .header-scrolled {
    background: rgba(244,236,249,0.95) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    border-bottom: 1px solid rgba(168,85,247,0.15) !important;
    box-shadow: 0 2px 16px rgba(109,40,217,0.05) !important;
  }
  .header-top {
    border-bottom: 1px solid #F4ECF9 !important;
    box-shadow: none !important;
  }
  @keyframes dropdown-in {
    from { opacity: 0; transform: translateY(6px) scale(0.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  .dropdown-anim { animation: dropdown-in 0.18s cubic-bezier(0.22,1,0.36,1) both; }
`

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActive]  = useState('')
  const [scrolled, setScrolled]     = useState(false)
  const [appsOpen, setAppsOpen]     = useState(false)
  const headerRef = useRef(null)
  const appsRef   = useRef(null)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isHome = pathname === '/'

  const handleNavClick = (e, link) => {
    if (!isHome) {
      e.preventDefault()
      navigate('/', { state: { scrollTo: link.href.replace('#', '') } })
    }
    setMobileOpen(false)
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const ids = NAV.map(l => l.href.replace('#', ''))
      let found = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el) {
          const r = el.getBoundingClientRect()
          if (r.top <= 72 && r.bottom > 72) { found = id; break }
        }
      }
      setActive(found)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return
    const handler = e => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setMobileOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [mobileOpen])

  useEffect(() => {
    if (!appsOpen) return
    const handler = e => {
      if (appsRef.current && !appsRef.current.contains(e.target)) setAppsOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [appsOpen])

  const goToWizClone = () => {
    setAppsOpen(false)
    setMobileOpen(false)
    navigate('/wizclone')
  }

  return (
    <>
      <style>{CSS}</style>
      <header
        ref={headerRef}
        className={`header-anim font-sans sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'header-scrolled' : 'header-top bg-[#F4ECF9]'}`}
      >
        <div className="max-w-330 mx-auto px-5 sm:px-6 xl:px-12">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <a
              href="#"
              onClick={e => {
                e.preventDefault()
                isHome ? window.scrollTo({ top: 0, behavior: 'smooth' }) : navigate('/')
              }}
              className="shrink-0 flex items-center gap-2.5"
            >
              <img src={logo} alt="Tuesday Wizard" className="h-9 lg:h-11 w-auto object-contain" />
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV.map(link => {
                const id = link.href.replace('#', '')
                const active = isHome && activeSection === id
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={e => handleNavClick(e, link)}
                    className={`relative px-4 py-2 text-[14px] font-medium rounded-xl transition-all duration-200 ${
                      active ? 'text-purple-700' : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-purple-500" />
                    )}
                  </a>
                )
              })}

              {/* ── Our Apps dropdown ── */}
              <div
                ref={appsRef}
                className="relative"
                onMouseEnter={() => setAppsOpen(true)}
                onMouseLeave={() => setAppsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1.5 px-4 py-2 text-[14px] font-medium rounded-xl transition-all duration-200 ${
                    appsOpen ? 'text-purple-700 bg-purple-50' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Our Apps
                  <ChevronDown
                    className="w-3.5 h-3.5 transition-transform duration-200"
                    style={{ transform: appsOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                    strokeWidth={2.5}
                  />
                </button>

                {appsOpen && (
                  /* invisible bridge fills the mt-3 gap so hover doesn't break */
                  <div className="absolute top-full right-0 w-full h-3 z-50" />
                )}
                {appsOpen && (
                  <div
                    className="dropdown-anim absolute top-full right-0 mt-3 z-50 rounded-md bg-white"
                    style={{
                      width: 320,
                      border: '1px solid rgba(0,0,0,0.08)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)',
                      padding: '8px',
                    }}
                  >
                    {/* ── Header ── */}
                    <div className="flex items-center justify-between px-3 pt-2 pb-2.5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">Our Apps</p>
                      <span className="text-[10px] font-medium text-gray-300">1 app</span>
                    </div>

                    {/* ── WizClone ── */}
                    <button
                      onClick={goToWizClone}
                      className="group w-full text-left flex items-center gap-3 p-3 transition-all duration-150"
                      style={{ borderRadius: 12 }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#f5f3ff' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                    >
                      <div className="shrink-0 rounded-xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(108,71,255,0.25)' }}>
                        <WizIcon size={40} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-[13.5px] font-bold text-gray-900">WizClone</span>
                          <span className="px-1.5 py-px rounded text-[9px] font-bold uppercase tracking-wider"
                            style={{ background: 'rgba(108,71,255,0.1)', color: '#6C47FF' }}>
                            New
                          </span>
                        </div>
                        <p className="text-[11.5px] text-gray-400 leading-snug">
                          Template &amp; subitem automation
                        </p>
                      </div>
                      <ArrowUpRight
                        className="w-3.5 h-3.5 shrink-0 text-gray-300 group-hover:text-purple-500 transition-colors duration-150"
                        strokeWidth={2.5}
                      />
                    </button>

                    {/* ── Divider ── */}
                    <div className="mx-3 my-2" style={{ height: 1, background: 'rgba(0,0,0,0.06)' }} />

                    {/* ── More coming note ── */}
                    <div className="flex items-center gap-2 px-3 pb-1">
                      <span className="text-[11px] text-gray-300">More apps coming soon</span>
                      <div className="flex gap-1 ml-auto">
                        {[0,1,2].map(i => (
                          <div key={i} className="w-4 h-4 rounded"
                            style={{ background: i === 0 ? 'rgba(108,71,255,0.12)' : 'rgba(0,0,0,0.05)', border: '1px dashed rgba(0,0,0,0.1)' }} />
                        ))}
                      </div>
                    </div>

                    {/* ── Footer ── */}
                    <div
                      className="flex items-center gap-2 px-3 py-2.5 mt-2"
                      style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
                    >
                      <svg width="26" height="17" viewBox="0 0 135 89" fill="none">
                        <path d="M16.2298 79.5828C13.3565 79.552 10.5429 78.7584 8.07701 77.2831C5.61112 75.8078 3.58148 73.7038 2.19583 71.1865C0.829424 68.6795 0.165343 65.85 0.273752 62.9969C0.38216 60.1438 1.25909 57.3729 2.81179 54.9768L32.4008 9.28653C33.9064 6.83703 36.0362 4.83183 38.5719 3.4764C41.1076 2.12097 43.958 1.46401 46.8311 1.57287C49.7043 1.68174 52.4969 2.5525 54.9228 4.09593C57.3486 5.63936 59.3205 7.79997 60.6364 10.3564C61.9411 12.8997 62.5333 15.7486 62.3501 18.6012C62.1669 21.4537 61.2151 24.2035 59.5958 26.559L30.0382 72.2189C28.5447 74.5115 26.4953 76.389 24.081 77.6766C21.6667 78.9641 18.9658 79.6199 16.2298 79.5828Z" fill="#FB275D"/>
                        <path d="M65.8814 79.1081C63.0066 79.0485 60.1997 78.2231 57.7503 76.717C55.3009 75.2109 53.2975 73.0787 51.9469 70.5403C50.61 68.0174 49.9791 65.1804 50.1209 62.3288C50.2627 59.4771 51.1721 56.7167 52.7527 54.339L82.8588 9.02108C84.3736 6.54769 86.5239 4.52581 89.0858 3.16608C91.6477 1.80634 94.5275 1.15852 97.4249 1.29015C100.322 1.42178 103.131 2.32802 105.559 3.91445C107.987 5.50088 109.946 7.70943 111.23 10.31C112.499 12.8995 113.039 15.7857 112.792 18.6588C112.544 21.5319 111.519 24.2835 109.826 26.618L79.7204 71.9282C78.2067 74.1953 76.1441 76.0425 73.7244 77.2979C71.3046 78.5533 68.6066 79.176 65.8814 79.1081Z" fill="#FFCC00"/>
                        <path d="M118.08 79.2614C127.011 79.21 134.21 72.1703 134.161 63.5379C134.111 54.9054 126.83 47.9492 117.899 48.0006C108.968 48.0521 101.769 55.0917 101.819 63.7242C101.868 72.3566 109.149 79.3129 118.08 79.2614Z" fill="#00CC6F"/>
                      </svg>
                      <span className="text-[11px] text-gray-400">Available on monday.com Marketplace</span>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Desktop right */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/company/tuesdaywizard"
                  target="_blank" rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-gray-200 text-[#0A66C2] hover:border-[#0A66C2] hover:shadow-sm transition-all duration-200"
                >
                  <FaLinkedin className="text-[16px]" />
                </a>
                <a
                  href="https://www.upwork.com/agencies/2008961979613099238/"
                  target="_blank" rel="noopener noreferrer"
                  aria-label="Upwork"
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-gray-200 text-[#14A800] hover:border-[#14A800] hover:shadow-sm transition-all duration-200"
                >
                  <FaSquareUpwork className="text-[16px]" />
                </a>
              </div>
              <div className="w-px h-5 bg-gray-200" />
              <Button
                as="a"
                href="https://calendly.com/tuesdaywizard/30minutestrategy"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="text-[13.5px] h-9! px-4!"
              >
                Book Free Call
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl text-gray-600 hover:text-purple-700 hover:bg-purple-50 transition-all duration-150"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" strokeWidth={2} /> : <Menu className="w-5 h-5" strokeWidth={2} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-160 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 px-5 pt-2 pb-7">
            <div className="flex flex-col">
              {NAV.map(link => {
                const id = link.href.replace('#', '')
                const active = isHome && activeSection === id
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={e => handleNavClick(e, link)}
                    className={`py-3.5 text-[15px] font-medium border-b border-gray-50 transition-colors ${
                      active ? 'text-purple-700' : 'text-gray-700 hover:text-purple-700'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              })}

              {/* Our Apps mobile */}
              <button
                onClick={goToWizClone}
                className="flex items-center justify-between w-full py-3.5 text-[15px] font-medium border-b border-gray-50 text-gray-700 hover:text-purple-700 transition-colors text-left"
              >
                <span className="flex items-center gap-2.5">
                  <WizIcon size={24} />
                  WizClone
                </span>
                <span
                  className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
                  style={{ background: 'rgba(108,71,255,0.1)', color: '#6C47FF' }}
                >
                  Our App
                </span>
              </button>
            </div>

            <div className="flex flex-col gap-3 mt-5">
              <Button
                as="a"
                href="https://calendly.com/tuesdaywizard/30minutestrategy"
                target="_blank" rel="noopener noreferrer"
                variant="primary"
                className="justify-center text-[14px]"
                onClick={() => setMobileOpen(false)}
              >
                Book Free Consult
              </Button>
              <Button
                as="a"
                href="https://monday.com/?utm_campaign=partnerstack&utm_medium=diddly2965&utm_source=partner"
                target="_blank" rel="noopener noreferrer"
                variant="outline"
                className="justify-center text-[14px]"
                onClick={() => setMobileOpen(false)}
              >
                Sign Up For Free Trial
              </Button>
              <div className="flex items-center justify-center gap-4 mt-2">
                <a href="https://www.linkedin.com/company/tuesdaywizard" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 text-[#0A66C2]">
                  <FaLinkedin className="text-[18px]" />
                </a>
                <a href="https://www.upwork.com/agencies/2008961979613099238/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 text-[#14A800]">
                  <FaSquareUpwork className="text-[18px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
