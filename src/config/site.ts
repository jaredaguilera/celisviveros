// Completar únicamente con datos oficiales. Reiniciar/build después de editar.
export const site = {
  name: "Celi's Viveros",
  whatsappNumber: '56949070733', // Formato internacional, solo dígitos.
  facebookUrl: 'https://www.facebook.com/profile.php?id=100063702034489&locale=es_LA',
  instagramUrl: 'https://www.instagram.com/celis_viveros/',
  email: 'celisviveros40@gmail.com',
  phoneDisplay: '+56 9 4907 0733',
  streetAddress: 'San Jorge, Parcela 40',
  addressDisplay: 'San Jorge, Parcela 40, La Cruz, Quillota, V Región',
  publicSiteUrl: 'https://celisviveros.cl',
  addressLocality: 'La Cruz',
  addressRegion: 'Región de Valparaíso',
  hoursDisplay: 'Lunes a viernes 09:00–18:00; sábado 09:00–14:00; domingo cerrado.',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '14:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '00:00', closes: '00:00' },
  ],
};
export const publicUrl = /^https:\/\/[^/]+\/?$/.test(site.publicSiteUrl) ? site.publicSiteUrl.replace(/\/$/, '') : '';
export const whatsappUrl = /^\d{8,15}$/.test(site.whatsappNumber)
  ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent("Hola, quiero consultar y cotizar plantas en Celi's Viveros. Soy de [comuna] y me interesan [especie y formato].")}` : '';
const secure = (value: string) => /^https:\/\//.test(value) ? value : '';
export const contacts = [
  { label: 'Cotizar por WhatsApp', href: whatsappUrl },
  { label: 'Facebook', href: secure(site.facebookUrl) },
  { label: 'Instagram', href: secure(site.instagramUrl) },
  { label: 'Escríbenos por correo', href: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(site.email) ? `mailto:${site.email}?subject=${encodeURIComponent("Consulta mayorista - Celi's Viveros")}` : '' },
].filter(contact => contact.href);
