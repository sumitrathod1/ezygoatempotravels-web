export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  /** The first link is the group's "All …" page where one exists. */
  children: NavLink[];
}

export type NavItem = NavLink | NavGroup;

export const isGroup = (item: NavItem): item is NavGroup => "children" in item;

/** Header menu (mobile panel and desktop dropdowns). "Areas we serve" lives in the footer only. */
export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Vehicles",
    children: [
      { label: "All vehicles", href: "/fleet/" },
      { label: "Tempo Traveller 12–20 seater", href: "/tempo-traveller-in-goa/" },
      { label: "Urbania 12 & 17 seater", href: "/urbania-on-rent-goa/" },
      { label: "Mini Bus 26–40 seater", href: "/bus-hire-goa/" },
    ],
  },
  {
    label: "Trips",
    // No trips hub page exists, so this group has no "All trips" link.
    children: [
      { label: "Airport Transfer", href: "/goa-airport-transfer/" },
      { label: "Wedding Transport", href: "/wedding-transport-goa/" },
      { label: "Group Tours", href: "/group-tours-goa/" },
      { label: "Outstation Trips", href: "/outstation-trips-from-goa/" },
    ],
  },
  {
    label: "Sightseeing",
    children: [
      { label: "All sightseeing", href: "/goa-sightseeing/" },
      { label: "North Goa", href: "/goa-sightseeing/north-goa/" },
      { label: "South Goa", href: "/goa-sightseeing/south-goa/" },
      { label: "Dudhsagar", href: "/goa-sightseeing/dudhsagar/" },
    ],
  },
  { label: "About", href: "/about/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contact/" },
];

// Footer columns.
export const VEHICLE_LINKS: NavLink[] = [
  { label: "Tempo Traveller", href: "/tempo-traveller-in-goa/" },
  { label: "Force Urbania", href: "/urbania-on-rent-goa/" },
  { label: "Mini bus hire", href: "/bus-hire-goa/" },
  { label: "Full fleet", href: "/fleet/" },
];

export const SERVICE_LINKS: NavLink[] = [
  { label: "Airport transfers", href: "/goa-airport-transfer/" },
  { label: "Goa sightseeing", href: "/goa-sightseeing/" },
  { label: "North Goa sightseeing", href: "/goa-sightseeing/north-goa/" },
  { label: "South Goa sightseeing", href: "/goa-sightseeing/south-goa/" },
  { label: "Dudhsagar trip", href: "/goa-sightseeing/dudhsagar/" },
  { label: "Wedding transport", href: "/wedding-transport-goa/" },
  { label: "Group tours", href: "/group-tours-goa/" },
  { label: "Outstation trips", href: "/outstation-trips-from-goa/" },
];

export const INFO_LINKS: NavLink[] = [
  { label: "Areas we serve", href: "/areas-we-serve/" },
  { label: "About us", href: "/about/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contact/" },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: "Privacy policy", href: "/privacy-policy/" },
  { label: "Terms and conditions", href: "/terms-and-conditions/" },
  { label: "Cancellation and refund policy", href: "/cancellation-refund-policy/" },
];
