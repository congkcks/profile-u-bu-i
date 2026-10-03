import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight, Clock, CalendarDays } from "lucide-react";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { MarkdownArticle } from "@/components/blog/MarkdownArticle";
import { formatBlogDate, getBlogPost } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} — Nolan N.` : "Không tìm thấy bài viết — Nolan N.";
    const description = loaderData?.description ?? "Bài viết không tồn tại hoặc đã được di chuyển.";
    return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" }] };
  },
  component: BlogDetail,
});

function BlogDetail() {
  const post = Route.useLoaderData();
  return (
    <div className="blog-shell min-h-screen bg-background">
      <BlogHeader />
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase text-muted-foreground"><Link to="/blog" search={{ q: "", category: "Tất cả", page: 1 }} className="text-primary">Blog</Link><ChevronRight className="size-3" /><span>{post.category}</span><ChevronRight className="size-3" /><span className="truncate">{post.title}</span></nav>
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_220px]">
          <article className="min-w-0">
            <span className="rounded-sm border border-primary/40 bg-primary/10 px-2.5 py-1 font-mono text-[9px] uppercase text-primary">{post.category}</span>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.08] sm:text-6xl">{post.title}</h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground"><span className="flex items-center gap-2"><img src="/images/profile/nolan-portrait.jpg" alt="Nolan N." width={32} height={32} className="size-8 rounded-full object-cover" />{post.author}</span><time dateTime={post.date} className="flex items-center gap-1.5"><CalendarDays className="size-3.5" />{formatBlogDate(post.date)}</time><span className="flex items-center gap-1.5"><Clock className="size-3.5" />{post.readingMinutes} phút đọc</span></div>
            <img src={post.cover} alt={`Ảnh bìa: ${post.title}`} width={1280} height={800} className="mt-8 aspect-[16/8.5] w-full rounded-md border border-border object-cover" />
            <MarkdownArticle content={post.content} />
          </article>
          <aside className="sticky top-24 hidden border-l border-border pl-6 lg:block"><p className="font-display text-sm font-semibold">Mục lục</p><ol className="mt-4 space-y-3">{post.headings.map((heading, index) => <li key={`${heading.id}-${index}`} className={heading.depth === 3 ? "pl-3" : ""}><a href={`#${heading.id}`} className="flex gap-2 text-[11px] leading-relaxed text-muted-foreground transition-colors hover:text-primary"><span className="font-mono text-primary">{index + 1}.</span>{heading.text}</a></li>)}</ol></aside>
        </div>
      </main>
    </div>
  );
}