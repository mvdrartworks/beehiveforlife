"use server";

import { headers } from "next/headers";

// Adds a visitor to the Brevo list "Waiting list" (separate from the
// newsletter list). Single opt-in, like the newsletter. BREVO_API_KEY stays
// on the server. Nothing about the visitor (e-mail, name) is ever logged.

export type WaitlistState = {
  status: "idle" | "joined" | "error";
  email?: string;
  firstName?: string;
  error?: string;
};

// Brevo list "Waiting list" (#5). Not a secret; BREVO_WAITLIST_LIST_ID can
// override it.
const DEFAULT_LIST_ID = 5;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function listId(): number {
  const raw = process.env.BREVO_WAITLIST_LIST_ID?.trim().replace(/^#/, "");
  const id = Number(raw);
  return raw && Number.isInteger(id) && id > 0 ? id : DEFAULT_LIST_ID;
}

// At most 5 sign-up attempts per visitor (IP) per 10 minutes, per server
// instance.
const attempts = new Map<string, number[]>();
function allow(ip: string): boolean {
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter((t) => now - t < 600_000);
  if (recent.length >= 5) return false;
  recent.push(now);
  attempts.set(ip, recent);
  if (attempts.size > 5000) attempts.clear();
  return true;
}

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
  if (!EMAIL.test(email) || email.length > 254) {
    return {
      status: "error",
      email,
      firstName,
      error: "Please enter a valid email address.",
    };
  }
  const ip =
    headers().get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!allow(ip)) {
    return {
      status: "error",
      email,
      firstName,
      error: "Too many attempts. Please try again later.",
    };
  }

  const key = process.env.BREVO_API_KEY?.trim();
  if (!key) {
    console.error("[waitlist] BREVO_API_KEY is not set");
    return {
      status: "error",
      email,
      firstName,
      error: "Sign-up isn't available right now. Please try again later.",
    };
  }

  try {
    // POST /v3/contacts with updateEnabled: an existing contact is added
    // to the list instead of rejected. 201 = created, 204 = updated.
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": key,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [listId()],
        updateEnabled: true,
        ...(firstName ? { attributes: { FIRSTNAME: firstName } } : {}),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      // Only the status and Brevo's error code, never the response text
      // (it can repeat the address).
      const code = await res
        .json()
        .then((j: { code?: string }) => j?.code ?? "")
        .catch(() => "");
      console.error("[waitlist] Brevo did not accept the contact:", res.status, code);
      return {
        status: "error",
        email,
        firstName,
        error: "Sorry, we couldn't add you just now. Please try again later.",
      };
    }
  } catch (err) {
    console.error("[waitlist] Brevo request failed:", (err as Error).name);
    return {
      status: "error",
      email,
      firstName,
      error: "Sorry, we couldn't add you just now. Please try again later.",
    };
  }
  return { status: "joined" };
}
