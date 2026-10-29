import Link from "next/link";
import { CtaBand, RelatedLinks } from "@/components/sections/CtaBand";
import { CredentialsBlock } from "@/components/sections/Misc";
import { PageHero } from "@/components/sections/PageHero";
import { Band, Prose } from "@/components/sections/Prose";
import { FleetPhoto } from "@/components/ui/FleetPhoto";
import { ADDRESS_ONE_LINE, BUSINESS, OWNER_NAME } from "@/lib/business";
import { TEMPO_TRAVELLER_12_14 } from "@/lib/fleet";
import { pageMetadata } from "@/lib/seo";

const PATH = "/about/";

export const metadata = pageMetadata({
  title: "About Us | Ezy Goa Tempo Travels, Parra, North Goa",
  description:
    "Ezy Goa Tempo Travels is a group transport business in Parra, North Goa, running tempo travellers and Force Urbanias with drivers, 24×7.",
  path: PATH,
});

// The real-vehicle photo (owner-confirmed, unlabelled) from the 12 & 14 seater's gallery.
const REAL_PHOTO = TEMPO_TRAVELLER_12_14.photos.gallery.find((p) => p.src.includes("side-real"))!;

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "About", href: PATH }]}
        title="About Ezy Goa Tempo Travels"
        lead={
          <p>
            We&apos;re a group transport business based in Parra, North Goa. We move groups around Goa in
            tempo travellers and Force Urbanias, each with a driver, with pickup and drop 24×7.
          </p>
        }
      />

      <Band>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
          <FleetPhoto photo={REAL_PHOTO} sizes="(min-width: 1152px) 500px, (min-width: 1024px) 44vw, 100vw" />
          <Prose>
            <h2>Who runs the business</h2>
            <p>
              {BUSINESS.name} is run by {OWNER_NAME}. He started the business because he loves helping travellers
              have the Goa trip they&apos;ve been dreaming of, and he takes pride in looking after every group well.
            </p>
            <h2>What we do</h2>
            <p>
              We hire out vehicles with drivers for groups: <Link href="/goa-airport-transfer/">airport transfers</Link>{" "}
              at Mopa and Dabolim, <Link href="/goa-sightseeing/">sightseeing</Link> across North and South Goa,{" "}
              <Link href="/goa-sightseeing/dudhsagar/">Dudhsagar trips</Link>,{" "}
              <Link href="/wedding-transport-goa/">wedding transport</Link>, and{" "}
              <Link href="/group-tours-goa/">college, corporate and film groups</Link>.
            </p>
            <h2>Our vehicles</h2>
            <p>
              Our own fleet is made up of 12 &amp; 14 seater and 17 &amp; 20 seater tempo travellers, and two
              Force Urbanias: a 12 seater and a 17 seater. For groups of 21 to 40 we arrange mini buses through
              partner operators, and we say so up front. See the <Link href="/fleet/">fleet</Link> for photos and
              details.
            </p>
            <h2>How we work</h2>
            <ul>
              <li>Every trip is quoted on its own, on WhatsApp or by phone. There are no prices on the website.</li>
              <li>
                Pickup and drop are available 24×7, anywhere in North Goa, with South Goa hotels on request.
              </li>
              <li>
                You deal with us directly: {BUSINESS.phoneDisplay}, {BUSINESS.email}, {ADDRESS_ONE_LINE}.
              </li>
            </ul>
          </Prose>
        </div>
        {/* Registration details: renders nothing until the owner supplies a number. */}
        <div className="mt-10 empty:hidden">
          <CredentialsBlock />
        </div>
      </Band>

      <RelatedLinks
        links={[
          { label: "Our fleet", href: "/fleet/" },
          { label: "Areas we serve", href: "/areas-we-serve/" },
          { label: "FAQ", href: "/faq/" },
          { label: "Contact us", href: "/contact/" },
        ]}
      />

      <CtaBand />
    </>
  );
}
