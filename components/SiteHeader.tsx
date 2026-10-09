import Image from "next/image";
import { s } from "@/lib/s";
import { BRAND, LOGO } from "@/lib/site";
import { wrap } from "@/components/ui";

type Props = {
  nav: [href: string, label: string][];
  cta: { href: string; label: string };
  /** Etiqueta del producto junto a la marca (p. ej. "Webinars") y su ruta. */
  product?: { label: string; href: string };
};

export default function SiteHeader({ nav, cta, product }: Props) {
  return (
    <header style={s("position:sticky;top:0;z-index:50;background:oklch(0.985 0.003 260 / 0.92);border-bottom:1px solid oklch(0.92 0.006 260)")}>
      <nav aria-label="Principal" style={s(`${wrap};padding:14px 20px;display:flex;align-items:center;justify-content:space-between;gap:16px`)}>
        <div style={s("display:flex;align-items:center;gap:10px;min-width:0")}>
          <a href="/" aria-label={`${BRAND}, inicio`} style={s("display:flex;align-items:center;gap:10px;font-weight:800;font-size:20px;color:oklch(0.2 0.02 260);letter-spacing:-0.02em")}>
            <Image src={LOGO} alt="" width={32} height={32} priority />{BRAND}
          </a>
          {product && (
            <a className="hide-xs" href={product.href} style={s("font-size:12px;font-weight:700;padding:4px 9px;border-radius:99px;background:oklch(0.95 0.03 265);color:oklch(0.42 0.17 265);white-space:nowrap")}>{product.label}</a>
          )}
        </div>
        <div className="desk" style={s("display:flex;gap:28px;font-size:14px;font-weight:600")}>
          {nav.map(([h, t]) => <a key={h} href={h} style={{ color: "oklch(0.35 0.02 260)" }}>{t}</a>)}
        </div>
        <a className="btn-dark" href={cta.href} style={s("background:oklch(0.2 0.02 260);color:#fff;padding:10px 18px;border-radius:10px;font-size:14px;font-weight:700;white-space:nowrap")}>{cta.label}</a>
      </nav>
    </header>
  );
}
