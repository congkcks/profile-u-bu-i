import type { ComponentPropsWithoutRef, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import GithubSlugger from "github-slugger";

function textFromChildren(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(textFromChildren).join("");
  if (children && typeof children === "object" && "props" in children) {
    return textFromChildren((children as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

export function MarkdownArticle({ content }: { content: string }) {
  const slugger = new GithubSlugger();
  const heading = (Tag: "h2" | "h3") => ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => {
    const id = slugger.slug(textFromChildren(children));
    return <Tag id={id} {...props}>{children}</Tag>;
  };

  return (
    <div className="blog-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children }) => <h1 className="sr-only">{children}</h1>,
          h2: heading("h2"),
          h3: heading("h3"),
          img: ({ alt, ...props }) => <img {...props} alt={alt ?? ""} loading="lazy" width={1280} height={800} />,
          a: ({ children, ...props }) => <a {...props} target={props.href?.startsWith("http") ? "_blank" : undefined} rel={props.href?.startsWith("http") ? "noreferrer" : undefined}>{children}</a>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}