import type { ReactNode } from "react";
import Container from "./Container";

interface PageHeroProps {
  /** Eyebrow label (mono, small, turmeric on dark background) */
  label: string;
  /** Main page title rendered as an h1 */
  title: string;
  /** Optional italic subtitle shown below the title */
  subtitle?: string;
  /** Optional content to render below the title (e.g. a CTA) */
  children?: ReactNode;
  /** Additional classes on the outer <section> */
  className?: string;
}

/**
 * Standard inner-page header used on Shop, Coaches, Testimonials, Contact, Blog.
 *
 * Renders a dark bark section with:
 *   - small turmeric mono label
 *   - large display h1 in ivory
 *   - optional italic subtitle in driftwood
 *   - optional children (e.g. a <Button>)
 *
 * Usage:
 *   <PageHero label="Resources" title="Shop" />
 *   <PageHero label="The team" title="Our coaches" />
 *   <PageHero label="What our clients say" title="Testimonials" />
 */
export default function PageHero({
  label,
  title,
  subtitle,
  children,
  className = "",
}: PageHeroProps) {
  return (
    <section className={`bg-bark py-16 md:py-24 ${className}`}>
      <Container>
        <p className="mono-label text-turmeric text-[10px] uppercase mb-4">{label}</p>
        <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] font-light text-ivory leading-[0.95] tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p
            className="font-display text-driftwood font-light italic mt-4 max-w-md"
            style={{ fontSize: "1.2rem" }}
          >
            {subtitle}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </Container>
    </section>
  );
}
