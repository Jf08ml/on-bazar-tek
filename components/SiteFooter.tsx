import Image from "next/image";
import { s } from "@/lib/s";
import { BRAND, LOGO, TAGLINE, SOLUTIONS, PRODUCT_PATH, CONTACT, mailto } from "@/lib/site";
import { wrap } from "@/components/ui";

const col = "display:flex;flex-direction:column;gap:10px;min-width:150px";
const head = "font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:oklch(0.2 0.02 260)";

export default function SiteFooter() {
  return (
    <footer style={s("padding:48px 20px 100px;border-top:1px solid oklch(0.92 0.006 260)")}>
      <div style={s(`${wrap};display:flex;justify-content:space-between;gap:32px;flex-wrap:wrap;font-size:14px;color:oklch(0.4 0.02 260)`)}>
        <div style={s("max-width:300px")}>
          <a href="/" style={s("display:flex;align-items:center;gap:8px;font-weight:800;font-size:17px;color:oklch(0.2 0.02 260)")}><Image src={LOGO} alt="" width={24} height={24} />{BRAND}</a>
          <p style={s("margin:10px 0 0;line-height:1.6")}>{TAGLINE}</p>
        </div>
        <nav aria-label="Soluciones" style={s(col)}>
          <span style={s(head)}>Soluciones</span>
          {SOLUTIONS.map((x) => x.href ? <a key={x.id} href={x.href}>{x.name}</a> : <span key={x.id}>{x.name} · Línea futura</span>)}
        </nav>
        <nav aria-label="Webinars" style={s(col)}>
          <span style={s(head)}>Webinars</span>
          <a href={`${PRODUCT_PATH}#producto`}>Producto</a><a href={`${PRODUCT_PATH}#precios`}>Precios</a><a href={`${PRODUCT_PATH}#faq`}>Preguntas frecuentes</a>
        </nav>
        <nav aria-label="Empresa" style={s(col)}>
          <span style={s(head)}>Empresa</span>
          <a href={mailto(CONTACT.general, "Contacto desde la web")}>Contacto</a><a href="/blog">Blog</a><a href="/privacidad">Privacidad</a>
        </nav>
      </div>
      <p style={s(`${wrap};margin-top:32px;padding-top:20px;border-top:1px solid oklch(0.92 0.006 260);font-size:13px;color:oklch(0.45 0.02 260)`)}>© 2026 {BRAND}. Todos los derechos reservados.</p>
    </footer>
  );
}
