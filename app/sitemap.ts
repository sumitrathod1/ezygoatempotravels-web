import type { MetadataRoute } from "next";
import { CONTENT_UPDATED, ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority }) => ({
    url: absoluteUrl(path),
    lastModified: CONTENT_UPDATED,
    priority,
  }));
}
