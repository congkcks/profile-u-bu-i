import { Reveal } from "./Reveal";

const stages = [
  { label: "Real World", side: "physical" },
  { label: "Camera", side: "physical" },
  { label: "Image Processing", side: "ai" },
  { label: "AI Model", side: "ai" },
  { label: "ONNX Inference", side: "bridge" },
  { label: ".NET Application", side: "production" },
  { label: "Industrial System / PLC", side: "production" },
];

export function Pipeline() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/20">
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <Reveal className="max-w-3xl">
          <p className="label-eyebrow">How I build AI</p>
          <h2 className="mt-5 font-display text-3xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            From pixels to production.
          </h2>
          <p className="mt-6 max-w-xl text-base text-muted-foreground">
            Python and YOLO handle the model. C#, .NET and WPF handle the product. ONNX is
            the bridge between the two worlds.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-16">
          <div className="relative">
            <div className="absolute top-6 right-0 left-0 hidden h-px bg-border lg:block" />
            <div
              className="absolute top-6 hidden h-px w-16 lg:block"
              style={{
                background: "var(--gradient-accent)",
                animation: "pipeline-signal 6s linear infinite",
              }}
            />

            <ol className="grid gap-4 lg:grid-cols-7 lg:gap-2">
              {stages.map((s, i) => (
                <li key={s.label} className="relative flex gap-4 lg:block">
                  <div className="flex flex-col items-center lg:block">
                    <span
                      className="relative z-10 flex size-3 shrink-0 items-center justify-center rounded-full border border-primary/60 bg-background lg:mt-[1.125rem]"
                      style={{
                        animation: `pulse-dot 3s ease-in-out ${i * 0.35}s infinite`,
                      }}
                    >
                      <span className="size-1 rounded-full bg-primary" />
                    </span>
                    {i < stages.length - 1 && (
                      <span className="mt-1 w-px flex-1 bg-border lg:hidden" />
                    )}
                  </div>
                  <div className="pb-6 lg:pt-6 lg:pb-0">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-primary/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 font-display text-lg leading-tight tracking-tight">
                      {s.label}
                    </p>
                    <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                      {s.side}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
