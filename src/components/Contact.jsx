import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { contactInfo } from '../data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) {
      e.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address'
    }
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim()) {
      e.message = 'Message is required'
    } else if (form.message.trim().length < 10) {
      e.message = 'Message should be at least 10 characters'
    }
    return e
  }

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
    if (errors[field]) {
      const newErrors = { ...errors }
      delete newErrors[field]
      setErrors(newErrors)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    const subject = encodeURIComponent(form.subject)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:zainclassen9@gmail.com?subject=${subject}&body=${body}`
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  const fieldClass = (field) =>
    `w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-slate-200 placeholder-slate-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500/30 ${
      errors[field] ? 'border-red-500/60' : 'border-slate-700 focus:border-slate-500/50'
    }`

  return (
    <section id="contact" className="section-padding relative bg-slate-950">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-600/5 rounded-full blur-[100px]" />

      <div className="container-max relative z-10">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-slate-400 text-sm font-mono mb-3">
            <span className="w-8 h-px bg-slate-400" />
            04 / Contact
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, i) => {
              const content = (
                <div className="card-base p-5 flex items-center gap-4 hover:border-slate-500/30 transition-all duration-200 hover:translate-x-1">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-500/10 border border-slate-500/20 text-slate-400 flex-shrink-0">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-500 text-xs font-mono uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-slate-200 text-sm font-medium truncate">{info.value}</p>
                  </div>
                </div>
              )
              return info.href ? (
                <a
                  key={i}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={i}>{content}</div>
              )
            })}
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card-base p-6 md:p-8 space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange('name')}
                    placeholder="Your name"
                    className={fieldClass('name')}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    placeholder="your@email.com"
                    className={fieldClass('email')}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-slate-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange('subject')}
                  placeholder="What's this about?"
                  className={fieldClass('subject')}
                />
                {errors.subject && (
                  <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange('message')}
                  placeholder="Tell me about your idea or inquiry..."
                  className={`${fieldClass('message')} resize-none`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                  status === 'success'
                    ? 'bg-green-500 text-white'
                    : status === 'loading'
                      ? 'bg-slate-700 text-slate-400 cursor-wait'
                      : 'bg-slate-500 hover:bg-slate-400 text-slate-950 hover:shadow-lg hover:shadow-slate-500/30 hover:-translate-y-0.5'
                }`}
              >
                {status === 'loading' && (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                )}
                {status === 'idle' && (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-sm text-center animate-fade-in">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
