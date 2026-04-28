import { ReactNode } from "react";

export default function Placeholder({
  label,
  className = "",
  children,
  ratio = "aspect-[4/3]",
}: {
  label?: string;
  className?: string;
  children?: ReactNode;
  ratio?: string;
}) {
  return (
    <div
      className={`${ratio} w-full overflow-hidden rounded-xl bg-honey-gradient relative ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 paper-texture"
      />
      {label && (
        <div className="absolute inset-0 flex items-center justify-center text-deep/55 font-serif text-sm tracking-wide uppercase">
          {label}
        </div>
      )}
      {children}
    </div>
  );
}
