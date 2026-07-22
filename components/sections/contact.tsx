'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/motion';
import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@agentix.ai', href: 'mailto:hello@agentix.ai' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 010-2024', href: 'tel:+15550102024' },
  { icon: MapPin, label: 'Address', value: '548 Market St, San Francisco, CA 94104', href: null },
];

export function Contact() {
  const [form, setForm] = React.useState<FormState>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [status, setStatus] = React.useState<Status>('idle');

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) {
      nextErrors.name = 'Name is required';
    }
    if (!form.email.trim()) {
      nextErrors.email = 'Email is required';
    } else if (!EMAIL_RE.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address';
    }
    if (!form.message.trim()) {
      nextErrors.message = 'Message is required';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    setStatus('submitting');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus('success');
      setForm({ name: '', email: '', company: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Contact"
            title="Get in touch with our team"
            description="Have questions about Agentix AI? Want a personalized demo? Fill out the form below and we will get back to you within one business day."
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Left: contact info */}
          <Reveal>
            <div className="flex h-full flex-col">
              <h3 className="font-display text-xl font-semibold tracking-tight">
                Contact information
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We are here to help. Reach out through any of the channels below
                and our team will respond promptly.
              </p>

              <div className="mt-8 space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href} className="block transition-opacity hover:opacity-80">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              <div className="mt-auto pt-10">
                <div className="rounded-2xl border border-border bg-muted/20 p-5">
                  <p className="text-sm font-semibold text-foreground">
                    Looking for a demo?
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Book a 30-minute call with our product team to see Agentix AI
                    in action and discuss your use case.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex h-full min-h-[400px] flex-col items-center justify-center text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                    Message sent successfully
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Thank you for reaching out. Our team will get back to you
                    within one business day.
                  </p>
                  <Button
                    variant="outline"
                    size="default"
                    className="mt-6"
                    onClick={() => setStatus('idle')}
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={handleChange('name')}
                      aria-invalid={!!errors.name}
                      className={cn(errors.name && 'border-destructive')}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={handleChange('email')}
                      aria-invalid={!!errors.email}
                      className={cn(errors.email && 'border-destructive')}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email}</p>
                    )}
                  </div>

                  {/* Company (optional) */}
                  <div className="space-y-2">
                    <Label htmlFor="company">
                      Company <span className="text-muted-foreground">(optional)</span>
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Acme Inc."
                      value={form.company}
                      onChange={handleChange('company')}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your use case..."
                      value={form.message}
                      onChange={handleChange('message')}
                      aria-invalid={!!errors.message}
                      className={cn(errors.message && 'border-destructive')}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive">{errors.message}</p>
                    )}
                  </div>

                  {/* Error banner */}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="brand"
                    size="lg"
                    className="w-full"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    {status !== 'submitting' && <Send className="h-4 w-4" />}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
