'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { contactFormSchema } from '@/lib/validations';
import { env } from '@/lib/env';

type ContactForm = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'failure'>('idle');
  const turnstileRef = useRef<TurnstileInstance>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema)
  });

  async function onSubmit(data: ContactForm) {
    if (!turnstileToken) {
      setStatus('failure');
      return;
    }
    
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, turnstileToken, website: honeypotRef.current?.value }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || 'Failed to send message');
      }
      setStatus('success');
      reset();
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    } catch {
      setStatus('failure');
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    }
  }

  return (
    <section
      id="contact"
      className="flex items-center justify-center py-12 md:py-20 px-6 md:px-[100px] min-h-screen"
    >
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-[100px] w-full max-w-[900px]">
        <div className="flex flex-col items-center md:items-start pt-2 shrink-0">
          <h2 className="text-2xl md:text-[30px] font-semibold text-center md:text-left">
            Let's keep in touch
          </h2>
          <p className="text-sm md:text-[15px] text-muted-foreground mt-3 max-w-[250px] leading-relaxed text-center md:text-left">
            Got any questions? Drop me a message and I'll get back to you as soon as possible!
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full max-w-[450px]">
          <input type="text" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" ref={honeypotRef} name="website" /> 
          <div className="flex gap-4">
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
              <Label htmlFor="firstName" className="text-[13px]">
                First name
              </Label>
              <Input
                id="firstName"
                type="text"
                {...register('firstName')}
                placeholder="First name"
                className="h-11 bg-[var(--muted)]"
              />
              {errors.firstName && <p className="text-xs text-red-500">{errors.firstName.message}</p>}
            </div>
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
              <Label htmlFor="lastName" className="text-[13px]">
                Last name
              </Label>
              <Input
                id="lastName"
                type="text"
                {...register('lastName')}
                placeholder="Last name"
                className="h-11 bg-[var(--muted)]"
              />
              {errors.lastName && <p className="text-xs text-red-500">{errors.lastName.message}</p>}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email" className="text-[13px]">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="you@example.com"
              className="h-11 bg-[var(--muted)]"
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="message" className="text-[13px]">
              Message
            </Label>
            <Textarea
              id="message"
              {...register('message')}
              placeholder="Leave a message..."
              rows={5}
              className="bg-[var(--muted)] resize-none"
            />
            {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
          </div>
          <Turnstile
            ref={turnstileRef}
            siteKey={env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            onSuccess={setTurnstileToken}
            onExpire={() => {
              setTurnstileToken(null);
              turnstileRef.current?.reset();
            }}
            options={{
              size: 'flexible',
              appearance: 'interaction-only',
            }}
          />
          <div className="flex items-center gap-4">
            <Button
              type="submit"
              disabled={status === 'loading' || !turnstileToken}
              size="lg"
              className="px-8 shrink-0"
            >
              {status === 'loading' ? 'Sending...' : 'Submit'}
            </Button>
            <p className="text-[10px] text-muted-foreground leading-snug">
              Your personal information is processed solely to respond to your inquiry and is not stored, retained, or disclosed to third parties.
            </p>
          </div>
          <div aria-live="polite">
            {status === 'success' && (
              <p className="text-sm text-green-600">Message sent successfully!</p>
            )}
            {status === 'failure' && (
              <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
