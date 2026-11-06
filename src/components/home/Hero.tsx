import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { HIGHLIGHTS, TRUST_BADGES } from '@/data/content';
import { buildWhatsAppUrl, CLAIM_FREE_QUESTION_MESSAGE } from '@/lib/whatsapp';

const HERO_IMAGE =
  'https://images.pexels.com/photos/31021507/pexels-photo-31021507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] scroll-mt-20 items-center overflow-hidden pb-20 pt-32 sm:pt-36">
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 -z-30 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-ink-950/30 via-ink-950/80 to-ink-950" />
      <div className="absolute inset-0 -z-20 bg-night-glow" />
      <div className="absolute left-[8%] top-[18%] -z-10 h-72 w-72 animate-drift rounded-full bg-gold-400/15 blur-3xl" />
      <div className="absolute bottom-[8%] right-[6%] -z-10 h-80 w-80 animate-drift rounded-full bg-secondary-500/25 blur-3xl [animation-delay:-6s]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold-400/25 bg-ink-900/60 px-4 py-2 text-xs font-medium tracking-wide text-gold-200 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Vedic Astrology, Vastu Shastra &amp; Numerology
          </span>

          <h1 className="animate-fade-up mt-8 text-5xl leading-[1.08] sm:text-6xl lg:text-7xl [animation-delay:120ms]">
            Unlock Your Destiny Through <span className="text-gold-gradient italic">Ancient Vedic Wisdom</span> &amp;
            Modern Cosmic Precision.
          </h1>

          <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-ink-300 [animation-delay:240ms]">
            Transform your career, wealth, architecture, and relationships with personalized consultations tailored for
            clients worldwide.
          </p>

          <div className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row [animation-delay:360ms]">
            <a
              href={buildWhatsAppUrl(CLAIM_FREE_QUESTION_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold animate-glow-pulse px-8 py-4 text-base"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Claim Your 1st Question Free on WhatsApp
            </a>
            <a href="#free-question" className="btn-outline-gold px-8 py-4 text-base">
              Ask Online First
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <ul className="animate-fade-up mt-14 grid gap-4 border-t border-gold-400/10 pt-10 sm:grid-cols-3 [animation-delay:480ms]">
            {TRUST_BADGES.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-400/30 bg-gold-400/10">
                  <Icon className="h-5 w-5 text-gold-300" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-ink-100">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative hidden lg:col-span-5 lg:block">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-gold-400/30" />
            <div className="absolute inset-10 animate-spin-slow rounded-full border border-gold-400/15 [animation-direction:reverse]" />
            <div className="absolute inset-[28%] flex animate-glow-pulse items-center justify-center rounded-full bg-gold-gradient">
              <Sparkles className="h-14 w-14 text-ink-950" aria-hidden="true" />
            </div>
            <div className="glass-card absolute inset-x-0 bottom-0 p-6">
              <p className="eyebrow mb-4">Why clients trust us</p>
              <ul className="space-y-3">
                {HIGHLIGHTS.map(({ label, icon: Icon }) => (
                  <li key={label} className="flex items-center gap-3 text-sm text-ink-100">
                    <Icon className="h-4 w-4 text-gold-300" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
