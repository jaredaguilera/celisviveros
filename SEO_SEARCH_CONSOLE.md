# SEO, Search Console y presencia local

## Dirección pendiente de confirmar

El sitio y su README indican **San Jorge, Parcela 40**; el encargo indica **San Jorge 40**. Se conserva la dirección existente hasta que el administrador confirme si son equivalentes y cuál figura en el Perfil de Empresa. Confirmar también el sector San Jorge / Pocochay y la entrada correcta. Actualizar `streetAddress` y `addressDisplay` en `src/config/site.ts` juntos. No se han inventado coordenadas ni una ficha de Maps: el enlace actual es una búsqueda por nombre y dirección.

## Search Console

1. Entrar en https://search.google.com/search-console/ con la cuenta administradora. Añadir propiedad, elegir **Dominio** e introducir `celisviveros.cl`, sin protocolo ni ruta.
2. Copiar el valor TXT real proporcionado por Google. En Cloudflare, seleccionar el dominio → DNS → Registros → Añadir registro: tipo TXT, nombre `@`, contenido exacto entregado por Google, TTL automático. No sustituir ni borrar otros registros. Esperar propagación y pulsar Verificar en Search Console. Conservar el TXT después de verificar.
3. Tras desplegar y comprobar que responde correctamente, enviar **https://celisviveros.cl/sitemap.xml** en Sitemaps. No existe `sitemap-index.xml`: no enviarlo.
4. Inspeccionar `https://celisviveros.cl/`. Ejecutar la prueba de URL publicada; revisar rastreo permitido, HTML renderizado y canonical declarada y elegida por Google.
5. Solicitar indexación si la prueba es correcta. No significa indexación inmediata ni garantiza posiciones.
6. Revisar Indexación → Páginas y Sitemaps. Investigar errores de servidor, bloqueos, redirecciones y duplicados; corregir la causa y validar la corrección. Una URL inexistente debe seguir devolviendo 404.
7. En Rendimiento → Resultados de búsqueda, revisar clics, impresiones, CTR y posición, por consulta, página, país y dispositivo. Comparar períodos equivalentes; separar búsquedas de marca de consultas locales.

Guías oficiales: [verificación DNS](https://support.google.com/webmasters/answer/9008080), [propiedades](https://support.google.com/webmasters/answer/34592), [datos de negocios locales](https://developers.google.com/search/docs/appearance/structured-data/local-business).

## Cloudflare: tareas necesarias antes de dar por terminado el despliegue

La auditoría del 3 de noviembre de 2026 observó HTTPS `/` → 200, una ruta inexistente → 404, HTTP `/` → 200 sin redirección y `www` sin resolución DNS. No hay `wrangler.toml`, `wrangler.json` ni código Worker en este repositorio; la configuración activa está fuera del proyecto y no se modificó.

- Activar **Always Use HTTPS** en SSL/TLS → Edge Certificates, y verificar redirección HTTP → HTTPS.
- Configurar `www` en DNS y cobertura TLS según el hosting actual. Crear una regla de redirección permanente de `www.celisviveros.cl` a `https://celisviveros.cl`, conservando ruta y consulta. Probar ambos protocolos sin bucles. Las redirecciones por dominio no se resuelven con `_redirects` en Workers Static Assets.
- Mantener el build `npm run build` y los assets en `dist`. No activar fallback SPA. Si se usa configuración explícita de assets, conservar respuesta 404 para rutas desconocidas (`not_found_handling: "none"` o `"404-page"` si se aporta una página 404).
- Revisar reglas WAF, desafíos, protección de bots y encabezados `X-Robots-Tag` para que Googlebot pueda rastrear. No se puede verificar la configuración de la cuenta desde estos archivos.
- Tras publicar: comprobar inicio, robots, sitemap, imágenes y CSS/JS con 200; URL inexistente con 404; HTTP y www con 301/308 al dominio canónico. Validar el HTML en [Rich Results Test](https://search.google.com/test/rich-results) y [Schema Markup Validator](https://validator.schema.org/). La validación local del JSON no sustituye estas pruebas externas.

Referencia: [Cloudflare Static Assets](https://developers.cloudflare.com/workers/static-assets/), [redirecciones](https://developers.cloudflare.com/workers/static-assets/redirects/).

## Google Business Profile / Maps: trabajo manual

Usar la ficha existente; no crear otra. Confirmar dirección y marcador de entrada, nombre comercial, teléfono, web canónica y horarios (incluidos festivos). Comprobar que la categoría oficial describa el vivero. Copiar el enlace compartido de la ficha correcta para sustituir la búsqueda actual. Mantener fotos reales y disponibilidad actualizada; responder consultas y reseñas auténticas sin inventar valoraciones. El código del sitio no modifica la ficha.

## Medición a 30, 60 y 90 días desde la publicación

- **30 días:** confirmar lectura del sitemap, indexación de portada, canonical elegida y ausencia de errores. Registrar línea base de consultas, impresiones, clics y acciones de la ficha.
- **60 días:** comparar períodos de 28 días por consultas locales y mayoristas, dispositivo y CTR. Revisar Core Web Vitals si hay datos de campo suficientes; medir LCP, CLS e INP en móvil y comprobar teclado y contraste. Evitar conclusiones basadas en pocas impresiones.
- **90 días:** evaluar tendencia y estacionalidad. Ajustar contenido según preguntas reales y consultas observadas; mantener dirección, horarios y catálogo coherentes. No crear páginas repetidas por comuna ni prometer posiciones.

No se ha conectado Search Console, solicitado indexación, modificado DNS ni publicado estos cambios automáticamente.
