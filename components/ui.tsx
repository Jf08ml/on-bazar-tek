import { s } from "@/lib/s";

/** Primitivas visuales compartidas por todas las páginas. */
export const MONO = "font-family:var(--font-mono),monospace;";
export const wrap = "max-width:1160px;margin:0 auto";
export const secBorder = "background:#fff;border-top:1px solid oklch(0.92 0.006 260)";
export const live = "font-size:11px;font-weight:700;padding:4px 10px;border-radius:99px;white-space:nowrap;background:oklch(0.96 0.03 160);color:oklch(0.38 0.14 160)";
export const soon = "font-size:11px;font-weight:700;padding:4px 10px;border-radius:99px;white-space:nowrap;background:oklch(0.95 0.005 260);color:oklch(0.4 0.02 260)";
export const btnPrimary = "background:oklch(0.52 0.17 265);color:#fff;padding:16px 26px;border-radius:12px;font-weight:700;font-size:16px";
export const btnGhost = "background:#fff;border:1px solid oklch(0.86 0.01 260);color:oklch(0.2 0.02 260);padding:16px 26px;border-radius:12px;font-weight:700;font-size:16px";

export const Eyebrow = ({ children, dark }: { children: React.ReactNode; dark?: boolean }) => (
  <p style={s(`${MONO}font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:${dark ? "oklch(0.8 0.08 265)" : "oklch(0.52 0.17 265)"};margin:0 0 14px`)}>{children}</p>
);
export const H2 = ({ id, children, max = "", mb = 14 }: { id: string; children: React.ReactNode; max?: string; mb?: number }) => (
  <h2 id={id} style={s(`font-size:clamp(30px,4.2vw,48px);letter-spacing:-0.03em;line-height:1.1;margin:0 0 ${mb}px;text-wrap:balance;${max ? `max-width:${max}` : ""}`)}>{children}</h2>
);
export const Lead = ({ children, c = "oklch(0.4 0.02 260)", mb = 40, max = "680px" }: { children: React.ReactNode; c?: string; mb?: number; max?: string }) => (
  <p style={s(`font-size:18px;color:${c};margin:0 0 ${mb}px;max-width:${max};line-height:1.6`)}>{children}</p>
);

/** Barra CTA fija en móvil. */
export const MobileCta = ({ href, label }: { href: string; label: string }) => (
  <div className="mob" style={s("position:fixed;left:0;right:0;bottom:0;z-index:60;padding:10px 16px;background:oklch(0.985 0.003 260 / .96);border-top:1px solid oklch(0.9 0.008 260)")}>
    <a href={href} style={s("display:block;text-align:center;background:oklch(0.52 0.17 265);color:#fff;padding:15px;border-radius:12px;font-weight:800")}>{label}</a>
  </div>
);
