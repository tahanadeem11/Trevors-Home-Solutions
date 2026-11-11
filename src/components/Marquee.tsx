import { serviceNames } from "@/lib/data";

export default function Marquee() {
  const row = [...serviceNames, ...serviceNames];
  return (
    <div
      className="marquee relative overflow-hidden border-y border-line bg-brand-2 py-5 text-white"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((s, i) => (
              <span key={`${k}-${i}`} className="flex items-center">
                <span
                  className={`display px-6 text-4xl sm:text-5xl ${i % 2 ? "outline-text !text-transparent" : ""}`}
                  style={i % 2 ? { WebkitTextStroke: "1.5px rgba(255,255,255,.85)" } : undefined}
                >
                  {s}
                </span>
                <svg width="22" height="22" viewBox="0 0 24 24" className="text-accent" fill="currentColor">
                  <path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.6L12 17.2 5.8 21.7l2.4-7.6L2 9.600h7.6L12 2Z" />
                </svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
