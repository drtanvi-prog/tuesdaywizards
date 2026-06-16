import { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo-without-bg.png'
import Button from '../ui/Button'
import { FaLinkedin, FaSquareUpwork } from 'react-icons/fa6'
import { Menu, X } from 'lucide-react'

const NAV = [
  { label: 'Services',     href: '#services' },
  { label: 'About Us',     href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Portfolio',    href: '#portfolio' },
  { label: 'Contact',      href: '#contact' },
]

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
`

export default function Header() {
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [activeSection, setActive]    = useState('')
  const [scrolled, setScrolled]       = useState(false)
  const headerRef = useRef(null)
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

  /* scroll effects */
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

  /* lock body when drawer open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  /* close drawer on outside click */
  useEffect(() => {
    if (!mobileOpen) return
    const handler = e => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setMobileOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [mobileOpen])

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
                    className={`
                      relative px-4 py-2 text-[14px] font-medium rounded-xl transition-all duration-200
                      ${active
                        ? 'text-purple-700'
                        : 'text-gray-500 hover:text-gray-900'}
                    `}
                  >
                    {link.label}
                    {active && (
                      <span
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-purple-500"
                      />
                    )}
                  </a>
                )
              })}
            </nav>

            {/* Desktop right: social + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Social icons */}
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

              {/* Divider */}
              <div className="w-px h-5 bg-gray-200" />

              {/* CTA */}
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
              {mobileOpen ? <X className="w-5 h-5" strokeWidth={2}/> : <Menu className="w-5 h-5" strokeWidth={2}/>}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-130 opacity-100' : 'max-h-0 opacity-0'}`}>
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
                    className={`py-3.5 text-[15px] font-medium border-b border-gray-50 transition-colors ${active ? 'text-purple-700' : 'text-gray-700 hover:text-purple-700'}`}
                  >
                    {link.label}
                  </a>
                )
              })}
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
                  <FaLinkedin className="text-[18px]"/>
                </a>
                <a href="https://www.upwork.com/agencies/2008961979613099238/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 text-[#14A800]">
                  <FaSquareUpwork className="text-[18px]"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
