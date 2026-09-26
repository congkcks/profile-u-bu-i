import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  index,
  label,
  headline,
  className,
}: {
  index: string;
  label: string;
  headline: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <p className="label-eyebrow">
        {index} / {label}
      </p>
      <h2 className="mt-5 font-display text-3xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
        {headline}
      </h2>
    </Reveal>
  );
}
