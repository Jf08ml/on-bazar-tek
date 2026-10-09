# OnBazarTek — sitio web (Next.js 15, App Router)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Arquitectura de marca
- **`/`** — home corporativa de OnBazarTek (hero, portafolio de soluciones, primera solución, contacto).
- **`/plataforma-webinars`** — página del producto **OnBazarTek Webinars**.
- Datos de marca, correos y portafolio centralizados en `lib/site.ts` (`SOLUTIONS` alimenta home, footer y sitemap).

## Componentes
- Compartidos: `components/ui.tsx` (Eyebrow, H2, Lead, estilos, barra CTA móvil), `SiteHeader.tsx`, `SiteFooter.tsx`, `WebinarDashboard.tsx`.
- Producto webinars (client): `Faq.tsx`, `Pricing.tsx`, `ProductTabs.tsx`. Contenido editable en `lib/data.ts`.
- Favicon: `app/icon.png` / `app/apple-icon.png` (copia de `public/logo-no-text.png`). Imágenes OG generadas en `app/**/opengraph-image.tsx` (`lib/og.tsx`).

## Añadir un producto nuevo
1. Crea `app/<slug>/page.tsx` reutilizando `SiteHeader`, `SiteFooter` y `components/ui.tsx`.
2. En `lib/site.ts`, marca la línea en `SOLUTIONS` con `available: true` y `href: "/<slug>"`.

## Pendiente antes de publicar
Dominio real y correos (`onbazartek.com`, `contacto@`/`demo@`/`ventas@` son provisionales), rutas `/blog` y `/privacidad` (hoy 404), y revisar etiquetas "Próximamente" y precios (ver `docs/`).
