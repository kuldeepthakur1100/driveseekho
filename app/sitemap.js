import { packages } from './app/data'; // Adjust path if your data.ts is located elsewhere

export default async function sitemap() {
  const baseUrl = 'https://driveseekho.com';

  // 1. Static Pages
  const staticPages = [
    '',
    '/instructor',
    '/contact',
    '/driving-license',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  }));

  // 2. Dynamic Driving School & 2-Wheeler Pages from packages data
  const dynamicPages = packages.map((pkg) => {
    const isBike = pkg.category?.toLowerCase().includes('wheel') || pkg.category?.toLowerCase().includes('bike');
    const routePrefix = isBike ? '2-wheeler-driving-school-in' : 'driving-school-in';

    return {
      url: `${baseUrl}/${routePrefix}/${pkg.areaSlug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    };
  });

  // Remove duplicate URLs if any slug shares the exact same path
  const uniquePagesMap = new Map();
  [...staticPages, ...dynamicPages].forEach((page) => {
    uniquePagesMap.set(page.url, page);
  });

  return Array.from(uniquePagesMap.values());
}