import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/services/ServiceCard';
import { SERVICES } from '@/data/content';

export default function ServicesGrid() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Core Services"
            title="Guidance Tailored to Every Chapter of Your Life"
            description="Three disciplines, one goal: precise, practical insight you can act on for career, wealth, home and relationships."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 120} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
