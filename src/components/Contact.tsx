import { useState } from "react";
import { PILLARS } from "../data";
import { Eyebrow, Reveal, Button } from "./ui";

const FIELD =
  "w-full border-b border-bone-100/25 bg-transparent py-3.5 text-[0.9375rem] text-bone-100 placeholder:text-ink-500 transition-colors duration-300 focus:border-signal-500 focus:outline-none";

const LABEL = "eyebrow block text-[0.5625rem] text-ink-400";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      className="grain relative bg-ink-950 py-24 text-bone-100 lg:py-36"
      aria-label="Contact"
    >
      <div className="mx-auto max-w-[96rem] px-6 lg:px-10">
        <div className="grid gap-8 border-t border-bone-100/15 pt-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow index="06" tone="dark">
                Contact
              </Eyebrow>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <h2 className="display text-[clamp(2.1rem,5vw,4.25rem)]">
                Tell us what keeps the <span className="italic">board</span>{" "}
                awake.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            {sent ? (
              <Reveal>
                <div className="border border-bone-100/20 p-10 lg:p-14">
                  <span
                    className="inline-block h-2 w-2 bg-signal-500"
                    aria-hidden="true"
                  />
                  <h3 className="display mt-6 text-3xl">Received.</h3>
                  <p className="measure mt-4 text-[0.9375rem] leading-[1.8] text-ink-300">
                    A partner from the relevant practice will respond within one
                    business day. If the matter is time-critical, call the
                    advisory desk directly on +44 20 7946 0958 — it is staffed
                    around the clock.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-8 text-sm text-ink-400 underline underline-offset-4 transition-colors hover:text-bone-100"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </Reveal>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-10"
                noValidate={false}
              >
                <div className="grid gap-10 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={LABEL}>
                      Full name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Whitmore"
                      className={FIELD}
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className={LABEL}>
                      Role *
                    </label>
                    <input
                      id="role"
                      name="role"
                      type="text"
                      required
                      autoComplete="organization-title"
                      placeholder="Group Chief Risk Officer"
                      className={FIELD}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={LABEL}>
                      Work email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="j.whitmore@institution.com"
                      className={FIELD}
                    />
                  </div>
                  <div>
                    <label htmlFor="org" className={LABEL}>
                      Organisation *
                    </label>
                    <input
                      id="org"
                      name="org"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Institution name"
                      className={FIELD}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="practice" className={LABEL}>
                    Relevant practice
                  </label>
                  <select
                    id="practice"
                    name="practice"
                    className={`${FIELD} appearance-none`}
                    defaultValue=""
                  >
                    <option value="" className="bg-ink-900">
                      Select — or leave blank if unsure
                    </option>
                    {PILLARS.map((p) => (
                      <option key={p.id} value={p.id} className="bg-ink-900">
                        {p.no} — {p.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="brief" className={LABEL}>
                    Brief *
                  </label>
                  <textarea
                    id="brief"
                    name="brief"
                    rows={4}
                    required
                    placeholder="The exposure, the deadline, and who needs convincing."
                    className={`${FIELD} resize-none`}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 shrink-0 accent-[#c8452b]"
                  />
                  <label
                    htmlFor="consent"
                    className="text-[0.75rem] leading-relaxed text-ink-400"
                  >
                    I consent to Meridian processing this enquiry under its
                    privacy policy. Submissions are encrypted in transit and at
                    rest, and are never shared outside the engagement team.
                  </label>
                </div>

                <Button type="submit" variant="solid" tone="dark">
                  Send enquiry
                </Button>
              </form>
            )}
          </div>

          {/* Details */}
          <aside className="lg:col-span-5 lg:pl-8">
            <Reveal delay={120}>
              <div className="border-t border-bone-100/15 pt-6">
                <p className="eyebrow text-[0.5625rem] text-ink-500">
                  Global headquarters
                </p>
                <p className="mt-4 text-[0.9375rem] leading-[1.8] text-ink-200">
                  25 Bank Street, Canary Wharf
                  <br />
                  London E14 5JP
                  <br />
                  United Kingdom
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-10 grid gap-px bg-bone-100/12 sm:grid-cols-2">
                {[
                  { k: "Advisory desk", v: "+44 20 7946 0958" },
                  { k: "Enquiries", v: "advisory@meridianrisk.com" },
                  { k: "Media", v: "press@meridianrisk.com" },
                  { k: "Response time", v: "< 1 business day" },
                ].map((row) => (
                  <div key={row.k} className="bg-ink-950 py-5 sm:px-5 sm:first:pl-0">
                    <p className="eyebrow text-[0.5625rem] text-ink-500">
                      {row.k}
                    </p>
                    <p className="mt-2 break-words text-[0.875rem] text-bone-100">
                      {row.v}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 border border-bone-100/15 p-7">
                <div className="flex items-center gap-2.5">
                  <span
                    className="h-1.5 w-1.5 bg-signal-500"
                    aria-hidden="true"
                  />
                  <p className="eyebrow text-[0.5625rem] text-ink-300">
                    Handled in confidence
                  </p>
                </div>
                <p className="mt-4 text-[0.8125rem] leading-[1.8] text-ink-400">
                  Enquiries involving live incidents, regulatory action or
                  litigation are routed immediately to a partner and held under
                  our ISO 27001 certified information handling regime. Legal
                  privilege arrangements are available on request.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}
