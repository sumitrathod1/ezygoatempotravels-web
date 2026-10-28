// The one place the site's domain is defined. Every absolute URL must come from here.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.ezygoatempotravels.com"
).replace(/\/+$/, "");

export const SITE_HOST = new URL(SITE_URL).hostname;

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";

/** Absolute URL for a site path, e.g. absoluteUrl("/fleet/"). */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
