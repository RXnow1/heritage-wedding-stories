import { createFileRoute, Link } from "@tanstack/react-router";
import candidImage from "@/assets/couple-candid.jpg";
import haldiImage from "@/assets/haldi.jpg";
import { couple, story, familyQuotes } from "@/data/wedding";
import { MandalaDivider } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — Abhimanyu & Meera" },
      {
        name: "description",
        content:
          "From a crashed wedding in Jaipur to the mandap in Udaipur — the story of Abhimanyu and Meera, in five chapters.",
      },
      { property: "og:title", content: "Our Story — Abhimanyu & Meera" },
      {
        property: "og:description",
        content:
          "From a crashed wedding in Jaipur to the mandap in Udaipur — the story of Abhimanyu and Meera.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurStory,
});

function OurStory() {
  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden bg-maroon-deep py-20 text-center text-ivory sm:py-28">
        <img
          src={candidImage}
          alt="Abhimanyu and Meera laughing in a palace garden"
          width={1600}
          height={1072}
          className="absolute inset-0 h-full w-full animate-ken-burns object-cover opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/60 to-maroon-deep/85" />
        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-gold-soft">2019 — 2027</p>
            <h1 className="mt-4 font-display text-4xl text-shimmer-gold sm:text-6xl">
              How We Found Each Other
            </h1>
            <p className="mt-4 italic text-ivory/85">
              A wrong turn, a borrowed torch, and seven years later — a wedding.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <ol className="relative space-y-14 border-l-2 border-gold/50 pl-8 sm:pl-12">
            {story.map((chapter, i) => (
              <li key={chapter.year} className="relative">
                <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-gold bg-ivory sm:-left-[57px]">
                  <span className="h-2 w-2 rounded-full bg-terracotta" />
                </span>
                <Reveal delay={i * 80}>
                  <p className="font-display text-2xl text-saffron">{chapter.year}</p>
                  <h2 className="mt-1 font-display text-xl text-maroon-deep sm:text-2xl">
                    {chapter.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{chapter.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Couple quotes */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center">
              <MandalaDivider />
              <h2 className="mt-6 font-display text-3xl text-maroon-deep sm:text-4xl">
                In Their Own Words
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {familyQuotes.map((q, i) => (
              <Reveal key={q.by} delay={i * 150}>
                <blockquote className="h-full rounded-2xl ornate-border bg-card p-8 text-center shadow-sm">
                  <p className="font-display text-lg italic leading-relaxed text-terracotta sm:text-xl">
                    “{q.quote}”
                  </p>
                  <footer className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {q.by}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Families */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid items-center gap-10 sm:grid-cols-2">
            <Reveal>
              <img
                src={haldiImage}
                alt="Families celebrating the haldi ceremony"
                width={1600}
                height={1072}
                loading="lazy"
                className="rounded-2xl ornate-border object-cover shadow-md"
              />
            </Reveal>
            <Reveal delay={150}>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl text-maroon-deep">The Groom's Family</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {couple.groom.parents}, of Jodhpur. Custodians of the famous Rathore sangeet
                    playlist and a grandmother who insists on singing every ritual herself.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-maroon-deep">The Bride's Family</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {couple.bride.parents}, of Chittorgarh. Famous across three districts for their
                    hospitality, their ghoomar troupe and Moti the parrot who says "shaadi
                    mubarak".
                  </p>
                </div>
                <Link
                  to="/events"
                  className="inline-block rounded-full bg-maroon-deep px-8 py-3 text-sm uppercase tracking-[0.2em] text-gold-soft transition hover:bg-terracotta"
                >
                  Join the Celebrations
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
