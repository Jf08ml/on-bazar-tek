import { ogImage, ogSize } from "@/lib/og";
import { BRAND, TAGLINE, BRAND_DESC } from "@/lib/site";

export const alt = `${BRAND}: ${TAGLINE}`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ eyebrow: "Tecnología y soluciones digitales", title: TAGLINE, subtitle: BRAND_DESC });
}
