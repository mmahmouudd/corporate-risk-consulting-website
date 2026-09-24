import { useEffect, useState } from "react";
import { NAV } from "../data";

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`group flex items-baseline gap-2.5 ${className}`}
      aria-label="Meridian Risk Group — home"
    >
      {/* Meridian mark: a horizon line bisecting a circle */}
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
        <circle
          cx="12"
          cy="12"
          r="2"
          className="fill-signal-500 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-150"
          style={{ transformOrigin: "center" }}
        />
      </svg>
      <span className="display text-[1.35rem] leading-none tracking-tight">
        Meridian
      </span>
      <span className="eyebrow hidden text-[0.5625rem] opacity-55 sm:inline">
        Risk Group
      </span>
    </a>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        id="top"
        className={`fixed inset-x-0 top-0 z-50 text-bone-100 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${
          scrolled
            ? "border-b border-bone-100/10 bg-ink-900/85 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className={`mx-auto flex max-w-[96rem] items-center justify-between px-6 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] lg:px-10 ${
            scrolled ? "h-16" : "h-20 lg:h-24"
          }`}
        >
          <Wordmark />

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="eyebrow text-ink-300 transition-colors duration-300 hover:text-bone-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            {/* Live status — small credibility signal */}
            <div className="hidden items-center gap-2 xl:flex">
              <span
                className="h-1.5 w-1.5 animate-blink rounded-full bg-signal-500"
                aria-hidden="true"
              />
              <span className="eyebrow text-[0.5625rem] text-ink-400">
                Advisory desk open
              </span>
            </div>

            <a
              href="#contact"
              className="hidden border border-bone-100/25 px-5 py-2.5 text-[0.75rem] font-medium tracking-wide transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:border-bone-100 hover:bg-bone-100 hover:text-ink-900 sm:inline-block"
            >
              Request briefing
            </a>

            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span className="flex flex-col gap-[5px]">
                <span className="block h-px w-6 bg-current" />
                <span className="block h-px w-6 bg-current" />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink-950 text-bone-100 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="flex h-20 items-center justify-between px-6">
          <Wordmark />
          <button
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M5 5l14 14M19 5L5 19"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile" className="px-6 pt-6">
          <ul className="border-t border-bone-100/10">
            {NAV.map((item, i) => (
              <li key={item.href} className="border-b border-bone-100/10">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-5 py-6 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:translate-x-2"
                  style={{
                    transitionDelay: open ? `${i * 45}ms` : "0ms",
                  }}
                >
                  <span className="eyebrow text-[0.5625rem] text-ink-500">
                    0{i + 1}
                  </span>
                  <span className="display text-4xl">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-10 flex items-center justify-center bg-bone-100 px-6 py-4 text-sm font-medium text-ink-900"
          >
            Request briefing
          </a>

          <p className="mt-8 text-xs leading-relaxed text-ink-500">
            25 Bank Street, Canary Wharf
            <br />
            London E14 5JP · United Kingdom
          </p>
        </nav>
      </div>
    </>
  );
}
