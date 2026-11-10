# Agent guide — protfolio-me

Read `STATE.md`, `docs/AI_MEMORY.md`, and `docs/ARCHITECTURE.md` before changes. If a graph exists, consult `graphify-out/` when useful. Preserve the current visual identity and existing integrations unless the user requests a change. The three project cards are dummy data; never present them as real projects.

- Never push to a remote without explicit user approval.
- Prefer free tooling and local development. The existing public website uses Vercel Analytics, Speed Insights and Google-hosted build-time fonts; do not claim it is fully offline or remove integrations without a request. Do not add paid services or new telemetry without approval.
- Use deterministic tests for application logic and verify relevant changes with `npm run lint`, `npx tsc --noEmit`, and `./scripts/smoke.sh`; run a production build when feasible. For visual changes inspect responsive layouts and accessibility.
- Keep `STATE.md` and project context current when behavior or decisions change. Do not invent personal information or project details.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
