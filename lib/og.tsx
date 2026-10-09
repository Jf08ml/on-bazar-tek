import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { BRAND, LOGO } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };

/** Imagen de vista previa con el logo y la línea visual del sitio. */
export async function ogImage({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  const logo = `data:image/png;base64,${(await readFile(join(process.cwd(), "public", LOGO))).toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#16181f", color: "#fff", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 38, fontWeight: 800 }}>
          <img src={logo} width={68} height={68} style={{ borderRadius: 16 }} alt="" />{BRAND}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 24, letterSpacing: 2, textTransform: "uppercase", color: "#9fb4ff", marginBottom: 20 }}>{eyebrow}</div>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2, maxWidth: 1000 }}>{title}</div>
          <div style={{ fontSize: 28, color: "#c9ccd6", marginTop: 24, maxWidth: 960 }}>{subtitle}</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
