import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-couple.jpg";
import haldiImage from "@/assets/haldi.jpg";
import sangeetImage from "@/assets/sangeet.jpg";
import mandapImage from "@/assets/mandap.jpg";
import { couple, events } from "@/data/wedding";
import { Countdown } from "@/components/countdown";
import { MandalaDivider, Paisley, Diya } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhimanyu & Meera — A Royal Rajasthani Wedding" },
      {
        name: "description",
        content:
          "Five days of royal Rajasthani wedding celebrations at Sajjan Garh Palace, Udaipur — mehndi, haldi, sangeet, baraat and the big day. RSVP now.",
      },
      {
        property: "og:title",
        content: "Abhimanyu & Meera — A Royal Rajasthani Wedding",
      },
      {
        property: "og:description",
        content:
          "Join us at Sajjan Garh Palace, Udaipur, February 2027 — mehndi, haldi, sangeet, baraat and the big day.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const fallingPetals = [
  { left: "6%", delay: "0s", duration: "14s", size: 14 },
  { left: "22%", delay: "3s", duration: "17s", size: 10 },
  { left: "38%", delay: "7s", duration: "13s", size: 16 },
  { left: "57%", delay: "1.5s", duration: "18s", size: 12 },
  { left: "72%", delay: "5s", duration: "15s", size: 15 },
  { left: "88%", delay: "9s", duration: "16s", size: 11 },
];

function Petals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {fallingPetals.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 block rounded-[60%_40%_55%_45%/50%_60%_40%_50%]"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 1.4,
            background: "var(--color-saffron)",
            opacity: 0,
            animation: `petals-fall ${p.duration} linear ${p.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}

const eventImages = [haldiImage, sangeetImage, mandapImage];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92svh] items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Abhimanyu and Meera in royal Rajasthani wedding attire at a palace"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full animate-ken-burns object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/70 via-maroon-deep/35 to-maroon-deep/80" />
        <Petals />

        <div className="relative z-10 px-4 py-20 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-gold-soft sm:text-sm">
              With the blessings of our families
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="mt-4 font-display text-5xl leading-tight text-shimmer-gold sm:text-7xl lg:text-8xl">
              Abhimanyu <span className="text-gold">&amp;</span> Meera
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-4 font-body text-base italic text-ivory/90 sm:text-lg">
              “Two souls, one raga — written in the stars of Rajasthan.”
            </p>
          </Reveal>
          <Reveal delay={450}>
            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-gold-soft sm:text-base">
              {couple.dateLabel} · {couple.venue}, {couple.city}
            </p>
          </Reveal>
          <Reveal delay={600}>
            <div className="mt-8">
              <Countdown targetISO={couple.dateISO} />
            </div>
          </Reveal>
          <Reveal delay={750}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/rsvp"
                className="rounded-full bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-maroon-deep shadow-lg transition hover:bg-gold-soft"
              >
                RSVP Now
              </Link>
              <Link
                to="/events"
                className="rounded-full border border-gold/70 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-soft transition hover:bg-gold/15"
              >
                View Events
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Invitation verse */}
      <section className="relative bg-cream py-16 sm:py-24">
        <Paisley className="absolute -left-6 top-8 h-36 text-gold/40 sm:h-52" />
        <Paisley className="absolute -right-6 bottom-8 h-36 rotate-180 text-gold/40 sm:h-52" />
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <MandalaDivider />
            <h2 className="mt-6 font-display text-3xl text-maroon-deep sm:text-4xl">
              Saath Phere, Saath Janam
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Together with our families, we invite you to celebrate our union in the land of
              palaces and lakes. Five days of song, colour and ritual await — bring your
              blessings, your dancing shoes and your appetite.
            </p>
            <p className="mt-6 font-display text-xl text-terracotta">{couple.hashtag}</p>
          </Reveal>
        </div>
      </section>

      {/* Event teasers */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center">
              <MandalaDivider />
              <h2 className="mt-6 font-display text-3xl text-maroon-deep sm:text-4xl">
                The Celebrations
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {events.slice(1, 4).map((ev, i) => (
              <Reveal key={ev.name} delay={i * 120}>
                <article className="group overflow-hidden rounded-2xl ornate-border bg-card shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="overflow-hidden">
                    <img
                      src={eventImages[i]}
                      alt={ev.name}
                      width={1600}
                      height={1072}
                      loading="lazy"
                      className="h-52 w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <p className="font-display text-2xl text-maroon-deep">{ev.hindiName}</p>
                    <h3 className="mt-1 font-display text-xl text-terracotta">{ev.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{ev.date}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 text-center">
              <Link
                to="/events"
                className="inline-block rounded-full bg-maroon-deep px-8 py-3 text-sm uppercase tracking-[0.2em] text-gold-soft transition hover:bg-terracotta"
              >
                All Five Celebrations
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Diya band */}
      <section className="relative overflow-hidden bg-maroon-deep py-16 text-center text-ivory sm:py-20">
        <div className="jaali-pattern absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-xl px-6">
          <Diya className="mx-auto h-16 w-16 animate-flicker text-gold" />
          <p className="mt-6 font-display text-2xl leading-snug text-gold-soft sm:text-3xl">
            “Where there is love there is light — come, light a diya with us.”
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gold-soft/70">
            {couple.dateLabel}
          </p>
        </div>
      </section>
    </>
  );
}
