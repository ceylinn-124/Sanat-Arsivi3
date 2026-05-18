import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** 127.0.0.1 üzerinden açıldığında HMR / dev kaynak isteklerine izin ver */
  allowedDevOrigins: ["127.0.0.1"],
  experimental: {
    serverActions: {
      bodySizeLimit: "3mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "smarthistory.org",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
