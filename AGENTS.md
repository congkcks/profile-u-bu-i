<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Nolan.dev portfolio architecture

- User-facing images are stored under `public/images/` and referenced with root-relative `/images/...` paths so deployments do not depend on external media hosts.
- The technical portfolio story flows from stack to industrial pipeline to generative AI to featured projects, matching the dense dashboard-style reference while keeping a single scrolling page.
- Blog content is file-based under `src/content/posts/` and must be auto-discovered at build time so adding a post never requires a route or index edit.
- Blog posts come from two sources merged at load time: Markdown files in src/content/posts/ and articles published via the hidden /blog/add page (stored in the blog_posts table); file posts win on slug conflicts so repo content stays authoritative.
