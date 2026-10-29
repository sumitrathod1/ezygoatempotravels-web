import Link from "next/link";
import { Info, Users } from "lucide-react";
import { Gallery } from "@/components/gallery/Gallery";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, RelatedLinks } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqList";
import { PageHero } from "@/components/sections/PageHero";
import { Band, Prose } from "@/components/sections/Prose";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { WhatsAppLink } from "@/components/ui/ContactLinks";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { POLICY } from "@/lib/policy";
import { BOOKING_FAQS, BUS_FAQS } from "@/lib/faqs";
import { MINI_BUS, MINI_BUS_CAPACITIES } from "@/lib/fleet";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { quoteMessage } from "@/lib/whatsapp";

const PATH = "/bus-hire-goa/";
const DESCRIPTION =
  "Mini buses with 26, 30, 38 or 40 seats for groups in Goa, arranged through our partner operators. Weddings, events and airport groups.";

export const metadata = pageMetadata({
  title: "Mini Bus Hire in Goa | 26, 30, 38 & 40 Seater",
  description: DESCRIPTION,
  path: PATH,
});

/** Which group each mini bus size suits, from the booking form's group-size ranges. */
const SIZE_FOR: Record<(typeof MINI_BUS_CAPACITIES)[number], string> = {
  26: "Groups of 21 to 26",
  30: "Groups of 27 to 30",
  38: "Groups of 31 to 38",
  40: "Groups of 39 to 40",
};

export default function BusHirePage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: "Mini bus hire in Goa", description: DESCRIPTION, path: PATH })} />
      <PageHero
        crumbs={[{ label: "Mini Bus Hire in Goa", href: PATH }]}
        title="Mini Bus Hire in Goa"
        lead={
          <p>
            For groups too big for a tempo traveller, we arrange mini buses with 26, 30, 38 or 40 seats.
            The buses are supplied by partner operators we work with; they are not our own vehicles.
          </p>
        }
        quoteMessage={quoteMessage("a mini bus")}
        photo={MINI_BUS.photos.hero}
      />

      <Band>
        <div className="flex gap-4 rounded-2xl border-2 border-gold/40 bg-sun/15 p-5 sm:p-6">
          <Info className="mt-1 size-6 shrink-0 text-gold" aria-hidden="true" />
          <div>
            <h2 className="text-2xl font-extrabold text-forest">Partner-operated buses</h2>
            <p className="mt-2 text-lg text-muted">
              Our own fleet is the tempo travellers and the Force Urbania. Mini buses come from partner
              operators: you tell us your group size and plan, we check availability with them and send you
              the quote. The photos on this page are representative images, not a specific bus.
            </p>
            <p className="mt-2 text-lg text-muted">
              {POLICY.partnerBus}
            </p>
          </div>
        </div>
      </Band>

      <Band sand>
        <SectionHeading
          eyebrow="Sizes"
          title="26, 30, 38 and 40 seaters"
          intro={`Pick the size by group, with a seat or two to spare. Every bus is ${MINI_BUS.specs!.ac!.toLowerCase()}. Luggage space: ${MINI_BUS.specs!.luggage!.charAt(0).toLowerCase()}${MINI_BUS.specs!.luggage!.slice(1)}`}
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MINI_BUS_CAPACITIES.map((seats) => (
            <li key={seats} className="flex flex-col rounded-2xl border border-line bg-white p-5">
              <p className="inline-flex items-center gap-1.5 self-start rounded-full bg-mint px-3 py-1 text-sm font-semibold text-forest">
                <Users className="size-4" aria-hidden="true" />
                {seats} seats
              </p>
              <h3 className="mt-3 text-xl font-bold text-ink">{seats} Seater Mini Bus</h3>
              <p className="mt-1 flex-1 text-muted">{SIZE_FOR[seats]}</p>
              <WhatsAppLink
                location="vehicle_cta"
                message={quoteMessage(`a ${seats} seater mini bus`)}
                aria-label={`Get a quote on WhatsApp for a ${seats} seater mini bus`}
                className="btn btn-sun mt-4 w-full px-3 text-[0.95rem] whitespace-nowrap"
              >
                <WhatsAppIcon className="size-5" />
                Get a quote on WhatsApp
              </WhatsAppLink>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-muted">More than 40 people? We&apos;ll arrange more than one vehicle.</p>
      </Band>

      <Band>
        <div className="grid gap-10 lg:grid-cols-2">
          <Prose>
            <h2>When a mini bus makes sense</h2>
            <p>
              A <Link href="/tempo-traveller-in-goa/">tempo traveller</Link> takes up to 20 people. Beyond that,
              one mini bus is usually simpler than two smaller vehicles: one pickup time, one driver to
              coordinate with, and everyone arriving at the venue together.
            </p>
            <ul>
              <li>
                <strong>Weddings:</strong> moving a large batch of guests between hotels and the venue. See{" "}
                <Link href="/wedding-transport-goa/">wedding transport</Link>.
              </li>
              <li>
                <strong>Conferences and offsites:</strong> hotel to venue shuttles for a whole team.
              </li>
              <li>
                <strong>Airport groups:</strong> a big group landing on the same flight at Mopa or Dabolim.
              </li>
              <li>
                <strong>College and school trips:</strong> a full batch on one sightseeing day.
              </li>
            </ul>
          </Prose>
          <Prose>
            <h2>Mixing vehicles</h2>
            <p>
              Groups don&apos;t always split neatly. A wedding might need a mini bus for guests, the{" "}
              <Link href="/urbania-on-rent-goa/">Urbania</Link> for the family and a tempo traveller for late
              arrivals. Tell us the whole plan and we&apos;ll suggest a combination.
            </p>
            <p>
              Send the hotel or venue address, or a map pin, when you ask for a quote, and the bus comes
              straight there.
            </p>
          </Prose>
        </div>
      </Band>

      <Band sand>
        <SectionHeading eyebrow="Photos" title="Mini bus photos" intro="Representative images: the bus supplied depends on the partner operator." />
        <Gallery photos={MINI_BUS.photos.gallery} />
      </Band>

      <QuoteSection
        title="Request a mini bus quote"
        intro="Choose your group size and the form suggests a bus size. Your details open in WhatsApp, ready to send."
      />

      <FaqSection items={[...BUS_FAQS, BOOKING_FAQS[1], BOOKING_FAQS[2]]} title="Mini bus questions" sand />

      <RelatedLinks
        links={[
          { label: "Full fleet and photos", href: "/fleet/" },
          { label: "Tempo traveller hire", href: "/tempo-traveller-in-goa/" },
          { label: "Wedding transport", href: "/wedding-transport-goa/" },
          { label: "Contact us", href: "/contact/" },
        ]}
      />

      <CtaBand message={quoteMessage("a mini bus")} />
    </>
  );
}
