"use client";

import { useState } from "react";

export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    // ConvertKit/Kit integration to be wired later
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
    setEmail("");
  }

  if (status === "success") {
    return (
      <p className={`text-sm text-terracotta ${compact ? "" : "md:text-right"}`}>
        Thank you. You are on the list.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex gap-2 ${compact ? "" : "md:justify-end"} flex-col sm:flex-row`}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        autoComplete="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 sm:w-72 px-4 py-3 bg-card border border-honey/30 rounded-md text-sm placeholder:text-charcoal-muted focus:border-honey outline-none transition-colors"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="px-5 py-3 bg-terracotta text-cream text-sm font-medium rounded-md hover:bg-deep transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Joining..." : "Join the hive"}
      </button>
    </form>
  );
}
