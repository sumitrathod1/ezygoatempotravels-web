// dataLayer events. Names and parameters must match TRACKING-SETUP.md exactly.
// Never put a name, phone number or email address into an event.

export type ClickLocation =
  | "header"
  | "hero"
  | "sticky_bar"
  | "footer"
  | "service_cta"
  | "vehicle_cta"
  | "content";

export type ContactEvent = "whatsapp_click" | "call_click" | "email_click";

type TrackedEvent =
  | { event: ContactEvent; click_location: ClickLocation }
  | { event: "booking_form_submit"; trip_type: string; vehicle: string; passengers: string };

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function pushEvent(params: TrackedEvent): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  // GTM's data model keeps old keys between pushes, so every key is set on every event.
  // Otherwise a whatsapp_click after a form submit would still carry the form's trip_type.
  window.dataLayer.push({
    click_location: undefined,
    trip_type: undefined,
    vehicle: undefined,
    passengers: undefined,
    ...params,
    page_path: window.location.pathname,
  });
}

/** Which contact event a link fires, based on its href. */
export function contactEventFor(href: string): ContactEvent | null {
  if (href.startsWith("tel:")) return "call_click";
  if (href.startsWith("mailto:")) return "email_click";
  if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) return "whatsapp_click";
  return null;
}
