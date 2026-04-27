import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/logo.png'
import Button from '../ui/Button';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: 'https://calendly.com/tuesdaywizard/30minutestrategy?month=2026-04', target: '_blank' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className="font-sans sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
    >
      <div className="max-w-[1320px] mx-auto px-6 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── Logo ── */}
          <a href="/" className="shrink-0">
            <img src={logo} alt="Tuesday Wizard" className="h-10 lg:h-13 w-auto object-contain" />
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.target}
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                className="relative px-4 py-2 text-[14.5px] font-medium text-gray-600 hover:text-purple-700 rounded-lg hover:bg-purple-50/60 transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
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
              ? <X className="w-6 h-6" strokeWidth={2} />
              : <Menu className="w-6 h-6" strokeWidth={2} />
            }
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileOpen ? 'max-h-175 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-white border-t border-gray-100 px-5 pt-3 pb-6">

          {/* Nav links */}
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.target}
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                onClick={() => setMobileOpen(false)}
                className="py-3.5 text-[15px] font-medium text-gray-700 hover:text-purple-700 border-b border-gray-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
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
