import type { ReactNode } from "react";

/** Long-form copy: consistent headings, lists and links for service, info and legal pages. */
export function Prose({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`max-w-3xl text-lg text-muted [&_a]:font-medium [&_a]:text-forest [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-3xl [&_h2]:font-extrabold [&_h2]:text-forest [&_h2:first-child]:mt-0 [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-ink [&_li]:mt-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-4 [&_p:first-child]:mt-0 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:list-disc [&_ul]:pl-6 ${className}`}
    >
      {children}
    </div>
  );
}

/** A content section on a light or sand background. */
export function Band({
  children,
  sand = false,
  label,
  id,
}: {
  children: ReactNode;
  sand?: boolean;
  /** Accessible name when the section has no visible heading. */
  label?: string;
  id?: string;
}) {
  return (
    <section id={id} aria-label={label} className={`py-14 sm:py-16 ${sand ? "bg-sand" : ""}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}
