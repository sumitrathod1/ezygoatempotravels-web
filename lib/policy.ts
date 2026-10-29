// Booking, payment and cancellation terms, from the owner's answers (CONTENT-ANSWERS.md, 29 Oct 2026).
// One source for every page that states them: FAQs, "How booking works", terms, cancellation policy.
// No amounts in rupees anywhere on the site.

export const POLICY = {
  advance: "A part advance of about 20% of the quote, paid by UPI, confirms your booking.",
  balance: "The balance is paid at the end of the trip.",
  payment: "We accept UPI, cash and bank transfer. We don't take cards.",

  included: "Fuel and driver charges are included in the quote.",
  extras:
    "Tolls, parking, state entry tax on outstation trips, the driver's allowance on overnight trips, and night charges for driving between 10 PM and 6 AM are extra.",
  notIncluded: "Entry tickets, boat rides, river cruises and the Dudhsagar jeep safari are not included.",
  nightCharges: "Night charges apply for driving between 10 PM and 6 AM.",

  freeCancellation: "Free cancellation up to 24 hours before pickup.",
  lateCancellation:
    "If you cancel less than 24 hours before pickup, or the group doesn't turn up, the advance isn't refunded, because the vehicle is blocked for the day.",
  advanceRefund: "The advance is refunded in full if you cancel 24 hours or more before pickup.",
  refundMethod: "Refunds go back to the same UPI ID or bank account within 5–7 working days.",
  weCancel: "If we have to cancel, you choose: a full refund of your advance, or a replacement vehicle.",
  noShow:
    "The driver waits 30 minutes after the pickup time. After that, the booking can be treated as a no-show and the advance isn't refunded.",
  runningLate: "Running late? Call or WhatsApp us, and we'll try to adjust the plan.",
  partnerBus:
    "Booking and payment for mini buses are through us, under the same cancellation policy. We confirm the bus and driver details on WhatsApp before the trip.",

  airportDelay:
    "The driver tracks your flight, and delays cost nothing extra. The driver waits up to 60 minutes after the confirmed pickup time.",
  meetingPoint:
    "Before you land, the driver sends their name, phone number and vehicle number on WhatsApp, and meets the group outside the arrival exit at Mopa or Dabolim.",
} as const;

/** One line for the "How booking works" box and the FAQ. */
export const CANCELLATION_SUMMARY = `${POLICY.freeCancellation} After that, or if the group doesn't turn up, the advance isn't refunded.`;
