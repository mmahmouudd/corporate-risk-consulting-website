const COLUMNS = [
  {
    title: "Practice",
    links: [
      "Enterprise Risk",
      "Regulatory & Conduct",
      "Cyber & Technology",
      "Crisis & Resilience",
      "Financial Risk",
      "Geopolitical & Climate",
    ],
  },
  {
    title: "Firm",
    links: ["About", "Leadership", "Independence", "Careers", "Newsroom"],
  },
  {
    title: "Research",
    links: [
      "Global Risk Register",
      "Regulatory Briefs",
      "Threat Analysis",
      "Board Papers",
      "Methodology",
    ],
  },
  {
    title: "Legal",
    links: [
      "Privacy policy",
      "Terms of engagement",
      "Modern slavery statement",
      "Accessibility",
      "Cookie preferences",
    ],
  },
];

const ACCREDITATIONS = [
  "FCA authorised",
  "ISO 27001",
  "ISO 31000",
  "SOC 2 Type II",
  "GDPR",
];

export default function Footer() {
  return (
    <footer
      className="grain relative bg-ink-900 text-bone-100"
      role="contentinfo"
    >
      {/* Standfirst */}
      <div className="mx-auto max-w-[96rem] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 border-b border-bone-100/12 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-2.5">
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px] shrink-0 self-center"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9.25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <path d="M2.75 12h18.5" stroke="currentColor" strokeWidth="1.4" />
                <path
                  d="M12 2.75c3.2 3 3.2 15.5 0 18.5-3.2-3-3.2-15.5 0-18.5Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <circle cx="12" cy="12" r="2" className="fill-signal-500" />
              </svg>
              <span className="display text-[1.5rem] leading-none">
                Meridian
              </span>
              <span className="eyebrow text-[0.5625rem] opacity-55">
                Risk Group
              </span>
            </div>

            <p className="measure-tight mt-6 text-[0.9375rem] leading-[1.8] text-ink-400">
              An independent advisory firm for enterprise risk. No audit fees,
              no software licences, no implementation contracts — so the advice
              carries no second agenda.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {ACCREDITATIONS.map((a) => (
                <span
                  key={a}
                  className="border border-bone-100/15 px-2.5 py-1.5 font-mono text-[0.5625rem] uppercase tracking-widest text-ink-400"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer"
            className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-4 lg:gap-8"
          >
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h2 className="eyebrow text-[0.5625rem] text-ink-500">
                  {col.title}
                </h2>
                <ul className="mt-5 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-[0.8125rem] text-ink-300 transition-colors duration-300 hover:text-bone-100"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Baseline */}
        <div className="flex flex-col gap-6 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1.5">
            <p className="font-mono text-[0.6875rem] text-ink-500">
              © {new Date().getFullYear()} Meridian Risk Group LLP. All rights
              reserved.
            </p>
            <p className="max-w-[60ch] font-mono text-[0.625rem] leading-relaxed text-ink-600">
              Registered in England &amp; Wales OC418872. Authorised and
              regulated by the Financial Conduct Authority. Meridian Risk Group
              LLP is a limited liability partnership.
            </p>
          </div>

          <div className="flex items-center gap-5">
            {[
              {
                label: "LinkedIn",
                d: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
              },
              {
                label: "X",
                d: "M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.22-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z",
              },
              {
                label: "RSS",
                d: "M4.5 16.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM1.5 9.75v4.2a9.55 9.55 0 0 1 9.55 9.55h4.2A13.75 13.75 0 0 0 1.5 9.75Zm0-8.25v4.2c9.82 0 17.8 7.98 17.8 17.8h4.2C23.5 10.42 13.58 1.5 1.5 1.5Z",
              },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="text-ink-500 transition-colors duration-300 hover:text-bone-100"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d={s.d} />
                </svg>
              </a>
            ))}

            <a
              href="#top"
              className="ml-2 flex items-center gap-2 border border-bone-100/15 px-4 py-2 font-mono text-[0.625rem] uppercase tracking-widest text-ink-300 transition-colors duration-300 hover:border-bone-100/50 hover:text-bone-100"
            >
              Top
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-3 w-3"
                aria-hidden="true"
              >
                <path
                  d="M12 19V5M6 11l6-6 6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
