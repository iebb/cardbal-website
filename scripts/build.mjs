import { mkdir, rm, copyFile, writeFile, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { locales } from '../src/locales.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const svg = (body, cls = '') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
const icons = {
  arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  globe: svg('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18"/>'),
  chevron: svg('<path d="m8 10 4 4 4-4"/>'),
  scan: svg('<path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3M7 12h10"/>'),
  train: svg('<rect x="5" y="3" width="14" height="15" rx="4"/><path d="M5 10h14M9 18l-2 3m8-3 2 3M9 14h.01M15 14h.01M12 3v7"/>'),
  wallet: svg('<path d="M19 7H5a2 2 0 0 1 0-4h13v4M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"/><path d="M21 9h-5a3 3 0 0 0 0 6h5V9ZM16 12h.01"/>'),
  cloud: svg('<path d="M7 18H6a4 4 0 0 1-1-8 7 7 0 0 1 13-2 5 5 0 0 1 1 10h-2M12 11v10m-3-3 3 3 3-3"/>'),
  check: svg('<path d="m5 12 4 4L19 6"/>'),
  plus: svg('<path d="M12 5v14M5 12h14"/>'),
  nfc: svg('<path d="M9 8a6 6 0 0 1 0 8m4-12a11 11 0 0 1 0 16M5 11a2 2 0 0 1 0 2"/>')
};
const apple = '<svg viewBox="0 0 24 28" fill="currentColor" aria-hidden="true"><path d="M17.6 4.5c1-1.2 1.7-2.8 1.5-4.5-1.5.1-3.2 1-4.3 2.2-1 1.1-1.8 2.8-1.5 4.4 1.6.1 3.2-.8 4.3-2.1ZM22.5 20.1c-.6 1.4-.9 2-1.7 3.3-1.1 1.6-2.6 3.7-4.5 3.7-1.7 0-2.1-1.1-4.4-1.1S9 27.2 7.4 27.1C5.5 27.1 4 25.2 3 23.6.1 19.2-.8 13.2 1 10.1 2.2 7.9 4.2 6.6 6.2 6.6c2.1 0 3.4 1.2 5.1 1.2 1.6 0 2.6-1.2 5.1-1.2 1.8 0 3.6 1 4.8 2.5-4.2 2.3-3.5 8.3 1.3 11Z"/></svg>';

const alternate = Object.entries(locales).map(([code, t]) => `<link rel="alternate" hreflang="${t.htmlLang}" href="https://cardb.al/${code}/">`).join('\n');
const storeButton = (t, cls = '') => `<a class="store-button ${cls}" href="https://apps.apple.com/${t.store}/app/cardbal/id6760978958" aria-label="${esc(t.download)} — App Store">${apple}<span><small>${esc(t.appStore)}</small><strong>App Store</strong></span>${icons.arrow}</a>`;
const languageLinks = (current) => Object.entries(locales).map(([code, t]) => `<a href="/${code}/" lang="${t.htmlLang}" hreflang="${t.htmlLang}" data-language="${code}"${code === current ? ' aria-current="page"' : ''}>${t.name}${code === current ? icons.check : ''}</a>`).join('');
const screenshots = ['wallet', 'edy', 'climate', 'octopus'];
const screenshotImage = (t, index, priority = false) => `<img src="/assets/screenshots/${screenshots[index]}.jpg" width="1197" height="2600" alt="${esc(t.screenshots.alts[index])}" ${priority ? 'fetchpriority="high"' : 'loading="lazy"'}>`;
const routeMap = (t) => `<div class="route-map" role="img" aria-label="${esc(t.mapLabel)}"><svg viewBox="0 0 460 240" fill="none" aria-hidden="true"><path d="M-10 52h500M-10 102h500M-10 152h500M-10 202h500M42-10v270M122-10v270M202-10v270M282-10v270M362-10v270M442-10v270" stroke="currentColor" opacity=".07"/><path d="M-10 172h94c20 0 30-20 30-40V82c0-20 20-30 40-30h60c24 0 32 20 32 40v49c0 22 18 31 37 31h151" stroke="currentColor" opacity=".16" stroke-width="22"/><path d="M-10 172h94c20 0 30-20 30-40V82c0-20 20-30 40-30h60c24 0 32 20 32 40v49c0 22 18 31 37 31h151" stroke="currentColor" stroke-width="5"/><circle cx="69" cy="172" r="9" fill="#fff" stroke="currentColor" stroke-width="4"/><circle cx="191" cy="52" r="9" fill="#fff" stroke="currentColor" stroke-width="4"/><circle cx="357" cy="172" r="9" fill="#fff" stroke="currentColor" stroke-width="4"/></svg><span class="stop stop-a">${esc(t.mapStops[0])}</span><span class="stop stop-b">${esc(t.mapStops[1])}</span><span class="stop stop-c">${esc(t.mapStops[2])}</span><span class="map-caption">${icons.train}${esc(t.mapLabel)}</span></div>`;

function render(code) {
  const t = locales[code];
  const screenPanels = screenshots.map((name, i) => `<figure class="screen-panel" id="screen-${name}" data-screen-panel="${name}"${i === 0 ? '' : ' hidden'}><a class="screenshot-device" href="/assets/screenshots/${name}.jpg">${screenshotImage(t, i, i === 0)}</a><figcaption>${esc(t.screenshots.labels[i])}</figcaption></figure>`).join('');
  const screenButtons = screenshots.map((name, i) => `<button type="button" data-screen="${name}" aria-controls="screen-${name}" aria-pressed="${i === 0}">${esc(t.screenshots.labels[i])}</button>`).join('');
  const screenshotGallery = screenshots.map((name, i) => `<figure class="gallery-shot reveal"><a class="screenshot-device" href="/assets/screenshots/${name}.jpg">${screenshotImage(t, i)}</a><figcaption><span>0${i + 1}</span>${esc(t.screenshots.labels[i])}</figcaption></figure>`).join('');
  const serviceMarkup = `<section class="service-section shell" id="service-mode"><div class="service-card reveal"><div class="service-copy"><p class="eyebrow">${esc(t.service.eyebrow)}</p><h2>${esc(t.service.title[0])}<br><span>${esc(t.service.title[1])}</span></h2><p>${esc(t.service.body)}</p><a class="text-link" href="${esc(t.service.linkUrl)}">${esc(t.service.link)}${icons.arrow}</a></div><ol class="service-steps">${t.service.steps.map(([title, body], i) => `<li><span class="service-number">0${i + 1}</span><div><h3>${esc(title)}</h3><p>${esc(body)}</p></div></li>`).join('')}</ol><p class="service-note">${icons.nfc}${esc(t.service.note)}</p></div></section>`;
  const featureMarkup = t.features.map(([title, body], i) => `<article class="feature feature-${i} reveal"><span class="feature-icon">${[icons.scan, icons.train, icons.wallet, icons.cloud][i]}</span><h3>${esc(title)}</h3><p>${esc(body)}</p>${i === 0 ? `<a class="feature-real-shot" href="/assets/screenshots/edy.jpg">${screenshotImage(t, 1)}</a>` : i === 1 ? routeMap(t) : i === 2 ? '<div class="mini-card-stack" aria-hidden="true"><img src="/assets/pasmo.png" alt="" loading="lazy"><img src="/assets/icoca.png" alt="" loading="lazy"><img src="/assets/suica.png" alt="" loading="lazy"></div>' : `<div class="backup-art" aria-hidden="true">${icons.cloud}<span>${icons.check}</span><i></i><i></i></div>`}</article>`).join('');
  const compatibilityMarkup = t.regions.map((name, i) => `<article class="region-card reveal"><div class="region-heading"><span class="region-stamp">${['JP','KR','CN','HK','MN','FR'][i]}</span><h3>${esc(name)}</h3><span class="region-dot"></span></div><p>${esc(t.regionDetails[i])}</p><div class="brand-tags">${[['Suica','PASMO','ICOCA'],['T-money','EZL','Cashbee'],['T-Union','City Union'],['Octopus'],['U-Money'],['Lignes d’Azur']][i].map((brand) => `<span>${brand}</span>`).join('')}</div></article>`).join('');
  const faqs = t.faqs.map(([q, a]) => `<details class="faq"><summary>${esc(q)}<span>${icons.plus}</span></summary><p>${esc(a)}</p></details>`).join('');
  return `<!doctype html>
<html lang="${t.htmlLang}" data-locale="${code}">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(t.title)}</title><meta name="description" content="${esc(t.description)}">
  <meta name="theme-color" content="#f7f8f2"><meta name="apple-itunes-app" content="app-id=6760978958">
  <link rel="canonical" href="https://cardb.al/${code}/">${alternate}<link rel="alternate" hreflang="x-default" href="https://cardb.al/">
  <meta property="og:type" content="website"><meta property="og:site_name" content="CardBal"><meta property="og:title" content="${esc(t.title)}"><meta property="og:description" content="${esc(t.description)}"><meta property="og:url" content="https://cardb.al/${code}/"><meta property="og:image" content="https://cardb.al/assets/social.png"><meta property="og:locale" content="${({ en: 'en_US', zh: 'zh_CN', ja: 'ja_JP', ko: 'ko_KR', mn: 'mn_MN' })[code]}">
  <meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(t.title)}"><meta name="twitter:description" content="${esc(t.description)}"><meta name="twitter:image" content="https://cardb.al/assets/social.png">
  <link rel="icon" type="image/png" href="/assets/icon.png"><link rel="apple-touch-icon" href="/assets/icon.png">
  <link rel="stylesheet" href="/assets/site.css"><script src="/assets/site.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#main">${esc(t.skip)}</a>
  <header class="header"><div class="shell header-inner">
    <a class="brand" href="/${code}/" aria-label="CardBal"><img src="/assets/icon.png" width="38" height="38" alt=""><span>cardbal<span class="brand-period">.</span></span></a>
    <nav class="main-nav" aria-label="CardBal"><a href="#experience">${esc(t.nav[0])}</a><a href="#cards">${esc(t.nav[1])}</a><a href="#faq">${esc(t.nav[2])}</a></nav>
    <div class="header-actions"><details class="language-picker"><summary aria-label="${esc(t.language)}">${icons.globe}<span>${t.name}</span>${icons.chevron}</summary><nav class="language-options" aria-label="${esc(t.language)}">${languageLinks(code)}</nav></details><a class="nav-download" href="https://apps.apple.com/${t.store}/app/cardbal/id6760978958">${esc(t.download)}${icons.arrow}</a></div>
  </div></header>
  <main id="main">
    <section class="hero shell">
      <div class="hero-copy"><p class="eyebrow"><span></span>${esc(t.eyebrow)}</p><h1>${esc(t.hero[0])}<br><em>${esc(t.hero[1])}</em></h1><p class="hero-description">${esc(t.intro)}</p><div class="hero-cta">${storeButton(t)}<a class="text-link" href="#cards">${esc(t.seeCards)}${icons.arrow}</a></div><p class="device-note">${esc(t.ios)}</p><a class="wallet-callout" href="#service-mode">${icons.nfc}${esc(t.service.heroLink)}${icons.arrow}</a><div class="hero-card-line" aria-hidden="true"><span class="line-node"></span><span class="line-node"></span><span class="line-node"></span><i></i><span>JP</span><span>KR</span><span>CN</span><span>HK</span><span>MN</span><span>FR</span></div></div>
      <div class="hero-visual">
        <div class="visual-orbit orbit-one" aria-hidden="true"></div><div class="visual-orbit orbit-two" aria-hidden="true"></div>
        <span class="visual-coordinate" aria-hidden="true">35° 39′ N · 139° 42′ E</span>
        <div class="back-device screenshot-device" aria-hidden="true"><img src="/assets/screenshots/edy.jpg" width="1197" height="2600" alt=""></div>
        <div class="hero-screens">${screenPanels}</div>
        <span class="orbit-marker marker-a" aria-hidden="true">+</span><span class="orbit-marker marker-b" aria-hidden="true">+</span>
      </div>
      <div class="demo-controls"><div class="screen-tabs" role="group" aria-label="${esc(t.demoLabel)}">${screenButtons}</div><a class="preview-note" href="#screenshots">${esc(t.preview)}</a></div>
    </section>
    <section class="quick-facts shell" aria-label="CardBal"><div>${icons.nfc}<span><strong>${esc(t.statValues[0])}</strong><small>${esc(t.statLabels[0])}</small></span></div><div>${icons.globe}<span><strong>${esc(t.statValues[1])}</strong><small>${esc(t.statLabels[1])}</small></span></div><div>${icons.wallet}<span><strong>${esc(t.statValues[2])}</strong><small>${esc(t.statLabels[2])}</small></span></div></section>
    <section class="section shell" id="experience"><div class="section-heading reveal"><p class="eyebrow">${esc(t.expEyebrow)}</p><h2>${esc(t.expTitle[0])}<br><span>${esc(t.expTitle[1])}</span></h2><p>${esc(t.expIntro)}</p></div><div class="feature-grid">${featureMarkup}</div></section>
    <section class="screenshots-section shell" id="screenshots"><div class="section-heading reveal"><p class="eyebrow">${esc(t.screenshots.eyebrow)}</p><h2>${esc(t.screenshots.title[0])}<br><span>${esc(t.screenshots.title[1])}</span></h2><p>${esc(t.screenshots.intro)}</p></div><div class="screenshot-gallery">${screenshotGallery}</div></section>
    <section class="cards-section" id="cards"><div class="shell"><div class="section-heading reveal"><p class="eyebrow">${esc(t.cardsEyebrow)}</p><h2>${esc(t.cardsTitle[0])}<br><span>${esc(t.cardsTitle[1])}</span></h2><p>${esc(t.cardsIntro)}</p></div><div class="region-grid">${compatibilityMarkup}</div><p class="compatibility-note">${icons.globe}${esc(t.cardsNote)}</p></div></section>
    <section class="section shell steps-section"><div class="section-heading reveal"><p class="eyebrow">${esc(t.stepsEyebrow)}</p><h2>${esc(t.stepsTitle)}</h2></div><div class="steps">${t.steps.map(([title, body], i) => `<article class="step reveal"><div class="step-number">0${i+1}<span>${[icons.wallet,icons.nfc,icons.check][i]}</span></div><h3>${esc(title)}</h3><p>${esc(body)}</p></article>`).join('')}</div></section>
    ${serviceMarkup}
    <section class="faq-section shell" id="faq"><div class="section-heading reveal"><p class="eyebrow">${esc(t.faqEyebrow)}</p><h2>${esc(t.faqTitle)}</h2><a class="text-link" href="https://cardbal.ieb.app/">${esc(t.reports)}${icons.arrow}</a></div><div class="faq-list">${faqs}</div></section>
    <section class="download-section shell"><div class="download-card reveal"><div><p class="eyebrow">${esc(t.endEyebrow)}</p><h2>${esc(t.endTitle[0])}<br><span>${esc(t.endTitle[1])}</span></h2><p>${esc(t.endText)}</p>${storeButton(t,'store-light')}</div><div class="download-art" aria-hidden="true"><div class="download-art-ring"></div><img src="/assets/icon.png" alt="" width="210" height="210" loading="lazy"><span>${icons.nfc}</span></div></div></section>
  </main>
  <footer class="footer shell"><div class="footer-top"><div><a class="brand" href="/${code}/"><img src="/assets/icon.png" width="32" height="32" alt=""><span>cardbal<span class="brand-period">.</span></span></a><p>${esc(t.footer)}</p></div><nav class="footer-links"><a href="https://docs.kitta.co/privacy-policy/cardbal/">${esc(t.privacy)}</a><a href="https://cardbal.ieb.app/">${esc(t.reports)}</a><a href="https://github.com/iebb/TransitICReader">${esc(t.source)}</a><a href="https://kitta.co/">Kitta ↗</a></nav></div><nav class="footer-languages" aria-label="${esc(t.language)}">${languageLinks(code)}</nav><div class="footer-bottom"><span>© 2026 Kitta Ltd</span><p>${esc(t.legal)}</p><a href="#main" aria-label="${esc(t.back)}">↑</a></div></footer>
</body></html>`;
}

await rm(output, { recursive: true, force: true });
await mkdir(path.join(output, 'assets'), { recursive: true });
const expectedKeys = Object.keys(locales.en).sort().join(',');
for (const [code, t] of Object.entries(locales)) {
  if (Object.keys(t).sort().join(',') !== expectedKeys) throw new Error(`Incomplete locale ${code}`);
  for (const key of ['nav','features','regions','regionDetails','faqs','steps','routes']) {
    if (t[key].length !== locales.en[key].length) throw new Error(`Incomplete ${key} in ${code}`);
  }
  for (const key of ['screenshots', 'service']) {
    if (Object.keys(t[key]).sort().join(',') !== Object.keys(locales.en[key]).sort().join(',')) throw new Error(`Incomplete ${key} in ${code}`);
  }
  if (t.screenshots.labels.length !== screenshots.length || t.screenshots.alts.length !== screenshots.length || t.service.steps.length !== 3) throw new Error(`Incomplete screenshot or Service Mode content in ${code}`);
  await mkdir(path.join(output, code), { recursive: true });
  await writeFile(path.join(output, code, 'index.html'), render(code));
}
await writeFile(path.join(output, 'index.html'), render('en'));
await writeFile(path.join(output, '404.html'), `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CardBal — 404</title><link rel="stylesheet" href="/assets/site.css"><body><main class="not-found shell"><a class="brand" href="/"><img src="/assets/icon.png" alt="" width="48" height="48">cardbal.</a><p class="eyebrow">404</p><h1>${locales.en.notFound}</h1>${Object.entries(locales).map(([code,t])=>`<p lang="${t.htmlLang}"><a href="/${code}/">${esc(t.back)} →</a></p>`).join('')}</main></body></html>`);
for (const asset of ['site.css','site.js']) await copyFile(path.join(root, 'src', asset),path.join(output, 'assets', asset));
for (const brand of ['suica','tmoney','pasmo','icoca']) await copyFile(path.join(root, 'src/assets', `${brand}.png`),path.join(output, 'assets', `${brand}.png`));
await mkdir(path.join(output, 'assets/screenshots'), { recursive: true });
for (const name of screenshots) await copyFile(path.join(root, 'src/assets/screenshots', `${name}.jpg`), path.join(output, 'assets/screenshots', `${name}.jpg`));
await copyFile(path.join(root, 'src/icon.png'), path.join(output,'assets/icon.png'));
await copyFile(path.join(root, 'src/social.png'), path.join(output,'assets/social.png'));
await writeFile(path.join(output, '_headers'), `/*\n  X-Content-Type-Options: nosniff\n  X-Frame-Options: DENY\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()\n  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self'; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'; upgrade-insecure-requests\n/assets/*\n  Cache-Control: public, max-age=3600\n`);
await writeFile(path.join(output, '_redirects'), '/zh-cn/ /zh/ 301\n/zh-hans/ /zh/ 301\n');
await writeFile(path.join(output,'robots.txt'),'User-agent: *\nAllow: /\nSitemap: https://cardb.al/sitemap.xml\n');
await writeFile(path.join(output,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${Object.keys(locales).map(code=>`<url><loc>https://cardb.al/${code}/</loc>${Object.entries(locales).map(([lang,t])=>`<xhtml:link rel="alternate" hreflang="${t.htmlLang}" href="https://cardb.al/${lang}/"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="https://cardb.al/"/></url>`).join('')}</urlset>`);
const hash = createHash('sha256');
for (const file of ['src/locales.mjs','src/site.css','src/site.js','scripts/build.mjs']) hash.update(await readFile(path.join(root,file)));
for (const name of screenshots) hash.update(await readFile(path.join(root, 'src/assets/screenshots', `${name}.jpg`)));
await writeFile(path.join(output,'build-info.json'),JSON.stringify({site:'CardBal',hosting:'Cloudflare Pages',locales:Object.keys(locales),revision:hash.digest('hex').slice(0,16)},null,2)+'\n');
console.log(`Built ${Object.keys(locales).length} languages into ${output}. Static assets only; no Functions or Worker bundle.`);
