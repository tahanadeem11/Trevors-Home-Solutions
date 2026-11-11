import Image from "next/image";
import { BUSINESS, plumbingServices, septicServices } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line px-5 pb-10 pt-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <div className="inline-block rounded-2xl bg-white p-3 shadow-lg ring-1 ring-black/5">
            <Image src="/logo.jpg" alt="Trevor's Home Solutions" width={914} height={1000} className="h-28 w-auto" />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            Septic and plumbing services in Bartow, FL and the surrounding 80 miles. Open 24/7.
          </p>
        </div>
        <div>
          <h4 className="display text-2xl">Septic</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {septicServices.map((s) => (
              <li key={s.key}><a href="#services" className="hover:text-accent">{s.title}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="display text-2xl">Plumbing</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {plumbingServices.map((s) => (
              <li key={s.key}><a href="#services" className="hover:text-accent">{s.title}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="display text-2xl">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li><a href={BUSINESS.phoneHref} className="font-bold text-fg hover:text-accent">{BUSINESS.phone}</a></li>
            {BUSINESS.emails.map((m) => (
              <li key={m}><a href={`mailto:${m}`} className="hover:text-accent">{m}</a></li>
            ))}
            <li>{BUSINESS.address}</li>
            <li>Open 24/7</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-xs text-muted">
        <p>&copy; {new Date().getFullYear()} Trevor&apos;s Home Solutions. All rights reserved.</p>
        <a href="#top" className="font-bold text-fg hover:text-accent">Back to top ↑</a>
      </div>
      <div className="display pointer-events-none mt-6 select-none text-center text-[17vw] leading-none text-fg/[0.04]" aria-hidden="true">
        Trevor&apos;s
      </div>
    </footer>
  );
}
