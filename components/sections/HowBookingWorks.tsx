import Link from "next/link";
import { Placeholder } from "@/components/ui/Placeholder";
import { SectionHeading } from "./SectionHeading";

const STEPS = [
  {
    title: "Send your trip details",
    text: "Use the form, WhatsApp or a phone call. The date, pickup point, group size and where you want to go are enough to start.",
  },
  {
    title: "Get a vehicle and a quote",
    text: "We check which vehicle is free on your date and send you a quote for the whole trip. Ask anything before you decide.",
  },
  {
    title: "Confirm your booking",
    text: "Once you're happy with the quote, confirm on WhatsApp or by phone and your vehicle is booked.",
  },
];

export function HowBookingWorks() {
  return (
    <section aria-labelledby="how-booking-works" className="py-16">
      <div className="container-page">
        <SectionHeading id="how-booking-works" eyebrow="Booking" title="How booking works" />
        <ol className="grid gap-5 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-line bg-white p-6">
              <span className="grid size-10 place-items-center rounded-full bg-forest font-display text-lg font-bold text-sun">
                {i + 1}
              </span>
              <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>

        <dl className="mt-6 grid gap-5 rounded-2xl bg-sand p-6 md:grid-cols-2">
          <div>
            <dt className="font-semibold">Payment</dt>
            <dd className="mt-1 text-muted">
              <Placeholder>advance amount, when the balance is paid, and payment methods (UPI / cash / bank)</Placeholder>
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Cancellation</dt>
            <dd className="mt-1 text-muted">
              <Placeholder>one-line cancellation summary</Placeholder>{" "}
              <Link href="/cancellation-refund-policy/" className="font-medium text-forest underline">
                Read the cancellation and refund policy
              </Link>
              .
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
