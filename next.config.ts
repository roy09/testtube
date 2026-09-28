import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static export: `npm run build` emits plain HTML/CSS/JS to /out.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
