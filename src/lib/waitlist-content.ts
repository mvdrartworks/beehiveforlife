import { sanityFetch } from "@/lib/sanity";

// Texts of the waiting list page (/waitlist), edited in the studio under
// Beehive for Life → "Liste d'attente" (beehiveWaitlistPage). Each text
// falls back to the default below when its field is empty. The free live
// intro block only shows when its date is filled in.

export type WaitlistTexts = {
  eyebrow: string;
  heading: string;
  intro: string;
  seoDescription: string;
  firstNameLabel: string;
  emailLabel: string;
  buttonLabel: string;
  privacyNote: string;
  privacyLinkLabel: string;
  successMessage: string;
  liveIntroHeading: string;
};

export type LiveIntro = {
  date: string; // YYYY-MM-DD
  time: string | null; // HH:mm, Paris time
  heading: string;
  text: string | null;
};

export const WAITLIST_DEFAULTS: WaitlistTexts = {
  eyebrow: "Waiting list",
  heading: "Be the first to know.",
  intro:
    "The classes open soon. Leave your e-mail and we'll tell you the moment they do.",
  seoDescription:
    "Join the Beehive for Life waiting list to hear when the classes open.",
  firstNameLabel: "First name (optional)",
  emailLabel: "Email",
  buttonLabel: "Join the waiting list",
  privacyNote:
    "We'll only use your e-mail to tell you when the classes open and to invite you to the free live intro. Unsubscribe anytime.",
  privacyLinkLabel: "Privacy policy",
  successMessage:
    "Thank you. You're on the waiting list. We'll write to you when the classes open.",
  liveIntroHeading: "Free live intro",
};

const QUERY = `*[_type == "beehiveWaitlistPage" && !(_id in path("drafts.**"))][0]{
  ${Object.keys(WAITLIST_DEFAULTS).join(", ")},
  liveIntroDate, liveIntroTime, liveIntroText
}`;

type Raw = Partial<Record<keyof WaitlistTexts, string | null>> & {
  liveIntroDate?: string | null;
  liveIntroTime?: string | null;
  liveIntroText?: string | null;
};

export async function getWaitlistPage(): Promise<{
  texts: WaitlistTexts;
  liveIntro: LiveIntro | null;
}> {
  const raw = await sanityFetch<Raw | null>(QUERY, {}, null);
  const texts = { ...WAITLIST_DEFAULTS };
  for (const key of Object.keys(texts) as (keyof WaitlistTexts)[]) {
    const v = raw?.[key];
    if (typeof v === "string" && v.trim()) texts[key] = v.trim();
  }
  const date = raw?.liveIntroDate?.trim();
  const time = raw?.liveIntroTime?.trim();
  const liveIntro =
    date && /^\d{4}-\d{2}-\d{2}$/.test(date)
      ? {
          date,
          time: time && /^([01]\d|2[0-3]):[0-5]\d$/.test(time) ? time : null,
          heading: texts.liveIntroHeading,
          text: raw?.liveIntroText?.trim() || null,
        }
      : null;
  return { texts, liveIntro };
}

// "Thursday 11 December 2026"
export function formatIntroDate(date: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}
