import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@/lib/content";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-honey pl-6 italic">
        {children}
      </blockquote>
    ),
    h2: ({ children }) => (
      <h2 className="font-serif text-3xl text-deep mt-6">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-serif text-2xl text-deep mt-6">{children}</h3>
    ),
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={
          value?.href?.startsWith("http") ? "noopener noreferrer" : undefined
        }
        className="text-terracotta link-underline"
      >
        {children}
      </a>
    ),
  },
};

export default function RichText({
  blocks,
  className = "",
}: {
  blocks: PortableTextBlock[] | undefined | null;
  className?: string;
}) {
  if (!blocks || blocks.length === 0) return null;
  return (
    <div className={className}>
      <PortableText
        value={blocks as unknown as Parameters<typeof PortableText>[0]["value"]}
        components={components}
      />
    </div>
  );
}
