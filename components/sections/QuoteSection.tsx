import type { TripType, VehicleChoice } from "@/lib/booking";
import { BookingForm } from "@/components/booking/BookingForm";
import { SectionHeading } from "./SectionHeading";

/** The full booking form in its own section (id="book"). */
export function QuoteSection({
  title = "Get a quote",
  intro = "Fill in what you know. Your details open in WhatsApp, ready to send.",
  defaultTripType,
  defaultVehicle,
  subject,
  sand = false,
}: {
  title?: string;
  intro?: string;
  defaultTripType?: TripType;
  defaultVehicle?: VehicleChoice;
  /** Tour or service name added to the WhatsApp message. */
  subject?: string;
  sand?: boolean;
}) {
  return (
    <section id="book" aria-labelledby="book-heading" className={`py-16 ${sand ? "bg-sand" : ""}`}>
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <SectionHeading id="book-heading" eyebrow="Get a quote" title={title} intro={intro} />
          <div className="rounded-3xl border border-line bg-white p-5 shadow-sm sm:p-8">
            <BookingForm defaultTripType={defaultTripType} defaultVehicle={defaultVehicle} subject={subject} />
          </div>
        </div>
      </div>
    </section>
  );
}
