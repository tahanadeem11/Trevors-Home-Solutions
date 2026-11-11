import Split from "./Split";
import Image from "next/image";
import { Arrow } from "./icons";
import { serviceIcon } from "./icons";
import { plumbingServices, septicServices } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 px-5 py-28 sm:px-8 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span data-reveal className="eyebrow">What we do</span>
          <Split as="h2" className="display mt-5 text-[clamp(2.8rem,7vw,6rem)]">
            Every septic &amp; plumbing job, <span className="text-brand">handled.</span>
          </Split>
          <p data-reveal className="mt-6 max-w-xl text-lg text-muted">
            One trusted crew for your whole system, from the tank in the yard to the pipes in the wall.
          </p>
        </div>

        {/* Septic */}
        <div className="mt-16 flex items-center gap-4">
          <h3 data-reveal className="display text-3xl">Septic systems</h3>
          <span className="h-px flex-1 bg-line" />
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {septicServices.map((s, i) => {
            const Icon = serviceIcon[s.key];
            return (
              <article
                key={s.key}
                data-reveal
                className="spot glass group flex flex-col rounded-[2rem] transition-transform duration-500 hover:-translate-y-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image!}
                    alt={s.alt ?? ""}
                    fill
                    sizes="(min-width:768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040a1f]/70 via-transparent to-transparent" />
                  <span className="display absolute bottom-4 left-6 text-6xl text-white/90">
                    0{i + 1}
                  </span>
                  <span className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-2xl bg-white/90 text-brand shadow-lg backdrop-blur transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                </div>
                <div className="relative z-10 flex flex-1 flex-col p-7">
                  <h4 className="display text-3xl sm:text-4xl">{s.title}</h4>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">{s.blurb}</p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-accent"
                  >
                    Get a quote
                    <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Plumbing */}
        <div className="mt-20 flex items-center gap-4">
          <h3 data-reveal className="display text-3xl">Plumbing</h3>
          <span className="h-px flex-1 bg-line" />
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plumbingServices.map((s) => {
            const Icon = serviceIcon[s.key];
            return (
              <article
                key={s.key}
                data-reveal
                className="spot glass group rounded-[1.75rem] p-7 transition-transform duration-500 hover:-translate-y-2"
              >
                <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-white shadow-lg transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </span>
                <h4 className="display relative z-10 mt-6 text-3xl">{s.title}</h4>
                <p className="relative z-10 mt-3 leading-relaxed text-muted">{s.blurb}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
