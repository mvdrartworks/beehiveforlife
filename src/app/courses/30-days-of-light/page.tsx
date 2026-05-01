import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import Placeholder from "@/components/Placeholder";
import { getCourse } from "@/lib/content";

export const metadata: Metadata = {
  title: "30 Days of Light",
  description:
    "A Healing Painting Journey from La Ruche, Paris. Six weeks, three modules, taught by Michèle van de Roer.",
};

export default async function ThirtyDaysOfLightPage() {
  const course = await getCourse("30-days-of-light");

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
                {course.title}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 font-serif font-semibold text-2xl text-honey">
                {course.subtitle}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 text-lg text-charcoal leading-relaxed">
                {course.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <ButtonLink href={`/courses/${course.slug}/enroll`}>
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
              {course.description}
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
          {course.modules.map((m, i) => (
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
              {course.formatDetails.map((line) => (
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
                €{course.foundingPrice}
                <span className="ml-3 text-base font-sans text-charcoal-muted line-through">
                  €{course.originalPrice}
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
                {course.memberDiscounts.map((d) => (
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
              {course.privateSessionsDescription}
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
              {course.laRucheNote}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section bg="cream">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-deep">
              Enroll in {course.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-charcoal-muted">{course.enrollFootnote}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex justify-center">
              <ButtonLink href={`/courses/${course.slug}/enroll`}>
                Enroll now
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-sm text-charcoal-muted">
              Questions? Contact us at{" "}
              <a
                href={`mailto:${course.contactEmail}`}
                className="text-terracotta link-underline"
              >
                {course.contactEmail}
              </a>
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
