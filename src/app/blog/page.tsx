import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes from the hive.",
};

export default function BlogPage() {
  return (
    <ComingSoon
      title="Notes from the hive."
      intro="Long letters from La Ruche, member stories, technical notes, and the occasional studio diary. The first letter is being written."
    />
  );
}
