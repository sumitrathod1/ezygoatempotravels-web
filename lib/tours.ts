// Sightseeing tours. Stops, their order and the durations are the owner's facts; the descriptions
// are our own words. The overview cards and each tour page read from here, so they always match.
// Don't add claims about parking, timings or vehicle access; those questions are in CONTENT-TODO.md.

/**
 * A tour photo. All of them are AI-generated, so every one is shown with a "Representative image"
 * label. Until `src` is set it renders as a placeholder pointing at the file it's waiting for.
 */
export interface SightImage {
  /** Path under public/images/sightseeing/. */
  file: string;
  /** Plain description naming the place. */
  alt: string;
  /** Set once the file is in public/images/sightseeing/. */
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

/** A supplied photo in public/images/sightseeing/. */
const photo = (file: string, alt: string): SightImage => ({ file, alt, src: `/images/sightseeing/${file}` });
/** A photo still to come: renders as a labelled placeholder. */
const pending = (file: string, alt: string): SightImage => ({ file, alt });

/** Hero image for the /goa-sightseeing/ overview page. */
export const SIGHTSEEING_HERO = photo("goa-sightseeing-hero.jpg", "Dolphin-watching boat trip off the coast of North Goa");

const NG = {
  dolphin: photo("north-goa/north-goa-dolphin-trip.jpg", "Dolphin-watching boat trip from Sinquerim, North Goa"),
  aguada: photo("north-goa/north-goa-fort-aguada.jpg", "Fort Aguada ramparts and lighthouse, North Goa"),
  sinquerim: photo("north-goa/north-goa-sinquerim-beach.jpg", "Sinquerim Beach, North Goa"),
  candolim: photo("north-goa/north-goa-candolim-beach.jpg", "Candolim Beach with beach shacks, North Goa"),
  calangute: photo("north-goa/north-goa-calangute-beach.jpg", "Calangute Beach, North Goa"),
  snowPark: photo("north-goa/north-goa-snow-park.jpg", "Snow Park Goa, North Goa"),
  thunderWorld: photo("north-goa/north-goa-thunder-world.jpg", "Thunder World, North Goa"),
  baga: photo("north-goa/north-goa-baga-beach.jpg", "Baga Beach at sunset, North Goa"),
  anjuna: photo("north-goa/north-goa-anjuna-beach.jpg", "Rocks and cliffs at Anjuna Beach, North Goa"),
  chapora: photo("north-goa/north-goa-chapora-fort.jpg", "Sunset from Chapora Fort, North Goa"),
};

export const NORTH_GOA: Tour = {
  slug: "north-goa",
  path: "/goa-sightseeing/north-goa/",
  name: "North Goa Sightseeing",
  duration: "Full day, about 9–10 hours",
  quoteSubject: "North Goa Sightseeing (full day)",
  hero: NG.chapora,
  stops: [
    {
      name: "Dolphin trip",
      where: "boat from Sinquerim",
      note: "The day starts on the water: an optional boat ride out from Sinquerim to look for dolphins along the coast. The boat ride is paid separately.",
      image: NG.dolphin,
    },
    {
      name: "Fort Aguada",
      note: "A 17th-century Portuguese fort and lighthouse on the headland where the Mandovi river meets the sea, with wide views up the coast.",
      image: NG.aguada,
    },
    {
      name: "Sinquerim Beach",
      note: "The quiet stretch of sand just below the fort, where the long beach towards Candolim and Calangute begins.",
      image: NG.sinquerim,
    },
    {
      name: "Candolim Beach",
      note: "A broad, relaxed beach lined with shacks, a short way north along the same shoreline.",
      image: NG.candolim,
    },
    {
      name: "Calangute Beach",
      note: "Goa's best-known beach, with a busy market street running down to the sand.",
      image: NG.calangute,
    },
    {
      name: "Snow Park Goa",
      note: "An indoor snow play area: a cold break in the middle of a beach day. Entry is paid separately.",
      image: NG.snowPark,
    },
    {
      name: "Thunder World",
      note: "An indoor attraction on the way to Baga. Entry is paid separately.",
      image: NG.thunderWorld,
    },
    {
      name: "Baga Beach",
      note: "The livelier northern end of the Calangute stretch, with water sports run by operators on the beach (paid separately).",
      image: NG.baga,
    },
    {
      name: "Anjuna Beach",
      note: "Red cliffs and a rocky shoreline. On Wednesdays the Anjuna flea market sets up nearby.",
      image: NG.anjuna,
    },
    {
      name: "Chapora Fort",
      where: "for sunset",
      note: "The day ends on the old fort walls above Vagator, watching the sun go down over the Arabian Sea.",
      image: NG.chapora,
    },
  ],
};

const SG = {
  basilica: photo("south-goa/south-goa-basilica-of-bom-jesus.jpg", "Basilica of Bom Jesus, Old Goa"),
  museum: photo("south-goa/south-goa-archaeological-museum.jpg", "Archaeological Museum of Goa, Old Goa"),
  mangeshi: photo("south-goa/south-goa-shri-mangeshi-temple.jpg", "Shri Mangeshi Temple and its lamp tower, Ponda"),
  spiceFarm: photo("south-goa/south-goa-sahakari-spice-farm.jpg", "Guided walk at Sahakari Spice Farm, Ponda"),
  donaPaula: photo("south-goa/south-goa-dona-paula-jetty.jpg", "Dona Paula Jetty viewpoint, Panjim"),
  miramar: photo("south-goa/south-goa-miramar-beach.jpg", "Miramar Beach at sunset, Panjim"),
  cruise: photo("south-goa/south-goa-mandovi-river-cruise.jpg", "Mandovi river cruise boat in the evening, Panjim"),
};

export const SOUTH_GOA: Tour = {
  slug: "south-goa",
  path: "/goa-sightseeing/south-goa/",
  name: "South Goa Sightseeing",
  duration: "Full day, about 9–11 hours",
  quoteSubject: "South Goa Sightseeing (full day)",
  hero: SG.basilica,
  stops: [
    {
      name: "Basilica of Bom Jesus",
      where: "Old Goa",
      note: "A UNESCO World Heritage church and the resting place of St Francis Xavier, built at the turn of the 17th century.",
      image: SG.basilica,
    },
    {
      name: "Archaeological Museum of Goa",
      where: "Old Goa",
      note: "Set in the old convent of St Francis of Assisi, with sculpture, stone inscriptions and portraits from Goa's Portuguese era.",
      image: SG.museum,
    },
    {
      name: "Shri Mangeshi Temple",
      where: "Ponda",
      note: "One of Goa's most visited temples, dedicated to Shri Mangesh, with a tall white lamp tower in the courtyard.",
      image: SG.mangeshi,
    },
    {
      name: "Sahakari Spice Farm",
      where: "Ponda",
      note: "A guided walk through a working spice plantation, best visited in the morning. Lunch is available at the farm.",
      image: SG.spiceFarm,
    },
    {
      name: "Dona Paula Jetty",
      note: "A viewpoint at the tip of the Dona Paula headland, looking out across the bay.",
      image: SG.donaPaula,
    },
    {
      name: "Miramar Beach",
      note: "Panjim's city beach, where the Mandovi river opens out into the sea.",
      image: SG.miramar,
    },
    {
      name: "Mandovi River Cruise",
      where: "evening",
      note: "The day finishes on an evening boat cruise on the Mandovi from Panjim. Cruise tickets are bought separately.",
      image: SG.cruise,
    },
  ],
};

const DS = {
  waterfall: photo("dudhsagar/dudhsagar-waterfall.jpg", "Dudhsagar waterfall on the Goa–Karnataka border"),
  jeep: photo("dudhsagar/dudhsagar-jeep-safari.jpg", "Jeep safari through the forest to Dudhsagar waterfall"),
};

export const DUDHSAGAR: Tour = {
  slug: "dudhsagar",
  path: "/goa-sightseeing/dudhsagar/",
  name: "Dudhsagar Waterfall Trip",
  duration: "Full day, about 10–12 hours",
  quoteSubject: "Dudhsagar Waterfall Trip (full day)",
  hero: DS.waterfall,
  stops: [
    {
      name: "Kulem / Mollem checkpoint",
      note: "Our vehicle drives the group from your hotel to the checkpoint. Private vehicles can't go any further.",
    },
    {
      name: "Jeep safari to the falls",
      note: "From the checkpoint, the forest department's jeep safari takes you through the sanctuary to the waterfall and back. The safari is paid separately.",
      image: DS.jeep,
    },
    {
      name: "Dudhsagar Waterfall",
      note: "About 310 metres of white water falling down the hillside in the Bhagwan Mahavir Wildlife Sanctuary, on the Goa–Karnataka border.",
      image: DS.waterfall,
    },
    {
      name: "Spice farm in Ponda",
      optional: true,
      note: "An optional stop at a Ponda spice farm on the drive back.",
      image: pending("dudhsagar/dudhsagar-ponda-spice-farm.jpg", "A spice farm in Ponda"),
    },
  ],
};

export const TOURS: Tour[] = [NORTH_GOA, SOUTH_GOA, DUDHSAGAR];

/** Tour stops that have no photo yet (placeholder) or no image slot at all. */
export const STOPS_WITHOUT_PHOTO = TOURS.flatMap((t) =>
  t.stops.filter((s) => !s.image?.src).map((s) => ({ tour: t.name, stop: s.name, file: s.image?.file ?? null })),
);
