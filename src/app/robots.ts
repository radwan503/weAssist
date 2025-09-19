import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://radwan503.github.io/";
  return {
    rules: { userAgent: "*", allow: "*" },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
