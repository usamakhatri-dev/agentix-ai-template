'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
  Phone,
  MapPin,
  CalendarClock,
  ShieldCheck,
} from 'lucide-react'
import { Container } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Status = 'idle' | 'submitting' | 'success' | 'error'

type FormData = {
  name: string
  email: string
  company: string
  message: string
}

type Errors = Partial<Record<keyof FormData, string>>

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@nexus.io',
    description: 'We reply within 24 hours',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    description: 'Mon–Fri, 9am–6pm PT',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'San Francisco, CA',
    description: '535 Mission St, 14th Floor',
  },
  {
    icon: CalendarClock,
    label: 'Book a demo',
    value: '30-min walkthrough',
    description: 'See Nexus in action',
  },
]

export function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  const validate = (): boolean => {
    const next: Errors = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) {
      next.email = 'Email is required'
    } else if (!EMAIL_RE.test(form.email)) {
      next.email = 'Please enter a valid email address'
    }
    if (!form.message.trim()) {
      next.message = 'Message is required'
    } else if (form.message.trim().length < 10) {
      next.message = 'Message must be at least 10 characters'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200))
      setStatus('success')
      setForm({ name: '', email: '', company: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          description="Have a question or want to see a demo? Send us a message and we'll get back to you within 24 hours."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left: contact info */}
          <Reveal>
            <div className="flex flex-col gap-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <info.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold">{info.value}</p>
                    <p className="text-xs text-muted-foreground">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 rounded-2xl border border-border bg-emerald-500/5 p-4 text-sm text-muted-foreground">
                <ShieldCheck className="h-5 w-5 text-emerald-500" />
                Your data is protected with SOC 2 Type II compliance and end-to-end encryption.
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <CheckCircle2 className="h-8 w-8" />
                    </span>
                    <h3 className="text-xl font-semibold">Message sent!</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Thanks for reaching out. We will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-sm font-medium text-primary hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-5"
                  >
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Jane Doe"
                        aria-invalid={!!errors.name}
                        className={cn(errors.name && 'border-red-500')}
                      />
                      {errors.name && (
                        <p className="flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle className="h-3 w-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="jane@company.com"
                        aria-invalid={!!errors.email}
                        className={cn(errors.email && 'border-red-500')}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle className="h-3 w-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="company">
                        Company{' '}
                        <span className="text-muted-foreground">(optional)</span>
                      </Label>
                      <Input
                        id="company"
                        value={form.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        placeholder="Acme Corp"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Tell us what you'd like to automate..."
                        rows={5}
                        aria-invalid={!!errors.message}
                        className={cn(errors.message && 'border-red-500')}
                      />
                      {errors.message && (
                        <p className="flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle className="h-3 w-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {status === 'error' && (
                      <p className="flex items-center gap-1 text-sm text-red-500">
                        <AlertCircle className="h-4 w-4" />
                        Something went wrong. Please try again.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className={cn(
                        'inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60'
                      )}
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
