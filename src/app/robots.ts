import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://www.yourdomain.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin", "/dashboard"],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
