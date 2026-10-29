import Link from "next/link";
import { MapPin } from "lucide-react";
import { CtaBand, RelatedLinks } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Band, Prose } from "@/components/sections/Prose";
import { pageMetadata } from "@/lib/seo";
import { quoteMessage } from "@/lib/whatsapp";

const PATH = "/areas-we-serve/";

export const metadata = pageMetadata({
  title: "Areas We Serve in Goa | Tempo Traveller Pickup",
  description:
    "Where we pick up groups in Goa, from our base in Parra near Mapusa: the North Goa coast, Panjim and Old Goa, South Goa, both airports and main stations.",
  path: PATH,
});

const REGIONS = [
  {
    name: "North Goa coast",
    places: "Candolim, Calangute, Baga, Arpora, Anjuna, Vagator, Siolim, Morjim, Mandrem, Arambol",
    text: "Goa's busiest holiday stretch and the closest to our base. Traffic around Calangute and Baga slows right down in peak season, so allow extra time for pickups.",
  },
  {
    name: "Mapusa and inland North Goa",
    places: "Parra, Mapusa, Assagao, Aldona, Porvorim, Thivim",
    text: "Our home ground: we're based in Parra, a few minutes from Mapusa. Thivim is the nearest railway station for much of North Goa, and Porvorim sits on the way to Panjim.",
  },
  {
    name: "Panjim and Old Goa",
    places: "Panjim, Miramar, Dona Paula, Ribandar, Old Goa, Karmali",
    text: "The capital, its waterfront and the heritage churches of Old Goa. Karmali station serves this area.",
  },
  {
    name: "Central Goa",
    places: "Ponda and its temples, the spice-farm belt",
    text: "Inland and greener, on the way to Dudhsagar and home to many of Goa's temples.",
  },
  {
    name: "South Goa",
    places: "Vasco, Margao, Majorda, Colva, Benaulim, Varca, Cavelossim, Agonda, Palolem",
    text: "Quieter beaches and resorts further from our base, so pickups from South Goa hotels are on request. Margao (Madgaon) is the main railway station for the south, and Dabolim airport sits near Vasco.",
  },
];

const HUBS = [
  "Mopa airport (GOX)",
  "Dabolim airport (GOI)",
  "Madgaon railway station",
  "Thivim railway station",
  "Karmali railway station",
  "Vasco da Gama railway station",
];

export default function AreasPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Areas We Serve", href: PATH }]}
        title="Areas We Serve in Goa"
        lead={
          <>
            <p>
              We&apos;re based in Parra, North Goa. We pick up groups anywhere in North Goa, and from South Goa
              hotels on request, with pickup and drop available 24×7.
            </p>
          </>
        }
        quoteMessage={quoteMessage("a pickup in Goa")}
      />

      <Band>
        <ul className="grid gap-5 md:grid-cols-2">
          {REGIONS.map((region) => (
            <li key={region.name} className="rounded-2xl border border-line bg-white p-6">
              <h2 className="flex items-center gap-2 text-2xl font-extrabold text-forest">
                <MapPin className="size-6 shrink-0" aria-hidden="true" />
                {region.name}
              </h2>
              <p className="mt-1 text-sm font-semibold text-gold">{region.places}</p>
              <p className="mt-3 text-muted">{region.text}</p>
            </li>
          ))}
        </ul>
      </Band>

      <Band sand>
        <div className="grid gap-10 lg:grid-cols-2">
          <Prose>
            <h2>Airports and stations</h2>
            <p>Groups arriving by air or rail can be met at:</p>
            <ul>
              {HUBS.map((hub) => (
                <li key={hub}>{hub}</li>
              ))}
            </ul>
            <p>
              More on flights and luggage on the <Link href="/goa-airport-transfer/">airport transfers</Link> page.
            </p>
          </Prose>
          <Prose>
            <h2>Pickup from your door</h2>
            <p>
              We pick up from hotels, villas, homes, airports and stations, in every vehicle size from the{" "}
              <Link href="/tempo-traveller-in-goa/#12-14-seater">12 &amp; 14 seater</Link> to a{" "}
              <Link href="/bus-hire-goa/">mini bus</Link>. When you book, send the exact address or a map pin so the
              driver comes straight to you.
            </p>
          </Prose>
        </div>
      </Band>

      <RelatedLinks
        links={[
          { label: "Goa airport transfers", href: "/goa-airport-transfer/" },
          { label: "Tempo traveller hire", href: "/tempo-traveller-in-goa/" },
          { label: "Full fleet", href: "/fleet/" },
          { label: "Contact us", href: "/contact/" },
        ]}
      />

      <CtaBand />
    </>
  );
}
