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
];
