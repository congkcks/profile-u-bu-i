import { Reveal, SectionHeading } from "./Reveal";

const stats = [
  { value: "AI", label: "Computer Vision" },
  { value: ".NET", label: "Software Engineering" },
  { value: "∞", label: "Always Learning" },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
      <SectionHeading
        index="01"
        label="About"
        headline="Software Engineering meets Artificial Intelligence."
      />

      <div className="mt-14 grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            I&apos;m an AI Engineer focused on building practical AI systems for
            real-world applications.
          </p>
          <p>
            My work sits at the intersection of Computer Vision, Deep Learning and
            Software Engineering — from training vision models in Python to
            integrating them into production-grade .NET applications.
          </p>
          <p>
            I&apos;m especially interested in Industrial AI, intelligent automation and
            LLM-powered applications.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 100}
              className="group relative overflow-hidden rounded-lg border border-border bg-surface/50 p-6 transition-colors hover:border-primary/40"
            >
              <div className="grid-bg absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="relative font-display text-4xl tracking-tight">{s.value}</p>
              <p className="relative mt-2 font-mono text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
