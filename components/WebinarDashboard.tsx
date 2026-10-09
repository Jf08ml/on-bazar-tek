import { s } from "@/lib/s";
import * as D from "@/lib/data";
import { MONO } from "@/components/ui";

/** Vista ilustrativa del panel de OnBazarTek Webinars (datos de demostración). */
export default function WebinarDashboard() {
  return (
    <div style={s("position:relative;margin-top:56px")}>
      <div style={s("background:#fff;border:1px solid oklch(0.9 0.008 260);border-radius:18px;box-shadow:0 30px 80px -30px oklch(0.3 0.05 265 / 0.35);overflow:hidden")}>
        <div style={s("display:flex;align-items:center;gap:7px;padding:12px 16px;border-bottom:1px solid oklch(0.93 0.006 260);background:oklch(0.975 0.004 260)")}>
          {[0, 1, 2].map((i) => <span key={i} style={s("width:10px;height:10px;border-radius:50%;background:oklch(0.85 0.01 260)")} />)}
          <span className="desk" style={s(`margin-left:12px;${MONO}font-size:11px;color:oklch(0.5 0.02 260)`)}>app.onbazartek.com/webinars/eventos</span>
          <span style={s(`margin-left:auto;${MONO}font-size:10px;color:oklch(0.45 0.02 260);border:1px solid oklch(0.88 0.01 260);padding:2px 8px;border-radius:99px`)}>DATOS DE DEMOSTRACIÓN</span>
        </div>
        <div style={s("display:flex")}>
          <div className="desk" style={s("width:190px;border-right:1px solid oklch(0.93 0.006 260);padding:18px 14px;display:flex;flex-direction:column;gap:4px;font-size:13px;font-weight:600")}>
            {["Eventos", "Registrados", "Campañas", "Estudio", "Grabaciones", "Analytics"].map((t, i) => (
              <span key={t} style={s(i === 0 ? "background:oklch(0.96 0.025 265);color:oklch(0.42 0.17 265);padding:9px 12px;border-radius:8px" : "padding:9px 12px;color:oklch(0.45 0.02 260)")}>{t}</span>
            ))}
          </div>
          <div style={s("flex:1;padding:22px;min-width:0")}>
            <div style={s("display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:18px")}>
              <div><div style={s(`font-size:12px;color:oklch(0.5 0.02 260);${MONO}`)}>PRÓXIMO EVENTO</div><div style={s("font-size:20px;font-weight:800;letter-spacing:-0.02em")}>Webinar: Estrategia de ventas B2B 2027</div></div>
              <span style={s("background:oklch(0.96 0.03 160);color:oklch(0.38 0.14 160);font-size:12px;font-weight:700;padding:6px 12px;border-radius:99px")}>Registro abierto</span>
            </div>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:12px;margin-bottom:18px")}>
              {D.HERO_KPIS.map((k) => (
                <div key={k.l} style={s("border:1px solid oklch(0.93 0.006 260);border-radius:12px;padding:14px")}>
                  <div style={s(`font-size:11px;color:oklch(0.5 0.02 260);${MONO}`)}>{k.l}</div>
                  <div style={s("font-size:26px;font-weight:800;letter-spacing:-0.02em")}>{k.v}</div>
                </div>
              ))}
            </div>
            <div style={s("border:1px solid oklch(0.93 0.006 260);border-radius:12px;padding:16px")}>
              <div style={s("font-size:12px;font-weight:700;margin-bottom:12px")}>Registros por día</div>
              <div style={s("display:flex;align-items:flex-end;gap:6px;height:90px")}>
                {D.BARS.map((b, i) => <div key={i} style={{ flex: 1, borderRadius: "4px 4px 0 0", background: "oklch(0.52 0.17 265)", opacity: 0.85, height: `${b}%` }} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="desk" style={s("position:absolute;right:-8px;bottom:-24px;background:oklch(0.2 0.02 260);color:#fff;border-radius:14px;padding:14px 18px;box-shadow:0 20px 40px -15px rgba(0,0,0,.4);animation:floaty 6s ease-in-out infinite;width:230px")}>
        <div style={s(`display:flex;align-items:center;gap:8px;font-size:11px;${MONO}`)}><span style={s("width:8px;height:8px;border-radius:50%;background:oklch(0.65 0.2 25);animation:pulse 1.6s infinite")} />EN VIVO · 248 conectados</div>
        <div style={s("font-size:13px;margin-top:6px;font-weight:600")}>Pregunta nueva en Q&amp;A</div>
      </div>
    </div>
  );
}
