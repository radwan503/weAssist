/** @type {import('next').NextConfig} */
const isProd = process.env.NEXT_PUBLIC_MODE === "production";
const repo = "weAssist"; // your repo name

export default {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: { unoptimized: true }, // static export on GH Pages
  trailingSlash: true,           // generates .../index.html per folder
};
