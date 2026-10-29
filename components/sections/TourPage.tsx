import { Clock, MapPin, Users } from "lucide-react";
import type { ReactNode } from "react";
import type { TripType } from "@/lib/booking";
import type { NavLink } from "@/lib/nav";
import { serviceSchema, type FaqItem } from "@/lib/schema";
import type { Tour } from "@/lib/tours";
import { quoteMessage } from "@/lib/whatsapp";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, RelatedLinks } from "./CtaBand";
import { FaqSection } from "./FaqList";
import { IncludedList, SightPhoto, StopList } from "./Misc";
import { PageHero } from "./PageHero";
import { Band, Prose } from "./Prose";
import { QuoteSection } from "./QuoteSection";
import { SectionHeading } from "./SectionHeading";

/** Shared layout for the North Goa, South Goa and Dudhsagar pages. */
export function TourPage({
  tour,
  description,
  lead,
  aside,
  notIncluded,
  faqs,
  tripType,
  related,
}: {
  tour: Tour;
  /** Meta description, also used for the Service schema. */
  description: string;
  lead: ReactNode;
  /** Right-hand column beside the stops: how the day works, and anything tour-specific. */
  aside: ReactNode;
  notIncluded: string[];
  faqs: FaqItem[];
  tripType: TripType;
  /** Two related pages; the fleet and contact pages are always added. */
  related: NavLink[];
}) {
  const message = quoteMessage(tour.quoteSubject);
  return (
    <>
      <JsonLd data={serviceSchema({ name: tour.name, description, path: tour.path })} />
      <PageHero
        crumbs={[
          { label: "Goa Sightseeing", href: "/goa-sightseeing/" },
          { label: tour.name, href: tour.path },
        ]}
        title={tour.name}
        lead={lead}
        quoteMessage={message}
        media={
          <SightPhoto
            image={tour.hero}
            sizes="(min-width: 1152px) 540px, (min-width: 1024px) 46vw, 100vw"
            preload
          />
        }
      >
        <ul className="mt-6 flex flex-wrap gap-2 text-[0.95rem]">
          {[
            { icon: Clock, text: tour.duration },
            { icon: MapPin, text: "Pickup from your hotel or villa" },
            { icon: Users, text: "One vehicle for the whole group" },
          ].map(({ icon: Icon, text }) => (
            <li key={text} className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 font-medium text-ink">
              <Icon className="size-4 text-forest" aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>
      </PageHero>

      <Band>
        <div className="grid items-start gap-10 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <SectionHeading eyebrow="The stops" title="Where the day goes, in order" />
            <StopList stops={tour.stops} />
          </div>
          <Prose className="lg:sticky lg:top-24">{aside}</Prose>
        </div>
      </Band>

      <Band sand>
        <SectionHeading eyebrow="What's covered" title="What the vehicle hire includes" />
        <IncludedList
          included={["Your vehicle and driver for the trip", "Pickup and drop at your hotel or villa", "Fuel and driver charges"]}
          separate={[...notIncluded, "Tolls and parking"]}
        />
      </Band>

      <QuoteSection
        title={`Get a quote for ${tour.name}`}
        intro="Fill in your date and group size. The tour name is added to your WhatsApp message."
        defaultTripType={tripType}
        subject={tour.name}
      />

      <FaqSection items={faqs} title={`${tour.name} questions`} sand />

      <RelatedLinks links={[...related, { label: "Full fleet", href: "/fleet/" }, { label: "Contact us", href: "/contact/" }]} />

      <CtaBand message={message} />
    </>
  );
}
