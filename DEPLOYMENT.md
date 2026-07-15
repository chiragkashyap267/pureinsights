# Deploying Pure Insights to Hostinger

This is a static site (compiled React). Nothing server-side is required — just
upload the built files. Two easy ways:

---

## Option A — Upload the built files (simplest, no Node on the server)

1. On your computer, build the site:
   ```bash
   npm install      # first time only
   npm run build
   ```
   This creates a **`dist/`** folder.

2. Log in to **Hostinger → hPanel → Files → File Manager** (or use FTP).

3. Open **`public_html`** and delete the default `index.html` if present.

4. Upload **everything _inside_ `dist/`** into `public_html`
   (the `index.html`, the `assets/` folder, `favicon.svg`, and `images/`).
   > Upload the *contents* of `dist`, not the `dist` folder itself.

5. Visit your domain — done. 🎉

### Updating later
Change content/images → `npm run build` again → re-upload the new `dist/` contents.

---

## Option B — Git / auto-deploy (if you use Hostinger's Git or a CI)

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18+ (works on 20/22 too)

---

## Custom domain & HTTPS
Hostinger issues a free SSL certificate automatically. In hPanel enable
**SSL** for the domain and turn on **Force HTTPS**.

## Notes
- The site uses **relative asset paths** (`base: "./"` in `vite.config.ts`), so it
  works whether it's at the domain root or in a subfolder.
- Navigation is anchor-based (single page), so **no `.htaccess` rewrite rules
  are needed.**
- Google Fonts load from Google's CDN. If you prefer fully self-hosted fonts
  for max speed/offline, ask and I'll bundle them locally.
