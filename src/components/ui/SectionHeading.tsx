interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-[1.15] sm:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-lg">{description}</p>}
    </div>
  );
}
