import { getAllPosts, insightsMetadata } from '@/lib/blog'
import { PostRow } from '@/components/blog/PostRow'

export const metadata = insightsMetadata({
  title: 'Insights | Olaris Consulting',
  description:
    'Alan Carreras on fleet costs, compliance, driver risk and connected vehicle data, for UK vehicle leasing and fleet businesses.',
  path: '/blog',
})

export default function InsightsPage() {
  const posts = getAllPosts()
  const years = Array.from(new Set(posts.map((p) => p.date.slice(0, 4))))

  return (
    <>
      <section className="band cobalt intro" aria-labelledby="insights-h">
        <div className="wrap inner">
          <p className="kicker mono">Writing by Alan Carreras, founder</p>
          <h1 className="word" id="insights-h">
            Insights
          </h1>
          <p className="lede">Fleet costs, compliance, driver risk and connected vehicle data.</p>
        </div>
      </section>

      <div className="steps" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>

      <section className="band stone read listing" aria-label="All articles">
        <div className="wrap inner">
          {years.map((y) => (
            <div className="year cols" key={y}>
              <h2 className="yr mono">
                <span>{y}</span>
              </h2>
              <ol className="posts" role="list">
                {posts
                  .filter((p) => p.date.startsWith(y))
                  .map((p) => (
                    <PostRow key={p.slug} post={p} />
                  ))}
              </ol>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
