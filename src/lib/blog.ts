import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { siblingPosts } from '@/content/blog/clusters'

/**
 * The blog ("Insights"). Posts are markdown files in marketing/blog-posts/.
 * This module is the one place that knows how to find, list and render them,
 * so the index, the post pages and the sitemap can't drift apart.
 */

const DIR = path.join(process.cwd(), 'marketing', 'blog-posts')

// Public URL slug to source file. Slugs are live URLs with search rankings, so never change one.
const SLUG_TO_FILE: Record<string, string> = {
  'fleet-cost-report': 'blog-01-fleet-cost-report.md',
  'excess-mileage': 'blog-02-excess-mileage.md',
  'driver-behaviour-insurance': 'blog-03-driver-behaviour-insurance.md',
  'dvla-compliance': 'blog-04-dvla-compliance.md',
  'scope-123-fleet': 'blog-05-fleet-carbon-reporting.md',
  'ev-transition-fleet': 'blog-06-ev-transition-fleet.md',
  'connected-vehicle-data': 'blog-07-connected-vehicle-data.md',
  'lease-company-mileage': 'blog-08-lease-company-mileage.md',
  'fleet-data-single-view': 'blog-09-fleet-data-single-view.md',
  'fleet-management-2026': 'blog-10-fleet-management-2026.md',
  'what-is-fleet-intelligence': 'blog-11-what-is-fleet-intelligence.md',
  'what-is-grey-fleet': 'blog-12-what-is-grey-fleet.md',
  'what-is-driver-behaviour-scoring': 'blog-13-what-is-driver-behaviour-scoring.md',
  'what-is-fleet-compliance': 'blog-14-what-is-fleet-compliance.md',
  'what-is-an-at-risk-driver': 'blog-15-what-is-an-at-risk-driver.md',
  'fleet-data-audit': 'blog-16-fleet-data-audit.md',
}

export type Faq = { question: string; answer: string }

export type PostMeta = {
  slug: string
  title: string
  metaTitle: string
  description: string
  category: string
  /** yyyy-mm-dd */
  date: string
  readMinutes: number
  faq: Faq[]
}

export type Post = PostMeta & {
  html: string
  headings: { id: string; text: string }[]
}

export const postSlugs = Object.keys(SLUG_TO_FILE)

function read(slug: string) {
  const file = SLUG_TO_FILE[slug]
  if (!file) return null
  const { data, content } = matter(fs.readFileSync(path.join(DIR, file), 'utf-8'))
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date).slice(0, 10)
  const meta: PostMeta = {
    slug,
    title: data.title,
    metaTitle: data.metaTitle || data.title,
    description: data.metaDescription || '',
    category: data.category || '',
    date,
    readMinutes: Math.max(1, Math.ceil(content.split(/\s+/).length / 250)),
    faq: data.faqSchema || [],
  }
  return { meta, content }
}

export function getPostMeta(slug: string): PostMeta | null {
  return read(slug)?.meta ?? null
}

/** Newest first */
export function getAllPosts(): PostMeta[] {
  return postSlugs
    .map((s) => getPostMeta(s)!)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&[a-z]+;|<[^>]+>/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

export async function getPost(slug: string): Promise<Post | null> {
  const r = read(slug)
  if (!r) return null
  // The title is shown in the page header, so the markdown's own H1 is dropped
  const body = r.content.replace(/^#\s+.+$/m, '').trim()
  let out = (await remark().use(html).process(body)).toString()
  // Give each section heading an id, so the contents list can link to it
  const headings: Post['headings'] = []
  const used = new Set<string>()
  out = out.replace(/<h2>([\s\S]*?)<\/h2>/g, (_, inner: string) => {
    let id = slugify(inner) || 'section'
    while (used.has(id)) id += '-2'
    used.add(id)
    headings.push({ id, text: inner.replace(/<[^>]+>/g, '') })
    return `<h2 id="${id}">${inner}</h2>`
  })
  return { ...r.meta, html: out, headings }
}

/** Same cluster first, then same category, then newest */
export function relatedPosts(slug: string, limit = 3): PostMeta[] {
  const all = getAllPosts()
  const self = all.find((p) => p.slug === slug)
  const picks: string[] = []
  const add = (s: string) => {
    if (s !== slug && !picks.includes(s) && SLUG_TO_FILE[s]) picks.push(s)
  }
  siblingPosts(slug, limit).forEach(add)
  all.filter((p) => p.category === self?.category).forEach((p) => add(p.slug))
  all.forEach((p) => add(p.slug))
  return picks.slice(0, limit).map((s) => all.find((p) => p.slug === s)!)
}

const SITE = 'https://olaris.co.uk'
const SHARE_IMAGE = [{ url: `${SITE}/og-home.jpg`, width: 1200, height: 630, alt: 'Olaris, over a UK motorway at night' }]

/**
 * Page metadata for Insights. Replaces the root layout's share image and keywords,
 * which still describe the old site.
 */
export function insightsMetadata(o: { title: string; description: string; path: string; published?: string }): Metadata {
  const url = SITE + o.path
  const shared = { locale: 'en_GB', url, title: o.title, description: o.description, siteName: 'Olaris Consulting', images: SHARE_IMAGE }
  return {
    title: o.title,
    description: o.description,
    keywords: null,
    alternates: { canonical: url },
    openGraph: o.published
      ? { ...shared, type: 'article', publishedTime: o.published, authors: ['Alan Carreras'] }
      : { ...shared, type: 'website' },
    twitter: { card: 'summary_large_image', title: o.title, description: o.description, images: SHARE_IMAGE.map((i) => i.url) },
  }
}

export function formatDate(iso: string) {
  return new Date(iso + 'T12:00:00Z').toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
