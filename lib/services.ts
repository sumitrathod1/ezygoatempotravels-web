import {
  Briefcase,
  Heart,
  Landmark,
  Mountain,
  Plane,
  Route,
  Sun,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  title: string;
  href: string;
  icon: LucideIcon;
  blurb: string;
  /** Subject line for the quick-book WhatsApp message. */
  quoteSubject: string;
}

// Sightseeing stops come from lib/tours.ts (the owner's lists). The South Goa circuit's stops are
// in Old Goa, Ponda and Panjim, so the copy names them without claiming they're in South Goa.
export const SERVICES: Service[] = [
  {
    title: "Airport transfers",
    href: "/goa-airport-transfer/",
    icon: Plane,
    blurb:
      "Arrivals and departures at Mopa (GOX) and Dabolim (GOI), with the whole group and its suitcases in one vehicle.",
    quoteSubject: "an airport transfer",
  },
  {
    title: "North Goa sightseeing",
    href: "/goa-sightseeing/north-goa/",
    icon: Sun,
    blurb:
      "A dolphin trip, Fort Aguada, the beaches from Sinquerim to Baga, Anjuna and sunset at Chapora Fort: a full day of about 9–10 hours.",
    quoteSubject: "North Goa Sightseeing (full day)",
  },
  {
    title: "South Goa sightseeing",
    href: "/goa-sightseeing/south-goa/",
    icon: Landmark,
    blurb:
      "Bom Jesus Basilica and the museum in Old Goa, Mangeshi Temple, a spice farm, Dona Paula, Miramar and an evening river cruise.",
    quoteSubject: "South Goa Sightseeing (full day)",
  },
  {
    title: "Dudhsagar trip",
    href: "/goa-sightseeing/dudhsagar/",
    icon: Mountain,
    blurb:
      "Our vehicle to the Kulem/Mollem checkpoint and back; the forest department's jeep safari, paid separately, takes you to the falls.",
    quoteSubject: "Dudhsagar Waterfall Trip (full day)",
  },
  {
    title: "Wedding transport",
    href: "/wedding-transport-goa/",
    icon: Heart,
    blurb:
      "Guest shuttles between the airport, hotels and venues, with vehicle sizes matched to each run.",
    quoteSubject: "wedding transport",
  },
  {
    title: "Group tours",
    href: "/group-tours-goa/",
    icon: Briefcase,
    blurb:
      "College trips, corporate offsites, family reunions and film or shoot crews moving around Goa together.",
    quoteSubject: "a group tour",
  },
  {
    title: "Outstation trips",
    href: "/outstation-trips-from-goa/",
    icon: Route,
    blurb: "Trips beyond Goa for groups who would rather travel together than split up.",
    quoteSubject: "an outstation trip",
  },
];
