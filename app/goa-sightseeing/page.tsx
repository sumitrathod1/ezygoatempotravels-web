import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, RelatedLinks } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqList";
import { SightPhoto } from "@/components/sections/Misc";
import { PageHero } from "@/components/sections/PageHero";
import { Band, Prose } from "@/components/sections/Prose";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { WhatsAppLink } from "@/components/ui/ContactLinks";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { SIGHTSEEING_FAQS } from "@/lib/faqs";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { SIGHTSEEING_HERO, TOURS } from "@/lib/tours";
import { quoteMessage } from "@/lib/whatsapp";

const PATH = "/goa-sightseeing/";
const DESCRIPTION =
  "Goa sightseeing for groups in one vehicle with a driver: North Goa, South Goa and Dudhsagar day trips by tempo traveller, Urbania or mini bus.";

export const metadata = pageMetadata({
  title: "Goa Sightseeing by Tempo Traveller | Group Tours",
  description: DESCRIPTION,
  path: PATH,
});

export default function SightseeingHubPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: "Goa sightseeing for groups", description: DESCRIPTION, path: PATH })} />
      <PageHero
        crumbs={[{ label: "Goa Sightseeing", href: PATH }]}
        title="Goa Sightseeing for Groups"
        lead={
          <p>
            Three full-day trips for groups travelling together: one tempo traveller, Urbania or mini bus for the
            whole group, with pickup from your hotel or villa. Choose a day out below.
          </p>
        }
        quoteMessage={quoteMessage("Goa sightseeing")}
        media={
          <SightPhoto
            image={SIGHTSEEING_HERO}
            sizes="(min-width: 1152px) 540px, (min-width: 1024px) 46vw, 100vw"
            preload
          />
        }
      />

      <Band>
        <SectionHeading eyebrow="Day trips" title="Choose a day out" />
        <ul className="grid gap-5 lg:grid-cols-3">
          {TOURS.map((tour) => (
            <li key={tour.slug} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white">
              <SightPhoto
                image={tour.hero}
                sizes="(min-width: 1024px) 370px, 100vw"
                className="rounded-none"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-extrabold text-forest">
                  <Link href={tour.path} className="hover:underline">
                    {tour.name}
                  </Link>
                </h3>
                <p className="mt-1 flex items-center gap-2 text-[0.95rem] font-medium text-muted">
                  <Clock className="size-4 text-forest" aria-hidden="true" />
                  {tour.duration}
                </p>
                <ol className="mt-4 flex-1 space-y-1.5 text-[0.95rem] text-ink">
                  {tour.stops.map((stop, i) => (
                    <li key={stop.name} className="flex gap-2">
                      <span className="w-5 shrink-0 text-right font-semibold text-gold">
                        {stop.optional ? "+" : `${i + 1}.`}
                      </span>
                      <span>
                        {stop.name}
                        {stop.where && <span className="text-muted"> ({stop.where})</span>}
                        {stop.optional && <span className="text-muted"> (optional)</span>}
                      </span>
                    </li>
                  ))}
                </ol>
                <Link
                  href={tour.path}
                  className="mt-5 inline-flex min-h-11 items-center gap-1 font-semibold text-forest hover:underline"
                >
                  See the full day <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <WhatsAppLink
                  location="service_cta"
                  message={quoteMessage(tour.quoteSubject)}
                  aria-label={`Get a quote on WhatsApp for ${tour.name}`}
                  className="btn btn-sun mt-3 w-full"
                >
                  <WhatsAppIcon className="size-5" />
                  Get a quote on WhatsApp
                </WhatsAppLink>
              </div>
            </li>
          ))}
        </ul>
      </Band>

      <Band sand>
        <div className="grid gap-10 lg:grid-cols-2">
          <Prose>
            <h2>One vehicle for the whole group</h2>
            <p>
              Goa&apos;s sights are spread out, and a group split across several taxis spends the day waiting
              for each other. With one vehicle and one driver, everyone gets in and out together, from the first
              pickup at your hotel or villa to the drop at the end of the day.
            </p>
            <h3>Not included in the vehicle hire</h3>
            <p>
              Fuel and driver charges are included. Entry tickets, the dolphin boat ride, the Mandovi river
              cruise and the Dudhsagar jeep safari are paid for separately, and tolls and parking are extra, so
              carry some cash.
            </p>
          </Prose>
          <Prose>
            <h2>Which vehicle?</h2>
            <p>
              Up to 14 people fit the{" "}
              <Link href="/tempo-traveller-in-goa/#12-14-seater">12 &amp; 14 seater</Link> and 15 to 20 the{" "}
              <Link href="/tempo-traveller-in-goa/#17-20-seater">17 &amp; 20 seater</Link>. The{" "}
              <Link href="/urbania-on-rent-goa/">Force Urbania</Link> comes as a 12 or 17 seater, and groups of 21
              to 40 can travel in a <Link href="/bus-hire-goa/">mini bus</Link> from our partner operators.
            </p>
            <h2>Private hire only</h2>
            <p>
              We don&apos;t run shared coach (seat-in-coach) tours. Every tour is private hire: the whole vehicle
              is for your group, and pickup is from your hotel or villa anywhere in North Goa, with South Goa
              hotels on request.
            </p>
          </Prose>
        </div>
      </Band>

      <QuoteSection title="Request a sightseeing quote" defaultTripType="sightseeing" />

      <FaqSection items={SIGHTSEEING_FAQS} title="Sightseeing questions" sand />

      <RelatedLinks
        links={[
          { label: "North Goa sightseeing", href: "/goa-sightseeing/north-goa/" },
          { label: "South Goa sightseeing", href: "/goa-sightseeing/south-goa/" },
          { label: "Full fleet", href: "/fleet/" },
          { label: "Contact us", href: "/contact/" },
        ]}
      />

      <CtaBand message={quoteMessage("Goa sightseeing")} />
    </>
  );
}
