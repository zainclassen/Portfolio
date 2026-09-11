import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import { workItems } from '../data'

export default function Work() {
  return (
    <section id="work" className="section-padding relative bg-slate-950">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-slate-500/5 rounded-full blur-[100px]" />

      <div className="container-max relative z-10">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-slate-400 text-sm font-mono mb-3">
            <span className="w-8 h-px bg-slate-400" />
            02 / Work
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight">
            AI Powered Products
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl">
            A selection of applications I've built during my bootcamp journey, spanning
            full-stack development, AI integration, and machine learning.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workItems.map((item, i) => (
            <div
              key={i}
              className="group card-base p-6 flex flex-col hover:border-slate-500/40 hover:shadow-xl hover:shadow-slate-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-500/10 border border-slate-500/20 text-slate-400 group-hover:bg-slate-500/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100 leading-tight group-hover:text-slate-300 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-slate-400/80 text-sm font-mono mt-1">{item.role}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">
                {item.description}
              </p>

              {/* Action buttons */}
              <div className="flex gap-2.5 mt-auto">
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-slate-200 text-sm font-medium transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {item.liveDemo && item.liveDemo.startsWith('http') ? (
                  <a
                    href={item.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-500/10 hover:bg-slate-500/20 border border-slate-500/30 hover:border-slate-500/50 text-slate-300 text-sm font-medium transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                ) : (
                  <span
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800/40 border border-slate-700/50 text-slate-500 text-sm font-medium cursor-not-allowed"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Site not found
                  </span>
                )}
              </div>

              {/* Hover arrow */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5 text-slate-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
