import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Courses from La Ruche, Paris. Art as transformation, taught by Michèle van de Roer.",
};

export default function CoursesPage() {
  return (
    <>
      <Section bg="warm">
        <div className="max-w-3xl">
          <Reveal>
            <p className="wordmark text-xs text-terracotta">Courses</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 font-serif text-5xl md:text-6xl text-deep leading-[1.05]">
              Courses from La Ruche
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-xl md:text-2xl text-charcoal leading-relaxed">
              Art as transformation. Technique meets healing.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section bg="ivory">
        <Reveal>
          <article className="grid md:grid-cols-2 gap-10 bg-card rounded-2xl border border-honey/15 shadow-card overflow-hidden">
            <Placeholder
              ratio="aspect-[4/3] md:aspect-auto"
              label="30 Days of Light"
              className="rounded-none md:h-full"
            />
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="wordmark text-xs text-terracotta">
                Featured course
              </p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep leading-tight">
                30 Days of Light
              </h2>
              <p className="mt-3 font-serif text-xl text-honey">
                A Healing Painting Journey from La Ruche, Paris
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="wordmark text-[0.7rem] text-charcoal-muted">
                    Duration
                  </dt>
                  <dd className="mt-1 text-charcoal">6 weeks, 3 modules</dd>
                </div>
                <div>
                  <dt className="wordmark text-[0.7rem] text-charcoal-muted">
                    Format
                  </dt>
                  <dd className="mt-1 text-charcoal">
                    Video lessons + weekly live Q&amp;A
                  </dd>
                </div>
                <div>
                  <dt className="wordmark text-[0.7rem] text-charcoal-muted">
                    Founding price
                  </dt>
                  <dd className="mt-1 text-charcoal">
                    €447{" "}
                    <span className="text-charcoal-muted line-through">
                      €597
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="wordmark text-[0.7rem] text-charcoal-muted">
                    Member discount
                  </dt>
                  <dd className="mt-1 text-charcoal">Up to 100% off</dd>
                </div>
              </dl>

              <div className="mt-6 text-sm text-charcoal-muted leading-relaxed">
                <p>
                  Seedling 10% · Worker Bee 15% · Queen&rsquo;s Court included
                  · Golden Hive included
                </p>
              </div>

              <div className="mt-8">
                <ButtonLink href="/courses/30-days-of-light">
                  View course details →
                </ButtonLink>
              </div>
            </div>
          </article>
        </Reveal>
      </Section>

      <Section bg="cream">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="wordmark text-xs text-terracotta">Coming soon</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep">
              More courses on the way
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-charcoal leading-relaxed">
              New courses are developed each year. Join the newsletter to be
              notified when the next cohort opens.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8">
              <Link
                href="/#newsletter"
                className="text-terracotta link-underline"
              >
                Join the newsletter →
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
