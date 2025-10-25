import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://wisknowledge.com' });

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/testimonials', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 }
];

links.forEach(link => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap).then(sm =>
  createWriteStream('./public/sitemap.xml').write(sm.toString())
);
