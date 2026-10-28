import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, RelatedLinks } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqList";
import { PageHero } from "@/components/sections/PageHero";
import { Band, Prose } from "@/components/sections/Prose";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Placeholder } from "@/components/ui/Placeholder";
import { WEDDING_FAQS } from "@/lib/faqs";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { quoteMessage } from "@/lib/whatsapp";

const PATH = "/wedding-transport-goa/";
const DESCRIPTION =
  "Wedding transport in Goa: guest shuttles, airport arrivals and family transfers by tempo traveller, Force Urbania and mini bus, with drivers.";

export const metadata = pageMetadata({
  title: "Wedding Transport in Goa | Tempo Traveller & Bus Hire",
  description: DESCRIPTION,
  path: PATH,
});

export default function WeddingPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: "Wedding transport in Goa", description: DESCRIPTION, path: PATH })} />
      <PageHero
        crumbs={[{ label: "Wedding Transport in Goa", href: PATH }]}
        title="Wedding Transport in Goa"
        lead={
          <p>
            Getting guests from the airport to the hotel, from the hotel to the venue and home again is one
            of the busiest parts of a Goa wedding. We move them in tempo travellers, the Force Urbania and,
            for big batches, mini buses from our partner operators.
          </p>
        }
        quoteMessage={quoteMessage("wedding transport")}
      />

      <Band>
        <div className="grid gap-10 lg:grid-cols-2">
          <Prose>
            <h2>The runs a wedding usually needs</h2>
            <ul>
              <li>
                <strong>Airport arrivals</strong> at Mopa or Dabolim as guests fly in, often across a day or
                two. See <Link href="/goa-airport-transfer/">airport transfers</Link>.
              </li>
              <li>
                <strong>Hotel to venue shuttles</strong> for each function: mehendi, sangeet, the ceremony,
                the reception.
              </li>
              <li>
                <strong>Family transfers</strong> for the couple&apos;s close family, often in the{" "}
                <Link href="/urbania-on-rent-goa/">Force Urbania</Link>.
              </li>
              <li>
                <strong>Departures</strong> back to the airport or station once the celebrations are over.
              </li>
            </ul>
            <h3>Baraat</h3>
            <p>
              <Placeholder>whether baraat transport is offered, and how it works</Placeholder>
            </p>
          </Prose>
          <Prose>
            <h2>Choosing vehicles for each run</h2>
            <p>
              Match the vehicle to the number of guests on each run rather than the size of the wedding. A
              batch of 14 fits the <Link href="/tempo-traveller-in-goa/#12-14-seater">12 &amp; 14 seater</Link>, up
              to 20 the <Link href="/tempo-traveller-in-goa/#17-20-seater">17 &amp; 20 seater</Link>, and larger
              batches a <Link href="/bus-hire-goa/">mini bus</Link> from our partner operators. The Urbania, in its
              12 or 17 seat version, is the usual pick for the family.
            </p>
            <h2>What helps us plan</h2>
            <ul>
              <li>The schedule for each function, with start times and venues.</li>
              <li>How many guests travel on each run, and from which hotels.</li>
              <li>
                Whether the venue&apos;s approach road suits a large vehicle. Some beach and village venues are
                down narrow lanes.
              </li>
              <li>One contact person on your side for the day, so changes reach the drivers quickly.</li>
            </ul>
            <p>
              Leave a buffer between runs. Guests rarely leave a function on time, and a little slack keeps
              the next shuttle from running late.
            </p>
          </Prose>
        </div>
      </Band>

      <QuoteSection
        sand
        title="Request a wedding transport quote"
        intro="Start with the main details here and add the full schedule in the WhatsApp chat."
        defaultTripType="wedding"
      />

      <FaqSection items={WEDDING_FAQS} title="Wedding transport questions" />

      <RelatedLinks
        links={[
          { label: "Force Urbania on rent", href: "/urbania-on-rent-goa/" },
          { label: "Mini bus hire", href: "/bus-hire-goa/" },
          { label: "Full fleet and photos", href: "/fleet/" },
          { label: "Contact us", href: "/contact/" },
        ]}
      />

      <CtaBand message={quoteMessage("wedding transport")} />
    </>
  );
}
