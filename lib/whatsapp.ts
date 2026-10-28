import { BUSINESS } from "./business";
import { SITE_HOST } from "./site";

export function waHref(message: string = GENERIC_MESSAGE): string {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const GENERIC_MESSAGE = `Hi ${BUSINESS.name}, I'd like a quote for a group trip in Goa.`;

/** Prefilled message for a quick-book button on a vehicle or service. */
export function quoteMessage(subject: string): string {
  return [
    `Hi ${BUSINESS.name}, I'd like a quote for: ${subject}`,
    "",
    "Date: ",
    "Pickup: ",
    "Drop: ",
    "Passengers: ",
  ].join("\n");
}

export interface BookingDetails {
  /** Tour or service the form sits on, e.g. "North Goa Sightseeing". */
  subject?: string;
  tripType: string;
  vehicle: string;
  passengers: string;
  date: string;
  time: string;
  pickup: string;
  drop: string;
  name: string;
  phone: string;
  message: string;
}

export function bookingMessage(d: BookingDetails): string {
  const line = (label: string, value: string) => (value ? `${label}: ${value}` : null);
  return [
    `Hi ${BUSINESS.name}, I'd like a quote.`,
    "",
    "*Trip*",
    line("Tour", d.subject ?? ""),
    line("Trip type", d.tripType),
    line("Vehicle", d.vehicle),
    line("Passengers", d.passengers),
    line("Date", d.date),
    line("Pickup time", d.time),
    line("Pickup", d.pickup),
    line("Drop", d.drop),
    "",
    "*My details*",
    line("Name", d.name),
    line("Phone", d.phone),
    d.message ? `\n${d.message}` : null,
    "",
    "Please share availability and a quote.",
    `(Sent from ${SITE_HOST})`,
  ]
    .filter((l) => l !== null)
    .join("\n");
}
