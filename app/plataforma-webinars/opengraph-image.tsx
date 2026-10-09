import { ogImage, ogSize } from "@/lib/og";
import { PRODUCT } from "@/lib/site";

export const alt = `${PRODUCT}: plataforma de webinars con marketing y analytics`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ eyebrow: PRODUCT, title: "Crea, transmite y mide tus webinars desde una sola plataforma", subtitle: "Landing, registro, email, WhatsApp, estudio virtual, grabación y analytics." });
}
