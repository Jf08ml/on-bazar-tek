"use client";
import { useState } from "react";
import { PLANS } from "@/lib/data";
import { s } from "@/lib/s";

const seg = (on: boolean) =>
  s(`border:0;cursor:pointer;font-family:inherit;font-weight:700;font-size:14px;padding:10px 18px;border-radius:9px;${on ? "background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);color:oklch(0.2 0.02 260)" : "background:transparent;color:oklch(0.4 0.02 260)"}`);

export default function Pricing() {
  const [mode, setMode] = useState<"evento" | "mensual">("evento");
  return (
    <>
      <div role="tablist" style={s("display:inline-flex;background:oklch(0.95 0.005 260);border-radius:12px;padding:4px;gap:4px;margin-bottom:32px")}>
        <button role="tab" aria-selected={mode === "evento"} onClick={() => setMode("evento")} style={seg(mode === "evento")}>Por evento</button>
        <button role="tab" aria-selected={mode === "mensual"} onClick={() => setMode("mensual")} style={seg(mode === "mensual")}>Suscripción mensual</button>
      </div>
      <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:16px;align-items:stretch")}>
        {PLANS[mode].map((p) => (
          <div key={p.name} style={s(`border-radius:18px;padding:26px;display:flex;flex-direction:column;${p.hl ? "background:oklch(0.2 0.02 260);color:#fff;border:1px solid oklch(0.2 0.02 260)" : "background:#fff;border:1px solid oklch(0.9 0.008 260)"}`)}>
            <div style={s("display:flex;justify-content:space-between;align-items:center;gap:8px")}>
              <h3 style={s("margin:0;font-size:18px")}>{p.name}</h3>
              {p.hl && <span style={s("font-size:11px;font-weight:700;padding:4px 10px;border-radius:99px;background:oklch(0.62 0.17 265);color:#fff")}>Recomendado</span>}
            </div>
            <div style={s("margin:16px 0 4px;font-size:34px;font-weight:800;letter-spacing:-0.03em")}>{p.price}</div>
            <div style={s("font-size:13px;opacity:.75;margin-bottom:18px")}>{p.unit}</div>
            <ul style={s("list-style:none;padding:0;margin:0 0 22px;display:flex;flex-direction:column;gap:9px;font-size:14px;line-height:1.4;flex:1")}>
              {p.features.map((f) => (
                <li key={f} style={s("display:flex;gap:8px")}><span style={{ opacity: 0.7 }}>✓</span>{f}</li>
              ))}
            </ul>
            <a href="#demo" style={s(`text-align:center;padding:13px;border-radius:10px;font-weight:700;font-size:14px;${p.hl ? "background:oklch(0.62 0.17 265);color:#fff" : "background:oklch(0.95 0.005 260);color:oklch(0.2 0.02 260)"}`)}>{p.cta}</a>
          </div>
        ))}
      </div>
    </>
  );
}
