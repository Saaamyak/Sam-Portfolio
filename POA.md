# Plan of Action: Portfolio Redesign

> A living checklist. Tick items as they finish and add new ones at the bottom of the right phase.
> **Keep it current** together with [SESSION_CONTEXT.md](SESSION_CONTEXT.md).

_Last updated: 2026-10-07 (evening)_

## Goal

Replace the 2025 portfolio with a site that presents Samyak Goel as a **Senior Security Engineer, detection & response**. It should meet Apple's level of craft, keep the mountain motif, and tell the truth about depth versus breadth. It must work for everyone in security, from L1 analysts to CISOs.

## Phase 0: Groundwork ✅

- [x] Explore the old site and the GitHub repo (they are identical)
- [x] Capture Samyak's profile, evidence and constraints in `PRODUCT.md`
- [x] Decide the stack: plain HTML/CSS/JS on Netlify

## Phase 1: Direction ✅

- [x] Direction round → **Apple keynote page** (black stage, huge type, one idea per scroll)
- [x] Quality bar → apple.com/vision-pro, /macbook-pro, /privacy
- [x] Direction contract written to `.impeccable/surfaces/public-index-html.md`

## Phase 2: Content ✅

- [x] Hero: name, "Detection & response.", one-line lede, writing and resume links
- [x] Statement that lights up word by word as you scroll
- [x] Evidence: 36+ XQL detections · ~90% PowerShell FP reduction · 1 XDR bypass taken apart · 0→1 SOC IR process
- [x] Depth: three pillars on an elevation profile (Core / Established / Emerging) + "still ahead" list
- [x] Work: F1 Infotech (Beltron), Swan Solutions (MCX), B.Tech LPU
- [x] Field notes: XDR bypass, Hunting the noise, SOC process from zero
- [x] Writing: 19 Medium titles in three shelves
- [x] Credentials with Verify links
- [x] Contact: email, LinkedIn, Medium, resume

## Phase 3: Build ✅

- [x] `public/index.html`, `public/assets/site.css`, `public/assets/site.js`
- [x] SVG mountain ridges with parallax and a reduced-motion fallback
- [x] Removed chatbot, old pages, jQuery/anime.js, unused images
- [x] `netlify.toml`: publish `public/`, redirects for old URLs, security headers (CSP, HSTS, nosniff, frame-deny, etc.)
- [x] Social share image `og.png`, favicon
- [x] New resume wired in; `/files/resume.pdf` redirects to it

## Phase 4: Review ✅

- [x] Desktop and mobile captures
- [x] Automated design check (clean; documented false positives suppressed)
- [x] Independent review, pass 1 → 8 fixes applied (contact layout, portrait, kicker labels, writing links, OG image, field-note card, one-line lede, mobile nav)
- [x] Independent review, pass 2 → 6 resolved, 2 partial; 2 regressions found and fixed
- [x] New portrait `SAM.jpeg` wired in
- [x] Write `DESIGN.md` + `.impeccable/design.json` (design system record)

## Phase 5: Ship ⏳

- [x] Security pass (secrets, metadata, links, headers) + security.txt, 404, robots/sitemap
- [x] Commit branch `redesign`
- [ ] Push branch (blocked: GitHub login on the Mac needs refreshing)
- [ ] Open PR: https://github.com/Saaamyak/Sam-Portfolio/compare/main...redesign
- [ ] Netlify deploy preview → Samyak reviews on phone and desktop
- [ ] Check headers at securityheaders.com (target: A)
- [ ] Merge to `main` → live at samyakportfolio.netlify.app

## Later / nice to have

- [ ] Renew `security.txt` Expires before 2027-10-07

- [ ] Dark-background portrait (or cut-out) so the photo blends into the black stage
- [ ] Make the mountain in the XDR field-note card more visible

- [ ] Self-hosted display font so non-Apple devices keep the same look
- [ ] Pinned (sticky) number moments, MacBook Pro style
- [ ] Richer ridge art: haze between layers, rim light at dawn
