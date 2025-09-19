import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/index.scss";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Navbar } from "@/components/_common/Header";
import Footer from "@/components/_common/Footer";

const siteName = "weAssist Maintenance & Support";
const siteUrl = "https://www.yourdomain.com";
const siteDescription =
  "Reliable 24/7 website maintenance & technical support: updates, uptime monitoring, security hardening, backups, performance tuning, and rapid incident response.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — 24/7 Website Maintenance & Support`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "website maintenance",
    "website support",
    "24/7 monitoring",
    "WordPress care plans",
    "SLA support",
    "security hardening",
    "site backups",
    "performance optimization",
    "DevOps support",
    "technical support retainer",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${siteName} — 24/7 Website Maintenance & Support`,
    description: siteDescription,
    images: [
      {
        url: "/og/og-cover.png",
        width: 1200,
        height: 630,
        alt: `${siteName} – Maintenance & Support`,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourhandle",
    creator: "@yourhandle",
    title: `${siteName} — 24/7 Website Maintenance & Support`,
    description: siteDescription,
    images: ["/og/og-cover.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#0ea5e9",
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AntdRegistry>
          <Navbar />
          {children}
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}
