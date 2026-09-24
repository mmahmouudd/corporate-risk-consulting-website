import { useEffect, useState } from "react";
import { HERO_POSTER, HERO_VIDEO } from "../data";
import { Button } from "./ui";

const RAIL = [
  { v: "1998", l: "Founded" },
  { v: "18", l: "Offices" },
  { v: "65+", l: "Jurisdictions" },
  { v: "$4.2T", l: "Assets advised" },
];

export default function Hero() {
  const [lit, setLit] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLit(true), 120);
    return () => clearTimeout(t);
  }, []);

  const step = (i: number) =>
    ({
      transitionDelay: `${i * 110}ms`,
    }) as const;

  const cls = (_i: number) =>
    `transition-all duration-[1100ms] ease-[cubic-bezier(.16,1,.3,1)] ${
      lit ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`;

  return (
    <section
      className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-ink-950 text-bone-100"
      aria-label="Introduction"
    >
      {/* ---- Video background placeholder ---- */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover opacity-[0.38] [filter:grayscale(1)_contrast(1.15)]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        {/* Tonal overlays: keeps text legible, adds depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/72 to-ink-950/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-transparent to-ink-950/60" />

        {/* Faint structural grid — reads as analytical, not decorative */}
        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "calc(100% / 6) 100%",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ---- Body ---- */}
      <div className="relative z-10 mx-auto flex w-full max-w-[96rem] flex-1 flex-col justify-center px-6 pt-32 pb-10 lg:px-10 lg:pt-40">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            {/* Eyebrow */}
            <div className={cls(0)} style={step(0)}>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-signal-500" aria-hidden="true" />
                <span className="eyebrow text-ink-300">
                  Independent · Global · Since 1998
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="display mt-8 text-[clamp(2.9rem,8.2vw,7.4rem)]">
              <span className={`block ${cls(1)}`} style={step(1)}>
                Clarity where
              </span>
              <span className={`block ${cls(2)}`} style={step(2)}>
                exposure{" "}
                <span className="italic text-signal-400">compounds</span>.
              </span>
            </h1>

            {/* Lede */}
            <p
              className={`measure mt-9 text-lg leading-[1.65] text-ink-200 lg:text-xl ${cls(3)}`}
              style={step(3)}
            >
              Meridian is an independent advisory firm for enterprise risk. We
              work with boards, regulators and executive teams in the moments
              where the cost of being wrong is measured in billions — and the
              window for judgement is short.
            </p>

            {/* Actions */}
            <div
              className={`mt-11 flex flex-col gap-3 sm:flex-row ${cls(4)}`}
              style={step(4)}
            >
              <Button href="#contact" variant="solid" tone="dark">
                Request a risk briefing
              </Button>
              <Button href="#evidence" variant="outline" tone="dark">
                Review the evidence
              </Button>
            </div>
          </div>

          {/* Right column — positioning note */}
          <aside
            className={`lg:col-span-4 lg:pt-4 ${cls(5)}`}
            style={step(5)}
            aria-label="Positioning"
          >
            <div className="border-l border-bone-100/15 pl-6">
              <p className="eyebrow text-ink-400">Our position</p>
              <p className="mt-4 text-[0.9375rem] leading-[1.75] text-ink-300">
                We take no audit fees, sell no software, and hold no
                implementation contracts. Our advice carries no second agenda —
                which is the entire reason our clients can act on it.
              </p>
              <p className="mt-5 font-mono text-[0.6875rem] tracking-wide text-ink-500">
                FCA authorised · ISO 27001 · SOC 2 Type II
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* ---- Bottom stat rail ---- */}
      <div
        className={`relative z-10 border-t border-bone-100/12 transition-all duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)] ${
          lit ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "700ms" }}
      >
        <div className="mx-auto grid max-w-[96rem] grid-cols-2 divide-x divide-bone-100/12 px-6 lg:grid-cols-4 lg:px-10">
          {RAIL.map((s, i) => (
            <div
              key={s.l}
              className={`py-6 ${i === 0 ? "" : "pl-6"} ${i >= 2 ? "border-t border-bone-100/12 lg:border-t-0" : ""} lg:py-7`}
            >
              <p className="data-num text-2xl text-bone-100 lg:text-[1.75rem]">
                {s.v}
              </p>
              <p className="eyebrow mt-1.5 text-[0.5625rem] text-ink-400">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="pointer-events-none absolute bottom-[7.5rem] left-1/2 z-10 hidden -translate-x-1/2 lg:block"
        aria-hidden="true"
      >
        <div className="h-14 w-px overflow-hidden bg-bone-100/15">
          <div className="animate-scroll-cue h-1/2 w-full bg-signal-500/80" />
        </div>
      </div>
    </section>
  );
}
