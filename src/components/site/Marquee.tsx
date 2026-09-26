const items = [
  "C#",
  ".NET",
  "Python",
  "Computer Vision",
  "YOLO",
  "PyTorch",
  "ONNX",
  "OpenCV",
  "WPF",
  "LLM",
  "RAG",
  "AI Agents",
  "Deep Learning",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface/40 py-5">
      <div
        className="flex w-max gap-10 whitespace-nowrap"
        style={{ animation: "marquee 38s linear infinite" }}
      >
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-mono text-sm tracking-[0.18em] text-muted-foreground uppercase"
          >
            {item}
            <span className="size-1 rounded-full bg-primary/60" />
          </span>
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24"
        style={{ background: "linear-gradient(to right, var(--background), transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24"
        style={{ background: "linear-gradient(to left, var(--background), transparent)" }}
      />
    </div>
  );
}
