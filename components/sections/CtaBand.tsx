import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import type { NavLink } from "@/lib/nav";
import { CallLink, WhatsAppLink } from "@/components/ui/ContactLinks";
import { WhatsAppIcon } from "@/components/ui/Icons";

export function CtaBand({
  title = "Ready to plan your group's trip?",
  text = "Send your date, pickup point and group size, and we'll come back with the right vehicle and a quote.",
  message,
}: {
  title?: string;
  text?: string;
  message?: string;
}) {
  return (
    <section className="on-dark bg-forest py-14 text-white">
      <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold">{title}</h2>
          <p className="mt-2 text-lg text-white/85">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppLink location="content" message={message} className="btn btn-sun">
            <WhatsAppIcon className="size-5" />
            Get a quote on WhatsApp
          </WhatsAppLink>
          <CallLink location="content" className="btn btn-outline-light">
            <Phone className="size-5" aria-hidden="true" />
            Call now
          </CallLink>
        </div>
      </div>
    </section>
  );
}

export function RelatedLinks({ title = "Related pages", links }: { title?: string; links: NavLink[] }) {
  return (
    <nav aria-labelledby="related-links" className="py-12">
      <div className="container-page">
        <h2 id="related-links" className="text-2xl font-bold text-forest">
          {title}
        </h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex min-h-14 items-center justify-between gap-2 rounded-xl border border-line bg-white px-4 py-3 font-semibold text-ink hover:border-forest hover:text-forest"
              >
                {link.label}
                <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
