"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";
import { ADDRESS_ONE_LINE, BUSINESS } from "@/lib/business";

const EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS_ONE_LINE)}&output=embed`;

/** Static placeholder; Google Maps only loads after a click (§10). */
export function MapFacade() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={EMBED_URL}
        title={`Map showing ${BUSINESS.name}, ${ADDRESS_ONE_LINE}`}
        className="h-80 w-full rounded-2xl border-0"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    );
  }

  return (
    <div className="flex h-80 flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-mint p-6 text-center">
      <MapPin className="size-10 text-forest" aria-hidden="true" />
      <p className="max-w-xs text-ink">{ADDRESS_ONE_LINE}</p>
      <button type="button" onClick={() => setLoaded(true)} className="btn btn-forest">
        Show map
      </button>
      <p className="text-sm text-muted">Loads Google Maps</p>
    </div>
  );
}
