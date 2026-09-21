import { NextResponse } from "next/server";
import { JSDOM } from "jsdom";
import createDOMPurify from "dompurify";

import { EnquirySchema } from "@/lib/enquiry";
import { rateLimit, pruneRateLimitStore } from "@/lib/rate-limit";

// This route touches Node-only APIs (jsdom), so force the Node.js runtime.
export const runtime = "nodejs";

// Server-side DOMPurify instance backed by a jsdom window.
const { window } = new JSDOM("");
const DOMPurify = createDOMPurify(window);

/** Strip any HTML/script content from a user-supplied string. */
function sanitize(value: string): string {
  return DOMPurify.sanitize(value, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  }).trim();
}

/** Best-effort client IP extraction for rate-limiting. */
function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export async function POST(request: Request): Promise<NextResponse> {
  pruneRateLimitStore();

  const ip = getClientIp(request);
  const limited = rateLimit(`enquiry:${ip}`, { limit: 5, windowMs: 60_000 });

  if (!limited.success) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      {
        status: 429,
        headers: {
          "Retry-After": Math.ceil(
            (limited.resetAt - Date.now()) / 1000,
          ).toString(),
        },
      },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = EnquirySchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Honeypot: a filled "website" field indicates a bot. Respond with success
  // to avoid signalling the trap, but do not process the submission.
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  // Sanitize every free-text field server-side before any processing.
  const clean = {
    name: sanitize(data.name),
    phone: sanitize(data.phone),
    program: data.program,
    message: data.message ? sanitize(data.message) : "",
  };

  // TODO: Persist the enquiry (database) and/or send an email notification to
  // the admissions team. For now the submission is logged to the server.
  console.log("[enquiry] New submission:", clean);

  return NextResponse.json({ ok: true });
}
