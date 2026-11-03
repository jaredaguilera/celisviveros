# PROMPT PARA CODEX — SITIO WEB SIMPLE DE CELI’S VIVEROS

Actúa como desarrollador frontend senior, diseñador web y especialista SEO local. Crea una landing page profesional, estática, rápida y **de una sola página** para el vivero familiar **Celi’s Viveros**, ubicado en **Pocochay, La Cruz, Región de Valparaíso, Chile**.

## Objetivo de negocio
La página es una tarjeta de presentación digital para captar **compradores mayoristas**, especialmente viveros revendedores, paisajistas, distribuidores y empresas de áreas verdes. Debe mostrar fotografías REALES del vivero y facilitar el contacto. También pueden consultar particulares, pero prioriza visual y verbalmente el canal mayorista. No hay ecommerce por ahora.

## Archivos que recibes
- `assets/fotos_originales/`: 31 fotografías reales subidas por el propietario, agrupadas en vivero, suculentas, cóleos y ornamentales.
- `assets/fotos_web/`: 31 copias WebP optimizadas listas para colocar en la web.
- `data/catalogo_fotografico.json`: catálogo inicial con alt, títulos provisionales y rutas. Son descripciones preliminares; **los nombres botánicos, el stock y los precios NO están verificados**.
- `data/inventario_por_validar.csv`: plantilla para que el propietario confirme especies, precios y cantidades.
- `assets/referencias_publicitarias_no_usar_como_productos/`: ejemplos de anuncios generados, que pueden inspirar el estilo gráfico. **No usarlos como fotografía de producto ni como logo oficial**.
- El logo oficial no está en este paquete. NO inventes que posees el logo. Usa temporalmente un encabezado tipográfico `Celi’s Viveros` con ícono vegetal simple; permite reemplazarlo por `public/logo.png` más adelante.

## Stack y alcance
- Usa **Astro + TypeScript + CSS** (sin backend y sin base de datos). Si partes de un repositorio existente con otra tecnología, adáptate a él sin reescribir innecesariamente.
- Genera un sitio estático preparado para desplegar en Cloudflare Pages, Netlify o Vercel, con instrucciones claras en README.
- Mobile first, responsive, excelente velocidad, fotos lazy-loaded, sin efectos pesados, accesibilidad WCAG básica, enlaces seguros y SEO local básico.
- Sitio de UNA sola página: barra superior, héroe, sobre nosotros, categorías con fotografías, venta mayorista, galería del vivero, contacto, footer.
- Categorías iniciales: Flores y ornamentales, Suculentas, Cóleo/follajes, Nuestro vivero.
- Usa material real de la carpeta de fotos. No inventes especies ni cultivares, no muestres precios, descuentos, stock, cantidad mínima ni despachos confirmados. No prometas distribución nacional.
- En galería muestra títulos genéricos si la identificación es incierta; usa `alt` desde JSON. Prioriza fotografías del vivero y plantas, y permite ampliar mediante lightbox accesible o modal sencillo. Para los listados evita duplicados visuales próximos.

## Contacto: SOLO botones externos (SIN formulario)
Crea botones o enlaces para:
1. **WhatsApp** (primario): «Cotizar por WhatsApp». Link wa.me con texto predefinido: «Hola, quiero consultar precios y disponibilidad mayorista en Celi's Viveros. Soy de [comuna] y necesito [especie y cantidad].» El número se configura sin +, espacios ni guiones.
2. **Facebook**: visitar página oficial del vivero.
3. **Instagram**: visitar perfil oficial del vivero.
4. **Correo**: mailto con asunto «Consulta mayorista - Celi's Viveros».

IMPORTANTE: No tengo aquí números ni URLs oficiales confirmados. Crea un único archivo `src/config/site.ts` con `whatsappNumber`, `facebookUrl`, `instagramUrl`, `email`, `publicSiteUrl` vacíos o null por defecto. NO inventes valores ni enlaces de muestra que apunten a cuentas ajenas. No muestres botones con enlaces vacíos o `#`: en desarrollo indica qué falta completar y en producción muestra solo los medios configurados. Documenta la configuración en README. Si el logo está ausente, mostrar marca tipográfica. No incluyas dirección exacta, teléfono, reseñas, horarios ni coordenadas sin verificar.

## Mensajería sugerida (honesta, B2B)
H1: «Plantas ornamentales y suculentas desde Pocochay»
Subtítulo: «Vivero productor en La Cruz. Conoce nuestras variedades y consulta por disponibilidad y cotizaciones mayoristas.»
CTA principal: «Solicitar cotización por WhatsApp» (solo cuando esté configurado)
CTA secundario: «Ver nuestras plantas» (scroll interno)
Sección mayorista: «Abastecimiento para viveros, paisajistas y revendedores»; «Cuéntanos qué especies buscas, qué cantidad necesitas y para cuándo. Confirmaremos disponibilidad, precios y condiciones de entrega.»
Sección nosotros: «Somos un vivero familiar en Pocochay, La Cruz, dedicado a ornamentales, flores y suculentas.»
No anunciar pedidos mínimos ni plazos de entrega sin confirmación.

## Diseño
Estética profesional, cercana y natural, no recargada. Paleta verde bosque, verde hoja, marfil y acento coral/floral. Tipografía legible. Usa fotos reales grandes, composición limpia, cards discretas. Buen contraste. Fotos del invernadero en portada y galería; flores, suculentas, cóleos como categorías.

## SEO / Ads
- Meta title: «Celi's Viveros | Plantas ornamentales y suculentas en La Cruz».
- Meta description orientada a vivero productor y consultas mayoristas en Pocochay, La Cruz, Chile.
- Etiquetas Open Graph para compartir por WhatsApp y redes, favicon simple, sitemap y robots.txt.
- Añade JSON-LD LocalBusiness solo con datos comprobados (nombre, localidad, país), dejando opcionales los no confirmados.
- Estructura preparada para que en el futuro funcione como destino de anuncios de Google Ads o Meta Ads.
- No añadir píxeles ni rastreadores sin decidir primero su configuración de privacidad/consentimiento.

## Qué debes entregar
1. Código completo del sitio estático, funcional.
2. Fotografías del paquete bien organizadas, imágenes optimizadas con tamaños adecuados.
3. `src/config/site.ts` centralizado con enlaces de contacto editables.
4. README con comandos de instalación, ejecución, build, despliegue, dominio .cl y cómo reemplazar logo/actualizar imágenes.
5. Checklist de datos que debo confirmar antes de publicar: WhatsApp, Facebook, Instagram, correo, logo oficial, nombres de plantas, dominio, horario/dirección si se mostrarán, disponibilidad y políticas.
6. Ejecuta el build o tests disponibles y corrige errores.

NO implementes: carrito, cuentas de usuario, login, pagos, CRM, backend, formulario, newsletter, inventario online real ni integraciones con API. Deja el código preparado para una ampliación futura, pero no sobreingenierices.

Trabaja de forma autónoma a partir de los archivos incluidos. Si faltan los contactos, crea el sitio y deja los campos de configuración claramente marcados sin inventarlos.
