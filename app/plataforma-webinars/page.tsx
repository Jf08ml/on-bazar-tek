import type { Metadata } from "next";
import { s } from "@/lib/s";
import { SITE, BRAND, PRODUCT, PRODUCT_PATH, LOGO, CONTACT, mailto } from "@/lib/site";
import * as D from "@/lib/data";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import ProductTabs from "@/components/ProductTabs";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WebinarDashboard from "@/components/WebinarDashboard";
import { MONO, wrap, secBorder, live, soon, btnPrimary, btnGhost, Eyebrow, H2, Lead, MobileCta } from "@/components/ui";

const URL_PAGE = `${SITE}${PRODUCT_PATH}`;
const TITLE = "Plataforma de webinars con landing, WhatsApp y analytics";
const DESC = `${PRODUCT}: crea, transmite y mide webinars desde una sola plataforma. Landing de registro, email, WhatsApp, estudio en navegador, grabación y analytics con UTM. Agenda una demo.`;

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | ${PRODUCT}` },
  description: DESC,
  alternates: { canonical: PRODUCT_PATH },
  openGraph: { title: `${PRODUCT}: plataforma de webinars con marketing y analytics`, description: "Landing, registro, email, WhatsApp, estudio virtual, grabación y analytics en un solo lugar.", url: URL_PAGE },
  twitter: { card: "summary_large_image", title: `${PRODUCT}: plataforma de webinars`, description: "Crea, transmite y mide tus webinars desde una sola plataforma." },
};

const ORG_ID = `${SITE}/#org`;
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": ORG_ID, name: BRAND, url: SITE, logo: `${SITE}${LOGO}` },
    { "@type": "SoftwareApplication", name: PRODUCT, brand: { "@id": ORG_ID }, publisher: { "@id": ORG_ID }, applicationCategory: "BusinessApplication", operatingSystem: "Web", description: "Plataforma de webinars y eventos online con landing de registro, email, WhatsApp, estudio virtual, grabación y analytics.", url: URL_PAGE },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: BRAND, item: SITE }, { "@type": "ListItem", position: 2, name: "Webinars", item: URL_PAGE }] },
    { "@type": "FAQPage", mainEntity: D.FAQ.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })) },
  ],
};

const Seq = ({ title, items }: { title: string; items: [string, boolean][] }) => (
  <div style={s("background:#fff;border:1px solid oklch(0.9 0.008 260);border-radius:18px;padding:26px")}>
    <h3 style={s("margin:0 0 16px;font-size:20px")}>{title}</h3>
    <div style={s("display:flex;flex-direction:column;gap:8px")}>
      {items.map(([n, ok]) => (
        <div key={n} style={s("display:flex;justify-content:space-between;align-items:center;gap:10px;border:1px solid oklch(0.93 0.006 260);border-radius:10px;padding:11px 14px;font-size:14px;font-weight:600")}>
          <span>{n}</span><span style={s(ok ? live : soon)}>{ok ? "Disponible" : "Próximamente"}</span>
        </div>
      ))}
    </div>
  </div>
);
const Flow = ({ items, dark }: { items: { t: string; a: string }[]; dark?: boolean }) => (
  <div style={s("display:flex;flex-direction:column;gap:8px")}>
    {items.map((x) => (
      <div key={x.t}>
        <div style={s(dark ? "background:oklch(0.52 0.17 265);border-radius:10px;padding:11px 14px;font-size:14px;font-weight:700" : "border:1px dashed oklch(0.8 0.01 260);border-radius:10px;padding:11px 14px;font-size:14px;font-weight:600;color:oklch(0.4 0.02 260)")}>{x.t}</div>
        <div aria-hidden style={s(`text-align:center;color:${dark ? "oklch(0.75 0.08 265)" : "oklch(0.65 0.01 260)"};font-size:13px;line-height:1.3;height:12px`)}>{x.a}</div>
      </div>
    ))}
  </div>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader
        product={{ label: "Webinars", href: PRODUCT_PATH }}
        nav={[["#producto", "Producto"], ["#marketing", "Marketing"], ["#analytics", "Analytics"], ["#precios", "Precios"], ["#faq", "FAQ"]]}
        cta={{ href: "#demo", label: "Agendar demo" }}
      />

      <main id="top">
        {/* HERO */}
        <section style={s("padding:72px 20px 40px;overflow:hidden")}>
          <div style={s(wrap)}>
            <div style={s("max-width:820px")}>
              <Eyebrow>{PRODUCT} · Plataforma de webinars y eventos online</Eyebrow>
              <h1 style={s("font-size:clamp(38px,6vw,68px);line-height:1.04;letter-spacing:-0.035em;font-weight:800;margin:0 0 24px;text-wrap:balance")}>Crea, transmite y mide tus webinars desde una sola plataforma</h1>
              <p style={s("font-size:19px;line-height:1.6;color:oklch(0.4 0.02 260);margin:0 0 32px;max-width:680px;text-wrap:pretty")}>Crea la landing de tu evento, registra asistentes, promociónalo por email y WhatsApp, transmite desde tu estudio virtual y mide todo el rendimiento.</p>
              <div style={s("display:flex;gap:12px;flex-wrap:wrap")}>
                <a className="btn-primary" href="#demo" style={s(btnPrimary)}>Crear mi primer webinar</a>
                <a className="btn-ghost" href="#como-funciona" style={s(btnGhost)}>Ver cómo funciona</a>
              </div>
              <p style={s("font-size:13px;color:oklch(0.45 0.02 260);margin:16px 0 0")}>Demo guiada con tu caso de uso. Sin compromiso.</p>
            </div>

            <WebinarDashboard />
          </div>
        </section>

        {/* TRUST */}
        <section style={s("padding:40px 20px 24px")}>
          <div style={s(`${wrap};text-align:center`)}>
            <p style={s("font-size:15px;font-weight:600;color:oklch(0.4 0.02 260);margin:0 0 20px")}>Todo lo que necesitas para organizar tu próximo evento online</p>
            <div style={s("display:flex;flex-wrap:wrap;gap:10px;justify-content:center")}>
              {D.TRUST.map((c) => <span key={c} style={s("background:#fff;border:1px solid oklch(0.9 0.008 260);border-radius:99px;padding:9px 16px;font-size:13px;font-weight:600")}>{c}</span>)}
            </div>
          </div>
        </section>

        {/* PROBLEMA */}
        <section style={s("padding:96px 20px")} aria-labelledby="problema">
          <div style={s(wrap)}>
            <H2 id="problema" max="760px">Organizar un webinar no debería requerir 6 herramientas.</H2>
            <Lead mb={48} max="640px">Cada herramienta suma costo, configuración y datos dispersos. Al final nadie sabe qué canal trajo a quién.</Lead>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,460px),1fr));gap:20px")}>
              <div style={s("background:#fff;border:1px solid oklch(0.9 0.008 260);border-radius:18px;padding:28px")}>
                <div style={s(`${MONO}font-size:12px;color:oklch(0.45 0.02 260);margin-bottom:18px`)}>MÉTODO TRADICIONAL</div>
                <Flow items={D.OLD_FLOW} />
              </div>
              <div style={s("background:oklch(0.2 0.02 260);color:#fff;border-radius:18px;padding:28px")}>
                <div style={s(`${MONO}font-size:12px;color:oklch(0.8 0.08 265);margin-bottom:18px`)}>CON ONBAZARTEK WEBINARS · UNA SOLA PLATAFORMA</div>
                <Flow items={D.NEW_FLOW} dark />
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTO */}
        <section id="producto" style={s(`padding:96px 20px;${secBorder};border-bottom:1px solid oklch(0.92 0.006 260)`)} aria-labelledby="h-producto">
          <div style={s(wrap)}>
            <Eyebrow>Producto</Eyebrow>
            <H2 id="h-producto" mb={40}>Todo tu evento, en un solo lugar.</H2>
            <ProductTabs />
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" style={s("padding:96px 20px")} aria-labelledby="h-como">
          <div style={s(wrap)}>
            <Eyebrow>Cómo funciona</Eyebrow>
            <H2 id="h-como" mb={44}>De la idea al análisis en cinco pasos.</H2>
            <ol style={s("list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:16px")}>
              {D.STEPS.map((x, i) => (
                <li key={x.t} style={s("background:#fff;border:1px solid oklch(0.9 0.008 260);border-radius:16px;padding:22px")}>
                  <div style={s(`${MONO}font-size:13px;color:oklch(0.52 0.17 265);font-weight:500`)}>0{i + 1}</div>
                  <h3 style={s("font-size:18px;margin:18px 0 8px;letter-spacing:-0.01em")}>{x.t}</h3>
                  <p style={s("font-size:14px;line-height:1.6;color:oklch(0.4 0.02 260);margin:0")}>{x.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* LANDING */}
        <section id="landing" style={s(`padding:96px 20px;${secBorder}`)} aria-labelledby="h-landing">
          <div style={s(`${wrap};display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:48px;align-items:center`)}>
            <div>
              <Eyebrow>Landing + registro</Eyebrow>
              <h2 id="h-landing" style={s("font-size:clamp(28px,3.6vw,42px);letter-spacing:-0.03em;line-height:1.12;margin:0 0 16px")}>Una página de registro propia para cada webinar.</h2>
              <p style={s("font-size:17px;line-height:1.6;color:oklch(0.4 0.02 260);margin:0 0 24px")}>Tu marca, tu dominio y tu formulario. Cada visita y cada registro llegan con su fuente de tráfico.</p>
              <ul style={s("list-style:none;padding:0;margin:0;display:grid;grid-template-columns:1fr 1fr;gap:10px 16px")}>
                {D.LANDING_FEATURES.map((f) => <li key={f} style={s("display:flex;gap:8px;font-size:14px;font-weight:600")}><span style={{ color: "oklch(0.52 0.17 160)" }}>✓</span>{f}</li>)}
              </ul>
            </div>
            <div style={s("border:1px solid oklch(0.9 0.008 260);border-radius:16px;overflow:hidden;box-shadow:0 24px 60px -30px oklch(0.3 0.05 265 / .4)")}>
              <div style={s(`padding:10px 14px;background:oklch(0.975 0.004 260);border-bottom:1px solid oklch(0.93 0.006 260);${MONO}font-size:11px;color:oklch(0.5 0.02 260)`)}>eventos.tuempresa.com/ventas-b2b-2027</div>
              <div style={s("padding:26px;background:linear-gradient(180deg,oklch(0.96 0.025 265),#fff 70%)")}>
                <div style={s("display:flex;justify-content:space-between;align-items:center;margin-bottom:26px")}><span style={s("font-weight:800;font-size:15px")}>TuMarca</span><span style={s(`${MONO}font-size:11px;color:oklch(0.5 0.02 260)`)}>12 NOV · 6 PM</span></div>
                <h3 style={s("font-size:26px;letter-spacing:-0.025em;line-height:1.12;margin:0 0 10px")}>Estrategia de ventas B2B para 2027</h3>
                <p style={s("font-size:14px;line-height:1.6;color:oklch(0.4 0.02 260);margin:0 0 20px")}>Aprende a construir un proceso comercial medible en 45 minutos.</p>
                <div style={s("display:flex;gap:16px;margin-bottom:20px;font-size:13px;font-weight:600")}><span>Ponente A</span><span>Ponente B</span></div>
                <div style={s("background:#fff;border:1px solid oklch(0.9 0.008 260);border-radius:12px;padding:16px;display:flex;flex-direction:column;gap:8px")}>
                  <div style={s("border:1px solid oklch(0.88 0.01 260);border-radius:8px;padding:9px 12px;font-size:13px;color:oklch(0.5 0.02 260)")}>Nombre completo</div>
                  <div style={s("border:1px solid oklch(0.88 0.01 260);border-radius:8px;padding:9px 12px;font-size:13px;color:oklch(0.5 0.02 260)")}>Correo / WhatsApp</div>
                  <div style={s("background:oklch(0.52 0.17 265);color:#fff;text-align:center;padding:11px;border-radius:8px;font-weight:700;font-size:14px")}>Reservar mi cupo</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARKETING */}
        <section id="marketing" style={s("padding:96px 20px")} aria-labelledby="h-mkt">
          <div style={s(wrap)}>
            <Eyebrow>Marketing</Eyebrow>
            <H2 id="h-mkt" max="760px">Convierte tu webinar en una campaña de marketing.</H2>
            <Lead>Invita, confirma y recuerda por los canales donde está tu audiencia. Cada mensaje puede llevar parámetros UTM.</Lead>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:20px")}>
              <Seq title="Email" items={D.EMAIL_SEQ} />
              <Seq title="WhatsApp" items={D.WA_SEQ} />
              <div style={s("background:oklch(0.2 0.02 260);color:#fff;border-radius:18px;padding:26px")}>
                <h3 style={s("margin:0 0 8px;font-size:20px")}>Tracking en cada envío</h3>
                <p style={s("font-size:14px;line-height:1.6;color:oklch(0.8 0.01 260);margin:0 0 18px")}>Cada enlace sale etiquetado. Luego ves qué mensaje trajo registros y asistentes.</p>
                <div style={s(`${MONO}font-size:12px;line-height:1.9;background:oklch(0.27 0.02 260);border-radius:10px;padding:14px;word-break:break-all`)}>
                  onbazartek.com/e/ventas-b2b<br />?utm_source=<span style={{ color: "oklch(0.8 0.12 160)" }}>whatsapp</span><br />&amp;utm_medium=<span style={{ color: "oklch(0.8 0.12 160)" }}>mensaje</span><br />&amp;utm_campaign=<span style={{ color: "oklch(0.8 0.12 160)" }}>recordatorio</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ESTUDIO */}
        <section id="estudio" style={s("padding:96px 20px;background:oklch(0.17 0.02 260);color:#fff")} aria-labelledby="h-estudio">
          <div style={s(wrap)}>
            <Eyebrow dark>Estudio virtual</Eyebrow>
            <H2 id="h-estudio" max="800px">Tu propio estudio virtual, directamente desde el navegador.</H2>
            <Lead c="oklch(0.78 0.01 260)" max="640px">Presenta, modera y coordina a tus ponentes sin instalar nada.</Lead>
            <div style={s("background:oklch(0.22 0.02 260);border:1px solid oklch(0.3 0.02 260);border-radius:18px;padding:14px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:14px")}>
              <div style={s("display:flex;flex-direction:column;gap:10px;min-width:0")}>
                <div style={s("aspect-ratio:16/9;border-radius:12px;background:repeating-linear-gradient(135deg,oklch(0.27 0.02 260) 0 12px,oklch(0.25 0.02 260) 12px 24px);display:grid;place-items:center;position:relative")}>
                  <span style={s(`${MONO}font-size:12px;color:oklch(0.75 0.01 260)`)}>presentación compartida</span>
                  <span style={s("position:absolute;top:10px;left:10px;background:oklch(0.55 0.2 25);font-size:11px;font-weight:800;padding:3px 9px;border-radius:5px;display:flex;gap:6px;align-items:center")}><span style={s("width:6px;height:6px;border-radius:50%;background:#fff;animation:pulse 1.4s infinite")} />EN VIVO</span>
                </div>
                <div style={s("display:grid;grid-template-columns:repeat(3,1fr);gap:10px")}>
                  {D.SPEAKERS.map((p) => <div key={p} style={s("aspect-ratio:4/3;border-radius:10px;background:repeating-linear-gradient(135deg,oklch(0.27 0.02 260) 0 8px,oklch(0.25 0.02 260) 8px 16px);position:relative")}><span style={s("position:absolute;left:8px;bottom:6px;font-size:11px;font-weight:700")}>{p}</span></div>)}
                </div>
                <div style={s("display:flex;gap:8px;flex-wrap:wrap")}>
                  {D.STUDIO_TOOLS.map((t) => <span key={t} style={s("background:oklch(0.3 0.02 260);border-radius:8px;padding:8px 12px;font-size:12px;font-weight:700")}>{t}</span>)}
                </div>
              </div>
              <div style={s("background:oklch(0.26 0.02 260);border-radius:12px;padding:14px;display:flex;flex-direction:column;gap:10px;min-width:0")}>
                <div style={s("display:flex;gap:6px;font-size:12px;font-weight:700")}><span style={s("background:oklch(0.52 0.17 265);padding:6px 12px;border-radius:7px")}>Chat</span><span style={s("padding:6px 12px;color:oklch(0.75 0.01 260)")}>Preguntas 3</span><span style={s("padding:6px 12px;color:oklch(0.75 0.01 260)")}>Encuestas</span></div>
                {D.CHAT.map((c) => <div key={c.u} style={s("font-size:13px;line-height:1.5")}><b style={{ color: "oklch(0.8 0.08 265)" }}>{c.u}</b> {c.m}</div>)}
                <div style={s("margin-top:auto;border:1px solid oklch(0.38 0.02 260);border-radius:8px;padding:9px 12px;font-size:12px;color:oklch(0.7 0.01 260)")}>Moderar: aprobar / ocultar mensajes</div>
              </div>
            </div>
            <p style={s("font-size:13px;color:oklch(0.7 0.01 260);margin:14px 0 0")}>Interfaz ilustrativa con datos de demostración. CTA en vivo y reacciones: <b>Próximamente</b>.</p>
          </div>
        </section>

        {/* ASISTENTE */}
        <section id="asistente" style={s("padding:96px 20px")} aria-labelledby="h-asistente">
          <div style={s(`${wrap};display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:48px;align-items:center`)}>
            <div style={s("border:1px solid oklch(0.9 0.008 260);border-radius:16px;background:#fff;padding:16px;box-shadow:0 24px 60px -30px oklch(0.3 0.05 265 / .35)")}>
              <div style={s("display:grid;grid-template-columns:2fr 1fr;gap:12px")}>
                <div style={s("min-width:0")}>
                  <div style={s("aspect-ratio:16/9;border-radius:10px;background:repeating-linear-gradient(135deg,oklch(0.93 0.01 260) 0 10px,oklch(0.95 0.008 260) 10px 20px);display:grid;place-items:center")}><span style={s(`${MONO}font-size:11px;color:oklch(0.45 0.02 260)`)}>video del webinar</span></div>
                  <div style={s("font-weight:800;font-size:15px;margin:12px 0 4px")}>Estrategia de ventas B2B 2027</div>
                  <div style={s("font-size:12px;color:oklch(0.45 0.02 260);margin-bottom:10px")}>Ponente A · Ponente B</div>
                  <span style={s("background:oklch(0.96 0.025 265);color:oklch(0.42 0.17 265);font-size:12px;font-weight:700;padding:6px 10px;border-radius:7px;display:inline-block")}>Recursos · Próximamente</span>
                </div>
                <div style={s("border:1px solid oklch(0.93 0.006 260);border-radius:10px;padding:10px;display:flex;flex-direction:column;gap:8px;font-size:12px;min-width:0")}>
                  <b>Chat</b><span>Ana: ¡Hola a todos!</span><span>Luis: ¿Habrá grabación?</span>
                  <div style={s("margin-top:auto;background:oklch(0.96 0.03 160);border-radius:8px;padding:8px")}><b>Encuesta</b><div style={{ marginTop: 4 }}>¿Qué canal usas más?</div></div>
                </div>
              </div>
            </div>
            <div>
              <Eyebrow>Experiencia del asistente</Eyebrow>
              <h2 id="h-asistente" style={s("font-size:clamp(28px,3.6vw,42px);letter-spacing:-0.03em;line-height:1.12;margin:0 0 16px")}>Tu audiencia entra con un enlace. Sin instalar nada.</h2>
              <p style={s("font-size:17px;line-height:1.6;color:oklch(0.4 0.02 260);margin:0")}>Los asistentes ven el video, a los ponentes, el chat, las preguntas y las encuestas desde el navegador de su computador o celular.</p>
            </div>
          </div>
        </section>

        {/* INTERACCION */}
        <section style={s(`padding:96px 20px;${secBorder}`)} aria-labelledby="h-inter">
          <div style={s(wrap)}>
            <Eyebrow>Interacción</Eyebrow>
            <H2 id="h-inter">Convierte espectadores en participantes.</H2>
            <Lead>Más interacción significa más atención y mejor información sobre quién asiste y qué le interesa.</Lead>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:16px")}>
              <div style={s("border:1px solid oklch(0.9 0.008 260);border-radius:16px;padding:22px")}>
                <h3 style={s("margin:0 0 14px;font-size:17px")}>Encuestas en tiempo real</h3>
                {D.POLL.map((o) => (
                  <div key={o.n} style={s("margin-bottom:10px")}>
                    <div style={s("display:flex;justify-content:space-between;font-size:13px;font-weight:600;margin-bottom:4px")}><span>{o.n}</span><span>{o.p}%</span></div>
                    <div style={s("height:8px;border-radius:99px;background:oklch(0.95 0.005 260)")}><div style={{ height: 8, borderRadius: 99, background: "oklch(0.52 0.17 265)", width: `${o.p}%` }} /></div>
                  </div>
                ))}
              </div>
              <div style={s("border:1px solid oklch(0.9 0.008 260);border-radius:16px;padding:22px")}>
                <h3 style={s("margin:0 0 14px;font-size:17px")}>Preguntas y respuestas</h3>
                {D.QUESTIONS.map((q) => (
                  <div key={q.t} style={s("display:flex;gap:10px;align-items:flex-start;border:1px solid oklch(0.93 0.006 260);border-radius:10px;padding:10px 12px;margin-bottom:8px;font-size:13px;line-height:1.5")}>
                    <b style={s(`color:oklch(0.52 0.17 265);${MONO}`)}>▲{q.v}</b><span>{q.t}</span>
                  </div>
                ))}
              </div>
              <div style={s("border:1px solid oklch(0.9 0.008 260);border-radius:16px;padding:22px")}>
                <h3 style={s("margin:0 0 14px;font-size:17px")}>Chat, CTA y recursos</h3>
                <p style={s("font-size:14px;line-height:1.6;color:oklch(0.4 0.02 260);margin:0 0 14px")}>Chat moderado durante todo el evento.</p>
                <div style={s("display:flex;flex-wrap:wrap;gap:8px")}>
                  {["CTA en vivo", "Recursos descargables", "Reacciones"].map((t) => <span key={t} style={s("background:oklch(0.95 0.005 260);padding:7px 12px;border-radius:99px;font-size:12px;font-weight:700;color:oklch(0.35 0.02 260)")}>{t} · Próximamente</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANALYTICS */}
        <section id="analytics" style={s("padding:96px 20px")} aria-labelledby="h-an">
          <div style={s(wrap)}>
            <Eyebrow>Analytics</Eyebrow>
            <H2 id="h-an" max="820px">No solo sepas cuántas personas asistieron. Descubre qué funcionó.</H2>
            <Lead max="640px">De la visita al lead, en un solo tablero.</Lead>
            <div style={s("background:#fff;border:1px solid oklch(0.9 0.008 260);border-radius:18px;padding:22px;box-shadow:0 24px 60px -34px oklch(0.3 0.05 265 / .4)")}>
              <div style={s("display:flex;justify-content:space-between;margin-bottom:18px;flex-wrap:wrap;gap:8px")}><b>Webinar: Estrategia de ventas B2B 2027</b><span style={s(`${MONO}font-size:10px;border:1px solid oklch(0.88 0.01 260);padding:3px 9px;border-radius:99px;color:oklch(0.45 0.02 260)`)}>DATOS DE DEMOSTRACIÓN</span></div>
              <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:20px")}>
                {D.KPIS.map((k) => <div key={k.l} style={s("border:1px solid oklch(0.93 0.006 260);border-radius:10px;padding:12px")}><div style={s(`font-size:10px;${MONO}color:oklch(0.5 0.02 260)`)}>{k.l}</div><div style={s("font-size:22px;font-weight:800;letter-spacing:-0.02em")}>{k.v}</div></div>)}
              </div>
              <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:24px")}>
                <div>
                  <div style={s("font-size:13px;font-weight:800;margin-bottom:12px")}>Fuente de registro</div>
                  {D.SOURCES.map((x) => (
                    <div key={x.n} style={s("display:flex;align-items:center;gap:10px;margin-bottom:7px;font-size:12px;font-weight:600")}>
                      <span style={{ width: 76 }}>{x.n}</span>
                      <div style={s("flex:1;height:10px;background:oklch(0.95 0.005 260);border-radius:99px")}><div style={{ height: 10, borderRadius: 99, background: "oklch(0.52 0.17 265)", width: `${x.p}%` }} /></div>
                      <span style={s(`width:30px;text-align:right;${MONO}`)}>{x.p}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={s("font-size:13px;font-weight:800;margin-bottom:12px")}>Funnel</div>
                  {D.FUNNEL.map((f) => (
                    <div key={f.n} style={{ marginBottom: 6 }}>
                      <div style={{ background: "oklch(0.52 0.17 160)", color: "#fff", borderRadius: 8, padding: "9px 12px", fontSize: 12, fontWeight: 700, display: "flex", justifyContent: "space-between", width: `${f.w}%`, minWidth: 150 }}><span>{f.n}</span><span>{f.v}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ATRIBUCION */}
        <section style={s(`padding:96px 20px;${secBorder}`)} aria-labelledby="h-attr">
          <div style={s(wrap)}>
            <Eyebrow>Atribución</Eyebrow>
            <H2 id="h-attr">Descubre de dónde vienen tus asistentes.</H2>
            <Lead max="700px">Los parámetros UTM son etiquetas en tus enlaces. OnBazarTek Webinars las guarda en cada registro, así sabes qué canal trae personas que sí asisten, no solo registros.</Lead>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:16px;align-items:stretch")}>
              <div style={s(`background:oklch(0.2 0.02 260);color:#fff;border-radius:16px;padding:24px;${MONO}font-size:13px;line-height:2;display:flex;flex-direction:column;justify-content:center`)}>
                <span style={{ color: "oklch(0.75 0.01 260)" }}>{"// enlace de campaña"}</span>
                <span>utm_source=<b style={{ color: "oklch(0.8 0.12 160)" }}>instagram</b></span>
                <span>utm_campaign=<b style={{ color: "oklch(0.8 0.12 160)" }}>webinar_marketing</b></span>
              </div>
              {D.ATTRIBUTION.map((a) => (
                <div key={a.n} style={s("border:1px solid oklch(0.9 0.008 260);border-radius:16px;padding:24px")}>
                  <div style={s("font-weight:800;font-size:18px;margin-bottom:14px")}>{a.n}</div>
                  <div style={s("font-size:13px;color:oklch(0.45 0.02 260)")}>→ Registros</div>
                  <div style={s("font-size:30px;font-weight:800;letter-spacing:-0.02em")}>{a.r}</div>
                  <div style={s("font-size:13px;color:oklch(0.45 0.02 260);margin-top:8px")}>→ Asistentes</div>
                  <div style={s("font-size:30px;font-weight:800;color:oklch(0.45 0.15 160);letter-spacing:-0.02em")}>{a.a}</div>
                </div>
              ))}
            </div>
            <p style={s("font-size:13px;color:oklch(0.45 0.02 260);margin:14px 0 0")}>Cifras de ejemplo con fines ilustrativos.</p>
          </div>
        </section>

        {/* GRABACION */}
        <section style={s("padding:96px 20px")} aria-labelledby="h-rec">
          <div style={s(wrap)}>
            <Eyebrow>Grabación y repetición</Eyebrow>
            <H2 id="h-rec" max="760px">Tu webinar no termina cuando termina la transmisión.</H2>
            <Lead max="640px">La grabación sigue trabajando para tu equipo después del evento.</Lead>
            <div style={s("display:flex;flex-wrap:wrap;gap:10px;align-items:center")}>
              {D.REC_FLOW.map(([n, tag, ok], i) => (
                <div key={n} style={s("display:flex;align-items:center;gap:10px")}>
                  <div style={s(`border-radius:12px;padding:14px 18px;${ok ? "background:oklch(0.52 0.17 265);color:#fff" : "background:#fff;color:oklch(0.3 0.02 260);border:1px dashed oklch(0.75 0.01 260)"}`)}>
                    <div style={s("font-weight:800;font-size:14px")}>{n}</div>
                    <div style={s(`font-size:11px;${MONO}margin-top:3px;opacity:.85`)}>{tag}</div>
                  </div>
                  {i < D.REC_FLOW.length - 1 && <span aria-hidden style={{ color: "oklch(0.6 0.01 260)" }}>→</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEADS */}
        <section style={s(`padding:96px 20px;${secBorder}`)} aria-labelledby="h-leads">
          <div style={s(wrap)}>
            <Eyebrow>Leads y seguimiento</Eyebrow>
            <H2 id="h-leads" max="760px">Entrega a ventas algo más que una lista de correos.</H2>
            <Lead max="700px">El historial de cada persona (registro, asistencia, permanencia, respuestas) ayuda a priorizar a quién contactar.</Lead>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr));gap:10px")}>
              {D.LEAD_STEPS.map((x) => <div key={x} style={s("border:1px solid oklch(0.9 0.008 260);border-radius:12px;padding:14px;font-size:14px;font-weight:700;background:oklch(0.985 0.003 260)")}><span style={{ color: "oklch(0.52 0.17 160)" }}>●</span> {x}</div>)}
            </div>
            <p style={s("font-size:14px;color:oklch(0.4 0.02 260);margin:18px 0 0")}>Calificación automática de leads y conexión con CRM: <b>En desarrollo</b>.</p>
          </div>
        </section>

        {/* CASOS */}
        <section style={s("padding:96px 20px")} aria-labelledby="h-casos">
          <div style={s(wrap)}>
            <Eyebrow>Casos de uso</Eyebrow>
            <H2 id="h-casos" mb={40}>Para cada tipo de evento online.</H2>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr));gap:14px")}>
              {D.USE_CASES.map((u) => (
                <article key={u.t} className="card-hover" style={s("background:#fff;border:1px solid oklch(0.9 0.008 260);border-radius:14px;padding:20px")}>
                  <h3 style={s("margin:0 0 8px;font-size:16px")}>{u.t}</h3>
                  <p style={s("margin:0;font-size:14px;line-height:1.55;color:oklch(0.4 0.02 260)")}>{u.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARACION */}
        <section style={s(`padding:96px 20px;${secBorder}`)} aria-labelledby="h-cmp">
          <div style={s("max-width:960px;margin:0 auto")}>
            <H2 id="h-cmp" mb={12}>Menos herramientas. Más control.</H2>
            <Lead mb={32} max="none">Reunir todo en un solo lugar reduce pasos, costos y datos sueltos.</Lead>
            <div style={s("border:1px solid oklch(0.9 0.008 260);border-radius:16px;overflow:hidden")} role="table">
              <div role="row" style={s(`display:grid;grid-template-columns:1.1fr 1fr 1fr;background:oklch(0.975 0.004 260);padding:14px 18px;font-size:12px;${MONO}color:oklch(0.45 0.02 260);gap:10px`)}>
                <span role="columnheader">FUNCIONALIDAD</span><span role="columnheader">MÉTODO TRADICIONAL</span><span role="columnheader" style={{ color: "oklch(0.42 0.17 265)" }}>ONBAZARTEK WEBINARS</span>
              </div>
              {D.COMPARE.map((r) => (
                <div role="row" key={r.f} style={s("display:grid;grid-template-columns:1.1fr 1fr 1fr;padding:14px 18px;border-top:1px solid oklch(0.93 0.006 260);font-size:14px;gap:10px")}>
                  <b role="cell">{r.f}</b><span role="cell" style={{ color: "oklch(0.45 0.02 260)" }}>{r.o}</span><span role="cell" style={s("font-weight:700;color:oklch(0.4 0.14 160)")}>✓ {r.n}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRECIOS */}
        <section id="precios" style={s("padding:96px 20px")} aria-labelledby="h-precios">
          <div style={s(wrap)}>
            <Eyebrow>Precios · COP</Eyebrow>
            <H2 id="h-precios">Elige cómo quieres pagar.</H2>
            <Lead mb={28} max="660px">Paga por evento o con una suscripción mensual. Landing, registro y analytics incluidos en todos los planes.</Lead>
            <Pricing />
            <p style={s("font-size:13px;color:oklch(0.45 0.02 260);margin:18px 0 0;line-height:1.6")}>Capacidades y duraciones indicativas; se confirman en la demo. Impuestos no incluidos.</p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={s(`padding:96px 20px;${secBorder}`)} aria-labelledby="h-faq">
          <div style={s("max-width:820px;margin:0 auto")}>
            <H2 id="h-faq" mb={32}>Preguntas frecuentes sobre webinars</H2>
            <Faq />
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="demo" style={s("padding:96px 20px")}>
          <div style={s(`${wrap};background:oklch(0.2 0.02 260);color:#fff;border-radius:28px;padding:clamp(36px,7vw,88px) clamp(24px,6vw,72px);text-align:center`)}>
            <h2 style={s("font-size:clamp(32px,5vw,56px);letter-spacing:-0.035em;line-height:1.08;margin:0 0 18px;text-wrap:balance")}>Tu próximo webinar empieza aquí.</h2>
            <p style={s("font-size:19px;line-height:1.6;color:oklch(0.82 0.01 260);margin:0 auto 32px;max-width:560px")}>Crea tu evento, reúne a tu audiencia, transmite en vivo y descubre qué funcionó.</p>
            <div style={s("display:flex;gap:12px;justify-content:center;flex-wrap:wrap")}>
              <a className="btn-light" href={mailto(CONTACT.demo, "Quiero agendar una demo de OnBazarTek Webinars")} style={s("background:oklch(0.62 0.17 265);color:#fff;padding:16px 28px;border-radius:12px;font-weight:700")}>Crear mi primer webinar</a>
              <a className="btn-line" href={mailto(CONTACT.sales, "Información comercial de OnBazarTek Webinars")} style={s("border:1px solid oklch(0.45 0.02 260);color:#fff;padding:16px 28px;border-radius:12px;font-weight:700")}>Hablar con ventas</a>
            </div>
            <p style={s("font-size:14px;color:oklch(0.72 0.01 260);margin:28px 0 0")}>{PRODUCT} es la primera solución de {BRAND}. <a href="/" style={{ color: "oklch(0.8 0.08 265)", fontWeight: 700 }}>Conoce la empresa →</a></p>
          </div>
        </section>
      </main>

      <SiteFooter />

      <MobileCta href="#demo" label="Agendar demo" />
    </>
  );
}
