import { Check, MessageCircle } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { buildWhatsAppUrl, GENERAL_CONSULT_MESSAGE } from '@/lib/whatsapp';

const EXPERT_IMAGE =
  'https://images.pexels.com/photos/35341456/pexels-photo-35341456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const CREDENTIALS = [
  'Trained in Parashari and Jaimini Jyotish traditions',
  'Vastu Shastra consultations for homes and commercial spaces',
  'Numerology and destiny matrix analysis for personal and business decisions',
  'Consulting clients across the USA, UK, UAE and India',
];

export default function AboutExpert() {
  return (
    <section id="about-expert" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <img
              src={EXPERT_IMAGE}
              alt="Hand-carved stone temple pillars representing the Vedic architectural tradition"
              loading="lazy"
              className="h-[480px] w-full rounded-3xl object-cover sm:h-[560px]"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
            <div className="glass-card absolute bottom-6 left-6 right-6 p-6 sm:right-auto sm:max-w-xs">
              <p className="font-serif text-2xl text-ink-50">Your Vedic Consultant</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                Jyotish, Vastu and numerology guidance rooted in tradition and refined for modern life.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <SectionHeading
            align="left"
            eyebrow="About Your Expert"
            title="Ancient scripture, applied with modern clarity"
            description="Every consultation begins with listening. We study your chart, space or name in full context, then translate centuries-old principles into practical steps you can take this week."
          />

          <ul className="mt-10 space-y-4">
            {CREDENTIALS.map((credential) => (
              <li key={credential} className="flex gap-4 text-sm leading-relaxed text-ink-100 sm:text-base">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400/15">
                  <Check className="h-3.5 w-3.5 text-gold-300" aria-hidden="true" />
                </span>
                {credential}
              </li>
            ))}
          </ul>

          <a
            href={buildWhatsAppUrl(GENERAL_CONSULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-12"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Speak With Your Consultant
          </a>
        </Reveal>
      </div>
    </section>
  );
}
