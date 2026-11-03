# Resultado de la optimización SEO

Trabajo aplicado a la copia local de `jaredaguilera/celisviveros` en `C:/Users/jared/Downloads/Celis_Viveros_Kit_Completo_Para_Codex`. No se ha hecho push ni despliegue.

## Problemas corregidos

- Dominio vacío: omitía canonical, URL e imagen absolutas de Open Graph y entrada del sitemap. Se configura `https://celisviveros.cl` y `site` de Astro.
- H1 basado solamente en eslogan: ahora describe el vivero y ubicación; se conserva el eslogan secundario.
- JSON-LD incompleto: se amplía el esquema único con el subtipo GardenStore de LocalBusiness, identificador estable, descripción, URL, imágenes y horarios. No se añaden reseñas, valoraciones ni coordenadas.
- Faltaban Twitter Cards y contexto visible de atención presencial, retiro, mayoristas y horarios.
- Catálogo cargaba imágenes grandes incluso en miniaturas: 31 versiones WebP de 600 px reducen el peso combinado de 7.367.430 a 3.093.880 bytes (58%). Se conservan todas las fotos grandes para ampliar. Se corrigen proporciones intrínsecas, incluida la foto horizontal 028. La portada mantiene prioridad alta y las secundarias carga diferida.

## Archivos

Modificados: `astro.config.mjs`, `src/config/site.ts`, `src/pages/index.astro`, `src/styles/simple.css`, `README.md`.

Añadidos: 31 WebP en `public/assets/miniaturas/`, `SEO_SEARCH_CONSOLE.md`, `SEO_AUDITORIA.md` y `validate-seo.py`.

Se revisaron sin necesidad de cambio `src/pages/robots.txt.ts`, `src/pages/sitemap.xml.ts` y los componentes de contacto. El sitemap manual es suficiente para la única página; se evita agregar una segunda ruta mediante una integración.

## Validación

- `npm run check`: 0 errores, 0 advertencias, 0 sugerencias.
- `npm run build`: correcto, salida estática en `dist`, rutas `/`, `/robots.txt`, `/sitemap.xml`.
- `python validate-seo.py`: correcto; un H1, canonical única, JSON-LD parseable con campos esperados, sitemap XML con URL absoluta, robots correcto, recursos y anclas internas existentes y cuatro canales oficiales presentes.
- Preview HTTP: portada 200 y ruta inexistente 404. Sin noindex en el HTML ni bloqueo en robots.
- Compatibilidad: continúa siendo una salida estática sin backend ni cambios al despliegue activo. No hay configuración Worker versionada que permita auditar las reglas de la cuenta.

La comprobación de contactos valida las URL generadas, no el inicio de sesión en redes, entrega de correos ni apertura de aplicaciones en el dispositivo del visitante. No se realizó auditoría visual automatizada ni medición de campo de LCP/CLS/INP. La validación externa de Google Rich Results Test y la inspección desde Search Console quedan para después del despliegue; no se afirma indexación ni elegibilidad garantizada.

## Pendientes externos

HTTP público responde 200 sin redirigir y www no resuelve; requieren configuración de Cloudflare. Confirmar San Jorge 40 frente a San Jorge, Parcela 40 antes de alterar dirección. Obtener el enlace exacto de la ficha Maps. Los pasos operativos, fuentes oficiales y seguimiento a 30/60/90 días están en `SEO_SEARCH_CONSOLE.md`.
