import type { Metadata } from "next";
import { BUSINESS } from "./business";

interface PageSeo {
  /** Full title, 60 characters or fewer. */
  title: string;
  /** 155 characters or fewer. */
  description: string;
  /** Site path with trailing slash, e.g. "/fleet/". Resolved against metadataBase (SITE_URL). */
  path: string;
}

/** 1200×630 share image made from the logo (public/og-image.png). A static file, so the URL
 *  never hits the trailing-slash redirect. Set explicitly because a page's own openGraph
 *  object replaces the root layout's. */
export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${BUSINESS.name}: tempo traveller, Urbania and mini bus hire in Goa`,
};

/** Per-page metadata. Fails the build if a title or description is too long. */
export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  if (title.length > 60) throw new Error(`Title over 60 chars (${title.length}): ${title}`);
  if (description.length > 155) {
    throw new Error(`Description over 155 chars (${description.length}) on ${path}`);
  }
  if (!path.endsWith("/")) throw new Error(`Path must end with a slash: ${path}`);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title,
      description,
      siteName: BUSINESS.name,
      locale: "en_IN",
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
  };
}
