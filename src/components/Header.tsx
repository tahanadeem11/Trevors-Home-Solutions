"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { Phone } from "./icons";
import { BUSINESS } from "@/lib/data";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Our Work" },
  { href: "#area", label: "Service Area" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      setHidden(y > last && y > 400);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
        <div
          data-progress
          className="h-full origin-left bg-gradient-to-r from-accent via-white to-brand"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ${hidden && !open ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div
          className={`mx-auto mt-3 flex max-w-7xl items-center justify-between gap-4 rounded-full px-3 py-2 pr-3 transition-all duration-500 sm:px-4 ${scrolled || open ? "glass mx-3 lg:mx-auto" : "mx-3 border border-transparent lg:mx-auto"}`}
        >
          <a href="#top" className="flex items-center gap-3" aria-label="Trevor's Home Solutions, back to top">
            <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-black/5">
              <Image src="/logo.jpg" alt="" width={44} height={48} className="h-10 w-auto" />
            </span>
            <span className="display hidden text-xl leading-none sm:block">
              Trevor&apos;s <span className="text-accent">Home</span> Solutions
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative rounded-full px-4 py-2 text-sm font-semibold text-fg/80 transition-colors hover:text-fg"
              >
                {l.label}
                <span className="absolute inset-x-4 bottom-1 h-[2px] origin-left scale-x-0 rounded bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={BUSINESS.phoneHref}
              data-magnetic
              className="btn btn-primary hidden !px-5 !py-3 md:inline-flex"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="glass grid h-11 w-11 place-items-center rounded-full lg:hidden"
            >
              <span className="relative block h-3.5 w-5">
                <span className={`absolute left-0 h-[2px] w-full rounded bg-fg transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 top-1.5 h-[2px] w-full rounded bg-fg transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 h-[2px] w-full rounded bg-fg transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-bg/90 px-8 backdrop-blur-2xl transition-all duration-500 lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="display text-5xl transition-all duration-500"
            style={{
              transitionDelay: open ? `${i * 70 + 100}ms` : "0ms",
              transform: open ? "none" : "translateY(30px)",
              opacity: open ? 1 : 0,
            }}
          >
            {l.label}
          </a>
        ))}
        <a href={BUSINESS.phoneHref} className="btn btn-primary mt-6 self-start">
          <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
        </a>
      </div>
    </>
  );
}
