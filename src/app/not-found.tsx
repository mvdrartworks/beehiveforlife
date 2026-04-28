import Link from "next/link";
import Section from "@/components/Section";

export default function NotFound() {
  return (
    <Section bg="warm">
      <div className="max-w-2xl">
        <p className="wordmark text-xs text-terracotta">404</p>
        <h1 className="mt-3 font-serif text-5xl md:text-6xl text-deep leading-[1.05]">
          That page is not in the hive.
        </h1>
        <p className="mt-6 text-charcoal leading-relaxed">
          The page you tried to reach has not been built, or no longer lives
          at this address. Try the{" "}
          <Link href="/" className="text-terracotta link-underline">
            home page
          </Link>{" "}
          or browse{" "}
          <Link href="/membership" className="text-terracotta link-underline">
            membership
          </Link>
          .
        </p>
      </div>
    </Section>
  );
}
