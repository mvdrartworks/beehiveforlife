import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import { getMembershipNote, getFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "A members' community is in the works at Beehive for Life. Join the waiting list to hear about it first.",
};

export const revalidate = 60;

// No membership can be joined yet: the page only shows a short note (edited
// in the studio) with a link to the waiting list. No tiers, no prices.
export default async function MembershipPage() {
  const [note, faqs] = await Promise.all([
    getMembershipNote(),
    getFaqs("membership"),
  ]);

  return (
    <>
      <Section bg="warm">
        <div className="max-w-3xl">
          <Reveal>
            <p className="wordmark text-xs text-terracotta">Membership</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 font-serif text-5xl md:text-6xl text-deep leading-[1.05]">
              {note.heading}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-xl md:text-2xl text-charcoal leading-relaxed whitespace-pre-line">
              {note.note}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8">
              <ButtonLink href="/waitlist">{note.linkLabel}</ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {faqs.length > 0 && (
        <Section bg="cream">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <p className="wordmark text-xs text-terracotta text-center">
                FAQ
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep text-center">
                Frequently asked
              </h2>
            </Reveal>

            <div className="mt-12 divide-y divide-honey/20 border-y border-honey/20">
              {faqs.map((item, i) => (
                <Reveal key={item.question} delay={i * 0.05}>
                  <details className="group py-6">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <span className="font-serif text-xl md:text-2xl text-deep pr-6">
                        {item.question}
                      </span>
                      <span
                        aria-hidden
                        className="text-2xl text-honey transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal leading-relaxed">
                      {item.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
