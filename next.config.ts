import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 90, 92, 95, 100],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920, 2048, 2560, 3840],
    imageSizes: [64, 96, 128, 256, 384, 512],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      {
        source: "/ideas",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ideas/:slug",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/ideas",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/en/ideas/:slug",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/ca/ideas",
        destination: "/ca",
        permanent: true,
      },
      {
        source: "/ca/ideas/:slug",
        destination: "/ca",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
