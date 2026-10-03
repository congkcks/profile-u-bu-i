import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { formatBlogDate } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group overflow-hidden rounded-md border border-border bg-surface/40 transition-colors hover:border-primary/60">
      <Link to="/blog/$slug" params={{ slug: post.slug }} className="block">
        <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
          <img src={post.cover} alt="" loading="lazy" width={1280} height={800} className="size-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-card-overlay" />
          <span className="absolute bottom-3 left-3 rounded-sm border border-primary/40 bg-background/85 px-2.5 py-1 font-mono text-[9px] uppercase text-primary">{post.category}</span>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between gap-3 font-mono text-[9px] uppercase text-muted-foreground">
            <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            <span className="flex items-center gap-1.5"><Clock className="size-3" />{post.readingMinutes} phút đọc</span>
          </div>
          <h2 className="mt-3 font-display text-xl leading-tight transition-colors group-hover:text-primary">{post.title}</h2>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
          <span className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase text-primary">Đọc thêm <ArrowRight className="size-3" /></span>
        </div>
      </Link>
    </article>
  );
}