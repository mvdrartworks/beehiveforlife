import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import { MEMBERSHIP_TIERS } from "@/lib/membership";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Choose the Beehive for Life membership that fits your creative journey. Four tiers from Seedling to Golden Hive.",
};

const FAQ = [
  {
    q: "Can I cancel anytime?",
    a: "Yes, cancel monthly at any time. Annual memberships are non-refundable but you keep access until the end of your period.",
  },
  {
    q: "Can I upgrade or downgrade?",
    a: "Yes, at any time. Changes take effect on your next billing date.",
  },
  {
    q: "Is this a course platform?",
    a: "Beehive for Life is a community first. Courses are available separately or included in higher tiers.",
  },
  {
    q: "Do I need to be an artist?",
    a: "Not at all. Art lovers, collectors, and anyone curious about creative practice are welcome.",
  },
  {
    q: "What is the 5% La Ruche donation?",
    a: "5% of all membership and course fees go directly to the Fondation La Ruche-Seydoux to help preserve this historic artist compound.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <Section bg="warm">
        <div className="max-w-3xl">
          <Reveal>
            <p className="wordmark text-xs text-terracotta">Membership</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 font-serif text-5xl md:text-6xl text-deep leading-[1.05]">
              Join the Hive
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-xl md:text-2xl text-charcoal leading-relaxed">
              Choose the membership that fits your creative journey.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section bg="ivory">
        <div className="grid md:grid-cols-2 gap-6">
          {MEMBERSHIP_TIERS.map((t, i) => (
            <Reveal key={t.slug} delay={i * 0.08}>
              <article
                className={`relative h-full rounded-2xl p-8 md:p-10 border transition-all duration-500 ease-hive hover:-translate-y-1 hover:shadow-warm ${
                  t.highlight
                    ? "bg-honey/15 border-honey/50"
                    : "bg-card border-honey/15 shadow-card"
                }`}
              >
                {t.highlight && (
                  <span className="absolute top-5 right-5 text-[0.7rem] tracking-widest uppercase bg-terracotta text-cream px-3 py-1 rounded-full">
                    Most popular
                  </span>
                )}
                <div className="text-3xl">{t.emoji}</div>
                <h2 className="mt-3 font-serif text-3xl md:text-4xl text-deep">
                  {t.name}
                </h2>
                <p className="mt-2 text-sm text-charcoal-muted">
                  {t.tagline}
                </p>

                <div className="mt-6 flex items-baseline gap-3 flex-wrap">
                  <span className="font-serif text-4xl text-terracotta">
                    €{t.monthlyPrice}
                  </span>
                  <span className="text-sm text-charcoal-muted">/month</span>
                  <span className="text-charcoal-muted">·</span>
                  <span className="text-charcoal">€{t.annualPrice}/year</span>
                  <span className="text-xs text-honey wordmark">
                    2 months free
                  </span>
                </div>

                <ul className="mt-8 space-y-3">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-3 text-charcoal leading-relaxed"
                    >
                      <span className="text-honey mt-1">✦</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-8 text-sm text-charcoal-muted italic">
                  Perfect for: {t.perfectFor}
                </p>

                <div className="mt-8">
                  <ButtonLink href={`/membership/checkout?tier=${t.slug}`}>
                    Join now
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-charcoal-muted">
            Not sure? Start with Seedling, upgrade anytime.
          </p>
        </Reveal>
      </Section>

      <Section bg="cream">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="wordmark text-xs text-terracotta text-center">FAQ</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep text-center">
              Frequently asked
            </h2>
          </Reveal>

          <div className="mt-12 divide-y divide-honey/20 border-y border-honey/20">
            {FAQ.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.05}>
                <details className="group py-6">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-serif text-xl md:text-2xl text-deep pr-6">
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      className="text-2xl text-honey transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal leading-relaxed">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
