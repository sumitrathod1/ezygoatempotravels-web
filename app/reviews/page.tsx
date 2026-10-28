import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Band, Prose } from "@/components/sections/Prose";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { WhatsAppLink } from "@/components/ui/ContactLinks";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { Placeholder } from "@/components/ui/Placeholder";
import { BUSINESS, SOCIAL_PROFILES } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";

const PATH = "/reviews/";

export const metadata = pageMetadata({
  title: "Customer Reviews | Ezy Goa Tempo Travels",
  description:
    "Feedback from groups who have travelled with Ezy Goa Tempo Travels. Published only with the customer's permission.",
  path: PATH,
});

// Real feedback only, added with the customer's permission: first name, city, group type,
// month/year and trip. Never write or edit a review. No Review/AggregateRating schema (§9).
const FEEDBACK: { name: string; city: string; group: string; when: string; trip: string; text: string }[] = [];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Reviews", href: PATH }]}
        title="Customer Reviews"
        lead={
          <p>
            What groups say after travelling with us. We only publish real feedback, with the
            customer&apos;s permission, and we don&apos;t edit what they write.
          </p>
        }
      />

      <Band>
        {FEEDBACK.length > 0 ? (
          <ul className="grid gap-5 md:grid-cols-2">
            {FEEDBACK.map((f) => (
              <li key={f.name + f.when} className="rounded-2xl border border-line bg-white p-6">
                <blockquote className="text-lg text-ink">&ldquo;{f.text}&rdquo;</blockquote>
                <p className="mt-4 font-semibold text-forest">
                  {f.name}, {f.city}
                </p>
                <p className="text-sm text-muted">
                  {f.group} · {f.trip} · {f.when}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-2xl border border-line bg-white p-6 text-lg text-muted">
            <Placeholder>real customer feedback (first name, city, group type, month/year, trip), shared with permission</Placeholder>
          </div>
        )}
      </Band>

      <Band sand>
        <div className="grid gap-10 lg:grid-cols-2">
          <Prose>
            <h2>Reviews elsewhere</h2>
            {SOCIAL_PROFILES.length > 0 ? (
              <ul>
                {SOCIAL_PROFILES.map((url) => (
                  <li key={url}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {new URL(url).hostname.replace(/^www\./, "")}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <Placeholder>links to review profiles that exist (Justdial, Facebook, Instagram, TripAdvisor)</Placeholder>
              </p>
            )}
          </Prose>
          <div>
            <SectionHeading title="Travelled with us?" intro="We'd like to hear how the trip went, good or bad." />
            <WhatsAppLink
              location="content"
              message={`Hi ${BUSINESS.name}, I'd like to share feedback about my trip.`}
              className="btn btn-forest -mt-2"
            >
              <WhatsAppIcon className="size-5" />
              Send feedback on WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </Band>

      <CtaBand />
    </>
  );
}
