import { publicUrl } from '../config/site';
export function GET() {
  return new Response(`User-agent: *\nAllow: /\n${publicUrl ? `Sitemap: ${publicUrl}/sitemap.xml\n` : ''}`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
