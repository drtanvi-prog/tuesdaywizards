import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown as ChevronDownIcon } from 'lucide-react'
import logo from '../../assets/logo.png'
import Button from '../ui/Button';

const navLinks = [
  {
    label: 'Services',
    href: '#services',
    dropdown: [
      {
        label: 'Monday.com Workspace Setup & Customization',
        desc: 'Tailored boards, workflows, and CRM solutions',
        href: '#monday-setup',
      },
      {
        label: 'Workflow Automation & Optimization',
        desc: 'Smart automations to eliminate repetitive tasks',
        href: '#workflow-automation',
      },
      {
        label: 'Third-Party Integrations & API Solutions',
        desc: 'Connect monday.com with Zapier, Make, n8n & more',
        href: '#integrations',
      },
    ],
  },
  { label: 'About Us', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileServices, setMobileServices] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const fn = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDropdown(null)
    }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className="font-sans sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
    >
      <div className="max-w-[1320px] mx-auto px-6 xl:px-12">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo ── */}
          <a href="/" className="shrink-0">
            <img src={logo} alt="Tuesday Wizard" className="h-[52px] w-auto object-contain" />
          </a>

          {/* ── Desktop Nav ── */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className={`group flex items-center gap-1.5 px-4 py-2 text-[14.5px] font-medium rounded-lg transition-colors duration-150 ${openDropdown === link.label
                      ? 'text-purple-700 bg-purple-50'
                      : 'text-gray-600 hover:text-purple-700 hover:bg-purple-50/60'
                      }`}
                  >
                    {link.label}
                    <ChevronDownIcon
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180 text-purple-600' : 'text-gray-400'}`}
                      strokeWidth={2.5}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    onMouseLeave={() => setOpenDropdown(null)}
                    className={`absolute top-[calc(100%+12px)] left-0 w-[360px] bg-white rounded-2xl border border-gray-100 shadow-[0_24px_64px_rgba(109,40,217,0.10),0_4px_16px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-200 origin-top-left ${openDropdown === link.label
                      ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                      }`}
                  >
                    {/* Dropdown header strip */}
                    <div className="bg-gradient-to-r from-purple-50 to-violet-50 px-5 py-3 border-b border-purple-100/60">
                      <p className="text-[10.5px] font-bold text-purple-500 uppercase tracking-[0.14em]">
                        Our Services
                      </p>
                    </div>

                    <div className="p-2">
                      {link.dropdown.map((item, i) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="group/item flex items-start gap-3.5 px-4 py-3 rounded-xl hover:bg-purple-50 transition-all duration-150"
                        >
                          <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-purple-300 group-hover/item:bg-purple-600 transition-colors duration-150" />
                          <span className="flex flex-col gap-0.5">
                            <span className="text-[13.5px] font-semibold text-gray-800 group-hover/item:text-purple-700 leading-snug transition-colors">
                              {item.label}
                            </span>
                            <span className="text-[12px] text-gray-400 leading-relaxed">
                              {item.desc}
                            </span>
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 text-[14.5px] font-medium text-gray-600 hover:text-purple-700 rounded-lg hover:bg-purple-50/60 transition-all duration-150"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              as="a"
              href="https://calendly.com/tuesdaywizard/30minutestrategy?month=2026-04"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="relative text-[13.5px]"
            >
              Book Free Consult
            </Button>
            <Button
              as="a"
              href="https://monday.com/?utm_campaign=partnerstack&utm_medium=diddly2965&utm_source=partner&pscd=try.monday.com&ps_partner_key=ZGlkZGx5Mjk2NQ&ps_xid=5Bm7mq2GklTTcI&gsxid=5Bm7mq2GklTTcI&gspk=ZGlkZGx5Mjk2NQ"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="text-[13.5px]"
            >
              Sign Up For Free Trial
            </Button>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-gray-600 hover:text-purple-700 hover:bg-purple-50 cursor-pointer transition-all duration-150"
            aria-label="Toggle menu"
          >
            {mobileOpen
              ? <X className="w-4.5 h-4.5" strokeWidth={2} />
              : <Menu className="w-4.5 h-4.5" strokeWidth={2} />
            }
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileOpen ? 'max-h-175 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="bg-white border-t border-gray-100 px-5 pt-3 pb-6">

          {/* Nav links */}
          <div className="flex flex-col">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="border-b border-gray-50">
                  <button
                    onClick={() => setMobileServices(!mobileServices)}
                    className="w-full flex items-center justify-between py-3.5 text-[15px] font-medium text-gray-700"
                  >
                    {link.label}
                    <ChevronDownIcon
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileServices ? 'rotate-180' : ''}`}
                      strokeWidth={2}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-250 ${mobileServices ? 'max-h-100 pb-2' : 'max-h-0'}`}>
                    {link.dropdown.map((item, i) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-start gap-3 px-2 py-3 rounded-xl hover:bg-purple-50 transition-colors"
                      >
                        <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-300" />
                        <span className="flex flex-col gap-0.5">
                          <span className="text-[13.5px] font-semibold text-gray-800">{item.label}</span>
                          <span className="text-[12px] text-gray-400">{item.desc}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3.5 text-[15px] font-medium text-gray-700 hover:text-purple-700 border-b border-gray-50 transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Mobile CTAs */}
          <div className="flex flex-col gap-3 mt-5">
            <Button
              as="a"
              href="https://calendly.com/tuesdaywizard/30minutestrategy?month=2026-04"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="justify-center text-[14px]"
              onClick={() => setMobileOpen(false)}
            >
              Book Free Consult
            </Button>
            <Button
              as="a"
              href="https://monday.com/?utm_campaign=partnerstack&utm_medium=diddly2965&utm_source=partner&pscd=try.monday.com&ps_partner_key=ZGlkZGx5Mjk2NQ&ps_xid=5Bm7mq2GklTTcI&gsxid=5Bm7mq2GklTTcI&gspk=ZGlkZGx5Mjk2NQ"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="justify-center text-[14px]"
              onClick={() => setMobileOpen(false)}
            >
              Sign Up For Free Trial
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
