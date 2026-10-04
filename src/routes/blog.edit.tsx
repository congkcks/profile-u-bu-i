import { useMemo, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, FilePenLine, Save } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { MarkdownArticle } from "@/components/blog/MarkdownArticle";
import { formatBlogDate, getAllPosts, parsePostRaw } from "@/lib/blog";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/blog/edit")({
  loader: () => getAllPosts(),
  head: () => ({
    meta: [
      { title: "Chỉnh sửa bài viết — Nolan N. Blog" },
      { name: "description", content: "Chỉnh sửa các bài Blog đã đăng bằng Markdown với xem trước trực tiếp." },
      { property: "og:title", content: "Chỉnh sửa bài viết — Nolan N. Blog" },
      { property: "og:description", content: "Chỉnh sửa các bài Blog đã đăng bằng Markdown với xem trước trực tiếp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: EditBlog,
});

function EditBlog() {
  const posts = Route.useLoaderData();
  const navigate = useNavigate();
  const [slug, setSlug] = useState<string | null>(null);
  const [raw, setRaw] = useState("");
  const [busy, setBusy] = useState(false);

  const selected = posts.find((post) => post.slug === slug) ?? null;

  const result = useMemo(() => {
    if (!selected) return { post: null, error: null as string | null };
    try {
      return { post: parsePostRaw(raw), error: null as string | null };
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      return { post: null, error: msg.length > 300 ? "Frontmatter chưa hợp lệ — kiểm tra title, slug, date, author, category, description, cover." : msg };
    }
  }, [raw, selected]);

  function pick(postSlug: string) {
    const post = posts.find((p) => p.slug === postSlug);
    if (!post) return;
    setSlug(postSlug);
    setRaw(rebuildRaw(post));
  }

  function rebuildRaw(post: NonNullable<typeof selected>) {
    const tags = post.tags.length ? `tags:\n${post.tags.map((t) => `  - ${t}`).join("\n")}` : "tags: []";
    return `---\ntitle: "${post.title}"\nslug: "${post.slug}"\ndate: "${post.date}"\nauthor: "${post.author}"\ncategory: "${post.category}"\n${tags}\ndescription: "${post.description}"\ncover: "${post.cover}"\nfeatured: ${post.featured}\n---\n\n${post.content}`;
  }

  async function save() {
    if (!result.post || !selected) return;
    const nextSlug = result.post.slug;
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(nextSlug)) {
      toast.error("Slug chỉ gồm chữ thường không dấu, số và dấu gạch ngang.");
      return;
    }
    setBusy(true);
    const { error } = await supabase.from("blog_posts").update({ slug: nextSlug, raw }).eq("slug", selected.slug);
    setBusy(false);
    if (error) {
      toast.error(error.code === "23505" ? "Slug này đã tồn tại, hãy đổi slug khác." : "Không thể lưu bài. Thử lại sau.");
      return;
    }
    toast.success("Đã lưu thay đổi!");
    navigate({ to: "/blog/$slug", params: { slug: nextSlug } });
  }

  const post = result.post;

  return (
    <div className="blog-shell min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link to="/blog" search={{ q: "", category: "Tất cả", page: 1 }} className="flex items-center gap-2 font-mono text-[10px] uppercase text-primary"><ArrowLeft className="size-4" /> Blog</Link>
          <span className="font-mono text-[10px] uppercase text-muted-foreground">Edit article</span>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <p className="label-eyebrow text-primary">Edit with Markdown</p>
        <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Polish what you published.</h1>

        {!selected ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <button key={p.slug} type="button" onClick={() => pick(p.slug)} className="group flex flex-col overflow-hidden rounded-md border border-border bg-surface/40 text-left transition-colors hover:border-primary/50">
                <img src={p.cover} alt="" width={1280} height={800} className="aspect-[16/8] w-full object-cover" />
                <div className="flex flex-1 flex-col p-4">
                  <span className="font-mono text-[9px] uppercase text-primary">{p.category}</span>
                  <span className="mt-2 font-display text-lg leading-snug">{p.title}</span>
                  <span className="mt-2 text-[11px] text-muted-foreground">{formatBlogDate(p.date)} • {p.readingMinutes} phút đọc</span>
                  <span className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase text-primary"><FilePenLine className="size-3.5" /> Chỉnh sửa</span>
                </div>
              </button>
            ))}
            {!posts.length ? <p className="text-sm text-muted-foreground">Chưa có bài viết nào để chỉnh sửa.</p> : null}
          </div>
        ) : (
          <>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <section className="flex min-h-[70vh] flex-col overflow-hidden rounded-md border border-border bg-surface/40">
                <div className="flex items-center justify-between border-b border-border px-4 py-2">
                  <span className="font-mono text-[10px] uppercase text-muted-foreground">Markdown editor — {selected.slug}</span>
                  <Button type="button" variant="ghost" size="sm" onClick={() => setSlug(null)} className="font-mono text-[10px] uppercase">Chọn bài khác</Button>
                </div>
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
            <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
              <Button type="button" disabled={!post || busy} onClick={save} className="font-mono text-[10px] uppercase"><Save className="size-4" /> {busy ? "Đang lưu..." : "Save changes"}</Button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
