"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { PHOTO_LABEL_TEXT, type Photo } from "@/lib/fleet";

export interface LightboxProps {
  photos: Photo[];
  index: number;
  onIndex: (index: number) => void;
  onClose: () => void;
}

/** Full-screen photo viewer on a native <dialog>: Esc closes it, focus stays inside. */
export function Lightbox({ photos, index, onIndex, onClose }: LightboxProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const count = photos.length;
  const photo = photos[index];

  useEffect(() => {
    const dialog = ref.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") onIndex((index + 1) % count);
      if (e.key === "ArrowLeft") onIndex((index - 1 + count) % count);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, count, onIndex]);

  const close = () => ref.current?.close();
  const navButton =
    "grid size-12 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25 focus-visible:outline-sun";

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      // A click on the backdrop (the dialog element itself) closes it.
      onClick={(e) => e.target === e.currentTarget && close()}
      aria-label="Photo viewer"
      className="m-0 h-dvh max-h-none w-full max-w-none bg-night/95 p-0 text-white backdrop:bg-black/70"
    >
      <div className="flex h-full flex-col p-4 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-white/80">
            {index + 1} / {count}
          </p>
          <button type="button" onClick={close} aria-label="Close photo viewer" className={navButton}>
            <X className="size-6" aria-hidden="true" />
          </button>
        </div>
        <div className="relative my-4 flex-1">
          <Image src={photo.src} alt={photo.alt} fill sizes="100vw" className="object-contain" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => onIndex((index - 1 + count) % count)}
            aria-label="Previous photo"
            className={navButton}
          >
            <ChevronLeft className="size-6" aria-hidden="true" />
          </button>
          <p className="text-center text-sm text-white/90">
            {photo.alt}
            {photo.label && <span className="block text-white/70">{PHOTO_LABEL_TEXT[photo.label]}</span>}
          </p>
          <button
            type="button"
            onClick={() => onIndex((index + 1) % count)}
            aria-label="Next photo"
            className={navButton}
          >
            <ChevronRight className="size-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </dialog>
  );
}
