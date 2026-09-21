/**
 * Minimal in-memory fixed-window rate limiter.
 *
 * This is sufficient for a single-instance deployment and local development.
 *
 * TODO: Replace with @upstash/ratelimit + Upstash Redis for distributed,
 * multi-instance deployments (in-memory state does not survive restarts or
 * scale across serverless instances).
 */

type WindowRecord = {
  count: number;
  resetAt: number;
};

const store = new Map<string, WindowRecord>();

export type RateLimitResult = {
  success: boolean;
  remaining: number;
  limit: number;
  resetAt: number;
};

export type RateLimitOptions = {
  /** Maximum number of requests allowed within the window. */
  limit?: number;
  /** Window duration in milliseconds. */
  windowMs?: number;
};

/**
 * Check and record a request for the given identifier (e.g. client IP).
 */
export function rateLimit(
  identifier: string,
  options: RateLimitOptions = {},
): RateLimitResult {
  const limit = options.limit ?? 5;
  const windowMs = options.windowMs ?? 60_000;
  const now = Date.now();

  const existing = store.get(identifier);

  if (!existing || now >= existing.resetAt) {
    const resetAt = now + windowMs;
    store.set(identifier, { count: 1, resetAt });
    return { success: true, remaining: limit - 1, limit, resetAt };
  }

  if (existing.count >= limit) {
    return { success: false, remaining: 0, limit, resetAt: existing.resetAt };
  }

  existing.count += 1;
  store.set(identifier, existing);

  return {
    success: true,
    remaining: limit - existing.count,
    limit,
    resetAt: existing.resetAt,
  };
}

/**
 * Opportunistically clear expired records so the map does not grow unbounded.
 */
export function pruneRateLimitStore(): void {
  const now = Date.now();
  for (const [key, record] of store.entries()) {
    if (now >= record.resetAt) {
      store.delete(key);
    }
  }
}
