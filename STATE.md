# protfolio-me — Current state

Personal portfolio for Sanju, built with Next.js 16 App Router, React 19, TypeScript and Tailwind CSS 4. The site is a single animated, neo-brutalist page; the selected projects are Aetherius and UP77 (in progress), and Mara (prototype). Repository: `TheDAOS/protfolio-me`.

Working branch: `pe-2`, locally fast-forwarded to `main` on 2026-11-10. Respect branch protection; use the required review workflow.

## Current behavior
- Hero, animated cat, scroll-driven technology strip, project cards, About section, contact/social links and footer all live in `app/page.tsx`.
- `app/layout.tsx` supplies metadata, Geist fonts and existing Vercel Analytics/Speed Insights. `app/robots.ts` and `app/sitemap.ts` refer to `https://sanju.fyi`.
- Navigation anchors and contact links have destinations; the hero's MY WORK and RESUME buttons have no action. Aetherius links to its public source; Mara and UP77 are labeled as private repositories.
- SEO metadata uses Sanju as the professional identity and Frontend Developer as the role, with a canonical homepage URL and ProfilePage/Person structured data. Project descriptions reflect reviewed implementation without claiming completed products.
- The sitemap omits an artificial build-time modification date.

## Baseline and follow-up
- The desktop technology-strip fallback has deterministic tests (`node --test tests/tech-strip-fallback.test.mjs`). Other verification includes ESLint, TypeScript, and `scripts/smoke.sh` (local HTTP check). Production builds use `next/font/google`, which may require network access.
- The technology strip uses native scroll-driven animation with a desktop fallback for browsers without scroll timelines and respects reduced-motion preferences; other existing animations do not explicitly account for them. Review accessibility and responsive behavior as features are changed.
- Governance/context packs were retrofitted from Yggdrasil on 2026-11-10; generated graph is local and disposable.
- On 2026-11-10, dependencies were upgraded and `npm audit` reported zero vulnerabilities after a clean install. A targeted minimatch 11 override patches a development-only transitive dependency; remove it when upstream supports a patched version. ESLint 9 remains because Next lint plugins do not yet support 10; TypeScript remains on 5 because typescript-eslint requires <6.1. Lottie remains on 2 because version 3 changes its API. Reassess compatibility and advisories during future upgrades.

- Project cards include real Aetherius/UP77 captures and a Mara pipeline diagram, with full-size preview links. Capture provenance is in `docs/PROJECT_VISUALS.md`.
