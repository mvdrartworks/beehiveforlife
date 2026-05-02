import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { getFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Beehive for Life.",
};

export const revalidate = 60;

export default async function FaqPage() {
  const faqs = await getFaqs("general");

  return (
    <>
      <Section bg="warm">
        <div className="max-w-3xl">
          <Reveal>
            <p className="wordmark text-xs text-terracotta">FAQ</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 font-serif text-5xl md:text-6xl text-deep leading-[1.05]">
              Questions, answered.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-xl text-charcoal leading-relaxed">
              If you don&rsquo;t find what you need here, write to{" "}
              <a
                href="mailto:hello@beehiveforlife.com"
                className="text-terracotta link-underline"
              >
                hello@beehiveforlife.com
              </a>
              .
            </p>
          </Reveal>
        </div>
      </Section>

      <Section bg="ivory">
        <div className="max-w-3xl mx-auto divide-y divide-honey/20 border-y border-honey/20">
          {faqs.map((item, i) => (
            <Reveal key={item.question} delay={i * 0.03}>
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
      </Section>
    </>
  );
}
