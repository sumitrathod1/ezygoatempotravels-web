import { ChevronDown } from "lucide-react";
import { faqSchema, type FaqItem } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "./SectionHeading";

export type { FaqItem };

/** Native <details> accordion: works without JavaScript. */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.q} className="group rounded-2xl border border-line bg-white">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-lg font-semibold text-ink">
            {item.q}
            <ChevronDown
              className="size-5 shrink-0 text-forest transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="border-t border-line px-5 py-4 text-muted">{item.a}</div>
        </details>
      ))}
    </div>
  );
}

/** FAQ section with FAQPage schema. One per page: the /faq/ page builds its own combined schema. */
export function FaqSection({
  items,
  title = "Frequently asked questions",
  sand = false,
}: {
  items: FaqItem[];
  title?: string;
  sand?: boolean;
}) {
  const schema = faqSchema(items);
  return (
    <section aria-labelledby="faq-heading" className={`py-16 ${sand ? "bg-sand" : ""}`}>
      <div className="container-page max-w-3xl">
        <SectionHeading id="faq-heading" eyebrow="FAQ" title={title} />
        <FaqList items={items} />
      </div>
      {schema && <JsonLd data={schema} />}
    </section>
  );
}
