import Split from "./Split";
import Image from "next/image";

const slides = [
  { src: "/images/pumping.webp", tag: "Pumping", title: "Tank pumping, done properly", alt: "Technician in blue coveralls guiding a vacuum hose into a septic tank" },
  { src: "/images/service.jpg", tag: "Cleaning", title: "Clean-outs that last", alt: "Technician in a safety vest setting up a hose at a septic tank" },
  { src: "/images/repair.webp", tag: "Repair", title: "Access, diagnose, repair", alt: "Technician working at an excavated septic tank access" },
  { src: "/images/inspection.jpeg", tag: "Inspection", title: "Eyes on every component", alt: "Technician opening a septic tank lid to inspect inside" },
  { src: "/images/team.webp", tag: "Replacement", title: "Excavation & replacement", alt: "Three technicians excavating soil to reach a buried system" },
  { src: "/images/cleaning.jpg", tag: "Service", title: "Thorough, careful work", alt: "Large suction hose being fed into a septic tank" },
];

export default function Work() {
  return (
    <section id="work" data-hscroll className="relative scroll-mt-0 overflow-hidden bg-[#040a1f] text-white lg:flex lg:h-screen lg:items-center">
      <div className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-brand/30 blur-[140px]" />
      <div className="w-full py-24 lg:py-0">
        <div
          data-htrack
          className="flex gap-6 overflow-x-auto px-5 pb-6 [scrollbar-width:none] sm:px-8 lg:w-max lg:items-center lg:gap-10 lg:overflow-visible lg:px-[8vw] lg:pb-0"
        >
          <div className="w-[85vw] max-w-xl shrink-0 snap-start lg:w-[34vw]">
            <span data-reveal className="eyebrow !text-[#ff6a72]">Our work</span>
            <Split as="h2" className="display mt-5 text-[clamp(2.8rem,6vw,5.5rem)]">
              Real work. Real <span className="text-[#6f93ff]">results.</span>
            </Split>
            <p data-reveal className="mt-6 max-w-md text-lg text-white/70">
              From a routine pump-out to a full excavation, every job gets the same attention to detail.
            </p>
            <p className="mt-8 hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-white/50 lg:flex">
              Keep scrolling <span className="inline-block h-px w-14 bg-white/40" />
            </p>
          </div>

          {slides.map((s, i) => (
            <figure
              key={s.src}
              className="group relative h-[62vh] w-[78vw] shrink-0 overflow-hidden rounded-[2rem] shadow-2xl sm:w-[60vw] lg:h-[68vh] lg:w-[34vw]"
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(min-width:1024px) 34vw, 80vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040a1f]/90 via-[#040a1f]/10 to-transparent" />
              <span className="display absolute right-6 top-4 text-7xl text-white/25">0{i + 1}</span>
              <figcaption className="absolute inset-x-0 bottom-0 p-7">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest">
                  {s.tag}
                </span>
                <h3 className="display mt-4 text-4xl">{s.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-8 bottom-8 hidden h-[3px] overflow-hidden rounded bg-white/15 lg:block">
        <div data-hbar className="h-full origin-left bg-gradient-to-r from-accent to-brand" style={{ transform: "scaleX(0)" }} />
      </div>
    </section>
  );
}
