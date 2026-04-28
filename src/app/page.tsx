import Link from "next/link";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import Placeholder from "@/components/Placeholder";
import NewsletterForm from "@/components/NewsletterForm";
import { MEMBERSHIP_TIERS } from "@/lib/membership";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-warm-radial" />
        <Placeholder
          ratio="aspect-[16/10] md:aspect-[21/9]"
          className="rounded-none"
          label="Warm studio scene at La Ruche"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-deep/10 via-deep/30 to-deep/55" />
          <div className="absolute inset-0 flex items-end md:items-center">
            <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 pb-12 md:pb-0 text-cream">
              <Reveal>
                <p className="font-sans text-sm md:text-base wordmark text-honey">
                  Born at La Ruche, Paris
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-4 font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-cream">
                  Beehive for Life
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-5 font-serif text-2xl md:text-3xl text-honey">
                  A Creative Community Born at La Ruche
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-4 max-w-xl text-base md:text-lg text-cream/85 leading-relaxed">
                  Join artists and art lovers from around the world. Learn,
                  connect, create.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <ButtonLink href="/membership" variant="primary">
                    Explore Membership
                  </ButtonLink>
                  <ButtonLink
                    href="/courses"
                    variant="secondary"
                    className="bg-cream/15 border-cream/40 text-cream hover:bg-cream/25"
                  >
                    Browse Courses
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </Placeholder>
      </section>

      {/* What is Beehive */}
      <Section bg="ivory">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          <Reveal className="md:col-span-2">
            <Placeholder
              ratio="aspect-[4/5]"
              label="Portrait of Michèle van de Roer"
              className="max-w-sm"
            />
          </Reveal>
          <div className="md:col-span-3">
            <Reveal>
              <p className="wordmark text-xs text-terracotta">
                What is Beehive for Life
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-deep leading-tight">
                A community for artists and art lovers, born at La Ruche.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <blockquote className="mt-8 border-l-2 border-honey pl-6 font-serif text-xl md:text-2xl text-charcoal leading-relaxed italic">
                &ldquo;Art is more powerful when shared. Beehive for Life was
                born from the same spirit that has animated La Ruche for over
                120 years, the belief that artists need each other.&rdquo;
              </blockquote>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 text-charcoal-muted text-sm">
                Michèle van de Roer, founder
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Three pillars */}
      <Section bg="cream">
        <Reveal>
          <p className="wordmark text-xs text-terracotta text-center">
            Three Pillars
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep text-center">
            One hive, three callings
          </h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Community",
              body: "Connect with artists worldwide. Studio exchanges, meetups, critique circles, and a global network of creative practitioners.",
              icon: "🐝",
            },
            {
              title: "Learn",
              body: "Courses taught from La Ruche by Michèle van de Roer. Technique meets healing. Art as transformation.",
              icon: "🎨",
            },
            {
              title: "Experience",
              body: "Curated exhibitions, gallery walks, artist interviews, and behind-the-scenes access to one of the world's most historic art studios.",
              icon: "🏛",
            },
          ].map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <article className="group bg-card rounded-2xl p-8 h-full border border-honey/15 shadow-card hover:-translate-y-1 hover:shadow-warm transition-all duration-500 ease-hive">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-serif text-2xl text-deep">{p.title}</h3>
                <p className="mt-3 text-charcoal-muted leading-relaxed">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* La Ruche connection */}
      <Section bg="warm" className="relative overflow-hidden">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 order-2 md:order-1">
            <Reveal>
              <p className="wordmark text-xs text-terracotta">La Ruche</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-deep leading-tight">
                Born at La Ruche, the Beehive of Paris.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg text-charcoal leading-relaxed">
                La Ruche has been home to Chagall, Modigliani, Rivera, and
                generations of artists since 1902. Beehive for Life carries
                that legacy into the digital age.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 text-charcoal-muted leading-relaxed">
                5% of all membership and course fees are donated to the
                Fondation La Ruche-Seydoux to help preserve this irreplaceable
                monument.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <a
                href="https://michelevanderoer.com/la-ruche"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-terracotta link-underline"
              >
                Learn about La Ruche
                <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>
          <Reveal className="md:col-span-2 order-1 md:order-2">
            <Placeholder
              ratio="aspect-[4/5]"
              label="La Ruche, Passage de Dantzig"
            />
          </Reveal>
        </div>
      </Section>

      {/* Membership overview */}
      <Section bg="ivory">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Reveal>
              <p className="wordmark text-xs text-terracotta">Membership</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep">
                Find your tier in the hive
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/membership"
              className="text-terracotta link-underline self-start md:self-end"
            >
              Explore all membership benefits →
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MEMBERSHIP_TIERS.map((t, i) => (
            <Reveal key={t.slug} delay={i * 0.08}>
              <Link
                href="/membership"
                className={`block h-full rounded-2xl p-6 border transition-all duration-500 ease-hive hover:-translate-y-1 hover:shadow-warm ${
                  t.highlight
                    ? "bg-honey/15 border-honey/50"
                    : "bg-card border-honey/15 shadow-card"
                }`}
              >
                <div className="text-2xl">{t.emoji}</div>
                <h3 className="mt-3 font-serif text-2xl text-deep">
                  {t.name}
                </h3>
                <p className="mt-2 text-sm text-charcoal-muted">
                  {t.tagline}
                </p>
                <p className="mt-5 font-serif text-3xl text-terracotta">
                  €{t.monthlyPrice}
                  <span className="text-sm text-charcoal-muted font-sans">
                    {" "}/month
                  </span>
                </p>
                <p className="text-xs text-charcoal-muted mt-1">
                  €{t.annualPrice}/year
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Featured course */}
      <Section bg="cream">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Placeholder
              ratio="aspect-video"
              label="30 Days of Light, video teaser"
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="wordmark text-xs text-terracotta">
                Featured Course
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep leading-tight">
                30 Days of Light
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-3 font-serif text-xl text-honey">
                A Healing Painting Journey from La Ruche, Paris
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 text-charcoal leading-relaxed">
                6 weeks. 3 modules. One transformation.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="mt-6">
                <span className="font-serif text-3xl text-terracotta">
                  €447
                </span>
                <span className="ml-3 text-sm text-charcoal-muted line-through">
                  €597
                </span>
                <span className="ml-2 text-sm text-charcoal-muted">
                  founding price
                </span>
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="mt-8">
                <ButtonLink href="/courses/30-days-of-light">
                  Learn more →
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Founder */}
      <Section bg="ivory">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <Reveal className="md:col-span-2">
            <Placeholder
              ratio="aspect-[4/5]"
              label="Michèle van de Roer in studio"
              className="max-w-sm"
            />
          </Reveal>
          <div className="md:col-span-3">
            <Reveal>
              <p className="wordmark text-xs text-terracotta">The Founder</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep leading-tight">
                Michèle van de Roer
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg text-charcoal leading-relaxed">
                Michèle van de Roer is a Dutch-born, Paris-based multimedia
                artist working from La Ruche. Her work is held in the Rodin
                Museum, the Bibliothèque Nationale de France, and private
                collections worldwide. She is represented by Galerie Paul
                Prouté (Paris) and Galerie Mourlot (New York).
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href="https://michelevanderoer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-terracotta link-underline"
              >
                See her work
                <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section bg="cream">
        <Reveal>
          <p className="wordmark text-xs text-terracotta text-center">
            Voices from the Hive
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep text-center">
            What our members say
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "A real community. The studio exchange brought me to Lisbon, and a Lisbon painter to my studio in Berlin.",
              name: "Member testimonial",
              role: "Worker Bee member",
            },
            {
              quote:
                "The course was the most generous teaching I have ever received. Michèle's voice is in the room.",
              name: "Member testimonial",
              role: "30 Days of Light graduate",
            },
            {
              quote:
                "I joined to support La Ruche. I stayed for the people I met inside the hive.",
              name: "Member testimonial",
              role: "Golden Hive patron",
            },
          ].map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="bg-card rounded-2xl p-8 h-full border border-honey/15 shadow-card">
                <p className="font-serif text-xl text-charcoal leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-6 text-sm text-deep font-medium">{t.name}</p>
                <p className="text-xs text-charcoal-muted">{t.role}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "—", label: "Members worldwide" },
              { stat: "—", label: "Countries" },
              { stat: "120+", label: "Years of La Ruche" },
              { stat: "5%", label: "Donated to La Ruche" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif text-4xl text-terracotta">{s.stat}</p>
                <p className="mt-2 text-xs wordmark text-charcoal-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Newsletter */}
      <Section bg="warm">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="wordmark text-xs text-terracotta">Newsletter</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep">
              Join the hive
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-charcoal-muted leading-relaxed">
              Get updates, inspiration, and early access to new courses and
              events.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex justify-center">
              <NewsletterForm compact />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
