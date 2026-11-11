import Split from "./Split";
import Image from "next/image";
import { Check } from "./icons";

const points = [
  ["Always on call", "Septic backups and leaks do not keep business hours. Neither do we."],
  ["Experienced hands", "More than twelve years solving septic and plumbing problems of every size."],
  ["Honest, clear answers", "We explain what we find and what it takes to fix it, in plain language."],
  ["Local to Bartow", "Based at 3rd Ave in Bartow and ready to reach you within 80 miles."],
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 px-5 py-28 sm:px-8 lg:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-xl">
          <div data-reveal className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl">
            <div data-parallax="8" className="absolute -inset-y-[10%] inset-x-0">
              <Image
                src="/images/service.jpg"
                alt="Technician in a safety vest handling a green hose at a septic tank on a residential lawn"
                fill
                sizes="(min-width:1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#040a1f]/50 to-transparent" />
          </div>
          <div
            data-reveal
            className="glass float absolute -bottom-8 -right-2 w-48 overflow-hidden rounded-3xl p-2 sm:-right-8 sm:w-60"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/maintenance.jpg"
                alt="Hose lowered into an open concrete septic tank"
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
            <p className="px-2 pb-1 pt-3 text-xs font-bold text-muted">Careful, thorough work</p>
          </div>
          <div
            data-reveal
            className="absolute -left-3 top-8 rotate-[-6deg] rounded-2xl bg-accent px-5 py-3 text-white shadow-xl sm:-left-8"
          >
            <div className="display text-5xl">12+</div>
            <div className="text-xs font-bold uppercase tracking-widest">Years</div>
          </div>
        </div>

        <div>
          <span data-reveal className="eyebrow">Why Trevor&apos;s</span>
          <Split as="h2" className="display mt-5 text-[clamp(2.8rem,6.5vw,5.5rem)]">
            Local. Experienced. <span className="text-brand">Always there.</span>
          </Split>
          <p data-reveal className="mt-6 text-lg leading-relaxed text-muted">
            When something goes wrong underground, you want someone who has seen it all and
            shows up fast. Trevor&apos;s Home Solutions has spent over a decade looking after
            septic systems and plumbing for homes and properties around Bartow, Florida.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {points.map(([t, d]) => (
              <li key={t} data-reveal className="spot glass rounded-2xl p-5">
                <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full bg-accent text-white">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="relative z-10 mt-4 font-bold">{t}</h3>
                <p className="relative z-10 mt-1 text-sm leading-relaxed text-muted">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
