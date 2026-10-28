import Link from "next/link";
import { TourPage } from "@/components/sections/TourPage";
import { DUDHSAGAR_FAQS } from "@/lib/faqs";
import { pageMetadata } from "@/lib/seo";
import { DUDHSAGAR } from "@/lib/tours";

const DESCRIPTION =
  "Dudhsagar waterfall trip for groups: our vehicle to the Kulem/Mollem checkpoint and back, then the forest department's jeep safari to the falls.";

export const metadata = pageMetadata({
  title: "Dudhsagar Trip from Goa by Tempo Traveller",
  description: DESCRIPTION,
  path: DUDHSAGAR.path,
});

export default function DudhsagarPage() {
  return (
    <TourPage
      tour={DUDHSAGAR}
      description={DESCRIPTION}
      tripType="dudhsagar"
      faqs={DUDHSAGAR_FAQS}
      lead={
        <p>
          A full day to Dudhsagar, the waterfall on the Goa–Karnataka border. Your group travels together in
          one tempo traveller, Urbania or mini bus from your hotel or villa to the Kulem/Mollem checkpoint, and
          the forest department&apos;s jeep safari takes you the rest of the way.
        </p>
      }
      aside={
        <>
          <h2>How the day works</h2>
          <p>
            Your vehicle collects the group from your hotel or villa and drives to the Kulem/Mollem checkpoint.
            Private vehicles can&apos;t go further, so from there the forest department&apos;s jeep safari
            takes you through the sanctuary to the falls and back. The jeep safari is paid separately.
          </p>
          <p>
            On the way back you can add a stop at Tambdi Surla Mahadev Temple or a spice farm in Ponda. Plan on a
            full day of about 10 to 12 hours.
          </p>
          <h3>When the safari runs</h3>
          <p>
            The jeep safari closes during the monsoon. We check the safari is open before confirming your trip.
          </p>
          <h3>About Dudhsagar</h3>
          <p>
            At about 310 metres, Dudhsagar is one of India&apos;s tallest waterfalls. It sits inside the Bhagwan
            Mahavir Wildlife Sanctuary, on the border between Goa and Karnataka.
          </p>
          <h3>What to carry</h3>
          <ul>
            <li>Water and snacks</li>
            <li>A change of clothes</li>
            <li>Footwear that can get wet</li>
            <li>A waterproof bag for phones</li>
            <li>Cash for the jeep safari</li>
          </ul>
          <h3>Which vehicle?</h3>
          <p>
            Up to 14 people fit the{" "}
            <Link href="/tempo-traveller-in-goa/#12-14-seater">12 &amp; 14 seater</Link>, 15 to 20 the{" "}
            <Link href="/tempo-traveller-in-goa/#17-20-seater">17 &amp; 20 seater</Link>. The <Link href="/urbania-on-rent-goa/">Force Urbania</Link> comes as a 12 or 17 seater. For a bigger group, ask
            about a <Link href="/bus-hire-goa/">mini bus</Link> from our partner operators.
          </p>
        </>
      }
      notIncluded={[
        "The forest department's jeep safari from Kulem/Mollem",
        "Entry tickets, including at the optional spice farm",
      ]}
      related={[
        { label: "All Goa sightseeing", href: "/goa-sightseeing/" },
        { label: "South Goa sightseeing", href: "/goa-sightseeing/south-goa/" },
      ]}
    />
  );
}
