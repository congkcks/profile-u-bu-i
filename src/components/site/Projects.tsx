import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const featuredTech = [
  "Computer Vision",
  "Deep Learning",
  "C#",
  ".NET",
  "WPF",
  "ONNX",
  "Industrial Cameras",
];

const projects = [
  {
    title: "Industrial Defect Detection",
    tech: ["YOLO", "Python", "PyTorch", "OpenCV", "ONNX"],
    desc: "Detect manufacturing defects with real-time computer vision.",
  },
  {
    title: "LLM Intelligent Assistant",
    tech: ["Python", "LLM", "RAG", "Vector DB", "API"],
    desc: "Knowledge-aware AI assistant with document understanding and intelligent retrieval.",
  },
  {
    title: "AI Desktop Application",
    tech: ["C#", "WPF", ".NET 8", "ONNX Runtime"],
    desc: "Production desktop application integrating AI inference directly into a .NET environment.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
      <SectionHeading index="04" label="Selected Work" headline="Systems, not demos." />

      <Reveal className="group relative mt-14 overflow-hidden rounded-2xl border border-border bg-surface/40">
        <div className="grid-bg absolute inset-0 opacity-60" />
        <div
          className="absolute -top-32 right-0 size-96 rounded-full opacity-20 blur-[100px] transition-opacity duration-700 group-hover:opacity-40"
          style={{ background: "var(--gradient-accent)" }}
        />
        <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="label-eyebrow">Industrial AI / Computer Vision</p>
            <h3 className="mt-5 font-display text-5xl tracking-[-0.03em] sm:text-7xl">
              SOTAVISION
            </h3>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              AI-powered visual inspection platform designed for automated manufacturing
              quality control.
            </p>
          </div>
          <ul className="flex flex-wrap content-start gap-2 lg:justify-end">
            {featuredTech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border px-3 py-1.5 font-mono text-[11px] tracking-widest text-muted-foreground uppercase"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 90}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-surface/30 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
          >
            <div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl leading-tight tracking-tight">
                  {p.title}
                </h3>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
            <p className="mt-8 font-mono text-[11px] tracking-widest text-muted-foreground/80 uppercase">
              {p.tech.join(" · ")}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
