import { packages } from './data';

export default async function sitemap() {
  const baseUrl = 'https://driveseekho.com';

  // Static Pages
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

  // Dynamic Pages
  const dynamicPages = packages
    .filter((pkg) => pkg.areaSlug && pkg.category)
    .map((pkg) => {
      const category = pkg.category.toLowerCase().trim();

      const isBike =
        category === '2 wheeler' ||
        category.includes('bike') ||
        category.includes('scooty') ||
        category.includes('two-wheeler');

      const routePrefix = isBike
        ? '2-wheeler-driving-school-in'
        : 'driving-school-in';

      const slug = pkg.areaSlug.trim().toLowerCase();

      return {
        url: `${baseUrl}/${routePrefix}/${encodeURIComponent(slug)}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      };
    });

  // Remove duplicate URLs
  const uniquePages = Array.from(
    new Map(
      [...staticPages, ...dynamicPages].map((page) => [
        page.url,
        page,
      ])
    ).values()
  );

  return uniquePages;
}