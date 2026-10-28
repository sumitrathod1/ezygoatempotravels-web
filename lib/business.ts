// Business facts from BUILD-BRIEF.md §1. These are the only contact details allowed on the site.
export const BUSINESS = {
  name: "Ezy Goa Tempo Travels",
  phone: "+919579009209",
  phoneDisplay: "+91 95790 09209",
  whatsapp: "919579009209",
  email: "ezygoatempotravels@gmail.com",
  address: {
    street: "H.No. 532/1-W, Muddo Vaddo, Parra",
    locality: "North Goa",
    region: "Goa",
    postalCode: "403510",
    country: "India",
    countryCode: "IN",
  },
  hours: "24×7 pickup and drop",
} as const;

/** Review and social profiles. Add a URL only once the owner confirms the profile exists (§8: no dead links). */
export const SOCIAL_PROFILES: string[] = [];

/** Shown in the credentials block only when filled in (BUILD-BRIEF.md §9). */
export const CREDENTIALS: { label: string; value: string | null }[] = [
  { label: "Udyam registration", value: null },
  { label: "GST number", value: null },
  { label: "All India Tourist Permit / commercial registration", value: null },
];

/** Map pin for JSON-LD `geo`. Null until the owner sends the office location. */
export const GEO: { latitude: number; longitude: number } | null = null;

export const ADDRESS_LINES = [
  BUSINESS.address.street,
  `${BUSINESS.address.locality}, ${BUSINESS.address.region} ${BUSINESS.address.postalCode}`,
  BUSINESS.address.country,
] as const;

export const ADDRESS_ONE_LINE = ADDRESS_LINES.join(", ");

export const TEL_HREF = `tel:${BUSINESS.phone}`;
export const MAILTO_HREF = `mailto:${BUSINESS.email}`;
