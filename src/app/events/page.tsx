import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Events",
  description: "Workshops, gallery walks, and gatherings around the world.",
};

export default function EventsPage() {
  return (
    <ComingSoon
      title="Events calendar."
      intro="Workshops at La Ruche, online gatherings, gallery walks in member cities, and the occasional dinner. The first events are being scheduled now."
    />
  );
}
