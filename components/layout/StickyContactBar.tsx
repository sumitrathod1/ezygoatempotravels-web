import { Phone } from "lucide-react";
import { CallLink, WhatsAppLink } from "@/components/ui/ContactLinks";
import { WhatsAppIcon } from "@/components/ui/Icons";

/**
 * Mobile-only bar fixed to the bottom of the screen. The body has matching bottom padding
 * (see app/layout.tsx), so the bar never covers the form button or the footer links.
 */
export function StickyContactBar() {
  return (
    <div
      data-hide-when-menu-open
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgb(0_0_0/0.12)] md:hidden"
    >
      <CallLink
        location="sticky_bar"
        className="flex h-16 items-center justify-center gap-2 bg-forest text-lg font-semibold text-white"
      >
        <Phone className="size-5" aria-hidden="true" />
        Call now
      </CallLink>
      <WhatsAppLink
        location="sticky_bar"
        className="flex h-16 items-center justify-center gap-2 bg-sun text-lg font-semibold text-night"
      >
        <WhatsAppIcon className="size-6" />
        WhatsApp
      </WhatsAppLink>
    </div>
  );
}
