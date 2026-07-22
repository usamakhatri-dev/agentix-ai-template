'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
} from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  else if (values.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!values.message.trim()) errors.message = 'Please tell us a little about your needs.';
  else if (values.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
  return errors;
}

const contactInfo = [
  { icon: Mail, label: 'Email us', value: 'sales@agentix.ai', href: 'mailto:sales@agentix.ai' },
  { icon: Phone, label: 'Call us', value: '+1 (415) 555-0199', href: 'tel:+14155550199' },
  { icon: MapPin, label: 'Visit us', value: '548 Market St, San Francisco, CA', href: '#' },
];

export function ContactForm() {
  const [values, setValues] = React.useState<FormState>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = React.useState<Errors>({});
  const [touched, setTouched] = React.useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    company: false,
    message: false,
  });
  const [status, setStatus] = React.useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name as keyof FormState]) {
      setErrors(validate({ ...values, [name]: value }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, company: true, message: true });
    if (Object.keys(validationErrors).length > 0) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus('success');
      setValues({ name: '', email: '', company: '', message: '' });
      setTouched({ name: false, email: false, company: false, message: false });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-80 w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
      </div>
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your AI automation"
          description="Tell us about your team and goals. We'll get back to you within one business day with a personalized plan."
        />

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6 rounded-2xl border border-border/60 bg-card/50 p-6 shadow-soft backdrop-blur-sm">
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  Get in touch
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prefer a direct line? Reach us through any of these channels.
                </p>
              </div>
              <ul className="space-y-4">
                {contactInfo.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-muted/40"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </span>
                        <span className="block text-sm font-medium text-foreground group-hover:text-primary">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                Your data is encrypted and never shared.
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="rounded-2xl border border-border/60 bg-card/60 p-6 shadow-soft backdrop-blur-sm sm:p-8">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
                      <CheckCircle2 className="h-7 w-7" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                      Message sent successfully
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                      Thanks for reaching out. Our team will contact you within one business day.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 inline-flex h-10 items-center justify-center rounded-lg border border-border bg-background px-5 text-sm font-medium transition-colors hover:bg-muted"
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
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Contact form"
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          placeholder="Jane Cooper"
                          className={cn(errors.name && 'border-destructive focus-visible:ring-destructive')}
                        />
                        {errors.name && (
                          <p id="name-error" role="alert" className="flex items-center gap-1.5 text-xs text-destructive">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Work email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          placeholder="jane@company.com"
                          className={cn(errors.email && 'border-destructive focus-visible:ring-destructive')}
                        />
                        {errors.email && (
                          <p id="email-error" role="alert" className="flex items-center gap-1.5 text-xs text-destructive">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="company" className="text-sm font-medium">
                        Company <span className="text-muted-foreground">(optional)</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={values.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="text-sm font-medium">
                        How can we help? <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        placeholder="Tell us about your team size, current tools, and what you'd like to automate..."
                        className={cn(errors.message && 'border-destructive focus-visible:ring-destructive')}
                      />
                      {errors.message && (
                        <p id="message-error" role="alert" className="flex items-center gap-1.5 text-xs text-destructive">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {status === 'error' && Object.keys(errors).length === 0 && (
                      <div role="alert" className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        Something went wrong. Please try again or email us directly.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      aria-label={status === 'submitting' ? 'Sending your message' : 'Send message'}
                      className="group/btn inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-sm font-semibold text-white shadow-glow transition-all hover:shadow-premium hover:brightness-110 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-7"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send message
                          <Send className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                        </>
                      )}
                    </button>
                    <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CalendarClock className="h-3.5 w-3.5" />
                      Average response time: under 1 business day
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
