// Option values are what gets pushed to the dataLayer, so they are short codes with no personal data.

export const TRIP_TYPES = [
  { value: "airport", label: "Airport transfer" },
  { value: "sightseeing", label: "Sightseeing" },
  { value: "dudhsagar", label: "Dudhsagar trip" },
  { value: "wedding", label: "Wedding" },
  { value: "group", label: "Group trip (college / corporate / family)" },
  { value: "outstation", label: "Outstation" },
  { value: "other", label: "Other" },
] as const;

export type TripType = (typeof TRIP_TYPES)[number]["value"];

export const VEHICLE_OPTIONS = [
  { value: "tt_12_14", label: "12 & 14 Seater Tempo Traveller", href: "/tempo-traveller-in-goa/#12-14-seater" },
  { value: "tt_17_20", label: "17 & 20 Seater Tempo Traveller", href: "/tempo-traveller-in-goa/#17-20-seater" },
  { value: "urbania", label: "Force Urbania (12 or 17 seater)", href: "/urbania-on-rent-goa/" },
  { value: "bus_26", label: "26 Seater Mini Bus", href: "/bus-hire-goa/" },
  { value: "bus_30", label: "30 Seater Mini Bus", href: "/bus-hire-goa/" },
  { value: "bus_38", label: "38 Seater Mini Bus", href: "/bus-hire-goa/" },
  { value: "bus_40", label: "40 Seater Mini Bus", href: "/bus-hire-goa/" },
  { value: "multiple", label: "More than one vehicle", href: "/bus-hire-goa/" },
  { value: "not_sure", label: "Not sure, please suggest", href: null },
] as const;

export type VehicleChoice = (typeof VEHICLE_OPTIONS)[number]["value"];

/**
 * Group size → suggested vehicle. The ranges are split at 12, 14, 17 and 20 because the tempo
 * travellers change at 14 and the Urbania variants at 12 and 17.
 * Urbania is never suggested but can be picked by hand (see urbaniaFor).
 */
export const PASSENGER_RANGES: { value: string; label: string; max: number; vehicle: VehicleChoice }[] = [
  { value: "1-12", label: "Up to 12", max: 12, vehicle: "tt_12_14" },
  { value: "13-14", label: "13 or 14", max: 14, vehicle: "tt_12_14" },
  { value: "15-17", label: "15 to 17", max: 17, vehicle: "tt_17_20" },
  { value: "18-20", label: "18 to 20", max: 20, vehicle: "tt_17_20" },
  { value: "21-26", label: "21 to 26", max: 26, vehicle: "bus_26" },
  { value: "27-30", label: "27 to 30", max: 30, vehicle: "bus_30" },
  { value: "31-38", label: "31 to 38", max: 38, vehicle: "bus_38" },
  { value: "39-40", label: "39 to 40", max: 40, vehicle: "bus_40" },
  { value: "40+", label: "More than 40", max: Infinity, vehicle: "multiple" },
];

/** Shown under the vehicle field when it was filled in from the group size. */
export function suggestionHint(vehicle: VehicleChoice): string {
  if (vehicle === "multiple") return "For more than 40 people we'll arrange more than one vehicle.";
  if (vehicle.startsWith("bus_")) {
    return "Suggested for your group size. Mini buses are supplied by our partner operators.";
  }
  return "Suggested for your group size. You can change it.";
}

/**
 * The Urbania comes as a 12 or a 17 seater, so which one is meant depends on the group size.
 * `code` is the dataLayer value, `label` goes into the WhatsApp message.
 */
export function urbaniaFor(passengers: string): { code: string; label: string; hint: string } {
  const max = PASSENGER_RANGES.find((r) => r.value === passengers)?.max;
  if (max === undefined) {
    return {
      code: "urbania",
      label: "Force Urbania",
      hint: "The Urbania comes as a 12 or 17 seater. Choose your group size and we'll match it.",
    };
  }
  if (max <= 12) return { code: "urbania_12", label: "Force Urbania 12 Seater", hint: "Urbania 12 seater for your group." };
  if (max <= 17) return { code: "urbania_17", label: "Force Urbania 17 Seater", hint: "Urbania 17 seater for your group." };
  return {
    code: "urbania",
    label: "Force Urbania",
    hint: "Urbania seats up to 17 — we'll suggest a 20 seater tempo traveller or a mini bus.",
  };
}

/** Suggestions for the free-text pickup and drop fields. */
export const PLACE_SUGGESTIONS = [
  "Mopa Airport (GOX)",
  "Dabolim Airport (GOI)",
  "Madgaon railway station",
  "Thivim railway station",
  "Karmali railway station",
  "Vasco da Gama railway station",
  "Panjim",
  "Mapusa",
  "Calangute",
  "Baga",
  "Candolim",
  "Anjuna",
  "Vagator",
  "Margao",
  "Colva",
  "Benaulim",
  "Palolem",
];

export function labelFor<T extends { value: string; label: string }>(
  options: readonly T[],
  value: string,
): string {
  return options.find((o) => o.value === value)?.label ?? value;
}

/**
 * Accepts "98765 43210", "+91 98765-43210", "09876543210" and similar.
 * Returns the 10-digit Indian mobile number, or null if it isn't one.
 */
export function normaliseIndianMobile(input: string): string | null {
  let digits = input.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  else if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}
