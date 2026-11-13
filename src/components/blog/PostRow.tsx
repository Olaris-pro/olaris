import { formatDate, type PostMeta } from '@/lib/blog'

/** One article in a list: date, category and read time, then the title and its standfirst */
export function PostRow({ post, heading: H = 'h3' }: { post: PostMeta; heading?: 'h2' | 'h3' }) {
  return (
    <li>
      <a className="post" href={`/blog/${post.slug}`}>
        <span className="meta mono">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>{post.category}</span>
          <span>{post.readMinutes} min read</span>
        </span>
        <H className="t">{post.title}</H>
        <span className="s">{post.description}</span>
      </a>
    </li>
  )
}
