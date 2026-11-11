"use client";

import Split from "./Split";
import { useState } from "react";
import { Arrow, Clock, Mail, Phone, Pin } from "./icons";
import { BUSINESS } from "@/lib/data";

const options = [
  "Septic system pumping",
  "Septic system cleaning",
  "Septic system inspection",
  "Septic system repair",
  "Hydro-jetting",
  "Plumbing inspection",
  "Plumbing installation or replacement",
  "Plumbing repair",
  "Something else",
];

const field =
  "w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-white/50 outline-none transition focus:border-white/70 focus:bg-white/15";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Service request: ${f.get("service")}`;
    const body = `Name: ${f.get("name")}\nPhone: ${f.get("phone")}\nService: ${f.get("service")}\n\n${f.get("message")}`;
    window.location.href = `mailto:${BUSINESS.emails[0]}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative scroll-mt-20 px-5 py-20 sm:px-8 lg:py-32">
      <div
        data-reveal
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1a3ccf] via-[#0f2594] to-[#07123a] p-8 text-white sm:p-14"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/40 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[#5b81ff]/40 blur-[110px]" />

        <div className="relative grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="eyebrow !text-[#ff8b92]">Get in touch</span>
            <Split as="h2" className="display mt-5 text-[clamp(2.8rem,6.5vw,5.5rem)]">
              Septic or plumbing trouble? Call now.
            </Split>
            <p className="mt-6 max-w-md text-lg text-white/75">
              We answer around the clock. Describe the problem and we will get you on the schedule fast.
            </p>

            <a
              href={BUSINESS.phoneHref}
              data-magnetic
              className="btn btn-primary mt-9 !px-8 !py-5 text-xl"
            >
              <Phone className="h-6 w-6" />
              {BUSINESS.phone}
            </a>

            <ul className="mt-10 space-y-4 text-white/85">
              <li className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-[#ff8b92]" /> Open 24 hours, 7 days a week
              </li>
              {BUSINESS.emails.map((m) => (
                <li key={m} className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-[#ff8b92]" />
                  <a href={`mailto:${m}`} className="underline decoration-white/30 underline-offset-4 hover:decoration-white">
                    {m}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-4">
                <Pin className="h-5 w-5 text-[#ff8b92]" />
                <a href={BUSINESS.mapsHref} target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">
                  {BUSINESS.address}
                </a>
              </li>
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="self-center rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl sm:p-8"
          >
            <h3 className="display text-3xl">Request a quote</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="sr-only" htmlFor="name">Your name</label>
              <input id="name" name="name" required placeholder="Your name" autoComplete="name" className={field} />
              <label className="sr-only" htmlFor="phone">Phone number</label>
              <input id="phone" name="phone" required type="tel" placeholder="Phone number" autoComplete="tel" className={field} />
            </div>
            <label className="sr-only" htmlFor="service">Service needed</label>
            <select
              id="service"
              name="service"
              defaultValue={options[0]}
              className={`${field} mt-4 appearance-none`}
            >
              {options.map((o) => (
                <option key={o} className="text-black">{o}</option>
              ))}
            </select>
            <label className="sr-only" htmlFor="message">Describe the problem</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us what is going on"
              className={`${field} mt-4 resize-none`}
            />
            <button type="submit" data-magnetic className="btn btn-primary mt-5 w-full !py-4 text-base">
              Send request <Arrow className="h-5 w-5" />
            </button>
            <p role="status" className="mt-4 min-h-6 text-sm text-white/75">
              {sent
                ? "Opening your email app. If nothing opens, just call us any time."
                : "This opens your email app with your details filled in."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
