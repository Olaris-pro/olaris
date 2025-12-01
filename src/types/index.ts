// Common types used across the application

export interface NavItem {
  title: string
  href: string
  description?: string
  disabled?: boolean
  external?: boolean
}

export interface Service {
  id: string
  title: string
  description: string
  details?: string
  icon: string
  features?: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  details: string
  videoWebm: string
  videoMp4: string
  fallbackImage: string
  metrics?: {
    label: string
    value: string
  }[]
  tags?: string[]
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company?: string
  image?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  publishedAt: string
  author: {
    name: string
    image?: string
  }
  tags: string[]
  readingTime?: number
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  subject?: string
}

export interface NewsletterFormData {
  email: string
  firstName?: string
}

export interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    linkedin: string
    twitter: string
    github?: string
  }
  contact: {
    email: string
    phone: string
    address: {
      street: string
      city: string
      postcode: string
      country: string
    }
  }
}
