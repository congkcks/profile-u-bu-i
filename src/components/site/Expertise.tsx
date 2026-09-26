import { Reveal, SectionHeading } from "./Reveal";

const cards = [
  {
    index: "01",
    title: ["Computer", "Vision"],
    items: ["Object Detection", "Defect Detection", "Image Processing", "Model Optimization"],
  },
  {
    index: "02",
    title: ["Industrial", "AI"],
    items: ["Visual Inspection", "Quality Control", "Camera Integration", "Real-time Inference"],
  },
  {
    index: "03",
    title: ["Generative", "AI / LLM"],
    items: ["LLM Applications", "RAG Systems", "AI Agents", "Prompt Engineering", "Automation"],
  },
  {
    index: "04",
    title: [".NET", "Engineering"],
    items: ["C#", ".NET 8", "WPF", "Clean Architecture", "CQRS"],
  },
];

export function Expertise() {
  return (
    <section className="relative border-y border-border bg-surface/20">
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <SectionHeading index="03" label="What I Do" headline="From model training to the factory floor." />

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal
              key={c.index}
              delay={i * 80}
              className="group relative bg-background p-7 transition-colors duration-500 hover:bg-surface"
            >
              <span className="font-mono text-xs text-primary">{c.index}</span>
              <h3 className="mt-6 font-display text-2xl leading-tight tracking-tight uppercase sm:text-3xl">
                {c.title[0]}
                <span className="block">{c.title[1]}</span>
              </h3>
              <ul className="mt-7 space-y-2 text-sm text-muted-foreground">
                {c.items.map((item) => (
                  <li key={item} className="transition-colors group-hover:text-foreground/85">
                    {item}
                  </li>
                ))}
              </ul>
              <div
                className="absolute inset-x-0 bottom-0 h-px scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ background: "var(--gradient-accent)" }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
