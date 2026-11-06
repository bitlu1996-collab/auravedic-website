import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { saveSubscriber } from '@/lib/submissions';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim();

    if (!EMAIL_PATTERN.test(trimmed)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setMessage('');

    try {
      const { alreadySubscribed } = await saveSubscriber(trimmed);
      setStatus('success');
      setMessage(alreadySubscribed ? 'You are already on our list.' : 'Thank you for subscribing.');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('We could not save your email just now. Please try again shortly.');
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
      <label htmlFor="newsletter-email" className="text-sm font-medium text-ink-100">
        Cosmic insights, monthly
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          maxLength={254}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="input-field"
        />
        <button type="submit" disabled={status === 'submitting'} className="btn-gold shrink-0 sm:px-5">
          {status === 'submitting' ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          )}
          Subscribe
        </button>
      </div>
      {message && (
        <p
          role="status"
          className={`flex items-center gap-2 text-sm ${status === 'error' ? 'text-error-300' : 'text-success-300'}`}
        >
          {status === 'success' && <CheckCircle2 className="h-4 w-4" aria-hidden="true" />}
          {message}
        </p>
      )}
    </form>
  );
}
