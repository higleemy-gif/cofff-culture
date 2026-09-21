# Git workflow (standing instruction)

The user wants every change pushed to GitHub automatically. Do not wait to be
asked to commit or push.

After making any code or content change:

1. Verify it works: run `npx tsc --noEmit` and `npx next build` (this is a static
   export project deployed to Cloudflare Pages; the build must stay green).
2. Stage the specific files that were changed.
3. Commit with a clear, concise message describing the change.
4. Push to `origin main`.
5. Confirm local `HEAD` matches `origin/main`.

Rules:
- Push to `main` (production branch; Cloudflare Pages redeploys from it).
- Never force push, never rewrite history, never modify git config.
- Do not commit the `out/` or `.next/` build directories (already gitignored).
- Never write secrets/tokens into tracked files or the stored remote URL.
- If a push is rejected because the remote is ahead, fetch and rebase (no force),
  resolve conflicts, rebuild, then push.
