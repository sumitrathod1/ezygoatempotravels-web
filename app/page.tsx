import Link from "next/link";
import { Check, Luggage, MapPin, Phone, Route, SquareParking, Users } from "lucide-react";
import { BookingForm } from "@/components/booking/BookingForm";
import { ServiceCard, VehicleCard } from "@/components/sections/Cards";
import { CtaBand } from "@/components/sections/CtaBand";
import { HowBookingWorks } from "@/components/sections/HowBookingWorks";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CallLink, WhatsAppLink } from "@/components/ui/ContactLinks";
import { FleetPhoto } from "@/components/ui/FleetPhoto";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { JsonLd } from "@/components/JsonLd";
import { FLEET, URBANIA } from "@/lib/fleet";
import { travelAgencySchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { SERVICES } from "@/lib/services";

export const metadata = pageMetadata({
  title: "Tempo Traveller in Goa | Ezy Goa Tempo Travels",
  description:
    "Hire a 12, 14, 17 or 20 seater tempo traveller, Force Urbania or mini bus with driver in Goa. Airport transfers, sightseeing and group trips, 24×7.",
  path: "/",
});

const HERO_FACTS = [
  "12, 14, 17 and 20 seater tempo travellers",
  "Force Urbania, 12 or 17 seater",
  "Mini buses for up to 40 people",
  "24×7 pickup and drop",
];

const WHY_ONE_VEHICLE = [
  {
    icon: Users,
    title: "Everyone arrives together",
    text: "One pickup time and one vehicle, so nobody waits at each stop for the last car to turn up.",
  },
  {
    icon: Luggage,
    title: "Luggage stays with the group",
    text: "Airport groups keep their suitcases with them instead of booking an extra car just for bags.",
  },
  {
    icon: Route,
    title: "One driver to talk to",
    text: "Plans change during the day. With one vehicle there's one person to tell, not a group of drivers.",
  },
  {
    icon: SquareParking,
    title: "Simpler parking",
    text: "One vehicle to park at busy beaches, forts and wedding venues instead of three or four.",
  },
];

function Hero() {
  return (
    <section className="on-dark relative overflow-hidden bg-forest text-white">
      <div className="container-page relative grid items-start gap-10 py-10 sm:py-14 lg:grid-cols-[1.05fr_1fr] lg:py-16">
        <div>
          <p className="mb-3 font-semibold text-sun">Ezy Goa Tempo Travels · Parra, North Goa</p>
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-[3.4rem]">
            Tempo traveller hire in Goa for groups of <span className="text-sun">12 to 20</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/90">
            12 &amp; 14 seater and 17 &amp; 20 seater tempo travellers, the Force Urbania in 12 and 17 seat
            versions, and mini buses for up to 40 people through our partner operators. Airport transfers,
            sightseeing, Dudhsagar, weddings and group trips, every vehicle with its own driver.
          </p>
          {/* The page's one hero image (LCP), so it's preloaded. The photo's own 16:9 frame means the
              van is never cropped; object-position right keeps its front in view if it ever is. */}
          <FleetPhoto
            photo={URBANIA.photos.hero!}
            sizes="(min-width: 1152px) 560px, (min-width: 1024px) 50vw, 100vw"
            preload
            className="mt-7 ring-1 ring-white/15"
          />
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppLink location="hero" className="btn btn-sun text-lg">
              <WhatsAppIcon className="size-5" />
              Get a quote on WhatsApp
            </WhatsAppLink>
            <CallLink location="hero" className="btn btn-outline-light text-lg">
              <Phone className="size-5" aria-hidden="true" />
              Call now
            </CallLink>
          </div>
          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
            {HERO_FACTS.map((fact) => (
              <li key={fact} className="flex items-center gap-2.5">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-sun text-night">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div id="quote" className="relative rounded-3xl bg-cream p-5 text-ink shadow-2xl sm:p-7">
          <h2 className="text-2xl font-extrabold text-forest">Get a quote for your trip</h2>
          <p className="mt-1 mb-5 text-muted">Takes under a minute. We reply on WhatsApp.</p>
          <BookingForm variant="compact" />
        </div>
      </div>
      <div className="road-line" aria-hidden="true" />
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={travelAgencySchema()} />
      <Hero />

      <section aria-labelledby="fleet-heading" className="py-16">
        <div className="container-page">
          <SectionHeading
            id="fleet-heading"
            eyebrow="The fleet"
            title="A vehicle for every group size"
            intro="Tempo travellers for 12 to 20 people, the Force Urbania when the occasion calls for it, and mini buses from our partner operators for groups of up to 40."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FLEET.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-4 rounded-2xl border-2 border-dashed border-forest/40 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-forest">Not sure which size?</h3>
              <p className="mt-1 text-muted">
                Pick your group size in the quote form and it will suggest a vehicle. For more than 40
                people, we&apos;ll arrange more than one.
              </p>
            </div>
            <Link href="#quote" className="btn btn-outline shrink-0">
              Use the quote form
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="services-heading" className="bg-sand py-16">
        <div className="container-page">
          <SectionHeading
            id="services-heading"
            eyebrow="Trips"
            title="Airport runs, sightseeing and group events"
            intro="Most groups book us for one of these. If your plan is different, ask anyway."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <ServiceCard key={service.href} service={service} />
            ))}
            <div className="flex flex-col justify-center rounded-2xl bg-forest p-6 text-white">
              <h3 className="text-xl font-bold">Something else in mind?</h3>
              <p className="mt-2 text-white/85">
                Temple visits, a birthday outing, a team dinner: if your group needs to get somewhere
                together, call us.
              </p>
              <CallLink location="content" className="btn btn-sun mt-4">
                <Phone className="size-5" aria-hidden="true" />
                Call now
              </CallLink>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-heading" className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow mb-2">Why one vehicle</p>
            <h2 id="why-heading" className="text-3xl font-extrabold text-forest sm:text-4xl">
              Why groups travel by tempo traveller
            </h2>
            <div className="prose-body mt-4 text-lg text-muted">
              <p>
                Goa is more spread out than it looks on a map. A day that takes in a fort, two beaches
                and a temple means a lot of driving, and a group split across three or four taxis rarely
                stays together for long.
              </p>
              <p>
                One tempo traveller keeps everyone on the same schedule, from the airport on the first
                day to the last drop before your flight home.
              </p>
            </div>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {WHY_ONE_VEHICLE.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-2xl border border-line bg-white p-5">
                <Icon className="size-7 text-forest" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-bold">{title}</h3>
                <p className="mt-1 text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="bg-sand">
        <HowBookingWorks />
      </div>

      <section aria-label="Where we are based" className="py-12">
        <div className="container-page">
          <div className="flex flex-col gap-4 rounded-2xl bg-mint p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-3 text-lg">
              <MapPin className="mt-1 size-6 shrink-0 text-forest" aria-hidden="true" />
              <span>
                We&apos;re based in Parra, North Goa, a few minutes from Mapusa, with pickup and drop
                available 24×7.
              </span>
            </p>
            <Link href="/areas-we-serve/" className="btn btn-outline shrink-0">
              Areas we serve
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
