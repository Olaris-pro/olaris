import { notFound } from 'next/navigation'
import { formatDate, getPost, getPostMeta, insightsMetadata, postSlugs, relatedPosts } from '@/lib/blog'
import { PostRow } from '@/components/blog/PostRow'

type Params = { params: Promise<{ slug: string }> }

// Every article is built ahead of time. Any other /blog/... address still runs through this page, so its
// 404 is the Insights one (blog/not-found.tsx) rather than the site-wide one, which carries the old header.
export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params
  const post = getPostMeta(slug)
  if (!post) return {}
  return insightsMetadata({ title: post.metaTitle, description: post.description, path: `/blog/${slug}`, published: post.date })
}

export default async function InsightPage({ params }: Params) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const url = `https://olaris.co.uk/blog/${slug}`
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      image: 'https://olaris.co.uk/og-home.jpg',
      author: { '@type': 'Person', name: 'Alan Carreras', jobTitle: 'Founder', url: 'https://olaris.co.uk' },
      publisher: { '@type': 'Organization', name: 'Olaris Consulting Limited', url: 'https://olaris.co.uk' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://olaris.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://olaris.co.uk/blog' },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
    ...(post.faq.length
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: post.faq.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          },
        ]
      : []),
  ]

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="band cobalt phead">
        <div className="wrap inner">
          <p className="crumbs mono">
            <a href="/blog">← Insights</a>
            <span aria-hidden="true">/</span>
            <span>{post.category}</span>
          </p>
          <h1 className="ptitle">{post.title}</h1>
          <div className="cols hud">
            <p className="stand">{post.description}</p>
            <div className="field f-by">
              <span className="mono label">Written by</span>
              <span className="value">Alan Carreras, founder</span>
            </div>
            <div className="field f-pub">
              <span className="mono label">Published</span>
              <span className="value">
                <time dateTime={post.date}>{formatDate(post.date)}</time>, {post.readMinutes} min read
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="steps" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>

      <div className="band stone read pbody">
        <div className="wrap cols">
          {post.headings.length > 2 && (
            <aside className="toc">
              <nav aria-label="Contents">
                <p className="label mono">Contents</p>
                <ol>
                  {post.headings.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`}>{h.text}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          )}
          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>

      <section className="band stone author" aria-label="About the author">
        <div className="wrap inner">
          <div className="row">
            <h2>
              Alan Carreras<small>Founder</small>
            </h2>
            <div className="meta mono">
              <span>Former Chair</span>
              <span>BVRLA Leasing Broker Committee</span>
              <span>2019 to 2021</span>
            </div>
            <p className="text">
              Alan spent 12 years at <strong>Bridle Group</strong>, now Jurni Leasing, as it grew to more than 37,000
              vehicles. He has sat on <strong>FLA</strong> committees and is co-founder and CTO of <strong>Orbis IO</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="band stone more" aria-labelledby="more-h">
        <div className="wrap cols">
          <h2 className="label mono" id="more-h">
            More insights
          </h2>
          <ol className="posts" role="list">
            {relatedPosts(slug).map((p) => (
              <PostRow key={p.slug} post={p} />
            ))}
          </ol>
        </div>
      </section>

      <div className="steps rev" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>

      <section className="band cobalt end" aria-labelledby="end-h">
        <div className="wrap inner">
          <h2 className="label mono" id="end-h">
            Contact
          </h2>
          <a className="mail" href="mailto:alan@olaris.co.uk">
            alan@olaris.co.uk
          </a>
          <div className="cols">
            <p className="ask">Tell Alan what you&apos;re working on. If Olaris isn&apos;t the right fit, he&apos;ll say so.</p>
            <div className="field f-phone">
              <span className="mono label">Phone</span>
              <span className="value">
                <a href="tel:+447919354068">+44 7919 354 068</a>
              </span>
            </div>
            <div className="field">
              <span className="mono label">Olaris</span>
              <span className="value">
                <a href="/">Back to the homepage</a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
