import type { Metadata, Viewport } from "next";
import { Baloo_2, Barlow } from "next/font/google";
import { GtmNoScript, GtmScript } from "@/components/analytics/Gtm";
import { TrackingListener } from "@/components/analytics/TrackingListener";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { StickyContactBar } from "@/components/layout/StickyContactBar";
import { BUSINESS } from "@/lib/business";
import { GOOGLE_SITE_VERIFICATION, SITE_URL } from "@/lib/site";
import "./globals.css";

// Same families as the logo: Baloo 2 for headings, Barlow (Barlow Condensed's sibling) for text.
// Only two Barlow weights are loaded to keep the mobile LCP down; browsers map 500 → 400 and
// 700 → 600, so font-medium and font-bold still render sensibly.
const display = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  display: "swap",
});

const body = Barlow({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: BUSINESS.name,
  applicationName: BUSINESS.name,
  formatDetection: { telephone: false, email: false, address: false },
  ...(GOOGLE_SITE_VERIFICATION && { verification: { google: GOOGLE_SITE_VERIFICATION } }),
};

export const viewport: Viewport = {
  themeColor: "#0e4d3c",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      {/* Bottom padding on mobile matches the sticky contact bar so it never covers content. */}
      <body className="pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
        <GtmNoScript />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <StickyContactBar />
        <TrackingListener />
        <GtmScript />
      </body>
    </html>
  );
}
