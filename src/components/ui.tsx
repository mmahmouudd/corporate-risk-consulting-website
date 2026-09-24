import { useEffect, useRef, useState, type ReactNode } from "react";

/* ---------------------------------------------------------
   Scroll reveal hook — adds .is-in once element enters view
   --------------------------------------------------------- */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15
) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, seen };
}

/* ---------------------------------------------------------
   Reveal wrapper
   --------------------------------------------------------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "header";
}) {
  const { ref, seen } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${seen ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------
   Eyebrow — numbered mono section label with a signal tick
   --------------------------------------------------------- */
export function Eyebrow({
  index,
  children,
  tone = "dark",
}: {
  index?: string;
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  const muted = tone === "dark" ? "text-ink-400" : "text-ink-500";
  return (
    <div className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 shrink-0 bg-signal-500" aria-hidden="true" />
      {index && <span className={`eyebrow ${muted}`}>{index}</span>}
      {index && (
        <span
          className={`h-px w-6 ${tone === "dark" ? "bg-ink-700" : "bg-ink-900/20"}`}
          aria-hidden="true"
        />
      )}
      <span
        className={`eyebrow ${tone === "dark" ? "text-ink-200" : "text-ink-800"}`}
      >
        {children}
      </span>
    </div>
  );
}

/* ---------------------------------------------------------
   Editorial arrow link
   --------------------------------------------------------- */
export function ArrowLink({
  href,
  children,
  tone = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2.5 text-sm font-medium ${
        tone === "dark"
          ? "text-bone-100 hover:text-signal-300"
          : "text-ink-900 hover:text-signal-500"
      } transition-colors duration-300 ${className}`}
    >
      <span className="link-underline">{children}</span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1.5"
        aria-hidden="true"
      >
        <path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

/* ---------------------------------------------------------
   Primary button — squared, letterpress feel
   --------------------------------------------------------- */
export function Button({
  href,
  children,
  variant = "solid",
  tone = "dark",
  type,
  className = "",
}: {
  href?: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  tone?: "dark" | "light";
  type?: "submit" | "button";
  className?: string;
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-3 px-7 py-4 text-[0.8125rem] font-medium tracking-wide transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]";

  const styles =
    variant === "solid"
      ? tone === "dark"
        ? "bg-bone-100 text-ink-900 hover:bg-signal-500 hover:text-bone-50"
        : "bg-ink-900 text-bone-100 hover:bg-signal-500"
      : tone === "dark"
        ? "border border-ink-100/20 text-bone-100 hover:border-bone-100/60 hover:bg-bone-100/5"
        : "border border-ink-900/20 text-ink-900 hover:border-ink-900/60 hover:bg-ink-900/5";

  const inner = (
    <>
      <span>{children}</span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-3.5 w-3.5 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1"
        aria-hidden="true"
      >
        <path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );

  if (type) {
    return (
      <button type={type} className={`${base} ${styles} ${className}`}>
        {inner}
      </button>
    );
  }
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {inner}
    </a>
  );
}
