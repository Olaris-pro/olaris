'use client'

import { usePathname } from 'next/navigation'

/**
 * Wraps pages in the site Header and Footer, except under /blog. The blog is in the
 * new Olaris design (the same look as the homepage) and brings its own header, main and footer.
 */
export function SiteChrome({
  header,
  footer,
  children,
}: {
  header: React.ReactNode
  footer: React.ReactNode
  children: React.ReactNode
}) {
  const pathname = usePathname() || ''
  if (pathname === '/blog' || pathname.startsWith('/blog/')) return <>{children}</>
  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
    </>
  )
}
