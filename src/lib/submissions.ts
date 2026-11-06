import { supabase } from '@/lib/supabase';

export interface LeadInput {
  fullName: string;
  dateOfBirth: string;
  birthTime: string;
  birthPlace: string;
  question: string;
}

export async function saveLead(lead: LeadInput) {
  if (!supabase) throw new Error('Lead storage is not configured.');

  const { error } = await supabase.from('leads').insert({
    full_name: lead.fullName.trim(),
    date_of_birth: lead.dateOfBirth,
    birth_time: lead.birthTime || null,
    birth_place: lead.birthPlace.trim(),
    question: lead.question.trim(),
  });

  if (error) throw error;
}

const DUPLICATE_KEY_CODE = '23505';

export async function saveSubscriber(email: string) {
  if (!supabase) throw new Error('Newsletter storage is not configured.');

  const { error } = await supabase
    .from('newsletter_subscribers')
    .insert({ email: email.trim().toLowerCase() });

  if (error && error.code !== DUPLICATE_KEY_CODE) throw error;
  return { alreadySubscribed: error?.code === DUPLICATE_KEY_CODE };
}
