"use client";

import Split from "./Split";
import { useState } from "react";
import { Plus } from "./icons";
import { faqs } from "@/lib/data";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative scroll-mt-20 bg-bg-2 px-5 py-28 sm:px-8 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span data-reveal className="eyebrow">FAQ</span>
          <Split as="h2" className="display mt-5 text-[clamp(2.8rem,6.5vw,5.5rem)]">
            Good <span className="text-accent">questions.</span>
          </Split>
          <p data-reveal className="mt-6 max-w-md text-lg text-muted">
            Do not see yours? Call us any time at (737) 278-0860.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} data-reveal className="glass overflow-hidden rounded-3xl">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 p-6 text-left text-lg font-bold sm:p-7 sm:text-xl"
                  >
                    {f.q}
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition-all duration-500 ${isOpen ? "rotate-[135deg] bg-accent text-white" : "bg-brand/10 text-brand"}`}
                    >
                      <Plus className="h-5 w-5" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-${i}`}
                  role="region"
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-7 leading-relaxed text-muted sm:px-7">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
