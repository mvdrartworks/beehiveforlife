import { sanityFetch } from "./sanity";
import { MEMBERSHIP_TIERS, type MembershipTier } from "./membership";

export type SanityImage = {
  _type?: string;
  asset?: { _ref?: string; _type?: string };
  alt?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
};

export type CourseLesson = {
  title: string;
  description?: string;
  videoUrl?: string;
  duration?: string;
  order?: number;
  isFree?: boolean;
};

export type CourseModule = {
  title: string;
  description?: string;
  order?: number;
  lessons?: CourseLesson[];
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
  heroImage?: SanityImage;
  introVideoUrl?: string;
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
    {
      title: "Working from Love",
      description: "Begin with what moves you.",
      order: 1,
      lessons: [
        {
          title: "Lesson 1: Finding your starting point",
          description:
            "Identify the subjects, colors, and gestures that already pull you. The painting starts here.",
          duration: "15 min",
          order: 1,
          isFree: true,
        },
        {
          title: "Lesson 2: A palette of love",
          description:
            "Build a working palette from the colors that recur in the things you love.",
          duration: "20 min",
          order: 2,
          isFree: false,
        },
        {
          title: "Lesson 3: Brushwork and tenderness",
          description:
            "Loosen the hand. The mark of love is rarely tight.",
          duration: "18 min",
          order: 3,
          isFree: false,
        },
      ],
    },
    {
      title: "Working from Dislike",
      description: "Transform resistance into creative fuel.",
      order: 2,
      lessons: [
        {
          title: "Lesson 1: Naming what you resist",
          description:
            "Make a list. The things you can't bear to paint are the things that change you.",
          duration: "12 min",
          order: 1,
          isFree: true,
        },
        {
          title: "Lesson 2: Painting the discomfort",
          description:
            "Stay on the canvas. We work with the discomfort, not around it.",
          duration: "22 min",
          order: 2,
          isFree: false,
        },
        {
          title: "Lesson 3: The transformation moment",
          description:
            "Recognise the pivot when resistance turns into a new image.",
          duration: "20 min",
          order: 3,
          isFree: false,
        },
      ],
    },
    {
      title: "Self-Portrait Journey",
      description: "Meet yourself on the canvas.",
      order: 3,
      lessons: [
        {
          title: "Lesson 1: Looking in the mirror",
          description:
            "First sittings. We are not after likeness, we are after presence.",
          duration: "16 min",
          order: 1,
          isFree: true,
        },
        {
          title: "Lesson 2: First marks",
          description:
            "Begin the self-portrait. Permission to be wrong is part of the lesson.",
          duration: "24 min",
          order: 2,
          isFree: false,
        },
        {
          title: "Lesson 3: Layers of the self",
          description:
            "Building a portrait that holds the contradictions.",
          duration: "26 min",
          order: 3,
          isFree: false,
        },
      ],
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
  heroImage,
  introVideoUrl,
  description,
  duration,
  format,
  foundingPrice,
  originalPrice,
  currency,
  memberDiscountSummary,
  modules[]{
    title,
    description,
    order,
    lessons[]{
      title,
      description,
      videoUrl,
      duration,
      order,
      isFree
    }
  },
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
  heroImage,
  introVideoUrl,
  description,
  duration,
  format,
  foundingPrice,
  originalPrice,
  currency,
  memberDiscountSummary,
  modules[]{
    title,
    description,
    order,
    lessons[]{
      title,
      description,
      videoUrl,
      duration,
      order,
      isFree
    }
  },
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

// ---------------------------------------------------------------------------
// Homepage / About page / Testimonials
// ---------------------------------------------------------------------------

export type PortableTextSpan = {
  _type: "span";
  _key?: string;
  text: string;
  marks?: string[];
};

export type PortableTextBlock = {
  _type: "block";
  _key?: string;
  style?: string;
  children: PortableTextSpan[];
  markDefs?: unknown[];
};

export type HomepagePillar = {
  title: string;
  description: string;
  icon?: string;
};

export type Homepage = {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage?: SanityImage;
  heroVideoUrl?: string;
  whatIsTitle: string;
  whatIsDescription: PortableTextBlock[];
  founderQuote: string;
  founderImage?: SanityImage;
  founderBio: PortableTextBlock[];
  pillars: HomepagePillar[];
  larucheTitle: string;
  larucheDescription: PortableTextBlock[];
  larucheDonationNote: string;
  newsletterTitle: string;
  newsletterDescription: string;
};

export type AboutPage = {
  heroEyebrow: string;
  heroTitle: string;
  storyEyebrow: string;
  storyTitle: string;
  storyImage?: SanityImage;
  storyBody: PortableTextBlock[];
  founderEyebrow: string;
  founderTitle: string;
  founderImage?: SanityImage;
  founderBio: PortableTextBlock[];
  founderLinkLabel: string;
  founderLinkUrl: string;
  larucheEyebrow: string;
  larucheTitle: string;
  larucheBody: PortableTextBlock[];
  larucheLinkLabel: string;
  larucheLinkUrl: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  featured?: boolean;
  order?: number;
};

function block(text: string, key: string): PortableTextBlock {
  return {
    _type: "block",
    _key: `b-${key}`,
    style: "normal",
    children: [{ _type: "span", _key: `s-${key}`, text }],
    markDefs: [],
  };
}

function paragraphsToPortableText(paragraphs: string[]): PortableTextBlock[] {
  return paragraphs.map((p, i) => block(p, String(i)));
}

export const FALLBACK_HOMEPAGE: Homepage = {
  heroTitle: "Beehive for Life",
  heroSubtitle: "A Creative Community Born at La Ruche",
  heroDescription:
    "Join artists and art lovers from around the world. Learn, connect, create.",
  heroImage: undefined,
  heroVideoUrl: undefined,
  whatIsTitle: "A community for artists and art lovers, born at La Ruche.",
  whatIsDescription: paragraphsToPortableText([
    "Art is more powerful when shared. Beehive for Life was born from the same spirit that has animated La Ruche for over 120 years, the belief that artists need each other.",
  ]),
  founderQuote: "Michèle van de Roer, founder",
  founderImage: undefined,
  founderBio: paragraphsToPortableText([
    "Michèle van de Roer is a Dutch-born, Paris-based multimedia artist working from La Ruche. Her work is held in the Rodin Museum, the Bibliothèque Nationale de France, and private collections worldwide. She is represented by Galerie Paul Prouté (Paris) and Galerie Mourlot (New York).",
  ]),
  pillars: [
    {
      title: "Community",
      description:
        "Connect with artists worldwide. Studio exchanges, meetups, critique circles, and a global network of creative practitioners.",
      icon: "🐝",
    },
    {
      title: "Learn",
      description:
        "Courses taught from La Ruche by Michèle van de Roer. Technique meets healing. Art as transformation.",
      icon: "🎨",
    },
    {
      title: "Experience",
      description:
        "Curated exhibitions, gallery walks, artist interviews, and behind-the-scenes access to one of the world's most historic art studios.",
      icon: "🏛",
    },
  ],
  larucheTitle: "Born at La Ruche, the Beehive of Paris.",
  larucheDescription: paragraphsToPortableText([
    "La Ruche has been home to Chagall, Modigliani, Rivera, and generations of artists since 1902. Beehive for Life carries that legacy into the digital age.",
  ]),
  larucheDonationNote:
    "5% of all membership and course fees are donated to the Fondation La Ruche-Seydoux to help preserve this irreplaceable monument.",
  newsletterTitle: "Join the hive",
  newsletterDescription:
    "Get updates, inspiration, and early access to new courses and events.",
};

export const FALLBACK_ABOUT_PAGE: AboutPage = {
  heroEyebrow: "About",
  heroTitle: "The hive, the founder, the place.",
  storyEyebrow: "About Beehive for Life",
  storyTitle: "A community born from a vision over a century old.",
  storyImage: undefined,
  storyBody: paragraphsToPortableText([
    "In 1902, the sculptor Alfred Boucher bought a parcel of land in the south of Paris and built a curious round building from the leftovers of the World’s Fair. He called it La Ruche, the Beehive. His idea was simple and radical: give artists a place to live and work side by side, so that none of them would ever have to make art alone.",
    "Beehive for Life carries that idea into the digital age. Studios are wonderful, but a working artist’s life is global now. The hive can stretch across oceans. What matters is the same thing Boucher believed in over a hundred years ago: artistic solidarity, generosity, and the conviction that art is more powerful when shared.",
    "Michèle van de Roer founded Beehive for Life from inside La Ruche itself. The community is the practice. The hive is the studio.",
  ]),
  founderEyebrow: "About the founder",
  founderTitle: "Michèle van de Roer",
  founderImage: undefined,
  founderBio: paragraphsToPortableText([
    "Dutch-born, Paris-based, Michèle van de Roer is a multimedia artist working from La Ruche. Her practice moves between painting, drawing, and printmaking, and her teaching weaves technique together with healing and wellbeing.",
    "She has held a Fulbright Fellowship. Her work is collected by the Musée Rodin and the Bibliothèque Nationale de France, and held in private collections worldwide. She is represented by Galerie Paul Prouté in Paris and Galerie Mourlot in New York.",
  ]),
  founderLinkLabel: "Explore Michèle’s artwork",
  founderLinkUrl: "https://michelevanderoer.com",
  larucheEyebrow: "About La Ruche",
  larucheTitle: "The Beehive of Paris.",
  larucheBody: paragraphsToPortableText([
    "For over 120 years La Ruche has sheltered artists. Chagall, Modigliani, Soutine, Brancusi, Léger, Rivera, Zadkine and generations after them passed through its narrow staircase and circular studios. The building still stands. Artists still work there. The light still falls the way it did in 1910.",
    "Beehive for Life ensures its spirit reaches the world. 5% of every membership and every course goes to the Fondation La Ruche-Seydoux to help preserve the building and the residencies it makes possible.",
  ]),
  larucheLinkLabel: "Read the full La Ruche story",
  larucheLinkUrl: "https://michelevanderoer.com/la-ruche",
};

export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "A real community. The studio exchange brought me to Lisbon, and a Lisbon painter to my studio in Berlin.",
    name: "Member testimonial",
    role: "Worker Bee member",
    featured: true,
    order: 1,
  },
  {
    quote:
      "The course was the most generous teaching I have ever received. Michèle's voice is in the room.",
    name: "Member testimonial",
    role: "30 Days of Light graduate",
    featured: true,
    order: 2,
  },
  {
    quote:
      "I joined to support La Ruche. I stayed for the people I met inside the hive.",
    name: "Member testimonial",
    role: "Golden Hive patron",
    featured: true,
    order: 3,
  },
];

const HOMEPAGE_QUERY = `*[_type == "beehiveHomepage"][0]{
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroImage,
  heroVideoUrl,
  whatIsTitle,
  whatIsDescription,
  founderQuote,
  founderImage,
  founderBio,
  pillars[]{ title, description, icon },
  larucheTitle,
  larucheDescription,
  larucheDonationNote,
  newsletterTitle,
  newsletterDescription
}`;

const ABOUT_PAGE_QUERY = `*[_type == "beehiveAboutPage"][0]{
  heroEyebrow,
  heroTitle,
  storyEyebrow,
  storyTitle,
  storyImage,
  storyBody,
  founderEyebrow,
  founderTitle,
  founderImage,
  founderBio,
  founderLinkLabel,
  founderLinkUrl,
  larucheEyebrow,
  larucheTitle,
  larucheBody,
  larucheLinkLabel,
  larucheLinkUrl
}`;

const TESTIMONIALS_QUERY = `*[_type == "beehiveTestimonial" && featured == true] | order(order asc, _createdAt asc){
  quote,
  name,
  role,
  featured,
  order
}`;

function isHomepageValid(h: Homepage | null | undefined): h is Homepage {
  return !!h && !!h.heroTitle;
}

function isAboutValid(a: AboutPage | null | undefined): a is AboutPage {
  return !!a && !!a.heroTitle;
}

export async function getHomepage(): Promise<Homepage> {
  const result = await sanityFetch<Homepage | null>(HOMEPAGE_QUERY, {}, null);
  if (isHomepageValid(result)) {
    return {
      ...FALLBACK_HOMEPAGE,
      ...result,
      pillars:
        Array.isArray(result.pillars) && result.pillars.length > 0
          ? result.pillars
          : FALLBACK_HOMEPAGE.pillars,
      whatIsDescription:
        Array.isArray(result.whatIsDescription) &&
        result.whatIsDescription.length > 0
          ? result.whatIsDescription
          : FALLBACK_HOMEPAGE.whatIsDescription,
      founderBio:
        Array.isArray(result.founderBio) && result.founderBio.length > 0
          ? result.founderBio
          : FALLBACK_HOMEPAGE.founderBio,
      larucheDescription:
        Array.isArray(result.larucheDescription) &&
        result.larucheDescription.length > 0
          ? result.larucheDescription
          : FALLBACK_HOMEPAGE.larucheDescription,
    };
  }
  return FALLBACK_HOMEPAGE;
}

export async function getAboutPage(): Promise<AboutPage> {
  const result = await sanityFetch<AboutPage | null>(
    ABOUT_PAGE_QUERY,
    {},
    null
  );
  if (isAboutValid(result)) {
    return {
      ...FALLBACK_ABOUT_PAGE,
      ...result,
      storyBody:
        Array.isArray(result.storyBody) && result.storyBody.length > 0
          ? result.storyBody
          : FALLBACK_ABOUT_PAGE.storyBody,
      founderBio:
        Array.isArray(result.founderBio) && result.founderBio.length > 0
          ? result.founderBio
          : FALLBACK_ABOUT_PAGE.founderBio,
      larucheBody:
        Array.isArray(result.larucheBody) && result.larucheBody.length > 0
          ? result.larucheBody
          : FALLBACK_ABOUT_PAGE.larucheBody,
    };
  }
  return FALLBACK_ABOUT_PAGE;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const result = await sanityFetch<Testimonial[]>(
    TESTIMONIALS_QUERY,
    {},
    []
  );
  if (Array.isArray(result) && result.length > 0) return result;
  return FALLBACK_TESTIMONIALS;
}
