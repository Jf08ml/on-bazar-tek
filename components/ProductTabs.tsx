"use client";
import { useState } from "react";
import { s } from "@/lib/s";

const pill = (bg: string, c: string) => s(`font-size:11px;font-weight:700;padding:4px 10px;border-radius:99px;background:${bg};color:${c};white-space:nowrap`);
const live = pill("oklch(0.96 0.03 160)", "oklch(0.38 0.14 160)");
const soon = pill("oklch(0.95 0.005 260)", "oklch(0.4 0.02 260)");
const TABS = [
  ["dash", "Dashboard", "Todos tus eventos, estados y registros a la vista.", "app.onbazartek.com/webinars/eventos"],
  ["create", "Creación del evento", "Configura fecha, ponentes y landing en minutos.", "app.onbazartek.com/webinars/eventos/nuevo"],
  ["form", "Formulario", "Pide solo los datos que necesitas y captura UTM automáticamente.", "app.onbazartek.com/webinars/eventos/formulario"],
  ["stats", "Analytics", "Asistencia, retención y fuentes en un tablero.", "app.onbazartek.com/webinars/analytics"],
] as const;
const EVENTS = [
  { n: "Estrategia de ventas B2B 2027", d: "12 nov · 6:00 pm · 1.248 registros", t: "Registro abierto", ok: true },
  { n: "Onboarding para nuevos clientes", d: "19 nov · 10:00 am · 214 registros", t: "Programado", ok: false },
  { n: "Lanzamiento de producto Q4", d: "28 oct · 3:00 pm · 640 asistentes", t: "Finalizado", ok: false },
  { n: "Taller de capacitación interna", d: "14 oct · 9:00 am · 96 asistentes", t: "Grabado", ok: true },
];
const FIELDS = [["Nombre completo", "texto · obligatorio"], ["Correo electrónico", "email · obligatorio"], ["WhatsApp", "teléfono"], ["Empresa", "texto"], ["Cargo", "lista"]];
const RET = [100, 92, 85, 80, 74, 70, 66, 61, 58, 52, 47, 42];
const inp = "margin-top:6px;border:1px solid oklch(0.86 0.01 260);border-radius:8px;padding:10px 12px;font-weight:500";

export default function ProductTabs() {
  const [m, setM] = useState<string>("dash");
  const cur = TABS.find((t) => t[0] === m)!;
  return (
    <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:32px;align-items:start")}>
      <div style={s("display:flex;flex-direction:column;gap:8px")}>
        {TABS.map(([k, title, desc]) => (
          <button key={k} onClick={() => setM(k)} aria-pressed={m === k}
            style={s(`text-align:left;cursor:pointer;border-radius:12px;padding:14px 16px;font-family:inherit;color:oklch(0.2 0.02 260);${m === k ? "border:1px solid oklch(0.52 0.17 265);background:oklch(0.96 0.025 265)" : "border:1px solid oklch(0.92 0.006 260);background:#fff"}`)}>
            <span style={s("font-weight:800;font-size:16px;display:block")}>{title}</span>
            <span style={s("font-size:14px;line-height:1.5;display:block;margin-top:4px;opacity:.85")}>{desc}</span>
          </button>
        ))}
        <p style={s("font-size:14px;line-height:1.6;color:oklch(0.45 0.02 260);margin:10px 4px 0")}>
          Además: <a href="#landing">landing y registro</a>, <a href="#estudio">estudio virtual</a> y <a href="#asistente">experiencia en vivo</a>, más abajo.
        </p>
      </div>
      <div style={s("background:oklch(0.975 0.004 260);border:1px solid oklch(0.9 0.008 260);border-radius:16px;overflow:hidden;min-width:0")}>
        <div style={s("display:flex;justify-content:space-between;align-items:center;padding:10px 16px;border-bottom:1px solid oklch(0.93 0.006 260);background:#fff")}>
          <span style={s("font-family:var(--font-mono),monospace;font-size:11px;color:oklch(0.5 0.02 260)")}>{cur[3]}</span>
          <span style={s("font-family:var(--font-mono),monospace;font-size:10px;color:oklch(0.45 0.02 260)")}>DATOS DE DEMOSTRACIÓN</span>
        </div>
        <div style={s("padding:22px;min-height:380px")}>
          {m === "dash" && (
            <div style={s("display:flex;flex-direction:column;gap:10px")}>
              {EVENTS.map((e) => (
                <div key={e.n} style={s("background:#fff;border:1px solid oklch(0.92 0.006 260);border-radius:12px;padding:14px 16px;display:flex;justify-content:space-between;align-items:center;gap:10px")}>
                  <div><div style={s("font-weight:700;font-size:14px")}>{e.n}</div><div style={s("font-size:12px;color:oklch(0.5 0.02 260);margin-top:2px")}>{e.d}</div></div>
                  <span style={e.ok ? live : soon}>{e.t}</span>
                </div>
              ))}
            </div>
          )}
          {m === "create" && (
            <div style={s("background:#fff;border:1px solid oklch(0.92 0.006 260);border-radius:12px;padding:20px;display:flex;flex-direction:column;gap:14px")}>
              <div style={s("display:flex;gap:8px;font-size:12px;font-weight:700")}>
                <span style={s("background:oklch(0.52 0.17 265);color:#fff;padding:5px 12px;border-radius:99px")}>1 Datos</span>
                <span style={s("background:oklch(0.95 0.005 260);padding:5px 12px;border-radius:99px;color:oklch(0.45 0.02 260)")}>2 Landing</span>
                <span style={s("background:oklch(0.95 0.005 260);padding:5px 12px;border-radius:99px;color:oklch(0.45 0.02 260)")}>3 Promoción</span>
              </div>
              <div style={s("font-size:12px;font-weight:700")}>Nombre del evento<div style={s(inp)}>Webinar: Estrategia de ventas B2B 2027</div></div>
              <div style={s("display:grid;grid-template-columns:1fr 1fr;gap:12px")}>
                <div style={s("font-size:12px;font-weight:700")}>Fecha<div style={s(inp)}>12 nov · 6:00 pm</div></div>
                <div style={s("font-size:12px;font-weight:700")}>Zona horaria<div style={s(inp)}>Bogotá (GMT-5)</div></div>
              </div>
              <div style={s("font-size:12px;font-weight:700")}>Ponentes
                <div style={s("margin-top:6px;display:flex;gap:8px;flex-wrap:wrap")}>
                  <span style={s("background:oklch(0.96 0.025 265);padding:6px 12px;border-radius:99px;font-weight:600;font-size:13px")}>Ponente A</span>
                  <span style={s("background:oklch(0.96 0.025 265);padding:6px 12px;border-radius:99px;font-weight:600;font-size:13px")}>Ponente B</span>
                  <span style={s("border:1px dashed oklch(0.8 0.01 260);padding:6px 12px;border-radius:99px;font-size:13px;color:oklch(0.5 0.02 260)")}>+ Invitar</span>
                </div>
              </div>
              <div style={s("align-self:flex-end;background:oklch(0.2 0.02 260);color:#fff;padding:10px 18px;border-radius:9px;font-weight:700;font-size:13px")}>Continuar</div>
            </div>
          )}
          {m === "form" && (
            <div style={s("background:#fff;border:1px solid oklch(0.92 0.006 260);border-radius:12px;padding:20px")}>
              <div style={s("font-weight:800;margin-bottom:14px")}>Campos del formulario</div>
              <div style={s("display:flex;flex-direction:column;gap:8px")}>
                {FIELDS.map(([n, t]) => (
                  <div key={n} style={s("display:flex;justify-content:space-between;align-items:center;border:1px solid oklch(0.92 0.006 260);border-radius:9px;padding:10px 12px;font-size:14px")}>
                    <span style={{ fontWeight: 600 }}>{n}</span><span style={s("font-size:11px;font-family:var(--font-mono),monospace;color:oklch(0.5 0.02 260)")}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={s("margin-top:14px;font-size:12px;color:oklch(0.45 0.02 260)")}>Los campos ocultos guardan automáticamente utm_source, utm_medium y utm_campaign.</div>
            </div>
          )}
          {m === "stats" && (
            <>
              <div style={s("display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:12px")}>
                {[["REGISTROS", "1.248"], ["ASISTENTES", "812"], ["PERMANENCIA", "38 min"]].map(([l, v]) => (
                  <div key={l} style={s("background:#fff;border:1px solid oklch(0.92 0.006 260);border-radius:10px;padding:12px")}>
                    <div style={s("font-size:10px;font-family:var(--font-mono),monospace;color:oklch(0.5 0.02 260)")}>{l}</div>
                    <div style={s("font-size:22px;font-weight:800")}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={s("background:#fff;border:1px solid oklch(0.92 0.006 260);border-radius:10px;padding:14px")}>
                <div style={s("font-size:12px;font-weight:700;margin-bottom:10px")}>Retención durante el evento</div>
                <div style={s("display:flex;align-items:flex-end;gap:5px;height:120px")}>
                  {RET.map((h, i) => <div key={i} style={{ flex: 1, background: "oklch(0.52 0.17 160)", borderRadius: "3px 3px 0 0", height: `${h}%` }} />)}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
