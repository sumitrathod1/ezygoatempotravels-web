import { LegalPage } from "@/components/sections/LegalPage";
import { CallLink, EmailLink } from "@/components/ui/ContactLinks";
import { Placeholder } from "@/components/ui/Placeholder";
import { ADDRESS_ONE_LINE, BUSINESS } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";
import { SITE_HOST } from "@/lib/site";

const PATH = "/privacy-policy/";

export const metadata = pageMetadata({
  title: "Privacy Policy | Ezy Goa Tempo Travels",
  description:
    "How Ezy Goa Tempo Travels handles your information: what the booking form does, analytics and Google Ads cookies, retention and your rights.",
  path: PATH,
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" path={PATH}>
      <p>
        This policy explains what information {BUSINESS.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles when
        you use {SITE_HOST} or contact us, why we use it, and the choices and rights you have. It is written
        with India&apos;s Digital Personal Data Protection Act, 2023 in mind.
      </p>

      <h2>Who we are</h2>
      <p>
        {BUSINESS.name}, {ADDRESS_ONE_LINE}. Phone and WhatsApp{" "}
        <CallLink location="content">{BUSINESS.phoneDisplay}</CallLink>, email{" "}
        <EmailLink location="content">{BUSINESS.email}</EmailLink>.
      </p>

      <h2>The booking form does not store your details</h2>
      <p>
        The quote form on this website does not send your details to us or save them anywhere on the
        website. When you press &ldquo;Get a quote on WhatsApp&rdquo;, your browser opens WhatsApp with a
        message already filled in from the form. Nothing reaches us until you press send in WhatsApp.
      </p>
      <p>
        The form asks for your name, mobile number, trip type, group size, vehicle, date, time, pickup and drop
        location and an optional note. Messages you send on WhatsApp are carried by WhatsApp (Meta), whose own
        privacy policy applies to that service.
      </p>

      <h2>Information we receive when you contact us</h2>
      <p>
        When you message, call or email us, we receive what you choose to share, usually your name, phone
        number, travel dates, pickup and drop points, group size and any special requests. We use it only to:
      </p>
      <ul>
        <li>reply to you and send a quote;</li>
        <li>arrange and run your trip, including sharing pickup details with the driver;</li>
        <li>keep the records a business has to keep, such as accounts and invoices.</li>
      </ul>
      <p>We do not sell your information, and we do not use it to send you marketing without your consent.</p>

      <h2>Who we share it with</h2>
      <ul>
        <li>
          <strong>Our drivers</strong>, so they can pick you up.
        </li>
        <li>
          <strong>Partner operators</strong>, only when your booking uses one: mini buses are supplied by
          partner operators. They receive only what they need to run that part of the trip.
        </li>
        <li>
          <strong>Authorities</strong>, where the law requires it.
        </li>
      </ul>

      <h2>Analytics and advertising cookies</h2>
      <p>
        On {SITE_HOST}, we use Google Tag Manager to load Google Analytics and Google Ads conversion
        tracking. These use cookies and similar technology to record how the website is used: pages visited,
        the type of device and browser, approximate location, how you arrived (for example, from a Google ad),
        and whether you tapped a call, WhatsApp or email button or sent the quote form.
      </p>
      <p>
        We do not send your name, phone number, email or the contents of the form to Google Analytics or
        Google Ads. We use this information in aggregate to understand which pages help people and whether our
        ads work.
      </p>
      <p>You can limit this tracking:</p>
      <ul>
        <li>block or delete cookies in your browser settings;</li>
        <li>
          install the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics opt-out browser add-on
          </a>
          ;
        </li>
        <li>
          manage ad personalisation in{" "}
          <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">
            Google&apos;s ad settings
          </a>
          .
        </li>
      </ul>
      <p>
        The map on our contact page loads from Google Maps only when you tap &ldquo;Show map&rdquo;; Google&apos;s
        privacy policy applies to it.
      </p>

      <h2>How long we keep information</h2>
      <p>
        We keep booking details only for as long as we need them to run your trip and to meet legal and
        accounting requirements. <Placeholder>how long booking details and chats are kept</Placeholder>
      </p>

      <h2>Your rights</h2>
      <p>Under the Digital Personal Data Protection Act, 2023, you can ask us to:</p>
      <ul>
        <li>tell you what personal data of yours we hold and how we use it;</li>
        <li>correct, complete or update it;</li>
        <li>erase it, where we no longer need it for the trip or by law;</li>
        <li>stop using it where you gave consent, by withdrawing that consent;</li>
        <li>let a person you nominate exercise these rights on your behalf.</li>
      </ul>
      <p>
        Send your request to <EmailLink location="content">{BUSINESS.email}</EmailLink> or call{" "}
        <CallLink location="content">{BUSINESS.phoneDisplay}</CallLink>.
      </p>

      <h2>Grievances</h2>
      <p>
        If you have a concern about how we handle your information, contact our grievance officer:{" "}
        <Placeholder>grievance officer&apos;s name</Placeholder>, {BUSINESS.name}, {ADDRESS_ONE_LINE}, email{" "}
        <EmailLink location="content">{BUSINESS.email}</EmailLink>. If you are not satisfied with our reply, you
        may complain to the Data Protection Board of India.
      </p>

      <h2>Children</h2>
      <p>
        Bookings should be made by adults. We do not knowingly collect personal data from children through this
        website.
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable care to protect the information you share with us. The website is served over a
        secure (HTTPS) connection, and the booking form does not store anything on our servers.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy, for example if the website or our services change. The date at the top shows
        when it was last updated.
      </p>

      <h2>Governing law</h2>
      <p>This policy is governed by the laws of India, and the courts in Goa have jurisdiction.</p>
    </LegalPage>
  );
}
