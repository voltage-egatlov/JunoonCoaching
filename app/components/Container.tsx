import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  /** Extra Tailwind classes applied to the inner div */
  className?: string;
}

/**
 * Max-width site container.
 * Renders: max-w-[1200px] mx-auto px-6 md:px-12
 * Wrap every page section's content in this.
 */
export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`max-w-[1200px] mx-auto px-6 md:px-12 ${className}`}>
      {children}
    </div>
  );
}
