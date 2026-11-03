# Kit de fotografía y especificación web — Celi’s Viveros

Este paquete contiene **31 fotos reales** tomadas en Celi’s Viveros y **5 imágenes publicitarias generadas** (solo inspiración visual), un catálogo JSON, una hoja CSV para validar inventario y el prompt completo para Codex.

## Cómo usarlo

1. Descomprime este ZIP en una carpeta vacía o en el repositorio donde quieres crear la web.
2. Abre la carpeta con VS Code y Codex (o comparte el directorio al agente).
3. Escribe: `Lee PROMPT_PARA_CODEX.md y construye la web completa usando los archivos de este proyecto`.
4. Completa cuando los tengas los contactos reales: WhatsApp, URL de Facebook, URL de Instagram y correo. El agente debe centralizarlos en `src/config/site.ts`.
5. Revisa nombres de plantas, autorización de uso del logo original, dominio y todos los textos antes de desplegar.

## Contenido

- `assets/fotos_originales/`: fotos originales subidas en esta conversación, por categoría.
- `assets/fotos_web/`: versiones WebP optimizadas para el sitio, sin metadatos EXIF.
- `assets/referencias_publicitarias_no_usar_como_productos/`: anuncios ilustrativos generados. NO asumir que son fotografías reales ni logo oficial.
- `data/catalogo_fotografico.json`: lista con 31 fichas y rutas.
- `data/inventario_por_validar.csv`: completar para publicar después fichas con especies y precios.
- `PROMPT_PARA_CODEX.md`: especificación principal.

## Consideraciones importantes

- **No hay archivo del logo original verificado** en las imágenes disponibles de este chat. Los diseños publicitarios tienen versiones estilizadas y no sustituyen al logo oficial. Cuando tengas el PNG/SVG real, añádelo aparte.
- Las 31 fotos muestran plantas y zonas del vivero, pero **no permiten confirmar existencias disponibles para venta actualmente**. No anunciar stock ni precios sin validación.
- No se incluyó la captura de un anuncio externo de Instagram porque no es una foto del vivero.
- La web solicitada es **solo informativa y de contacto**, no comercio electrónico.
- Todo el material se destina al sitio de Celi’s Viveros; verifica cualquier autorización comercial sobre fotografías y marcas cuando corresponda.
