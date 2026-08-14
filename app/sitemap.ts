import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { const base = 'https://uyidegarson.com'; return ['', '/profile', '/products', '/portfolio', '/partners', '/contact'].map(path => ({ url: `${base}${path}`, lastModified: new Date() })); }
