# Homepage v10: replace `/` with the static Olaris page

> Added 2026-11-13. Source: `~/Downloads/olaris-site/` (index.html v10, two films, two posters, HANDOFF.md).
> Kept out of `tasks/todo.md` because that file carries uncommitted invoice work.

## Decision

Replace only the `/` route inside the existing Next.js app. Do not follow the handoff's
"new repo, point the domain at it" route: olaris.co.uk also serves `/admin`, `/sign`,
`/quote`, `/api/*` and the Vercel crons, and a new project on the domain would take them down.

The page stays a static file (`public/home.html`), served at `/` by a rewrite. It can't be a
`page.tsx`, because the root layout wraps every page in the old Header, Footer and fonts.

## Steps

- [x] Copy the page and the four media files into `public/` (media keep their relative paths)
- [x] `next.config.mjs`: rewrite `/` to `/home.html`; delete `src/app/(home)/` (old homepage)
- [x] Head: canonical, `og:*` and Twitter tags, a 1200x630 share image (capture of the page's own hero), a cobalt favicon from the page's own mark
- [x] Keep what the old homepage carried for the live site: Bing `msvalidate.01` tag, GA4 `G-BFJ8CC0RNJ` (live domain only)
- [x] Contact: email as `mailto:`, phone as `tel:` (HANDOFF 4.7); keep the Copy button
- [x] Verify locally, dev and production build:
  - `/` serves the new page; films stream (HTTP 206); posters load
  - other routes unchanged: `/about`, `/blog`, `/privacy-policy`, `/terms`, `/sign/*`, `/admin` goes to login
  - Chromium and WebKit at 1440x900 and 400x860: renders, no console errors, no horizontal scroll
- [ ] Stop before commit, push or deploy. Alan approves first.

## Review

**Files.** `public/home.html` (the v10 page plus the head tags and contact links above; diff against
`~/Downloads/olaris-site/index.html` is those lines only), `public/{orbis,perx}-film.mp4`,
`public/{orbis,perx}-poster.jpg`, `public/og-home.jpg`, `public/olaris-mark.svg`, one rewrite in
`next.config.mjs`, `src/app/(home)/` deleted. No database change, so no migrate step (L-001 does not apply).

**Verified 2026-11-13.**

- `next build` passes (run directly, not `npm run build`, so the postbuild IndexNow ping did not fire).
- `next start`: `/` and `/?utm_source=x` serve the new page; `/index.html` still 308s to `/`; films return
  206 to range requests (Safari needs this); `/about`, `/blog`, `/contact`, `/privacy-policy`, `/terms`,
  `/sitemap.xml`, `/sign/*` unchanged; `/admin` still 307s to login; unknown paths still 404.
- Films are H.264, no audio, index at the front of the file, so they start streaming at once.
- Chrome and WebKit at 1440x900 and 400x860, plus Chrome with reduced motion: no console errors, no
  horizontal scroll, WebGL on, Approach pins on desktop only, canvas moves into Contact, both films play
  on screen (paused under reduced motion, as designed).

**Not done.** No commit, push or deploy. Real hardware check (HANDOFF 4.1, 4.2) belongs on the Vercel
preview. `images/*.mp4` are untracked duplicates of the films and should not be committed.

**Left on the old design.** `/about`, `/platform`, `/leasing`, `/features/*`, `/industries`, `/tools/*`,
`/blog`, `/contact` stay live and in the sitemap. Site-wide favicon is still the old cyan mark; only `/`
uses the cobalt one. Components only the old homepage used (e.g. `GradientHero`, `OrbisDemo`) are now
unused and can go in a later cleanup.
