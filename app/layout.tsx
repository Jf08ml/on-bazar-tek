import type { Metadata, Viewport } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE, BRAND, BRAND_DESC } from "@/lib/site";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: `${BRAND} | Tecnología y soluciones digitales`, template: `%s | ${BRAND}` },
  description: BRAND_DESC,
  applicationName: BRAND,
  openGraph: { siteName: BRAND, locale: "es_CO", type: "website" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CO" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
