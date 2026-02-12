import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/ombrieres-parking",
        has: [{ type: "query", key: "accent", value: "true" }],
        destination: "/ombrieres-parking",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
