import { useMemo } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Search, Sparkles } from "lucide-react";
import { z } from "zod";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogCard } from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAllPosts } from "@/lib/blog";

const searchSchema = z.object({ q: z.string().optional().default(""), category: z.string().optional().default("Tất cả"), page: z.coerce.number().optional().default(1) });
const pageSize = 6;
const title = "Blog — Nolan N.";
const description = "Bài viết về AI, Computer Vision, lập trình và những điều Nolan đang học trên hành trình của mình.";

export const Route = createFileRoute("/blog/")({
  validateSearch: (search) => searchSchema.parse(search),
  loader: () => getAllPosts(),
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: BlogIndex,
});

function BlogIndex() {
  const search = Route.useSearch();
  const blogPosts = Route.useLoaderData();
  const navigate = useNavigate({ from: "/blog/" });
  const categories = ["Tất cả", ...new Set(blogPosts.map((post) => post.category))];
  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0];
  const filtered = useMemo(() => blogPosts.filter((post) => {
    const haystack = `${post.title} ${post.description} ${post.tags.join(" ")}`.toLocaleLowerCase("vi");
    return (search.category === "Tất cả" || post.category === search.category) && haystack.includes(search.q.toLocaleLowerCase("vi"));
  }), [blogPosts, search.category, search.q]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(Math.max(1, search.page), pageCount);
  const visible = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="blog-shell min-h-screen bg-background">
      <BlogHeader />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <img src="/images/blog/blog-hero.jpg" alt="Khung cảnh miền quê Nhật Bản lúc hoàng hôn" width={1536} height={768} className="absolute inset-0 size-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-blog-hero-overlay" />
          <div className="relative mx-auto flex min-h-[310px] max-w-7xl flex-col justify-end px-5 py-12 sm:px-8 sm:py-16">
            <p className="label-eyebrow text-primary">Notes from the journey</p>
            <h1 className="mt-3 font-display text-5xl font-semibold sm:text-7xl">Blog</h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/80 sm:text-base">Chia sẻ kiến thức, kinh nghiệm và những điều mình đang học trên hành trình với AI, Computer Vision, lập trình và cuộc sống.</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
          {featured && !search.q && search.category === "Tất cả" ? (
            <Link to="/blog/$slug" params={{ slug: featured.slug }} className="group mb-10 grid overflow-hidden rounded-md border border-primary/30 bg-surface/40 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="relative min-h-64 overflow-hidden"><img src={featured.cover} alt="" width={1280} height={800} className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-card-overlay" /></div>
              <div className="flex flex-col justify-center p-7 sm:p-10"><span className="flex items-center gap-2 font-mono text-[10px] uppercase text-primary"><Sparkles className="size-3.5" /> Bài viết nổi bật</span><h2 className="mt-4 font-display text-3xl leading-tight">{featured.title}</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{featured.description}</p></div>
            </Link>
          ) : null}

          <div className="flex flex-col gap-5 border-b border-border pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">{categories.map((category) => <Button key={category} type="button" size="sm" variant={search.category === category ? "default" : "outline"} onClick={() => navigate({ search: (prev) => ({ ...prev, category, page: 1 }) })} className="font-mono text-[10px] uppercase">{category}</Button>)}</div>
            <label className="relative w-full lg:w-72"><Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" /><Input value={search.q} onChange={(event) => navigate({ search: (prev) => ({ ...prev, q: event.target.value, page: 1 }), replace: true })} placeholder="Tìm bài viết..." className="pl-10" /><span className="sr-only">Tìm bài viết</span></label>
          </div>

          {visible.length ? <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{visible.map((post) => <BlogCard key={post.slug} post={post} />)}</div> : <div className="py-24 text-center text-muted-foreground">Không tìm thấy bài viết phù hợp.</div>}
          {pageCount > 1 ? <nav aria-label="Phân trang" className="mt-9 flex justify-center gap-2">{Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => <Button key={page} type="button" size="icon" variant={page === currentPage ? "default" : "outline"} onClick={() => navigate({ search: (prev) => ({ ...prev, page }) })}>{page}</Button>)}</nav> : null}
        </section>
      </main>
    </div>
  );
}