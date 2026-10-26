import { useEffect, useState } from "react";

type Left = { days: number; hours: number; minutes: number; seconds: number };

function diff(target: number): Left {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor(ms / 3_600_000) % 24,
    minutes: Math.floor(ms / 60_000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
  };
}

export function Countdown({ targetISO }: { targetISO: string }) {
  const target = new Date(targetISO).getTime();
  const [left, setLeft] = useState<Left | null>(null);

  useEffect(() => {
    setLeft(diff(target));
    const id = setInterval(() => setLeft(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const items: Array<{ label: string; value: number | string }> = [
    { label: "Days", value: left?.days ?? "—" },
    { label: "Hours", value: left?.hours ?? "—" },
    { label: "Minutes", value: left?.minutes ?? "—" },
    { label: "Seconds", value: left?.seconds ?? "—" },
  ];

  return (
    <div className="flex justify-center gap-3 sm:gap-6" aria-label="Countdown to the wedding">
      {items.map((item) => (
        <div
          key={item.label}
          className="ornate-border min-w-[68px] rounded-xl bg-maroon-deep/40 px-3 py-3 text-center backdrop-blur-sm sm:min-w-[92px] sm:px-5 sm:py-4"
        >
          <div className="font-display text-3xl text-shimmer-gold sm:text-5xl">{value}</div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-gold-soft sm:text-xs">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
