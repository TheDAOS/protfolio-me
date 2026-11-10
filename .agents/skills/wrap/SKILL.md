---
name: wrap
description: Summarizes session actions, updates STATE.md and AI memory, runs verification gates, and creates an atomic local commit. Use when ending a session or wrapping up a milestone.
---

# /wrap — Session Wrap-Up & State Persistence

When the user asks to wrap up the session (`/wrap`):

1. **Run Verification Gates**:
   - If `./scripts/smoke.sh` exists, run it to verify the build is healthy.
   - If `./scripts/lint-architecture.sh` exists, run it to confirm zero boundary violations.
2. **Update State & Memory**:
   - Update `STATE.md` with completed milestones, current status, and any new technical debt.
   - If `docs/AI_MEMORY.md` exists, record any new codebase conventions learned.
   - If `wiki/sessions/` exists, append a session summary to `wiki/sessions/YYYY-MM-DD.md`.
3. **Refresh Knowledge Graph**:
   - If `graphify-out/graph.json` exists, run `graphify update .` (AST-only, zero token cost).
   - If `tools/context/graph.py` exists, run `python3 tools/context/graph.py`.
4. **Atomic Local Commit**:
   - Stage changes with `git add` and create a descriptive Conventional Commit (`git commit`).
   - **NEVER run `git push`** unless explicitly instructed by the user.
