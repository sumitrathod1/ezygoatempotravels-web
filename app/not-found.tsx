import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Ezy Goa Tempo Travels" },
  robots: { index: false },
};

const LINKS = [
  { label: "Home", href: "/", text: "Start from the home page." },
  { label: "Tempo traveller hire", href: "/tempo-traveller-in-goa/", text: "12, 14, 17 and 20 seaters with a driver." },
  { label: "Contact us", href: "/contact/", text: "Call, WhatsApp or email us." },
];

export default function NotFound() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-page max-w-3xl">
        <p className="eyebrow mb-2">Error 404</p>
        <h1 className="text-4xl font-extrabold text-forest sm:text-5xl">We couldn&apos;t find that page</h1>
        <p className="mt-4 text-lg text-muted">
          The link may be old or mistyped. These pages should help you find what you were looking for.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 hover:border-forest"
              >
                <span className="flex items-center gap-1 text-lg font-bold text-forest">
                  {link.label} <ArrowRight className="size-4" aria-hidden="true" />
                </span>
                <span className="mt-1 text-muted">{link.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
