import { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import BrandLogo from '@/components/ui/BrandLogo';
import { NAV_LINKS } from '@/data/content';
import { buildWhatsAppUrl, GENERAL_CONSULT_MESSAGE } from '@/lib/whatsapp';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsAppUrl = buildWhatsAppUrl(GENERAL_CONSULT_MESSAGE);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'border-b border-gold-400/15 bg-ink-950/85 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8" aria-label="Main">
        <a href="#home" aria-label="AuraVedic & Cosmic Mastery home" className="shrink-0">
          <BrandLogo />
        </a>

        <ul className="hidden items-center gap-5 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative whitespace-nowrap text-sm font-medium text-ink-200 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold-300 after:transition-all after:duration-300 hover:text-gold-200 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold hidden animate-glow-pulse px-5 py-2.5 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Instant WhatsApp Consult
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/30 text-gold-200 transition duration-300 hover:bg-gold-400/10 xl:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="animate-fade-up border-t border-gold-400/15 bg-ink-950/95 px-5 pb-8 pt-4 backdrop-blur-xl xl:hidden">
          <ul className="flex flex-col divide-y divide-gold-400/10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 font-serif text-xl text-ink-100 transition-colors duration-200 hover:text-gold-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-6 w-full sm:hidden"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Instant WhatsApp Consult
          </a>
        </div>
      )}
    </header>
  );
}
