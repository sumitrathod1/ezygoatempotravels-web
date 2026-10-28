import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { CallLink, WhatsAppLink } from "@/components/ui/ContactLinks";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { HeaderNav } from "./HeaderNav";

export function SiteHeader() {
  return (
    // No backdrop-filter here: it would trap the menu's fixed overlay inside the header.
    <header className="sticky top-0 z-40 border-b border-line bg-white" data-click-location="header">
      <div className="container-page flex h-16 items-center justify-between gap-3 xl:h-[4.5rem]">
        <Link href="/" className="shrink-0" aria-label={`${BUSINESS.name}, home`}>
          <Image
            src="/brand/logo.svg"
            alt={BUSINESS.name}
            width={139}
            height={44}
            loading="eager"
            unoptimized
            className="h-10 w-auto xl:h-11"
          />
        </Link>

        <HeaderNav
          desktopActions={
            <>
              {/* Desktop actions only show from xl (1280px), where the full number fits. */}
              <CallLink
                location="header"
                aria-label={`Call now: ${BUSINESS.phoneDisplay}`}
                className="flex min-h-11 min-w-11 items-center justify-center gap-2 font-semibold whitespace-nowrap text-forest"
              >
                <Phone className="size-4" aria-hidden="true" />
                <span>{BUSINESS.phoneDisplay}</span>
              </CallLink>
              <WhatsAppLink location="header" className="btn btn-sun min-h-11 px-4 text-sm whitespace-nowrap">
                <WhatsAppIcon className="size-5" />
                Get a quote on WhatsApp
              </WhatsAppLink>
            </>
          }
          mobileActions={
            <>
              <CallLink
                location="header"
                aria-label={`Call now: ${BUSINESS.phoneDisplay}`}
                className="grid size-11 place-items-center rounded-full bg-forest text-white"
              >
                <Phone className="size-5" aria-hidden="true" />
              </CallLink>
              <WhatsAppLink
                location="header"
                aria-label="Get a quote on WhatsApp"
                className="grid size-11 place-items-center rounded-full bg-sun text-night"
              >
                <WhatsAppIcon className="size-5" />
              </WhatsAppLink>
            </>
          }
        />
      </div>
    </header>
  );
}
