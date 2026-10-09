"use client";
import { useState } from "react";
import { FAQ } from "@/lib/data";
import { s } from "@/lib/s";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {FAQ.map((x, i) => (
        <div key={x.q} style={s("border-top:1px solid oklch(0.9 0.008 260)")}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
            style={s("all:unset;box-sizing:border-box;width:100%;cursor:pointer;display:flex;justify-content:space-between;gap:16px;padding:20px 0;font-family:inherit")}
          >
            <h3 style={s("margin:0;font-size:17px;font-weight:700")}>{x.q}</h3>
            <span aria-hidden style={s("font-size:22px;line-height:1;color:oklch(0.52 0.17 265)")}>{open === i ? "−" : "+"}</span>
          </button>
          {/* La respuesta siempre está en el DOM (indexable); solo se oculta visualmente */}
          <p hidden={open !== i} style={s("margin:0 0 20px;font-size:15px;line-height:1.7;color:oklch(0.35 0.02 260);max-width:700px")}>{x.a}</p>
        </div>
      ))}
    </div>
  );
}
