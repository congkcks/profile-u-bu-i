import { Reveal, SectionHeading } from "./Reveal";

const timeline = [
  {
    period: "2026 — Present",
    title: "Artificial Intelligence Engineer",
    org: "SotaVision / SOTATEK",
    tags: ["Computer Vision", "Deep Learning", ".NET / WPF", "Industrial AI"],
  },
  {
    period: "2022 — 2026",
    title: "B.Sc. Computer Science",
    org: "University of Transport and Communications",
    tags: [],
  },
];

const certifications = [
  { issuer: "Google", name: "Project Management", kind: "Professional Certificate" },
  { issuer: "Google", name: "AI Essentials", kind: "Professional Certificate" },
  { issuer: "Claude", name: "Cowork Proficiency", kind: "Certificate" },
];

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
      <SectionHeading index="05" label="Experience" headline="Track record." />

      <div className="mt-14 border-l border-border pl-6 sm:pl-10">
        {timeline.map((t, i) => (
          <Reveal key={t.title} delay={i * 120} className="relative pb-12 last:pb-0">
            <span className="absolute top-2 -left-[calc(1.5rem+1px)] size-2 -translate-x-1/2 rounded-full bg-primary sm:-left-[calc(2.5rem+1px)]" />
            <p className="font-mono text-xs tracking-[0.25em] text-primary uppercase">
              {t.period}
            </p>
            <h3 className="mt-3 font-display text-2xl tracking-tight uppercase sm:text-3xl">
              {t.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.org}</p>
            {t.tags.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[10px] tracking-widest text-muted-foreground uppercase"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <Reveal>
          <p className="label-eyebrow">Certifications</p>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal
              key={c.name}
              delay={i * 90}
              className="rounded-lg border border-border bg-surface/30 p-6 transition-colors hover:border-primary/40"
            >
              <p className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase">
                {c.issuer}
              </p>
              <p className="mt-4 font-display text-xl tracking-tight">{c.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.kind}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
