import { PEOPLE } from "../data";
import { Eyebrow, Reveal, ArrowLink } from "./ui";

export default function Team() {
  return (
    <section
      id="people"
      className="grain relative bg-bone-100 py-24 text-ink-900 lg:py-36"
      aria-label="Leadership"
    >
      <div className="mx-auto max-w-[96rem] px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-8 border-t border-ink-900/15 pt-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow index="03" tone="light">
                People
              </Eyebrow>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <h2 className="display measure text-[clamp(2rem,4.4vw,3.5rem)]">
                Practitioners first. Every partner has sat on the other side of
                the table.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="measure mt-6 text-[0.9375rem] leading-[1.8] text-ink-600">
                Our leadership is drawn from chief risk offices, supervisory
                authorities and national security agencies — not from a graduate
                pipeline. The partner who scopes your engagement is the partner
                who delivers it.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Portrait grid */}
        <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-x-8">
          {PEOPLE.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 90}>
              <article className="group">
                {/* Portrait */}
                <div className="relative overflow-hidden bg-ink-800">
                  <img
                    src={p.photo}
                    alt={`${p.name}, ${p.role}`}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover grayscale contrast-[1.05] transition-all duration-[1100ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04] group-hover:grayscale-0"
                  />

                  {/* Hover veil + bio */}
                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink-950 via-ink-950/55 to-transparent opacity-0 transition-opacity duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:opacity-100">
                    <div className="translate-y-4 p-6 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0">
                      <p className="text-[0.8125rem] leading-[1.7] text-bone-200">
                        {p.bio}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.focus.map((f) => (
                          <span
                            key={f}
                            className="border border-bone-100/25 px-2.5 py-1 font-mono text-[0.5625rem] uppercase tracking-widest text-bone-200"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Region chip */}
                  <span className="absolute left-0 top-0 bg-bone-100 px-3 py-1.5 font-mono text-[0.5625rem] uppercase tracking-widest text-ink-700">
                    {p.region}
                  </span>
                </div>

                {/* Caption */}
                <div className="mt-5 flex items-start justify-between gap-4 border-t border-ink-900/15 pt-4">
                  <div>
                    <h3 className="display text-[1.5rem] leading-tight">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-[0.8125rem] text-ink-600">
                      {p.role}
                    </p>
                  </div>
                  <p className="eyebrow shrink-0 pt-1.5 text-[0.5625rem] text-ink-400">
                    {p.city}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-14 border-t border-ink-900/15 pt-8">
            <ArrowLink href="#contact" tone="light">
              Full directory — 165 partners and directors
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
