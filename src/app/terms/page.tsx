import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of sale for Beehive for Life.",
};

export const revalidate = 60;

export default function TermsPage() {
  return (
    <LegalPage
      type="beehiveTermsPage"
      title="Terms of Sale"
      placeholder="The full terms will be published before launch. They will cover membership cancellation, course access, refunds, and the usual housekeeping that lawyers like to see."
    />
  );
}
