import Section from "./Section";
import Reveal from "./Reveal";

// Privacy section for the waiting list and the newsletter, shown on /privacy.
export default function MailingListPrivacy() {
  return (
    <Section bg="warm" id="mailing-lists" className="!pt-0">
      <div className="max-w-3xl">
        <Reveal>
          <div className="rounded-2xl border border-honey/20 bg-card p-6 sm:p-8 shadow-card">
            <h2 className="font-serif text-3xl text-deep leading-snug">
              Waiting list and newsletter
            </h2>
            <dl className="mt-6 space-y-5 text-charcoal leading-relaxed">
              <div>
                <dt className="font-medium text-deep">Who collects your data</dt>
                <dd className="mt-1">
                  Michèle van de Roer, the artist behind Beehive for Life.
                  Contact:{" "}
                  <a
                    href="mailto:hello@beehiveforlife.com"
                    className="text-terracotta link-underline"
                  >
                    hello@beehiveforlife.com
                  </a>
                  .
                </dd>
              </div>
              <div>
                <dt className="font-medium text-deep">What and why</dt>
                <dd className="mt-1">
                  Your e-mail address, and your first name if you give it. With
                  your consent, we use it only to tell you when the classes
                  open and invite you to the free live intro (waiting list), or
                  to send you the newsletter. We never sell it.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-deep">Where it is stored</dt>
                <dd className="mt-1">
                  With Brevo, a French company that sends our e-mails for us.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-deep">How long</dt>
                <dd className="mt-1">Until you unsubscribe.</dd>
              </div>
              <div>
                <dt className="font-medium text-deep">Your rights</dt>
                <dd className="mt-1">
                  You can unsubscribe at any time with the link in every
                  e-mail, and ask us to show you or delete your data by
                  writing to hello@beehiveforlife.com. If you think we have
                  misused it, you can complain to the CNIL, the French data
                  protection authority (
                  <a
                    href="https://www.cnil.fr"
                    className="text-terracotta link-underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    cnil.fr
                  </a>
                  ).
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
