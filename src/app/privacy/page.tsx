import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for Beehive for Life.",
};

export default function PrivacyPage() {
  return (
    <ComingSoon
      kicker="Legal"
      title="Privacy policy."
      intro="Our full privacy policy will be published before launch. In short, we use Stripe for payments, never store card details on our servers, and only collect what is needed to run the membership and the courses."
    />
  );
}
