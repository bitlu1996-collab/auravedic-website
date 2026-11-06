import { Check, MessageCircle } from 'lucide-react';
import { PHONE_DISPLAY, buildWhatsAppUrl } from '@/lib/whatsapp';
import type { Service } from '@/data/content';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article
      id={service.id}
      className="glass-card group relative flex h-full scroll-mt-28 flex-col p-8 transition duration-500 hover:-translate-y-1 hover:border-gold-400/40 hover:shadow-[0_30px_80px_-30px_rgba(212,175,55,0.35)]"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-400/25 bg-gold-400/10 transition duration-500 group-hover:bg-gold-400/20">
          <Icon className="h-7 w-7 text-gold-300" aria-hidden="true" />
        </span>
        <span className="whitespace-nowrap rounded-full border border-gold-400/40 bg-ink-950/70 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-gold-200">
          {service.price}
        </span>
      </div>

      <h3 className="mt-8 text-3xl">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-300">{service.tagline}</p>

      <ul className="mt-7 space-y-3.5 border-t border-gold-400/10 pt-7">
        {service.benefits.map((benefit) => (
          <li key={benefit} className="flex gap-3 text-sm leading-relaxed text-ink-100">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden="true" />
            {benefit}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-9">
        <a
          href={buildWhatsAppUrl(service.bookingMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold w-full"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Book via WhatsApp
        </a>
        <p className="mt-3 text-center text-xs text-ink-400">{PHONE_DISPLAY}</p>
      </div>
    </article>
  );
}
