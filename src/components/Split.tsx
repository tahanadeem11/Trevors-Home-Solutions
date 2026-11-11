import {
  Children,
  cloneElement,
  isValidElement,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react";

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement(node)) {
    return textOf((node as ReactElement<{ children?: ReactNode }>).props.children);
  }
  return "";
}

function splitNode(node: ReactNode, key: string): ReactNode {
  if (typeof node === "string") {
    return node.split(/(\s+)/).map((part, i) => {
      if (!part) return null;
      if (/^\s+$/.test(part)) return " ";
      return (
        <span key={`${key}${i}`} className="w" aria-hidden="true">
          <span className="wi">{part}</span>
        </span>
      );
    });
  }
  if (isValidElement(node)) {
    const el = node as ReactElement<{ children?: ReactNode }>;
    const kids = Children.toArray(el.props.children).map((c, i) =>
      splitNode(c, `${key}${i}-`),
    );
    return cloneElement(el, { key: el.key ?? key }, ...kids);
  }
  return node;
}

/** Server-rendered masked word split. ScrollFx animates the `.wi` spans. */
export default function Split({
  as: Tag = "h2",
  hero = false,
  className,
  children,
}: {
  as?: ElementType;
  hero?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const attr = hero ? { "data-hero-split": "" } : { "data-split": "" };
  return (
    <Tag className={className} aria-label={textOf(children).replace(/\s+/g, " ").trim()} {...attr}>
      {Children.toArray(children).map((c, i) => splitNode(c, `s${i}-`))}
    </Tag>
  );
}
