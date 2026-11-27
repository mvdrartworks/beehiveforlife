import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for Beehive for Life.",
};

export const revalidate = 60;

export default function PrivacyPage() {
  return (
    <LegalPage
      type="beehivePrivacyPage"
      title="Privacy Policy"
      placeholder="Our full privacy policy will be published before launch. In short, we use Stripe for payments, never store card details on our servers, and only collect what is needed to run the membership and the courses."
    />
  );
}
