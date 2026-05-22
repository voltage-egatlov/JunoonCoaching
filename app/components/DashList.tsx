interface DashListItem {
  text: string;
}

interface DashListProps {
  /** Array of items, or plain strings */
  items: (DashListItem | string)[];
  /** Text size + color classes for each item. Defaults to "text-sm text-driftwood font-light". */
  itemClassName?: string;
  /** Gap between items. Defaults to "gap-2.5". */
  gap?: string;
  /** Additional classes on the <ul> */
  className?: string;
}

/**
 * A clean unordered list where each item is prefixed by a clay em-dash (—).
 * Used throughout the site for feature lists, bullet points, etc.
 *
 * Usage:
 *   <DashList items={["35+ recipes", "Macro breakdowns", "Gluten free options"]} />
 *
 *   // Light background — use text-soil for higher contrast:
 *   <DashList items={features} itemClassName="text-sm text-soil font-light" />
 */
export default function DashList({
  items,
  itemClassName = "text-sm text-driftwood font-light",
  gap = "gap-2.5",
  className = "",
}: DashListProps) {
  return (
    <ul className={`flex flex-col ${gap} ${className}`}>
      {items.map((item, i) => {
        const text = typeof item === "string" ? item : item.text;
        return (
          <li key={i} className={`flex items-start gap-3 ${itemClassName}`}>
            <span className="text-clay mt-0.5 shrink-0">—</span>
            {text}
          </li>
        );
      })}
    </ul>
  );
}
