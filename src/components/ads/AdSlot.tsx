interface AdSlotProps {
  variant: 'rectangle' | 'leaderboard';
}

const SIZES = {
  rectangle: { label: '300 x 250', frame: 'h-[250px] w-full max-w-[300px]' },
  leaderboard: { label: '728 x 90', frame: 'h-[90px] w-full max-w-[728px]' },
} as const;

export default function AdSlot({ variant }: AdSlotProps) {
  const { label, frame } = SIZES[variant];

  return (
    <aside aria-label="Advertisement" className="mx-auto flex w-full flex-col items-center gap-2">
      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-400">Advertisement</span>
      <div
        className={`${frame} flex items-center justify-center rounded-2xl border border-dashed border-gold-400/25 bg-ink-900/50 text-center transition duration-300 hover:border-gold-400/50`}
      >
        <span className="px-4 text-xs text-ink-400">Ad space {label}</span>
      </div>
    </aside>
  );
}
