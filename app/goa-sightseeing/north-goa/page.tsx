import Link from "next/link";
import { TourPage } from "@/components/sections/TourPage";
import { NORTH_GOA_FAQS } from "@/lib/faqs";
import { pageMetadata } from "@/lib/seo";
import { NORTH_GOA } from "@/lib/tours";

const DESCRIPTION =
  "North Goa sightseeing for groups: dolphin trip, Fort Aguada, Candolim, Calangute, Baga, Anjuna and sunset at Chapora Fort, in one vehicle with a driver.";

export const metadata = pageMetadata({
  title: "North Goa Sightseeing by Tempo Traveller",
  description: DESCRIPTION,
  path: NORTH_GOA.path,
});

export default function NorthGoaPage() {
  return (
    <TourPage
      tour={NORTH_GOA}
      description={DESCRIPTION}
      tripType="sightseeing"
      faqs={NORTH_GOA_FAQS}
      lead={
        <p>
          A full day up the North Goa coast for your whole group: a dolphin trip, a Portuguese fort, a run of
          beaches, two indoor stops and sunset at Chapora Fort. Everyone travels together in one tempo
          traveller, Urbania or mini bus, from your hotel or villa and back.
        </p>
      }
      aside={
        <>
          <h2>How the day works</h2>
          <p>
            Your vehicle collects the group from your hotel or villa and stays with you for the day. The stops
            follow the coast north, in the order shown: the dolphin boat from Sinquerim first, then Fort Aguada
            and the beaches from Sinquerim to Baga, with Snow Park Goa and Thunder World on the way. After
            Anjuna, the day ends at Chapora Fort for sunset.
          </p>
          <p>Plan on a full day of about 9 to 10 hours.</p>
          <h3>Which vehicle?</h3>
          <p>
            Up to 14 people fit the{" "}
            <Link href="/tempo-traveller-in-goa/#12-14-seater">12 &amp; 14 seater</Link>, 15 to 20 the{" "}
            <Link href="/tempo-traveller-in-goa/#17-20-seater">17 &amp; 20 seater</Link>. The{" "}
            <Link href="/urbania-on-rent-goa/">Force Urbania</Link> comes as a 12 or 17 seater, and groups of 21 to 40 can ask about a{" "}
            <Link href="/bus-hire-goa/">mini bus</Link> from our partner operators.
          </p>
          <h3>Paid on the day</h3>
          <p>
            Entry tickets, the dolphin boat ride and any water sports are not part of the vehicle hire, so carry
            some cash.
          </p>
        </>
      }
      notIncluded={[
        "The dolphin boat ride from Sinquerim",
        "Entry tickets, such as Snow Park Goa and Thunder World",
        "Water sports at Baga",
      ]}
      related={[
        { label: "All Goa sightseeing", href: "/goa-sightseeing/" },
        { label: "South Goa sightseeing", href: "/goa-sightseeing/south-goa/" },
      ]}
    />
  );
}
