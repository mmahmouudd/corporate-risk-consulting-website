import { useState } from "react";
import { CASES } from "../data";
import { Eyebrow, Reveal, ArrowLink } from "./ui";

export default function CaseStudies() {
  const [i, setI] = useState(0);
  const c = CASES[i];

  return (
    <section
      id="evidence"
      className="grain relative bg-ink-950 py-24 text-bone-100 lg:py-36"
      aria-label="Case studies"
    >
      <div className="mx-auto max-w-[96rem] px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-8 border-t border-bone-100/15 pt-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow index="02" tone="dark">
                Evidence
              </Eyebrow>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <h2 className="display measure text-[clamp(2rem,4.4vw,3.5rem)]">
                Four engagements, described the way we would describe them to a
                board.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="measure mt-6 text-[0.9375rem] leading-[1.8] text-ink-300">
                Client identities are withheld under engagement terms. Every
                figure below has been verified by the client's own finance or
                risk function.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Tab rail */}
        <Reveal delay={120}>
          <div
            role="tablist"
            aria-label="Case studies"
            className="mt-14 grid border-t border-bone-100/15 sm:grid-cols-2 lg:grid-cols-4"
          >
            {CASES.map((cs, idx) => {
              const on = idx === i;
              return (
                <button
                  key={cs.id}
                  role="tab"
                  aria-selected={on}
                  aria-controls="case-panel"
                  onClick={() => setI(idx)}
                  className={`group relative border-b border-bone-100/15 px-1 py-6 text-left transition-colors duration-500 lg:border-r lg:border-b-0 lg:px-6 lg:first:pl-0 ${
                    on ? "" : "hover:bg-bone-100/[0.03]"
                  } ${idx === CASES.length - 1 ? "lg:border-r-0" : ""}`}
                >
                  {/* active top bar */}
                  <span
                    className={`absolute left-0 top-0 h-px w-full origin-left bg-signal-500 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${
                      on ? "scale-x-100" : "scale-x-0"
                    }`}
                    aria-hidden="true"
                  />
                  <span className="flex items-center justify-between gap-3">
                    <span
                      className={`eyebrow text-[0.5625rem] transition-colors duration-500 ${
                        on ? "text-signal-400" : "text-ink-500"
                      }`}
                    >
                      {cs.sector}
                    </span>
                    <span className="data-num text-[0.625rem] text-ink-600">
                      {cs.year}
                    </span>
                  </span>
                  <span
                    className={`mt-3 block text-sm leading-snug transition-colors duration-500 ${
                      on ? "text-bone-100" : "text-ink-400 group-hover:text-ink-200"
                    }`}
                  >
                    {cs.title}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Panel */}
        <div
          id="case-panel"
          role="tabpanel"
          className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14"
        >
          {/* Image */}
          <figure className="lg:col-span-5">
            <div className="relative overflow-hidden bg-ink-900">
              {CASES.map((cs, idx) => (
                <img
                  key={cs.id}
                  src={cs.image}
                  alt={cs.title}
                  loading="lazy"
                  className={`aspect-[4/5] w-full object-cover grayscale transition-all duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] ${
                    idx === i
                      ? "scale-100 opacity-90"
                      : "absolute inset-0 scale-105 opacity-0"
                  }`}
                />
              ))}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/85 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-7">
                <p className="eyebrow text-[0.5625rem] text-bone-300/70">
                  {c.client}
                </p>
                <p className="mt-2 font-mono text-[0.6875rem] text-ink-400">
                  {c.geography}
                </p>
              </figcaption>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <span
                  key={t}
                  className="border border-bone-100/18 px-3 py-1.5 font-mono text-[0.625rem] tracking-wide text-ink-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </figure>

          {/* Content */}
          <div className="lg:col-span-7">
            <h3 className="display text-[clamp(1.75rem,3.4vw,2.75rem)]">
              {c.title}
            </h3>

            <div className="mt-9 space-y-8">
              <div className="grid gap-3 border-t border-bone-100/15 pt-5 sm:grid-cols-[7rem_1fr] sm:gap-8">
                <p className="eyebrow text-[0.5625rem] text-ink-500">
                  The problem
                </p>
                <p className="text-[0.9375rem] leading-[1.8] text-ink-200">
                  {c.challenge}
                </p>
              </div>

              <div className="grid gap-3 border-t border-bone-100/15 pt-5 sm:grid-cols-[7rem_1fr] sm:gap-8">
                <p className="eyebrow text-[0.5625rem] text-ink-500">
                  Our approach
                </p>
                <p className="text-[0.9375rem] leading-[1.8] text-ink-200">
                  {c.approach}
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="mt-11">
              <p className="eyebrow text-[0.5625rem] text-ink-500">
                Verified outcomes
              </p>
              <div className="mt-5 grid gap-px bg-bone-100/15 sm:grid-cols-3">
                {c.results.map((r) => (
                  <div key={r.label} className="bg-ink-950 py-6 pr-5 sm:px-5 sm:first:pl-0">
                    <p className="data-num text-[clamp(1.75rem,3vw,2.5rem)] leading-none text-bone-50">
                      {r.value}
                    </p>
                    <p className="mt-3 text-[0.8125rem] leading-relaxed text-ink-400">
                      {r.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <ArrowLink href="#contact" tone="dark">
                Request the full engagement note
              </ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
