import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "upload.wikimedia.org" },
      { hostname: "en.wikipedia.org" },
    ],
  },
    eslint: {
    ignoreDuringBuilds: true, // <-- bunu əlavə edirik
  },
};

export default nextConfig;
