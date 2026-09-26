import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden pt-28 pb-16">
      <div className="grid-bg absolute inset-0 opacity-70" aria-hidden />
      <div
        className="absolute top-[-10%] left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ background: "var(--gradient-accent)" }}
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-64"
        style={{ background: "linear-gradient(to bottom, transparent, var(--background))" }}
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <p className="label-eyebrow">Hello, I&apos;m</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 font-display text-6xl leading-[0.92] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              NOLAN N.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 font-display text-xl tracking-tight sm:text-2xl">
              AI ENGINEER
              <span className="mt-1 block text-gradient">
                COMPUTER VISION × LLM × .NET
              </span>
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
              I build intelligent software that connects AI models with real-world
              industrial systems.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-mono text-xs tracking-widest text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
              >
                Explore My Work
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs tracking-widest uppercase transition-colors hover:border-primary/50 hover:text-primary"
              >
                Download CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-col gap-1 border-l border-border pl-4 font-mono text-xs text-muted-foreground">
              <span className="flex items-center gap-2 text-foreground">
                <span
                  className="size-2 rounded-full bg-primary"
                  style={{ animation: "pulse-dot 2.4s ease-in-out infinite" }}
                />
                AI Engineer @ SotaVision
              </span>
              <span>Hanoi, Vietnam</span>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex flex-col justify-center font-display text-[16vw] leading-[0.8] tracking-tighter text-foreground/[0.045] select-none lg:text-[9rem]"
          >
            <span>AI</span>
            <span>VISION</span>
            <span>SOFTWARE</span>
          </div>

          <Reveal delay={200} className="relative">
            <div
              className="relative aspect-4/5 overflow-hidden rounded-t-[140px] rounded-b-lg border border-border"
              style={{ animation: "drift 9s ease-in-out infinite" }}
            >
              <img
                src="/images/profile/nolan-presentation.webp"
                alt="Nolan presenting an AI project to an audience"
                loading="eager"
                width={1099}
                height={1099}
                className="size-full scale-105 object-cover contrast-105 grayscale-[35%]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(165deg, color-mix(in oklab, var(--primary) 22%, transparent), transparent 45%, var(--background) 96%)",
                }}
              />
              <div className="grid-bg absolute inset-0 opacity-40 mix-blend-overlay" />
            </div>

            <div className="glass absolute -bottom-6 left-4 rounded-md px-4 py-3 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              <span className="text-primary">detect</span> · inference · deploy
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-7xl px-5 sm:px-8">
        <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
          <ArrowDown className="size-3" /> Scroll
        </span>
      </div>
    </section>
  );
}
