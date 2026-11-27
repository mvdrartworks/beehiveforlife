import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Legal notice",
  description: "Legal notice for Beehive for Life.",
};

export const revalidate = 60;

export default function LegalNoticePage() {
  return (
    <LegalPage
      type="beehiveLegalNoticePage"
      title="Legal notice (Mentions légales)"
      placeholder="The legal notice, with the publisher and hosting details of this site, will be published before launch."
    />
  );
}
