"use client";

import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { joinWaitlist, type WaitlistState } from "./actions";

type Labels = {
  firstName: string;
  email: string;
  button: string;
  privacyNote: string;
  privacyLink: string;
  success: string;
};

const fieldClass =
  "w-full px-4 py-3 bg-card border border-honey/30 rounded-md text-charcoal placeholder:text-charcoal-muted focus:border-honey outline-none transition-colors";

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full sm:w-auto px-6 py-3 bg-terracotta text-cream text-sm font-medium rounded-md hover:bg-deep transition-colors disabled:opacity-60"
    >
      {pending ? "Joining…" : label}
    </button>
  );
}

export default function WaitlistForm({ labels }: { labels: Labels }) {
  const [state, action] = useFormState<WaitlistState, FormData>(
    joinWaitlist,
    { status: "idle" },
  );

  if (state.status === "joined") {
    return (
      <div
        className="bg-card rounded-2xl p-8 border border-honey/20 shadow-card"
        role="status"
      >
        <p className="font-serif text-2xl text-deep leading-snug">
          {labels.success}
        </p>
      </div>
    );
  }

  return (
    <div>
      <form
        action={action}
        className="bg-card rounded-2xl p-6 sm:p-8 border border-honey/15 shadow-card space-y-5"
      >
        <div>
          <label htmlFor="waitlist-first-name" className="text-sm text-charcoal-muted">
            {labels.firstName}
          </label>
          <input
            id="waitlist-first-name"
            name="firstName"
            autoComplete="given-name"
            maxLength={60}
            defaultValue={state.firstName}
            className={`${fieldClass} mt-2`}
          />
        </div>
        <div>
          <label htmlFor="waitlist-email" className="text-sm text-charcoal-muted">
            {labels.email}
          </label>
          <input
            id="waitlist-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={state.email}
            className={`${fieldClass} mt-2`}
          />
        </div>

        {/* Honeypot: hidden from people, filled in by bots. */}
        <div className="hidden" aria-hidden="true">
          <label>
            Company
            <input name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        {state.status === "error" && state.error && (
          <p className="text-sm text-terracotta" role="alert">
            {state.error}
          </p>
        )}

        <SubmitButton label={labels.button} />
      </form>

      <p className="mt-5 text-sm text-charcoal-muted leading-relaxed">
        {labels.privacyNote}{" "}
        <Link href="/privacy" className="text-terracotta link-underline">
          {labels.privacyLink}
        </Link>
      </p>
    </div>
  );
}
