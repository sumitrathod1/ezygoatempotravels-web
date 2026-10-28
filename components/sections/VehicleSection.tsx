import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Vehicle } from "@/lib/fleet";
import { quoteMessage } from "@/lib/whatsapp";
import { WhatsAppLink } from "@/components/ui/ContactLinks";
import { FleetPhoto } from "@/components/ui/FleetPhoto";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { SpecCard, SpecList } from "./SpecCard";

/** Photos for a vehicle section: the first wide, the rest in a row underneath. */
export function SectionPhotos({ vehicle }: { vehicle: Vehicle }) {
  const [first, ...rest] = vehicle.photos.section;
  const wide = vehicle.photos.section.length > 2;
  const half = "(min-width: 1152px) 270px, (min-width: 1024px) 23vw, 50vw";
  return (
    <div className="grid grid-cols-2 gap-3">
      <FleetPhoto
        photo={first}
        sizes={wide ? "(min-width: 1152px) 552px, (min-width: 1024px) 46vw, 100vw" : half}
        aspect={wide ? "aspect-[16/9]" : "aspect-[4/3]"}
        className={wide ? "col-span-2" : ""}
      />
      {rest.map((p) => (
        <FleetPhoto key={p.src} photo={p} sizes={half} aspect="aspect-[4/3]" />
      ))}
    </div>
  );
}

/** One vehicle: photos, summary, spec card(s) and its quick-book button. */
export function VehicleSection({
  vehicle,
  flip = false,
  headingLevel = "h3",
  showPageLink = false,
}: {
  vehicle: Vehicle;
  flip?: boolean;
  headingLevel?: "h2" | "h3";
  showPageLink?: boolean;
}) {
  const Heading = headingLevel;
  const headingId = `${vehicle.anchor}-heading`;
  return (
    <section id={vehicle.anchor} aria-labelledby={headingId} className="border-t border-line py-12 first:border-0">
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div className={flip ? "lg:order-2" : ""}>
          <SectionPhotos vehicle={vehicle} />
        </div>
        <div>
          <Heading id={headingId} className="text-2xl font-extrabold text-forest sm:text-3xl">
            {vehicle.cardTitle ?? vehicle.name}
          </Heading>
          <p className="mt-3 text-lg text-muted">{vehicle.summary}</p>

          {vehicle.specs && (
            <div className="mt-5">
              <SpecList specs={vehicle.specs} />
            </div>
          )}
          {vehicle.variants && (
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {vehicle.variants.map((v) => (
                <SpecCard key={v.name} title={v.name} specs={v.specs} />
              ))}
            </div>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppLink
              location="vehicle_cta"
              message={quoteMessage(vehicle.name)}
              aria-label={`Get a quote on WhatsApp for the ${vehicle.name}`}
              className="btn btn-sun"
            >
              <WhatsAppIcon className="size-5" />
              Get a quote on WhatsApp
            </WhatsAppLink>
            {showPageLink && (
              <Link
                href={vehicle.href}
                className="inline-flex min-h-11 items-center gap-1 font-semibold text-forest hover:underline"
              >
                More about the {vehicle.shortName} <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
