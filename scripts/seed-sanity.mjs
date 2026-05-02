#!/usr/bin/env node
// Seed Sanity with Beehive for Life course / membership / FAQ content.
// Reads token from SANITY_API_WRITE_TOKEN env var, .env.local, then ~/.config/sanity/config.json.

import { createClient } from "@sanity/client";
import { readFileSync, existsSync } from "node:fs";
import { homedir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");

function loadEnv() {
  const envPath = join(repoRoot, ".env.local");
  if (!existsSync(envPath)) return;
  const raw = readFileSync(envPath, "utf8");
  for (const line of raw.split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!m) continue;
    const [, key, val] = m;
    if (!process.env[key]) {
      process.env[key] = val.replace(/^["']|["']$/g, "");
    }
  }
}

function loadCliToken() {
  const cliConfig = join(homedir(), ".config", "sanity", "config.json");
  if (!existsSync(cliConfig)) return null;
  try {
    const cfg = JSON.parse(readFileSync(cliConfig, "utf8"));
    return cfg.authToken || null;
  } catch {
    return null;
  }
}

loadEnv();

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "yil2jsxm";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";
const token =
  process.env.SANITY_API_WRITE_TOKEN ||
  process.env.SANITY_API_READ_TOKEN ||
  loadCliToken();

if (!token) {
  console.error(
    "No Sanity token found. Set SANITY_API_WRITE_TOKEN in .env.local or run `sanity login`."
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const COURSE_30_DAYS = {
  _id: "beehiveCourse-30-days-of-light",
  _type: "beehiveCourse",
  title: "30 Days of Light",
  subtitle: "A Healing Painting Journey from La Ruche, Paris",
  slug: { _type: "slug", current: "30-days-of-light" },
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
      _key: "mod-01",
      _type: "module",
      title: "Working from Love",
      description: "Begin with what moves you.",
      order: 1,
      lessons: [
        {
          _key: "lesson-01-01",
          _type: "lesson",
          title: "Lesson 1: Finding your starting point",
          description:
            "Identify the subjects, colors, and gestures that already pull you. The painting starts here.",
          videoUrl: "",
          duration: "15 min",
          order: 1,
          isFree: true,
        },
        {
          _key: "lesson-01-02",
          _type: "lesson",
          title: "Lesson 2: A palette of love",
          description:
            "Build a working palette from the colors that recur in the things you love.",
          videoUrl: "",
          duration: "20 min",
          order: 2,
          isFree: false,
        },
        {
          _key: "lesson-01-03",
          _type: "lesson",
          title: "Lesson 3: Brushwork and tenderness",
          description:
            "Loosen the hand. The mark of love is rarely tight.",
          videoUrl: "",
          duration: "18 min",
          order: 3,
          isFree: false,
        },
      ],
    },
    {
      _key: "mod-02",
      _type: "module",
      title: "Working from Dislike",
      description: "Transform resistance into creative fuel.",
      order: 2,
      lessons: [
        {
          _key: "lesson-02-01",
          _type: "lesson",
          title: "Lesson 1: Naming what you resist",
          description:
            "Make a list. The things you can't bear to paint are the things that change you.",
          videoUrl: "",
          duration: "12 min",
          order: 1,
          isFree: true,
        },
        {
          _key: "lesson-02-02",
          _type: "lesson",
          title: "Lesson 2: Painting the discomfort",
          description:
            "Stay on the canvas. We work with the discomfort, not around it.",
          videoUrl: "",
          duration: "22 min",
          order: 2,
          isFree: false,
        },
        {
          _key: "lesson-02-03",
          _type: "lesson",
          title: "Lesson 3: The transformation moment",
          description:
            "Recognise the pivot when resistance turns into a new image.",
          videoUrl: "",
          duration: "20 min",
          order: 3,
          isFree: false,
        },
      ],
    },
    {
      _key: "mod-03",
      _type: "module",
      title: "Self-Portrait Journey",
      description: "Meet yourself on the canvas.",
      order: 3,
      lessons: [
        {
          _key: "lesson-03-01",
          _type: "lesson",
          title: "Lesson 1: Looking in the mirror",
          description:
            "First sittings. We are not after likeness, we are after presence.",
          videoUrl: "",
          duration: "16 min",
          order: 1,
          isFree: true,
        },
        {
          _key: "lesson-03-02",
          _type: "lesson",
          title: "Lesson 2: First marks",
          description:
            "Begin the self-portrait. Permission to be wrong is part of the lesson.",
          videoUrl: "",
          duration: "24 min",
          order: 2,
          isFree: false,
        },
        {
          _key: "lesson-03-03",
          _type: "lesson",
          title: "Lesson 3: Layers of the self",
          description:
            "Building a portrait that holds the contradictions.",
          videoUrl: "",
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
    {
      _key: "disc-seedling",
      _type: "discount",
      tier: "Seedling",
      value: "10% off (€402)",
    },
    {
      _key: "disc-worker",
      _type: "discount",
      tier: "Worker Bee",
      value: "15% off (€380)",
    },
    {
      _key: "disc-queens",
      _type: "discount",
      tier: "Queen's Court",
      value: "Included at no extra charge",
    },
    {
      _key: "disc-golden",
      _type: "discount",
      tier: "Golden Hive",
      value: "Included permanently",
    },
  ],
  privateSessionsPrice: 150,
  privateSessionsDescription:
    "Book a private 30-minute session with Michèle for €150. Available via Calendly during the active 6-week cohort period.",
  laRucheNote:
    "5% of your course fee is donated to the Fondation La Ruche-Seydoux. You are not just investing in yourself, you are helping preserve one of the most important artistic monuments in the world.",
  enrollFootnote: "Founding cohort price €447. Cohorts open quarterly.",
  contactEmail: "hello@beehiveforlife.com",
  featured: true,
  order: 1,
};

const MEMBERSHIP_DOC = {
  _id: "beehiveMembership",
  _type: "beehiveMembership",
  tiers: [
    {
      _key: "tier-seedling",
      _type: "tier",
      slug: "seedling",
      name: "Seedling",
      emoji: "🌱",
      monthlyPrice: 19,
      annualPrice: 190,
      tagline: "Your first step into the hive",
      features: [
        "Monthly newsletter with artist insights",
        "Access to community discussion forums",
        "Curated exhibition and museum recommendations",
        "10% discount on courses",
      ],
      perfectFor:
        "Art lovers, curious beginners, people who want to stay inspired",
      highlight: false,
    },
    {
      _key: "tier-worker-bee",
      _type: "tier",
      slug: "worker-bee",
      name: "Worker Bee",
      emoji: "🐝",
      monthlyPrice: 45,
      annualPrice: 450,
      tagline: "For the committed creative",
      features: [
        "Everything in Seedling",
        "Global studio exchange network",
        "Local meetup coordination",
        "Online member exhibitions, curated by Michèle",
        "Material guides and artist tool recommendations",
        "15% discount on courses",
      ],
      perfectFor:
        "Active artists, travelers, people building their practice",
      highlight: true,
    },
    {
      _key: "tier-queens-court",
      _type: "tier",
      slug: "queens-court",
      name: "Queen's Court",
      emoji: "👑",
      monthlyPrice: 89,
      annualPrice: 890,
      tagline: "Full access, personal mentoring",
      features: [
        "Everything in Worker Bee",
        "Monthly group mentoring session with Michèle",
        "VIP artist interviews and behind-the-scenes content",
        "One course included per year (e.g. 30 Days of Light)",
        "Priority access to events and workshops",
      ],
      perfectFor:
        "Serious artists, professionals, collectors who want depth",
      highlight: false,
    },
    {
      _key: "tier-golden-hive",
      _type: "tier",
      slug: "golden-hive",
      name: "Golden Hive",
      emoji: "✨",
      monthlyPrice: 195,
      annualPrice: 1950,
      tagline: "The ultimate creative partnership",
      features: [
        "Everything in Queen's Court",
        "Private 1-on-1 sessions with Michèle (2x per year, 30 min each)",
        "Two courses included per year",
        "Name listed as patron supporter",
        "Early access to all new content",
        "Direct communication channel with Michèle",
      ],
      perfectFor:
        "Dedicated patrons, art collectors, those who want the closest relationship",
      highlight: false,
    },
  ],
};

const FAQS_GENERAL = [
  [
    "What is Beehive for Life?",
    "Beehive for Life is a community and course platform born at La Ruche, Paris. It connects artists and art lovers around the world through membership, online exhibitions, mentoring, courses, and gatherings.",
  ],
  [
    "Who is it for?",
    "Working artists, art lovers, collectors, students, and anyone who wants a thoughtful, generous community around creative practice.",
  ],
  [
    "Do I need to be an artist?",
    "Not at all. Members include painters, printmakers, photographers, sculptors, and people who simply want a serious relationship with art.",
  ],
  [
    "What do I get with my membership?",
    "It depends on your tier. All tiers include the newsletter and community access. Higher tiers include studio exchanges, mentoring with Michèle, included courses, and patron benefits.",
  ],
  [
    "How do the courses work?",
    "Courses are taught online with pre-recorded video lessons filmed at La Ruche, weekly live Q&A sessions with Michèle, and a private cohort community. Most courses run for 6 weeks. You keep video access for 6 months after enrollment.",
  ],
  [
    "Can I cancel my membership?",
    "Yes, monthly memberships can be canceled at any time and you keep access until the end of the current period. Annual memberships are non-refundable but you keep access for the full year.",
  ],
  [
    "What languages are courses available in?",
    "Courses are taught in English, with AI-assisted translation into 10+ languages. Live Q&A sessions are held in English.",
  ],
  [
    "How does the 5% La Ruche donation work?",
    "5% of every membership and every course fee is donated directly to the Fondation La Ruche-Seydoux, the foundation that maintains La Ruche and supports the artists who live and work there.",
  ],
  [
    "Can I visit La Ruche?",
    "La Ruche is a working artist compound and is not open to general public visits. Members at the Queen's Court and Golden Hive tiers receive priority access to occasional studio events and private visits, when scheduling permits.",
  ],
  [
    "How do I contact support?",
    "Email hello@beehiveforlife.com and we will reply within two working days.",
  ],
  [
    "What payment methods are accepted?",
    "Major credit and debit cards through Stripe. Memberships can be paid monthly or annually.",
  ],
  [
    "Is my data secure?",
    "Yes. We use Stripe for all payment processing and never store your card details on our servers. We will publish our full privacy policy before launch.",
  ],
];

const FAQS_MEMBERSHIP = [
  [
    "Can I cancel anytime?",
    "Yes, cancel monthly at any time. Annual memberships are non-refundable but you keep access until the end of your period.",
  ],
  [
    "Can I upgrade or downgrade?",
    "Yes, at any time. Changes take effect on your next billing date.",
  ],
  [
    "Is this a course platform?",
    "Beehive for Life is a community first. Courses are available separately or included in higher tiers.",
  ],
  [
    "Do I need to be an artist?",
    "Not at all. Art lovers, collectors, and anyone curious about creative practice are welcome.",
  ],
  [
    "What is the 5% La Ruche donation?",
    "5% of all membership and course fees go directly to the Fondation La Ruche-Seydoux to help preserve this historic artist compound.",
  ],
];

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

function block(text, key) {
  return {
    _key: `b-${key}`,
    _type: "block",
    style: "normal",
    markDefs: [],
    children: [{ _key: `s-${key}`, _type: "span", text, marks: [] }],
  };
}

function paragraphs(arr) {
  return arr.map((t, i) => block(t, String(i)));
}

const HOMEPAGE_DOC = {
  _id: "beehiveHomepage",
  _type: "beehiveHomepage",
  heroTitle: "Beehive for Life",
  heroSubtitle: "A Creative Community Born at La Ruche",
  heroDescription:
    "Join artists and art lovers from around the world. Learn, connect, create.",
  whatIsTitle:
    "A community for artists and art lovers, born at La Ruche.",
  whatIsDescription: paragraphs([
    "Art is more powerful when shared. Beehive for Life was born from the same spirit that has animated La Ruche for over 120 years, the belief that artists need each other.",
  ]),
  founderQuote: "Michèle van de Roer, founder",
  founderBio: paragraphs([
    "Michèle van de Roer is a Dutch-born, Paris-based multimedia artist working from La Ruche. Her work is held in the Rodin Museum, the Bibliothèque Nationale de France, and private collections worldwide. She is represented by Galerie Paul Prouté (Paris) and Galerie Mourlot (New York).",
  ]),
  pillars: [
    {
      _key: "pillar-community",
      _type: "pillar",
      title: "Community",
      description:
        "Connect with artists worldwide. Studio exchanges, meetups, critique circles, and a global network of creative practitioners.",
      icon: "🐝",
    },
    {
      _key: "pillar-learn",
      _type: "pillar",
      title: "Learn",
      description:
        "Courses taught from La Ruche by Michèle van de Roer. Technique meets healing. Art as transformation.",
      icon: "🎨",
    },
    {
      _key: "pillar-experience",
      _type: "pillar",
      title: "Experience",
      description:
        "Curated exhibitions, gallery walks, artist interviews, and behind-the-scenes access to one of the world's most historic art studios.",
      icon: "🏛",
    },
  ],
  larucheTitle: "Born at La Ruche, the Beehive of Paris.",
  larucheDescription: paragraphs([
    "La Ruche has been home to Chagall, Modigliani, Rivera, and generations of artists since 1902. Beehive for Life carries that legacy into the digital age.",
  ]),
  larucheDonationNote:
    "5% of all membership and course fees are donated to the Fondation La Ruche-Seydoux to help preserve this irreplaceable monument.",
  newsletterTitle: "Join the hive",
  newsletterDescription:
    "Get updates, inspiration, and early access to new courses and events.",
};

const ABOUT_PAGE_DOC = {
  _id: "beehiveAboutPage",
  _type: "beehiveAboutPage",
  heroEyebrow: "About",
  heroTitle: "The hive, the founder, the place.",
  storyEyebrow: "About Beehive for Life",
  storyTitle: "A community born from a vision over a century old.",
  storyBody: paragraphs([
    "In 1902, the sculptor Alfred Boucher bought a parcel of land in the south of Paris and built a curious round building from the leftovers of the World’s Fair. He called it La Ruche, the Beehive. His idea was simple and radical: give artists a place to live and work side by side, so that none of them would ever have to make art alone.",
    "Beehive for Life carries that idea into the digital age. Studios are wonderful, but a working artist’s life is global now. The hive can stretch across oceans. What matters is the same thing Boucher believed in over a hundred years ago: artistic solidarity, generosity, and the conviction that art is more powerful when shared.",
    "Michèle van de Roer founded Beehive for Life from inside La Ruche itself. The community is the practice. The hive is the studio.",
  ]),
  founderEyebrow: "About the founder",
  founderTitle: "Michèle van de Roer",
  founderBio: paragraphs([
    "Dutch-born, Paris-based, Michèle van de Roer is a multimedia artist working from La Ruche. Her practice moves between painting, drawing, and printmaking, and her teaching weaves technique together with healing and wellbeing.",
    "She has held a Fulbright Fellowship. Her work is collected by the Musée Rodin and the Bibliothèque Nationale de France, and held in private collections worldwide. She is represented by Galerie Paul Prouté in Paris and Galerie Mourlot in New York.",
  ]),
  founderLinkLabel: "Explore Michèle’s artwork",
  founderLinkUrl: "https://michelevanderoer.com",
  larucheEyebrow: "About La Ruche",
  larucheTitle: "The Beehive of Paris.",
  larucheBody: paragraphs([
    "For over 120 years La Ruche has sheltered artists. Chagall, Modigliani, Soutine, Brancusi, Léger, Rivera, Zadkine and generations after them passed through its narrow staircase and circular studios. The building still stands. Artists still work there. The light still falls the way it did in 1910.",
    "Beehive for Life ensures its spirit reaches the world. 5% of every membership and every course goes to the Fondation La Ruche-Seydoux to help preserve the building and the residencies it makes possible.",
  ]),
  larucheLinkLabel: "Read the full La Ruche story",
  larucheLinkUrl: "https://michelevanderoer.com/la-ruche",
};

const TESTIMONIALS = [
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
];

function buildTestimonialDocs() {
  return TESTIMONIALS.map((t, i) => ({
    _id: `beehiveTestimonial-${slugify(t.role)}-${i + 1}`,
    _type: "beehiveTestimonial",
    quote: t.quote,
    name: t.name,
    role: t.role,
    featured: true,
    order: i + 1,
  }));
}

function buildFaqDocs() {
  const docs = [];
  FAQS_GENERAL.forEach(([q, a], i) => {
    docs.push({
      _id: `beehiveFaq-general-${slugify(q)}`,
      _type: "beehiveFaq",
      question: q,
      answer: a,
      category: "general",
      order: i + 1,
    });
  });
  FAQS_MEMBERSHIP.forEach(([q, a], i) => {
    docs.push({
      _id: `beehiveFaq-membership-${slugify(q)}`,
      _type: "beehiveFaq",
      question: q,
      answer: a,
      category: "membership",
      order: i + 1,
    });
  });
  return docs;
}

async function run() {
  console.log(
    `Seeding Sanity dataset "${dataset}" (project ${projectId})...`
  );

  // Use createIfNotExists everywhere so re-running the seed never overwrites
  // edits the artist has made in Studio (e.g. heroImage, introVideoUrl).
  const tx = client.transaction();
  tx.createIfNotExists(HOMEPAGE_DOC);
  tx.createIfNotExists(ABOUT_PAGE_DOC);
  tx.createIfNotExists(COURSE_30_DAYS);
  tx.createIfNotExists(MEMBERSHIP_DOC);
  for (const doc of buildTestimonialDocs()) {
    tx.createIfNotExists(doc);
  }
  for (const doc of buildFaqDocs()) {
    tx.createIfNotExists(doc);
  }

  const res = await tx.commit();
  console.log(`Committed ${res.results.length} documents.`);
  for (const r of res.results) {
    console.log(`  ${r.operation.padEnd(8)} ${r.id}`);
  }
}

run().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
