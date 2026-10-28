"use client";

import { useState, type ComponentType } from "react";
import type { Photo } from "@/lib/fleet";
import { FleetPhoto } from "@/components/ui/FleetPhoto";
import type { LightboxProps } from "./Lightbox";

/** Thumbnail grid. The lightbox code is only downloaded when someone opens a photo (§10). */
export function Gallery({ photos }: { photos: Photo[] }) {
  const [Lightbox, setLightbox] = useState<ComponentType<LightboxProps> | null>(null);
  const [index, setIndex] = useState<number | null>(null);

  async function open(i: number) {
    if (!Lightbox) {
      const mod = await import("./Lightbox");
      setLightbox(() => mod.Lightbox);
    }
    setIndex(i);
  }

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo, i) => (
          <li key={photo.src}>
            <button
              type="button"
              onClick={() => open(i)}
              aria-label={`View larger: ${photo.alt}`}
              className="block w-full rounded-2xl transition-opacity hover:opacity-90"
            >
              <FleetPhoto
                as="span"
                photo={photo}
                sizes="(min-width: 1024px) 270px, (min-width: 640px) 33vw, 50vw"
                aspect="aspect-[4/3]"
              />
            </button>
          </li>
        ))}
      </ul>
      {Lightbox && index !== null && (
        <Lightbox photos={photos} index={index} onIndex={setIndex} onClose={() => setIndex(null)} />
      )}
    </>
  );
}
