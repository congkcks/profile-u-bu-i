import { Bot, BrainCircuit, Database, FileSearch, MessageSquareText, Network, Sparkles, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";

const capabilities = [
  { title: "Chatbots", icon: MessageSquareText, text: "Context-aware assistants for real workflows." },
  { title: "RAG Systems", icon: FileSearch, text: "Grounded answers from private knowledge." },
  { title: "AI Agents", icon: Bot, text: "Tool-using systems that plan and execute." },
  { title: "LLM Applications", icon: BrainCircuit, text: "Reliable AI embedded in production software." },
];

const ecosystem = ["OpenAI", "LangChain", "Vector DB", "Embeddings", "REST APIs", "Python", ".NET"];

export function Expertise() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/20">
      <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="max-w-5xl">
          <p className="label-eyebrow"><span className="text-primary">05</span> / Generative AI</p>
          <h2 className="mt-5 max-w-4xl font-display text-3xl leading-[1.04] uppercase sm:text-5xl md:text-6xl">LLM, RAG & AI Agents <span className="text-gradient">from idea to real applications.</span></h2>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, index) => (
            <Reveal key={item.title} delay={index * 60} className="border border-border bg-background/80 p-6 transition-colors hover:border-primary/40">
              <item.icon className="size-6 text-primary" />
              <h3 className="mt-8 font-display text-xl uppercase">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
          <Reveal className="relative min-h-[420px] overflow-hidden border border-border bg-background/80 p-6 sm:p-8">
            <img src="/images/projects/llm-rag/ai-agent-network.jpg" alt="Abstract AI agent network connecting documents, databases and tools" loading="lazy" width={1280} height={960} className="absolute inset-0 size-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-beyond-overlay" />
            <div className="relative">
              <p className="font-mono text-[10px] uppercase text-primary">RAG + Agent architecture</p>
              <div className="mt-9 grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
                <DiagramNode icon={Database} label="Knowledge base" detail="Documents / vectors" />
                <span className="hidden font-mono text-primary sm:block">→</span>
                <DiagramNode icon={BrainCircuit} label="LLM core" detail="Reason / retrieve" emphasis />
                <span className="hidden font-mono text-primary sm:block">→</span>
                <DiagramNode icon={Wrench} label="Agent tools" detail="APIs / actions" />
              </div>
              <div className="mt-8 grid grid-cols-3 gap-2 font-mono text-[9px] uppercase text-muted-foreground">
                <span className="border border-border bg-surface/70 p-3">01 · Ingest</span><span className="border border-border bg-surface/70 p-3">02 · Retrieve</span><span className="border border-border bg-surface/70 p-3">03 · Execute</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="border border-primary/30 bg-background/90 p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <p className="font-mono text-[10px] uppercase text-primary">Live demo preview</p>
              <span className="flex items-center gap-2 font-mono text-[9px] text-muted-foreground"><span className="size-1.5 rounded-full bg-lifestyle-mint" />Online</span>
            </div>
            <div className="mt-8 space-y-4">
              <div className="mr-8 border border-border bg-surface/60 p-4 text-sm text-muted-foreground">Analyse the inspection report and summarize recurring defects.</div>
              <div className="ml-8 border border-primary/30 bg-primary/10 p-4 text-sm leading-relaxed">Three defect patterns recur across Line 02. Surface scratches account for the largest share.</div>
            </div>
            <div className="mt-10 flex items-center gap-3 border-t border-border pt-5">
              <Sparkles className="size-4 text-primary" />
              <div className="h-2 flex-1 overflow-hidden bg-surface"><div className="h-full w-4/5 bg-primary" /></div>
              <span className="font-mono text-[9px] text-muted-foreground">READY</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-4 flex flex-wrap items-center gap-2 border border-border bg-background/70 p-4">
          <span className="mr-3 flex items-center gap-2 font-mono text-[10px] uppercase text-primary"><Network className="size-4" />LLM ecosystem</span>
          {ecosystem.map((item) => <span key={item} className="border border-border bg-surface/60 px-3 py-2 font-mono text-[9px] uppercase text-muted-foreground">{item}</span>)}
        </Reveal>
      </div>
    </section>
  );
}

function DiagramNode({ icon: Icon, label, detail, emphasis = false }: { icon: typeof Database; label: string; detail: string; emphasis?: boolean }) {
  return <div className={emphasis ? "border border-primary bg-primary/10 p-5 text-center" : "border border-border bg-background/70 p-5 text-center"}><Icon className="mx-auto size-6 text-primary" /><p className="mt-4 font-display text-sm uppercase">{label}</p><p className="mt-2 font-mono text-[9px] uppercase text-muted-foreground">{detail}</p></div>;
}