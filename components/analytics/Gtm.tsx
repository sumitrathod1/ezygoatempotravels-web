"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";
import { GTM_ID, SITE_HOST } from "@/lib/site";

const DEBUG_FLAG = "gtm_debug";
const VALID_ID = /^GTM-[A-Z0-9]+$/;

/**
 * GTM loads on the production host only, or when GTM Preview has added `gtm_debug` to the URL.
 * The debug flag is kept in sessionStorage so Preview keeps working on later pages in that tab.
 * This keeps localhost and staging traffic out of GA4 and Google Ads.
 */
function shouldLoadGtm(): boolean {
  if (window.location.hostname === SITE_HOST) return true;
  const inUrl = new URLSearchParams(window.location.search).has(DEBUG_FLAG);
  try {
    if (inUrl) window.sessionStorage.setItem(DEBUG_FLAG, "1");
    return window.sessionStorage.getItem(DEBUG_FLAG) === "1";
  } catch {
    return inUrl;
  }
}

const subscribe = () => () => {};

export function GtmScript() {
  const enabled = useSyncExternalStore(subscribe, shouldLoadGtm, () => false);
  if (!enabled || !VALID_ID.test(GTM_ID)) return null;

  return (
    <Script id="gtm" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}

export function GtmNoScript() {
  if (!VALID_ID.test(GTM_ID)) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
