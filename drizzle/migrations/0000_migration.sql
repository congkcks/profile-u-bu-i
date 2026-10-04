CREATE TABLE public.blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE CHECK (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$' AND char_length(slug) <= 160),
  raw text NOT NULL CHECK (char_length(raw) BETWEEN 20 AND 200000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.blog_posts TO anon, authenticated;
GRANT ALL ON public.blog_posts TO service_role;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read posts" ON public.blog_posts FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Anyone can publish posts" ON public.blog_posts FOR INSERT TO anon, authenticated WITH CHECK (true);