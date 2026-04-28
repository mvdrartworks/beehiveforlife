import { ReactNode } from "react";

export default function Section({
  children,
  className = "",
  id,
  bg,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "ivory" | "cream" | "warm";
}) {
  const bgClass =
    bg === "cream"
      ? "bg-cream"
      : bg === "warm"
      ? "bg-cream paper-texture"
      : "bg-ivory";
  return (
    <section
      id={id}
      className={`${bgClass} px-6 lg:px-10 py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
