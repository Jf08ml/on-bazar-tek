import type { MetadataRoute } from "next";
import { SITE, SOLUTIONS } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const products = SOLUTIONS.filter((x) => x.available && x.href).map((x) => ({ url: `${SITE}${x.href}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 }));
  return [{ url: SITE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }, ...products];
}
