# Muhammad Shahroze — Android Engineer

A multi-page, repository-managed portfolio built with Next.js 16, React 19, Tailwind CSS 4, Framer Motion, and Vercel Analytics. It includes 16 project stories, six maintenance records, three engineering articles, a selectable-text résumé PDF, and a serverless contact flow.

## Local development

```bash
npm install
copy .env.example .env.local
npm run dev
```

The site is available at `http://localhost:3000`.

## Validation

```bash
npm run test:content
npm run lint
npm run build
```

`npm run check` runs all three. The content validator checks counts, unique slugs, source links, metric dates, local media, alt text, and billing-module confidentiality rules.

## Content and media

- Canonical portfolio content: `src/app/data/content.ts`
- Public Google Play media: `public/apps/`
- Original hero artwork: `public/visuals/android-systems-hero.png`
- Social preview: `public/og.png`
- Downloadable résumé: `public/Muhammad-Shahroze-Android-Engineer.pdf`

## Contact configuration

Copy `.env.example` to `.env.local` and configure:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`
- `TURNSTILE_ALLOWED_HOSTNAMES`
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

The contact Route Handler validates Zod fields, a honeypot, Turnstile action/hostname, and then sends through Resend. It does not write submissions to a database or filesystem.

## Vercel release

Configure the variables independently for Development, Preview, and Production. Use a verified Resend sender, include the production and preview hostnames in `TURNSTILE_ALLOWED_HOSTNAMES`, validate the production-domain form, and then promote the deployment.
