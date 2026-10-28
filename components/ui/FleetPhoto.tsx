import Image from "next/image";
import { PHOTO_LABEL_TEXT, type Photo } from "@/lib/fleet";

interface FleetPhotoProps {
  photo: Photo;
  /** next/image sizes attribute for the slot this photo fills. */
  sizes: string;
  /** Aspect ratio of the frame; the photo is cropped to fill it. */
  aspect?: string;
  /** Hero image: preloaded because it's the page's LCP element. */
  preload?: boolean;
  className?: string;
  /** "span" when the photo sits inside a button (a <figure> isn't allowed there). */
  as?: "figure" | "span";
}

/** A fleet photo in a fixed frame, with its "Representative image" label where one applies. */
export function FleetPhoto({
  photo,
  sizes,
  aspect = "aspect-[16/9]",
  preload = false,
  className = "",
  as = "figure",
}: FleetPhotoProps) {
  const Frame = as;
  const Caption = as === "figure" ? "figcaption" : "span";
  return (
    <Frame className={`relative block overflow-hidden rounded-2xl bg-sand ${aspect} ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover"
        style={photo.position ? { objectPosition: photo.position } : undefined}
      />
      {photo.label && (
        <Caption className="absolute bottom-2 left-2 max-w-[calc(100%-1rem)] rounded-md bg-night/80 px-2 py-1 text-left text-xs leading-snug text-white">
          {PHOTO_LABEL_TEXT[photo.label]}
        </Caption>
      )}
    </Frame>
  );
}
