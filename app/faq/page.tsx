import { JsonLd } from "@/components/JsonLd";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqList } from "@/components/sections/FaqList";
import { PageHero } from "@/components/sections/PageHero";
import { Band } from "@/components/sections/Prose";
import { ALL_FAQ_GROUPS } from "@/lib/faqs";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const PATH = "/faq/";

export const metadata = pageMetadata({
  title: "FAQ | Tempo Traveller Hire in Goa",
  description:
    "Answers about booking, payment, vehicle sizes, luggage, airport transfers, sightseeing, Dudhsagar, weddings and mini buses with Ezy Goa Tempo Travels.",
  path: PATH,
});

// One FAQPage for the whole page (the per-section FaqSection schema isn't used here).
const schema = faqSchema(ALL_FAQ_GROUPS.flatMap((g) => g.items));

export default function FaqPage() {
  return (
    <>
      {schema && <JsonLd data={schema} />}
      <PageHero
        crumbs={[{ label: "FAQ", href: PATH }]}
        title="Frequently Asked Questions"
        lead={<p>Can&apos;t find your answer? Ask us on WhatsApp or give us a call.</p>}
      >
        <nav aria-label="FAQ topics" className="mt-6">
          <ul className="flex flex-wrap gap-2">
            {ALL_FAQ_GROUPS.map((g) => (
              <li key={g.id}>
                <a
                  href={`#${g.id}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-forest/30 bg-white px-4 font-semibold text-forest hover:bg-mint"
                >
                  {g.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <Band>
        <div className="mx-auto max-w-3xl space-y-12">
          {ALL_FAQ_GROUPS.map((group) => (
            <section key={group.id} id={group.id} aria-labelledby={`${group.id}-heading`}>
              <h2 id={`${group.id}-heading`} className="mb-4 text-3xl font-extrabold text-forest">
                {group.title}
              </h2>
              <FaqList items={group.items} />
            </section>
          ))}
        </div>
      </Band>

      <CtaBand />
    </>
  );
}
