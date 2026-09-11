import { useState, useEffect } from 'react'
import { Globe, Menu, X } from 'lucide-react'
import { navLinks, externalLinks } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-slate-950/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max px-6 md:px-12 lg:px-20 flex items-center justify-between h-16 md:h-18">
        {/* Logo / Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2.5"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-slate-300 to-slate-600 text-slate-950 font-extrabold text-lg shadow-lg shadow-slate-500/20 group-hover:scale-105 transition-transform duration-200">
            Z
          </span>
          <span className="text-slate-100 font-bold text-lg tracking-tight">
            Zain<span className="text-slate-200"> Classen</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-2 rounded-lg text-slate-300 hover:text-slate-100 hover:bg-slate-800/60 text-sm font-medium transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* External links */}
        <div className="hidden md:flex items-center gap-2 ml-2">
          <a
            href={externalLinks.livePortfolio}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Portfolio"
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-300 hover:text-slate-100 hover:border-slate-500/50 transition-all duration-200"
          >
            <Globe className="w-4.5 h-4.5" size={18} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-200"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-b border-slate-800 animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 rounded-lg text-slate-300 hover:text-slate-100 hover:bg-slate-800/60 font-medium transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-3 mt-2 border-t border-slate-800">
              <a
                href={externalLinks.livePortfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-slate-300 hover:text-slate-100 hover:bg-slate-800/60 font-medium transition-all duration-200"
              >
                <Globe size={18} /> Live Portfolio
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
