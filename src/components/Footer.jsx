import { Globe, Linkedin } from 'lucide-react'
import { navLinks, socialLinks, externalLinks } from '../data'

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="container-max px-6 md:px-12 lg:px-20 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-slate-300 to-slate-600 text-slate-950 font-extrabold text-lg">
                Z
              </span>
              <span className="text-slate-100 font-bold text-lg">
                Zain<span className="text-slate-200"> Classen</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Full-Stack Developer & Machine Learning Practitioner building web applications
              and AI solutions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-slate-300 font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-400 hover:text-slate-100 text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* External links */}
          <div>
            <h4 className="text-slate-300 font-semibold text-sm uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-slate-100 text-sm transition-colors duration-200"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} Zain Classen. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={externalLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-400 hover:text-slate-100 hover:border-slate-500/50 transition-all duration-200"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={externalLinks.livePortfolio}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Portfolio"
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-400 hover:text-slate-100 hover:border-slate-500/50 transition-all duration-200"
            >
              <Globe size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
