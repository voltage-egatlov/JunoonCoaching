import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove the X-Powered-By: Next.js header from every response — a free 1-header saving
  poweredByHeader: false,

  images: {
    // Serve AVIF first (≈50% smaller than WebP at same quality), fall back to WebP.
    // Next.js negotiates via Accept header — zero effort for older browsers.
    formats: ["image/avif", "image/webp"],

    // Cache optimised images for 30 days on CDN / browser.
    // Default is 60 seconds which forces re-optimisation on every deploy.
    minimumCacheTTL: 2592000,

    // Tighten the generated srcset to sizes we actually use, avoiding redundant
    // intermediate sizes that bloat the image optimisation cache.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [48, 64, 128, 256, 384],
  },

  async headers() {
    return [
      // Security headers on every route — no performance cost, meaningful protection
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      // Static image assets are content-addressed by Next.js — safe to cache forever
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/logos/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
