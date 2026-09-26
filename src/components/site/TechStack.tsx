import { Reveal, SectionHeading } from "./Reveal";

const groups = [
  {
    index: "01",
    title: "AI / Machine Learning",
    items: ["Python", "PyTorch", "Ultralytics", "ONNX", "NumPy"],
    note: "Training and optimising deep learning models.",
  },
  {
    index: "02",
    title: "Computer Vision",
    items: [
      "OpenCV",
      "YOLO",
      "Object Detection",
      "Image Processing",
      "Segmentation",
      "Defect Detection",
    ],
    note: "Building vision systems for real-world inspection.",
  },
  {
    index: "03",
    title: "Software Engineering",
    items: ["C#", ".NET 8", "WPF", "REST API", "Clean Architecture", "CQRS"],
    note: "Shipping AI inside production desktop software.",
  },
  {
    index: "04",
    title: "Generative AI",
    items: ["LLM", "RAG", "AI Agents", "Prompt Engineering", "Workflow Automation"],
    note: "Knowledge-aware assistants and automation.",
  },
];

export function TechStack() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
      <SectionHeading index="02" label="Tech Stack" headline="Technologies I work with." />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {groups.map((g, i) => (
          <Reveal
            key={g.title}
            delay={i * 90}
            className="group relative overflow-hidden rounded-xl border border-border bg-surface/40 p-7 transition-all duration-500 hover:border-primary/40"
          >
            <div className="grid-bg absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div
              className="absolute -top-24 -right-16 size-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
              style={{ background: "var(--gradient-accent)" }}
            />
            <div className="relative flex items-start justify-between">
              <h3 className="font-mono text-xs tracking-[0.26em] uppercase">{g.title}</h3>
              <span className="font-mono text-xs text-muted-foreground">{g.index}</span>
            </div>

            <ul className="relative mt-7 space-y-2.5">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="font-display text-xl tracking-tight text-foreground/85 transition-colors group-hover:text-foreground sm:text-2xl"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="relative mt-8 border-t border-border pt-4 text-sm text-muted-foreground">
              {g.note}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
