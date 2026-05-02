import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import Placeholder from "@/components/Placeholder";
import NewsletterForm from "@/components/NewsletterForm";
import VideoEmbed from "@/components/VideoEmbed";
import RichText from "@/components/RichText";
import {
  getHomepage,
  getMembership,
  getFeaturedCourse,
  getTestimonials,
} from "@/lib/content";
import { urlFor } from "@/lib/sanity";

export const revalidate = 60;

export default async function HomePage() {
  const [homepage, membership, featuredCourse, testimonials] =
    await Promise.all([
      getHomepage(),
      getMembership(),
      getFeaturedCourse(),
      getTestimonials(),
    ]);
  const tiers = membership.tiers;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-warm-radial" />
        {homepage.heroVideoUrl ? (
          <div className="relative aspect-[16/10] md:aspect-[21/9] w-full overflow-hidden">
            <VideoEmbed
              url={homepage.heroVideoUrl}
              title={`${homepage.heroTitle} – hero`}
              className="!rounded-none !shadow-none absolute inset-0 h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-deep/10 via-deep/30 to-deep/55 pointer-events-none" />
            <HeroOverlay homepage={homepage} />
          </div>
        ) : homepage.heroImage?.asset ? (
          <div className="relative aspect-[16/10] md:aspect-[21/9] w-full overflow-hidden">
            <Image
              src={urlFor(homepage.heroImage).width(2400).url()}
              alt={homepage.heroImage.alt || homepage.heroTitle}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-deep/10 via-deep/30 to-deep/55" />
            <HeroOverlay homepage={homepage} />
          </div>
        ) : (
          <Placeholder
            ratio="aspect-[16/10] md:aspect-[21/9]"
            className="rounded-none"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-deep/10 via-deep/30 to-deep/55" />
            <HeroOverlay homepage={homepage} />
          </Placeholder>
        )}
      </section>

      {/* What is Beehive */}
      <Section bg="ivory">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          <Reveal className="md:col-span-2">
            {homepage.founderImage?.asset ? (
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-card">
                <Image
                  src={urlFor(homepage.founderImage).width(800).url()}
                  alt={homepage.founderImage.alt || "Michèle van de Roer"}
                  fill
                  sizes="(min-width: 768px) 33vw, 80vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <Placeholder
                ratio="aspect-[4/5]"
                label="Portrait of Michèle van de Roer"
                className="max-w-sm"
              />
            )}
          </Reveal>
          <div className="md:col-span-3">
            <Reveal>
              <p className="wordmark text-xs text-terracotta">
                What is Beehive for Life
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-deep leading-tight">
                {homepage.whatIsTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <RichText
                blocks={homepage.whatIsDescription}
                className="mt-8 border-l-2 border-honey pl-6 font-serif text-xl md:text-2xl text-charcoal leading-relaxed italic space-y-4"
              />
            </Reveal>
            {homepage.founderQuote && (
              <Reveal delay={0.3}>
                <p className="mt-4 text-charcoal-muted text-sm">
                  {homepage.founderQuote}
                </p>
              </Reveal>
            )}
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
          {homepage.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <article className="group bg-card rounded-2xl p-8 h-full border border-honey/15 shadow-card hover:-translate-y-1 hover:shadow-warm transition-all duration-500 ease-hive">
                {p.icon && <div className="text-3xl mb-4">{p.icon}</div>}
                <h3 className="font-serif text-2xl text-deep">{p.title}</h3>
                <p className="mt-3 text-charcoal-muted leading-relaxed">
                  {p.description}
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
                {homepage.larucheTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <RichText
                blocks={homepage.larucheDescription}
                className="mt-6 text-lg text-charcoal leading-relaxed space-y-4"
              />
            </Reveal>
            {homepage.larucheDonationNote && (
              <Reveal delay={0.3}>
                <p className="mt-4 text-charcoal-muted leading-relaxed">
                  {homepage.larucheDonationNote}
                </p>
              </Reveal>
            )}
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
          {tiers.map((t, i) => (
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
            {featuredCourse.introVideoUrl ? (
              <VideoEmbed
                url={featuredCourse.introVideoUrl}
                title={`${featuredCourse.title} – intro video`}
              />
            ) : featuredCourse.heroImage?.asset ? (
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-card">
                <Image
                  src={urlFor(featuredCourse.heroImage).width(1600).url()}
                  alt={
                    featuredCourse.heroImage.alt || featuredCourse.title
                  }
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <Placeholder
                ratio="aspect-video"
                label={`${featuredCourse.title}, video teaser`}
              />
            )}
          </Reveal>
          <div>
            <Reveal>
              <p className="wordmark text-xs text-terracotta">
                Featured Course
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep leading-tight">
                {featuredCourse.title}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-3 font-serif font-semibold text-xl text-honey">
                {featuredCourse.subtitle}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 text-charcoal leading-relaxed">
                {featuredCourse.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="mt-6">
                <span className="font-serif text-3xl text-terracotta">
                  €{featuredCourse.foundingPrice}
                </span>
                <span className="ml-3 text-sm text-charcoal-muted line-through">
                  €{featuredCourse.originalPrice}
                </span>
                <span className="ml-2 text-sm text-charcoal-muted">
                  founding price
                </span>
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="mt-8">
                <ButtonLink href={`/courses/${featuredCourse.slug}`}>
                  View course details →
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
            {homepage.founderImage?.asset ? (
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-card">
                <Image
                  src={urlFor(homepage.founderImage).width(800).url()}
                  alt={homepage.founderImage.alt || "Michèle van de Roer"}
                  fill
                  sizes="(min-width: 768px) 33vw, 80vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <Placeholder
                ratio="aspect-[4/5]"
                label="Michèle van de Roer in studio"
                className="max-w-sm"
              />
            )}
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
              <RichText
                blocks={homepage.founderBio}
                className="mt-6 text-lg text-charcoal leading-relaxed space-y-4"
              />
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
          {testimonials.map((t, i) => (
            <Reveal key={`${t.name}-${i}`} delay={i * 0.1}>
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
              {homepage.newsletterTitle}
            </h2>
          </Reveal>
          {homepage.newsletterDescription && (
            <Reveal delay={0.2}>
              <p className="mt-4 text-charcoal-muted leading-relaxed">
                {homepage.newsletterDescription}
              </p>
            </Reveal>
          )}
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

function HeroOverlay({
  homepage,
}: {
  homepage: { heroTitle: string; heroSubtitle: string; heroDescription: string };
}) {
  return (
    <div className="absolute inset-0 flex items-end md:items-center pointer-events-none">
      <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 pb-12 md:pb-0 text-cream pointer-events-auto">
        <Reveal>
          <p className="font-sans text-sm md:text-base wordmark text-honey">
            Born at La Ruche, Paris
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-cream">
            {homepage.heroTitle}
          </h1>
        </Reveal>
        {homepage.heroSubtitle && (
          <Reveal delay={0.2}>
            <p className="mt-5 font-serif font-semibold text-2xl md:text-3xl text-honey">
              {homepage.heroSubtitle}
            </p>
          </Reveal>
        )}
        {homepage.heroDescription && (
          <Reveal delay={0.3}>
            <p className="mt-4 max-w-xl text-base md:text-lg text-cream/85 leading-relaxed">
              {homepage.heroDescription}
            </p>
          </Reveal>
        )}
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
  );
}
