import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ADDRESS_LINES, BUSINESS } from "@/lib/business";
import { INFO_LINKS, LEGAL_LINKS, SERVICE_LINKS, VEHICLE_LINKS, type NavLink } from "@/lib/nav";
import { CallLink, EmailLink, WhatsAppLink } from "@/components/ui/ContactLinks";
import { WhatsAppIcon } from "@/components/ui/Icons";

function LinkColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <h2 className="font-display text-lg font-bold text-sun">{title}</h2>
      <ul className="mt-3 space-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="inline-block py-1 hover:text-white hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="on-dark bg-night text-white/85" data-click-location="footer">
      <div className="road-line" aria-hidden="true" />
      <div className="container-page grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        {/* Name, address, phone and email appear on every page (Google Ads advertiser verification). */}
        <div>
          <Image
            src="/brand/logo-dark.svg"
            alt={BUSINESS.name}
            width={190}
            height={60}
            unoptimized
            className="h-14 w-auto"
          />
          <address className="mt-5 space-y-3 not-italic">
            <p className="font-semibold text-white">{BUSINESS.name}</p>
            <p className="flex gap-3">
              <MapPin className="mt-1 size-5 shrink-0 text-sun" aria-hidden="true" />
              <span>
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="size-5 shrink-0 text-sun" aria-hidden="true" />
              <CallLink location="footer" className="py-1 hover:text-white hover:underline">
                {BUSINESS.phoneDisplay}
              </CallLink>
            </p>
            <p className="flex items-center gap-3">
              <WhatsAppIcon className="size-5 shrink-0 text-sun" />
              <WhatsAppLink location="footer" className="py-1 hover:text-white hover:underline">
                WhatsApp {BUSINESS.phoneDisplay}
              </WhatsAppLink>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="size-5 shrink-0 text-sun" aria-hidden="true" />
              <EmailLink location="footer" className="py-1 break-all hover:text-white hover:underline">
                {BUSINESS.email}
              </EmailLink>
            </p>
            <p className="flex items-center gap-3">
              <Clock className="size-5 shrink-0 text-sun" aria-hidden="true" />
              <span>{BUSINESS.hours}</span>
            </p>
          </address>
        </div>
        <LinkColumn title="Vehicles" links={VEHICLE_LINKS} />
        <LinkColumn title="Services" links={SERVICE_LINKS} />
        <LinkColumn title="Information" links={INFO_LINKS} />
      </div>

      <div className="border-t border-white/15">
        <div className="container-page flex flex-col gap-3 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-block py-1 hover:text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
