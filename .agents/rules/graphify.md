---
trigger: always_on
description: Consult the graphify knowledge graph at graphify-out/ for codebase and architecture questions.
---

## graphify

When `graphify-out/graph.json` exists in this project:
- For codebase or architecture questions, first run `graphify query "<question>"` or `graphify path "<A>" "<B>"` / `graphify explain "<node>"` instead of blind grepping.
- If `graphify-out/wiki/index.md` exists, navigate it before reading raw files.
- Read `graphify-out/GRAPH_REPORT.md` for broad architecture review, god nodes, and community structure.
- After modifying code files in a session, run `graphify update .` to keep the AST graph current.
