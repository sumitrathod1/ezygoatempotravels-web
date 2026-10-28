import Link from "next/link";
import { Plane } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, RelatedLinks } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqList";
import { PageHero } from "@/components/sections/PageHero";
import { Band, Prose } from "@/components/sections/Prose";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";
import { AIRPORT_FAQS } from "@/lib/faqs";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { quoteMessage } from "@/lib/whatsapp";

const PATH = "/goa-airport-transfer/";
const DESCRIPTION =
  "Group airport transfers in Goa from Mopa (GOX) and Dabolim (GOI) by tempo traveller, Urbania or mini bus, with room for luggage. Pickup and drop 24×7.";

export const metadata = pageMetadata({
  title: "Goa Airport Transfer | Mopa & Dabolim Group Pickup",
  description: DESCRIPTION,
  path: PATH,
});

const AIRPORTS = [
  {
    code: "GOX",
    name: "Mopa",
    full: "Manohar International Airport, Mopa",
    text: "Goa's newer airport, in Pernem in the far north. It's the closer airport for Arambol, Mandrem, Morjim and the beaches around Calangute and Anjuna.",
  },
  {
    code: "GOI",
    name: "Dabolim",
    full: "Dabolim Airport, near Vasco da Gama",
    text: "The older airport, south of Panjim near Vasco. It's the closer airport for Panjim, Margao and the South Goa beaches such as Colva, Benaulim and Palolem.",
  },
];

// Rough road guide only; actual times depend on traffic, roadworks and season.
const DRIVE_TIMES = [
  { from: "Mopa (GOX)", to: "Mapusa", km: "about 30 km", time: "about 45 min" },
  { from: "Mopa (GOX)", to: "Calangute / Baga", km: "about 40 km", time: "about 1 hr" },
  { from: "Mopa (GOX)", to: "Panjim", km: "about 45 km", time: "about 1 hr" },
  { from: "Mopa (GOX)", to: "Margao", km: "about 80 km", time: "about 1 hr 45 min" },
  { from: "Dabolim (GOI)", to: "Panjim", km: "about 25 km", time: "about 40 min" },
  { from: "Dabolim (GOI)", to: "Margao", km: "about 25 km", time: "about 40 min" },
  { from: "Dabolim (GOI)", to: "Calangute / Baga", km: "about 40 km", time: "about 1 hr 15 min" },
  { from: "Dabolim (GOI)", to: "Palolem", km: "about 65 km", time: "about 1 hr 45 min" },
];

export default function AirportTransferPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: "Goa airport transfers for groups", description: DESCRIPTION, path: PATH })} />
      <PageHero
        crumbs={[{ label: "Goa Airport Transfer", href: PATH }]}
        title="Goa Airport Transfers for Groups"
        lead={
          <p>
            Arrivals and departures at both of Goa&apos;s airports, Mopa (GOX) and Dabolim (GOI), for groups
            and their luggage. One vehicle and one driver for the whole group, with pickup and drop 24×7.
          </p>
        }
        quoteMessage={quoteMessage("an airport transfer")}
      />

      <Band>
        <SectionHeading eyebrow="Two airports" title="Mopa or Dabolim: check your ticket" intro="Goa has two airports more than an hour's drive apart, so the airport code on your booking matters." />
        <div className="grid gap-5 md:grid-cols-2">
          {AIRPORTS.map((a) => (
            <article key={a.code} className="rounded-2xl border border-line bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-full bg-mint text-forest">
                  <Plane className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-ink">
                    {a.name} <span className="text-gold">({a.code})</span>
                  </h3>
                  <p className="text-sm text-muted">{a.full}</p>
                </div>
              </div>
              <p className="mt-4 text-muted">{a.text}</p>
            </article>
          ))}
        </div>
      </Band>

      <Band sand>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Drive times" title="How long the drive takes" />
            <Prose className="-mt-4">
              <p>
                A rough guide for planning. Allow extra time in peak season (December and New Year), on
                weekends and in heavy monsoon rain. For a departure, plan to reach the airport with time to
                spare for check-in, especially with a big group.
              </p>
            </Prose>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-line bg-white">
            <table className="w-full min-w-[28rem] text-left">
              <caption className="sr-only">Approximate road distance and drive time from each airport</caption>
              <thead className="bg-mint text-sm">
                <tr>
                  <th scope="col" className="px-4 py-3">From</th>
                  <th scope="col" className="px-4 py-3">To</th>
                  <th scope="col" className="px-4 py-3">Distance</th>
                  <th scope="col" className="px-4 py-3">Drive</th>
                </tr>
              </thead>
              <tbody>
                {DRIVE_TIMES.map((row) => (
                  <tr key={row.from + row.to} className="border-t border-line">
                    <td className="px-4 py-3 font-semibold">{row.from}</td>
                    <td className="px-4 py-3">{row.to}</td>
                    <td className="px-4 py-3 text-muted">{row.km}</td>
                    <td className="px-4 py-3 text-muted">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Band>

      <Band>
        <div className="grid gap-10 lg:grid-cols-2">
          <Prose>
            <h2>Groups and luggage</h2>
            <p>
              Airport runs are where luggage matters most. The{" "}
              <Link href="/tempo-traveller-in-goa/#12-14-seater">12 &amp; 14 seater tempo traveller</Link> takes
              about 8 to 10 medium suitcases behind the last row, and the{" "}
              <Link href="/tempo-traveller-in-goa/#17-20-seater">17 &amp; 20 seater</Link> about 10 to 12. When
              you ask for a quote, tell us how many people are flying and how many big bags you have, and
              we&apos;ll plan for it.
            </p>
            <p>
              For a wedding party or a corporate group landing together, the{" "}
              <Link href="/urbania-on-rent-goa/">Force Urbania</Link> makes a more comfortable first impression,
              and a <Link href="/bus-hire-goa/">mini bus</Link> from our partner operators covers groups of 21 to
              40.
            </p>
          </Prose>
          <Prose>
            <h2>Arrivals</h2>
            <p>
              Send your flight number, the arrival time and the airport code with your booking. Pickup and
              drop run 24×7, so late-night and early-morning flights are fine.
            </p>
            <p>
              <strong>If your flight is delayed:</strong>{" "}
              <Placeholder>how delays are handled (free waiting time, what to do if the flight is very late)</Placeholder>
            </p>
            <p>
              <strong>Where you meet the driver:</strong>{" "}
              <Placeholder>meeting point at each airport</Placeholder>
            </p>
            <h2>Departures</h2>
            <p>
              Tell us your flight time and where everyone is staying. If the group is spread across more
              than one hotel, list the pickups in order and we&apos;ll work back from the flight time.
            </p>
          </Prose>
        </div>
      </Band>

      <QuoteSection sand title="Request an airport transfer quote" defaultTripType="airport" />

      <FaqSection items={AIRPORT_FAQS} title="Airport transfer questions" />

      <RelatedLinks
        links={[
          { label: "Full fleet and photos", href: "/fleet/" },
          { label: "Tempo traveller hire", href: "/tempo-traveller-in-goa/" },
          { label: "Areas we serve", href: "/areas-we-serve/" },
          { label: "Contact us", href: "/contact/" },
        ]}
      />

      <CtaBand message={quoteMessage("an airport transfer")} />
    </>
  );
}
