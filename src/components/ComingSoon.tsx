import Section from "./Section";
import Reveal from "./Reveal";
import Link from "next/link";

export default function ComingSoon({
  title,
  intro,
  kicker = "Coming soon",
}: {
  title: string;
  intro: string;
  kicker?: string;
}) {
  return (
    <Section bg="warm">
      <div className="max-w-3xl">
        <Reveal>
          <p className="wordmark text-xs text-terracotta">{kicker}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl text-deep leading-[1.05]">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-xl text-charcoal leading-relaxed">{intro}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-6 text-charcoal-muted leading-relaxed">
            This page will open with the launch of Beehive for Life. To be
            notified, join the{" "}
            <Link href="/#newsletter" className="text-terracotta link-underline">
              newsletter
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
