// Sightseeing tours. Stops, their order and the durations are the owner's facts; the descriptions
// are our own words. The overview cards and each tour page read from here, so they always match.
// Don't add claims about parking, timings or vehicle access; those questions are in CONTENT-TODO.md.

/** A tour photo. Until `src` is set it renders as a placeholder; all are "Representative image". */
export interface SightImage {
  /** Where to put the file once supplied: public/images/sightseeing/<file>. */
  file: string;
  alt: string;
  /** Set to `/images/sightseeing/<file>` once the photo is in public/. */
  src?: string;
}

export interface Stop {
  name: string;
  where?: string;
  note: string;
  optional?: boolean;
  image?: SightImage;
}

export interface Tour {
  slug: "north-goa" | "south-goa" | "dudhsagar";
  path: string;
  name: string;
  /** "Full day, about 9–10 hours". */
  duration: string;
  /** Pre-filled in the WhatsApp quote message. */
  quoteSubject: string;
  hero: SightImage;
  stops: Stop[];
}

const img = (slug: string, name: string, alt: string): SightImage => ({ file: `${slug}/${name}.jpg`, alt });

export const NORTH_GOA: Tour = {
  slug: "north-goa",
  path: "/goa-sightseeing/north-goa/",
  name: "North Goa Sightseeing",
  duration: "Full day, about 9–10 hours",
  quoteSubject: "North Goa Sightseeing (full day)",
  hero: img("north-goa", "north-goa-coast", "The North Goa coastline"),
  stops: [
    {
      name: "Dolphin trip",
      where: "boat from Sinquerim",
      note: "The day starts on the water: an optional boat ride out from Sinquerim to look for dolphins along the coast. The boat ride is paid separately.",
      image: img("north-goa", "dolphin-trip-sinquerim", "A dolphin-spotting boat off Sinquerim"),
    },
    {
      name: "Fort Aguada",
      note: "A 17th-century Portuguese fort and lighthouse on the headland where the Mandovi river meets the sea, with wide views up the coast.",
      image: img("north-goa", "fort-aguada", "The walls and lighthouse of Fort Aguada"),
    },
    {
      name: "Sinquerim Beach",
      note: "The quiet stretch of sand just below the fort, where the long beach towards Candolim and Calangute begins.",
      image: img("north-goa", "sinquerim-beach", "Sinquerim Beach below Fort Aguada"),
    },
    {
      name: "Candolim Beach",
      note: "A broad, relaxed beach lined with shacks, a short way north along the same shoreline.",
      image: img("north-goa", "candolim-beach", "Candolim Beach"),
    },
    {
      name: "Calangute Beach",
      note: "Goa's best-known beach, with a busy market street running down to the sand.",
      image: img("north-goa", "calangute-beach", "Calangute Beach"),
    },
    {
      name: "Snow Park Goa",
      note: "An indoor snow play area: a cold break in the middle of a beach day. Entry is paid separately.",
      image: img("north-goa", "snow-park-goa", "Inside Snow Park Goa"),
    },
    {
      name: "Thunder World",
      note: "An indoor attraction on the way to Baga. Entry is paid separately.",
      image: img("north-goa", "thunder-world", "Thunder World, Goa"),
    },
    {
      name: "Baga Beach",
      note: "The livelier northern end of the Calangute stretch, with water sports run by operators on the beach (paid separately).",
      image: img("north-goa", "baga-beach", "Baga Beach"),
    },
    {
      name: "Anjuna Beach",
      note: "Red cliffs and a rocky shoreline. On Wednesdays the Anjuna flea market sets up nearby.",
      image: img("north-goa", "anjuna-beach", "The cliffs at Anjuna Beach"),
    },
    {
      name: "Chapora Fort",
      where: "for sunset",
      note: "The day ends on the old fort walls above Vagator, watching the sun go down over the Arabian Sea.",
      image: img("north-goa", "chapora-fort-sunset", "Sunset from Chapora Fort"),
    },
  ],
};

export const SOUTH_GOA: Tour = {
  slug: "south-goa",
  path: "/goa-sightseeing/south-goa/",
  name: "South Goa Sightseeing",
  duration: "Full day, about 9–11 hours",
  quoteSubject: "South Goa Sightseeing (full day)",
  hero: img("south-goa", "old-goa-churches", "The churches of Old Goa"),
  stops: [
    {
      name: "Basilica of Bom Jesus",
      where: "Old Goa",
      note: "A UNESCO World Heritage church and the resting place of St Francis Xavier, built at the turn of the 17th century.",
      image: img("south-goa", "basilica-of-bom-jesus", "The Basilica of Bom Jesus, Old Goa"),
    },
    {
      name: "Archaeological Museum of Goa",
      where: "Old Goa",
      note: "Set in the old convent of St Francis of Assisi, with sculpture, stone inscriptions and portraits from Goa's Portuguese era.",
      image: img("south-goa", "archaeological-museum-old-goa", "The Archaeological Museum, Old Goa"),
    },
    {
      name: "Shri Mangeshi Temple",
      where: "Ponda",
      note: "One of Goa's most visited temples, dedicated to Shri Mangesh, with a tall white lamp tower in the courtyard.",
      image: img("south-goa", "shri-mangeshi-temple", "Shri Mangeshi Temple, Ponda"),
    },
    {
      name: "Sahakari Spice Farm",
      where: "Ponda",
      note: "A guided walk through a working spice plantation, best visited in the morning. Lunch is available at the farm.",
      image: img("south-goa", "sahakari-spice-farm", "Spice plants at Sahakari Spice Farm"),
    },
    {
      name: "Dona Paula Jetty",
      note: "A viewpoint at the tip of the Dona Paula headland, looking out across the bay.",
      image: img("south-goa", "dona-paula-jetty", "The view from Dona Paula Jetty"),
    },
    {
      name: "Miramar Beach",
      note: "Panjim's city beach, where the Mandovi river opens out into the sea.",
      image: img("south-goa", "miramar-beach", "Miramar Beach, Panjim"),
    },
    {
      name: "Mandovi River Cruise",
      where: "evening",
      note: "The day finishes on an evening boat cruise on the Mandovi from Panjim. Cruise tickets are bought separately.",
      image: img("south-goa", "mandovi-river-cruise", "A Mandovi river cruise boat in the evening"),
    },
  ],
};

export const DUDHSAGAR: Tour = {
  slug: "dudhsagar",
  path: "/goa-sightseeing/dudhsagar/",
  name: "Dudhsagar Waterfall Trip",
  duration: "Full day, about 10–12 hours",
  quoteSubject: "Dudhsagar Waterfall Trip (full day)",
  hero: img("dudhsagar", "dudhsagar-waterfall", "Dudhsagar waterfall"),
  stops: [
    {
      name: "Kulem / Mollem checkpoint",
      note: "Our vehicle drives the group from your hotel to the checkpoint. Private vehicles can't go any further.",
    },
    {
      name: "Jeep safari to the falls",
      note: "From the checkpoint, the forest department's jeep safari takes you through the sanctuary to the waterfall and back. The safari is paid separately.",
      image: img("dudhsagar", "jeep-safari", "A jeep on the forest track to Dudhsagar"),
    },
    {
      name: "Dudhsagar Waterfall",
      note: "About 310 metres of white water falling down the hillside in the Bhagwan Mahavir Wildlife Sanctuary, on the Goa–Karnataka border.",
      image: img("dudhsagar", "dudhsagar-falls-close", "Dudhsagar waterfall up close"),
    },
    {
      name: "Tambdi Surla Mahadev Temple",
      optional: true,
      note: "A small stone temple from the Kadamba period, set in the forest. An optional stop on the way back.",
      image: img("dudhsagar", "tambdi-surla-temple", "Tambdi Surla Mahadev Temple"),
    },
    {
      name: "Spice farm in Ponda",
      optional: true,
      note: "An optional stop at a Ponda spice farm on the drive back.",
      image: img("dudhsagar", "ponda-spice-farm", "A spice farm in Ponda"),
    },
  ],
};

export const TOURS: Tour[] = [NORTH_GOA, SOUTH_GOA, DUDHSAGAR];

/** Every sightseeing image the site still needs, for CONTENT-TODO.md and checks. */
export const ALL_SIGHT_IMAGES: SightImage[] = TOURS.flatMap((t) => [
  t.hero,
  ...t.stops.flatMap((s) => (s.image ? [s.image] : [])),
]);
