import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CONTENT_UPDATED } from "@/lib/routes";
import { Prose } from "./Prose";

const UPDATED = new Date(`${CONTENT_UPDATED}T00:00:00`).toLocaleDateString("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/** Layout for the legal pages: breadcrumbs, title, last-updated date and the policy text. */
export function LegalPage({ title, path, children }: { title: string; path: string; children: ReactNode }) {
  return (
    <section className="py-10 sm:py-14">
      <div className="container-page">
        <Breadcrumbs items={[{ label: title, href: path }]} />
        <h1 className="mt-4 text-4xl font-extrabold text-forest sm:text-5xl">{title}</h1>
        <p className="mt-3 text-muted">Last updated: {UPDATED}</p>
        <Prose className="mt-10">{children}</Prose>
      </div>
    </section>
  );
}
