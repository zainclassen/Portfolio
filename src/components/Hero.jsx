import { useState } from 'react'
import { ArrowRight, Mail, Sparkles, FileText, X, ExternalLink } from 'lucide-react'
import { heroHighlights, externalLinks } from '../data'
const profileImage = '/images/1781857007175.jpg'

export default function Hero() {
  const [showCv, setShowCv] = useState(false)

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Background effects */}
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-600/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container-max px-6 md:px-12 lg:px-20 relative z-10 text-center">
          {/* Profile image */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 blur-md opacity-50 animate-pulse-slow" />
              <img
                src={profileImage}
                alt="Zain Classen"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-slate-500 shadow-xl shadow-slate-900/50"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/60 border border-slate-700 text-slate-300 text-sm font-medium mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-slate-400" />
            Available for opportunities
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
            <span className="gradient-text">Marketing meets</span>
            <br />
            machine intelligence
          </h1>

          {/* Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {heroHighlights.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700/80 text-slate-300 text-sm font-medium"
              >
                <item.icon className="w-4 h-4 text-slate-400" />
                {item.label}
              </div>
            ))}
          </div>

          {/* Tagline */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            I'm Zain Classen, a marketer specializing in applied AI, building solutions that
            combine marketing thinking with technical execution.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button onClick={() => scrollTo('#work')} className="btn-primary w-full sm:w-auto">
              View My Work
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => scrollTo('#contact')} className="btn-secondary w-full sm:w-auto">
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
            <button
              onClick={() => setShowCv(true)}
              className="btn-secondary w-full sm:w-auto"
            >
              <FileText className="w-5 h-5" />
              View CV
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-slate-400" />
          </div>
        </div>
      </section>

      {/* CV Modal */}
      {showCv && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowCv(false)}
        >
          <div
            className="card-base max-w-3xl w-full p-8 relative animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCv(false)}
              className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors duration-200"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-500/10 border border-slate-500/20 text-slate-400">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Curriculum Vitae</h3>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden border border-slate-700 bg-white max-h-[60vh] overflow-y-auto">
              <iframe
                src={externalLinks.cv}
                title="Zain Classen - CV"
                className="w-full h-[60vh]"
                style={{ border: 'none' }}
              />
            </div>

            <a
              href={externalLinks.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              <ExternalLink className="w-4 h-4" />
              Open in New Tab
            </a>
          </div>
        </div>
      )}
    </>
  )
}
