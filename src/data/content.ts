import { Gem, Globe2, Hash, Landmark, Orbit, Award, ShieldCheck, type LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  tagline: string;
  price: string;
  icon: LucideIcon;
  benefits: string[];
  bookingMessage: string;
}

export const SERVICES: Service[] = [
  {
    id: 'vedic-astrology',
    title: 'Vedic Astrology',
    tagline: 'Precision Jyotish guidance for life timing, career and marriage.',
    price: 'From $10',
    icon: Orbit,
    benefits: [
      'Complete horoscope (Kundli) analysis',
      'Dasha and transit predictions for the next 12 to 24 months',
      'Career and marriage compatibility matching',
    ],
    bookingMessage:
      'Hi, I would like to book a Vedic Astrology consultation (horoscope analysis, Dasha/transit predictions, career & marriage matching).',
  },
  {
    id: 'vastu-shastra',
    title: 'Vedic Vastu Shastra',
    tagline: 'Harmonize the energy of your home or business without demolition.',
    price: 'From $10',
    icon: Landmark,
    benefits: [
      'Residential and commercial structural balancing',
      'Energy grid layout optimization',
      'Directional remedies that need no demolition',
    ],
    bookingMessage:
      'Hi, I would like to book a Vedic Vastu Shastra consultation for my home/commercial space.',
  },
  {
    id: 'numerology',
    title: 'Numerology',
    tagline: 'Align your name, numbers and destiny matrix for success.',
    price: 'From $15',
    icon: Hash,
    benefits: [
      'Name correction for success',
      'Mobile and vehicle numerology',
      'Destiny matrix mapping',
    ],
    bookingMessage:
      'Hi, I would like to book a Numerology consultation (name correction, mobile/vehicle numerology, destiny matrix).',
  },
];

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  country: 'USA' | 'UK' | 'UAE' | 'India';
  service: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Daniel R.',
    city: 'New York',
    country: 'USA',
    service: 'Career Horoscope Analysis',
    quote:
      'The timing guidance was remarkably specific. I used the transit window it highlighted to make the career move I had been postponing for two years.',
  },
  {
    id: 't2',
    name: 'Sophie M.',
    city: 'London',
    country: 'UK',
    service: 'Vastu Shastra Home Review',
    quote:
      'They reorganized my home office layout with simple directional changes. No construction, no disruption, and my focus at work has noticeably improved.',
  },
  {
    id: 't3',
    name: 'Amira K.',
    city: 'Dubai',
    country: 'UAE',
    service: 'Destiny Matrix Numerology',
    quote:
      'Clear, calm and deeply personal. The destiny matrix explained patterns in my life that I had never been able to put into words.',
  },
  {
    id: 't4',
    name: 'Priya S.',
    city: 'Bengaluru',
    country: 'India',
    service: 'Marriage Compatibility Matching',
    quote:
      'Thoughtful, honest and never pushy. The compatibility reading gave my family and me the clarity we needed to move forward with confidence.',
  },
  {
    id: 't5',
    name: 'Michael T.',
    city: 'Chicago',
    country: 'USA',
    service: 'Commercial Vastu Balancing',
    quote:
      'We applied their energy grid recommendations to our new office floor plan. The team noticed the change within weeks, and the consultation paid for itself.',
  },
  {
    id: 't6',
    name: 'James L.',
    city: 'Manchester',
    country: 'UK',
    service: 'Name Correction Numerology',
    quote:
      'The name correction suggestions were practical and easy to adopt. It felt respectful of tradition while being very grounded in real-life decisions.',
  },
];

export const GLOBAL_DESKS = [
  { city: 'Dubai', timeZone: 'Asia/Dubai', region: 'UAE' },
  { city: 'London', timeZone: 'Europe/London', region: 'UK' },
  { city: 'New York', timeZone: 'America/New_York', region: 'USA' },
  { city: 'Mumbai', timeZone: 'Asia/Kolkata', region: 'India' },
];

export const FAQS = [
  {
    question: 'Do you offer consultations for clients outside India?',
    answer:
      'Yes. Consultations are delivered over WhatsApp, voice or video, so clients in the USA, UK, UAE and beyond can book from anywhere. We schedule around your local time zone.',
  },
  {
    question: 'What details do I need to share for an astrology reading?',
    answer:
      'Your full name, date, time and place of birth give the most accurate horoscope. If you do not know your exact birth time, share what you have and we will tell you how that affects the reading.',
  },
  {
    question: 'Is Vastu Shastra possible without demolition or construction?',
    answer:
      'In most cases, yes. Our Vastu approach focuses on directional remedies, placement of furniture and entrances, colour, and energy grid balancing. Structural changes are only suggested when they are truly essential.',
  },
  {
    question: 'How is my personal information handled?',
    answer:
      'Your details are used only to prepare your consultation. They are never sold or shared with third parties, and you can ask us to delete them at any time.',
  },
  {
    question: 'Is my first question really free?',
    answer:
      'Yes. Share your details and your question through the free-question form, and we will reply on WhatsApp with your first answer at no cost. Detailed multi-part consultations are priced separately.',
  },
  {
    question: 'How quickly will I receive a response?',
    answer:
      'Most WhatsApp enquiries receive a reply within a few hours during our working days. Urgent matters can be flagged in your first message.',
  },
];

export const TRUST_BADGES = [
  { label: '100% Confidential', icon: ShieldCheck },
  { label: 'Global Client Base', icon: Globe2 },
  { label: 'Vedic Certified Expert', icon: Award },
];

export const HIGHLIGHTS = [
  { label: 'Certified Jyotish Practice', icon: Award },
  { label: 'Vastu Without Demolition', icon: Landmark },
  { label: 'Premium Numerology Matrix', icon: Gem },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Vedic Astrology', href: '#vedic-astrology' },
  { label: 'Vastu Shastra', href: '#vastu-shastra' },
  { label: 'Numerology', href: '#numerology' },
  { label: 'About Expert', href: '#about-expert' },
  { label: 'Global Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const DISCLAIMER =
  'AuraVedic & Cosmic Mastery offers Vedic Astrology, Vastu Shastra and Numerology as cultural and spiritual guidance for personal reflection. These services are not a substitute for medical, legal, financial or other professional advice. Outcomes depend on individual choices and actions, and no specific result is guaranteed.';
