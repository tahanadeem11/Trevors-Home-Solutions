import Split from "./Split";
import { steps } from "@/lib/data";

export default function Process() {
  return (
    <section className="relative bg-bg-2 px-5 py-28 sm:px-8 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <span data-reveal className="eyebrow">How it works</span>
          <Split as="h2" className="display mt-5 text-[clamp(2.8rem,6.5vw,5.5rem)]">
            From call to <span className="text-accent">cleared.</span>
          </Split>
          <p data-reveal className="mt-6 max-w-md text-lg text-muted">
            A simple, no-surprises process so you always know what happens next.
          </p>
        </div>

        <div data-line-wrap className="relative pl-10 sm:pl-16">
          <span className="absolute left-[15px] top-2 h-[calc(100%-1rem)] w-[2px] bg-line sm:left-[23px]" />
          <span
            data-line
            className="absolute left-[15px] top-2 h-[calc(100%-1rem)] w-[2px] bg-gradient-to-b from-accent to-brand sm:left-[23px]"
          />
          <ol className="space-y-8">
            {steps.map((s) => (
              <li key={s.n} data-reveal className="relative">
                <span className="display absolute -left-[3.15rem] top-6 z-10 grid h-8 w-8 place-items-center rounded-full bg-accent text-sm not-italic text-white ring-8 ring-bg-2 sm:-left-[4.6rem] sm:h-12 sm:w-12 sm:text-xl">
                  {s.n}
                </span>
                <div className="spot glass rounded-3xl p-7">
                  <h3 className="display relative z-10 text-3xl sm:text-4xl">{s.title}</h3>
                  <p className="relative z-10 mt-3 leading-relaxed text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
