import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

// Staging hosts are kept out of search by the X-Robots-Tag header in proxy.ts, not here.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
