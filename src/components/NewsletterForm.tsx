"use client";

import Link from "next/link";
import { useId } from "react";
import { useFormState, useFormStatus } from "react-dom";
import {
  subscribeToNewsletter,
  type NewsletterState,
} from "@/app/newsletter/actions";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="px-5 py-3 bg-terracotta text-cream text-sm font-medium rounded-md hover:bg-deep transition-colors disabled:opacity-60"
    >
      {pending ? "Joining..." : "Join the hive"}
    </button>
  );
}

export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const id = useId();
  const [state, formAction] = useFormState<NewsletterState, FormData>(
    subscribeToNewsletter,
    { status: "idle" },
  );
  const align = compact ? "" : "md:text-right";

  if (state.status === "subscribed") {
    return (
      <p className={`text-sm text-terracotta ${align}`}>
        Thank you. You are on the list.
      </p>
    );
  }

  return (
    <form action={formAction} className="relative">
      <div
        className={`flex gap-2 ${compact ? "" : "md:justify-end"} flex-col sm:flex-row`}
      >
        <label htmlFor={`${id}-email`} className="sr-only">
          Email address
        </label>
        <input
          key={state.email ?? ""}
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="your@email.com"
          defaultValue={state.email}
          className="flex-1 sm:w-72 px-4 py-3 bg-card border border-honey/30 rounded-md text-sm placeholder:text-charcoal-muted focus:border-honey outline-none transition-colors"
        />
        <Submit />
      </div>
      {/* Honeypot: hidden from people, filled in by bots. */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden"
      >
        <label htmlFor={`${id}-company`}>Company</label>
        <input
          id={`${id}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      {state.status === "error" && state.error && (
        <p role="alert" className={`mt-2 text-sm text-terracotta ${align}`}>
          {state.error}
        </p>
      )}
      <p className={`mt-3 text-xs text-charcoal-muted leading-relaxed ${align}`}>
        We&apos;ll only use your e-mail to send you the Beehive for Life
        newsletter. Unsubscribe anytime.{" "}
        <Link href="/privacy" className="text-terracotta link-underline">
          Privacy policy
        </Link>
      </p>
    </form>
  );
}
