import { Camera } from "lucide-react";
import type { ReactNode } from "react";

// Content the owner still has to supply. The word PLACEHOLDER is deliberate: the launch
// check in scripts/verify-site.mjs fails while any of these are still rendered.

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded bg-sun/40 px-1.5 py-0.5 font-medium text-night ring-1 ring-gold/40">
      PLACEHOLDER: {children}
    </mark>
  );
}

/** Space for a representative photo that hasn't been supplied yet: shows its label and target file. */
export function ImageSlot({ label, file, className = "" }: { label: string; file: string; className?: string }) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-1.5 overflow-hidden rounded-2xl border-2 border-dashed border-gold/50 bg-sand p-3 pb-9 text-center text-sm text-muted ${className}`}
    >
      <Camera className="size-6 shrink-0 text-gold" aria-hidden="true" />
      <span>PLACEHOLDER: photo needed: {label}</span>
      <span className="text-xs break-all text-muted/80">public/images/sightseeing/{file}</span>
      <span className="absolute bottom-2 left-2 rounded-md bg-night/80 px-2 py-1 text-xs text-white">
        Representative image
      </span>
    </div>
  );
}

/** Space for a real photo that hasn't been supplied yet. */
export function PhotoSlot({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-gold/50 bg-sand p-4 text-center text-sm text-muted ${className}`}
    >
      <Camera className="size-6 text-gold" aria-hidden="true" />
      <span>PLACEHOLDER: photo of {label}</span>
    </div>
  );
}
