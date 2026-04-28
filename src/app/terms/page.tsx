import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of service for Beehive for Life.",
};

export default function TermsPage() {
  return (
    <ComingSoon
      kicker="Legal"
      title="Terms of service."
      intro="The full terms will be published before launch. They will cover membership cancellation, course access, refunds, and the usual housekeeping that lawyers like to see."
    />
  );
}
