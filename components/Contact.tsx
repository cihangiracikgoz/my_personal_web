'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  firstName: z.string().nonempty('First name is required'),
  lastName: z.string().nonempty('Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().nonempty('Message is required'),
})

type ContactForm = z.infer<typeof formSchema>;

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'failure'>('idle');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>({
    resolver: zodResolver(formSchema)
  });

  async function onSubmit(data: ContactForm) {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || 'Failed to send message');
      }
      setStatus('success');
      reset();
    } catch (err) {
      setStatus('failure');
      console.error(err instanceof Error ? err.message : 'Unknown error');
    }
  }

  return (
    <section
      id="contact"
      className="flex items-center justify-center py-20 px-[100px] min-h-screen"
    >
      <div className="flex flex-row justify-center items-start gap-[100px] w-full max-w-[900px]">
        <div className="flex flex-col items-start pt-2 shrink-0">
          <h2 className="text-[30px] font-semibold">
            Let's keep in touch
          </h2>
          <p className="text-[15px] text-muted-foreground mt-3 max-w-[250px] leading-relaxed">
            Got any questions? Drop me a message and I'll get back to you as soon as possible!
          </p>
          {status === 'success' && (
            <p className="text-sm text-green-600 mt-4">Message sent successfully!</p>
          )}
          {status === 'failure' && (
            <p className="text-sm text-red-500 mt-4">Something went wrong. Please try again.</p>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full max-w-[450px]">
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" /> 
          <div className="flex gap-4">
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
              <Label className="text-[13px]">
                First name
              </Label>
              <Input
                type="text"
                {...register('firstName')}
                placeholder="First name"
                className="h-11 bg-[var(--muted)]"
              />
              {errors.firstName && <p className="text-xs text-red-500">{errors.firstName.message}</p>}
            </div>
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
              <Label className="text-[13px]">
                Last name
              </Label>
              <Input
                type="text"
                {...register('lastName')}
                placeholder="Last name"
                className="h-11 bg-[var(--muted)]"
              />
              {errors.lastName && <p className="text-xs text-red-500">{errors.lastName.message}</p>}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label className="text-[13px]">
              Email
            </Label>
            <Input
              type="email"
              {...register('email')}
              placeholder="you@example.com"
              className="h-11 bg-[var(--muted)]"
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label className="text-[13px]">
              Message
            </Label>
            <Textarea
              {...register('message')}
              placeholder="Leave a message..."
              rows={5}
              className="bg-[var(--muted)] resize-none"
            />
            {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
          </div>
          <Button
            type="submit"
            disabled={status === 'loading'}
            size="lg"
            className="self-start px-8"
          >
            {status === 'loading' ? 'Sending...' : 'Submit'}
          </Button>
        </form>
      </div>
    </section>
  );
}
