import matter from "gray-matter";
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
    const text = match[2].replace(/[*_`[\]]/g, "").trim();
    return { depth: match[1].length, text, id: slugger.slug(text) };
  });
}

function parsePost(path: string, raw: string): BlogPost {
  const parsed = matter(raw);
  const metadata = frontmatterSchema.parse(parsed.data);
  const filename = path.split("/").pop()?.replace(/\.md$/, "") ?? metadata.slug;
  const words = parsed.content.trim().split(/\s+/).filter(Boolean).length;
  return {
    ...metadata,
    slug: metadata.slug || filename,
    date: metadata.date instanceof Date ? metadata.date.toISOString().slice(0, 10) : metadata.date,
    content: parsed.content,
    readingMinutes: Math.max(1, Math.ceil(words / 220)),
    headings: createHeadings(parsed.content),
  };
}

export const blogPosts = Object.entries(postFiles)
  .map(([path, raw]) => parsePost(path, raw))
  .sort((a, b) => b.date.localeCompare(a.date));

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}