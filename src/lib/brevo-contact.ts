import { headers } from "next/headers";

// Adds a visitor's address to a Brevo list (Contacts API). Used only by the
// server actions of the waiting list and the newsletter forms ("use server"
// files), so BREVO_API_KEY stays on the server.
// Nothing about the visitor (e-mail, name) is ever logged, and neither is
// the key: only the HTTP status and Brevo's error code.

export type AddResult = "ok" | "not-configured" | "failed";

// A list ID from an env var (Brevo's dashboard shows "#3"; accept that too),
// or the given default.
export function listIdFromEnv(name: string, fallback: number): number {
  const raw = process.env[name]?.trim().replace(/^#/, "");
  const id = Number(raw);
  return raw && Number.isInteger(id) && id > 0 ? id : fallback;
}

export async function addToBrevoList(
  tag: string,
  email: string,
  listId: number,
  firstName?: string,
): Promise<AddResult> {
  const key = process.env.BREVO_API_KEY?.trim();
  if (!key) {
    console.error(`[${tag}] BREVO_API_KEY is not set`);
    return "not-configured";
  }
  try {
    // POST /v3/contacts with updateEnabled: an existing contact is added to
    // the list instead of rejected. 201 = created, 204 = updated.
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": key,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
        ...(firstName ? { attributes: { FIRSTNAME: firstName } } : {}),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    if (res.ok) return "ok";
    // Only the status and Brevo's error code, never the response text (it
    // can repeat the address).
    const code = await res
      .json()
      .then((j: { code?: string }) => j?.code ?? "")
      .catch(() => "");
    console.error(`[${tag}] Brevo did not accept the contact:`, res.status, code);
    return "failed";
  } catch (err) {
    console.error(`[${tag}] Brevo request failed:`, (err as Error).name);
    return "failed";
  }
}

// At most `limit` attempts per visitor (IP) per window, per form, per
// server instance. Records the attempt.
const buckets = new Map<string, number[]>();
export function allowAttempt(
  scope: string,
  limit = 5,
  windowMs = 600_000,
): boolean {
  const ip =
    headers().get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headers().get("x-real-ip")?.trim() ||
    "unknown";
  const key = `${scope}:${ip}`;
  const now = Date.now();
  const recent = (buckets.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) return false;
  recent.push(now);
  buckets.set(key, recent);
  if (buckets.size > 5000) buckets.clear();
  return true;
}

export const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
