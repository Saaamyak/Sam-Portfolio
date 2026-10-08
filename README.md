# Samyak Goel · Portfolio

Personal site of Samyak Goel, Senior Security Engineer (detection & response).

**Live:** https://samyakportfolio.netlify.app

## Stack

- Plain HTML, CSS and JavaScript. No framework, no build step, no third-party scripts.
- Hosted on Netlify. Every push to `main` deploys; pull requests get a Deploy Preview.
- The site lives in [`public/`](public/). Netlify publishes only that folder.

## Security

Configured in [`netlify.toml`](netlify.toml):

- Strict Content Security Policy (`'self'` only, no inline scripts or styles)
- HSTS, `X-Frame-Options: DENY`, `nosniff`, Referrer-Policy, Permissions-Policy, COOP/CORP
- [`security.txt`](public/.well-known/security.txt) for responsible disclosure

## Structure

```
public/
  index.html            single page
  assets/               CSS, JS, SVG mountain layers, images
  files/                resume (PDF)
  .well-known/          security.txt
netlify.toml            publish dir, redirects, security headers
SESSION_CONTEXT.md      project context and decision log
POA.md                  plan of action
```

© 2026 Samyak Goel. All rights reserved.
