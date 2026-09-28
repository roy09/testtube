# AGENTS.md — Joyee Praxis Advisory website

Instructions for AI agents (Claude and others) working in this repo.

## Who you are working with

The person asking for changes is **not technical**. They will describe what they want in plain
English ("change the phone number", "add my new article", "make the heading bigger").

- Reply in plain language. No jargon, no code in your replies unless they ask.
- Do the whole job yourself: edit, preview, check, publish. Don't hand them commands to run.
- Before publishing, briefly say what changed in words they'd use ("The About page now says …").
- If a request is ambiguous or would change facts about Anupoma (qualifications, experience,
  claims about services), ask before writing it. Never invent credentials, clients, or results.

## The standard workflow — follow this every time

1. **Open the local preview for the user first.** Almost every request should start with the site
   running in the browser pane so they can watch changes land.
   - Claude desktop app: call `preview_start` with name `site` (defined in `.claude/launch.json`).
   - Otherwise: `npm install` (first time only), then `npm run dev` → http://localhost:3000
2. **Make the change.** Copy lives in `data/content.ts` (see map below). Prefer editing content
   there over editing components.
3. **Show the result.** Navigate the preview to the affected page and let the user see it.
   Check phone width too (`resize_window` preset `mobile`) for layout changes.
4. **Verify the build:** `npm run build` must succeed with no errors. This is exactly what the
   production deploy runs.
5. **Confirm with the user** that they're happy, unless they already said "just publish it".
6. **Publish:** commit and `git push origin master`. That's it — see Deployment.
7. **Confirm it's live** a couple of minutes later (see "Checking a deploy").

## Deployment pipeline

```
push to master on GitHub ──► Cloudflare Workers Builds (Worker "testtube")
                              └─ npx wrangler deploy
                                   └─ wrangler.jsonc build.command: npm run build  → ./out
                                   └─ uploads ./out as static assets
                              ──► https://joyeepraxis.com  (+ www.joyeepraxis.com)
```

- **Pushing to `master` auto-deploys.** No manual step, no dashboard clicks. Takes ~1–3 minutes.
- Git remote: `origin` = `git@github.com:roy09/testtube.git` (SSH). Branch: `master` only.
  (A stale `website` branch exists on GitHub; ignore it.)
- Cloudflare account: Worker **`testtube`** serves the site. Fallback URL:
  https://testtube.posts-dir.workers.dev
- `wrangler.jsonc` controls the deploy. Its `name` must stay `testtube`. Its `build.command`
  builds the site because the Cloudflare dashboard has no build command set.
- The site is a **fully static export** (`output: "export"` in `next.config.ts`). There is no
  server. Do not add API routes, server actions, middleware, `next/image` optimisation, or
  anything needing a runtime — the build will fail or the feature won't work.
- **Never add `@opennextjs/cloudflare`** or delete `wrangler.jsonc`. Without that file Cloudflare
  auto-detects Next.js, runs OpenNext, and the deploy fails.

### Checking a deploy

- `curl -s https://joyeepraxis.com/ | grep -o '<title>[^<]*'` (or load it in the browser pane)
  and confirm the change is visible. Cloudflare may cache briefly; the workers.dev URL is a
  good second check.
- If the Cloudflare MCP tools are available, `workers_list` shows `testtube`'s `modified_on`
  time — it should update after each push. The MCP cannot read build logs; if a deploy fails,
  ask the user to open Cloudflare → Workers & Pages → testtube → Deployments and paste the log.
- If a deploy fails, the old version stays live. Fix, rebuild locally, push again.

## Where things live

| What the user says | Where to edit |
|---|---|
| Any wording, headings, buttons | `data/content.ts` |
| Contact email | `siteConfig.contactEmail` in `data/content.ts` (drives every "Book a Consultation" link) |
| Services (add/remove/reword) | `servicesContent.items` — icons must be a name in `IconName`; add new Lucide icons to `components/ServiceIcon.tsx` |
| New article / publication | `publicationsContent.articles` — copy the commented template; `date` is `YYYY-MM-DD`; sorted newest-first automatically |
| Bio / About text | `aboutContent.bio_paragraphs` |
| Credentials list | `homeContent.trust_badges` ("Title - Detail" or "Title (Detail)" splits into two lines) |
| Menu items | `siteConfig.navigation` (sitemap uses this list too) |
| Colours, fonts | `app/globals.css` (`@theme` tokens) and `app/layout.tsx` (Google fonts) |
| Footer disclaimer | `components/Footer.tsx` |
| Page layouts | `app/**/page.tsx`, shared pieces in `components/` |
| Favicon | `app/icon.svg` |

Stack: Next.js 16 (App Router), React 19, Tailwind CSS v4, lucide-react, TypeScript.

## Gotchas learned the hard way

- `ButtonLink` always sets `inline-flex`; passing `hidden` via `className` won't hide it
  (utility order conflict). Wrap it in a `<div className="hidden lg:block">` instead.
- Global element styles in `app/globals.css` must stay inside `@layer base`, otherwise they
  override Tailwind utilities (e.g. headings ignoring `font-sans`).
- Links to `/services#<id>` rely on each service's `id`; keep ids stable when rewording.
- Headless-Chrome screenshots below ~500px width are clipped; to check mobile, use the browser
  pane's mobile preset or render the page in a 390px iframe.

## Don't touch without asking

- **DNS / email:** joyeepraxis.com DNS is on Cloudflare. The MX, `google._domainkey`, SPF, and
  Google verification records run anupoma@joyeepraxis.com (Google Workspace). Never change them.
- The Worker name, the `master` branch, and the git remote.
- Force-pushing or rewriting history.
