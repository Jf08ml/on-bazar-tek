/** Datos de marca centralizados. Cambia aquí dominio, correos, textos y portafolio. */
export const SITE = "https://onbazartek.com";
export const BRAND = "OnBazarTek";
export const LOGO = "/logo-no-text.png";
export const TAGLINE = "Tecnología para conectar ideas con posibilidades.";
export const BRAND_DESC = "Desarrollamos soluciones tecnológicas y productos digitales que ayudan a empresas y personas a comunicar, crear y crecer.";

export const CONTACT = { general: "contacto@onbazartek.com", demo: "demo@onbazartek.com", sales: "ventas@onbazartek.com" };
export const mailto = (to: string, subject?: string) => `mailto:${to}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

/** Producto inicial: plataforma de webinars y transmisiones en vivo. */
export const PRODUCT = `${BRAND} Webinars`;
export const PRODUCT_PATH = "/plataforma-webinars";

/**
 * Portafolio. `available: false` = línea futura: se muestra sin enlace ni fecha.
 * Para lanzar un producto nuevo: crea `app/<slug>/page.tsx`, pon `href` y `available: true`.
 */
export type Solution = { id: string; name: string; category: string; desc: string; available: boolean; href?: string };
export const SOLUTIONS: Solution[] = [
  { id: "webinars", name: PRODUCT, category: "Webinars y experiencias digitales", desc: "Webinars, eventos virtuales y transmisiones en vivo: landing de registro, email, WhatsApp, estudio en el navegador, grabación y analytics.", available: true, href: PRODUCT_PATH },
  { id: "productos", name: "Productos digitales", category: "Plataformas SaaS y aplicaciones", desc: "Nuevas plataformas y herramientas para empresas que se sumarán al portafolio de OnBazarTek.", available: false },
  { id: "servicios", name: "Servicios tecnológicos", category: "Desarrollo, automatización e integraciones", desc: "Soluciones a medida para digitalizar procesos y conectar las herramientas de tu empresa.", available: false },
];
