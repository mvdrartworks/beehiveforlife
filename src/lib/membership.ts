export type MembershipTier = {
  slug: string;
  name: string;
  emoji: string;
  monthlyPrice: number;
  annualPrice: number;
  tagline: string;
  features: string[];
  perfectFor: string;
  highlight?: boolean;
};

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
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
  },
  {
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
    perfectFor: "Active artists, travelers, people building their practice",
    highlight: true,
  },
  {
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
  },
  {
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
  },
];
