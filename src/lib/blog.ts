import yaml from "js-yaml";

function matter(raw: string): { data: unknown; content: string } {
  const m = raw.replace(/^\uFEFF/, "").match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, content: raw };
  return { data: yaml.load(m[1] ?? "") ?? {}, content: m[2] ?? "" };
}
import GithubSlugger from "github-slugger";
import { z } from "zod";

const postFiles = import.meta.glob("/src/content/posts/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>;

const frontmatterSchema = z.object({
  title: z.string(),
  slug: z.string(),
  date: z.union([z.string(), z.date()]),
  author: z.string(),
  category: z.string(),
  tags: z.array(z.string()).default([]),
  description: z.string(),
  cover: z.string(),
  featured: z.boolean().default(false),
});

export type BlogHeading = { depth: number; text: string; id: string };
export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  description: string;
  cover: string;
  featured: boolean;
  content: string;
  readingMinutes: number;
  headings: BlogHeading[];
};

function createHeadings(content: string): BlogHeading[] {
  const slugger = new GithubSlugger();
  return [...content.matchAll(/^(#{2,3})\s+(.+)$/gm)].map((match) => {
    const hashes = match[1] ?? "##";
    const headingText = match[2] ?? "";
    const text = headingText.replace(/[*_`[\]]/g, "").trim();
    return { depth: hashes.length, text, id: slugger.slug(text) };
  });
}

export function parsePostRaw(raw: string, fallbackSlug = ""): BlogPost {
  const parsed = matter(raw);
  const metadata = frontmatterSchema.parse(parsed.data);
  const words = parsed.content.trim().split(/\s+/).filter(Boolean).length;
  return {
    ...metadata,
    slug: metadata.slug || fallbackSlug,
    date: metadata.date instanceof Date ? metadata.date.toISOString().slice(0, 10) : metadata.date,
    content: parsed.content,
    readingMinutes: Math.max(1, Math.ceil(words / 220)),
    headings: createHeadings(parsed.content),
  };
}

function parsePost(path: string, raw: string): BlogPost {
  const filename = path.split("/").pop()?.replace(/\.md$/, "") ?? "";
  return parsePostRaw(raw, filename);
}

export const blogPosts = Object.entries(postFiles)
  .map(([path, raw]) => parsePost(path, raw))
  .sort((a, b) => b.date.localeCompare(a.date));

async function fetchPublishedPosts(): Promise<BlogPost[]> {
  try {
    const { supabase } = await import("@/integrations/supabase/client");
    const { data, error } = await supabase.from("blog_posts").select("slug, raw").order("created_at", { ascending: false });
    if (error || !data) return [];
    return data.flatMap((row) => {
      try {
        return [parsePostRaw(row.raw, row.slug)];
      } catch {
        return [];
      }
    });
  } catch {
    return [];
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const fileSlugs = new Set(blogPosts.map((p) => p.slug));
  const published = (await fetchPublishedPosts()).filter((p) => !fileSlugs.has(p.slug));
  return [...blogPosts, ...published].sort((a, b) => b.date.localeCompare(a.date));
}

export async function getBlogPost(slug: string) {
  return (await getAllPosts()).find((post) => post.slug === slug);
}

export function formatBlogDate(date: string) {
  const d = new Date(`${date}T00:00:00`);
  if (Number.isNaN(d.getTime())) return date;
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(d);
}