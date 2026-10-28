import type { ReactNode } from "react";
import { MAILTO_HREF, TEL_HREF } from "@/lib/business";
import type { ClickLocation } from "@/lib/track";
import { waHref } from "@/lib/whatsapp";

// Plain anchors with a data-click-location attribute. The click events themselves are pushed by
// TrackingListener, so these stay server components and any tel:/wa.me/mailto: link is tracked.

interface LinkProps {
  location: ClickLocation;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
}

export function WhatsAppLink({ message, location, ...rest }: LinkProps & { message?: string }) {
  return (
    <a
      href={waHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-click-location={location}
      {...rest}
    />
  );
}

export function CallLink({ location, ...rest }: LinkProps) {
  return <a href={TEL_HREF} data-click-location={location} {...rest} />;
}

export function EmailLink({ location, ...rest }: LinkProps) {
  return <a href={MAILTO_HREF} data-click-location={location} {...rest} />;
}
