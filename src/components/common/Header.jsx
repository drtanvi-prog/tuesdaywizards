import React, { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/logo.png'
import Button from '../ui/Button';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const headerRef = useRef(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === '/';

  const handleNavClick = (e, link) => {
    if (!isHome) {
      e.preventDefault();
      const sectionId = link.href.replace('#', '');
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = '' };
  }, [mobileOpen]);

  // Scrollspy effect
  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.replace('#', ''));
    function onScroll() {
      let found = '';
      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Trigger active state as soon as section top is under header (header ~72px)
          if (rect.top <= 72 && rect.bottom > 72) {
            found = sectionIds[i];
            break;
          }
        }
      }
      setActiveSection(found);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    function handleClickOutside(e) {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className="font-sans sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
    >
      <div className="max-w-330 mx-auto px-6 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── Logo ── */}
          <a
            href={isHome ? '#' : '/'}
            onClick={e => { if (isHome) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) } }}
            className="shrink-0"
          >
            <img src={logo} alt="Tuesday Wizard" className="h-10 lg:h-13 w-auto object-contain" />
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = isHome && (activeSection === sectionId || (activeSection === '' && link.href === '#'));
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  target={link.target}
                  rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                  className={
                    `relative px-4 py-2 text-[14.5px] font-medium rounded-lg transition-all duration-150 ` +
                    (isActive
                      ? 'text-purple-700 bg-purple-50/60'
                      : 'text-gray-600 hover:text-purple-700 hover:bg-purple-50/60')
                  }
                // No bold for active nav, match hover style
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              as="a"
              href="https://calendly.com/tuesdaywizard/30minutestrategy"
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
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = isHome && (activeSection === sectionId || (activeSection === '' && link.href === '#'));
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { handleNavClick(e, link); setMobileOpen(false); }}
                  target={link.target}
                  rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                  className={
                    `py-3.5 text-[15px] font-medium border-b border-gray-50 transition-colors ` +
                    (isActive
                      ? 'text-purple-700'
                      : 'text-gray-700 hover:text-purple-700')
                  }
                // No bold or background for active nav
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Mobile CTAs */}
          <div className="flex flex-col gap-3 mt-5">
            <Button
              as="a"
              href="https://calendly.com/tuesdaywizard/30minutestrategy"
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
  );
}
