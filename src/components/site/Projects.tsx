import { ArrowUpRight, Bot, ScanLine, Search } from "lucide-react";
import { Reveal } from "./Reveal";

const projects = [
  { title: "Industrial Defect Detection", category: "Computer Vision", image: "/images/projects/computer-vision/machine-vision-inspection.jpg", icon: ScanLine, tech: ["YOLO", "PyTorch", "OpenCV", "ONNX"], desc: "Real-time visual inspection for manufacturing quality control." },
  { title: "Knowledge Intelligence", category: "RAG System", image: "/images/projects/llm-rag/ai-agent-network.jpg", icon: Search, tech: ["LLM", "RAG", "Vector DB", "API"], desc: "Document understanding with grounded, traceable retrieval." },
  { title: "Production AI Assistant", category: "AI Agent", image: "/images/projects/industrial-ai/dotnet-production-app.jpg", icon: Bot, tech: ["Agents", ".NET 8", "WPF", "Tools"], desc: "A tool-using assistant integrated into production software." },
];

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="flex flex-col justify-between gap-5 border-b border-border pb-7 sm:flex-row sm:items-end">
        <div><p className="label-eyebrow">Featured projects</p><h2 className="mt-4 font-display text-3xl uppercase sm:text-5xl">Built for the real world.</h2></div>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">Selected systems spanning vision inspection, knowledge retrieval and production AI.</p>
      </Reveal>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 80} className="group overflow-hidden border border-border bg-surface/30 transition-colors hover:border-primary/50">
            <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
              <img src={project.image} alt="" loading="lazy" width={1280} height={960} className="size-full object-cover opacity-65 transition duration-700 group-hover:scale-105 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-card-overlay" />
              <span className="absolute top-4 left-4 flex items-center gap-2 border border-primary/40 bg-background/80 px-3 py-2 font-mono text-[9px] uppercase text-primary"><project.icon className="size-3" />{project.category}</span>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4"><h3 className="font-display text-2xl uppercase">{project.title}</h3><ArrowUpRight className="size-5 shrink-0 text-primary" /></div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
              <ul className="mt-6 flex flex-wrap gap-2">{project.tech.map((tech) => <li key={tech} className="border border-border px-2.5 py-1.5 font-mono text-[9px] uppercase text-muted-foreground">{tech}</li>)}</ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}