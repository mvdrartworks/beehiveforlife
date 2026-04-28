import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Beehive for Life.",
};

const FAQ = [
  {
    q: "What is Beehive for Life?",
    a: "Beehive for Life is a community and course platform born at La Ruche, Paris. It connects artists and art lovers around the world through membership, online exhibitions, mentoring, courses, and gatherings.",
  },
  {
    q: "Who is it for?",
    a: "Working artists, art lovers, collectors, students, and anyone who wants a thoughtful, generous community around creative practice.",
  },
  {
    q: "Do I need to be an artist?",
    a: "Not at all. Members include painters, printmakers, photographers, sculptors, and people who simply want a serious relationship with art.",
  },
  {
    q: "What do I get with my membership?",
    a: "It depends on your tier. All tiers include the newsletter and community access. Higher tiers include studio exchanges, mentoring with Michèle, included courses, and patron benefits.",
  },
  {
    q: "How do the courses work?",
    a: "Courses are taught online with pre-recorded video lessons filmed at La Ruche, weekly live Q&A sessions with Michèle, and a private cohort community. Most courses run for 6 weeks. You keep video access for 6 months after enrollment.",
  },
  {
    q: "Can I cancel my membership?",
    a: "Yes, monthly memberships can be canceled at any time and you keep access until the end of the current period. Annual memberships are non-refundable but you keep access for the full year.",
  },
  {
    q: "What languages are courses available in?",
    a: "Courses are taught in English, with AI-assisted translation into 10+ languages. Live Q&A sessions are held in English.",
  },
  {
    q: "How does the 5% La Ruche donation work?",
    a: "5% of every membership and every course fee is donated directly to the Fondation La Ruche-Seydoux, the foundation that maintains La Ruche and supports the artists who live and work there.",
  },
  {
    q: "Can I visit La Ruche?",
    a: "La Ruche is a working artist compound and is not open to general public visits. Members at the Queen's Court and Golden Hive tiers receive priority access to occasional studio events and private visits, when scheduling permits.",
  },
  {
    q: "How do I contact support?",
    a: "Email hello@beehiveforlife.com and we will reply within two working days.",
  },
  {
    q: "What payment methods are accepted?",
    a: "Major credit and debit cards through Stripe. Memberships can be paid monthly or annually.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We use Stripe for all payment processing and never store your card details on our servers. We will publish our full privacy policy before launch.",
  },
];

export default function FaqPage() {
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
          {FAQ.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.03}>
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
                <p className="mt-4 text-charcoal leading-relaxed">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
