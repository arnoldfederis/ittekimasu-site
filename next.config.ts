import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["ittekimasu.dev", "*.ittekimasu.dev"],
  reactCompiler: true,
  images: {
    qualities: [85],
    formats: ["image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "**.ittekimasu.app" }],
  },
};

export default nextConfig;
