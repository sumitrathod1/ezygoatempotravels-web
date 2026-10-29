import Link from "next/link";
import { LegalPage } from "@/components/sections/LegalPage";
import { CallLink, EmailLink, WhatsAppLink } from "@/components/ui/ContactLinks";
import { BUSINESS } from "@/lib/business";
import { POLICY } from "@/lib/policy";
import { pageMetadata } from "@/lib/seo";

const PATH = "/cancellation-refund-policy/";

export const metadata = pageMetadata({
  title: "Cancellation and Refund Policy | Ezy Goa Tempo Travels",
  description:
    "How to cancel or change a booking with Ezy Goa Tempo Travels: free cancellation up to 24 hours before pickup, refunds, no-shows and mini bus bookings.",
  path: PATH,
});

export default function CancellationPage() {
  return (
    <LegalPage title="Cancellation and Refund Policy" path={PATH}>
      <p>
        Plans change. This page explains how to cancel or change a booking with {BUSINESS.name}, and what is
        refunded.
      </p>

      <h2>In short</h2>
      <ul>
        <li>{POLICY.freeCancellation}</li>
        <li>{POLICY.lateCancellation}</li>
        <li>{POLICY.refundMethod}</li>
      </ul>

      <h2>How to cancel or change a booking</h2>
      <p>
        Tell us as early as you can, on <WhatsAppLink location="content">WhatsApp</WhatsAppLink>, by phone on{" "}
        <CallLink location="content">{BUSINESS.phoneDisplay}</CallLink> or by email to{" "}
        <EmailLink location="content">{BUSINESS.email}</EmailLink>. Please include your name, the trip date and
        the pickup point so we can find the booking. The time we receive your message is the time used for the
        cancellation.
      </p>

      <h2>Advance payment</h2>
      <p>
        {POLICY.advance} {POLICY.balance}
      </p>

      <h2>Cancellation charges</h2>
      <p>
        {POLICY.freeCancellation} {POLICY.advanceRefund}
      </p>
      <p>{POLICY.lateCancellation}</p>

      <h2>Refunds</h2>
      <p>{POLICY.refundMethod}</p>

      <h2>If we have to cancel</h2>
      <p>{POLICY.weCancel}</p>

      <h2>Changes to date, time or route</h2>
      <p>
        We&apos;ll try to accommodate changes, subject to vehicle availability. A change to the route or
        duration may change the quote.
      </p>

      <h2>No-shows and late arrivals</h2>
      <p>
        {POLICY.noShow} {POLICY.runningLate}
      </p>
      <p>
        For airport pickups, the driver tracks your flight and waits up to 60 minutes after the confirmed pickup
        time, so a delayed flight doesn&apos;t count as a no-show.
      </p>

      <h2>Mini bus bookings</h2>
      <p>
        Mini buses are supplied by our partner operators. {POLICY.partnerBus}
      </p>

      <h2>Dudhsagar jeep safari</h2>
      <p>
        The jeep safari is run by the forest department and paid for separately on the day, so it isn&apos;t
        part of our refund.
      </p>

      <p>
        See also our <Link href="/terms-and-conditions/">terms and conditions</Link>.
      </p>
    </LegalPage>
  );
}
