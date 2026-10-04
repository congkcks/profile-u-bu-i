import { useMemo, useRef, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Upload, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { MarkdownArticle } from "@/components/blog/MarkdownArticle";
import { parsePostRaw, formatBlogDate } from "@/lib/blog";
import { supabase } from "@/integrations/supabase/client";

const template = `---
title: "Tiêu đề bài viết"
slug: "tieu-de-bai-viet"
date: "${new Date().toISOString().slice(0, 10)}"
author: "Vũ Văn Hà Công"
category: "Life"
tags:
  - Anime
description: "Mô tả ngắn cho bài viết."
cover: "/images/blog/blog-hero.jpg"
featured: false
---

# Tiêu đề bài viết

## Mở đầu

Viết nội dung bằng **Markdown** tại đây.
`;

export const Route = createFileRoute("/blog/add")({
  head: () => ({
    meta: [
      { title: "Viết bài mới — Nolan N. Blog" },
      { name: "description", content: "Soạn và đăng bài Blog mới bằng Markdown với xem trước trực tiếp." },
      { property: "og:title", content: "Viết bài mới — Nolan N. Blog" },
      { property: "og:description", content: "Soạn và đăng bài Blog mới bằng Markdown với xem trước trực tiếp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AddBlog,
});

function AddBlog() {
  const [raw, setRaw] = useState(template);
  const [busy, setBusy] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const result = useMemo(() => {
    try {
      return { post: parsePostRaw(raw), error: null as string | null };
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      return { post: null, error: msg.length > 300 ? "Frontmatter chưa hợp lệ — kiểm tra title, slug, date, author, category, description, cover." : msg };
    }
  }, [raw]);

  async function onFile(file: File) {
    setRaw(await file.text());
    toast.success(`Đã tải ${file.name}`);
  }

  async function publish() {
    if (!result.post) return;
    const slug = result.post.slug;
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
      toast.error("Slug chỉ gồm chữ thường không dấu, số và dấu gạch ngang.");
      return;
    }
    setBusy(true);
    const { error } = await supabase.from("blog_posts").insert({ slug, raw });
    setBusy(false);
    if (error) {
      toast.error(error.code === "23505" ? "Slug này đã tồn tại, hãy đổi slug khác." : "Không thể đăng bài. Thử lại sau.");
      return;
    }
    toast.success("Đã đăng bài viết!");
    navigate({ to: "/blog/$slug", params: { slug } });
  }

  const post = result.post;

  return (
    <div className="blog-shell min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link to="/blog" search={{ q: "", category: "Tất cả", page: 1 }} className="flex items-center gap-2 font-mono text-[10px] uppercase text-primary"><ArrowLeft className="size-4" /> Blog</Link>
          <span className="font-mono text-[10px] uppercase text-muted-foreground">New article</span>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <p className="label-eyebrow text-primary">Write with Markdown</p>
        <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Create something worth remembering.</h1>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="flex min-h-[70vh] flex-col overflow-hidden rounded-md border border-border bg-surface/40">
            <div className="border-b border-border px-4 py-2 font-mono text-[10px] uppercase text-muted-foreground">Markdown editor</div>
            <textarea value={raw} onChange={(e) => setRaw(e.target.value)} spellCheck={false} aria-label="Nội dung Markdown" className="flex-1 resize-none bg-transparent p-4 font-mono text-xs leading-relaxed text-foreground outline-none" />
          </section>
          <section className="flex min-h-[70vh] flex-col overflow-hidden rounded-md border border-border bg-surface/40">
            <div className="border-b border-border px-4 py-2 font-mono text-[10px] uppercase text-muted-foreground">Live preview</div>
            <div className="max-h-[80vh] flex-1 overflow-y-auto p-5">
              {post ? (
                <>
                  <span className="rounded-sm border border-primary/40 bg-primary/10 px-2.5 py-1 font-mono text-[9px] uppercase text-primary">{post.category}</span>
                  <h2 className="mt-4 font-display text-3xl font-semibold leading-tight">{post.title}</h2>
                  <p className="mt-3 text-xs text-muted-foreground">{post.author} • {formatBlogDate(post.date)} • {post.readingMinutes} phút đọc</p>
                  {post.cover ? <img src={post.cover} alt="" className="mt-5 aspect-[16/8.5] w-full rounded-md border border-border object-cover" /> : null}
                  <MarkdownArticle content={post.content} />
                </>
              ) : (
                <p className="text-sm text-destructive">{result.error}</p>
              )}
            </div>
          </section>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
          <input ref={fileRef} type="file" accept=".md,.markdown,text/markdown" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) void onFile(f); e.target.value = ""; }} />
          <Button type="button" variant="outline" onClick={() => fileRef.current?.click()} className="font-mono text-[10px] uppercase"><Upload className="size-4" /> Upload .md</Button>
          <Button type="button" disabled={!post || busy} onClick={publish} className="font-mono text-[10px] uppercase"><Send className="size-4" /> {busy ? "Đang đăng..." : "Publish article"}</Button>
        </div>
      </main>
    </div>
  );
}
