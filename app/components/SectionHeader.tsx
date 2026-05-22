import type { ReactNode } from "react";

type Layout = "inline" | "stacked";
type Theme = "light" | "dark";
type HeadingSize = "sm" | "default" | "lg" | "xl";
type HeadingTag = "h1" | "h2" | "h3";

interface SectionHeaderProps {
  /** Eyebrow label shown above or beside the heading */
  label: string;
  /** Main heading text. Can be a ReactNode to allow <em> italics etc. */
  heading: ReactNode;
  /**
   * "inline" - label and heading sit on the same baseline (flex-row).
   *   Best for section intros where space is tight.
   * "stacked" - label sits above the heading on its own line.
   *   Best for hero-style section openers and CTAs.
   * Defaults to "inline".
   */
  layout?: Layout;
  /**
   * "light" - label in clay, heading in bark. For cream/ivory/parchment backgrounds.
   * "dark"  - label in turmeric, heading in ivory. For bark/soil backgrounds.
   * Defaults to "light".
   */
  theme?: Theme;
  /**
   * Controls the heading font-size clamp:
   *   "sm"      → clamp(1.25rem, 2vw, 1.6rem)
   *   "default" → clamp(1.75rem, 3.5vw, 2.75rem)
   *   "lg"      → clamp(2rem, 4vw, 3.5rem)
   *   "xl"      → clamp(2.25rem, 5vw, 4.5rem)
   * Defaults to "default".
   */
  headingSize?: HeadingSize;
  /** HTML tag for the heading. Defaults to "h2". */
  as?: HeadingTag;
  /** Tailwind classes for the outer wrapper div */
  className?: string;
  /** Bottom margin on the wrapper. Defaults to "mb-8". */
  mb?: string;
}

const HEADING_SIZES: Record<HeadingSize, string> = {
  sm: "text-[clamp(1.25rem,2vw,1.6rem)]",
  default: "text-[clamp(1.75rem,3.5vw,2.75rem)]",
  lg: "text-[clamp(2rem,4vw,3.5rem)]",
  xl: "text-[clamp(2.25rem,5vw,4.5rem)]",
};

/**
 * Reusable section header: eyebrow label + display heading.
 *
 * Usage (inline, light):
 *   <SectionHeader label="Results" heading="Real transformations" />
 *
 * Usage (stacked, dark):
 *   <SectionHeader
 *     label="Your journey"
 *     heading={<>Ready to shift <em className="italic text-clay">your culture?</em></>}
 *     layout="stacked"
 *     theme="dark"
 *     headingSize="xl"
 *   />
 */
export default function SectionHeader({
  label,
  heading,
  layout = "inline",
  theme = "light",
  headingSize = "default",
  as: Tag = "h2",
  className = "",
  mb = "mb-8",
}: SectionHeaderProps) {
  const labelColor = theme === "dark" ? "text-turmeric" : "text-clay";
  const headingColor = theme === "dark" ? "text-ivory" : "text-bark";
  const headingClasses = `font-display ${HEADING_SIZES[headingSize]} font-light ${headingColor} tracking-tight`;

  if (layout === "inline") {
    return (
      <div className={`flex items-baseline gap-4 ${mb} ${className}`}>
        <span className={`mono-label ${labelColor} text-[10px] uppercase shrink-0`}>
          {label}
        </span>
        <Tag className={headingClasses}>{heading}</Tag>
      </div>
    );
  }

  // stacked
  return (
    <div className={`${mb} ${className}`}>
      <p className={`mono-label ${labelColor} text-[10px] uppercase mb-4`}>{label}</p>
      <Tag className={headingClasses}>{heading}</Tag>
    </div>
  );
}
