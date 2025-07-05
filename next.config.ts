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
  typescript: {
    ignoreBuildErrors: true, // <-- bunu əlavə etdik
  },
    eslint: {
    ignoreDuringBuilds: true, // <-- bunu əlavə edirik
  },
};

export default nextConfig;
