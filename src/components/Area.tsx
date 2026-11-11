import Split from "./Split";
import { BUSINESS, cities, HOME } from "@/lib/data";
import { Pin } from "./icons";

const R = 190; // px radius for 80 miles
const MILES = 80;
const C = 250;

function project(lat: number, lon: number) {
  const mi = 69;
  const x = (lon - HOME.lon) * Math.cos((HOME.lat * Math.PI) / 180) * mi;
  const y = (lat - HOME.lat) * mi;
  const dist = Math.hypot(x, y);
  return { x: C + (x / MILES) * R, y: C - (y / MILES) * R, dist };
}

export default function Area() {
  const pts = cities.map((c) => ({ ...c, ...project(c.lat, c.lon) }));
  return (
    <section id="area" className="relative scroll-mt-20 overflow-hidden px-5 py-28 sm:px-8 lg:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span data-reveal className="eyebrow">Service area</span>
          <Split as="h2" className="display mt-5 text-[clamp(2.8rem,6.5vw,5.5rem)]">
            Bartow, and <span className="text-brand">80 miles</span> around it.
          </Split>
          <p data-reveal className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            We are based right here in Bartow and travel to homes and properties across Polk County
            and well beyond, from Tampa Bay to Orlando to Sebring.
          </p>
          <div data-reveal className="glass mt-8 flex items-start gap-4 rounded-2xl p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-white">
              <Pin className="h-5 w-5" />
            </span>
            <div>
              <div className="font-bold">Business address</div>
              <a
                href={BUSINESS.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted underline decoration-accent underline-offset-4 hover:text-fg"
              >
                {BUSINESS.address}
              </a>
            </div>
          </div>
          <ul data-reveal className="mt-8 flex flex-wrap gap-2">
            {cities.map((c) => (
              <li key={c.name} className="rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-semibold">
                {c.name}
              </li>
            ))}
            <li className="rounded-full bg-brand px-4 py-1.5 text-sm font-bold text-white">+ more</li>
          </ul>
        </div>

        <div data-radar className="glass relative mx-auto aspect-square w-full max-w-[640px] rounded-[2.5rem] p-4">
          <svg viewBox="0 0 500 500" className="h-full w-full" role="img" aria-label="Radar map showing cities within 80 miles of Bartow, Florida">
            <defs>
              <radialGradient id="sweepFade" cx="0" cy="0" r="1">
                <stop offset="0" stopColor="var(--brand)" stopOpacity="0.55" />
                <stop offset="1" stopColor="var(--brand)" stopOpacity="0" />
              </radialGradient>
            </defs>
            {[0.25, 0.5, 0.75, 1].map((f, i) => (
              <g key={f} data-ring>
                <circle cx={C} cy={C} r={R * f} fill={i === 3 ? "color-mix(in oklab, var(--brand) 8%, transparent)" : "none"} stroke="var(--line)" strokeWidth={i === 3 ? 2 : 1} strokeDasharray={i === 3 ? "0" : "4 6"} />
                <text x={C + R * f * 0.707 + 4} y={C - R * f * 0.707} fontSize="10" fontWeight="700" fill="var(--muted)">
                  {MILES * f} mi
                </text>
              </g>
            ))}
            <path d={`M${C} ${C} L${C + R} ${C} A${R} ${R} 0 0 0 ${C + R * Math.cos(-0.6)} ${C + R * Math.sin(-0.6)} Z`} fill="url(#sweepFade)" className="radar-sweep" transform={`translate(0 0)`} style={{ fill: "color-mix(in oklab, var(--brand) 30%, transparent)" }} />
            <line x1={C} y1={C - R} x2={C} y2={C + R} stroke="var(--line)" />
            <line x1={C - R} y1={C} x2={C + R} y2={C} stroke="var(--line)" />

            {pts.map((p) => {
              const inside = p.dist <= MILES;
              const len = Math.hypot(p.x - C, p.y - C) || 1;
              const ux = (p.x - C) / len;
              const uy = (p.y - C) / len;
              const lx = p.x + ux * 11;
              const ly = p.y + uy * 11 + 4;
              return (
                <g key={p.name} data-city>
                  <line x1={C} y1={C} x2={p.x} y2={p.y} stroke="var(--brand)" strokeOpacity="0.25" strokeDasharray="3 5" />
                  <circle cx={p.x} cy={p.y} r="5" fill={inside ? "var(--brand)" : "var(--muted)"} />
                  <text x={lx} y={ly} textAnchor={ux < 0 ? "end" : "start"} fontSize="11" fontWeight="700" fill="var(--fg)" style={{ paintOrder: "stroke", stroke: "var(--bg)", strokeWidth: 3 }}>
                    {p.name}
                  </text>
                </g>
              );
            })}

            <circle cx={C} cy={C} r="4" fill="var(--accent)" className="ping" />
            <circle cx={C} cy={C} r="9" fill="var(--accent)" stroke="#fff" strokeWidth="3" />
            <text x={C} y={C + 28} textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--accent)" style={{ paintOrder: "stroke", stroke: "var(--bg)", strokeWidth: 4 }}>
              BARTOW HQ
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
