import type { ReactNode } from "react";
import type { Specs } from "@/lib/fleet";
import { Placeholder } from "@/components/ui/Placeholder";

function Row({ label, value, missing }: { label: string; value: string | null | undefined; missing: string }) {
  // undefined: deliberately not shown. null: owner still has to send it.
  if (value === undefined) return null;
  return (
    <div className="flex flex-col gap-0.5 border-b border-line py-2.5 last:border-0 sm:flex-row sm:gap-4">
      <dt className="w-24 shrink-0 font-semibold text-ink">{label}</dt>
      <dd className="text-muted">{value ?? <Placeholder>{missing}</Placeholder>}</dd>
    </div>
  );
}

export function SpecList({ specs }: { specs: Specs }) {
  return (
    <dl>
      <Row label="Capacity" value={specs.capacity} missing="capacity" />
      <Row label="Luggage" value={specs.luggage} missing="luggage space" />
      <Row label="AC" value={specs.ac} missing="AC details" />
      <Row label="Seats" value={specs.seats} missing="seat type and layout" />
    </dl>
  );
}

/** Spec list in a card, with an optional title (used for the Urbania's two variants). */
export function SpecCard({ title, specs, children }: { title?: string; specs: Specs; children?: ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
      {title && <h3 className="mb-2 text-2xl font-extrabold text-forest">{title}</h3>}
      <SpecList specs={specs} />
      {children}
    </div>
  );
}
