import { MetadataRoute } from 'next'
import { postSlugs } from '@/lib/blog'

const BASE_URL = 'https://olaris.co.uk'


const featureSlugs = [
  'mileage-tracking',
  'driver-behaviour',
  'dvla-compliance',
  'ev-transition',
  'cost-tracking',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/tools/excess-mileage-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tools/company-car-tax-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tools/ev-transition-planner`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tools/fleet-compliance-checker`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/leasing`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/leasing/business-contract-hire`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/leasing/salary-sacrifice`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/platform`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/industries`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  const blogPages: MetadataRoute.Sitemap = postSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const featurePages: MetadataRoute.Sitemap = featureSlugs.map((slug) => ({
    url: `${BASE_URL}/features/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...toolPages, ...featurePages, ...blogPages]
}
