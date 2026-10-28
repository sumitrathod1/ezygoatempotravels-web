import { Check, ShieldCheck, Wallet } from "lucide-react";
import type { ReactNode } from "react";
import { CREDENTIALS } from "@/lib/business";
import type { SightImage, Stop } from "@/lib/tours";
import { FleetPhoto } from "@/components/ui/FleetPhoto";
import { ImageSlot } from "@/components/ui/Placeholder";

/** Registration details. Renders nothing until the owner supplies at least one (§9). */
export function CredentialsBlock() {
  const items = CREDENTIALS.filter((c) => c.value);
  if (items.length === 0) return null;
  return (
    <div className="rounded-2xl border border-line bg-white p-6">
      <h2 className="flex items-center gap-2 text-2xl font-extrabold text-forest">
        <ShieldCheck className="size-6" aria-hidden="true" />
        Registration details
      </h2>
      <dl className="mt-4 space-y-2">
        {items.map((c) => (
          <div key={c.label} className="flex flex-col sm:flex-row sm:gap-3">
            <dt className="font-semibold text-ink">{c.label}:</dt>
            <dd className="text-muted">{c.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** Two lists side by side: what the booking covers and what's paid for on the day. */
export function IncludedList({ included, separate }: { included: ReactNode[]; separate: ReactNode[] }) {
  const column = (title: string, items: ReactNode[], Icon: typeof Check, iconClass: string) => (
    <div className="rounded-2xl border border-line bg-white p-6">
      <h3 className="text-xl font-bold text-ink">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-muted">
            <Icon className={`mt-1 size-5 shrink-0 ${iconClass}`} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {column("Included in the vehicle hire", included, Check, "text-forest")}
      {column("Not included (paid separately)", separate, Wallet, "text-gold")}
    </div>
  );
}

/** A sightseeing photo, always labelled "Representative image"; a placeholder until it's supplied. */
export function SightPhoto({
  image,
  sizes,
  aspect = "aspect-[16/9]",
  preload = false,
  className = "",
}: {
  image: SightImage;
  sizes: string;
  aspect?: string;
  preload?: boolean;
  className?: string;
}) {
  if (!image.src) return <ImageSlot label={image.alt} file={image.file} className={`${aspect} ${className}`} />;
  return (
    <FleetPhoto
      photo={{ src: image.src, width: 1600, height: 900, alt: image.alt, label: "representative" }}
      sizes={sizes}
      aspect={aspect}
      preload={preload}
      className={className}
    />
  );
}

/** Numbered tour stops in order, each with its photo. Optional stops are marked as such. */
export function StopList({ stops }: { stops: Stop[] }) {
  const main = stops.filter((s) => !s.optional);
  return (
    <ol className="space-y-4">
      {stops.map((stop) => {
        const n = main.indexOf(stop) + 1;
        return (
          <li
            key={stop.name}
            className={`grid gap-4 rounded-2xl border border-line bg-white p-4 sm:p-5 ${
              stop.image ? "sm:grid-cols-[12rem_1fr]" : ""
            }`}
          >
            {stop.image && (
              <SightPhoto image={stop.image} sizes="(min-width: 640px) 192px, 100vw" aspect="aspect-[4/3]" />
            )}
            <div className="flex gap-4">
              <span
                className={`grid size-9 shrink-0 place-items-center rounded-full font-display font-bold ${
                  stop.optional ? "border-2 border-dashed border-gold text-gold" : "bg-sun text-night"
                }`}
                aria-hidden={stop.optional ? "true" : undefined}
              >
                {stop.optional ? "+" : n}
              </span>
              <div>
                <h3 className="text-xl font-bold text-ink">
                  {stop.name}
                  {stop.where && <span className="font-sans text-base font-normal text-muted"> · {stop.where}</span>}
                </h3>
                {stop.optional && (
                  <p className="mt-1 text-sm font-semibold text-gold">Optional stop on the way back</p>
                )}
                <p className="mt-1 text-muted">{stop.note}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
