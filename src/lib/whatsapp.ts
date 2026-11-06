import type { LeadInput } from '@/lib/submissions';

export const WHATSAPP_NUMBER = '917735442344';
export const PHONE_DISPLAY = '+91 7735442344';

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildLeadMessage(lead: LeadInput) {
  return [
    'Hi, I submitted my details for my free question:',
    `Name: ${lead.fullName.trim()}`,
    `Date of Birth: ${lead.dateOfBirth}`,
    `Time of Birth: ${lead.birthTime || 'Not known'}`,
    `Place of Birth: ${lead.birthPlace.trim()}`,
    `Question: ${lead.question.trim()}`,
  ].join('\n');
}

export const CLAIM_FREE_QUESTION_MESSAGE =
  'Hi, I would like to claim my 1st question free. Could you please guide me?';

export const GENERAL_CONSULT_MESSAGE =
  'Hi, I would like an instant consultation about my career, wealth, relationships or home energy.';
