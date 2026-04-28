import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Beehive for Life. Email hello@beehiveforlife.com or use the form below.",
};

export default function ContactPage() {
  return (
    <>
      <Section bg="warm">
        <div className="max-w-3xl">
          <Reveal>
            <p className="wordmark text-xs text-terracotta">Contact</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 font-serif text-5xl md:text-6xl text-deep leading-[1.05]">
              Write to the hive.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-xl text-charcoal leading-relaxed">
              We answer everything personally, within two working days.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section bg="ivory">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Reveal>
              <p className="wordmark text-xs text-terracotta">Direct</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 font-serif text-3xl text-deep">
                hello@beehiveforlife.com
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-charcoal leading-relaxed">
                Founded by{" "}
                <a
                  href="https://michelevanderoer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta link-underline"
                >
                  Michèle van de Roer
                </a>
                .
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-2 text-charcoal leading-relaxed">
                Instagram{" "}
                <a
                  href="https://instagram.com/dateforart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta link-underline"
                >
                  @dateforart
                </a>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
