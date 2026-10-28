import { Phone } from "lucide-react";
import type { ReactNode } from "react";
import type { Photo } from "@/lib/fleet";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import { CallLink, WhatsAppLink } from "@/components/ui/ContactLinks";
import { FleetPhoto } from "@/components/ui/FleetPhoto";
import { WhatsAppIcon } from "@/components/ui/Icons";

/** Hero for inner pages: breadcrumbs, the page's only <h1>, lead, CTAs and an optional hero photo. */
export function PageHero({
  crumbs,
  title,
  lead,
  quoteMessage,
  photo,
  media,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  lead: ReactNode;
  /** Prefilled WhatsApp message for the hero button. */
  quoteMessage?: string;
  /** Preloaded: it's the page's LCP image. */
  photo?: Photo;
  /** Any other right-hand media, e.g. a photo placeholder, when there's no fleet photo. */
  media?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="bg-sand">
      <div
        className={`container-page grid items-center gap-8 py-8 sm:py-12 ${photo || media ? "lg:grid-cols-[1.1fr_1fr]" : ""}`}
      >
        <div className="max-w-3xl">
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-4 text-4xl font-extrabold text-forest sm:text-5xl">{title}</h1>
          <div className="mt-4 text-lg text-muted">{lead}</div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <WhatsAppLink location="hero" message={quoteMessage} className="btn btn-forest text-lg">
              <WhatsAppIcon className="size-5" />
              Get a quote on WhatsApp
            </WhatsAppLink>
            <CallLink location="hero" className="btn btn-outline text-lg">
              <Phone className="size-5" aria-hidden="true" />
              Call now
            </CallLink>
          </div>
          {children}
        </div>
        {photo && (
          <FleetPhoto photo={photo} sizes="(min-width: 1152px) 540px, (min-width: 1024px) 46vw, 100vw" preload />
        )}
        {!photo && media}
      </div>
    </section>
  );
}
