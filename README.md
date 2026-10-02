# CardBal website

The public CardBal landing page for **cardb.al**, hosted as a static **Cloudflare Pages** project named `cardbal-website` in the **Kitta Labs** account. Repository: [iebb/cardbal-website](https://github.com/iebb/cardbal-website). Production and default branch: `master`.

## Build and preview

```sh
npm run build
npm run dev
```

Open `http://127.0.0.1:4173`. Node.js 22 or later is required; `.node-version` selects Node 22 for Pages builds. The build has no npm dependencies. All website assets are included in this repository: card artwork in `src/assets/` and the app icon in `src/icon.png`.

## Automatic deployment

Cloudflare Pages connects directly to this GitHub repository and builds pushes to `master`. The Pages build settings are:

- Production branch: `master`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root
- Preview deployments: enabled for other branches

Push website changes to `master` to publish them. Cloudflare's native Git integration handles builds and deployment; there are no GitHub Actions workflows or deploy-hook secrets. The output is static `dist/` files, with no `functions/` directory or `_worker.js`. The report API remains at `cardbal.ieb.app`.

## Languages and content

Each language has a complete, indexable static page, including its demo, FAQ, metadata and alternate links:

- `/en/` — English
- `/zh/` — Simplified Chinese
- `/ja/` — Japanese
- `/ko/` — Korean
- `/mn/` — Mongolian (Cyrillic)

The root includes the complete English page. When JavaScript is enabled, it chooses a supported browser language or a previously selected language. Explicit language URLs always take priority. Language selection remains available without JavaScript, as do the main content, App Store links, and expandable FAQs.

Edit `src/locales.mjs`, `src/site.css`, and `src/site.js`. The build rejects incomplete locale keys or section counts. The card preview uses illustrative sample data, and its scan animation does not read NFC in the browser. Supported-card copy is based on the app and its live App Store listing (`6760978958`); the website's Mongolian localization does not claim the native app is localized in Mongolian.

The site uses local assets and system fonts, without third-party scripts or cookies. Its privacy link points to the app's published privacy policy, including Firebase Analytics and optional contributions.

## Custom domain

Attach `cardb.al` under the Pages project's **Custom domains**, with the zone in Kitta Labs. Point the registrar to the zone's assigned Cloudflare nameservers and create the apex CNAME to the project's actual `.pages.dev` hostname. Do not replace email, TXT, or unrelated DNS records. Check both domain validation and public HTTPS after activation.

The original direct-upload project is `cardbal.pages.dev`; native Git deployment uses `cardbal-website.pages.dev` because Cloudflare does not allow converting a direct-upload project into a Git-connected project. The intended custom domain is `cardb.al`. During the initial 2026-10-02 deployment its registrar delegated to `park1.uwsdns.com` and `park2.uwsdns.com`, with Pages validation pending (`CNAME record not set`). Recheck DNS and domain validation before claiming the custom domain is live.
