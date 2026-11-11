import Split from "./Split";
import { Arrow, Clock, Phone, Pin, Shield } from "./icons";
import { BUSINESS } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-24 pt-32"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-bg via-bg to-bg-2" />
      <div className="absolute -left-40 top-20 -z-10 h-[34rem] w-[34rem] rounded-full bg-brand/25 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[120px]" />
      <div className="grid-bg absolute inset-0 -z-10" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div>
          <div
            data-hero
            className="glass inline-flex items-center gap-3 rounded-full py-2 pl-3 pr-5 text-sm font-semibold"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            Open 24/7 &middot; Bartow, FL &amp; surrounding 80 miles
          </div>

          <Split as="h1" hero className="display mt-7 max-w-5xl text-[clamp(3.4rem,10.5vw,9rem)]"
          >
            Septic &amp; plumbing <span className="text-accent">fixed</span> fast.
            Done <span className="text-brand">right.</span>
          </Split>

          <p
            data-hero
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            For over 12 years, Trevor&apos;s Home Solutions has kept homes
            flowing across Central Florida. Pumping, cleaning, inspection,
            hydro-jetting and repair, any hour of the day.
          </p>

          <div data-hero className="mt-9 flex flex-wrap items-center gap-4">
            <a href={BUSINESS.phoneHref} data-magnetic className="btn btn-primary text-base">
              <Phone className="h-5 w-5" />
              Call {BUSINESS.phone}
            </a>
            <a href="#services" data-magnetic className="btn btn-ghost text-base">
              Explore services
              <Arrow className="h-4 w-4" />
            </a>
          </div>

          <ul data-hero className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold text-fg/80">
            <li className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-brand" /> 12+ years experience
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-brand" /> Emergency service 24/7
            </li>
            <li className="flex items-center gap-2">
              <Pin className="h-5 w-5 text-brand" /> Serving 80 miles around Bartow
            </li>
          </ul>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#services"
        aria-label="Scroll to services"
        data-hero
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-muted md:flex"
      >
        Scroll
        <span className="relative h-10 w-[2px] overflow-hidden rounded bg-line">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[cue_1.6s_ease-in-out_infinite] rounded bg-accent" />
        </span>
      </a>
      <style>{`@keyframes cue{0%{transform:translateY(-100%)}100%{transform:translateY(200%)}}`}</style>
    </section>
  );
}
