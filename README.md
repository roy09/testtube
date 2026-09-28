# Joyee Praxis Advisory website

Static marketing site built with Next.js (App Router), Tailwind CSS v4 and Lucide icons.

## Editing copy

All text lives in [`data/content.ts`](data/content.ts). Pages only read from it.

- **Contact email:** set `siteConfig.contactEmail`. Every "Book a Compliance Review" button is a `mailto:` link to it.
- **Articles:** add entries to `publicationsContent.articles`. They are sorted newest first automatically.
  To move to a CMS or markdown later, change `getArticles()` in [`lib/site.ts`](lib/site.ts).

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site written to ./out
npm start        # serve ./out locally
```

The contents of `out/` can be uploaded to any static host (Netlify, Vercel, Cloudflare Pages, S3, GitHub Pages).
