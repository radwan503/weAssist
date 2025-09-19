import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.yourdomain.com";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${base}/maintenance`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/support`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/incident`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    // add blog posts, etc.
  ];
}
