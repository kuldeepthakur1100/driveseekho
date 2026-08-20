export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/'], // Jo pages chhupane hon
    },
    sitemap: 'https://driveseekho.com/sitemap.xml', // Apna sitemap URL
  };
}