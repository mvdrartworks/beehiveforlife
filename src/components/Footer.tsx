import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-honey/20 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <p className="font-serif text-xl text-deep">Beehive for Life</p>
            <p className="mt-2 text-sm text-charcoal-muted leading-relaxed">
              A creative community born at La Ruche, Paris.
            </p>
            <p className="mt-6 text-sm text-charcoal-muted">
              © 2026 Beehive for Life
            </p>
          </div>

          <div className="text-sm text-charcoal-muted leading-relaxed md:text-center">
            <p>Founded by</p>
            <a
              href="https://michelevanderoer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-lg text-terracotta link-underline"
            >
              Michèle van de Roer
            </a>
          </div>

          <div className="md:text-right text-sm">
            <a
              href="https://instagram.com/dateforart"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline hover:text-terracotta"
            >
              Instagram @dateforart
            </a>
            <p className="mt-2">
              <a
                href="mailto:hello@beehiveforlife.com"
                className="link-underline hover:text-terracotta"
              >
                hello@beehiveforlife.com
              </a>
            </p>
          </div>
        </div>

        <div className="honey-divider my-12" />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-serif text-2xl text-deep">Join the hive</h3>
            <p className="mt-2 text-sm text-charcoal-muted leading-relaxed max-w-md">
              Get updates, inspiration, and early access to new courses and events.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className="honey-divider my-12" />

        <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-between text-xs text-charcoal-muted">
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-terracotta">Privacy</Link>
            <Link href="/terms" className="hover:text-terracotta">Terms</Link>
            <Link href="/faq" className="hover:text-terracotta">FAQ</Link>
          </div>
          <p>5% of all revenue supports the Fondation La Ruche-Seydoux.</p>
        </div>
      </div>
    </footer>
  );
}
