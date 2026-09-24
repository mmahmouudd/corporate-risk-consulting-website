import { CLIENT_TYPES } from "../data";

export default function Ticker() {
  const row = [...CLIENT_TYPES, ...CLIENT_TYPES];

  return (
    <section
      className="relative overflow-hidden border-y border-bone-100/10 bg-ink-900 py-5"
      aria-label="Client base"
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-900 to-transparent lg:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-900 to-transparent lg:w-40" />

      <div className="flex w-max animate-marquee items-center">
        {row.map((c, i) => (
          <div key={`${c}-${i}`} className="flex items-center">
            <span className="eyebrow whitespace-nowrap px-8 text-ink-400">
              {c}
            </span>
            <span
              className="h-1 w-1 shrink-0 bg-signal-500/60"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>

      <p className="sr-only">
        Meridian advises G-SIB banks, sovereign wealth funds, FTSE 100 and
        Fortune Global 500 companies, central banks, energy majors, global
        insurers and multilateral institutions.
      </p>
    </section>
  );
}
