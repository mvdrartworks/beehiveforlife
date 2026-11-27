import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@/lib/content";

// A table from the legal pages (studio type "legalTable").
type LegalTable = {
  headerRow?: boolean;
  rows?: { _key?: string; cells?: string[] }[];
};

function Table({ value }: { value: LegalTable }) {
  const rows = (value.rows ?? []).map((r) => r.cells ?? []);
  if (rows.length === 0) return null;
  const header = value.headerRow ? rows[0] : null;
  const body = value.headerRow ? rows.slice(1) : rows;
  return (
    <>
      {/* Phones: one card per row, each value under its column title. */}
      {header && (
        <div className="sm:hidden space-y-3">
          {body.map((cells, r) => (
            <dl
              key={r}
              className="rounded-xl border border-honey/25 bg-card/60 p-4 space-y-2 text-sm"
            >
              {cells.map((c, i) => (
                <div key={i}>
                  <dt className="text-xs font-medium text-deep">{header[i]}</dt>
                  <dd className="whitespace-pre-line">{c}</dd>
                </div>
              ))}
            </dl>
          ))}
        </div>
      )}
      <div className={header ? "hidden sm:block" : ""}>
        <table className="w-full text-left text-sm border-collapse">
          {header && (
            <thead>
              <tr>
                {header.map((c, i) => (
                  <th
                    key={i}
                    className="align-bottom py-3 pr-4 border-b border-honey/40 font-medium text-deep"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {body.map((cells, r) => (
              <tr key={r} className="border-b border-honey/20">
                {cells.map((c, i) => (
                  <td
                    key={i}
                    className={`align-top py-3 pr-4 whitespace-pre-line ${
                      i === 0 && !header ? "font-medium text-deep" : ""
                    }`}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

const components: PortableTextComponents = {
  types: {
    legalTable: ({ value }) => <Table value={value as LegalTable} />,
  },
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
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2">{children}</ol>
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
