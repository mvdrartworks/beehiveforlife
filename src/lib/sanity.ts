import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "yil2jsxm";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (src: unknown) => builder.image(src as never);

export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  fallback: T
): Promise<T> {
  try {
    return await sanityClient.fetch<T>(query, params);
  } catch (err) {
    console.warn("[sanityFetch] falling back:", err);
    return fallback;
  }
}
