import { MessageCircle } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { buildWhatsAppUrl, CLAIM_FREE_QUESTION_MESSAGE, PHONE_DISPLAY } from '@/lib/whatsapp';

export default function CtaBand() {
  return (
    <section className="relative py-24">
      <Reveal className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="glass-card relative overflow-hidden px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold-400/20 blur-3xl" />
          <p className="eyebrow relative">Begin Today</p>
          <h2 className="relative mt-4 text-4xl leading-[1.15] sm:text-5xl">
            Your clearest path forward starts with one message.
          </h2>
          <p className="relative mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            Send your first question today and receive a personal answer from a Vedic consultant, wherever you live.
          </p>
          <div className="relative mt-10 flex flex-col items-center gap-4">
            <a
              href={buildWhatsAppUrl(CLAIM_FREE_QUESTION_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-8 py-4 text-base"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Claim Your 1st Question Free on WhatsApp
            </a>
            <p className="text-xs text-ink-400">{PHONE_DISPLAY}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
