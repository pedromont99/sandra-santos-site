import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 60,
    formats: ["image/webp"],
    qualities: [100],
  },
};

export default nextConfig;