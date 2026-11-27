import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import WaitlistForm from "./WaitlistForm";
import { formatIntroDate, getWaitlistPage } from "@/lib/waitlist-content";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const { texts } = await getWaitlistPage();
  return { title: "Waiting list", description: texts.seoDescription };
}

export default async function WaitlistPage() {
  const { texts, liveIntro } = await getWaitlistPage();
  return (
    <Section bg="warm">
      <div className="max-w-xl mx-auto">
        <Reveal>
          <p className="wordmark text-xs text-terracotta">{texts.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl text-deep leading-[1.05]">
            {texts.heading}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-xl text-charcoal leading-relaxed whitespace-pre-line">
            {texts.intro}
          </p>
        </Reveal>

        {liveIntro && (
          <Reveal delay={0.25}>
            <div className="mt-8 rounded-2xl border border-honey/30 bg-honey/10 p-6">
              <p className="wordmark text-xs text-terracotta">
                {liveIntro.heading}
              </p>
              <p className="mt-2 font-serif text-2xl text-deep leading-snug">
                {formatIntroDate(liveIntro.date)}
                {liveIntro.time && (
                  <>
                    {" · "}
                    {liveIntro.time} (Paris time)
                  </>
                )}
              </p>
              {liveIntro.text && (
                <p className="mt-3 text-charcoal leading-relaxed whitespace-pre-line">
                  {liveIntro.text}
                </p>
              )}
            </div>
          </Reveal>
        )}

        <Reveal delay={0.3}>
          <div className="mt-10">
            <WaitlistForm
              labels={{
                firstName: texts.firstNameLabel,
                email: texts.emailLabel,
                button: texts.buttonLabel,
                privacyNote: texts.privacyNote,
                privacyLink: texts.privacyLinkLabel,
                success: texts.successMessage,
              }}
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
