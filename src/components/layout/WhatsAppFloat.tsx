import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, GENERAL_CONSULT_MESSAGE } from '@/lib/whatsapp';

export default function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl(GENERAL_CONSULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="btn-gold fixed bottom-5 right-5 z-40 h-14 w-14 animate-glow-pulse rounded-full p-0 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
