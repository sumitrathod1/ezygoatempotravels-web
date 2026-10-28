import Link from "next/link";
import { Gallery } from "@/components/gallery/Gallery";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, RelatedLinks } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqList";
import { PageHero } from "@/components/sections/PageHero";
import { Band, Prose } from "@/components/sections/Prose";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SpecCard } from "@/components/sections/SpecCard";
import { WhatsAppLink } from "@/components/ui/ContactLinks";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { BOOKING_FAQS, URBANIA_FAQS } from "@/lib/faqs";
import { URBANIA } from "@/lib/fleet";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { quoteMessage } from "@/lib/whatsapp";

const PATH = "/urbania-on-rent-goa/";
const DESCRIPTION =
  "Hire our Force Urbania in Goa as a 12 seater or a 17 seater, with driver, for weddings, corporate guests and family trips. Get a quote on WhatsApp.";

export const metadata = pageMetadata({
  title: "Urbania on Rent in Goa | 12 & 17 Seater",
  description: DESCRIPTION,
  path: PATH,
});

export default function UrbaniaPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: "Force Urbania hire in Goa", description: DESCRIPTION, path: PATH })} />
      <PageHero
        crumbs={[{ label: "Urbania on Rent in Goa", href: PATH }]}
        title="Force Urbania on Rent in Goa"
        lead={
          <p>
            We run two Force Urbanias of our own, a 12 seater and a 17 seater, each with a driver. Book one
            when the ride is part of the occasion: a wedding, visiting clients or a family celebration.
          </p>
        }
        quoteMessage={quoteMessage("the Force Urbania")}
        photo={URBANIA.photos.hero}
      />

      <Band>
        <SectionHeading
          eyebrow="Two Urbanias"
          title="Urbania 12 seater and Urbania 17 seater"
          intro="Same model and cabin, two sizes. Up to 12 people travel in the 12 seater; 13 to 17 in the 17 seater."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {URBANIA.variants!.map((variant) => (
            <SpecCard key={variant.name} title={variant.name} specs={variant.specs}>
              <WhatsAppLink
                location="vehicle_cta"
                message={quoteMessage(`the Force ${variant.name}`)}
                aria-label={`Get a quote on WhatsApp for the Force ${variant.name}`}
                className="btn btn-sun mt-5 w-full"
              >
                <WhatsAppIcon className="size-5" />
                Get a quote on WhatsApp
              </WhatsAppLink>
            </SpecCard>
          ))}
        </div>
      </Band>

      <Band sand>
        <div className="grid gap-10 lg:grid-cols-2">
          <Prose>
            <h2>When to choose the Urbania</h2>
            <p>
              The Urbania is Force&apos;s newer, more premium van. Its cabin feels closer to a car than a
              traditional tempo traveller, which is why groups pick it when first impressions matter.
            </p>
            <ul>
              <li>
                <strong>Weddings:</strong> moving the couple&apos;s families between the hotel, the venue
                and the airport, alongside{" "}
                <Link href="/wedding-transport-goa/">guest transport</Link> in other vehicles.
              </li>
              <li>
                <strong>Corporate guests:</strong> airport pickups and site visits for clients or senior
                teams.
              </li>
              <li>
                <strong>Family occasions:</strong> anniversaries, milestone birthdays or a special day out
                together.
              </li>
            </ul>
          </Prose>
          <Prose>
            <h2>Urbania or tempo traveller?</h2>
            <p>
              Both come with a driver and both carry a group in one vehicle. A{" "}
              <Link href="/tempo-traveller-in-goa/">tempo traveller</Link> is the practical choice for
              sightseeing, airport runs and college or office groups, and it&apos;s available up to 20
              seats. The Urbania is the step up when the ride itself should feel special.
            </p>
            <p>
              For groups larger than 17, the Urbania can travel alongside a 20 seater tempo traveller, or we
              can suggest a <Link href="/bus-hire-goa/">mini bus</Link> from our partner operators.
            </p>
          </Prose>
        </div>
      </Band>

      <Band>
        <SectionHeading eyebrow="Photos" title="Inside and out" intro="Both Urbanias share the same model and cabin." />
        <Gallery photos={URBANIA.photos.gallery} />
      </Band>

      <QuoteSection
        sand
        title="Request an Urbania quote"
        intro="Choose your group size and the form shows which Urbania fits. Your details open in WhatsApp, ready to send."
        defaultVehicle="urbania"
      />

      <FaqSection items={[...URBANIA_FAQS, BOOKING_FAQS[1], BOOKING_FAQS[2]]} title="Urbania questions" />

      <RelatedLinks
        links={[
          { label: "Full fleet and photos", href: "/fleet/" },
          { label: "Wedding transport", href: "/wedding-transport-goa/" },
          { label: "Tempo traveller hire", href: "/tempo-traveller-in-goa/" },
          { label: "Contact us", href: "/contact/" },
        ]}
      />

      <CtaBand message={quoteMessage("the Force Urbania")} />
    </>
  );
}
