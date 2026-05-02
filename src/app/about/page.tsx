import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";
import RichText from "@/components/RichText";
import { getAboutPage } from "@/lib/content";
import { urlFor } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Beehive for Life, the founder Michèle van de Roer, and La Ruche, Paris.",
};

export const revalidate = 60;

export default async function AboutPage() {
  const about = await getAboutPage();

  return (
    <>
      <Section bg="warm">
        <div className="max-w-3xl">
          <Reveal>
            <p className="wordmark text-xs text-terracotta">
              {about.heroEyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 font-serif text-5xl md:text-6xl text-deep leading-[1.05]">
              {about.heroTitle}
            </h1>
          </Reveal>
        </div>
      </Section>

      <Section bg="ivory">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <Reveal className="md:col-span-2">
            {about.storyImage?.asset ? (
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-card">
                <Image
                  src={urlFor(about.storyImage).width(900).url()}
                  alt={about.storyImage.alt || about.storyTitle}
                  fill
                  sizes="(min-width: 768px) 33vw, 80vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <Placeholder ratio="aspect-[4/5]" label="La Ruche, exterior" />
            )}
          </Reveal>
          <div className="md:col-span-3">
            <Reveal>
              <p className="wordmark text-xs text-terracotta">
                {about.storyEyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep leading-tight">
                {about.storyTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <RichText
                blocks={about.storyBody}
                className="mt-8 space-y-5 text-charcoal text-lg leading-relaxed"
              />
            </Reveal>
          </div>
        </div>
      </Section>

      <Section bg="cream">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <Reveal className="md:col-span-2">
            {about.founderImage?.asset ? (
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-card">
                <Image
                  src={urlFor(about.founderImage).width(900).url()}
                  alt={about.founderImage.alt || about.founderTitle}
                  fill
                  sizes="(min-width: 768px) 33vw, 80vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <Placeholder
                ratio="aspect-[4/5]"
                label="Michèle van de Roer"
              />
            )}
          </Reveal>
          <div className="md:col-span-3">
            <Reveal>
              <p className="wordmark text-xs text-terracotta">
                {about.founderEyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep leading-tight">
                {about.founderTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <RichText
                blocks={about.founderBio}
                className="mt-8 space-y-5 text-charcoal text-lg leading-relaxed"
              />
            </Reveal>
            {about.founderLinkLabel && about.founderLinkUrl && (
              <Reveal delay={0.3}>
                <a
                  href={about.founderLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-terracotta link-underline"
                >
                  {about.founderLinkLabel}
                  <span aria-hidden>→</span>
                </a>
              </Reveal>
            )}
          </div>
        </div>
      </Section>

      <Section bg="ivory">
        <div className="max-w-3xl">
          <Reveal>
            <p className="wordmark text-xs text-terracotta">
              {about.larucheEyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep leading-tight">
              {about.larucheTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <RichText
              blocks={about.larucheBody}
              className="mt-8 space-y-5 text-charcoal text-lg leading-relaxed"
            />
          </Reveal>
          {about.larucheLinkLabel && about.larucheLinkUrl && (
            <Reveal delay={0.3}>
              <a
                href={about.larucheLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-terracotta link-underline"
              >
                {about.larucheLinkLabel}
                <span aria-hidden>→</span>
              </a>
            </Reveal>
          )}
        </div>
      </Section>
    </>
  );
}
