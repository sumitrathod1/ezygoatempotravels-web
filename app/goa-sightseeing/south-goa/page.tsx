import Link from "next/link";
import { TourPage } from "@/components/sections/TourPage";
import { SOUTH_GOA_FAQS } from "@/lib/faqs";
import { pageMetadata } from "@/lib/seo";
import { SOUTH_GOA } from "@/lib/tours";

const DESCRIPTION =
  "South Goa sightseeing for groups: Bom Jesus Basilica, the Archaeological Museum, Mangeshi Temple, a spice farm, Dona Paula, Miramar and a river cruise.";

export const metadata = pageMetadata({
  title: "South Goa Sightseeing Tour by Tempo Traveller",
  description: DESCRIPTION,
  path: SOUTH_GOA.path,
});

export default function SouthGoaPage() {
  return (
    <TourPage
      tour={SOUTH_GOA}
      description={DESCRIPTION}
      tripType="sightseeing"
      faqs={SOUTH_GOA_FAQS}
      lead={
        <p>
          Goa&apos;s heritage day for your whole group: the churches of Old Goa, a temple and a spice farm in
          Ponda, Panjim&apos;s waterfront and an evening cruise on the Mandovi. One tempo traveller, Urbania or
          mini bus takes everyone from your hotel or villa and back.
        </p>
      }
      aside={
        <>
          <h2>How the day works</h2>
          <p>
            Your vehicle collects the group from your hotel or villa, usually between 8:30 and 9:00 AM, and
            stays with you for the day. The
            morning is in Old Goa and Ponda: the Basilica of Bom Jesus, the Archaeological Museum, Shri Mangeshi
            Temple and the Sahakari Spice Farm, where lunch is available. The afternoon moves to Panjim&apos;s
            waterfront at Dona Paula and Miramar, and the day ends with an evening cruise on the Mandovi.
          </p>
          <p>Plan on a full day of about 9 to 11 hours.</p>
          <h3>About the name</h3>
          <p>
            Most people know this circuit as the South Goa tour. Its stops are actually in Old Goa, Ponda and
            Panjim rather than in the South Goa district, so if you&apos;d like South Goa&apos;s beaches, ask us
            about a separate day.
          </p>
          <h3>Which vehicle?</h3>
          <p>
            Up to 14 people fit the{" "}
            <Link href="/tempo-traveller-in-goa/#12-14-seater">12 &amp; 14 seater</Link>, 15 to 20 the{" "}
            <Link href="/tempo-traveller-in-goa/#17-20-seater">17 &amp; 20 seater</Link>. The{" "}
            <Link href="/urbania-on-rent-goa/">Force Urbania</Link> comes as a 12 or 17 seater, and groups of 21 to 40 can travel in a{" "}
            <Link href="/bus-hire-goa/">mini bus</Link> from our partner operators.
          </p>
          <h3>Visiting the churches and temple</h3>
          <p>Churches and temples expect shoulders and knees to be covered, so bring a layer.</p>
        </>
      }
      notIncluded={[
        "Entry tickets, such as the museum and the spice farm",
        "The Mandovi river cruise",
      ]}
      related={[
        { label: "All Goa sightseeing", href: "/goa-sightseeing/" },
        { label: "North Goa sightseeing", href: "/goa-sightseeing/north-goa/" },
      ]}
    />
  );
}
