import { Braces, Camera, Cpu, Database, Layers3, MonitorCog, Network, ScanLine } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const groups = [
  {
    index: "01",
    title: "AI / Deep Learning",
    icon: Network,
    image: "/images/projects/industrial-ai/onnx-deployment.jpg",
    items: ["Python", "PyTorch", "Ultralytics", "NumPy"],
    note: "Training, evaluating and optimising deep learning models.",
  },
  {
    index: "02",
    title: "Computer Vision",
    icon: ScanLine,
    image: "/images/projects/computer-vision/machine-vision-inspection.jpg",
    items: ["OpenCV", "YOLO", "Detection", "Segmentation"],
    note: "Vision systems built for real-world industrial inspection.",
  },
  {
    index: "03",
    title: "Deployment & Optimisation",
    icon: Cpu,
    image: "/images/projects/industrial-ai/onnx-deployment.jpg",
    items: ["ONNX", "TensorRT", "CUDA", "Edge Inference"],
    note: "Fast, measurable inference from GPU to factory edge.",
  },
  {
    index: "04",
    title: "Software & Generative AI",
    icon: MonitorCog,
    image: "/images/projects/industrial-ai/dotnet-production-app.jpg",
    items: ["C# / .NET 8", "WPF", "RAG", "AI Agents"],
    note: "Production applications that turn models into useful systems.",
  },
];

const stats = [
  { value: "15+", label: "Core technologies", icon: Braces },
  { value: "05", label: "Main domains", icon: Layers3 },
  { value: "24/7", label: "Production ready", icon: Database },
];

export function TechStack() {
  return (
    <section id="skills" className="relative overflow-hidden border-y border-border bg-surface/20">
      <div className="grid-bg absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-end">
          <SectionHeading index="03" label="Tech Stack" headline="Technologies I work with." />
          <Reveal delay={80} className="grid grid-cols-3 border border-border bg-background/70">
            {stats.map((stat) => (
              <div key={stat.label} className="border-r border-border p-4 last:border-r-0 sm:p-5">
                <stat.icon className="size-4 text-primary" />
                <p className="mt-4 font-display text-2xl sm:text-3xl">{stat.value}</p>
                <p className="mt-1 font-mono text-[9px] uppercase text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 70} className="group grid min-h-[300px] overflow-hidden border border-border bg-background/80 sm:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-48 overflow-hidden border-b border-border sm:min-h-full sm:border-r sm:border-b-0">
                <img src={group.image} alt="" loading="lazy" width={1280} height={960} className="absolute inset-0 size-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-95" />
                <div className="absolute inset-0 bg-card-overlay" />
                <span className="absolute top-4 left-4 border border-primary/40 bg-background/80 px-2 py-1 font-mono text-[10px] text-primary">{group.index}</span>
              </div>
              <div className="flex flex-col p-6">
                <group.icon className="size-6 text-primary" />
                <h3 className="mt-5 font-display text-xl uppercase sm:text-2xl">{group.title}</h3>
                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {group.items.map((item) => <li key={item} className="border border-border bg-surface/60 px-2.5 py-2 font-mono text-[10px] uppercase text-muted-foreground">{item}</li>)}
                </ul>
                <p className="mt-auto pt-6 text-sm leading-relaxed text-muted-foreground">{group.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}