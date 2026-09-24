import { useState } from "react";
import { PILLARS } from "../data";
import { Eyebrow, Reveal } from "./ui";

export default function Pillars() {
  const [active, setActive] = useState(0);
  const current = PILLARS[active];

  return (
    <section
      id="practice"
      className="grain relative bg-bone-200 py-24 text-ink-900 lg:py-36"
      aria-label="Practice areas"
    >
      <div className="mx-auto max-w-[96rem] px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-8 border-t border-ink-900/15 pt-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow index="01" tone="light">
                Practice
              </Eyebrow>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <h2 className="display measure text-[clamp(2rem,4.4vw,3.5rem)]">
                Six pillars. One integrated view of the exposure.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="measure mt-6 text-[0.9375rem] leading-[1.8] text-ink-600">
                Select a pillar to see how we work. Most engagements draw on
                three or more — because the risks themselves refuse to stay in
                their columns.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Body */}
        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-14">
          {/* Accordion list */}
          <div className="lg:col-span-7">
            <ul className="border-t border-ink-900/15">
              {PILLARS.map((p, i) => {
                const open = active === i;
                return (
                  <li key={p.id} className="border-b border-ink-900/15">
                    <h3>
                      <button
                        onClick={() => setActive(i)}
                        aria-expanded={open}
                        aria-controls={`pillar-${p.id}`}
                        className="group flex w-full items-start gap-5 py-7 text-left lg:gap-7"
                      >
                        <span
                          className={`data-num mt-1.5 text-[0.6875rem] transition-colors duration-500 ${
                            open ? "text-signal-500" : "text-ink-400"
                          }`}
                        >
                          {p.no}
                        </span>

                        <span className="flex-1">
                          <span
                            className={`display block text-[clamp(1.65rem,3.2vw,2.6rem)] transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${
                              open
                                ? "translate-x-1 text-ink-900"
                                : "text-ink-900/55 group-hover:translate-x-1 group-hover:text-ink-900"
                            }`}
                          >
                            {p.title}
                          </span>
                          <span
                            className={`mt-1.5 block text-sm text-ink-500 transition-opacity duration-500 ${
                              open ? "opacity-100" : "opacity-60"
                            }`}
                          >
                            {p.lede}
                          </span>
                        </span>

                        {/* Indicator */}
                        <span
                          className="mt-3 flex h-5 w-5 shrink-0 items-center justify-center"
                          aria-hidden="true"
                        >
                          <span className="relative block h-px w-4 bg-ink-900/40">
                            <span
                              className={`absolute inset-0 block h-px w-4 origin-center bg-signal-500 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
                                open ? "rotate-0" : "rotate-90"
                              }`}
                            />
                          </span>
                        </span>
                      </button>
                    </h3>

                    {/* Panel */}
                    <div
                      id={`pillar-${p.id}`}
                      role="region"
                      className={`grid transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${
                        open
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-9 pl-0 lg:pl-[3.25rem]">
                          {/* Mobile image */}
                          <img
                            src={p.image}
                            alt=""
                            loading="lazy"
                            className="mb-6 aspect-[16/10] w-full object-cover grayscale lg:hidden"
                          />

                          <p className="measure text-[0.9375rem] leading-[1.8] text-ink-600">
                            {p.body}
                          </p>

                          <ul className="mt-7 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                            {p.capabilities.map((c) => (
                              <li
                                key={c}
                                className="flex items-baseline gap-3 text-[0.8125rem] text-ink-700"
                              >
                                <span
                                  className="h-1 w-1 shrink-0 translate-y-[-2px] bg-signal-500"
                                  aria-hidden="true"
                                />
                                {c}
                              </li>
                            ))}
                          </ul>

                          <a
                            href="#contact"
                            className="mt-8 inline-flex items-center gap-2.5 text-[0.8125rem] font-medium text-ink-900 transition-colors hover:text-signal-500"
                          >
                            <span className="link-underline">
                              Discuss {p.title.toLowerCase()}
                            </span>
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              className="h-3.5 w-3.5"
                              aria-hidden="true"
                            >
                              <path
                                d="M4 12h15M13 6l6 6-6 6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Sticky preview (desktop) */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <figure className="relative overflow-hidden bg-ink-900">
                {PILLARS.map((p, i) => (
                  <img
                    key={p.id}
                    src={p.image}
                    alt={`${p.title} practice`}
                    loading="lazy"
                    className={`aspect-[4/5] w-full object-cover grayscale transition-all duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] ${
                      i === active
                        ? "scale-100 opacity-95"
                        : "absolute inset-0 scale-105 opacity-0"
                    }`}
                  />
                ))}

                {/* Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent" />

                <figcaption className="absolute inset-x-0 bottom-0 p-8">
                  <p className="eyebrow text-bone-300/80">
                    {current.no} — {current.title}
                  </p>
                  <p className="data-num mt-3 text-[2.75rem] leading-none text-bone-50">
                    {current.metric.value}
                  </p>
                  <p className="mt-2 max-w-[24ch] text-[0.8125rem] leading-relaxed text-bone-300/85">
                    {current.metric.label}
                  </p>
                </figcaption>
              </figure>

              {/* Progress dots */}
              <div
                className="mt-5 flex gap-1.5"
                role="tablist"
                aria-label="Practice pillars"
              >
                {PILLARS.map((p, i) => (
                  <button
                    key={p.id}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={p.title}
                    onClick={() => setActive(i)}
                    className={`h-0.5 flex-1 transition-colors duration-500 ${
                      i === active ? "bg-signal-500" : "bg-ink-900/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
