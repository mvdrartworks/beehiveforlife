import type { MetadataRoute } from "next";
import { getCourseSlugs } from "@/lib/content";

const SITE_URL = "https://beehiveforlife.com";

// Static routes, highest priority first. Kept in sync with src/app by hand.
const STATIC_ROUTES: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/membership", priority: 0.9, changeFrequency: "weekly" },
  { path: "/courses", priority: 0.9, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/community", priority: 0.7, changeFrequency: "weekly" },
  { path: "/events", priority: 0.7, changeFrequency: "weekly" },
  { path: "/gallery", priority: 0.7, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const courses = await getCourseSlugs();

  return [
    ...STATIC_ROUTES.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...courses.map((course) => ({
      url: `${SITE_URL}/courses/${course.slug}`,
      lastModified: course._updatedAt ? new Date(course._updatedAt) : undefined,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
