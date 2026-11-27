"use server";

import {
  EMAIL,
  addToBrevoList,
  allowAttempt,
  listIdFromEnv,
} from "@/lib/brevo-contact";

// Adds a visitor to the Brevo list "Waiting list" (#5, separate from the
// newsletter list). Single opt-in, like the newsletter. BREVO_WAITLIST_LIST_ID
// can override the list. Nothing about the visitor is ever logged.

export type WaitlistState = {
  status: "idle" | "joined" | "error";
  email?: string;
  firstName?: string;
  error?: string;
};

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const email = String(formData.get("email") ?? "").trim();
  const firstName = String(formData.get("firstName") ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 60);
  if (String(formData.get("company") ?? "").trim())
    return { status: "joined" }; // honeypot: pretend, send nothing
  const fail = (error: string): WaitlistState => ({
    status: "error",
    email,
    firstName,
    error,
  });
  if (!EMAIL.test(email) || email.length > 254)
    return fail("Please enter a valid email address.");
  if (!allowAttempt("waitlist"))
    return fail("Too many attempts. Please try again later.");

  const result = await addToBrevoList(
    "waitlist",
    email,
    listIdFromEnv("BREVO_WAITLIST_LIST_ID", 5),
    firstName || undefined,
  );
  if (result === "not-configured")
    return fail("Sign-up isn't available right now. Please try again later.");
  if (result === "failed")
    return fail("Sorry, we couldn't add you just now. Please try again later.");
  return { status: "joined" };
}
