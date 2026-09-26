import img1 from "@/assets/image.png.asset.json";
import img2 from "@/assets/image-2.png.asset.json";
import img3 from "@/assets/image-3.png.asset.json";
import img4 from "@/assets/image-4.png.asset.json";
import { Reveal } from "./Reveal";

const photos = [
  { src: img2.url, caption: "Ha Long Bay", alt: "Looking out at a rainbow over Ha Long Bay" },
  { src: img1.url, caption: "Lunar New Year", alt: "Portrait in front of peach blossoms" },
  { src: img3.url, caption: "Campus days", alt: "Outdoors near a university building" },
  { src: img4.url, caption: "Off duty", alt: "Sitting next to a teddy bear" },
];

export function BeyondTheCode() {
  return (
    <section className="relative border-t border-border bg-surface/20">
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="font-display text-4xl leading-[0.95] tracking-[-0.03em] uppercase sm:text-6xl">
              Beyond
              <span className="block text-muted-foreground">the code.</span>
            </h2>
            <p className="mt-6 text-base text-muted-foreground">
              Engineer by profession.
              <br />
              Curious by nature.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {photos.map((p, i) => (
              <Reveal
                key={p.caption}
                delay={i * 90}
                className={i % 2 === 1 ? "sm:mt-10" : ""}
              >
                <figure className="group">
                  <div className="overflow-hidden rounded-md border border-border bg-background">
                    <img
                      src={p.src}
                      alt={p.alt}
                      loading="lazy"
                      className="aspect-square w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <figcaption className="mt-2 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                    {p.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
