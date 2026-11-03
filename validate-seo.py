from pathlib import Path
from html.parser import HTMLParser
import json, xml.etree.ElementTree as ET
class Page(HTMLParser):
 def __init__(self):
  super().__init__(); self.tags=[]; self.ld=[]; self.inside=False
 def handle_starttag(self,t,a):
  d=dict(a); self.tags.append((t,d))
  if t=='script' and d.get('type')=='application/ld+json': self.inside=True
 def handle_endtag(self,t):
  if t=='script': self.inside=False
 def handle_data(self,d):
  if self.inside:self.ld.append(d)
p=Page(); p.feed(Path('dist/index.html').read_text(encoding='utf-8'))
assert sum(t=='h1' for t,a in p.tags)==1
assert [a['href'] for t,a in p.tags if a.get('rel')=='canonical']==['https://celisviveros.cl/']
assert not any('noindex' in a.get('content','') for t,a in p.tags)
ids={a['id'] for t,a in p.tags if 'id' in a}
for t,a in p.tags:
 for k in ('href','src'):
  v=a.get(k,'')
  if v.startswith('#'): assert v[1:] in ids,v
  if v.startswith('/'): assert (Path('dist')/v.lstrip('/').split('?')[0]).exists(),v
 if t=='img' and a.get('id')!='large-photo': assert a.get('alt') and (a.get('width') and a.get('height') or a.get('id')=='large-photo'),a
assert len(p.ld)==1
ld=json.loads(p.ld[0]); assert ld['@type']=='GardenStore' and ld['@id']=='https://celisviveros.cl/#business'
for key in ('name','url','description','telephone','email','image','logo','address','openingHoursSpecification','sameAs'): assert ld[key],key
assert len(ld['openingHoursSpecification'])==3
assert not any(k in ld for k in ('geo','aggregateRating','review'))
root=ET.parse('dist/sitemap.xml').getroot()
assert [x.text for x in root.iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]==['https://celisviveros.cl/']
assert 'Sitemap: https://celisviveros.cl/sitemap.xml' in Path('dist/robots.txt').read_text()
links=[a.get('href','') for t,a in p.tags if t=='a']
for prefix in ('https://wa.me/56949070733','https://www.facebook.com/','https://www.instagram.com/celis_viveros/','mailto:celisviveros40@gmail.com'):
 assert any(v.startswith(prefix) for v in links),prefix
photos=json.loads(Path('data/catalogo_fotografico.json').read_text(encoding='utf-8'))
original=sum((Path('public')/x['foto_web']).stat().st_size for x in photos)
thumb=sum(x.stat().st_size for x in Path('public/assets/miniaturas').glob('*.webp'))
print('PASS: canonical, H1, JSON-LD, sitemap, robots, internal links, assets and contact URLs.')
print(f'Catalog images: {original:,} -> {thumb:,} bytes ({100*(1-thumb/original):.1f}% smaller); originals retained.')

