
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, #e6f4ff 0%, #eefdf6 40%, #f3ecff 100%)",
          fontSize: 56,
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ fontSize: 28, opacity: 0.7 }}>weAssist</span>
          <strong>24/7 Website Maintenance & Support</strong>
          <span style={{ fontSize: 28 }}>Security · Uptime · Performance</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
