import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import GlobalDesks from '@/components/testimonials/GlobalDesks';
import { TESTIMONIALS } from '@/data/content';

const CARD_GAP_PX = 24;

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function cardStep() {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null | undefined;
    return card ? card.offsetWidth + CARD_GAP_PX : 0;
  }

  function scrollToIndex(index: number) {
    trackRef.current?.scrollTo({ left: index * cardStep(), behavior: 'smooth' });
  }

  function handleScroll() {
    const step = cardStep();
    if (!trackRef.current || step === 0) return;
    setActiveIndex(Math.min(TESTIMONIALS.length - 1, Math.round(trackRef.current.scrollLeft / step)));
  }

  function scrollByCard(direction: 1 | -1) {
    trackRef.current?.scrollBy({ left: direction * cardStep(), behavior: 'smooth' });
  }

  return (
    <section id="testimonials" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Global Testimonials"
              title="Trusted by clients across four continents' time zones"
            />
            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 text-gold-200 transition duration-300 hover:border-gold-300 hover:bg-gold-400/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 text-gold-200 transition duration-300 hover:border-gold-300 hover:bg-gold-400/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <GlobalDesks />
        </Reveal>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          tabIndex={0}
          aria-label="Client testimonials"
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.id}
              className="glass-card flex w-[85%] shrink-0 snap-start flex-col p-8 transition duration-500 hover:-translate-y-1 hover:border-gold-400/35 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-1 text-gold-300" aria-label="Five star rating">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <span className="rounded-full border border-gold-400/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-200">
                  {testimonial.country}
                </span>
              </div>

              <Quote className="mt-6 h-8 w-8 text-gold-400/60" aria-hidden="true" />
              <p className="mt-4 flex-1 text-base leading-relaxed text-ink-100">{testimonial.quote}</p>

              <div className="mt-8 border-t border-gold-400/10 pt-6">
                <p className="font-serif text-xl text-ink-50">{testimonial.name}</p>
                <p className="mt-1 text-sm text-ink-400">
                  {testimonial.city}, {testimonial.country}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.15em] text-gold-300">{testimonial.service}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2" role="tablist" aria-label="Choose testimonial">
            {TESTIMONIALS.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => scrollToIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-8 bg-gold-300' : 'w-2 bg-ink-600 hover:bg-ink-400'
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-ink-400">Client names are abbreviated for privacy.</p>
        </div>
      </div>
    </section>
  );
}
