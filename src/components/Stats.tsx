import Split from "./Split";
import Image from "next/image";

const stats = [
  { n: 12, suffix: "+", label: "Years of experience" },
  { n: 24, suffix: "/7", label: "Emergency availability" },
  { n: 80, suffix: " mi", label: "Service radius" },
  { n: 8, suffix: "", label: "Core services" },
];

export default function Stats() {
  return (
    <section className="relative isolate overflow-hidden py-28 text-white lg:py-40">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div data-parallax="10" className="absolute -inset-y-[14%] inset-x-0">
          <Image
            src="/images/hero.jpg"
            alt="Technician connecting a hose to a septic tank at a home with a service truck in the background"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a6e]/90 via-[#0f2594]/80 to-[#040a1f]/90" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Split as="h2" className="display max-w-4xl text-[clamp(2.6rem,6.5vw,5.5rem)]">
          Twelve years of keeping Central Florida <span className="text-[#ff6a72]">flowing.</span>
        </Split>
        <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              data-reveal
              className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl"
            >
              <div className="display text-6xl sm:text-7xl">
                <span data-count={s.n}>0</span>
                {s.suffix}
              </div>
              <div className="mt-2 text-sm font-semibold text-white/75">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
