/** Ornamental SVGs shared across the site. */

export function MandalaDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold sm:w-24" />
      <svg viewBox="0 0 64 64" className="h-7 w-7 animate-spin-slow text-gold">
        <g fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="32" cy="32" r="10" />
          {Array.from({ length: 8 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 45} 32 32)`}>
              <line x1="32" y1="16" x2="32" y2="22" />
              <circle cx="32" cy="12" r="2.4" />
            </g>
          ))}
          <circle cx="32" cy="32" r="3" fill="currentColor" stroke="none" />
        </g>
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold sm:w-24" />
    </div>
  );
}

export function Paisley({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" className={className} fill="none" aria-hidden="true">
      <path
        d="M50 8c22 0 40 16 40 36 0 24-24 30-24 52 0 14 10 20 10 32"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M50 8c-22 0-40 16-40 36 0 24 24 30 24 52 0 14-10 20-10 32"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="50" cy="120" r="6" fill="currentColor" />
    </svg>
  );
}

export function Diya({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <ellipse cx="40" cy="58" rx="26" ry="9" fill="currentColor" opacity="0.35" />
      <ellipse cx="40" cy="55" rx="26" ry="9" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M40 50c-6-4-8-10-4-16 1 4 3 6 6 8 3-2 5-6 4-10 5 5 6 13-1 18z"
        fill="currentColor"
      />
      <path d="M40 47c-3-3-4-7-1-11 2 3 6 5 8 4-1 4-3 6-7 7z" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

/* ---------- Toran: marigold garland hanging from a top edge ---------- */

export function Toran({ className = "", strands = 18 }: { className?: string; strands?: number }) {
  const W = 1440;
  const beadCols = Math.ceil(W / 24);
  const step = W / strands;
  return (
    <svg viewBox="0 0 1440 128" className={className} preserveAspectRatio="xMidYMin meet" aria-hidden="true">
      {Array.from({ length: beadCols }, (_, i) => (
        <g key={`b${i}`}>
          <circle cx={i * 24 + 12} cy={10} r={5.2} fill={i % 2 ? "var(--color-saffron)" : "var(--color-gold)"} />
          <circle cx={i * 24} cy={21} r={3.2} fill={i % 2 ? "var(--color-gold)" : "var(--color-saffron)"} />
        </g>
      ))}
      {Array.from({ length: strands }, (_, i) => {
        const x = step * (i + 0.5);
        const drop = 82 + (i % 4 === 2 ? 24 : 0);
        return (
          <g key={`s${i}`}>
            <line x1={x} y1={16} x2={x} y2={drop - 14} stroke="var(--color-gold)" strokeWidth={2} />
            {[0.3, 0.55, 0.8].map((t, j) => (
              <circle
                key={j}
                cx={x}
                cy={16 + (drop - 30 - 16) * t}
                r={3.6}
                fill={j % 2 ? "var(--color-saffron)" : "var(--color-gold)"}
              />
            ))}
            <circle cx={x} cy={drop} r={10} fill="var(--color-saffron)" />
            <circle cx={x} cy={drop} r={6} fill="var(--color-terracotta)" />
            <circle cx={x} cy={drop} r={2.4} fill="var(--color-gold)" />
          </g>
        );
      })}
    </svg>
  );
}

/* ---------- CurveDivider: scalloped / wavy edge between two sections ----------
 * Place inside a wrapper painted with the PREVIOUS section's colour; `fill`
 * is the NEXT section's colour, whose scallops rise up into the previous one.
 */

export function CurveDivider({
  fill,
  className = "",
  variant = "scallop",
}: {
  fill: string;
  className?: string;
  variant?: "scallop" | "wave";
}) {
  let edge = "";
  if (variant === "scallop") {
    for (let x = 0; x < 1440; x += 60) edge += `A 30 30 0 0 1 ${x + 60} 30 `;
  } else {
    for (let x = 0; x < 1440; x += 240) edge += `C ${x + 80} 2 ${x + 160} 58 ${x + 240} 30 `;
  }
  const d = `M0 64 L0 30 ${edge}L1440 64 Z`;
  return (
    <div className={className} style={{ color: fill }} aria-hidden="true">
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="block h-9 w-full sm:h-14" fill="currentColor">
        <path d={d} />
      </svg>
    </div>
  );
}

/* ---------- MandalaBackdrop: large line-art mandala for dark sections ---------- */

function petalRing(count: number, r1: number, r2: number, w: number, offset = 0) {
  const midY = 400 - (r1 + r2) / 2;
  return Array.from({ length: count }, (_, i) => (
    <path
      key={i}
      d={`M400 ${400 - r1} Q ${400 + w} ${midY} 400 ${400 - r2} Q ${400 - w} ${midY} 400 ${400 - r1}`}
      transform={`rotate(${offset + (360 / count) * i} 400 400)`}
    />
  ));
}

export function MandalaBackdrop({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 800"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <circle cx="400" cy="400" r="396" />
      <circle cx="400" cy="400" r="382" strokeDasharray="3 9" />
      {petalRing(24, 252, 374, 36)}
      {petalRing(18, 150, 244, 30, 10)}
      <circle cx="400" cy="400" r="142" />
      {petalRing(12, 62, 136, 20)}
      <circle cx="400" cy="400" r="56" />
      <circle cx="400" cy="400" r="34" strokeDasharray="2 6" />
      {Array.from({ length: 8 }, (_, i) => {
        const a = (Math.PI / 4) * i;
        return (
          <circle
            key={i}
            cx={400 + 44 * Math.cos(a)}
            cy={400 + 44 * Math.sin(a)}
            r="4"
            fill="currentColor"
            stroke="none"
          />
        );
      })}
      <circle cx="400" cy="400" r="8" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ---------- MonogramMedallion: mandala-framed initial, slowly rotating ring ---------- */

export function MonogramMedallion({ letter, className = "" }: { letter: string; className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 60 60"
          to="360 60 60"
          dur="45s"
          repeatCount="indefinite"
        />
        {Array.from({ length: 18 }, (_, i) => (
          <path key={i} d="M60 5 Q 66.5 15 60 25 Q 53.5 15 60 5" transform={`rotate(${i * 20} 60 60)`} />
        ))}
      </g>
      <circle cx="60" cy="60" r="34" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="30" fill="currentColor" opacity="0.12" stroke="none" />
      <text
        x="60"
        y="61"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="'Abril Fatface', serif"
        fontSize="32"
        fill="currentColor"
      >
        {letter}
      </text>
    </svg>
  );
}
