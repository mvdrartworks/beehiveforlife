import ComingSoon from "@/components/ComingSoon";
import RichText from "@/components/RichText";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { getLegalPage, type LegalPageType } from "@/lib/content";

function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

// A legal page written in Sanity. Until its text is filled in, the page shows
// the short placeholder it had before.
export default async function LegalPage({
  type,
  title,
  placeholder,
}: {
  type: LegalPageType;
  title: string;
  placeholder: string;
}) {
  const page = await getLegalPage(type);
  if (page.body.length === 0) {
    return <ComingSoon kicker="Legal" title={title} intro={placeholder} />;
  }
  return (
    <Section bg="warm">
      <div className="max-w-3xl">
        <Reveal>
          <p className="wordmark text-xs text-terracotta">Legal</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl text-deep leading-[1.05]">
            {page.heading ?? title}
          </h1>
        </Reveal>
        {page.lastUpdated && (
          <p className="mt-6 text-sm text-charcoal-muted">
            Last updated {formatDate(page.lastUpdated)}
          </p>
        )}
        <RichText
          blocks={page.body}
          className="mt-10 space-y-5 text-charcoal leading-relaxed"
        />
      </div>
    </Section>
  );
}
