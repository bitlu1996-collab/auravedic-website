import { useState } from 'react';
import { Plus } from 'lucide-react';
import AdSlot from '@/components/ads/AdSlot';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { FAQS } from '@/data/content';
import { buildWhatsAppUrl, GENERAL_CONSULT_MESSAGE, PHONE_DISPLAY } from '@/lib/whatsapp';
import { MessageCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">
        <div>
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Frequently Asked"
              title="Questions our clients ask before they begin"
            />
          </Reveal>

          <ul className="mt-12 space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              const buttonId = `faq-question-${index}`;
              const panelId = `faq-answer-${index}`;

              return (
                <Reveal key={faq.question} delay={index * 60}>
                  <li className="glass-card overflow-hidden transition duration-300 hover:border-gold-400/30">
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold-300"
                      >
                        <span className="font-serif text-xl text-ink-50 sm:text-2xl">{faq.question}</span>
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-400/30 transition-all duration-300 ${
                            isOpen ? 'rotate-45 bg-gold-400/15' : ''
                          }`}
                        >
                          <Plus className="h-4 w-4 text-gold-200" aria-hidden="true" />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-sm leading-relaxed text-ink-300 sm:text-base">{faq.answer}</p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>

        <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
          <div className="glass-card p-7">
            <p className="eyebrow">Need a faster answer?</p>
            <p className="mt-4 font-serif text-2xl leading-snug text-ink-50">Chat with a consultant right now.</p>
            <a
              href={buildWhatsAppUrl(GENERAL_CONSULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-6 w-full"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Instant WhatsApp Consult
            </a>
            <p className="mt-3 text-center text-xs text-ink-400">{PHONE_DISPLAY}</p>
          </div>
          <AdSlot variant="rectangle" />
        </aside>
      </div>
    </section>
  );
}
