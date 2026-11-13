# Blog in the v10 style

> Added 2026-11-13. Follows `tasks/homepage-v10.md`. Status: built and verified; on a Vercel preview, waiting on Alan's copy review.

## What exists

- 16 posts, about 35,000 words, Sep 2025 to 13 Apr 2026, in `marketing/blog-posts/*.md` (frontmatter: title,
  metaTitle, metaDescription, category, date, optional faqSchema). Rendered by `src/app/blog/` at
  `/blog` and `/blog/<slug>`, inside the old Header and Footer.
- Copy was written for the old positioning (Olaris as a fleet platform). Against the house rules:
  - 411 em or en dashes; 140 "we/our/us"; first person "I" throughout the later posts
  - High Mobility named in posts 07 (3 times) and 10
  - "15 years in fleet operations" (post 01) conflicts with 40 years
  - Product claims made as Olaris ("I built Olaris", "At Olaris, these components are weighted...",
    "the Olaris platform") that now belong to Orbis IO, and need Simon and Andy's check if restated
  - 93 internal links to old-design pages (/platform 15, /features 18, /tools 10, /contact 11, others)

## Approach (technical, decided)

- Keep the blog in Next.js at the same URLs, markdown stays the source. Keeps search rankings,
  BlogPosting, Breadcrumb and FAQ schema, sitemap and IndexNow unchanged.
- New look built from the homepage's tokens and parts: Geist and Geist Mono, cobalt, night, stone,
  mono labels, blueprint hairlines, the same header and footer. No WebGL on blog pages.
- Old Header and Footer hidden under `/blog` with a pathname guard (Header already reads the pathname).
  Rejected: splitting the app into route groups with separate root layouts, which would move every
  route folder, including `src/app/admin` where the invoice work is uncommitted.
- Index: big section word, one row per post (date, category, title, standfirst, read time), the
  homepage's cobalt hover fill. Post: mono meta line, large light title, 66ch reading column, cobalt
  headings, visible FAQ where the post has FAQ schema, byline, three related posts, contact strip.
- Homepage gets one nav link and one footer link to `/blog`.

## Steps (after decisions)

- [x] Branch `blog-v10` from `main` (the homepage went live first)
- [x] Blog chrome, styles, index and post pages; hide the old chrome under `/blog`
- [x] Copy pass per Alan's decision, `slop-grenade` rules, change list per post
- [x] Homepage nav and footer link
- [x] Verify: production build; Chrome and WebKit at 1440 and 400; no console errors or sideways
      scroll; every internal link resolves; schema present; zero dashes in rendered copy
- [x] Preview on Vercel (`olaris-x1nv`)
- [ ] Alan reviews `tasks/blog-v10-changes.md` and the preview, then merge

## Review

**Decisions (Alan, 2026-11-13):** house-rule pass; first person, signed by Alan; nav label "Insights";
the homepage went live first.

**Copy.** Four editors, four posts each, then checked by script: zero em or en dashes (source and
rendered), no High Mobility, no Olaris product claims, same headings, frontmatter keys, dates and
categories, every post within 2.2% of its old word count, search titles unchanged. Remaining "we/our"
is quoted speech. I removed post 08's closing contract hire line (link rule 7). Everything substantive,
plus the factual, legal and arithmetic problems the editors found and left alone, is in
`tasks/blog-v10-changes.md`.

**Code.** `src/lib/blog.ts` is the one source for posts (index, pages, sitemap). `SiteChrome` skips the
old Header and Footer under /blog. Removed: the old blog pages, `RelatedPostsBlock`, `AuthorBio` and
`src/data/blogPosts.ts` (only the old blog used them; the data file held the old "15 years" excerpts).
The sitemap now lists all 16 posts (`fleet-data-audit` was missing).

**Verified.** `tsc` clean; `next build` passes (run directly, so no IndexNow ping). Production server:
all 16 posts and the index pass the copy script, every internal link returns 200, BlogPosting,
Breadcrumb and FAQ schema present, canonical and share image correct, old keywords gone, `/about` keeps
the old header, `/admin` still gated. Chrome desktop and phone: 19 pages, no console errors, no sideways
scroll. WebKit desktop and phone: the index, two posts and the 404, no errors, no sideways scroll (one
browser per page, because the borrowed WebKit build crashes when one browser opens several pages).

**Fixed during verification.** Unknown /blog addresses served the site-wide 404 with the old header,
which caused a React hydration error. They now render the Insights 404.

**Lesson.** macOS grep is BSD, so `\|` alternation silently matches nothing. Count dashes with node.
