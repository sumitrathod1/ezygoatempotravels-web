"use client";

import { useEffect } from "react";
import { contactEventFor, pushEvent, type ClickLocation } from "@/lib/track";

/**
 * One delegated listener for every tel:, wa.me and mailto: link on the site, so no link can be
 * missed. The location comes from the nearest data-click-location attribute.
 * Links inside [data-no-track] are skipped (e.g. the booking form's "open WhatsApp again" link,
 * which would otherwise count the same lead twice).
 */
export function TrackingListener() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target instanceof Element ? e.target : null;
      const link = target?.closest("a[href]");
      if (!link || link.closest("[data-no-track]")) return;

      const event = contactEventFor(link.getAttribute("href") ?? "");
      if (!event) return;

      const location = (link.closest("[data-click-location]")?.getAttribute("data-click-location") ??
        "content") as ClickLocation;
      pushEvent({ event, click_location: location });
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
