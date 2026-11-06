import { useEffect, useState } from 'react';
import { GLOBAL_DESKS } from '@/data/content';

export default function GlobalDesks() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {GLOBAL_DESKS.map((desk) => {
        const localTime = new Intl.DateTimeFormat('en-US', {
          timeZone: desk.timeZone,
          hour: 'numeric',
          minute: '2-digit',
        }).format(now);

        return (
          <li key={desk.timeZone} className="glass-card flex items-center justify-between gap-4 px-5 py-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-300">{desk.region}</p>
              <p className="mt-1 text-sm text-ink-300">{desk.city}</p>
            </div>
            <time dateTime={now.toISOString()} className="font-serif text-2xl text-ink-50 tabular-nums">
              {localTime}
            </time>
          </li>
        );
      })}
    </ul>
  );
}
