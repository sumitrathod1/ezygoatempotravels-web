import type { NextConfig } from "next";
import { SITE_HOST } from "./lib/site";

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Old PHP URLs that Google Ads and Search may still point to (BUILD-BRIEF.md §4).
// statusCode 301 rather than `permanent: true`, which would send a 308.
const OLD_URLS: [string, string][] = [
  ["/index.php", "/"],
  ["/about-us.php", "/about/"],
  ["/tempo-traveller-in-goa.php", "/tempo-traveller-in-goa/"],
  ["/contact-us.php", "/contact/"],
  ["/book-tempo.php", "/tempo-traveller-in-goa/"],
];

const nextConfig: NextConfig = {
  output: "standalone",
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return OLD_URLS.map(([source, destination]) => ({ source, destination, statusCode: 301 }));
  },
  async headers() {
    // Every response on any host except the canonical one (Easypanel preview URL, localhost) is
    // marked noindex, including images, scripts and other static files that skip proxy.ts.
    // The rule only applies when neither Host nor X-Forwarded-Host is the canonical host, so the
    // live site is never noindexed even if a reverse proxy rewrites the Host header.
    const canonical = escapeRegex(SITE_HOST);
    return [
      {
        source: "/:path*",
        missing: [
          { type: "host", value: canonical },
          { type: "header", key: "x-forwarded-host", value: canonical },
        ],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
