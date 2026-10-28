import Link from "next/link";
import { LegalPage } from "@/components/sections/LegalPage";
import { CallLink, EmailLink, WhatsAppLink } from "@/components/ui/ContactLinks";
import { Placeholder } from "@/components/ui/Placeholder";
import { BUSINESS } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";

const PATH = "/cancellation-refund-policy/";

export const metadata = pageMetadata({
  title: "Cancellation and Refund Policy | Ezy Goa Tempo Travels",
  description:
    "How to cancel or change a booking with Ezy Goa Tempo Travels, cancellation charges, refunds and partner-operated bookings.",
  path: PATH,
});

export default function CancellationPage() {
  return (
    <LegalPage title="Cancellation and Refund Policy" path={PATH}>
      <p>
        Plans change. This page explains how to cancel or change a booking with {BUSINESS.name}, and what is
        refunded.
      </p>

      <h2>How to cancel or change a booking</h2>
      <p>
        Tell us as early as you can, on <WhatsAppLink location="content">WhatsApp</WhatsAppLink>, by phone on{" "}
        <CallLink location="content">{BUSINESS.phoneDisplay}</CallLink> or by email to{" "}
        <EmailLink location="content">{BUSINESS.email}</EmailLink>. Please include your name, the trip date and
        the pickup point so we can find the booking. The time we receive your message is the time used for the
        cancellation.
      </p>

      <h2>Cancellation charges</h2>
      <p>
        <Placeholder>cancellation windows and charges (for example, how many hours or days before pickup)</Placeholder>
      </p>

      <h2>Advance payment</h2>
      <p>
        <Placeholder>advance amount, and whether it is refundable</Placeholder>
      </p>

      <h2>Refunds</h2>
      <p>
        <Placeholder>how refunds are paid (method) and how long they take</Placeholder>
      </p>

      <h2>If we have to cancel</h2>
      <p>
        <Placeholder>what happens if Ezy Goa Tempo Travels cancels (refund, alternative vehicle)</Placeholder>
      </p>

      <h2>Changes to date, time or route</h2>
      <p>
        We&apos;ll try to accommodate changes, subject to vehicle availability. A change to the route or
        duration may change the quote.
      </p>

      <h2>No-shows and late arrivals</h2>
      <p>
        <Placeholder>what happens if the group doesn&apos;t turn up, or is very late, at pickup</Placeholder>
      </p>

      <h2>Partner-operated bookings</h2>
      <p>
        Mini buses are supplied by partner operators, and cancellations for them may follow the
        operator&apos;s own terms. The Dudhsagar jeep safari is run by the forest department and paid for
        separately on the day.{" "}
        <Placeholder>how cancellations work for partner-operated mini buses</Placeholder>
      </p>

      <p>
        See also our <Link href="/terms-and-conditions/">terms and conditions</Link>.
      </p>
    </LegalPage>
  );
}
