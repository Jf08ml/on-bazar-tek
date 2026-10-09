export const FAQ: { q: string; a: string }[] = [
  ["¿Qué es una plataforma de webinars?", "Es un software para crear, promocionar, transmitir y medir eventos en vivo o grabados. OnBazarTek Webinars reúne en un solo lugar la landing de registro, el envío de invitaciones, el estudio de transmisión, la grabación y los analytics."],
  ["¿Cómo crear un webinar?", "Crea el evento con fecha y ponentes, personaliza su landing y formulario, invita a tu audiencia por email o WhatsApp, transmite desde el estudio en el navegador y revisa los resultados al terminar."],
  ["¿Puedo crear una landing para mi webinar?", "Sí. Cada evento tiene su propia página de registro con tu logo, colores, imagen, descripción, ponentes, agenda y formulario."],
  ["¿Puedo registrar asistentes?", "Sí. El formulario es personalizable y cada registro guarda los datos del asistente y su fuente de tráfico."],
  ["¿Puedo enviar invitaciones por WhatsApp?", "Sí, puedes invitar y confirmar registros por WhatsApp. Avisos de inicio, seguimiento y envío de grabación por este canal están marcados como Próximamente."],
  ["¿Puedo enviar emails?", "Sí. Puedes enviar invitaciones, confirmaciones y recordatorios por email desde la misma plataforma. Aviso de inicio, seguimiento y envío de grabación están en camino."],
  ["¿Puedo hacer encuestas durante el webinar?", "Sí. Lanza encuestas en vivo y ve los resultados en tiempo real. También puedes usar chat y preguntas y respuestas."],
  ["¿El webinar queda grabado?", "Sí. Tu evento se graba y queda disponible para tu equipo al terminar la transmisión."],
  ["¿Puedo crear una página de repetición?", "La página pública de repetición (webinar bajo demanda) está en camino: Próximamente. Hoy puedes disponer de la grabación."],
  ["¿Puedo saber de dónde vienen mis asistentes?", "Sí. OnBazarTek Webinars registra la fuente de cada inscripción y te muestra cuántos registros y asistentes aportó cada canal: WhatsApp, email, redes, Google o tráfico directo."],
  ["¿Qué son las UTMs?", "Son parámetros que se añaden a un enlace (utm_source, utm_medium, utm_campaign) para identificar de qué campaña llegó una visita. OnBazarTek Webinars los guarda en cada registro."],
  ["¿Necesito instalar software?", "No. Tanto quien transmite como quien asiste usan el navegador."],
  ["¿Cuántas personas pueden asistir?", "Depende del plan. Los planes de esta página indican la capacidad de cada uno; si necesitas más, habla con ventas para una producción a medida."],
  ["¿Puedo utilizar mi propia marca?", "Sí. Puedes personalizar logo, colores e imagen de tu landing y del evento."],
  ["¿Puedo utilizar mi dominio?", "Sí. Puedes publicar tus landings de evento en tu propio dominio."],
].map(([q, a]) => ({ q, a }));

export type Plan = { name: string; price: string; unit: string; features: string[]; hl: boolean; cta: string };

export const PLANS: { evento: Plan[]; mensual: Plan[] } = {
  evento: [
    { name: "Evento Básico", price: "$199.000", unit: "por evento", hl: false, cta: "Agendar demo", features: ["Hasta 100 asistentes", "Hasta 2 horas", "Landing y formulario", "Chat y preguntas", "Grabación", "Analytics básico"] },
    { name: "Evento Profesional", price: "$399.000", unit: "por evento", hl: true, cta: "Agendar demo", features: ["Hasta 300 asistentes", "Hasta 3 horas", "Encuestas en vivo", "Tu logo y colores", "UTM y fuentes de registro", "Email: invitación y confirmación"] },
    { name: "Evento Marketing", price: "$699.000", unit: "por evento", hl: false, cta: "Agendar demo", features: ["Hasta 500 asistentes", "Hasta 4 horas", "Campañas por WhatsApp y email", "Dominio propio", "Analytics completo", "Soporte prioritario"] },
    { name: "Producción completa", price: "Desde $1.490.000", unit: "por evento · a medida", hl: false, cta: "Hablar con ventas", features: ["Más de 500 asistentes", "Ensayo técnico", "Moderación y soporte en vivo", "Producción y diseño", "Todo lo del plan Marketing"] },
  ],
  mensual: [
    { name: "Starter", price: "$149.000", unit: "por mes", hl: false, cta: "Agendar demo", features: ["Hasta 100 asistentes", "2 eventos al mes", "Landing y formulario", "Chat, preguntas y grabación", "Analytics básico"] },
    { name: "Pro", price: "$349.000", unit: "por mes", hl: true, cta: "Agendar demo", features: ["Hasta 300 asistentes", "6 eventos al mes", "Encuestas en vivo", "Tu logo y colores", "UTM y fuentes de registro", "Email"] },
    { name: "Marketing", price: "$649.000", unit: "por mes", hl: false, cta: "Agendar demo", features: ["Hasta 500 asistentes", "15 eventos al mes", "WhatsApp y email", "Dominio propio", "Analytics completo", "Soporte prioritario"] },
    { name: "Enterprise", price: "A cotizar", unit: "según volumen", hl: false, cta: "Hablar con ventas", features: ["Eventos y asistentes a medida", "Soporte dedicado", "Producción en vivo", "Todo lo del plan Marketing"] },
  ],
};

const flow = (a: string[]) => a.map((t, i) => ({ t, a: i < a.length - 1 ? "↓" : "" }));
export const OLD_FLOW = flow(["Landing", "Formulario", "Zoom / Meet", "Email marketing", "WhatsApp", "Grabación", "Analytics"]);
export const NEW_FLOW = flow(["Landing", "Registro", "Marketing", "Webinar", "Grabación", "Analytics", "Seguimiento"]);
export const HERO_KPIS = [{ l: "REGISTROS", v: "1.248" }, { l: "ASISTENTES", v: "812" }, { l: "ASISTENCIA", v: "65%" }, { l: "INTERACCIONES", v: "3.4k" }];
export const BARS = [30, 42, 38, 55, 48, 62, 58, 72, 66, 80, 74, 90, 84, 96];
export const TRUST = ["Landing por evento", "Formularios", "Estudio en navegador", "Chat y Q&A", "Encuestas", "Email y WhatsApp", "Grabación", "Analytics con UTM"];
export const STEPS = [
  { t: "Crea tu evento", d: "Define nombre, fecha y ponentes." },
  { t: "Personaliza tu landing", d: "Marca, agenda y formulario." },
  { t: "Promociona y registra", d: "Invita por email y WhatsApp con UTM." },
  { t: "Transmite en vivo", d: "Desde tu estudio en el navegador." },
  { t: "Analiza y haz seguimiento", d: "Resultados, fuentes y asistentes." },
];
export const LANDING_FEATURES = ["Tu marca y logo", "Colores propios", "Imagen del evento", "Descripción", "Ponentes", "Agenda", "Formulario a medida", "Botón de registro", "Tracking UTM", "Dominio propio"];
export const EMAIL_SEQ: [string, boolean][] = [["Invitación", true], ["Confirmación", true], ["Recordatorio", true], ["Aviso de inicio", false], ["Seguimiento", false], ["Grabación", false]];
export const WA_SEQ: [string, boolean][] = [["Invitación", true], ["Confirmación", true], ["Recordatorio", true], ["Evento en vivo", false], ["Grabación", false], ["Seguimiento", false]];
export const SPEAKERS = ["Presentador", "Ponente A", "Ponente B"];
export const STUDIO_TOOLS = ["Compartir pantalla", "Presentación", "Invitar ponente", "Lanzar encuesta", "Moderar chat", "CTA · Próximamente"];
export const CHAT = [{ u: "Ana", m: "Excelente presentación" }, { u: "Luis", m: "¿Compartirán las diapositivas?" }, { u: "Marta", m: "Muy claro el funnel" }, { u: "Pablo", m: "¿Hay grabación?" }];
export const POLL = [{ n: "WhatsApp", p: 48 }, { n: "Email", p: 34 }, { n: "Redes sociales", p: 18 }];
export const QUESTIONS = [{ v: 12, t: "¿Cómo mido la asistencia por canal?" }, { v: 8, t: "¿Puedo usar mi dominio?" }, { v: 5, t: "¿Queda la grabación disponible?" }];
export const KPIS = [["REGISTROS", "1.248"], ["ASISTENTES", "812"], ["TASA ASISTENCIA", "65%"], ["TIEMPO PROM.", "38 min"], ["RETENCIÓN", "54%"], ["INTERACCIONES", "3.4k"], ["PREGUNTAS", "96"], ["ENCUESTAS", "412"], ["CTA CLICS", "Próx."]].map(([l, v]) => ({ l, v }));
export const SOURCES = [["WhatsApp", 38], ["Email", 27], ["Instagram", 12], ["LinkedIn", 9], ["Google", 6], ["Facebook", 4], ["UTM otros", 2], ["Directo", 2]].map(([n, p]) => ({ n: n as string, p: p as number }));
export const FUNNEL = [["Visitantes", "6.900", 100], ["Registros", "1.248", 80], ["Asistentes", "812", 62], ["Interacciones", "396", 44], ["Conversiones", "74", 28]].map(([n, v, w]) => ({ n: n as string, v: v as string, w: w as number }));
export const ATTRIBUTION = [{ n: "Instagram", r: 320, a: 180 }, { n: "Email", r: 420, a: 290 }, { n: "WhatsApp", r: 510, a: 390 }];
export const REC_FLOW: [string, string, boolean][] = [["Live", "Disponible", true], ["Grabación", "Disponible", true], ["Repetición", "Próximamente", false], ["Nuevas visualizaciones", "Próximamente", false], ["Nuevos leads", "Próximamente", false]];
export const LEAD_STEPS = ["Registrado", "Asistió", "Permaneció 45 min", "Respondió encuesta", "Hizo clic en CTA", "Lead calificado"];
export const USE_CASES = [["Empresas", "Presenta resultados, producto o novedades a clientes y equipos."], ["Marketing", "Genera leads y mide qué canal trae asistentes reales."], ["Educación", "Clases abiertas, cursos y charlas con registro de asistencia."], ["Capacitación", "Formación interna con grabación para quien no pudo asistir."], ["Agencias", "Organiza eventos para varios clientes con marca propia."], ["Consultores", "Workshops y masterclasses con tu propia landing."], ["Lanzamientos", "Presenta un producto con registro, recordatorios y seguimiento."], ["Conferencias", "Ponentes invitados, preguntas moderadas y reportes."], ["Workshops", "Sesiones interactivas con encuestas y chat."], ["Eventos corporativos", "Asambleas e informes con control de acceso por registro."]].map(([t, d]) => ({ t, d }));
export const COMPARE = [["Landing", "Herramienta externa", "Incluida"], ["Registro", "Herramienta externa", "Incluido"], ["Webinar", "Zoom / Meet", "Incluido"], ["Email", "Otra plataforma", "Integrado"], ["WhatsApp", "Manual u otra herramienta", "Integrado"], ["Grabación", "Servicio externo", "Incluida"], ["Analytics", "Varias herramientas", "Centralizado"], ["UTM", "Por separado", "Integrado"], ["Seguimiento", "Manual", "Centralizado"]].map(([f, o, n]) => ({ f, o, n }));
