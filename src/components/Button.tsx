import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center px-7 py-3.5 rounded-md text-sm font-medium tracking-wide transition-all duration-300 ease-hive";

const styles: Record<Variant, string> = {
  primary:
    "bg-terracotta text-cream hover:bg-deep hover:-translate-y-[1px] shadow-card",
  secondary:
    "bg-honey/15 text-deep border border-honey/40 hover:bg-honey/25 hover:-translate-y-[1px]",
  ghost:
    "text-deep hover:text-terracotta",
};

export function ButtonLink({
  href,
  variant = "primary",
  children,
  external,
  className = "",
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  const cls = `${base} ${styles[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
