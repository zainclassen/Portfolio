import { useState } from 'react'
import { Award, ExternalLink, X, Calendar, Building2 } from 'lucide-react'
import { certificates } from '../data'

export default function Certificates() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificates" className="section-padding relative">
      <div className="container-max">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-slate-400 text-sm font-mono mb-3">
            <span className="w-8 h-px bg-slate-400" />
            03 / Certificates
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight">
            Certificates & Accomplishments
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl">
            Credentials and milestones from my bootcamp journey and continued learning.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="group card-base p-6 hover:border-slate-500/40 hover:shadow-lg hover:shadow-slate-500/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelected(cert)}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-500/10 border border-slate-500/20 text-slate-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                <cert.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-slate-100 leading-tight mb-2 group-hover:text-slate-300 transition-colors duration-200">
                {cert.name}
              </h3>
              <p className="text-slate-400 text-sm mb-1">{cert.organization}</p>
              <p className="text-slate-500 text-xs font-mono">{cert.date}</p>
              <div className="flex items-center gap-1.5 mt-4 text-slate-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Certificate
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="card-base max-w-lg w-full p-8 relative animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors duration-200"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-500/10 border border-slate-500/20 text-slate-400 mb-6">
              <selected.icon className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-slate-100 mb-4">{selected.name}</h3>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-slate-400">
                <Building2 className="w-4 h-4 text-slate-400" />
                <span className="text-sm">{selected.organization}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span className="text-sm">{selected.date}</span>
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden border border-slate-700 bg-slate-950">
              <iframe
                src={selected.link}
                title={selected.name}
                className="w-full h-[400px]"
                style={{ border: 'none' }}
              />
            </div>

            <a
              href={selected.link}
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
    </section>
  )
}
