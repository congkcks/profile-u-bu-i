import { Aperture, Boxes, Camera, Cpu, Factory, MonitorCog } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const stages = [
  { title: "Data Collection", icon: Camera, image: "/images/projects/computer-vision/machine-vision-inspection.jpg", items: ["Industrial cameras", "Lighting & optics"] },
  { title: "Image Processing", icon: Aperture, image: "/images/projects/computer-vision/machine-vision-inspection.jpg", items: ["Pre-processing", "Augmentation"] },
  { title: "Model Training", icon: Boxes, image: "/images/projects/industrial-ai/onnx-deployment.jpg", items: ["YOLO / PyTorch", "Evaluation"] },
  { title: "ONNX Deployment", icon: Cpu, image: "/images/projects/industrial-ai/onnx-deployment.jpg", items: ["Optimisation", "Fast inference"] },
  { title: ".NET Application", icon: MonitorCog, image: "/images/projects/industrial-ai/dotnet-production-app.jpg", items: ["C# / WPF", "Operator UI"] },
  { title: "Factory / PLC", icon: Factory, image: "/images/projects/industrial-ai/dotnet-production-app.jpg", items: ["Line control", "24/7 operation"] },
];

export function Pipeline() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading index="04" label="Workflow" headline="From model training to the factory floor." />
        <Reveal delay={120} className="relative mt-12">
          <div className="absolute top-[5.5rem] right-10 left-10 hidden h-px bg-primary/40 lg:block" aria-hidden />
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {stages.map((stage, index) => (
              <li key={stage.title} className="group relative overflow-hidden border border-border bg-surface/30">
                <div className="relative h-36 overflow-hidden border-b border-border">
                  <img src={stage.image} alt="" loading="lazy" width={1280} height={960} className="size-full object-cover opacity-50 transition duration-700 group-hover:scale-105 group-hover:opacity-80" />
                  <div className="absolute inset-0 bg-card-overlay" />
                  <span className="absolute top-3 left-3 font-mono text-[10px] text-primary">0{index + 1}</span>
                  <span className="absolute right-3 bottom-3 flex size-9 items-center justify-center border border-primary/50 bg-background text-primary"><stage.icon className="size-4" /></span>
                </div>
                <div className="p-4">
                  <h3 className="min-h-12 font-display text-base uppercase">{stage.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {stage.items.map((item) => <li key={item} className="flex items-center gap-2 font-mono text-[9px] uppercase text-muted-foreground"><span className="size-1 bg-primary" />{item}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 border border-border bg-surface/30 px-5 py-4 font-mono text-[9px] uppercase text-muted-foreground">
            <span className="text-primary">Pipeline status</span>
            {stages.map((stage) => <span key={stage.title} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary" />{stage.title}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}