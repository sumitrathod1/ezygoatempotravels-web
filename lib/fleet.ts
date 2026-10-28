// Fleet as confirmed by the owner (BUILD-BRIEF.md §1).
// In Specs, `null` = owner hasn't sent it yet (renders a visible placeholder, listed in CONTENT-TODO.md);
// a missing field = deliberately left off the page until confirmed.

export type VehicleId = "tt_12_14" | "tt_17_20" | "urbania" | "mini_bus";

/** Shown over a photo. Owner-confirmed real photos have no label. */
export type PhotoLabel = "representative" | "partner";

export const PHOTO_LABEL_TEXT: Record<PhotoLabel, string> = {
  representative: "Representative image",
  partner: "Representative image — mini buses are supplied by partner operators",
};

export interface Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
  label?: PhotoLabel;
  /** CSS object-position when the photo is cropped, e.g. "right" to keep a van's front in view. */
  position?: string;
}

export interface Specs {
  capacity: string;
  luggage?: string | null;
  ac?: string | null;
  seats?: string | null;
}

export interface Variant {
  name: string;
  specs: Specs;
}

export interface Vehicle {
  id: VehicleId;
  name: string;
  /** Title on fleet cards, when it differs from the name. */
  cardTitle?: string;
  shortName: string;
  /** Section anchor on its page. */
  anchor: string;
  /** Page that describes this vehicle in full. */
  href: string;
  /** Supplied by partner operators rather than owned. Must be said plainly wherever it's offered. */
  partner?: boolean;
  summary: string;
  /** Short icon rows on the fleet card. Same null/missing rules as Specs. */
  cardFacts: { passengers: string; luggage?: string | null; ac?: string | null };
  /** One spec card, or one per variant (Urbania). */
  specs?: Specs;
  variants?: Variant[];
  photos: {
    card: Photo;
    /** Photos in this vehicle's section, first one shown largest. */
    section: Photo[];
    /** Page hero, where the owner has assigned one. */
    hero?: Photo;
    gallery: Photo[];
  };
}

const photo = (
  folder: string,
  file: string,
  width: number,
  height: number,
  alt: string,
  extra: Pick<Photo, "label" | "position"> = {},
): Photo => ({ src: `/images/fleet/${folder}/${file}`, width, height, alt, ...extra });

const LUGGAGE_NOTE = "Carrying more or bigger bags? Tell us when you book and we'll plan for it.";

// ---------- 12 & 14 seater tempo traveller ----------
const TT1214 = "tempo-traveller-12-14-seater";
const tt1214 = {
  sideStudio: photo(TT1214, `${TT1214}-goa-side-studio.png`, 1672, 941, "Our white 12 & 14 seater tempo traveller, side view"),
  sideBrand: photo(TT1214, `${TT1214}-goa-side-brand.jpg`, 1600, 900, "Our 12 & 14 seater tempo traveller, side view"),
  sideReal: photo(TT1214, `${TT1214}-goa-side-real.jpg`, 1600, 900, "Our 12 & 14 seater tempo traveller parked outdoors"),
  front: photo(TT1214, `${TT1214}-goa-front-studio.png`, 1672, 941, "Front view of a 12 & 14 seater tempo traveller", {
    label: "representative",
  }),
  interior: photo(
    TT1214,
    `${TT1214}-goa-interior.jpg`,
    1000,
    750,
    "High-back seats and curtained windows inside our 12 & 14 seater tempo traveller",
  ),
};

export const TEMPO_TRAVELLER_12_14: Vehicle = {
  id: "tt_12_14",
  name: "12 & 14 Seater Tempo Traveller",
  shortName: "12 & 14 seater",
  cardFacts: { passengers: "12 or 14 passengers", luggage: "About 8–10 medium suitcases", ac: "Fully air-conditioned" },
  anchor: "12-14-seater",
  href: "/tempo-traveller-in-goa/#12-14-seater",
  summary:
    "Our compact tempo traveller, offered as a 12 seater or a 14 seater. It's the easiest size to take down narrow village lanes and into busy beach parking, and a sensible pick when your group is too big for two cars.",
  specs: {
    capacity: "12 or 14 passengers, plus the driver",
    luggage: `About 8–10 medium suitcases behind the last row. ${LUGGAGE_NOTE}`,
    ac: "Fully air-conditioned, with roof AC vents along the cabin",
    seats: "Cushioned high-back seats in a 2+1 layout with a centre aisle; curtains on every window",
  },
  photos: {
    card: tt1214.sideStudio,
    section: [tt1214.sideBrand, tt1214.front, tt1214.interior],
    gallery: [tt1214.sideBrand, tt1214.sideReal, tt1214.front, tt1214.interior],
  },
};

// ---------- 17 & 20 seater tempo traveller ----------
const TT1720 = "tempo-traveller-17-20-seater";
const tt1720 = {
  sideStudio: photo(TT1720, `${TT1720}-goa-side-studio.jpg`, 1672, 941, "Our long-body 17 & 20 seater tempo traveller, side view"),
  front: photo(TT1720, `${TT1720}-goa-front-studio.jpg`, 1672, 941, "Front view of our 17 & 20 seater tempo traveller"),
  interior: photo(
    TT1720,
    `${TT1720}-goa-interior.jpg`,
    1448,
    1086,
    "Rows of high-back seats and the centre aisle inside our 17 & 20 seater tempo traveller",
  ),
};

export const TEMPO_TRAVELLER_17_20: Vehicle = {
  id: "tt_17_20",
  name: "17 & 20 Seater Tempo Traveller",
  shortName: "17 & 20 seater",
  cardFacts: { passengers: "17 or 20 passengers", luggage: "About 10–12 medium suitcases", ac: "Fully air-conditioned" },
  anchor: "17-20-seater",
  href: "/tempo-traveller-in-goa/#17-20-seater",
  summary:
    "Our long-body tempo traveller, offered as a 17 seater or a 20 seater. For passengers there's no difference between the two: for groups of 15 or more we send the 20 seater, so anyone who needs 20 seats gets 20 seats.",
  specs: {
    capacity: "17 or 20 passengers, plus the driver",
    luggage: `About 10–12 medium suitcases behind the last row. ${LUGGAGE_NOTE}`,
    ac: "Fully air-conditioned, with roof AC vents above every row",
    seats: "High-back seats in a 2+1 layout with a centre aisle; curtains on every window",
  },
  photos: {
    card: tt1720.sideStudio,
    hero: tt1720.sideStudio,
    section: [tt1720.front, tt1720.interior],
    gallery: [tt1720.front, tt1720.interior],
  },
};

// ---------- Force Urbania (two variants, shared photos: never caption them with a seat count) ----------
const urb = {
  sideStudio: photo("urbania", "urbania-goa-side-studio.jpg", 1672, 941, "Our grey Force Urbania, side view"),
  sideBrand: photo("urbania", "urbania-goa-side-brand.jpg", 1672, 941, "Our grey Force Urbania, side view", {
    position: "right",
  }),
  front: photo("urbania", "urbania-goa-front-studio.jpg", 1672, 941, "Front view of our grey Force Urbania"),
  interior: photo("urbania", "urbania-goa-interior.jpg", 1448, 1086, "Blue and black seats inside our Force Urbania"),
};

export const URBANIA: Vehicle = {
  id: "urbania",
  name: "Force Urbania",
  cardTitle: "Force Urbania — 12 or 17 seater",
  shortName: "Urbania",
  cardFacts: { passengers: "12 or 17 passengers", luggage: null, ac: null },
  anchor: "urbania",
  href: "/urbania-on-rent-goa/",
  summary:
    "A luxury van with a car-like cabin, chosen when the ride itself is part of the occasion. We run two Urbanias: a 12 seater and a 17 seater.",
  variants: [
    {
      name: "Urbania 12 Seater",
      specs: { capacity: "12 passengers, plus the driver", luggage: null, ac: null, seats: null },
    },
    {
      name: "Urbania 17 Seater",
      specs: { capacity: "17 passengers, plus the driver", luggage: null, ac: null, seats: null },
    },
  ],
  photos: {
    card: urb.sideStudio,
    hero: urb.sideBrand,
    section: [urb.front, urb.interior],
    // The side-brand photo is the hero, so it isn't repeated in the gallery.
    gallery: [urb.front, urb.interior],
  },
};

// ---------- Mini bus (partner operators; photos are AI-generated, so always labelled and described generically) ----------
export const MINI_BUS_CAPACITIES = [26, 30, 38, 40] as const;

const bus = {
  front: photo("mini-bus", "mini-bus-goa-front-studio.jpg", 1672, 941, "A silver mini bus, front three-quarter view", {
    label: "partner",
  }),
  interior: photo("mini-bus", "mini-bus-goa-interior.jpg", 1448, 1086, "Seats and a carpeted centre aisle inside a mini bus", {
    label: "partner",
  }),
  sideBrand: photo("mini-bus", "mini-bus-goa-side-brand.jpg", 1672, 941, "A white mini bus, side view", { label: "partner" }),
};

export const MINI_BUS: Vehicle = {
  id: "mini_bus",
  name: "Mini Bus",
  shortName: "Mini bus",
  // Luggage and AC are left off until the owner confirms them.
  cardFacts: { passengers: "26, 30, 38 or 40 seats" },
  anchor: "mini-bus",
  href: "/bus-hire-goa/",
  partner: true,
  summary:
    "For groups bigger than a tempo traveller can take. Mini buses with 26, 30, 38 or 40 seats are arranged through our partner operators.",
  // AC and luggage are left off until the owner confirms them.
  specs: { capacity: "26, 30, 38 or 40 seats, depending on the bus" },
  photos: {
    // No side-studio photo yet, so the card uses the front-studio shot.
    card: bus.front,
    hero: bus.sideBrand,
    section: [bus.front, bus.interior],
    gallery: [bus.front, bus.interior],
  },
};

export const TEMPO_TRAVELLERS: Vehicle[] = [TEMPO_TRAVELLER_12_14, TEMPO_TRAVELLER_17_20];

export const FLEET: Vehicle[] = [...TEMPO_TRAVELLERS, URBANIA, MINI_BUS];
