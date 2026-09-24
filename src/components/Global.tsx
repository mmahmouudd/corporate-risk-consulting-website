import { useEffect, useState } from "react";
import { OFFICES, REGIONS } from "../data";
import { Eyebrow, Reveal } from "./ui";

const ZONES: Record<string, string> = {
  London: "Europe/London",
  "New York": "America/New_York",
  Singapore: "Asia/Singapore",
  Dubai: "Asia/Dubai",
  Zurich: "Europe/Zurich",
  Frankfurt: "Europe/Berlin",
  Tokyo: "Asia/Tokyo",
  "São Paulo": "America/Sao_Paulo",
  Toronto: "America/Toronto",
  Johannesburg: "Africa/Johannesburg",
  Sydney: "Australia/Sydney",
  Mumbai: "Asia/Kolkata",
};

function localTime(city: string, now: Date) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: ZONES[city],
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(now);
  } catch {
    return "--:--";
  }
}

function isOpen(city: string, now: Date) {
  try {
    const h = Number(
      new Intl.DateTimeFormat("en-GB", {
        timeZone: ZONES[city],
        hour: "2-digit",
        hour12: false,
      }).format(now)
    );
    return h >= 8 && h < 19;
  } catch {
    return false;
  }
}

export default function Global() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="grain relative bg-ink-900 py-24 text-bone-100 lg:py-32"
      aria-label="Global presence"
    >
      <div className="mx-auto max-w-[96rem] px-6 lg:px-10">
        <div className="grid gap-8 border-t border-bone-100/15 pt-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow index="04" tone="dark">
                Footprint
              </Eyebrow>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <h2 className="display measure text-[clamp(1.85rem,3.8vw,3rem)]">
                Eighteen offices. One standard of work, wherever the exposure
                sits.
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Region stats */}
        <div className="mt-14 grid gap-px bg-bone-100/12 sm:grid-cols-2 lg:grid-cols-4">
          {REGIONS.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
              <div className="h-full bg-ink-900 p-7 lg:p-8">
                <p className="eyebrow text-ink-400">{r.name}</p>
                <dl className="mt-6 space-y-3">
                  {[
                    ["Offices", r.offices],
                    ["Countries", r.countries],
                    ["Partners", r.partners],
                  ].map(([k, v]) => (
                    <div
                      key={k as string}
                      className="flex items-baseline justify-between border-b border-bone-100/10 pb-2.5"
                    >
                      <dt className="text-[0.8125rem] text-ink-400">{k}</dt>
                      <dd className="data-num text-lg text-bone-100">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Office clocks */}
        <Reveal delay={100}>
          <div className="mt-14">
            <div className="flex items-baseline justify-between border-b border-bone-100/15 pb-4">
              <p className="eyebrow text-ink-400">Local time across the network</p>
              <p className="font-mono text-[0.625rem] text-ink-600">
                Updated live
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-px bg-bone-100/10 sm:grid-cols-3 lg:grid-cols-6">
              {OFFICES.map((o) => {
                const open = isOpen(o.city, now);
                return (
                  <li
                    key={o.city}
                    className="group bg-ink-900 p-5 transition-colors duration-500 hover:bg-ink-850"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-500 ${
                          open ? "bg-signal-500" : "bg-ink-600"
                        }`}
                        aria-hidden="true"
                      />
                      <span className="truncate text-[0.8125rem] font-medium text-bone-100">
                        {o.city}
                      </span>
                    </div>
                    <p className="data-num mt-3 text-xl text-bone-100">
                      {localTime(o.city, now)}
                    </p>
                    <p className="mt-1.5 font-mono text-[0.5625rem] uppercase tracking-widest text-ink-500">
                      {o.role}
                    </p>
                    <span className="sr-only">
                      {open ? "Office open" : "Office closed"}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
