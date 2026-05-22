import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline" | "text";
type Size = "default" | "sm";

interface ButtonProps {
  /** The URL to link to. If it starts with "http" or "mailto:", renders as <a target="_blank">.
   *  If it starts with "/", renders as a Next.js <Link>.
   *  If omitted, renders as a <button>. */
  href?: string;
  /** Visual style of the button. Defaults to "primary". */
  variant?: Variant;
  /** Padding size. Defaults to "default". */
  size?: Size;
  children: ReactNode;
  /** Additional Tailwind classes merged onto the element */
  className?: string;
  /** Only used when href is omitted and the element is a <button> */
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

// Note: display is intentionally NOT set in BASE so callers can control it freely
// (e.g. wrapping in a hidden/block container). Each usage site sets its own display.
const BASE = "mono-label inline-flex items-center gap-3 text-xs uppercase transition-colors";

const VARIANTS: Record<Variant, string> = {
  /** Clay fill - works on any background */
  primary: "bg-clay text-parchment hover:bg-soil",
  /** Light border + text - for dark (bark/soil) backgrounds */
  ghost: "border border-ivory/60 text-ivory hover:border-clay hover:text-clay",
  /** Clay border + text - for light (cream/ivory/parchment) backgrounds */
  outline: "border border-clay text-clay hover:bg-clay hover:text-parchment",
  /** Inline text link - no border or fill */
  text: "text-clay hover:gap-4",
};

const SIZES: Record<Size, string> = {
  default: "px-10 py-4",
  sm: "px-5 py-2.5",
};

/**
 * Unified button/link component.
 *
 * Usage:
 *   <Button href="https://..." variant="primary">Apply Now →</Button>
 *   <Button href="/coaches" variant="ghost">Meet our coaches</Button>
 *   <Button href="/testimonials" variant="text">Read all testimonials →</Button>
 *   <Button onClick={fn}>Click me</Button>
 */
export default function Button({
  href,
  variant = "primary",
  size = "default",
  children,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = [
    BASE,
    variant !== "text" ? SIZES[size] : "",
    VARIANTS[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // External links
  if (href && (href.startsWith("http") || href.startsWith("mailto:"))) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  // Internal links
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // Plain button
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
