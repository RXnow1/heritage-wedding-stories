import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { couple } from "@/data/wedding";

const links = [
  { to: "/", label: "Home" },
  { to: "/our-story", label: "Our Story" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/rsvp", label: "RSVP" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-gold/30 bg-ivory/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="font-display text-xl text-maroon-deep sm:text-2xl">
            A <span className="text-saffron">&amp;</span> M
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.3em] text-muted-foreground sm:block">
            Udaipur · Feb 2027
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm uppercase tracking-[0.18em] transition-colors hover:text-terracotta ${
                pathname === l.to ? "text-terracotta" : "text-maroon-deep"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/rsvp"
            className="rounded-full bg-maroon-deep px-5 py-2 text-sm uppercase tracking-[0.18em] text-gold-soft transition hover:bg-terracotta"
          >
            RSVP
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-maroon-deep md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-gold/30 bg-ivory px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-3 text-sm uppercase tracking-[0.2em] ${
                    pathname === l.to
                      ? "bg-secondary text-terracotta"
                      : "text-maroon-deep"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-3 px-3 text-xs text-muted-foreground">{couple.dateLabel}</p>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/30 bg-maroon-deep py-10 text-center text-ivory">
      <p className="font-display text-2xl text-shimmer-gold sm:text-3xl">A &amp; M</p>
      <p className="mt-2 text-sm text-gold-soft/90">
        {couple.dateLabel} · {couple.venue}, {couple.city}
      </p>
      <p className="mt-1 text-xs text-gold-soft/70">{couple.hashtag}</p>
      <p className="mt-6 text-[10px] text-gold-soft/50">
        Music: “Sunset Sitar Raga” — BudgetPixel AI (CC BY 4.0)
      </p>
    </footer>
  );
}
