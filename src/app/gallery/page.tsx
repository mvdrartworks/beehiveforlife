import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Online member exhibitions, curated by Michèle van de Roer.",
};

export default function GalleryPage() {
  return (
    <ComingSoon
      title="Online member exhibitions."
      intro="Curated by Michèle, refreshed each season. A serious place to show new work and to see what the rest of the hive is making."
    />
  );
}
