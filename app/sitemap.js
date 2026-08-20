export default async function sitemap() {
  const baseUrl = 'https://driveseekho.com';

  // 1. Static Pages
  const staticPages = [
    '',
    '/instructor',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  }));

  // 2. Dynamic Pages (Agar aapke paas areas ki koi list hai)
  // Misal ke taur par agar aapke paas yeh areas hain:
  const areas = ['delhi', 'noida', 'gurgaon']; // Aap ise apne database ya file se la sakte hain
  
  const dynamicAreaPages = areas.map((area) => ({
    url: `${baseUrl}/driving-school-in/${area}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Sabhi ko combine karke return kar dein
  return [...staticPages, ...dynamicAreaPages];
}