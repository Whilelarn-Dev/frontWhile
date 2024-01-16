import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.whilelearn.com/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.whilelearn.com/About',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://www.whilelearn.com/pricing',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]
}