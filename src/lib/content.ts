import { sanityFetch } from "./sanity";
import { MEMBERSHIP_TIERS, type MembershipTier } from "./membership";

export type CourseModule = {
  n: string;
  title: string;
  body: string;
};

export type CourseDiscount = {
  tier: string;
  value: string;
};

export type Course = {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  duration: string;
  format: string;
  foundingPrice: number;
  originalPrice: number;
  currency: string;
  memberDiscountSummary: string;
  modules: CourseModule[];
  formatDetails: string[];
  memberDiscounts: CourseDiscount[];
  privateSessionsPrice: number;
  privateSessionsDescription: string;
  laRucheNote: string;
  enrollFootnote: string;
  contactEmail: string;
};

export type Faq = {
  question: string;
  answer: string;
  category: string;
  order: number;
};

export type Membership = {
  tiers: MembershipTier[];
};

export const FALLBACK_COURSE_30_DAYS: Course = {
  slug: "30-days-of-light",
  title: "30 Days of Light",
  subtitle: "A Healing Painting Journey from La Ruche, Paris",
  tagline: "6 weeks. 3 modules. One transformation.",
  description:
    "These aren’t ordinary painting classes. They take place within the historic studios of La Ruche, where Chagall and Modigliani once worked. Michèle has developed a teaching system that interweaves artistic technique with healing and wellbeing, a method designed not just to teach you how to paint, but to fundamentally improve your life.",
  duration: "6 weeks, 3 modules",
  format: "Video lessons + weekly live Q&A",
  foundingPrice: 447,
  originalPrice: 597,
  currency: "EUR",
  memberDiscountSummary:
    "Seedling 10% · Worker Bee 15% · Queen’s Court included · Golden Hive included",
  modules: [
    { n: "01", title: "Working from Love", body: "Begin with what moves you." },
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
  ],
  formatDetails: [
    "6-week programme",
    "Pre-recorded video lessons filmed at La Ruche",
    "Weekly live Q&A sessions with Michèle",
    "Private community access during the cohort",
    "6 months of video access after enrollment",
    "Available in 10+ languages (AI-assisted translation)",
  ],
  memberDiscounts: [
    { tier: "Seedling", value: "10% off (€402)" },
    { tier: "Worker Bee", value: "15% off (€380)" },
    { tier: "Queen's Court", value: "Included at no extra charge" },
    { tier: "Golden Hive", value: "Included permanently" },
  ],
  privateSessionsPrice: 150,
  privateSessionsDescription:
    "Book a private 30-minute session with Michèle for €150. Available via Calendly during the active 6-week cohort period.",
  laRucheNote:
    "5% of your course fee is donated to the Fondation La Ruche-Seydoux. You are not just investing in yourself, you are helping preserve one of the most important artistic monuments in the world.",
  enrollFootnote: "Founding cohort price €447. Cohorts open quarterly.",
  contactEmail: "hello@beehiveforlife.com",
};

export const FALLBACK_MEMBERSHIP: Membership = {
  tiers: MEMBERSHIP_TIERS,
};

export const FALLBACK_FAQ_GENERAL: Faq[] = [
  {
    question: "What is Beehive for Life?",
    answer:
      "Beehive for Life is a community and course platform born at La Ruche, Paris. It connects artists and art lovers around the world through membership, online exhibitions, mentoring, courses, and gatherings.",
    category: "general",
    order: 1,
  },
  {
    question: "Who is it for?",
    answer:
      "Working artists, art lovers, collectors, students, and anyone who wants a thoughtful, generous community around creative practice.",
    category: "general",
    order: 2,
  },
  {
    question: "Do I need to be an artist?",
    answer:
      "Not at all. Members include painters, printmakers, photographers, sculptors, and people who simply want a serious relationship with art.",
    category: "general",
    order: 3,
  },
  {
    question: "What do I get with my membership?",
    answer:
      "It depends on your tier. All tiers include the newsletter and community access. Higher tiers include studio exchanges, mentoring with Michèle, included courses, and patron benefits.",
    category: "general",
    order: 4,
  },
  {
    question: "How do the courses work?",
    answer:
      "Courses are taught online with pre-recorded video lessons filmed at La Ruche, weekly live Q&A sessions with Michèle, and a private cohort community. Most courses run for 6 weeks. You keep video access for 6 months after enrollment.",
    category: "general",
    order: 5,
  },
  {
    question: "Can I cancel my membership?",
    answer:
      "Yes, monthly memberships can be canceled at any time and you keep access until the end of the current period. Annual memberships are non-refundable but you keep access for the full year.",
    category: "general",
    order: 6,
  },
  {
    question: "What languages are courses available in?",
    answer:
      "Courses are taught in English, with AI-assisted translation into 10+ languages. Live Q&A sessions are held in English.",
    category: "general",
    order: 7,
  },
  {
    question: "How does the 5% La Ruche donation work?",
    answer:
      "5% of every membership and every course fee is donated directly to the Fondation La Ruche-Seydoux, the foundation that maintains La Ruche and supports the artists who live and work there.",
    category: "general",
    order: 8,
  },
  {
    question: "Can I visit La Ruche?",
    answer:
      "La Ruche is a working artist compound and is not open to general public visits. Members at the Queen's Court and Golden Hive tiers receive priority access to occasional studio events and private visits, when scheduling permits.",
    category: "general",
    order: 9,
  },
  {
    question: "How do I contact support?",
    answer:
      "Email hello@beehiveforlife.com and we will reply within two working days.",
    category: "general",
    order: 10,
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "Major credit and debit cards through Stripe. Memberships can be paid monthly or annually.",
    category: "general",
    order: 11,
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use Stripe for all payment processing and never store your card details on our servers. We will publish our full privacy policy before launch.",
    category: "general",
    order: 12,
  },
];

export const FALLBACK_FAQ_MEMBERSHIP: Faq[] = [
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, cancel monthly at any time. Annual memberships are non-refundable but you keep access until the end of your period.",
    category: "membership",
    order: 1,
  },
  {
    question: "Can I upgrade or downgrade?",
    answer:
      "Yes, at any time. Changes take effect on your next billing date.",
    category: "membership",
    order: 2,
  },
  {
    question: "Is this a course platform?",
    answer:
      "Beehive for Life is a community first. Courses are available separately or included in higher tiers.",
    category: "membership",
    order: 3,
  },
  {
    question: "Do I need to be an artist?",
    answer:
      "Not at all. Art lovers, collectors, and anyone curious about creative practice are welcome.",
    category: "membership",
    order: 4,
  },
  {
    question: "What is the 5% La Ruche donation?",
    answer:
      "5% of all membership and course fees go directly to the Fondation La Ruche-Seydoux to help preserve this historic artist compound.",
    category: "membership",
    order: 5,
  },
];

const COURSE_QUERY = `*[_type == "beehiveCourse" && slug.current == $slug][0]{
  "slug": slug.current,
  title,
  subtitle,
  tagline,
  description,
  duration,
  format,
  foundingPrice,
  originalPrice,
  currency,
  memberDiscountSummary,
  modules,
  formatDetails,
  memberDiscounts,
  privateSessionsPrice,
  privateSessionsDescription,
  laRucheNote,
  enrollFootnote,
  contactEmail
}`;

const FEATURED_COURSE_QUERY = `*[_type == "beehiveCourse" && featured == true] | order(order asc, _createdAt asc)[0]{
  "slug": slug.current,
  title,
  subtitle,
  tagline,
  description,
  duration,
  format,
  foundingPrice,
  originalPrice,
  currency,
  memberDiscountSummary,
  modules,
  formatDetails,
  memberDiscounts,
  privateSessionsPrice,
  privateSessionsDescription,
  laRucheNote,
  enrollFootnote,
  contactEmail
}`;

const MEMBERSHIP_QUERY = `*[_type == "beehiveMembership"][0]{
  "tiers": tiers[]{
    slug,
    name,
    emoji,
    monthlyPrice,
    annualPrice,
    tagline,
    features,
    perfectFor,
    highlight
  }
}`;

const FAQ_QUERY = `*[_type == "beehiveFaq" && category == $category] | order(order asc, _createdAt asc){
  question,
  answer,
  category,
  order
}`;

function isCourseValid(c: Course | null | undefined): c is Course {
  return !!c && !!c.title && Array.isArray(c.modules) && c.modules.length > 0;
}

function isMembershipValid(
  m: Membership | null | undefined
): m is Membership {
  return !!m && Array.isArray(m.tiers) && m.tiers.length > 0;
}

export async function getCourse(slug: string): Promise<Course> {
  const fallback =
    slug === FALLBACK_COURSE_30_DAYS.slug ? FALLBACK_COURSE_30_DAYS : null;
  const result = await sanityFetch<Course | null>(
    COURSE_QUERY,
    { slug },
    null
  );
  if (isCourseValid(result)) return result;
  if (fallback) return fallback;
  throw new Error(`No course content for slug: ${slug}`);
}

export async function getFeaturedCourse(): Promise<Course> {
  const result = await sanityFetch<Course | null>(
    FEATURED_COURSE_QUERY,
    {},
    null
  );
  if (isCourseValid(result)) return result;
  return FALLBACK_COURSE_30_DAYS;
}

export async function getMembership(): Promise<Membership> {
  const result = await sanityFetch<Membership | null>(
    MEMBERSHIP_QUERY,
    {},
    null
  );
  if (isMembershipValid(result)) return result;
  return FALLBACK_MEMBERSHIP;
}

export async function getFaqs(category: string): Promise<Faq[]> {
  const fallback =
    category === "membership" ? FALLBACK_FAQ_MEMBERSHIP : FALLBACK_FAQ_GENERAL;
  const result = await sanityFetch<Faq[]>(FAQ_QUERY, { category }, []);
  if (Array.isArray(result) && result.length > 0) return result;
  return fallback;
}
