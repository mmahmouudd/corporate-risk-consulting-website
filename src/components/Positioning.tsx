import { Eyebrow, Reveal, ArrowLink } from "./ui";

const PROOF = [
  { v: "2,840", l: "Engagements delivered", s: "since 1998" },
  { v: "165", l: "Partners & directors", s: "average 19 yrs experience" },
  { v: "41", l: "Supervisory programmes", s: "closed to regulator satisfaction" },
  { v: "0", l: "Audit or software conflicts", s: "structurally independent" },
];

export default function Positioning() {
  return (
    <section
      className="grain relative bg-bone-100 py-24 text-ink-900 lg:py-36"
      aria-label="What we do"
    >
      <div className="mx-auto max-w-[96rem] px-6 lg:px-10">
        {/* Header row */}
        <div className="grid gap-10 border-t border-ink-900/15 pt-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow index="00" tone="light">
                The firm
              </Eyebrow>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <h2 className="display text-[clamp(2rem,4.4vw,3.75rem)] text-ink-900">
                Risk is not a department. It is the{" "}
                <span className="italic">shape</span> of every decision an
                enterprise makes under uncertainty.
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <Reveal delay={160}>
                <p className="text-[0.9375rem] leading-[1.8] text-ink-600">
                  Most organisations do not fail because they missed a risk.
                  They fail because the people who saw it had no route to the
                  people who could act, and no common language to make the case
                  once they got there.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="text-[0.9375rem] leading-[1.8] text-ink-600">
                  We build that route and that language. Then we stay long
                  enough to see it survive a real event — a supervisory review,
                  a breach, a sovereign shock — before we hand it over.
                </p>
              </Reveal>
            </div>

            <Reveal delay={280}>
              <div className="mt-10">
                <ArrowLink href="#practice" tone="light">
                  Explore the practice
                </ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Proof grid */}
        <div className="mt-20 grid grid-cols-2 gap-px border border-ink-900/12 bg-ink-900/12 lg:mt-28 lg:grid-cols-4">
          {PROOF.map((p, i) => (
            <Reveal key={p.l} delay={i * 90}>
              <div className="group h-full bg-bone-100 p-7 transition-colors duration-500 hover:bg-bone-50 lg:p-9">
                <p className="data-num text-[clamp(2.25rem,4vw,3.25rem)] leading-none text-ink-900">
                  {p.v}
                </p>
                <div className="mt-5 h-px w-10 origin-left bg-signal-500 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-x-[2.4]" />
                <p className="mt-5 text-sm font-medium text-ink-800">{p.l}</p>
                <p className="mt-1 font-mono text-[0.6875rem] leading-relaxed text-ink-400">
                  {p.s}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
