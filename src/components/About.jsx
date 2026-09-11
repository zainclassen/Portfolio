import { User, MapPin } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-max">
        {/* Section header */}
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-400 text-sm font-mono mb-3">
            <span className="w-8 h-px bg-slate-400" />
            01 / About
            <span className="w-8 h-px bg-slate-400" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight">
            About Me
          </h2>
        </div>

        {/* Bio card - centered */}
        <div className="max-w-3xl mx-auto card-base p-8 md:p-10 hover:border-slate-700 transition-colors duration-300">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-500/10 border border-slate-500/20">
              <User className="w-6 h-6 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-100">Who I Am</h3>
          </div>

          <div className="space-y-4 text-slate-400 leading-relaxed text-base md:text-lg">
            <p>
              I'm a marketer with a growing specialization in applied AI. My foundation in this
              space comes from AI training completed on Coursera, which gave me the skills to move
              from simply using AI tools to actually designing and building AI-powered solutions.
            </p>
            <p>
              My projects reflect a mix of marketing thinking and technical execution. I built a
              tech support chatbot to streamline customer service interactions, and a content
              generator capable of producing text, images, and code — tools designed to speed up
              creative and operational workflows. Working with a team, I helped develop a
              sentiment analysis tool that tracks and interprets audience sentiment across social
              media comments and posts, turning unstructured feedback into actionable insight. Our
              team also built an end-to-end conversational AI solution that gives patients
              immediate guidance before visiting a healthcare facility — a project that pushed us
              to think carefully about tone, trust, and user experience in a sensitive context.
            </p>
            <p>
              What ties all of this together is a marketer's perspective: understanding the
              audience, the problem, and the experience — then using AI to deliver it.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-slate-800 text-slate-400 text-sm">
            <MapPin className="w-4 h-4 text-slate-400" />
            Cape Town, South Africa
          </div>
        </div>
      </div>
    </section>
  )
}
