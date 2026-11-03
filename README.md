# Celi’s Viveros

Landing estática de una página en Astro, TypeScript y CSS. Utiliza las 31 fotos WebP reales del kit; no publica precios, stock ni nombres botánicos como datos confirmados. No incluye rastreadores, formulario ni servicios externos de tipografía.

## Ejecutar

Se requiere Node.js 22.23.4 o superior y npm 9.6.5 o superior. El proyecto incluye además Node 22 como dependencia de desarrollo para compatibilidad con este equipo. Si la instalación avisa de versiones antiguas, actualizar Node/npm antes de instalar; en Windows las dependencias nativas deben instalarse usando una versión de Node compatible.

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

Astro indica la URL local al iniciar. `dev` muestra un aviso de configuración pendiente; ese aviso no forma parte de producción. El resultado de producción está en `dist/`.

## Contactos y dominio

Editar únicamente `src/config/site.ts` para completar:

- `whatsappNumber`: código de país y número, solo dígitos, sin + ni espacios.
- `facebookUrl`, `instagramUrl`: enlaces oficiales completos HTTPS.
- `email`: correo oficial.
- `publicSiteUrl`: origen HTTPS del dominio final, sin rutas ni parámetros.

Los campos empiezan vacíos y los enlaces sin configuración válida se omiten. WhatsApp incorpora el mensaje solicitado y el correo incorpora el asunto de consulta mayorista. Sin contactos configurados, producción muestra un mensaje temporal. Antes de lanzar comercialmente, completar al menos un canal.

Después de cada cambio, ejecutar nuevamente el build. La URL final activa canonical, imagen Open Graph absoluta y entrada en sitemap. Mientras no exista dominio confirmado, el sitemap queda vacío y robots no declara una URL ficticia. No hay píxeles publicitarios.

## Logo e imágenes

El logo entregado está en `public/logo.png`, visible sobre la fotografía de portada y conservando sus proporciones. Para reemplazarlo, actualizar ese archivo y reconstruir. El favicon vegetal es un recurso temporal, no un logo oficial.

El diseño prioriza el contacto en portada, con WhatsApp como acción principal y redes/correo como alternativas. En desarrollo se muestran los canales pendientes sin enlace; producción solo muestra los configurados. Una galería breve conserva las cuatro categorías y la ampliación de fotos, con texto reducido.

Las fotos publicadas están en `public/assets/fotos_web/`; los originales y anuncios de referencia permanecen fuera de la salida pública. El catálogo fuente es `data/catalogo_fotografico.json`, con textos alternativos y rutas. Para cambiar fotos, actualizar el catálogo, copiar el WebP correspondiente a la carpeta pública y ajustar la selección de índices en `src/pages/index.astro`. Usar títulos genéricos hasta verificar identificaciones. Las imágenes debajo de la portada cargan de manera diferida; la portada tiene prioridad. Evitar subir originales grandes o imágenes publicitarias como productos. Conservar las 31 WebP permite ampliar la selección sin usar originales.

La galería usa un diálogo nativo: botón para cerrar, tecla Escape, foco contenido y retorno al botón que lo abrió. Respeta la preferencia de movimiento reducido. Revisar en móvil y escritorio antes de publicar.

## Despliegue estático

Subir el proyecto a un repositorio privado o al proveedor elegido. No subir `node_modules/`.

| Proveedor | Build | Carpeta pública | Configuración |
| --- | --- | --- | --- |
| Cloudflare Pages | `npm run build` | `dist` | Node 22, sin backend |
| Netlify | `npm run build` | `dist` | Node 22 |
| Vercel | `npm run build` | `dist` | Astro, salida estática |

También se puede subir únicamente el contenido de `dist/` a un hosting estático. No necesita servidor Node en producción. Este trabajo queda local; no se ha registrado ni publicado un dominio.

### Dominio .cl

Registrar o usar el dominio que confirme el propietario. Añadirlo al proveedor de hosting y copiar los registros DNS que ese proveedor indique en la administración DNS correspondiente; no hay IP ni registros inventados en este proyecto. Configurar HTTPS, elegir la versión canónica (con o sin www), redirigir la otra y actualizar `publicSiteUrl`. Reconstruir y comprobar `/`, `/robots.txt`, `/sitemap.xml` y la vista previa al compartir.

## Checklist previo a publicar

- [ ] WhatsApp oficial y prueba del mensaje predefinido.
- [ ] URLs oficiales de Facebook e Instagram.
- [ ] Correo oficial y prueba de mailto.
- [ ] Logo oficial y autorización de uso de fotografías.
- [ ] Dominio definitivo y `publicSiteUrl`, HTTPS y redirección canónica.
- [ ] Validar nombres de plantas en `data/inventario_por_validar.csv` antes de introducir información específica.
- [ ] Confirmar disponibilidad, precios y políticas directamente; no se anuncian como confirmados en la página.
- [ ] Confirmar condiciones de entrega, cantidades mínimas y plazos antes de añadirlos.
- [ ] Confirmar horarios, dirección exacta y coordenadas si se decide publicarlos (hoy no se muestran).
- [ ] Revisar contenido, fotografías, teclado y pantalla móvil.
- [ ] Decidir privacidad/consentimiento antes de incorporar analítica o publicidad.
- [ ] `npm run check` y `npm run build` sin errores.
