import type { Metadata } from "next";
import { s } from "@/lib/s";
import { SITE, BRAND, LOGO, TAGLINE, BRAND_DESC, PRODUCT, PRODUCT_PATH, SOLUTIONS, CONTACT, mailto } from "@/lib/site";
import * as D from "@/lib/data";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WebinarDashboard from "@/components/WebinarDashboard";
import { MONO, wrap, secBorder, live, soon, btnPrimary, btnGhost, Eyebrow, H2, Lead, MobileCta } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: `${BRAND} | Tecnología y soluciones digitales` },
  description: `${BRAND_DESC} Nuestra primera solución: ${PRODUCT}, para webinars, eventos virtuales y transmisiones en vivo.`,
  alternates: { canonical: "/" },
  openGraph: { title: `${BRAND}: ${TAGLINE}`, description: BRAND_DESC, url: SITE },
  twitter: { card: "summary_large_image", title: BRAND, description: BRAND_DESC },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE}/#org`, name: BRAND, url: SITE, logo: `${SITE}${LOGO}`, slogan: TAGLINE, description: BRAND_DESC, email: CONTACT.general },
    { "@type": "WebSite", name: BRAND, url: SITE, publisher: { "@id": `${SITE}/#org` }, inLanguage: "es-CO" },
  ],
};

export default function Home() {
  const [first, ...future] = SOLUTIONS;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader
        nav={[["#soluciones", "Soluciones"], ["#webinars", "Webinars"], [PRODUCT_PATH + "#precios", "Precios"], ["#contacto", "Contacto"]]}
        cta={{ href: "#contacto", label: "Contactar" }}
      />

      <main id="top">
        {/* HERO */}
        <section style={s("padding:88px 20px 72px;overflow:hidden")}>
          <div style={s(wrap)}>
            <div style={s("max-width:860px")}>
              <Eyebrow>Tecnología y soluciones digitales</Eyebrow>
              <h1 style={s("font-size:clamp(38px,6vw,68px);line-height:1.04;letter-spacing:-0.035em;font-weight:800;margin:0 0 24px;text-wrap:balance")}>{TAGLINE}</h1>
              <p style={s("font-size:19px;line-height:1.6;color:oklch(0.4 0.02 260);margin:0 0 32px;max-width:680px;text-wrap:pretty")}>{BRAND_DESC} Empezamos por los webinars y las transmisiones en vivo.</p>
              <div style={s("display:flex;gap:12px;flex-wrap:wrap")}>
                <a className="btn-primary" href="#soluciones" style={s(btnPrimary)}>Explorar soluciones</a>
                <a className="btn-ghost" href={PRODUCT_PATH} style={s(btnGhost)}>Conocer la plataforma de webinars</a>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUCIONES */}
        <section id="soluciones" style={s(`padding:96px 20px;${secBorder};border-bottom:1px solid oklch(0.92 0.006 260)`)} aria-labelledby="h-sol">
          <div style={s(wrap)}>
            <Eyebrow>Soluciones</Eyebrow>
            <H2 id="h-sol" max="760px">Un portafolio pensado para crecer.</H2>
            <Lead max="640px">Construimos productos propios y soluciones a medida. Hoy puedes contratar nuestra plataforma de webinars; las demás líneas están en preparación.</Lead>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:16px")}>
              <article style={s("background:oklch(0.2 0.02 260);color:#fff;border-radius:18px;padding:28px;display:flex;flex-direction:column")}>
                <div style={s("display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:18px")}>
                  <span style={s(`${MONO}font-size:12px;color:oklch(0.8 0.08 265)`)}>{first.category.toUpperCase()}</span><span style={s(live)}>Disponible</span>
                </div>
                <h3 style={s("margin:0 0 10px;font-size:22px;letter-spacing:-0.02em")}>{first.name}</h3>
                <p style={s("margin:0 0 24px;font-size:15px;line-height:1.6;color:oklch(0.82 0.01 260)")}>{first.desc}</p>
                <a className="btn-light" href={first.href} style={s("margin-top:auto;align-self:flex-start;background:oklch(0.62 0.17 265);color:#fff;padding:12px 20px;border-radius:10px;font-weight:700;font-size:14px")}>Ver la plataforma →</a>
              </article>
              {future.map((x) => (
                <article key={x.id} style={s("background:#fff;border:1px dashed oklch(0.82 0.01 260);border-radius:18px;padding:28px")}>
                  <div style={s("display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:18px")}>
                    <span style={s(`${MONO}font-size:12px;color:oklch(0.45 0.02 260)`)}>{x.category.toUpperCase()}</span><span style={s(soon)}>Línea futura</span>
                  </div>
                  <h3 style={s("margin:0 0 10px;font-size:22px;letter-spacing:-0.02em")}>{x.name}</h3>
                  <p style={s("margin:0;font-size:15px;line-height:1.6;color:oklch(0.4 0.02 260)")}>{x.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PRIMERA SOLUCION: WEBINARS */}
        <section id="webinars" style={s("padding:96px 20px;overflow:hidden")} aria-labelledby="h-web">
          <div style={s(wrap)}>
            <Eyebrow>Primera solución · {PRODUCT}</Eyebrow>
            <H2 id="h-web" max="820px">Webinars, eventos virtuales y transmisiones en vivo, de principio a fin.</H2>
            <Lead max="680px">Landing de registro, invitaciones por email y WhatsApp, estudio en el navegador, grabación y analytics con UTM en una sola plataforma, con opción de producción profesional para eventos a medida.</Lead>
            <div style={s("display:flex;flex-wrap:wrap;gap:10px;margin-bottom:32px")}>
              {D.TRUST.map((c) => <span key={c} style={s("background:#fff;border:1px solid oklch(0.9 0.008 260);border-radius:99px;padding:9px 16px;font-size:13px;font-weight:600")}>{c}</span>)}
            </div>
            <div style={s("display:flex;gap:12px;flex-wrap:wrap")}>
              <a className="btn-primary" href={PRODUCT_PATH} style={s(btnPrimary)}>Conocer {PRODUCT}</a>
              <a className="btn-ghost" href={`${PRODUCT_PATH}#precios`} style={s(btnGhost)}>Ver precios</a>
            </div>
            <WebinarDashboard />
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contacto" style={s("padding:96px 20px")}>
          <div style={s(`${wrap};background:oklch(0.2 0.02 260);color:#fff;border-radius:28px;padding:clamp(36px,7vw,88px) clamp(24px,6vw,72px);text-align:center`)}>
            <h2 style={s("font-size:clamp(32px,5vw,56px);letter-spacing:-0.035em;line-height:1.08;margin:0 0 18px;text-wrap:balance")}>¿Tienes una idea o un evento en mente?</h2>
            <p style={s("font-size:19px;line-height:1.6;color:oklch(0.82 0.01 260);margin:0 auto 32px;max-width:560px")}>Cuéntanos qué necesitas y te respondemos con una propuesta.</p>
            <div style={s("display:flex;gap:12px;justify-content:center;flex-wrap:wrap")}>
              <a className="btn-light" href={mailto(CONTACT.general, "Solicitud de propuesta")} style={s("background:oklch(0.62 0.17 265);color:#fff;padding:16px 28px;border-radius:12px;font-weight:700")}>Solicitar una propuesta</a>
              <a className="btn-line" href={mailto(CONTACT.demo, `Quiero agendar una demo de ${PRODUCT}`)} style={s("border:1px solid oklch(0.45 0.02 260);color:#fff;padding:16px 28px;border-radius:12px;font-weight:700")}>Agendar demo de webinars</a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <MobileCta href="#contacto" label={`Contactar con ${BRAND}`} />
    </>
  );
}
