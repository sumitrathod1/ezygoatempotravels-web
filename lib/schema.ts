import { isValidElement, type ReactNode } from "react";
import { BUSINESS, GEO, SOCIAL_PROFILES } from "./business";
import { absoluteUrl } from "./site";

// JSON-LD builders. Every URL comes from SITE_URL via absoluteUrl().
// No Review or AggregateRating schema: self-serving reviews aren't eligible (BUILD-BRIEF.md §9).

const address = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS.address.street,
  addressLocality: BUSINESS.address.locality,
  addressRegion: BUSINESS.address.region,
  postalCode: BUSINESS.address.postalCode,
  addressCountry: BUSINESS.address.countryCode,
};

const provider = {
  "@type": "TravelAgency",
  "@id": absoluteUrl("/#business"),
  name: BUSINESS.name,
  url: absoluteUrl("/"),
  telephone: BUSINESS.phone,
};

const areaServed = { "@type": "State", name: "Goa" };

/** TravelAgency (a LocalBusiness) for Home and Contact. `geo` is added once the owner sends coordinates. */
export function travelAgencySchema() {
  return {
    "@context": "https://schema.org",
    ...provider,
    email: BUSINESS.email,
    image: absoluteUrl("/og-image.png"),
    logo: absoluteUrl("/icon-512.png"),
    address,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed,
    ...(GEO && { geo: { "@type": "GeoCoordinates", ...GEO } }),
    ...(SOCIAL_PROFILES.length > 0 && { sameAs: SOCIAL_PROFILES }),
  };
}

export function serviceSchema({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider,
    areaServed,
  };
}

export interface FaqItem {
  q: string;
  /** A string answer goes into FAQPage schema; a JSX answer (e.g. a placeholder) is shown only. */
  a: ReactNode;
}

/** FAQPage from the answers that are plain text. Returns null when there are none. */
export function faqSchema(items: FaqItem[]) {
  const answered = items.filter((i) => typeof i.a === "string" && !isValidElement(i.a));
  if (answered.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: answered.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a as string },
    })),
  };
}
