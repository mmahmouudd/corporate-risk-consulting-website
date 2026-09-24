import { INSIGHTS } from "../data";
import { Eyebrow, Reveal, ArrowLink } from "./ui";

export default function Insights() {
  return (
    <section
      id="insight"
      className="grain relative bg-bone-100 py-24 text-ink-900 lg:py-36"
      aria-label="Insights"
    >
      <div className="mx-auto max-w-[96rem] px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-8 border-t border-ink-900/15 pt-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow index="05" tone="light">
                Insight
              </Eyebrow>
            </Reveal>
          </div>
          <div className="flex items-end justify-between gap-6 lg:col-span-8">
            <Reveal delay={80}>
              <h2 className="display text-[clamp(1.85rem,3.8vw,3rem)]">
                Published research, not marketing.
              </h2>
            </Reveal>
            <Reveal delay={140} className="hidden shrink-0 pb-2 sm:block">
              <ArrowLink href="#" tone="light">
                All research
              </ArrowLink>
            </Reveal>
          </div>
        </div>

        {/* Editorial list */}
        <ul className="mt-14 border-t border-ink-900/15">
          {INSIGHTS.map((post, i) => (
            <Reveal
              as="li"
              key={post.title}
              delay={i * 90}
              className="block border-b border-ink-900/15"
            >
                <a
                  href="#"
                  className="group grid gap-4 py-9 lg:grid-cols-12 lg:items-baseline lg:gap-8"
                >
                  {/* Meta */}
                  <div className="flex items-center gap-4 lg:col-span-3 lg:block">
                    <p className="eyebrow text-[0.5625rem] text-signal-500">
                      {post.kind}
                    </p>
                    <p className="font-mono text-[0.6875rem] text-ink-400 lg:mt-2">
                      {post.date} · {post.read}
                    </p>
                  </div>

                  {/* Title + excerpt */}
                  <div className="lg:col-span-8">
                    <h3 className="display text-[clamp(1.5rem,2.9vw,2.35rem)] transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1.5">
                      {post.title}
                    </h3>
                    <p className="measure mt-3 text-[0.9375rem] leading-[1.8] text-ink-600">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="lg:col-span-1 lg:justify-self-end">
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/20 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:border-signal-500 group-hover:bg-signal-500 group-hover:text-bone-50"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        <path
                          d="M7 17L17 7M8 7h9v9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
            </Reveal>
          ))}
        </ul>

        <div className="mt-10 sm:hidden">
          <ArrowLink href="#" tone="light">
            All research
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
