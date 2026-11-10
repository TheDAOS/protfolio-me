# Architecture

The Next.js App Router serves a single portfolio page. `app/layout.tsx` wraps it with global CSS, Google Geist fonts, SEO/Open Graph metadata and Vercel Analytics/Speed Insights. `app/page.tsx` is a client component containing navigation, hero, Lottie cat, scroll-driven skills strip, three placeholder project cards, contact/social links and footer. `app/globals.css` defines Tailwind 4 theme colors and neo-brutalist border/shadow utilities. `public/lottie/cat.json` provides the animation; `public/og-image.jpg` is the social preview.

`app/robots.ts` and `app/sitemap.ts` generate crawler routes using `https://sanju.fyi`. No backend, database, or content management system is present in the repository. Project content is currently hard-coded in the page. The MY WORK and RESUME buttons and project cards currently have no linked action.

Use `scripts/smoke.sh` for a local HTTP smoke check and the package scripts for development, linting and production builds. Google fonts may make production builds dependent on network access. `graphify-out/`, if generated, is a disposable local code graph.
