import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "/blog", route: true },
  { label: "Experience", href: "#experience" },
  { label: "Beyond", href: "#beyond" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass border-b" : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-sm tracking-[0.3em] uppercase">
          Nolan<span className="text-primary">.dev</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map((l) => (
            <li key={l.href}>
              {l.route ? <Link to="/blog" search={{ q: "", category: "Tất cả", page: 1 }} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l.label}</Link> : <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l.label}</a>}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-primary/40 bg-primary/10 px-5 py-2 font-mono text-xs tracking-widest text-primary uppercase transition-all hover:bg-primary/20 sm:inline-flex"
          >
            Let&apos;s Connect →
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-md border border-border md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass border-t md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {links.map((l) => (
              <li key={l.href}>
                {l.route ? <Link to="/blog" search={{ q: "", category: "Tất cả", page: 1 }} onClick={() => setOpen(false)} className="block py-3 font-display text-lg tracking-tight">{l.label}</Link> : <a href={l.href} onClick={() => setOpen(false)} className="block py-3 font-display text-lg tracking-tight">{l.label}</a>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
