import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { absoluteUrl } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

export interface Crumb {
  label: string;
  href: string;
}

/** Visible breadcrumbs plus BreadcrumbList JSON-LD. "Home" is added automatically. */
export function Breadcrumbs({ items, light = false }: { items: Crumb[]; light?: boolean }) {
  const all = [{ label: "Home", href: "/" }, ...items];

  return (
    <>
      <nav aria-label="Breadcrumb" className={light ? "text-white/80" : "text-muted"}>
        <ol className="flex flex-wrap items-center gap-1 text-sm">
          {all.map((crumb, i) => {
            const last = i === all.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="size-4 opacity-60" aria-hidden="true" />}
                {last ? (
                  <span aria-current="page" className={light ? "text-white" : "text-ink"}>
                    {crumb.label}
                  </span>
                ) : (
                  <Link href={crumb.href} className="hover:underline">
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((crumb, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: crumb.label,
            item: absoluteUrl(crumb.href),
          })),
        }}
      />
    </>
  );
}
