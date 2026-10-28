import Link from "next/link";
import { Placeholder } from "@/components/ui/Placeholder";
import type { FaqItem } from "./schema";

// Every FAQ on the site, grouped by topic. Service pages show their group; /faq/ shows them all.
// Plain-string answers go into FAQPage schema; JSX answers (placeholders, links) are display-only.

export const BOOKING_FAQS: FaqItem[] = [
  {
    q: "How do I book?",
    a: "Fill in the quote form on any page, tap a WhatsApp button, or call +91 95790 09209. Send your date, pickup point, group size and plan, and we reply with the right vehicle and a quote.",
  },
  {
    q: "Why aren't prices shown on the website?",
    a: "The fare depends on the vehicle, the date, the distance and how long you need it, so every trip is quoted on its own. Send your plan and you'll get a quote for exactly that.",
  },
  {
    q: "How do I pay, and is an advance needed?",
    a: <Placeholder>advance amount, when the balance is due, payment methods</Placeholder>,
  },
  {
    q: "Are tolls, parking and entry tickets included?",
    a: <Placeholder>what the quote includes and excludes (tolls, parking, entry tickets, driver allowance)</Placeholder>,
  },
  {
    q: "What if I need to cancel?",
    a: (
      <>
        <Placeholder>one-line cancellation summary</Placeholder> The full terms are in our{" "}
        <Link href="/cancellation-refund-policy/">cancellation and refund policy</Link>.
      </>
    ),
  },
  {
    q: "Do you pick up early in the morning or late at night?",
    a: "Yes. Pickup and drop are available 24×7, so early flights, late trains and late-night returns are all fine.",
  },
];

export const TEMPO_FAQS: FaqItem[] = [
  {
    q: "Does the tempo traveller come with a driver?",
    a: "Yes. Every vehicle is hired with a driver, so nobody in your group has to drive, find the way or look for parking.",
  },
  {
    q: "Which size should I book for my group?",
    a: "Up to 14 people fit the 12 & 14 seater, and 15 to 20 people fit the 17 & 20 seater. If you're carrying a lot of luggage, mention it when you book. Choose your group size in the quote form and it will suggest a vehicle, which you can change.",
  },
  {
    q: "Is there a difference between the 17 seater and the 20 seater?",
    a: "Not for passengers. It's one vehicle type, and for groups of 15 or more we send the 20 seater, so anyone who needs 20 seats gets 20 seats.",
  },
  {
    q: "How much luggage fits in a tempo traveller?",
    a: "About 8 to 10 medium suitcases behind the last row of the 12 & 14 seater, and about 10 to 12 in the 17 & 20 seater. Carrying more or bigger bags? Tell us when you book and we'll plan for it.",
  },
  {
    q: "Can I hire a tempo traveller for more than one day?",
    a: "Send your dates and a rough plan for each day on WhatsApp, and you'll get a quote for the whole trip rather than day by day.",
  },
];

export const URBANIA_FAQS: FaqItem[] = [
  {
    q: "What's the difference between the Urbania and a tempo traveller?",
    a: "Both are vans with a driver for group travel. The Force Urbania is the newer, more premium model, with a cabin that feels closer to a car. Groups usually choose it when the ride is part of the occasion, such as a wedding or a visit by important guests.",
  },
  {
    q: "Which Urbania will we get, the 12 seater or the 17 seater?",
    a: "It depends on your group size: up to 12 people travel in the Urbania 12 seater, and 13 to 17 people in the Urbania 17 seater. Choose your group size in the quote form and it will show which one fits.",
  },
  {
    q: "Our group is bigger than 17. Can we still use the Urbania?",
    a: "The Urbania seats up to 17. For a bigger group we'll suggest the 20 seater tempo traveller or a mini bus, or the Urbania alongside a second vehicle.",
  },
];

export const BUS_FAQS: FaqItem[] = [
  {
    q: "Do you own the mini buses?",
    a: "No. Mini buses are supplied by partner operators we work with, and we arrange the booking for you. Our own vehicles are the tempo travellers and the Force Urbania.",
  },
  {
    q: "What sizes of mini bus can you arrange?",
    a: "26, 30, 38 and 40 seaters. Tell us your group size and we'll match the bus to it.",
  },
  {
    q: "What if our group is bigger than 40?",
    a: "We'll arrange more than one vehicle, for example a mini bus plus a tempo traveller, and plan the pickups around your group.",
  },
];

export const AIRPORT_FAQS: FaqItem[] = [
  {
    q: "Which airports do you cover?",
    a: "Both of Goa's airports: Manohar International Airport at Mopa (GOX) in the north, and Dabolim Airport (GOI) near Vasco in the south.",
  },
  {
    q: "What happens if our flight is delayed?",
    a: <Placeholder>how flight delays are handled (free waiting time, what to do if the flight is very late)</Placeholder>,
  },
  {
    q: "Will all our luggage fit?",
    a: "Tell us how many large suitcases you're bringing when you book. The 12 & 14 seater takes about 8 to 10 medium suitcases and the 17 & 20 seater about 10 to 12, and we'll plan around anything bigger.",
  },
  {
    q: "Can you pick us up from a night flight?",
    a: "Yes. Pickup and drop are available 24×7, including late-night arrivals and early-morning departures.",
  },
];

const PICKUP_ANSWER =
  "Pickup and drop are at your hotel or villa, for the whole group in one vehicle. Send the address or a map pin when you ask for a quote.";

export const SIGHTSEEING_FAQS: FaqItem[] = [
  {
    q: "What isn't included in a sightseeing tour?",
    a: "The vehicle hire covers your vehicle and driver for the day. Entry tickets, the dolphin boat ride, the Mandovi river cruise and the Dudhsagar jeep safari are not included and are paid for separately.",
  },
  {
    q: "Which vehicle should our group book?",
    a: "Up to 14 people travel in the 12 & 14 seater tempo traveller and 15 to 20 in the 17 & 20 seater. The Force Urbania comes as a 12 or 17 seater, and groups of 21 to 40 can book a mini bus through our partner operators.",
  },
  {
    q: "Do you run shared coach (seat-in-coach) tours?",
    a: <Placeholder>whether shared (SIC) tours are offered, and for which circuits</Placeholder>,
  },
];

export const NORTH_GOA_FAQS: FaqItem[] = [
  {
    q: "How long does the North Goa sightseeing tour take?",
    a: "It's a full day of about 9 to 10 hours. It starts with pickup at your hotel or villa and ends with sunset at Chapora Fort before the drive back.",
  },
  {
    q: "What isn't included in the North Goa tour?",
    a: "The vehicle hire covers your vehicle and driver for the day. Entry tickets (for example at Snow Park Goa and Thunder World), the dolphin boat ride from Sinquerim and water sports at Baga are not included and are paid for separately.",
  },
  { q: "Where do you pick up from for the North Goa tour?", a: PICKUP_ANSWER },
];

export const SOUTH_GOA_FAQS: FaqItem[] = [
  {
    q: "How long does the South Goa sightseeing tour take?",
    a: "It's a full day of about 9 to 11 hours, from pickup at your hotel or villa to the evening river cruise on the Mandovi and the drive back.",
  },
  {
    q: "What isn't included in the South Goa tour?",
    a: "The vehicle hire covers your vehicle and driver for the day. Entry tickets, such as at the museum and the spice farm, and the Mandovi river cruise are not included and are paid for separately.",
  },
  { q: "Where do you pick up from for the South Goa tour?", a: PICKUP_ANSWER },
];

export const DUDHSAGAR_FAQS: FaqItem[] = [
  {
    q: "Can our vehicle go up to the waterfall?",
    a: "No. Private vehicles can only go as far as the Kulem/Mollem checkpoint. From there, the forest department's jeep safari takes you to the falls and back, and it's paid separately.",
  },
  {
    q: "How long does the Dudhsagar trip take?",
    a: "It's a full day of about 10 to 12 hours, from pickup at your hotel or villa to drop, including the jeep safari.",
  },
  {
    q: "What isn't included in the Dudhsagar trip?",
    a: "The vehicle hire covers your vehicle and driver from your hotel to the Kulem/Mollem checkpoint and back. The jeep safari and any entry tickets are not included and are paid for separately.",
  },
  {
    q: "Is the jeep safari open all year?",
    a: "No. The jeep safari closes during the monsoon. We check the safari is open before confirming your trip.",
  },
  { q: "Where do you pick up from for the Dudhsagar trip?", a: PICKUP_ANSWER },
  {
    q: "What should we bring?",
    a: "Water, snacks, a change of clothes, footwear that can get wet, a waterproof bag for phones, and cash for the jeep safari.",
  },
];

export const WEDDING_FAQS: FaqItem[] = [
  {
    q: "Can you handle transport for a whole wedding weekend?",
    a: "Send your schedule with the number of guests for each run: airport arrivals, hotel to venue, the ceremony and departures. We'll suggest which vehicles cover which runs and quote for the whole event.",
  },
  {
    q: "Can we decorate the vehicles?",
    a: <Placeholder>whether vehicle decoration is allowed, and what kind</Placeholder>,
  },
  {
    q: "What if we have more than 40 guests on one run?",
    a: "We'll combine vehicles: tempo travellers, the Urbania, and mini buses from our partner operators.",
  },
];

export const GROUP_FAQS: FaqItem[] = [
  {
    q: "Can you provide a GST invoice for company bookings?",
    a: <Placeholder>whether GST invoices are provided</Placeholder>,
  },
  {
    q: "Can a film or shoot crew carry equipment?",
    a: <Placeholder>crew and equipment transport, standby hours, anything to know</Placeholder>,
  },
  {
    q: "Can several vehicles travel together?",
    a: "Yes. For bigger groups we can send more than one vehicle with the same pickup time, so the whole group moves together.",
  },
];

export const OUTSTATION_FAQS: FaqItem[] = [
  {
    q: "Which places outside Goa do you go to?",
    a: <Placeholder>outstation routes you run</Placeholder>,
  },
  {
    q: "Are interstate permits and taxes covered?",
    a: <Placeholder>interstate permit and state entry tax: who arranges and pays</Placeholder>,
  },
  {
    q: "How is an outstation trip quoted?",
    a: "Send the route, dates and group size, and whether it's one way or a return trip. The quote covers the vehicle and driver for the whole trip.",
  },
];

/** Groups for the /faq/ page, in order. */
export const ALL_FAQ_GROUPS: { title: string; id: string; items: FaqItem[] }[] = [
  { title: "Booking and payment", id: "booking", items: BOOKING_FAQS },
  { title: "Tempo travellers", id: "tempo-traveller", items: TEMPO_FAQS },
  { title: "Force Urbania", id: "urbania", items: URBANIA_FAQS },
  { title: "Mini buses", id: "mini-bus", items: BUS_FAQS },
  { title: "Airport transfers", id: "airport", items: AIRPORT_FAQS },
  { title: "Sightseeing", id: "sightseeing", items: [...SIGHTSEEING_FAQS, ...NORTH_GOA_FAQS, ...SOUTH_GOA_FAQS] },
  { title: "Dudhsagar", id: "dudhsagar", items: DUDHSAGAR_FAQS },
  { title: "Weddings", id: "weddings", items: WEDDING_FAQS },
  { title: "Group trips", id: "groups", items: GROUP_FAQS },
  { title: "Outstation trips", id: "outstation", items: OUTSTATION_FAQS },
];
