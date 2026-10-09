# Livento — Estrategia, copy y SEO (landing `/plataforma-webinars`)

## 1. Análisis competitivo (precios consultados oct-2026, USD, facturación anual salvo nota)
| Plataforma | Entrada | Capacidad entrada | Patrón de landing / propuesta |
|---|---|---|---|
| WebinarJam | ~$39–49/mes (otras fuentes: $499/año) | 100–500 | Orientada a vender; CTA/ofertas en vivo; prueba $1 14 días; solo anual |
| Livestorm | Gratis (20–30 asist.) · Pro desde ~$79/mes | 100 | 100 % navegador, analytics y email integrados; B2B/EU |
| Demio | $42–59/mes | 50 | Lead-gen; engagement scoring; automatización solo desde Growth (~$75–83) |
| GoTo Webinar | $49–59/mes | 100–500 | Fiabilidad corporativa; marketing menos sofisticado |
| Zoom Webinars | desde ~$79/mes (otras fuentes ~$14 promocional) | hasta 50.000 | Ecosistema Zoom; sin funnel/CRM nativo |
| EventoVirtual.co (CO) | USD 99/mes · plan "Profesional" COP 441.400/mes | 550 simultáneos | Streaming privado; landing por evento, grabación HD, estadísticas, chat/Q&A, informe PDF; sin WhatsApp ni UTM visibles |

**Estándar de mercado:** 100 % navegador sin descargas, chat/Q&A/encuestas, grabación, repetición, analytics básico, landing de registro.
**Diferenciadores aprovechables:** WhatsApp nativo (rara vez integrado; clave en LATAM), atribución UTM por fuente hasta asistencia, todo en una cuenta, precio en COP, soporte en español, modelo por evento.
**Objeciones frecuentes:** "¿Y si falla en vivo?", "¿los asistentes instalan algo?", "límite de asistentes/duración", "marca blanca/dominio propio", "costo real al sumar email + landing" (Demio con extras llega a ~$300/mes), compromiso anual.

## 2. Propuesta de valor
> **Crea, transmite y mide tus webinars desde una sola plataforma.** Landing, registro, email, WhatsApp, estudio en vivo, grabación y analytics: sin pegar 6 herramientas.
Posicionamiento: Webinar + Marketing + Analytics + Lead generation. Diferenciador central: *saber de dónde vino cada asistente y qué hizo durante el evento.*

## 3. Arquitectura
Hero+producto → credibilidad (sin logos) → problema/solución → producto (tabs) → cómo funciona (5) → landing+registro → marketing → estudio → asistente → interacción → analytics → atribución → grabación → leads → casos de uso → comparación → pricing → FAQ → CTA final.
CTA principal: **Agendar demo** ("Crear mi primer webinar" → demo, según decisión). Secundario: "Ver cómo funciona". Barra CTA fija en móvil.

## 4. Honestidad de producto
Disponible hoy (según brief): landing por evento, formularios, estudio en navegador, chat, preguntas, encuestas, grabación, analytics, UTM, email, WhatsApp, dominio propio.
Etiquetado **Próximamente / En desarrollo:** CTA en vivo, reacciones, recursos descargables, página de repetición, aviso de inicio/seguimiento/grabación por email y WhatsApp, seguimiento de leads (CRM/lead scoring = En desarrollo). **Revisar con producto antes de publicar.**

## 5. Pricing
**Hallazgo:** el mercado cobra por suscripción mensual/anual por organizador con tope de asistentes (≈ USD 40–80 entrada → ≈ COP 160k–330k/mes), y el email/landing suelen costar extra. Tu modelo por evento (COP 199k–699k) es distinto: atractivo para usuarios ocasionales (agencias, instituciones) pero caro para quien hace 4+ eventos/mes.
**Se implementan ambos con selector:**
- *Por evento* (tus precios, sin cambios): Básico 199.000 · Profesional 399.000 (recomendado) · Marketing 699.000 · Producción desde 1.490.000.
- *Suscripción mensual (propuesta a validar):* Starter 149.000 (100 asist., 2 eventos) · Pro 349.000 (300, 6 eventos; recomendado) · Marketing 649.000 (500, 15 eventos, WhatsApp) · Enterprise a cotizar.
Capacidades, duraciones y topes son **ejemplos a validar con costos reales de streaming**. "Recomendado" ≠ "más vendido".

## 6. SEO
- **Title:** Plataforma de webinars con landing, WhatsApp y analytics | Livento
- **Meta:** Crea, transmite y mide webinars desde una sola plataforma: landing de registro, email, WhatsApp, estudio en navegador, grabación y analytics con UTM. Agenda una demo.
- **H1 único**, H2 por sección, H3 por tarjeta. URL: `/plataforma-webinars`. Keyword principal "plataforma de webinars" en title, H1-eyebrow, subtítulo, FAQ; secundarias en H2/FAQ de forma natural.
- **Intención:** "plataforma/software para webinars" = comercial/comparación → landing; "crear/organizar webinar" = informacional → blog `/blog/como-crear-un-webinar`; "webinar con WhatsApp/landing/registro/analytics" = comercial de nicho → páginas futuras solo con contenido real.
- Schema: Organization, SoftwareApplication (sin `aggregateRating` inventado), FAQPage (Google limita rich results de FAQ a sitios gubernamentales/salud desde 2023; se mantiene por valor semántico), BreadcrumbList. `Event` solo en páginas de cada evento.
- Arquitectura futura: `/webinars`, `/crear-webinar`, `/webinar-en-vivo`, `/webinar-para-empresas`, `/plataforma-eventos-online`, `/webinar-con-whatsapp`, `/webinar-con-landing`, `/blog`.
- **Producción:** el archivo `.dc.html` renderiza en cliente; para indexación óptima, servir HTML pre-renderizado (SSG/SSR) con los mismos meta/JSON-LD, imágenes con `width/height`, fuentes con `preload`, og-image 1200×630.

## 7. Fuentes
livestorm.co/free-webinar-software · easywebinar.com/blog/top-webinar-platforms · dupple.com/learn/best-webinar-platforms · scalegrowth.digital/resources/best-webinar-platforms · radcity.net/best-webinar-platforms-2026-attendee-capacity · getwebinarkit.com/blog/webinar-software-cost-comparison · eventovirtual.co/precios · eventovirtual.co. Las fuentes discrepan en cifras; se usan rangos. Verificar en sitios oficiales antes de citar precios.
