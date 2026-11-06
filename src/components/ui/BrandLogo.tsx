import { Sparkles } from 'lucide-react';

interface BrandLogoProps {
  className?: string;
}

export default function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/50 bg-gold-gradient shadow-glow-gold">
        <Sparkles className="h-5 w-5 text-ink-950" strokeWidth={2.2} aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl font-semibold tracking-wide text-ink-50">AuraVedic</span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-gold-300">
          &amp; Cosmic Mastery
        </span>
      </span>
    </div>
  );
}
