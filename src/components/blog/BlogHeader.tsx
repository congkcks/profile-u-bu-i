import { Link } from "@tanstack/react-router";
import { ArrowLeft, Moon, Search } from "lucide-react";

export function BlogHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3 font-display text-sm uppercase">
          <ArrowLeft className="size-4 text-primary" />
          Nolan<span className="text-primary">.dev</span>
        </Link>
        <div className="flex items-center gap-5 font-mono text-[10px] uppercase text-muted-foreground">
          <Link to="/" className="hidden transition-colors hover:text-foreground sm:inline">Portfolio</Link>
          <Link to="/blog" activeProps={{ className: "text-primary" }}>Blog</Link>
          <Search className="size-3.5" aria-hidden />
          <Moon className="size-3.5 text-primary" aria-hidden />
        </div>
      </nav>
    </header>
  );
}