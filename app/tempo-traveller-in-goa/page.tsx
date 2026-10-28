import { ServiceCard, VehicleCard } from "@/components/sections/Cards";
import { CtaBand, RelatedLinks } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqList";
import { HowBookingWorks } from "@/components/sections/HowBookingWorks";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { VehicleSection } from "@/components/sections/VehicleSection";
import { JsonLd } from "@/components/JsonLd";
import { PASSENGER_RANGES, VEHICLE_OPTIONS } from "@/lib/booking";
import { BOOKING_FAQS, TEMPO_FAQS } from "@/lib/faqs";
import { MINI_BUS, TEMPO_TRAVELLERS, TEMPO_TRAVELLER_17_20, URBANIA } from "@/lib/fleet";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { SERVICES } from "@/lib/services";
import { quoteMessage } from "@/lib/whatsapp";

const PATH = "/tempo-traveller-in-goa/";
const DESCRIPTION =
  "Rent a 12, 14, 17 or 20 seater tempo traveller with driver in Goa for airport transfers, sightseeing, weddings and group trips. Quote on WhatsApp.";

export const metadata = pageMetadata({
  title: "Tempo Traveller on Rent in Goa | 12, 14, 17 & 20 Seater",
  description: DESCRIPTION,
  path: PATH,
});

const FAQS = [...TEMPO_FAQS, BOOKING_FAQS[1], BOOKING_FAQS[2], BOOKING_FAQS[3], BOOKING_FAQS[5]];

export default function TempoTravellerPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: "Tempo traveller hire in Goa", description: DESCRIPTION, path: PATH })} />
      <PageHero
        crumbs={[{ label: "Tempo Traveller in Goa", href: PATH }]}
        title="Tempo Traveller on Rent in Goa"
        lead={
          <p>
            Hire a 12 or 14 seater, or a 17 or 20 seater tempo traveller, with a driver for airport
            transfers, sightseeing, weddings and group trips in Goa. Pickup and drop are available 24×7.
          </p>
        }
        quoteMessage={quoteMessage("a tempo traveller")}
        photo={TEMPO_TRAVELLER_17_20.photos.hero}
      >
        <nav aria-label="Jump to a vehicle size" className="mt-6">
          <ul className="flex flex-wrap gap-2">
            {TEMPO_TRAVELLERS.map((v) => (
              <li key={v.id}>
                <a
                  href={`#${v.anchor}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-forest/30 bg-white px-4 font-semibold text-forest hover:bg-mint"
                >
                  {v.shortName}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <section aria-labelledby="size-guide" className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading id="size-guide" eyebrow="Size guide" title="Choosing the right tempo traveller" />
            <div className="prose-body -mt-4 text-lg text-muted">
              <p>
                Start with the number of people. Up to 14 fit the 12 &amp; 14 seater. From 15 to 20, the 17
                &amp; 20 seater keeps everyone in one vehicle, and for groups of 15 or more we send the 20
                seater, so nobody is short of a seat.
              </p>
              <p>
                Then think about luggage. The 12 &amp; 14 seater takes about 8 to 10 medium suitcases
                behind the last row, and the 17 &amp; 20 seater about 10 to 12. A sightseeing day with
                small bags is no problem; for an airport run with big suitcases, tell us what you&apos;re
                carrying so we can plan for it.
              </p>
              <p>
                For more than 20 people, a mini bus from our partner operators is usually the better
                choice. If your group is staying in two places, or some people arrive later, mention that
                too: two smaller vehicles sometimes work better than one large one.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line bg-white">
            <table className="w-full text-left">
              <caption className="bg-forest px-5 py-3 text-left font-display text-lg font-bold text-white">
                Quick guide by group size
              </caption>
              <thead className="bg-mint text-sm">
                <tr>
                  <th scope="col" className="px-5 py-3">
                    Group size
                  </th>
                  <th scope="col" className="px-5 py-3">
                    Suggested vehicle
                  </th>
                </tr>
              </thead>
              <tbody>
                {PASSENGER_RANGES.map((range) => {
                  const option = VEHICLE_OPTIONS.find((o) => o.value === range.vehicle)!;
                  return (
                    <tr key={range.value} className="border-t border-line">
                      <td className="px-5 py-3 font-semibold">{range.label}</td>
                      <td className="px-5 py-3">
                        {option.href ? (
                          <a href={option.href} className="text-forest underline-offset-2 hover:underline">
                            {range.vehicle === "multiple" ? "We'll arrange more than one vehicle" : option.label}
                          </a>
                        ) : (
                          option.label
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className="border-t border-line px-5 py-3 text-sm text-muted">
              Mini buses are supplied by our partner operators. Want the Force Urbania instead? It comes as a
              12 or 17 seater.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="sizes-heading" className="bg-white py-16">
        <div className="container-page">
          <SectionHeading
            id="sizes-heading"
            eyebrow="Our tempo travellers"
            title="12 & 14 seater, and 17 & 20 seater"
            intro="Both come with a driver and can be booked for a single transfer, a full day or a longer trip."
          />
          {TEMPO_TRAVELLERS.map((vehicle, i) => (
            <VehicleSection key={vehicle.id} vehicle={vehicle} flip={i % 2 === 1} />
          ))}
        </div>
      </section>

      <section aria-labelledby="trips-heading" className="py-16">
        <div className="container-page">
          <SectionHeading id="trips-heading" eyebrow="Popular trips" title="Where groups take a tempo traveller" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((service) => (
              <ServiceCard key={service.href} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="other-vehicles" className="bg-sand py-16">
        <div className="container-page">
          <SectionHeading id="other-vehicles" eyebrow="Other vehicles" title="Need something more premium, or bigger?" />
          <div className="grid gap-5 sm:grid-cols-2 lg:max-w-3xl">
            <VehicleCard vehicle={URBANIA} />
            <VehicleCard vehicle={MINI_BUS} />
          </div>
        </div>
      </section>

      <QuoteSection title="Request a tempo traveller quote" />

      <div className="bg-sand">
        <HowBookingWorks />
      </div>

      <FaqSection items={FAQS} title="Tempo traveller questions" />

      <RelatedLinks
        links={[
          { label: "Full fleet and photos", href: "/fleet/" },
          { label: "Force Urbania on rent", href: URBANIA.href },
          { label: "Goa airport transfers", href: "/goa-airport-transfer/" },
          { label: "Contact us", href: "/contact/" },
        ]}
      />

      <CtaBand message={quoteMessage("a tempo traveller")} />
    </>
  );
}
