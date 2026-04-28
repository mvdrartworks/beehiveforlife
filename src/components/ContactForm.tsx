"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    (e.target as HTMLFormElement).reset();
  }

  if (status === "success") {
    return (
      <div className="bg-card rounded-2xl p-8 border border-honey/20 shadow-card">
        <p className="font-serif text-2xl text-deep">Thank you.</p>
        <p className="mt-3 text-charcoal-muted leading-relaxed">
          Your note arrived in the hive. We will reply within two working
          days.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full px-4 py-3 bg-card border border-honey/30 rounded-md text-charcoal placeholder:text-charcoal-muted focus:border-honey outline-none transition-colors";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card rounded-2xl p-8 border border-honey/15 shadow-card space-y-5"
    >
      <div>
        <label htmlFor="name" className="text-sm text-charcoal-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className={`${fieldClass} mt-2`}
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm text-charcoal-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={`${fieldClass} mt-2`}
        />
      </div>
      <div>
        <label htmlFor="subject" className="text-sm text-charcoal-muted">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          required
          className={`${fieldClass} mt-2`}
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm text-charcoal-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${fieldClass} mt-2 resize-y`}
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="px-6 py-3 bg-terracotta text-cream rounded-md hover:bg-deep transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
