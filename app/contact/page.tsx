import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { MapFacade } from "@/components/contact/MapFacade";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { Band } from "@/components/sections/Prose";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CallLink, EmailLink, WhatsAppLink } from "@/components/ui/ContactLinks";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { ADDRESS_LINES, ADDRESS_ONE_LINE, BUSINESS } from "@/lib/business";
import { travelAgencySchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const PATH = "/contact/";
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_ONE_LINE)}`;

export const metadata = pageMetadata({
  title: "Contact Ezy Goa Tempo Travels | Call or WhatsApp",
  description:
    "Call or WhatsApp +91 95790 09209, or email ezygoatempotravels@gmail.com. Ezy Goa Tempo Travels, Muddo Vaddo, Parra, North Goa. Pickup and drop 24×7.",
  path: PATH,
});

function ContactCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-line bg-white p-5">
      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-mint text-forest">{icon}</span>
      <div>
        <h2 className="text-lg font-bold text-ink">{title}</h2>
        <div className="mt-1 text-muted">{children}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={travelAgencySchema()} />
      <PageHero
        crumbs={[{ label: "Contact", href: PATH }]}
        title="Contact Us"
        lead={
          <p>
            The quickest way to a quote is WhatsApp or a call. Send your date, pickup point, group size and
            plan, and we&apos;ll come back with the right vehicle.
          </p>
        }
      />

      <Band>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="grid content-start gap-4">
            <ContactCard icon={<Phone className="size-6" aria-hidden="true" />} title="Phone">
              <CallLink location="content" className="text-lg font-semibold text-forest hover:underline">
                {BUSINESS.phoneDisplay}
              </CallLink>
            </ContactCard>
            <ContactCard icon={<WhatsAppIcon className="size-6" />} title="WhatsApp">
              <WhatsAppLink location="content" className="text-lg font-semibold text-forest hover:underline">
                {BUSINESS.phoneDisplay}
              </WhatsAppLink>
            </ContactCard>
            <ContactCard icon={<Mail className="size-6" aria-hidden="true" />} title="Email">
              <EmailLink location="content" className="font-semibold break-all text-forest hover:underline">
                {BUSINESS.email}
              </EmailLink>
            </ContactCard>
            <ContactCard icon={<MapPin className="size-6" aria-hidden="true" />} title="Address">
              <address className="not-italic">
                {BUSINESS.name}
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </ContactCard>
            <ContactCard icon={<Clock className="size-6" aria-hidden="true" />} title="Hours">
              {BUSINESS.hours}
            </ContactCard>
          </div>
          <div>
            <SectionHeading title="Find us" />
            <MapFacade />
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-11 items-center font-semibold text-forest underline"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </Band>

      <QuoteSection sand title="Request a quote" />
    </>
  );
}
