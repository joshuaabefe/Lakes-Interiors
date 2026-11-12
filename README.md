# Lakes Interiors website

Next.js 14 (App Router) · TypeScript · Tailwind · Lucide.

## Run

`npm install` → `npm run dev` (http://localhost:3000).

## Site content

- Update business details, service descriptions, service page copy and galleries, and navigation in `data/site.ts`.
- Each service row opens a dedicated page with a hero photo, nine gallery photos, and an enquiry link.
- The site includes a complete set of project pages, image galleries, service pages, and enquiry flows. Project photography currently uses Unsplash images; replace the image paths in `data/site.ts` with Lakes Interiors photos when they are ready.
- Phone and WhatsApp settings live in `data/site.ts`; email and WhatsApp are currently configured there.
- Privacy and terms are linked in the footer. Review them whenever the business, hosting, analytics, or enquiry process changes.
- Before launch, confirm the operator's registered legal name and service address, add a privacy contact channel, and document the hosting provider, security cookies, log retention, and data locations. Recheck whether any non-essential analytics or embeds have been added; obtain consent before loading them.
- Confirm the studio has rights to its logo, copy, and any photos showing recognizable art, brands, or people. Unsplash's license does not itself grant separate rights to those elements.
- For paid projects, use a written agreement that explains scope, deliverables, timing, total price, payment milestones, cancellation charges, and refund/remedy terms before work begins.

## Images

Local images can be placed in `public/` and referenced by their site path. Unsplash images are allowed through the Next.js image configuration in `next.config.mjs`.

## Fonts

Cormorant Garamond and Inter are loaded with `next/font` at build time, so the first build needs internet access.

## Projects
Edit the `projects` array in `data/site.ts` to update project titles, descriptions, scope, and image paths. Add image files to `public/projects/` and reference them with a site path (e.g. `/projects/kitchen-1.jpg`). Optional `before`/`after` images add a before-and-after section on that project's page.

## Before launch: site address
Set `NEXT_PUBLIC_SITE_URL` to the live domain (see `.env.example`; on Vercel add it under Project Settings → Environment Variables). It is used for the sitemap, robots file and social share image.
Favicon: `app/icon.png`. Social share image: `app/opengraph-image.png` (replace with a real project photo at 1200×630 when available).
