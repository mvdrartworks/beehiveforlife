import Link from "next/link";
import { getSiteSettings } from "@/lib/content";

// Sits above the sticky nav in normal flow, so it scrolls away with the page
// instead of permanently occupying vertical space on mobile.
export default async function AnnouncementBanner() {
  const { bannerEnabled, bannerText, bannerLinkText, bannerLinkUrl } =
    await getSiteSettings();

  if (!bannerEnabled || !bannerText?.trim()) return null;

  const hasLink = !!bannerLinkText?.trim() && !!bannerLinkUrl?.trim();
  const isInternal = bannerLinkUrl?.startsWith("/");

  const linkClass =
    "underline underline-offset-4 decoration-honey/60 hover:decoration-terracotta hover:text-terracotta transition-colors";

  return (
    <div className="w-full bg-honey/20 border-b border-honey/30 text-deep">
      <p className="mx-auto max-w-7xl px-6 lg:px-10 py-2.5 text-center text-sm leading-relaxed">
        {bannerText}
        {hasLink && (
          <>
            {" "}
            {isInternal ? (
              <Link href={bannerLinkUrl!} className={linkClass}>
                {bannerLinkText}
              </Link>
            ) : (
              <a
                href={bannerLinkUrl!}
                className={linkClass}
                {...(bannerLinkUrl!.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {bannerLinkText}
              </a>
            )}
          </>
        )}
      </p>
    </div>
  );
}
