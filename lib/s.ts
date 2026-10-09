import type { CSSProperties } from "react";

/** Convierte una cadena CSS en un objeto de estilo de React. */
export const s = (css: string): CSSProperties => {
  const o: Record<string, string> = {};
  css.split(/;(?![^(]*\))/).forEach((d) => {
    const i = d.indexOf(":");
    if (i < 0) return;
    const k = d.slice(0, i).trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    const v = d.slice(i + 1).trim();
    if (k) o[k] = v;
  });
  return o as CSSProperties;
};
