import Link from "next/link";
import { Briefcase, Clapperboard, GraduationCap, Users } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, RelatedLinks } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqList";
import { PageHero } from "@/components/sections/PageHero";
import { Band, Prose } from "@/components/sections/Prose";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Placeholder } from "@/components/ui/Placeholder";
import { GROUP_FAQS } from "@/lib/faqs";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { quoteMessage } from "@/lib/whatsapp";

const PATH = "/group-tours-goa/";
const DESCRIPTION =
  "Group transport in Goa for college trips, corporate offsites, family groups and film or shoot crews, by tempo traveller, Urbania or mini bus.";

export const metadata = pageMetadata({
  title: "Group Tours in Goa | College, Corporate & Film Crews",
  description: DESCRIPTION,
  path: PATH,
});

const GROUPS = [
  {
    icon: GraduationCap,
    title: "College and school trips",
    body: (
      <>
        <p>
          A batch on a Goa trip usually wants beaches, forts, a heritage day and maybe Dudhsagar. One vehicle
          keeps everyone together and gives the teachers or organisers one driver to deal with. See{" "}
          <Link href="/goa-sightseeing/">sightseeing</Link> for the usual day trips.
        </p>
        <p>
          Send the group size, the dates and where you&apos;re staying. If you have a day-by-day plan, include
          it and we&apos;ll quote for the whole trip.
        </p>
      </>
    ),
  },
  {
    icon: Briefcase,
    title: "Corporate offsites and events",
    body: (
      <>
        <p>
          Airport pickups as the team lands, hotel to venue shuttles, a team outing on the free afternoon:
          the same vehicles and drivers can cover every part of the event.
        </p>
        <p>
          For visiting clients or senior leadership, the <Link href="/urbania-on-rent-goa/">Force Urbania</Link>{" "}
          gives a more premium ride. GST invoices:{" "}
          <Placeholder>whether GST invoices are provided</Placeholder>
        </p>
      </>
    ),
  },
  {
    icon: Users,
    title: "Family groups and reunions",
    body: (
      <p>
        Several families travelling together, a reunion or a milestone birthday: one tempo traveller means
        grandparents, parents and children all travel together, with room for bags and shopping.
      </p>
    ),
  },
  {
    icon: Clapperboard,
    title: "Film and shoot transport",
    body: (
      <>
        <p>
          Crews shooting in Goa need to move people between hotels and locations, often early in the morning
          and on changing call times. Pickup and drop run 24×7.
        </p>
        <p>
          <Placeholder>crew and equipment transport, standby hours, anything a production should know</Placeholder>
        </p>
      </>
    ),
  },
];

export default function GroupToursPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: "Group transport and tours in Goa", description: DESCRIPTION, path: PATH })} />
      <PageHero
        crumbs={[{ label: "Group Tours in Goa", href: PATH }]}
        title="Group Tours and Transport in Goa"
        lead={
          <p>
            College batches, office teams, families travelling together and film crews: if your group needs
            to move around Goa together, we&apos;ll match the vehicle to the headcount and the plan.
          </p>
        }
        quoteMessage={quoteMessage("a group tour")}
      />

      <Band>
        <div className="grid gap-5 md:grid-cols-2">
          {GROUPS.map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-2xl border border-line bg-white p-6">
              <span className="grid size-12 place-items-center rounded-full bg-mint text-forest">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-2xl font-extrabold text-forest">{title}</h2>
              <Prose className="mt-2 text-base">{body}</Prose>
            </article>
          ))}
        </div>
      </Band>

      <Band sand>
        <div className="grid gap-10 lg:grid-cols-2">
          <Prose>
            <h2>Matching the vehicle to the group</h2>
            <p>
              Up to 14 people travel in the <Link href="/tempo-traveller-in-goa/#12-14-seater">12 &amp; 14 seater</Link>{" "}
              and 15 to 20 in the <Link href="/tempo-traveller-in-goa/#17-20-seater">17 &amp; 20 seater</Link>.
              From 21 to 40 there are <Link href="/bus-hire-goa/">mini buses</Link> through our partner operators,
              and beyond 40 we arrange more than one vehicle.
            </p>
            <p>
              Heading beyond Goa as a group? See <Link href="/outstation-trips-from-goa/">outstation trips</Link>.
            </p>
          </Prose>
          <Prose>
            <h2>What to send with your request</h2>
            <ul>
              <li>Group size, and how much luggage if it&apos;s an airport run</li>
              <li>Dates, and where the group is staying</li>
              <li>The plan for each day, even a rough one</li>
              <li>A contact person for the day</li>
            </ul>
          </Prose>
        </div>
      </Band>

      <QuoteSection title="Request a group trip quote" defaultTripType="group" />

      <FaqSection items={GROUP_FAQS} title="Group trip questions" sand />

      <RelatedLinks
        links={[
          { label: "Tempo traveller hire", href: "/tempo-traveller-in-goa/" },
          { label: "Mini bus hire", href: "/bus-hire-goa/" },
          { label: "Full fleet and photos", href: "/fleet/" },
          { label: "Contact us", href: "/contact/" },
        ]}
      />

      <CtaBand message={quoteMessage("a group tour")} />
    </>
  );
}
