import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import receptionImage from "@/assets/reception.jpg";
import { couple, rsvpSideOptions, eventsAttendingOptions } from "@/data/wedding";
import { MandalaDivider, Diya } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/rsvp")({
  head: () => ({
    meta: [
      { title: "RSVP — Abhimanyu & Meera" },
      {
        name: "description",
        content:
          "Respond by 20 January 2027 to join Abhimanyu & Meera's royal Rajasthani wedding celebrations at Sajjan Garh Palace, Udaipur.",
      },
      { property: "og:title", content: "RSVP — Abhimanyu & Meera" },
      {
        property: "og:description",
        content: "Respond by 20 January 2027 to join the celebrations at Sajjan Garh Palace, Udaipur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Rsvp,
});

const inputClasses =
  "w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-terracotta focus:ring-2 focus:ring-gold/40";

function Rsvp() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-maroon-deep py-20 text-center text-ivory sm:py-24">
        <img
          src={receptionImage}
          alt="Wedding reception tables set with candles"
          width={1600}
          height={1072}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/60 to-maroon-deep/85" />
        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-gold-soft">
              Kindly respond by 20 January 2027
            </p>
            <h1 className="mt-4 font-display text-4xl text-shimmer-gold sm:text-6xl">
              RSVP
            </h1>
            <p className="mt-4 text-ivory/85">
              {couple.dateLabel} · {couple.venue}, {couple.city}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          {submitted ? (
            <Reveal>
              <div className="rounded-2xl ornate-border bg-card p-10 text-center shadow-md">
                <Diya className="mx-auto h-14 w-14 animate-flicker text-saffron" />
                <h2 className="mt-4 font-display text-3xl text-maroon-deep">Shukriya!</h2>
                <p className="mt-4 text-muted-foreground">
                  Your response has been received with joy. The family pandit has noted it in the
                  ledger, Moti the parrot has squawked "shaadi mubarak", and we cannot wait to
                  celebrate with you.
                </p>
                <Link
                  to="/events"
                  className="mt-8 inline-block rounded-full bg-maroon-deep px-8 py-3 text-sm uppercase tracking-[0.2em] text-gold-soft transition hover:bg-terracotta"
                >
                  Browse the Events
                </Link>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <form
                className="rounded-2xl ornate-border bg-card p-6 shadow-md sm:p-10"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="text-center">
                  <MandalaDivider />
                  <h2 className="mt-4 font-display text-2xl text-maroon-deep sm:text-3xl">
                    Bless Us With Your Presence
                  </h2>
                </div>

                <div className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Full name
                    </label>
                    <input id="name" name="name" required placeholder="Aarav Sharma" className={inputClasses} />
                  </div>

                  <div>
                    <label htmlFor="side" className="mb-1 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Attending from
                    </label>
                    <select id="side" name="side" required className={inputClasses} defaultValue="">
                      <option value="" disabled>
                        Choose one
                      </option>
                      {rsvpSideOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="celebrations" className="mb-1 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Which celebrations
                    </label>
                    <select id="celebrations" name="celebrations" required className={inputClasses} defaultValue="">
                      <option value="" disabled>
                        Choose one
                      </option>
                      {eventsAttendingOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="guests" className="mb-1 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Number of guests
                    </label>
                    <input
                      id="guests"
                      name="guests"
                      type="number"
                      min={1}
                      max={10}
                      required
                      defaultValue={2}
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      A message for the couple (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Your blessings, a memory, a song request for the sangeet…"
                      className={inputClasses}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-maroon-deep py-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold-soft shadow-lg transition hover:bg-terracotta"
                  >
                    Send RSVP
                  </button>
                </div>
              </form>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
