"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { BUSINESS } from "@/lib/business";
import { MAIN_NAV, isGroup, type NavGroup } from "@/lib/nav";
import { CallLink, WhatsAppLink } from "@/components/ui/ContactLinks";
import { WhatsAppIcon } from "@/components/ui/Icons";

const strip = (path: string) => (path.length > 1 ? path.replace(/\/+$/, "") : path);
const DESKTOP = "(min-width: 1280px)";

/**
 * The header's navigation: desktop dropdowns and the mobile menu panel, in one small client
 * component with no menu library. While the mobile menu is open, <html data-menu-open> locks page
 * scroll and hides the sticky Call | WhatsApp bar (see globals.css).
 */
export function HeaderNav({ desktopActions, mobileActions }: { desktopActions: ReactNode; mobileActions: ReactNode }) {
  const pathname = strip(usePathname() ?? "/");
  const isCurrent = (href: string) => strip(href) === pathname;
  const groupIsCurrent = (group: NavGroup) => group.children.some((c) => isCurrent(c.href));

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [desktopGroup, setDesktopGroup] = useState<string | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const desktopNav = useRef<HTMLElement>(null);

  // Close everything on a route change (covers back/forward as well as link taps).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setDesktopGroup(null);
  }

  function openMenu() {
    // Open the accordion that holds the current page, so it's visible straight away.
    const current = MAIN_NAV.find((item) => isGroup(item) && groupIsCurrent(item));
    setMobileGroup(current?.label ?? null);
    setMenuOpen(true);
  }

  function closeMenu(returnFocus = false) {
    setMenuOpen(false);
    if (returnFocus) menuButton.current?.focus();
  }

  useEffect(() => {
    if (!menuOpen) return;
    const root = document.documentElement;
    root.dataset.menuOpen = "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      menuButton.current?.focus();
    };
    // If the window is widened to desktop size, the panel disappears, so close it properly.
    const desktop = window.matchMedia(DESKTOP);
    const onResize = () => desktop.matches && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      delete root.dataset.menuOpen;
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!desktopGroup) return;
    const onPointer = (e: PointerEvent) => {
      if (!desktopNav.current?.contains(e.target as Node)) setDesktopGroup(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDesktopGroup(null);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [desktopGroup]);

  const desktopLink = (active: boolean) =>
    `rounded-lg px-2.5 py-2 font-medium xl:px-3 ${active ? "bg-mint text-forest" : "text-ink hover:bg-mint"}`;

  return (
    <div className="flex flex-1 items-center justify-end gap-2 xl:justify-between xl:gap-4">
      {/* ---------- Desktop ---------- */}
      <nav ref={desktopNav} aria-label="Main" className="hidden items-center gap-0.5 xl:flex">
        {MAIN_NAV.filter((item) => isGroup(item) || item.href !== "/").map((item) =>
          isGroup(item) ? (
            <div key={item.label} className="group relative">
              <button
                type="button"
                aria-expanded={desktopGroup === item.label}
                aria-controls={`desktop-${item.label}`}
                onClick={() => setDesktopGroup((g) => (g === item.label ? null : item.label))}
                className={`flex items-center gap-1 ${desktopLink(groupIsCurrent(item))}`}
              >
                {item.label}
                <ChevronDown
                  className={`size-4 transition-transform ${desktopGroup === item.label ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`desktop-${item.label}`}
                className={`absolute top-full left-0 z-50 min-w-64 pt-2 transition group-hover:visible group-hover:opacity-100 ${
                  desktopGroup === item.label ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                <ul className="rounded-2xl border border-line bg-white p-2 shadow-xl">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        aria-current={isCurrent(child.href) ? "page" : undefined}
                        onClick={() => setDesktopGroup(null)}
                        className={`block rounded-lg px-3 py-2.5 ${
                          isCurrent(child.href) ? "bg-mint font-semibold text-forest" : "text-ink hover:bg-mint"
                        }`}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              className={desktopLink(isCurrent(item.href))}
            >
              {item.label}
            </Link>
          ),
        )}
      </nav>
      <div className="hidden items-center gap-3 xl:flex">{desktopActions}</div>

      {/* ---------- Mobile ---------- */}
      <div className="flex items-center gap-2 xl:hidden">
        {mobileActions}
        <button
          ref={menuButton}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => (menuOpen ? closeMenu() : openMenu())}
          className="grid size-12 place-items-center rounded-full border border-line bg-white text-ink"
        >
          {menuOpen ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Dim overlay under the header; a tap closes the menu. */}
      <div
        aria-hidden="true"
        onClick={() => closeMenu()}
        className={`fixed inset-x-0 top-16 bottom-0 bg-night/50 transition-opacity xl:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <nav
        id="mobile-menu"
        aria-label="Menu"
        inert={!menuOpen}
        // Any link tap closes the menu, including the call and WhatsApp buttons.
        onClick={(e) => e.target instanceof Element && e.target.closest("a") && closeMenu()}
        className={`absolute inset-x-0 top-full max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain border-b border-line bg-white shadow-xl transition duration-200 xl:hidden ${
          menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <ul className="px-4 pt-3 pb-2">
          {MAIN_NAV.map((item) => {
            if (!isGroup(item)) {
              const active = isCurrent(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-12 items-center rounded-xl px-4 text-lg font-semibold ${
                      active ? "bg-mint text-forest" : "text-ink hover:bg-mint"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }
            const open = mobileGroup === item.label;
            const panelId = `mobile-group-${item.label.toLowerCase()}`;
            return (
              <li key={item.label}>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setMobileGroup(open ? null : item.label)}
                  className={`flex min-h-12 w-full items-center justify-between rounded-xl px-4 text-lg font-semibold ${
                    groupIsCurrent(item) ? "text-forest" : "text-ink"
                  } hover:bg-mint`}
                >
                  {item.label}
                  <ChevronDown
                    className={`size-5 text-forest transition-transform ${open ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <ul id={panelId} hidden={!open} className="mb-1 ml-4 border-l-2 border-sun/60 pl-2">
                  {item.children.map((child) => {
                    const active = isCurrent(child.href);
                    return (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={active ? "page" : undefined}
                          className={`flex min-h-12 items-center rounded-xl px-4 ${
                            active ? "bg-mint font-semibold text-forest" : "text-ink hover:bg-mint"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
        <div className="grid gap-3 border-t border-line px-4 pt-4 pb-6">
          <CallLink
            location="header"
            className="flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-forest font-semibold text-forest"
          >
            <Phone className="size-5" aria-hidden="true" />
            Call {BUSINESS.phoneDisplay}
          </CallLink>
          <WhatsAppLink location="header" className="btn btn-sun w-full text-lg">
            <WhatsAppIcon className="size-5" />
            Get a quote on WhatsApp
          </WhatsAppLink>
        </div>
      </nav>
    </div>
  );
}
