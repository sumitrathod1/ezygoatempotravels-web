import Link from "next/link";
import { ArrowRight, Luggage, Snowflake, Users, type LucideIcon } from "lucide-react";
import type { Vehicle } from "@/lib/fleet";
import type { Service } from "@/lib/services";
import { quoteMessage } from "@/lib/whatsapp";
import { WhatsAppLink } from "@/components/ui/ContactLinks";
import { FleetPhoto } from "@/components/ui/FleetPhoto";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { Placeholder } from "@/components/ui/Placeholder";

/** One icon row on a fleet card. undefined = not shown; null = owner still has to send it. */
function Fact({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string | null | undefined }) {
  if (value === undefined) return null;
  return (
    <li className="flex items-start gap-2.5">
      <Icon className="mt-0.5 size-5 shrink-0 text-forest" aria-hidden="true" />
      <span>
        <span className="sr-only">{label}: </span>
        {value ?? <Placeholder>{label.toLowerCase()}</Placeholder>}
      </span>
    </li>
  );
}

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const { passengers, luggage, ac } = vehicle.cardFacts;
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
      {/* Fixed 16:9 frame, so the card doesn't jump while the photo loads. */}
      <FleetPhoto
        photo={vehicle.photos.card}
        sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw"
        className="rounded-none"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold text-ink">{vehicle.cardTitle ?? vehicle.name}</h3>
        <ul className="mt-3 space-y-2 text-[0.95rem] text-muted">
          <Fact icon={Users} label="Passengers" value={passengers} />
          <Fact icon={Luggage} label="Luggage" value={luggage} />
          <Fact icon={Snowflake} label="AC" value={ac} />
        </ul>
        {vehicle.partner && (
          <p className="mt-2 text-sm font-semibold text-gold">Arranged through our partner operators.</p>
        )}
        <Link
          href={vehicle.href}
          className="mt-auto inline-flex items-center gap-1 pt-4 font-semibold text-forest hover:underline"
        >
          See details <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
        <WhatsAppLink
          location="vehicle_cta"
          message={quoteMessage(vehicle.name)}
          aria-label={`Get a quote on WhatsApp for the ${vehicle.name}`}
          className="btn btn-sun mt-4 w-full px-3 text-[0.95rem] whitespace-nowrap"
        >
          <WhatsAppIcon className="size-5" />
          Get a quote on WhatsApp
        </WhatsAppLink>
      </div>
    </article>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-sm">
      <span className="grid size-12 place-items-center rounded-full bg-mint text-forest">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-xl font-bold text-ink">
        <Link href={service.href} className="hover:text-forest hover:underline">
          {service.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-[0.95rem] text-muted">{service.blurb}</p>
      <WhatsAppLink
        location="service_cta"
        message={quoteMessage(service.quoteSubject)}
        aria-label={`Get a quote on WhatsApp for ${service.quoteSubject}`}
        className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-forest hover:underline"
      >
        <WhatsAppIcon className="size-5" />
        Get a quote on WhatsApp
      </WhatsAppLink>
    </article>
  );
}
