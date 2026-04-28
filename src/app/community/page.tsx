import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Studio exchanges, meetups, critique circles, and a global network of artists. Coming soon to Beehive for Life.",
};

export default function CommunityPage() {
  return (
    <ComingSoon
      title="The community space."
      intro="Studio exchanges, local meetups, critique circles, and a global directory of working artists. We are designing a community that feels like a working studio, not a social feed."
    />
  );
}
