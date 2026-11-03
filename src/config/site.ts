// Completar únicamente con datos oficiales. Reiniciar/build después de editar.
export const site = {
  name: "Celi’s Viveros",
  whatsappNumber: '', // Formato internacional, solo dígitos.
  facebookUrl: '',
  instagramUrl: '',
  email: '',
  publicSiteUrl: '', // URL https del dominio final, sin ruta.
};
export const publicUrl = /^https:\/\/[^/]+\/?$/.test(site.publicSiteUrl) ? site.publicSiteUrl.replace(/\/$/, '') : '';
export const whatsappUrl = /^\d{8,15}$/.test(site.whatsappNumber)
  ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent("Hola, quiero consultar precios y disponibilidad mayorista en Celi's Viveros. Soy de [comuna] y necesito [especie y cantidad].")}` : '';
const secure = (value: string) => /^https:\/\//.test(value) ? value : '';
export const contacts = [
  { label: 'Cotizar por WhatsApp', href: whatsappUrl },
  { label: 'Facebook', href: secure(site.facebookUrl) },
  { label: 'Instagram', href: secure(site.instagramUrl) },
  { label: 'Escríbenos por correo', href: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(site.email) ? `mailto:${site.email}?subject=${encodeURIComponent("Consulta mayorista - Celi's Viveros")}` : '' },
].filter(contact => contact.href);
