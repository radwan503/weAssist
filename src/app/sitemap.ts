import type { MetadataRoute } from "next";

export const dynamic = "force-static"; // required for output: 'export'
export const revalidate = false;       // explicit: no ISR

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://radwan503.github.io/";
  // Use fixed dates or build-time constants for static export.
  const lastModified = new Date("2025-01-01"); // or the date you last updated

  return [
    { url: `${base}/`,            lastModified, changeFrequency: "daily",   priority: 1.0 },
    { url: `${base}/maintenance`, lastModified, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/support`,     lastModified, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/incident`,    lastModified, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/contact`,     lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
