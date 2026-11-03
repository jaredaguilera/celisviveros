import { publicUrl } from '../config/site';
export function GET() {
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${publicUrl ? `<url><loc>${publicUrl}/</loc></url>` : ''}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
}
