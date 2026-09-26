import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:hello@nolan.dev" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div
        className="absolute bottom-[-30%] left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-[130px]"
        style={{ background: "var(--gradient-accent)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <Reveal>
          <h2 className="font-display text-[13vw] leading-[0.88] tracking-[-0.04em] uppercase sm:text-[9vw]">
            Let&apos;s build
            <span className="block">something</span>
            <span className="block text-gradient">intelligent.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          <Reveal delay={100}>
            <p className="max-w-sm text-base text-muted-foreground">
              Have an AI idea, Computer Vision challenge, or software project?
              <span className="mt-2 block text-foreground">Let&apos;s talk.</span>
            </p>
            <a
              href="mailto:hello@nolan.dev"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-mono text-xs tracking-widest text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>

          <Reveal delay={180} className="sm:justify-self-end">
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-12 border-b border-border py-3 font-display text-xl tracking-tight transition-colors hover:text-primary"
                  >
                    {s.label}
                    <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <footer className="relative border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div>
            <p className="font-display text-sm tracking-[0.3em] uppercase">
              Nolan<span className="text-primary">.dev</span>
            </p>
            <p className="mt-3 font-mono text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
              AI Engineer
              <br />
              Computer Vision · LLM · .NET
            </p>
          </div>
          <p className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
            © 2026 Nolan N.
          </p>
        </div>
      </footer>
    </section>
  );
}
