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
