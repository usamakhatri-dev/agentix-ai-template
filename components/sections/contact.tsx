'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
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
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, label: 'Office', value: '500 Market Street, San Francisco, CA 94105', href: '#' },
];

export function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!EMAIL_RE.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus('success');
      setForm({ name: '', email: '', company: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
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
            description="Have questions about Agentix AI? Want a personalized demo? Send us a message and we will get back to you within 24 hours."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left: contact info */}
          <Reveal>
            <div className="flex h-full flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">Contact information</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Reach out through any of the channels below. Our team is available Monday through Friday, 9am to 6pm PT.
                </p>

                <div className="mt-8 space-y-5">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={info.label}
                        href={info.href}
                        className="flex items-start gap-4 group"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary/5">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            {info.label}
                          </div>
                          <div className="mt-0.5 text-sm font-medium">{info.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Response time badge */}
              <div className="mt-8 inline-flex items-center gap-2 rounded-xl border border-border bg-muted/20 px-4 py-3">
                <div className="flex h-2 w-2">
                  <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-muted-foreground">Average response time: under 2 hours</span>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="flex h-full min-h-[300px] flex-col items-center justify-center text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight">Message sent!</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
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
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Jane Doe"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className={cn(errors.name && 'border-destructive')}
                        disabled={status === 'submitting'}
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
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={cn(errors.email && 'border-destructive')}
                        disabled={status === 'submitting'}
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
                        onChange={(e) => handleChange('company', e.target.value)}
                        disabled={status === 'submitting'}
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your use case..."
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className={cn(errors.message && 'border-destructive')}
                        disabled={status === 'submitting'}
                      />
                      {errors.message && (
                        <p className="text-xs text-destructive">{errors.message}</p>
                      )}
                    </div>

                    {/* Error message */}
                    {status === 'error' && (
                      <div className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3">
                        <AlertCircle className="h-4 w-4 shrink-0 text-destructive" />
                        <span className="text-sm text-destructive">
                          Something went wrong. Please try again.
                        </span>
                      </div>
                    )}

                    {/* Submit */}
                    <Button
                      type="submit"
                      variant="brand"
                      size="default"
                      className="w-full"
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
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
