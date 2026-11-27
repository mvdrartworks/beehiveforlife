"use server";

import {
  EMAIL,
  addToBrevoList,
  allowAttempt,
  listIdFromEnv,
} from "@/lib/brevo-contact";

// Adds a visitor to the Brevo list "Beehive newsletter" (#3). Single opt-in.
// BREVO_NEWSLETTER_LIST_ID can override the list. Nothing about the visitor
// is ever logged.

export type NewsletterState = {
  status: "idle" | "subscribed" | "error";
  email?: string;
  error?: string;
};

export async function subscribeToNewsletter(
  _prev: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const email = String(formData.get("email") ?? "").trim();
  if (String(formData.get("company") ?? "").trim())
    return { status: "subscribed" }; // honeypot: pretend, send nothing
  const fail = (error: string): NewsletterState => ({
    status: "error",
    email,
    error,
  });
  if (!EMAIL.test(email) || email.length > 254)
    return fail("Please enter a valid email address.");
  if (!allowAttempt("newsletter"))
    return fail("Too many attempts. Please try again later.");

  const result = await addToBrevoList(
    "newsletter",
    email,
    listIdFromEnv("BREVO_NEWSLETTER_LIST_ID", 3),
  );
  if (result === "not-configured")
    return fail("Sign-up isn't available right now. Please try again later.");
  if (result === "failed")
    return fail(
      "Sorry, we couldn't sign you up just now. Please try again later.",
    );
  return { status: "subscribed" };
}
