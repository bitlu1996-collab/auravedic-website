import { Facebook, Instagram, Phone, Youtube } from 'lucide-react';
import BrandLogo from '@/components/ui/BrandLogo';
import AdSlot from '@/components/ads/AdSlot';
import NewsletterForm from '@/components/layout/NewsletterForm';
import { DISCLAIMER, NAV_LINKS, SERVICES } from '@/data/content';
import { buildWhatsAppUrl, GENERAL_CONSULT_MESSAGE, PHONE_DISPLAY, WHATSAPP_NUMBER } from '@/lib/whatsapp';

const SOCIAL_LINKS = [
  { label: 'Instagram', icon: Instagram },
  { label: 'YouTube', icon: Youtube },
  { label: 'Facebook', icon: Facebook },
];

const columnHeading = 'mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-300';
const columnLink = 'text-sm text-ink-300 transition-colors duration-200 hover:text-gold-200';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-gold-400/10 bg-ink-900/70">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-14">
          <AdSlot variant="leaderboard" />
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-4">
            <BrandLogo />
            <p className="max-w-sm text-sm leading-relaxed text-ink-300">
              Ancient Vedic wisdom paired with modern cosmic precision, guiding clients across the world toward clarity in
              career, wealth, relationships and home.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/20 text-ink-300 transition duration-300 hover:-translate-y-0.5 hover:border-gold-400/60 hover:text-gold-200"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links" className="lg:col-span-2">
            <h3 className={columnHeading}>Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={columnLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h3 className={columnHeading}>Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a href={`#${service.id}`} className={columnLink}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8 lg:col-span-4">
            <div>
              <h3 className={columnHeading}>Direct Contact</h3>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="flex items-center gap-3 font-serif text-2xl text-ink-50 transition-colors duration-200 hover:text-gold-200"
              >
                <Phone className="h-5 w-5 text-gold-300" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={buildWhatsAppUrl(GENERAL_CONSULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold mt-5 w-full sm:w-auto"
              >
                Message on WhatsApp
              </a>
            </div>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-16 space-y-5 border-t border-gold-400/10 pt-8">
          <p className="text-xs leading-relaxed text-ink-400">
            <span className="font-semibold text-ink-200">Disclaimer. </span>
            {DISCLAIMER}
          </p>
          <p className="text-xs text-ink-400">
            &copy; {new Date().getFullYear()} AuraVedic &amp; Cosmic Mastery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
