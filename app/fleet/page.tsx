import { Gallery } from "@/components/gallery/Gallery";
import { CtaBand, RelatedLinks } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Band } from "@/components/sections/Prose";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { VehicleSection } from "@/components/sections/VehicleSection";
import { FLEET } from "@/lib/fleet";
import { pageMetadata } from "@/lib/seo";

const PATH = "/fleet/";

export const metadata = pageMetadata({
  title: "Our Fleet | Tempo Traveller, Urbania & Mini Bus in Goa",
  description:
    "Photos, seats, luggage space and AC for our 12 & 14 and 17 & 20 seater tempo travellers and Force Urbania, plus partner-operated mini buses in Goa.",
  path: PATH,
});

// Every gallery photo across the fleet, in fleet order.
const GALLERY = FLEET.flatMap((v) => v.photos.gallery);

export default function FleetPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Fleet", href: PATH }]}
        title="Our Fleet"
        lead={
          <p>
            Our own vehicles are the 12 &amp; 14 seater and 17 &amp; 20 seater tempo travellers and two Force
            Urbanias, a 12 seater and a 17 seater. For groups of 21 to 40 we arrange mini buses through
            partner operators. Every vehicle comes with a driver.
          </p>
        }
      />

      <Band>
        {FLEET.map((vehicle, i) => (
          <VehicleSection key={vehicle.id} vehicle={vehicle} flip={i % 2 === 1} headingLevel="h2" showPageLink />
        ))}
      </Band>

      <Band sand id="gallery">
        <SectionHeading
          eyebrow="Gallery"
          title="Photo gallery"
          intro="Tap a photo to see it larger. Photos marked as representative images don't show a specific vehicle."
        />
        <Gallery photos={GALLERY} />
      </Band>

      <RelatedLinks
        links={[
          { label: "Tempo traveller hire", href: "/tempo-traveller-in-goa/" },
          { label: "Force Urbania on rent", href: "/urbania-on-rent-goa/" },
          { label: "Mini bus hire", href: "/bus-hire-goa/" },
          { label: "Contact us", href: "/contact/" },
        ]}
      />

      <CtaBand />
    </>
  );
}
