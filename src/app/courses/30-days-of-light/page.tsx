import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "30 Days of Light",
  description:
    "A Healing Painting Journey from La Ruche, Paris. Six weeks, three modules, taught by Michèle van de Roer.",
};

const MODULES = [
  {
    n: "01",
    title: "Working from Love",
    body: "Begin with what moves you.",
  },
  {
    n: "02",
    title: "Working from Dislike",
    body: "Transform resistance into creative fuel.",
  },
  {
    n: "03",
    title: "Self-Portrait Journey",
    body: "Meet yourself on the canvas.",
  },
];

const DISCOUNTS = [
  { tier: "Seedling", value: "10% off (€402)" },
  { tier: "Worker Bee", value: "15% off (€380)" },
  { tier: "Queen's Court", value: "Included at no extra charge" },
  { tier: "Golden Hive", value: "Included permanently" },
];

export default function ThirtyDaysOfLightPage() {
  return (
    <>
      <Section bg="warm" className="!py-16 md:!py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Reveal>
              <p className="wordmark text-xs text-terracotta">Course</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-3 font-serif text-5xl md:text-6xl text-deep leading-[1.05]">
                30 Days of Light
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 font-serif font-semibold text-2xl text-honey">
                A Healing Painting Journey from La Ruche, Paris
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 text-lg text-charcoal leading-relaxed">
                6 weeks. 3 modules. One transformation.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <ButtonLink href="/courses/30-days-of-light/enroll">
                  Enroll now
                </ButtonLink>
                <ButtonLink href="#format" variant="secondary">
                  How it works
                </ButtonLink>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Placeholder
              ratio="aspect-video"
              label="Course teaser, filmed at La Ruche"
            />
          </Reveal>
        </div>
      </Section>

      <Section bg="ivory">
        <div className="max-w-3xl">
          <Reveal>
            <p className="wordmark text-xs text-terracotta">Overview</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep leading-tight">
              Painting that changes a life.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-charcoal leading-relaxed">
              These aren&rsquo;t ordinary painting classes. They take place
              within the historic studios of La Ruche, where Chagall and
              Modigliani once worked. Michèle has developed a teaching system
              that interweaves artistic technique with healing and wellbeing,
              a method designed not just to teach you how to paint, but to
              fundamentally improve your life.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section bg="cream">
        <Reveal>
          <p className="wordmark text-xs text-terracotta">What you will learn</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep">
            Three modules, six weeks
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {MODULES.map((m, i) => (
            <Reveal key={m.n} delay={i * 0.1}>
              <article className="bg-card rounded-2xl p-8 h-full border border-honey/15 shadow-card hover:-translate-y-1 hover:shadow-warm transition-all duration-500 ease-hive">
                <p className="font-serif text-5xl text-honey">{m.n}</p>
                <h3 className="mt-4 font-serif text-2xl text-deep">
                  Module {m.n}: {m.title}
                </h3>
                <p className="mt-3 text-charcoal-muted leading-relaxed">
                  {m.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="ivory" id="format">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <Reveal>
              <p className="wordmark text-xs text-terracotta">Format</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep leading-tight">
                How the cohort runs
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <ul className="space-y-4 text-charcoal leading-relaxed">
              {[
                "6-week programme",
                "Pre-recorded video lessons filmed at La Ruche",
                "Weekly live Q&A sessions with Michèle",
                "Private community access during the cohort",
                "6 months of video access after enrollment",
                "Available in 10+ languages (AI-assisted translation)",
              ].map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="text-honey mt-1">✦</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section bg="cream">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Reveal>
              <p className="wordmark text-xs text-terracotta">Pricing</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep leading-tight">
                Founding cohort pricing
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 font-serif text-5xl text-terracotta">
                €447
                <span className="ml-3 text-base font-sans text-charcoal-muted line-through">
                  €597
                </span>
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-2 text-sm text-charcoal-muted">
                Founding student price for the first cohort.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="bg-card rounded-2xl p-8 border border-honey/15 shadow-card">
              <p className="wordmark text-xs text-terracotta">
                Member discounts
              </p>
              <ul className="mt-4 divide-y divide-honey/15">
                {DISCOUNTS.map((d) => (
                  <li
                    key={d.tier}
                    className="py-3 flex items-center justify-between gap-4"
                  >
                    <span className="font-serif text-lg text-deep">
                      {d.tier}
                    </span>
                    <span className="text-sm text-charcoal text-right">
                      {d.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section bg="ivory">
        <div className="max-w-3xl">
          <Reveal>
            <p className="wordmark text-xs text-terracotta">
              Private sessions
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep leading-tight">
              Want more personal guidance?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-charcoal leading-relaxed">
              Book a private 30-minute session with Michèle for €150.
              Available via Calendly during the active 6-week cohort period.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section bg="warm">
        <div className="max-w-3xl">
          <Reveal>
            <p className="wordmark text-xs text-terracotta">
              The La Ruche difference
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-serif text-3xl md:text-4xl text-deep leading-tight">
              5% of your course fee is donated to the Fondation La
              Ruche-Seydoux. You are not just investing in yourself, you are
              helping preserve one of the most important artistic monuments in
              the world.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section bg="cream">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-deep">
              Enroll in 30 Days of Light
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-charcoal-muted">
              Founding cohort price €447. Cohorts open quarterly.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex justify-center">
              <ButtonLink href="/courses/30-days-of-light/enroll">
                Enroll now
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-sm text-charcoal-muted">
              Questions? Contact us at{" "}
              <a
                href="mailto:hello@beehiveforlife.com"
                className="text-terracotta link-underline"
              >
                hello@beehiveforlife.com
              </a>
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
