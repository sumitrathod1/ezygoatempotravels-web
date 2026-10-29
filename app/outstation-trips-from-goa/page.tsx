import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, RelatedLinks } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqList";
import { PageHero } from "@/components/sections/PageHero";
import { Band, Prose } from "@/components/sections/Prose";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { POLICY } from "@/lib/policy";
import { OUTSTATION_FAQS } from "@/lib/faqs";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { quoteMessage } from "@/lib/whatsapp";

const PATH = "/outstation-trips-from-goa/";

// Routes the owner runs (CONTENT-ANSWERS.md, 29 Oct 2026). Trips anywhere in India also start from Goa.
const ROUTES = ["Gokarna", "Hampi", "Kolhapur", "Belagavi (Belgaum)", "Mumbai", "Pune", "Kerala"];
const DESCRIPTION =
  "Group trips from Goa to Gokarna, Hampi, Kolhapur, Belagavi, Mumbai, Pune, Kerala and across India, by tempo traveller or Urbania with a driver.";

export const metadata = pageMetadata({
  title: "Outstation Trips from Goa by Tempo Traveller",
  description: DESCRIPTION,
  path: PATH,
});

export default function OutstationPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: "Outstation trips from Goa", description: DESCRIPTION, path: PATH })} />
      <PageHero
        crumbs={[{ label: "Outstation Trips from Goa", href: PATH }]}
        title="Outstation Trips from Goa"
        lead={
          <p>
            Taking your group beyond Goa? Travel in one vehicle with a driver, one way or there and back,
            instead of splitting into cars or juggling train and bus timings.
          </p>
        }
        quoteMessage={quoteMessage("an outstation trip")}
      />

      <Band>
        <SectionHeading eyebrow="Routes" title="Where we go" />
        <div className="rounded-2xl border border-line bg-white p-6 text-lg text-muted">
          <ul className="flex flex-wrap gap-2">
            {ROUTES.map((route) => (
              <li key={route} className="rounded-full bg-mint px-4 py-2 font-semibold text-forest">
                Goa to {route}
              </li>
            ))}
          </ul>
          <p className="mt-4">
            These are our most-asked trips. We can take your group anywhere in India, starting from Goa: send the
            route and dates and we&apos;ll quote for it.
          </p>
        </div>
      </Band>

      <Band sand>
        <div className="grid gap-10 lg:grid-cols-2">
          <Prose>
            <h2>How an outstation trip works</h2>
            <p>
              Tell us where you&apos;re going, the dates, how many people and whether it&apos;s one way or a
              return trip. For a multi-day trip, include the rough plan for each day and where you&apos;ll
              stay, so the quote covers the whole journey.
            </p>
            <p>
              Interstate travel needs the right permits, and some states charge an entry tax at the border. We
              handle the vehicle&apos;s permit. State entry tax, tolls and parking are paid by the customer.
            </p>
            <h3>Overnight trips</h3>
            <p>
              You can arrange the driver&apos;s stay, or pay a driver allowance instead. The driver gets proper
              rest before driving the next day. {POLICY.nightCharges}
            </p>
          </Prose>
          <Prose>
            <h2>Which vehicle?</h2>
            <p>
              Long drives are where seat comfort and luggage space matter most. Up to 14 people travel in the{" "}
              <Link href="/tempo-traveller-in-goa/#12-14-seater">12 &amp; 14 seater</Link> and 15 to 20 in the{" "}
              <Link href="/tempo-traveller-in-goa/#17-20-seater">17 &amp; 20 seater</Link>, both fully
              air-conditioned with high-back seats. For a more comfortable long ride, ask about the{" "}
              <Link href="/urbania-on-rent-goa/">Force Urbania</Link> in its 12 or 17 seat version.
            </p>
            <h2>Planning tips</h2>
            <ul>
              <li>Build in breaks every couple of hours on long drives.</li>
              <li>Ghat roads out of Goa are slower than they look on a map, especially in the monsoon.</li>
              <li>Tell us about big luggage, so it can be planned for on the way out and back.</li>
            </ul>
          </Prose>
        </div>
      </Band>

      <QuoteSection title="Request an outstation trip quote" defaultTripType="outstation" />

      <FaqSection items={OUTSTATION_FAQS} title="Outstation trip questions" sand />

      <RelatedLinks
        links={[
          { label: "Group tours in Goa", href: "/group-tours-goa/" },
          { label: "Tempo traveller hire", href: "/tempo-traveller-in-goa/" },
          { label: "Full fleet and photos", href: "/fleet/" },
          { label: "Contact us", href: "/contact/" },
        ]}
      />

      <CtaBand message={quoteMessage("an outstation trip")} />
    </>
  );
}
