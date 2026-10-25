import { createFileRoute, Link } from "@tanstack/react-router";
import haldiImage from "@/assets/haldi.jpg";
import sangeetImage from "@/assets/sangeet.jpg";
import mandapImage from "@/assets/mandap.jpg";
import { events } from "@/data/wedding";
import { MandalaDivider } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Abhimanyu & Meera" },
      {
        name: "description",
        content:
          "Five days of celebration — mehndi, haldi, sangeet, baraat and pheras at Sajjan Garh Palace, Udaipur, 10–14 February 2027.",
      },
      { property: "og:title", content: "Events — Abhimanyu & Meera" },
      {
        property: "og:description",
        content:
          "Mehndi, haldi, sangeet, baraat and pheras at Sajjan Garh Palace, Udaipur — 10–14 February 2027.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Events,
});

const eventImages: Record<string, string | undefined> = {
  Mehndi: undefined,
  Haldi: haldiImage,
  Sangeet: sangeetImage,
  "Baraat & Varmala": undefined,
  "Pheras & Reception": mandapImage,
};

function Events() {
  return (
    <>
      <section className="relative overflow-hidden bg-maroon-deep py-20 text-center text-ivory sm:py-24">
        <div className="jaali-pattern absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-gold-soft">10 — 14 February 2027</p>
            <h1 className="mt-4 font-display text-4xl text-shimmer-gold sm:text-6xl">
              Five Days of Celebration
            </h1>
            <p className="mt-4 text-ivory/85">
              Every ritual has its own colour, its own music and its own mischief. Come for one
              day or all five.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-4xl space-y-12 px-4 sm:px-6">
          {events.map((ev, i) => {
            const image = eventImages[ev.name];
            return (
              <Reveal key={ev.name}>
                <article className="overflow-hidden rounded-2xl ornate-border bg-card shadow-md">
                  {image && (
                    <img
                      src={image}
                      alt={ev.name}
                      width={1600}
                      height={1072}
                      loading="lazy"
                      className="h-56 w-full object-cover sm:h-72"
                    />
                  )}
                  <div className="p-6 sm:p-10">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h2 className="font-display text-2xl text-maroon-deep sm:text-3xl">
                        <span className="mr-3 text-saffron">{ev.hindiName}</span>
                        {ev.name}
                      </h2>
                      <span className="rounded-full bg-secondary px-4 py-1 text-xs uppercase tracking-[0.2em] text-terracotta">
                        {ev.dressCode}
                      </span>
                    </div>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-terracotta">
                      {ev.date} · {ev.time}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{ev.venue}</p>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{ev.description}</p>
                    <span className="mt-4 inline-block text-xs text-muted-foreground/70">
                      Day {i + 1} of 5
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mx-auto mt-16 max-w-4xl px-4 text-center sm:px-6">
          <MandalaDivider />
          <Reveal>
            <p className="mt-6 text-muted-foreground">
              Directions, shuttle timings and parking details will be shared with confirmed
              guests.
            </p>
            <Link
              to="/rsvp"
              className="mt-6 inline-block rounded-full bg-maroon-deep px-8 py-3 text-sm uppercase tracking-[0.2em] text-gold-soft transition hover:bg-terracotta"
            >
              RSVP Now
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
