import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-couple.jpg";
import haldiImage from "@/assets/haldi.jpg";
import sangeetImage from "@/assets/sangeet.jpg";
import mandapImage from "@/assets/mandap.jpg";
import mehndiImage from "@/assets/mehndi.jpg";
import baraatImage from "@/assets/baraat.jpg";
import receptionImage from "@/assets/reception.jpg";
import candidImage from "@/assets/couple-candid.jpg";
import { galleryImages } from "@/data/wedding";
import { MandalaDivider } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Abhimanyu & Meera" },
      {
        name: "description",
        content:
          "Portraits and moments from the royal Rajasthani wedding of Abhimanyu and Meera — the mandap, the mehndi, the baraat and more.",
      },
      { property: "og:title", content: "Gallery — Abhimanyu & Meera" },
      {
        property: "og:description",
        content: "Portraits and moments from the royal Rajasthani wedding of Abhimanyu and Meera.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gallery,
});

const imageBySrc: Record<string, string> = {
  hero: heroImage,
  haldi: haldiImage,
  sangeet: sangeetImage,
  mandap: mandapImage,
  mehndi: mehndiImage,
  baraat: baraatImage,
  reception: receptionImage,
  candid: candidImage,
};

function Gallery() {
  return (
    <>
      <section className="relative overflow-hidden bg-maroon-deep py-20 text-center text-ivory sm:py-24">
        <div className="jaali-pattern absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-gold-soft">Moments & Memories</p>
            <h1 className="mt-4 font-display text-4xl text-shimmer-gold sm:text-6xl">
              The Wedding Album
            </h1>
            <p className="mt-4 text-ivory/85">
              A glimpse of the palaces, the colours and the people — new photographs will be
              added after every celebration.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <MandalaDivider />
          </Reveal>
          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {galleryImages.map((img, i) => (
              <Reveal key={img.src} delay={(i % 3) * 100}>
                <figure className="group relative overflow-hidden rounded-2xl ornate-border shadow-md">
                  <img
                    src={imageBySrc[img.src]}
                    alt={img.caption}
                    width={1600}
                    height={1072}
                    loading="lazy"
                    className="w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-maroon-deep/90 to-transparent p-4 text-sm text-gold-soft opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {img.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
