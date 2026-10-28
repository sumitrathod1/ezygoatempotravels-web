import Link from "next/link";
import { LegalPage } from "@/components/sections/LegalPage";
import { CallLink, EmailLink } from "@/components/ui/ContactLinks";
import { Placeholder } from "@/components/ui/Placeholder";
import { ADDRESS_ONE_LINE, BUSINESS } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";

const PATH = "/terms-and-conditions/";

export const metadata = pageMetadata({
  title: "Terms and Conditions | Ezy Goa Tempo Travels",
  description:
    "Terms for hiring tempo travellers, the Force Urbania and partner-operated mini buses with drivers from Ezy Goa Tempo Travels in Goa.",
  path: PATH,
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions" path={PATH}>
      <p>
        These terms apply when you book a vehicle with {BUSINESS.name}, {ADDRESS_ONE_LINE}. By confirming a
        booking, you agree to them. If anything here is unclear, ask us before you book.
      </p>

      <h2>What we provide</h2>
      <ul>
        <li>Tempo travellers and Force Urbanias of our own, hired with a driver.</li>
        <li>
          Mini buses, supplied by partner operators and arranged by us. The partner operator runs the vehicle
          on the day.
        </li>
        <li>
          On the Dudhsagar trip, our vehicle goes as far as the Kulem/Mollem checkpoint. The last stretch to the
          falls is by the forest department&apos;s jeep safari, which is paid for separately.
        </li>
      </ul>
      <p>
        Entry tickets, boat rides, river cruises, food and other activities at the places you visit are provided
        by third parties and are not part of our service unless your quote says so.
      </p>

      <h2>Quotes and booking</h2>
      <p>
        There are no prices on this website. Every trip is quoted individually on WhatsApp, by phone or by email,
        based on the vehicle, date, route and duration you give us. A quote applies only to the trip it
        describes; if the plan changes, the quote may change too.
      </p>
      <p>
        <strong>Confirming a booking:</strong>{" "}
        <Placeholder>how a booking is confirmed, and any advance amount</Placeholder>
      </p>
      <p>
        <strong>What a quote includes:</strong>{" "}
        <Placeholder>tolls, parking, driver allowance, night charges: included or extra (words only)</Placeholder>
      </p>

      <h2>Payment</h2>
      <p>
        <Placeholder>payment methods, and when the balance is due</Placeholder>
      </p>

      <h2>Cancellations and changes</h2>
      <p>
        Cancellations and refunds are covered by our{" "}
        <Link href="/cancellation-refund-policy/">cancellation and refund policy</Link>. To change the date,
        time or route, contact us as early as possible; changes depend on vehicle availability.
      </p>

      <h2>Passengers and luggage</h2>
      <ul>
        <li>
          The number of passengers may not exceed the seats in the vehicle booked. Tell us the real group size
          when you book.
        </li>
        <li>
          Tell us about large or unusual luggage in advance. Luggage space is limited; see the{" "}
          <Link href="/fleet/">fleet page</Link> for each vehicle.
        </li>
        <li>You are responsible for your own belongings. Please check the vehicle before you leave it.</li>
      </ul>

      <h2>On the road</h2>
      <ul>
        <li>Passengers must follow the law and the driver&apos;s safety instructions, and wear seat belts where fitted.</li>
        <li>
          The driver may refuse to continue a trip if passengers behave in a way that puts anyone&apos;s safety at
          risk.
        </li>
        <li>
          Any damage to the vehicle caused by passengers, beyond normal wear, may be charged to the person who
          made the booking.
        </li>
      </ul>

      <h2>Delays outside our control</h2>
      <p>
        Travel times depend on traffic, weather, road closures, festivals and events. We plan with reasonable
        margins, but we are not responsible for delays or missed connections caused by things outside our
        control. For flights and trains, allow enough time when you choose a pickup time.
      </p>

      <h2>Liability</h2>
      <p>
        We take reasonable care to provide safe, roadworthy vehicles and licensed drivers. Nothing in these terms
        limits any liability that cannot be limited under Indian law.
      </p>

      <h2>Your information</h2>
      <p>
        How we handle your information is explained in our <Link href="/privacy-policy/">privacy policy</Link>.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India, and the courts in Goa have jurisdiction.</p>

      <h2>Contact</h2>
      <p>
        {BUSINESS.name}, {ADDRESS_ONE_LINE}. Phone and WhatsApp{" "}
        <CallLink location="content">{BUSINESS.phoneDisplay}</CallLink>, email{" "}
        <EmailLink location="content">{BUSINESS.email}</EmailLink>.
      </p>
    </LegalPage>
  );
}
