# protfolio-me — Current state

Personal portfolio for Sanju, built with Next.js 16 App Router, React 19, TypeScript and Tailwind CSS 4. The site is a single animated, neo-brutalist page; the three displayed project cards are **dummy data**, per the owner. Repository: `TheDAOS/protfolio-me`.

## Current behavior
- Hero, animated cat, scroll-driven technology strip, project cards, contact/social links and footer all live in `app/page.tsx`.
- `app/layout.tsx` supplies metadata, Geist fonts and existing Vercel Analytics/Speed Insights. `app/robots.ts` and `app/sitemap.ts` refer to `https://sanju.fyi`.
- Navigation anchors and contact links have destinations; the hero's MY WORK and RESUME buttons and project cards have no action. Cards show placeholder previews.
- The user has not yet specified portfolio improvements or supplied real project content.

## Baseline and follow-up
- No application test suite is currently configured. Existing verification: ESLint, TypeScript, and `scripts/smoke.sh` (local HTTP check). Production builds use `next/font/google`, which may require network access.
- Existing animations do not explicitly account for reduced-motion preferences. Review accessibility and responsive behavior as features are changed.
- Governance/context packs were retrofitted from Yggdrasil on 2026-11-10; generated graph is local and disposable.
- On 2026-11-10, dependencies were upgraded and `npm audit` reported zero vulnerabilities after a clean install. A targeted minimatch 11 override patches a development-only transitive dependency; remove it when upstream supports a patched version. ESLint 9 remains because Next lint plugins do not yet support 10; TypeScript remains on 5 because typescript-eslint requires <6.1. Lottie remains on 2 because version 3 changes its API. Reassess compatibility and advisories during future upgrades.
