import {
  BookOpen,
  CircleDot,
  Gamepad2,
  Joystick,
  MapPin,
  Sparkles,
  Swords,
  Trophy,
  Users,
} from "lucide-react";
import { Reveal } from "./Reveal";

const animeTags = ["Anime / Manga", "Japanese culture", "Action / Adventure", "Slice of Life", "Sci-Fi"];
const gamingTags = ["Gaming", "Build Team", "Rank Match", "Weekend Mode"];
const baseballTags = ["Baseball", "Weekend activity", "Training", "Entertainment"];

const polaroids = [
  {
    src: "/images/profile/nolan-portrait.webp",
    alt: "Nolan celebrating Lunar New Year beside peach blossoms",
    label: "Anime mode",
    rotation: "-rotate-2",
  },
  {
    src: "/images/profile/nolan-outdoor.webp",
    alt: "Nolan spending time outdoors",
    label: "Weekend mode",
    rotation: "rotate-2",
  },
];

export function BeyondTheCode() {
  return (
    <section id="beyond" className="relative overflow-hidden border-t border-border bg-lifestyle-bg">
      <div className="grid-bg absolute inset-0 opacity-35" aria-hidden />
      <img
        src="/images/beyond-the-code/japan/neon-tokyo-night.jpg"
        alt=""
        loading="lazy"
        width={1536}
        height={1024}
        className="absolute inset-0 size-full object-cover opacity-25 mix-blend-screen"
        aria-hidden
      />
      <div className="absolute inset-0 bg-beyond-overlay" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <Reveal>
            <p className="label-eyebrow flex items-center gap-3">
              <span className="text-primary">06</span> / Beyond the code
            </p>
            <h2 className="mt-6 font-display text-5xl leading-[0.92] uppercase sm:text-7xl">
              More than
              <span className="block text-gradient">just code.</span>
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              A wibu who loves anime, manga, Japanese culture, FC Online and baseball on
              weekends.
            </p>
          </Reveal>

          <Reveal delay={100} className="relative min-h-[260px] overflow-hidden rounded-md border border-primary/30">
            <img
              src="/images/beyond-the-code/anime/anime-room.jpg"
              alt="Anime-inspired room overlooking a Japanese city at night"
              loading="lazy"
              width={1280}
              height={960}
              className="absolute inset-0 size-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-image-overlay" />
            <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] tracking-[0.22em] text-lifestyle-pink uppercase">Japan after dark</p>
                <p className="mt-1 font-display text-xl">Stories, worlds & imagination.</p>
              </div>
              <MapPin className="size-5 shrink-0 text-primary" />
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          <Reveal className="group overflow-hidden rounded-md border border-lifestyle-pink/50 bg-background/80 backdrop-blur-sm">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src="/images/beyond-the-code/anime/anime-room.jpg"
                alt="Anime and manga collection in a cinematic room"
                loading="lazy"
                width={1280}
                height={960}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-card-overlay" />
              <div className="absolute inset-x-5 bottom-4 flex items-center gap-3">
                <BookOpen className="size-6 text-lifestyle-pink" />
                <div>
                  <h3 className="font-display text-xl uppercase">Anime & Manga</h3>
                  <p className="text-xs text-muted-foreground">Stories that inspire.</p>
                </div>
              </div>
            </div>
            <ul className="flex flex-wrap gap-2 p-5">
              {animeTags.map((tag, index) => (
                <li key={tag} className="flex items-center gap-1.5 border border-border bg-surface/70 px-2.5 py-1.5 font-mono text-[9px] uppercase text-muted-foreground">
                  {index === 2 ? <Swords className="size-3 text-lifestyle-warm" /> : index === 3 ? <Sparkles className="size-3 text-lifestyle-mint" /> : null}
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={90} className="group overflow-hidden rounded-md border border-lifestyle-mint/50 bg-background/80 backdrop-blur-sm">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src="/images/beyond-the-code/gaming/football-team-console.jpg"
                alt="Football team building game on a widescreen monitor"
                loading="lazy"
                width={1280}
                height={960}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-card-overlay" />
              <div className="absolute inset-x-5 bottom-4 flex items-center gap-3">
                <Gamepad2 className="size-6 text-lifestyle-mint" />
                <div>
                  <h3 className="font-display text-xl uppercase">FC Online</h3>
                  <p className="text-xs text-muted-foreground">Build. Compete. Enjoy.</p>
                </div>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-2 p-5">
              {gamingTags.map((tag, index) => (
                <li key={tag} className="flex items-center gap-2 border border-border bg-surface/70 px-2.5 py-2 font-mono text-[9px] uppercase text-muted-foreground">
                  {index === 0 ? <Joystick className="size-3 text-lifestyle-mint" /> : index === 1 ? <Users className="size-3 text-lifestyle-mint" /> : <Trophy className="size-3 text-lifestyle-mint" />}
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180} className="group overflow-hidden rounded-md border border-lifestyle-warm/50 bg-background/80 backdrop-blur-sm">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src="/images/beyond-the-code/baseball/night-training.jpg"
                alt="Baseball player training in a batting cage at night"
                loading="lazy"
                width={1280}
                height={960}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-card-overlay" />
              <div className="absolute inset-x-5 bottom-4 flex items-center gap-3">
                <CircleDot className="size-6 text-lifestyle-warm" />
                <div>
                  <h3 className="font-display text-xl uppercase">Baseball</h3>
                  <p className="text-xs text-muted-foreground">Weekend energy.</p>
                </div>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-2 p-5">
              {baseballTags.map((tag) => (
                <li key={tag} className="border border-border bg-surface/70 px-2.5 py-2 font-mono text-[9px] uppercase text-muted-foreground">{tag}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-8 hidden justify-end gap-4 sm:flex">
          {polaroids.map((photo, index) => (
            <Reveal key={photo.label} delay={220 + index * 80} className={photo.rotation}>
              <figure className="w-36 bg-foreground p-2 pb-8 shadow-2xl">
                <img src={photo.src} alt={photo.alt} loading="lazy" width={206} height={206} className="aspect-square w-full object-cover" />
                <figcaption className="mt-2 text-center font-mono text-[9px] text-background uppercase">{photo.label}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
